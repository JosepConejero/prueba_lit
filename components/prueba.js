import { css } from "lit";

export const devuelveNum = (num) => num * 2;

export const mas_css = css`
  :host {
    display: block;
    border: 1px solid black;
  }
  .parr {
    color: red;
  }
  .parr:hover {
    color: blue;
  }
  .externo {
    color: #f09900;
  }
`;
