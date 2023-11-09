import { LitElement, css, html } from "lit";

const personajes = ["a", "b", "c"];

export class MyElement extends LitElement {
  static properties = {
    version: {},
  };

  constructor() {
    super();
    this.version = "STARTING";
  }

  static styles = css`
    :host {
      display: block;
      border: 1px black solid;
      color: blue;
    }
    p {
      margin: 0;
      background-color: red;
      padding: 0.5em;
    }
  `;

  render() {
    return html`
      <p>Welcome to the Lit tutorial!</p>
      <p>This is the ${this.version} code.</p>
      <p>FUNCIONA, CAUEN TOT</p>
      <p>${personajes.map((personaje) => `<p>${personaje}</p>`)}</p>
    `;
  }
}
customElements.define("my-element", MyElement);
