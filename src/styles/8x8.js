import { css, unsafeCSS } from 'lit-element';

const character = (i) => {
  const x = i % 16 * 9;
  const y = Math.floor(i / 16) * 9;
  return `
    span.c${i} {
      background-position: -${x}px -${y}px;
    }
  `
};

const characters = (new Array(256)).fill(0).map((_, i) => character(i)).join('');

export default css`
  ::slotted(*) {
    display: none;
  }

  span {
    display: inline-block;
    width: 8px;
    height: 8px;
    font-size: 6px;
    color: transparent;
    background: transparent url('/images/IBM_VGA_8x8.png') 0 0 no-repeat;
  }

  ${unsafeCSS(characters)}
`;
