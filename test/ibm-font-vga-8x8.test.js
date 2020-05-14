import { html, fixture, expect } from '@open-wc/testing';
import '../src/romfont-ibm-vga-8x8';

const component = (text) => (
  html`<romfont-ibm-vga-8x8 text=${text}>
    <p>${text}</p>
  </romfont-ibm-vga-8x8>`
);

describe('<romfont-ibm-vga-8x8>', () => {
  it('renders the slot contents hidden', async () => {
    const text = 'Hello world';
    const el = await fixture(component(text));
    const slotted_el = el.querySelector('p');

    expect(slotted_el).to.exist;
    expect(getComputedStyle(slotted_el).display).to.equal('none');
  });

  it('renders the text property as spans with character code classes', async () => {
    const text = 'Aa';
    const el = await fixture(component(text));
    const spans = el.shadowRoot.querySelectorAll('span');

    expect(spans.length).to.equal(2);
    text.split('').forEach((char, i) => {
      expect(spans[i].classList.contains(`c${char.charCodeAt(0)}`)).to.be.true;
    });
  });

  it('renders HTML entities when their corresponding characters exist in the text property', async () => {
    const text = ' ';
    const el = await fixture(component(text));

    expect(el.shadowRoot.querySelector('span').innerHTML).to.match(/&nbsp;/);
  });
});
