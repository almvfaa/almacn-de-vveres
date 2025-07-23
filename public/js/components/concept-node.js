var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'https://unpkg.com/lit@3.1.0/index.js?module';
import { customElement, property } from 'https://unpkg.com/lit@3.1.0/decorators.js?module';
let ConceptNode = class ConceptNode extends LitElement {
    constructor() {
        super(...arguments);
        this.nodeId = '';
        this.text = '';
        this.x = 0;
        this.y = 0;
    }
    render() {
        this.style.setProperty('--x-pos', `${this.x}px`);
        this.style.setProperty('--y-pos', `${this.y}px`);
        return html `${this.text}`;
    }
};
ConceptNode.styles = css `
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
__decorate([
    property({ type: String })
], ConceptNode.prototype, "nodeId", void 0);
__decorate([
    property({ type: String })
], ConceptNode.prototype, "text", void 0);
__decorate([
    property({ type: Number })
], ConceptNode.prototype, "x", void 0);
__decorate([
    property({ type: Number })
], ConceptNode.prototype, "y", void 0);
ConceptNode = __decorate([
    customElement('concept-node')
], ConceptNode);
export { ConceptNode };
//# sourceMappingURL=concept-node.js.map