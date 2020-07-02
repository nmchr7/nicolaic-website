export const pageview = (url) => {
  window.gtag('config', process.env.GA_ID, {
    page_path: url,
  });
};

export const GAEvent = ({
  action,
  category,
  label,
  value,
  nonInteraction = false,
}) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
    nonInteraction,
  });
};
