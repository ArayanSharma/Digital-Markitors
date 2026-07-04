import { useEffect, useState } from "react";
import { dayKey, lastNDays } from "../lib/time";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

const TREND_DAYS = 30;

async function fetchJson(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

function buildLeadsTrend(contacts) {
  const days = lastNDays(TREND_DAYS);
  const counts = new Map(days.map((d) => [dayKey(d), 0]));

  contacts.forEach((contact) => {
    if (!contact.createdAt) return;
    const key = dayKey(new Date(contact.createdAt));
    if (counts.has(key)) counts.set(key, counts.get(key) + 1);
  });

  return days.map((d) => ({
    date: dayKey(d),
    label: d.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    leads: counts.get(dayKey(d)) || 0,
  }));
}

function buildServiceBreakdown(contacts) {
  const counts = new Map();
  contacts.forEach((contact) => {
    const service = (contact.service || "General Enquiry").trim() || "General Enquiry";
    counts.set(service, (counts.get(service) || 0) + 1);
  });

  const sorted = [...counts.entries()].sort((a, b) => b[1] - a[1]);
  const top = sorted.slice(0, 4).map(([name, value]) => ({ name, value }));
  const restTotal = sorted.slice(4).reduce((sum, [, value]) => sum + value, 0);

  if (restTotal > 0) top.push({ name: "Other", value: restTotal });
  return top;
}

function buildStatusCounts(contacts) {
  const base = { New: 0, Read: 0, Resolved: 0 };
  contacts.forEach((contact) => {
    const status = contact.status || "New";
    base[status] = (base[status] || 0) + 1;
  });
  return base;
}

function countInWindow(items, startDaysAgo, endDaysAgo) {
  const now = Date.now();
  const start = now - startDaysAgo * 86400000;
  const end = now - endDaysAgo * 86400000;
  return items.filter((item) => {
    if (!item.createdAt) return false;
    const t = new Date(item.createdAt).getTime();
    return t >= start && t < end;
  }).length;
}

export function useDashboardData() {
  const [state, setState] = useState({ loading: true, error: null, data: null });

  useEffect(() => {
    let active = true;

    async function load() {
      const [contactsRes, blogsRes, testimonialsRes, careersRes, caseStudiesRes] =
        await Promise.all([
          fetchJson(`${API}/api/contact`),
          fetchJson(`${API}/api/blogs`),
          fetchJson(`${API}/api/testimonials`),
          fetchJson(`${API}/api/career`),
          fetchJson(`${API}/api/casestudies`),
        ]);

      if (!active) return;

      const contacts = Array.isArray(contactsRes?.contacts) ? contactsRes.contacts : [];
      const blogs = Array.isArray(blogsRes?.blogs) ? blogsRes.blogs : [];
      const testimonials = Array.isArray(testimonialsRes?.testimonials)
        ? testimonialsRes.testimonials
        : [];
      const careers = Array.isArray(careersRes?.careers) ? careersRes.careers : [];
      const caseStudies = Array.isArray(caseStudiesRes?.caseStudies)
        ? caseStudiesRes.caseStudies
        : [];

      const newThisWeek = countInWindow(contacts, 7, 0);
      const priorWeek = countInWindow(contacts, 14, 7);
      const weekDelta = priorWeek === 0 ? (newThisWeek > 0 ? 100 : 0) : Math.round(((newThisWeek - priorWeek) / priorWeek) * 100);

      setState({
        loading: false,
        error: null,
        data: {
          stats: {
            totalLeads: contacts.length,
            newThisWeek,
            weekDelta,
            totalBlogs: blogs.length,
            totalCaseStudies: caseStudies.length,
            totalTestimonials: testimonials.length,
            totalCareers: careers.length,
          },
          leadsTrend: buildLeadsTrend(contacts),
          serviceBreakdown: buildServiceBreakdown(contacts),
          statusCounts: buildStatusCounts(contacts),
          recentLeads: contacts.slice(0, 6),
        },
      });
    }

    load();
    return () => {
      active = false;
    };
  }, []);

  return state;
}
