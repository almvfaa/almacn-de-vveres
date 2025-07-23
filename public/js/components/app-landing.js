var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
let AppLanding = class AppLanding extends LitElement {
    render() {
        return html `
      <h1>Explorador de Problemas Interactivos</h1>
      <p>Descubre y analiza problemas complejos a través de líneas de tiempo y mapas conceptuales.</p>
      <button @click="${this._onComenzarClick}">Comenzar</button>
    `;
    }
    _onComenzarClick() {
        this.dispatchEvent(new CustomEvent('start-app', { bubbles: true, composed: true }));
    }
};
AppLanding.styles = css `
    :host {
      flex: 1; /* Ocupa todo el espacio vertical disponible */
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between; /* Empuja el botón hacia abajo */
      padding: 50px 20px;
      text-align: center;
      /* Los estilos de fondo general deben ir en el body o app-container */
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
      background-color: var(--primary-color, #3f51b5);
      color: white;
      font-size: 1.3em;
      border: none;
      cursor: pointer;
      box-shadow: 0 5px 15px rgba(0,0,0,0.2);
      transition: all 0.3s ease;
      margin-top: auto; /* Empuja el botón hacia abajo */
    }
    button:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.3);
    }
  `;
AppLanding = __decorate([
    customElement('app-landing')
], AppLanding);
export { AppLanding };
//# sourceMappingURL=app-landing.js.map