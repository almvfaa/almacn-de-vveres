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
    h1 {
      color: var(--text-color, #333);
      font-size: 2.5em;
      margin-bottom: 20px;
    }
    p {
      color: var(--text-color, #333);
      font-size: 1.1em;
      max-width: 600px;
      line-height: 1.6;
    }
    button {
      padding: 15px 30px;
      border-radius: 30px;
      background-color: #3f51b5;
      color: white;
      font-size: 1.3em;
      border: none;
      cursor: pointer;
      box-shadow: 0 5px 15px rgba(0,0,0,0.2);
      transition: all 0.3s ease;
      margin-top: auto;
    }
    button:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.3);
    }
  `;

  render() {
    return html`
      <h1>Explorador de Problemas Interactivos</h1>
      <p>Descubre y analiza problemas complejos a través de líneas de tiempo y mapas conceptuales.</p>
      <button @click="${this._onComenzarClick}">Comenzar</button>
    `;
  }

  private _onComenzarClick() {
    this.dispatchEvent(new CustomEvent('start-app', { bubbles: true, composed: true }));
  }
}
