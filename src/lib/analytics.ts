declare global {
  interface Window {
    gtag: any;
  }
}

interface GAEvent {
  action: String;
  category: String;
  label: String;
  value: String;
}

export const pageview = (url: String) => {
  window.gtag('config', process.env.GA_ID, {
    page_path: url,
  });
};

export function GAEvent({ action, category, label, value }: GAEvent) {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
}
