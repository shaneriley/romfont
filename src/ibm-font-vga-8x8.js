import { LitElement, html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import styles from './styles/8x8';

const entities = {
  ' ': '&nbsp;'
};

class IBMFontVGA8x8 extends LitElement {
  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      text: { type: String }
    };
  }

  get textToFont() {
    return this.text.split('').map((char) => {
      const printed_char = entities[char] ? unsafeHTML(entities[char]) : char;
      return html`<span class="c${char.charCodeAt(0)}">${printed_char}</span>`;
    });
  }

  render() {
    return html`
      ${this.textToFont}
      <slot></slot>
    `;
  }
}

customElements.define('ibm-font-vga-8x8', IBMFontVGA8x8);
