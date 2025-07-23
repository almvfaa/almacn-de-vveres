var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'https://unpkg.com/lit@3.1.0/index.js?module';
import { customElement, property } from 'https://unpkg.com/lit@3.1.0/decorators.js?module';
let TimelineEvent = class TimelineEvent extends LitElement {
    constructor() {
        super(...arguments);
        this.date = '';
        this.title = '';
        this.description = '';
    }
    render() {
        return html `
      <div class="event-date">${this.date}</div>
      <h4 class="event-title">${this.title}</h4>
      <p class="event-description">${this.description}</p>
    `;
    }
};
TimelineEvent.styles = css `
    :host {
      display: flex;
      border-left: 4px solid var(--primary-color, #3498db);
      padding: 15px;
      margin-bottom: 15px;
      background-color: var(--panel-bg, #ffffff);
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.05);
      flex-direction: column;
      gap: 5px;
    }
    .event-date {
      font-size: 0.9em;
      color: var(--text-color, #34495e);
      opacity: 0.8;
    }
    .event-title {
      font-size: 1.2em;
      font-weight: 600;
      color: var(--primary-color, #3498db);
      margin: 0;
    }
    .event-description {
      font-size: 1em;
      color: var(--text-color, #34495e);
      line-height: 1.5;
      margin: 0;
    }
  `;
__decorate([
    property({ type: String })
], TimelineEvent.prototype, "date", void 0);
__decorate([
    property({ type: String })
], TimelineEvent.prototype, "title", void 0);
__decorate([
    property({ type: String })
], TimelineEvent.prototype, "description", void 0);
TimelineEvent = __decorate([
    customElement('timeline-event')
], TimelineEvent);
export { TimelineEvent };
//# sourceMappingURL=timeline-event.js.map