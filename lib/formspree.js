export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xrpzdlrj';

export async function submitToFormspree({
  name,
  email,
  company = '',
  service = 'General Inquiry',
  message = '',
  source = 'website',
}) {
  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      company,
      inquiry_type: service,
      message,
      _subject: `Paudelon LLC — ${service}`,
      _replyto: email,
      form_source: source,
    }),
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.error || 'Unable to send message. Please try again.');
  }

  return response.json();
}
