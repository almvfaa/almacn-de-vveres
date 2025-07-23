import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('timeline-event')
export class TimelineEvent extends LitElement {
  @property({ type: String })
  date = '';

  @property({ type: String })
  title = '';

  @property({ type: String })
  description = '';

  static styles = css`
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

  render() {
    return html`
      <div class="event-date">${this.date}</div>
      <h4 class="event-title">${this.title}</h4>
      <p class="event-description">${this.description}</p>
    `;
  }
}
