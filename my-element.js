import { LitElement, css, html } from "lit";
import "./components/form-input";

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
      /* display: block;
      border: 1px black solid;
      color: blue; */
    }
    p {
      /*      margin: 0;
      background-color: red;
      padding: 0.5em; */
    }
  `;

  render() {
    return html`
      <div></div>
      <form-input></form-input>
    `;
  }
}
customElements.define("my-element", MyElement);
