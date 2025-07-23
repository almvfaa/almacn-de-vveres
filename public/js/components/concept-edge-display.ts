import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('concept-edge-display')
export class ConceptEdgeDisplay extends LitElement {
  @property({ type: String })
  fromNodeText = '';

  @property({ type: String })
  toNodeText = '';

  @property({ type: String })
  label = '';

  static styles = css`
    :host {
      display: block;
      font-size: 0.95em;
      color: var(--text-color, #34495e);
      margin: 5px 0;
      padding: 8px 12px;
      background-color: var(--border-color, #ecf0f1);
      border-radius: 6px;
      transition: background-color 0.2s ease;
    }

    :host(:hover) {
        background-color: #e0e6e8;
    }

    .label {
        font-style: italic;
        opacity: 0.8;
    }
  `;

  render() {
    return html`
      <span><strong>${this.fromNodeText}</strong> → <strong>${this.toNodeText}</strong></span>
      ${this.label ? html` (<span class="label">${this.label}</span>)` : ''}
    `;
  }
}
