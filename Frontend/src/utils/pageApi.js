export const getApiBase = () =>
  import.meta.env.VITE_API_URL || "http://localhost:5000";

export async function loadPageContent(slug) {
  let res;
  try {
    res = await fetch(`${getApiBase()}/api/pages/${slug}`, {
      cache: "no-store",
      headers: { "Cache-Control": "no-cache" },
    });
  } catch (err) {
    throw new Error("Could not reach the server. Showing default content.", { cause: err });
  }
  if (res.status === 404) return null;
  if (!res.ok) {
    throw new Error(`Failed to load saved content (${res.status}). Showing default content.`);
  }
  const json = await res.json();
  console.debug("loadPageContent:", slug, json);
  return json;
}

export async function savePageContent(slug, payload) {
  const res = await fetch(`${getApiBase()}/api/pages/${slug}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Server error: ${res.status}`);
  return res.json();
}

export async function uploadFile(file) {
  const API = getApiBase();
  const fd = new FormData();
  fd.append("file", file);
  const res = await fetch(`${API}/api/upload`, {
    method: "POST",
    body: fd,
  });

  // Debugging info to help identify upload problems
  console.debug("uploadFile: status", res.status, "url", `${API}/api/upload`);

  let data;
  const contentType = res.headers.get("content-type") || "";
  try {
    if (contentType.includes("application/json")) {
      data = await res.json();
    } else {
      const text = await res.text();
      // attempt to parse JSON-like text
      try {
        data = JSON.parse(text);
      } catch (e) {
        data = { message: text };
      }
    }
  } catch (err) {
    const text = await res.text().catch(() => "");
    console.error("uploadFile: failed to parse response", err, text);
    throw new Error(`Upload failed: ${text}`, { cause: err });
  }

  console.debug("uploadFile: response", data);

  if (!res.ok) {
    throw new Error(data.message || `Upload failed (${res.status})`);
  }
  if (!data.url) {
    throw new Error(data.message || "Upload succeeded but no URL returned");
  }

  return data.url.startsWith("http") ? data.url : `${API}${data.url}`;
}
