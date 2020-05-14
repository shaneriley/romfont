import { css, unsafeCSS } from 'lit-element';
import { fonts } from '../fonts';

const character = (width, height, i) => {
  const x = (i % 16) * (width + 1);
  const y = Math.floor(i / 16) * (height + 1);
  return `
    span.c${i} {
      background-position: -${x}px -${y}px;
    }
  `;
};

const characters = ({ width, height }) => (
  (new Array(256)).fill(0).map((_, i) => character(width, height, i)).join('')
);

export default (name) => {
  const params = fonts[name.replace(/^ROMFont_/, '')];
  if (!params) { return css``; }
  params.width = params.width || 8;
  return css`
    ::slotted(*) {
      display: none;
    }

    span {
      display: inline-block;
      width: ${unsafeCSS(params.width)}px;
      height: ${unsafeCSS(params.height)}px;
      font-size: 6px;
      color: transparent;
      background: transparent url('/images/${unsafeCSS(params.image)}') 0 0 no-repeat;
    }

    ${unsafeCSS(characters(params))}
  `;
};
