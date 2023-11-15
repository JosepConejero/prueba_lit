import {LitElement, css, html} from 'lit';

export class LoginBox extends LitElement {
  static properties = {
    version: {},
    w: {type: Number},
    h: {type: Number}, 
    prop: {},
  };

  constructor() {
    super();
    this.version = 'FINISHING';
    this.w = 400;
    this.h = 400;
    this.prop = 400;
  };



  static styles = css`
  @media all and (min-width: 420px){
    .login{
        width:100%;
       /*  height:auto; */
       /*  margin-left:20px; */
         background-color: grey;
        border: 1px red solid;
    }
}

  @media all and (max-width: 420px){
    .login{
        width:100%;
       /*  height:auto; */
       /*  margin-left:20px; */
         background-color: lightgrey;
        border: 5px black solid;
    }
}


  :host {
    /* background-color: grey; */
    /* padding: 0.5em; */
  }

/* body {background-color: yellow;} */

  .login {
   /*  margin: auto; */
   width: ${prop}px;
   height: 700px;
    /* background-color: yellow;  */

    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    /* max-width: 50%; */
   /*  text-align: center;
 */
  }
  
 
`;

  render() {
    return html`
    <div class="login"></div>
    `;
  }
}
customElements.define('login-box', LoginBox);


//width: ${this.w}px;
//height: ${this.h}px;