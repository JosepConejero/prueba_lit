import { LitElement, css, html } from "lit";
import "./components/login-box";

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
    }

    main {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      width: 100%;
      height: 100vh;
      background-color: lightgrey;
    }
  `;

  render() {
    return html`
      <main>
        <login-box></login-box>
      </main>
    `;
  }
}
customElements.define("my-element", MyElement);

// w="300" h="700"
