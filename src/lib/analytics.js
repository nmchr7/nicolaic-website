export function pageview(url) {
  // eslint-disable-next-line no-undef
  window.gtag('config', process.env.GA_ID, {
    page_path: url,
  });
}

export function GAEvent({
  action,
  category,
  label,
  value,
  nonInteraction = false,
}) {
  // eslint-disable-next-line no-undef
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
    non_interaction: nonInteraction,
  });
}
