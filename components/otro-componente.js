import {LitElement, css, html} from 'lit';

export class OtroComponente extends LitElement {
  static properties = {
    version: {},
  };

  constructor() {
    super();
    this.version = 'FINISHING';
  }

  static styles = css`
  p {
    margin: 0;
    background-color: red;
    padding: 0.5em;
  }
`;

  render() {
    return html`
    <p>MÁS COSAS</p>
    `;
  }
}
customElements.define('otro-componente', OtroComponente);