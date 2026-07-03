import blog1 from "../assets/blog-1.webp";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

/* ───────────────────────────────────────────
   Helper — normalise image URLs from backend
   ─────────────────────────────────────────── */
export const normalizeMediaUrl = (url) => {
  if (!url || typeof url !== "string") return url;
  if (/^https?:\/\//.test(url)) return url;
  if (url.startsWith("/")) return `${API}${url}`;
  if (url.startsWith("uploads/")) return `${API}/${url}`;
  if (url.startsWith("./uploads/")) return `${API}/${url.slice(2)}`;
  if (url.startsWith("../uploads/")) return `${API}/${url.slice(3)}`;
  return url;
};

/* ───────────────────────────────────────────
   Helper — generate a URL-friendly slug
   ─────────────────────────────────────────── */
export const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/* ───────────────────────────────────────────
   Default blog data (used when API is offline)
   ─────────────────────────────────────────── */
export const defaultBlogs = [
  {
    id: "1",
    slug: "8-reasons-why-you-should-invest-in-seo",
    image: blog1,
    title: "8 Reasons Why You Should Invest In SEO For Your Business",
    desc: "Search Engine Optimization (SEO) is the process of optimizing online content so that it ranks higher on search engines like Google and Bing.",
    content: `Search Engine Optimization (SEO) is the process of optimizing online content so that it ranks higher on search engines like Google and Bing. In today's digital-first world, having a strong online presence isn't optional — it's essential.

Here are eight compelling reasons why investing in SEO is one of the smartest business decisions you can make:

1. Increased Organic Traffic — SEO drives qualified traffic to your website without the recurring cost of paid ads. Over time, a well-optimized site can bring in thousands of visitors every month.

2. Better User Experience — SEO isn't just about search engines. Modern SEO practices improve site speed, navigation, and mobile responsiveness, which all contribute to a better user experience.

3. Higher Credibility & Trust — Websites that rank on the first page of Google are perceived as more credible. Investing in SEO helps build authority in your industry through quality content, backlinks, and technical optimization.

4. Cost-Effective Marketing — Compared to PPC or social media advertising, SEO provides a higher long-term return on investment. Once you rank, organic traffic is essentially free.

5. Local Visibility — For businesses with a physical presence, local SEO ensures you appear in "near me" searches and Google Maps results, driving foot traffic to your store.

6. Competitive Advantage — If your competitors are investing in SEO and you're not, you're falling behind. Ranking higher than your competitors means capturing their potential customers.

7. Measurable Results — With tools like Google Analytics and Search Console, you can track every aspect of your SEO performance — from traffic and rankings to conversions and revenue.

8. Long-Term Growth — Unlike paid advertising that stops the moment you cut the budget, SEO builds compounding value. The content you create today can generate traffic for years.`,
    author: "Digital Markitors",
    date: "June 15, 2025",
    category: "SEO",
  },
  {
    id: "2",
    slug: "boost-your-business-with-the-right-seo",
    image: blog1,
    title: "Boost Your Business With The Right SEO Strategy",
    desc: "Technology has transformed businesses and SEO helps brands reach more customers online with better visibility.",
    content: `Technology has transformed businesses and SEO helps brands reach more customers online with better visibility. In the modern marketplace, your website is often the first interaction a potential customer has with your brand.

A robust SEO strategy goes beyond just keyword stuffing. It encompasses technical optimization, content marketing, link building, and user experience design. Here's how the right SEO strategy can transform your business:

Understanding Your Audience — Keyword research reveals what your potential customers are searching for. This insight helps you create content that addresses their needs and positions your brand as the solution.

Technical Foundation — A fast, mobile-friendly, and properly structured website is the backbone of good SEO. Search engines reward sites that provide an excellent technical experience.

Content That Converts — Creating valuable, informative content isn't just good for rankings — it builds trust with your audience. Blog posts, guides, and case studies demonstrate your expertise and move prospects through the sales funnel.

Building Authority — Earning backlinks from reputable websites signals to search engines that your content is trustworthy. A strategic link-building campaign can dramatically improve your domain authority.

The key is consistency. SEO is not a one-time effort but an ongoing process that compounds over time. Businesses that commit to a long-term SEO strategy consistently outperform those relying solely on paid advertising.`,
    author: "Digital Markitors",
    date: "June 8, 2025",
    category: "SEO",
  },
  {
    id: "3",
    slug: "zero-click-searches-and-seo",
    image: blog1,
    title: "Examining Relationship Between Zero-Click Searches & SEO",
    desc: "Zero-click searches are changing SEO strategies and businesses must adapt to modern search behavior.",
    content: `Zero-click searches are changing SEO strategies and businesses must adapt to modern search behavior. A zero-click search occurs when Google answers the user's query directly on the search results page, eliminating the need to click through to a website.

Studies show that nearly 65% of Google searches now end without a click. This trend has significant implications for businesses that rely on organic traffic.

What Are Zero-Click Searches? — These are searches where the answer is displayed directly in the search results through featured snippets, knowledge panels, local packs, or direct answer boxes. Common examples include weather queries, calculations, definitions, and local business information.

Impact on Traditional SEO — While zero-click searches might seem threatening, they actually present new opportunities. Appearing in a featured snippet or knowledge panel increases brand visibility, even if the user doesn't click through to your site.

Adapting Your Strategy — To thrive in the zero-click era, focus on:
- Optimizing for featured snippets by structuring content with clear Q&A formats
- Building brand recognition so users seek out your site directly
- Targeting long-tail keywords that still drive click-through traffic
- Creating in-depth content that goes beyond what a snippet can answer

The Future of Search — As AI-powered search evolves with tools like Google's AI Overviews, the landscape will continue to shift. Businesses that adapt early will have a competitive advantage.

Rather than viewing zero-click searches as a threat, forward-thinking marketers see them as an opportunity to build brand authority and capture attention at the very top of the funnel.`,
    author: "Digital Markitors",
    date: "May 28, 2025",
    category: "SEO",
  },
  {
    id: "4",
    slug: "social-media-marketing-trends-2025",
    image: blog1,
    title: "Top Social Media Marketing Trends You Need To Follow In 2025",
    desc: "Social media continues to evolve rapidly. Stay ahead of the competition by leveraging these key trends shaping digital marketing in 2025.",
    content: `Social media continues to evolve rapidly. Stay ahead of the competition by leveraging these key trends shaping digital marketing in 2025.

1. Short-Form Video Dominance — Platforms like Instagram Reels, TikTok, and YouTube Shorts continue to dominate user attention. Brands that create engaging short-form video content see significantly higher engagement rates.

2. AI-Powered Content Creation — Artificial intelligence tools are revolutionizing how brands create and distribute content. From generating captions to optimizing posting schedules, AI helps marketers work smarter.

3. Social Commerce Expansion — The line between social media and e-commerce continues to blur. In-app shopping features on Instagram, Facebook, and TikTok make it easier than ever for users to purchase directly from social platforms.

4. Authenticity Over Perfection — Consumers are increasingly drawn to authentic, unfiltered content. Brands that show their human side — behind-the-scenes content, employee stories, and real customer experiences — build stronger connections.

5. Community-First Approach — Building engaged communities around your brand is more valuable than accumulating followers. Private groups, Discord servers, and community-focused content create loyal brand advocates.

6. Influencer Marketing Evolution — Micro and nano influencers continue to deliver better ROI than celebrity endorsements. Their smaller, more engaged audiences trust their recommendations more.

Adapting to these trends requires a willingness to experiment and a commitment to understanding your audience. The brands that succeed in 2025 will be those that embrace change and put their customers first.`,
    author: "Digital Markitors",
    date: "May 20, 2025",
    category: "Social Media",
  },
  {
    id: "5",
    slug: "complete-guide-to-ppc-advertising",
    image: blog1,
    title: "A Complete Guide To PPC Advertising For Small Businesses",
    desc: "Pay-Per-Click advertising can deliver immediate results for small businesses. Learn how to create effective campaigns that maximize your ROI.",
    content: `Pay-Per-Click advertising can deliver immediate results for small businesses. Learn how to create effective campaigns that maximize your ROI.

What Is PPC? — PPC (Pay-Per-Click) is a digital advertising model where you pay each time someone clicks on your ad. Google Ads is the most popular PPC platform, but Facebook, Instagram, LinkedIn, and Bing also offer robust PPC options.

Why PPC Works for Small Businesses — Unlike SEO, which takes months to show results, PPC can drive traffic to your website within hours of launching a campaign. This makes it ideal for businesses that need immediate visibility.

Setting Up Your First Campaign:
- Define clear goals (leads, sales, brand awareness)
- Research your target keywords thoroughly
- Create compelling ad copy that speaks to your audience
- Design landing pages that convert visitors into customers
- Set a realistic budget and bidding strategy

Common Mistakes to Avoid:
- Targeting too broad an audience
- Neglecting negative keywords
- Sending traffic to your homepage instead of dedicated landing pages
- Not tracking conversions properly
- Ignoring mobile users

Measuring Success — Track key metrics including click-through rate (CTR), cost per click (CPC), conversion rate, and return on ad spend (ROAS). Regular monitoring and optimization are essential for PPC success.

When combined with a strong SEO strategy, PPC creates a powerful digital marketing engine that drives both immediate and long-term results.`,
    author: "Digital Markitors",
    date: "May 12, 2025",
    category: "PPC",
  },
  {
    id: "6",
    slug: "importance-of-website-design-for-business",
    image: blog1,
    title: "Why Professional Website Design Is Crucial For Your Business",
    desc: "Your website is your digital storefront. Learn why investing in professional web design can transform your online presence and drive growth.",
    content: `Your website is your digital storefront. Learn why investing in professional web design can transform your online presence and drive growth.

First Impressions Matter — Research shows that users form an opinion about a website within 50 milliseconds. A professional, well-designed website instantly builds credibility and trust with potential customers.

Mobile Responsiveness — With over 60% of web traffic coming from mobile devices, having a responsive website isn't optional. A mobile-friendly design ensures your site looks and functions perfectly on every device.

User Experience (UX) — Great web design goes beyond aesthetics. It creates intuitive navigation, clear call-to-actions, and a seamless user journey that guides visitors toward conversion.

SEO Benefits — Search engines favor well-structured, fast-loading websites. Professional web design incorporates SEO best practices from the ground up, giving your site a competitive advantage in search rankings.

Brand Consistency — Your website should reflect your brand identity through consistent colors, typography, imagery, and messaging. This cohesion builds brand recognition and trust.

Conversion Optimization — A professionally designed website is built with conversion in mind. Strategic placement of CTAs, testimonials, and trust signals can dramatically improve your conversion rates.

Security & Performance — Professional developers implement security best practices and performance optimization techniques that protect your business and provide a fast browsing experience.

Investing in professional web design is not an expense — it's an investment that pays dividends through increased traffic, higher conversions, and stronger brand perception.`,
    author: "Digital Markitors",
    date: "May 5, 2025",
    category: "Web Design",
  },
];

/* ───────────────────────────────────────────
   Fetch helpers (backend-ready)
   ─────────────────────────────────────────── */

/**
 * Fetch all blogs. Falls back to defaultBlogs when the API is unreachable.
 */
export const fetchAllBlogs = async () => {
  try {
    const res = await fetch(`${API}/api/blogs`);
    if (!res.ok) return defaultBlogs;
    const data = await res.json();
    const items = Array.isArray(data.blogs) ? data.blogs : [];
    if (items.length === 0) return defaultBlogs;
    return items.map((item) => ({
      id: item._id || item.id,
      slug: item.slug || slugify(item.title),
      image: normalizeMediaUrl(item.image) || blog1,
      title: item.title,
      desc: item.description,
      content: item.content || item.description,
      link: item.buttonLink || `/blog/${item.slug || slugify(item.title)}`,
      buttonText: item.buttonText || "Read More",
      author: item.author || "Digital Markitors",
      date: item.date || "Recent",
      category: item.category || "Blog",
    }));
  } catch {
    return defaultBlogs;
  }
};

/**
 * Find a single blog by slug from the full list.
 */
export const fetchBlogBySlug = async (slug) => {
  const blogs = await fetchAllBlogs();
  return blogs.find((b) => b.slug === slug) || null;
};
