import {LitElement, css, html} from 'lit';

export class MyElement extends LitElement {
  static properties = {
    version: {},
  };

  constructor() {
    super();
    this.version = 'STARTING';
  }

  static styles = css`
  :host {
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
    `;
  }
}
customElements.define('my-element', MyElement);
