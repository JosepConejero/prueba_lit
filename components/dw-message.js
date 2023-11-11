import { LitElement, css, html } from "lit";

export class DwMessage extends LitElement {
  static properties = {
    version: {},
  };

  static styles = css`
    .fondo {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 500px;
      height: 300px;
      background-color: lightgrey;
    }
    .tarjeta {
      width: 470px;
      height: 270px;
      background-color: red;
      border: 3px solid black;
      border-radius: 20px;
    }
  `;

  constructor() {
    super();
    this.version = "FINISHING";
  }

  render() {
    return html`
      <div class="fondo">
        <div class="tarjeta"></div>
      </div>
    `;
  }
}
customElements.define("dw-message", DwMessage);
