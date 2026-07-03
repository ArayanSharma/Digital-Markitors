import { useEffect, useState } from "react";
import { loadPageContent, getApiBase } from "../utils/pageApi";

/**
 * Fetches admin-editable content for a public page and falls back silently
 * to null (callers should fall back to hardcoded defaults) on 404 or error.
 */
export function usePageContent(pageId) {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    loadPageContent(pageId)
      .then((data) => {
        if (!cancelled) setContent(data || null);
      })
      .catch(() => {
        if (!cancelled) setContent(null);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [pageId]);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") console.debug("usePageContent", pageId, { content, loading });
  }, [pageId, content, loading]);

  return { content, loading };
}

/** Resolves an image value that may be a relative /uploads path into a full URL. */
export function resolveImage(url) {
  if (!url || typeof url !== "string") return url;
  if (/^https?:\/\//.test(url) || url.startsWith("data:")) return url;
  const API = getApiBase();
  if (url.startsWith("/")) return `${API}${url}`;
  if (url.startsWith("uploads/")) return `${API}/${url}`;
  return url;
}
