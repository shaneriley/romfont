import * as FontClasses from './rom-font';

Object.keys(FontClasses).forEach((className) => {
  const elementName = className
    .replace(/^ROMFont_/, '')
    .replace(/_/g, '*')
    .replace(/-{1,}/g, '*')
    .split('*')
    .join('-')
    .toLowerCase();
  customElements.define(`romfont-${elementName}`, FontClasses[className]);
});
