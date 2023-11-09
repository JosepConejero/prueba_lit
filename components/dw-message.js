import {LitElement, html} from 'lit';

export class DwMessage extends LitElement {
  static properties = {
    version: {},
  };

  constructor() {
    super();
    this.version = 'FINISHING';
  }

  render() {
    return html`
    <p>TAMBIÉN VA ESTO, ES FLIPANTE</p>
    <p>VERSIÓN PACABÁ ${this.version}</p>
       
    `;
  }
}
customElements.define('dw-message', DwMessage);