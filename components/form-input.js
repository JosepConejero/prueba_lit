import { html, css, LitElement } from "lit";
//import "form-input.css";
import { devuelveNum, mas_css } from "./prueba";

export class FormInput extends LitElement {
  static properties = {
    variab1: { type: Number },
    variab2: {},
    variab3: {},
  };

  static styles = mas_css; /* css`
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
  `; */

  aumentarBorde() {
    this.variab1 += 1;
    this.variab2 += "açò també cambia";
    this.variab3 = devuelveNum(this.variab1);
  }

  constructor() {
    super();
    this.variab1 = 23;
    this.variab2 = "maededeusenyor";
  }

  render() {
    console.log("pasa por aquí");
    return html`
      <p class="parr" @click=${this.aumentarBorde}>casundena ${this.variab2}</p>
      <div class="externo">PRUEBA RECUADRADA ${this.variab1}</div>
      <div class="externo">${this.variab3}</div>
    `;
  }
}

customElements.define("form-input", FormInput);
