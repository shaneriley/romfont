# ROMFont components

WebComponents to render ROM fonts extracted from BIOS from
[https://github.com/spacerace/romfont](https://github.com/spacerace/romfont).
The generated PNG maps are used as background images for each converted font.

Each component renders the text transparently for aaccessibility and to allow
text selection. A default slot is included to render any alternate content for
user agents with JavaScript disabled.

## Usage

Import one of the font family components and render the component with a `text`
property representing the text you'd like to render. Add an optional child
element for alternate content for non-JS agents.

```html
<ibm-font-vga-8x8 text="Hi there. This is the actual text that will appear!">
  <p>This is the fallback content.</p>
</ibm-font-vga-8x8>
```
