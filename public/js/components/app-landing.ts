import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-landing')
export class AppLanding extends LitElement {
  static styles = css`
    :host {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 50px 20px;
      text-align: center;
    }
    img {
      max-width: 250px;
      height: auto;
      margin-bottom: 30px;
    }
    h1 {
      color: var(--text-color, #333);
      font-size: 2.8em;
      margin-bottom: 20px;
    }
    p {
      color: var(--text-color, #333);
      font-size: 1.2em;
      max-width: 700px;
      line-height: 1.7;
      margin-bottom: 40px;
    }
    button {
      padding: 18px 40px;
      border-radius: 35px;
      background-color: #4CAF50; /* Softer green */
      color: white;
      font-size: 1.5em;
      border: none;
      cursor: pointer;
      box-shadow: 0 6px 20px rgba(0,0,0,0.25);
      transition: all 0.3s ease;
      margin-top: auto;
    }
    button:hover {
      transform: translateY(-5px) scale(1.02);
      box-shadow: 0 10px 25px rgba(0,0,0,0.35);
    }
  `;

  render() {
    return html`
      <div>
        <img src="https://fundacionhcgdl.org/wp-content/uploads/Logo-Hospitales-Guadalajara.png" alt="Logo de Hospitales Guadalajara">
        <h1>Explorador de Problemas Interactivos</h1>
        <p>Descubre y analiza problemas complejos a través de líneas de tiempo y mapas conceptuales.</p>
      </div>
      <button @click="${this._onComenzarClick}">Comenzar</button>
    `;
  }

  private _onComenzarClick() {
    this.dispatchEvent(new CustomEvent('start-app', { bubbles: true, composed: true }));
  }
}
