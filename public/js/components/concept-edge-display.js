var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'https://unpkg.com/lit@3.1.0/index.js?module';
import { customElement, property } from 'https://unpkg.com/lit@3.1.0/decorators.js?module';
let ConceptEdgeDisplay = class ConceptEdgeDisplay extends LitElement {
    constructor() {
        super(...arguments);
        this.fromNodeText = '';
        this.toNodeText = '';
        this.label = '';
    }
    render() {
        return html `
      <span><strong>${this.fromNodeText}</strong> → <strong>${this.toNodeText}</strong></span>
      ${this.label ? html ` (<span class="label">${this.label}</span>)` : ''}
    `;
    }
};
ConceptEdgeDisplay.styles = css `
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
__decorate([
    property({ type: String })
], ConceptEdgeDisplay.prototype, "fromNodeText", void 0);
__decorate([
    property({ type: String })
], ConceptEdgeDisplay.prototype, "toNodeText", void 0);
__decorate([
    property({ type: String })
], ConceptEdgeDisplay.prototype, "label", void 0);
ConceptEdgeDisplay = __decorate([
    customElement('concept-edge-display')
], ConceptEdgeDisplay);
export { ConceptEdgeDisplay };
//# sourceMappingURL=concept-edge-display.js.map