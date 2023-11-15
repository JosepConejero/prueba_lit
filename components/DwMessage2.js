import { LitElement, css, html } from "lit";

export class DwMessage extends LitElement {
  static properties = {
    version: {},
  };

  static styles = css`
  * {
  outline: 1px solid red;
}
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
    .lineas-texto {
      display: flex;
      direction: column;
    }
    .nombre {
      padding-left: 20px;
      font-size: 1.5em;
      font-weight: bold;
    }
    header {
      height
    }
  `;

  constructor() {
    super();
    this.version = "FINISHING";
  }

  render() {
    return html`
      <div class="fondo">
        <div class="tarjeta">
          <div class="lineas-texto">
            <header>
              <p class="nombre">Chris Mills</p>
            </header>
            <div>
              <p></p>
            </div>
            <p></p>
          </div>
        </div>
      </div>
    `;
  }
}
