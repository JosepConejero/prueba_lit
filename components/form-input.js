import { html, css, LitElement } from "lit";
//import "form-input.css";
import { devuelveNum, mas_css } from "./prueba";
import "./dw-message";

const { log } = console;

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

  decrementaBorde() {
    this.variab1 -= 1;
    this.variab2 = "";
    this.variab3 = 0;
  }

  constructor() {
    super();
    this.variab1 = 23;
    this.variab2 = "maededeusenyor";
  }

  render() {
    log("pasa por aquí");

    return html`
      <p class="parr" @click=${this.aumentarBorde}>casundena ${this.variab2}</p>
      <button @click=${this.aumentarBorde}>AUMENTA</button>
      <button @click=${this.decrementaBorde}>DECREMENTA</button>
      <div class="externo">PRUEBA RECUADRADA ${this.variab1}</div>
      <div class="externo">${this.variab3}</div>
      <dw-message></dw-message>
    `;
  }
}

customElements.define("form-input", FormInput);
