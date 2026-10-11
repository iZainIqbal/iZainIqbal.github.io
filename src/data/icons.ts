// Line icons for areas of work. 24x24 viewBox, drawn as strokes in currentColor.
export const LINE_ICONS: Record<string, string> = {
  web: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01"/>',
  api: '<rect x="3" y="4" width="18" height="7" rx="1.5"/><rect x="3" y="13" width="18" height="7" rx="1.5"/><path d="M7 7.5h.01M7 16.5h.01"/>',
  mobile:
    '<rect x="7" y="2.5" width="10" height="19" rx="2"/><path d="M11 18h2"/>',
  payments:
    '<rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="M2.5 10h19M6 15h4"/>',
  ai: '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 16l.6 1.4L21 18l-1.4.6L19 20l-.6-1.4L17 18l1.4-.6z"/>',
  seo: '<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.4-4.4"/>',
  data: '<ellipse cx="12" cy="6" rx="7.5" ry="3"/><path d="M4.5 6v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6M4.5 12v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6"/>',
};
