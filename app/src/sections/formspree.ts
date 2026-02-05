export const FORMSPREE_ENDPOINT_DEFAULT = "https://formspree.io/f/xvzzkjwd";

export function getFormspreeEndpoint(): string {
  try {
    const saved = localStorage.getItem("mm_formspree_endpoint");
    if (saved && /^https:\/\/formspree\.io\/f\//.test(saved)) return saved;
  } catch {}
  return FORMSPREE_ENDPOINT_DEFAULT;
}

export async function postToFormspree(form: HTMLFormElement): Promise<boolean> {
  const endpoint = getFormspreeEndpoint();
  const data = new FormData(form);

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    return res.ok;
  } catch {
    return false;
  }
}

