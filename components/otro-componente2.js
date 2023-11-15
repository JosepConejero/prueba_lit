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
  @media all and (max-width: 600px){
    div{
        width:100%;
        height:auto;
        margin-left:20px;
        background-color: green;
        border: 5px black solid;
    }
}
  p {
    margin: 0;
    background-color: red;
    padding: 0.5em;
  }
  p:hover {
    background-color: yellow;
    margin: 5px;
    padding: 2em;
  }
`;

  render() {
    return html`
    <p>MÁS COSAS</p>
    <div><span>PRUEBA PARA EL MEDIA QUERY</span></div>
    `;
  }
}
customElements.define('otro-componente', OtroComponente);