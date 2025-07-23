import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('concept-node')
export class ConceptNode extends LitElement {
  @property({ type: String })
  nodeId = '';

  @property({ type: String })
  text = '';

  @property({ type: Number })
  x = 0;

  @property({ type: Number })
  y = 0;

  static styles = css`
    :host {
      display: inline-block;
      position: absolute;
      left: 50%; /* Default position if x,y are not set */
      top: 50%;  /* Default position if x,y are not set */
      background-color: var(--secondary-color, #2ecc71);
      color: white;
      padding: 10px 15px;
      border-radius: 25px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      font-weight: bold;
      cursor: pointer;
      transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
      transform: translate(-50%, -50%); /* Center the node */
    }

    :host([style*="left"]) {
        left: var(--x-pos, 50%);
        top: var(--y-pos, 50%);
    }

    :host(:hover) {
      transform: translate(-50%, -50%) scale(1.05);
      box-shadow: 0 6px 12px rgba(0,0,0,0.3);
    }
  `;

  render() {
    this.style.setProperty('--x-pos', `${this.x}px`);
    this.style.setProperty('--y-pos', `${this.y}px`);
    return html`${this.text}`;
  }
}
