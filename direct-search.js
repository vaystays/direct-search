/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, css } from 'lit-element';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
let DirectSearch = class DirectSearch extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * The name to say "Hello" to.
         */
        this.hideLocation = false;
        this.url = 'https://cxstaging.getdirect.io/listings/search/';
        this.numberOfGuests = 1;
        this.startDate = `${new Date().getFullYear()}-${this.pad(new Date().getMonth() + 1)}-${new Date().getDate()}`;
        this.endDate = `${new Date().getFullYear()}-${this.pad(new Date().getMonth() + 1)}-${new Date().getDate() + 1}`;
        /**
         * The number of times the button has been clicked.
         */
        this.count = 0;
    }
    render() {
        return html `
      <form action="${this.url}">
        <section .hidden="${this.hideLocation}" focus>
          <label for="loc">Location</label>
          <slot name="location"></slot>
        </section>
        <section>
          <label for="startDate">Check-In</label>
          <input id="startDate" name="check-in" required type="date" value="${this.startDate}" tabindex="2" />
        </section>
        <section>
          <label for="endDate">Check-Out</label>
          <input id="startDate" name="check-out" required type="date" value="${this.endDate}" tabindex="3" />
        </section>
        <section>
          <label for="numberOfGuests">Guests</label>
          <input id="numberOfGuests" name="guests" required type="number" min="1" max="100" value="${this.numberOfGuests}" tabindex="4" />
        </section>
        <section>
          <button type="submit" tabindex="5">Search Listings</button>
        </section>
      </form>

      <!-- <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button> -->
    `;
    }
    _onClick() {
        this.count++;
    }
    foo() {
        return 'foo';
    }
    pad(n) {
        return n < 10 ? '0' + n : n;
    }
};
DirectSearch.styles = css `
    :host {
      display: flex;
      flex-direction: column;
      padding: 16px;
      margin: 16px;
      box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.4);
      border-radius: 3px;
    }

    label,
    select,
    input,
    section,
    button {
      font-size: 16px;
      font-family: sans-serif;
    }

    section {
      display: flex;
      flex-direction: column;
    }

    label {
      font-weight: 600;
      padding: 6px 0px 3px 0px;
    }

    select,
    input,
    slot {
      padding: 6px;
      font-size: 16px;
    }

    input {
      border: 1px solid #666;
    }

    select {
      display: block;

      font-weight: 700;
      color: #444;
      line-height: 1.3;
      padding: 0.6em 1.4em 0.5em 0.8em;
      width: 100%;
      max-width: 100%;
      box-sizing: border-box;
      margin: 0;
      border: 1px solid #aaa;
      box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
      border-radius: 0.5em;
      -moz-appearance: none;
      -webkit-appearance: none;
      appearance: none;
      background-color: #fff;
      background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
        linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
      background-repeat: no-repeat, repeat;
      background-position: right 0.7em top 50%, 0 0;
      background-size: 0.65em auto, 100%;
    }

    section {
      margin-bottom: 10px;
    }

    button {
      border: 2px solid #666;
      padding: 12px 24px;
      font-weight: bold;
      font-size: 18px;
      text-transform: uppercase;
    }

    [hidden] {
      display: none;
    }

    section button {
      margin-top: 15px;
    }
  `;
__decorate([
    property({ type: Boolean })
], DirectSearch.prototype, "hideLocation", void 0);
__decorate([
    property({ type: String })
], DirectSearch.prototype, "url", void 0);
__decorate([
    property({ type: Number })
], DirectSearch.prototype, "numberOfGuests", void 0);
__decorate([
    property({ type: String })
], DirectSearch.prototype, "startDate", void 0);
__decorate([
    property({ type: String })
], DirectSearch.prototype, "endDate", void 0);
__decorate([
    property({ type: Number })
], DirectSearch.prototype, "count", void 0);
DirectSearch = __decorate([
    customElement('direct-search')
], DirectSearch);
export { DirectSearch };
//# sourceMappingURL=direct-search.js.map