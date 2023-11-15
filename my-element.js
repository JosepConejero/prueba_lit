import { LitElement, css, html } from "lit";
<<<<<<< HEAD
import "./components/login-box"
=======
import "./components/form-input";
>>>>>>> c733191c243132993e7f33f62f14d642134609c8

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
<<<<<<< HEAD
      display: block;
    }
    
    main {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      width: 100%;
      height: 100vh;
      background-color: lightgrey;
=======
      /* display: block;
      border: 1px black solid;
      color: blue; */
    }
    p {
      /*      margin: 0;
      background-color: red;
      padding: 0.5em; */
>>>>>>> c733191c243132993e7f33f62f14d642134609c8
    }
   
  `;

  render() {
    return html`
<<<<<<< HEAD
      <main>
        <login-box></login-box>
      </main>
=======
      <div></div>
      <form-input></form-input>
>>>>>>> c733191c243132993e7f33f62f14d642134609c8
    `;
  }
}
customElements.define("my-element", MyElement);

// w="300" h="700"