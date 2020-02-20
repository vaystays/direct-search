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
import '@vaadin/vaadin-date-picker';
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
         * The url for the white label site
         */
        this.url = 'https://cxstaging.getdirect.io/listings/search/';
        /**
         * The value to override for the number of guests. Will default to 1
         */
        this.numberOfGuests = 1;
        /**
         * The value for the startDate.  Will default to today's date.
         */
        this.startDate = `${new Date().getFullYear()}-${this.pad(new Date().getMonth() + 1)}-${new Date().getDate()}`;
        // startDate = `${new Date().getFullYear()}-${this.pad(new Date().getMonth() + 1)}-${new Date().getDate()}`
        /**
         * The vaue for the endDate.  Will default to tomorrow's date.
         */
        this.endDate = `${new Date().getFullYear()}-${this.pad(new Date().getMonth() + 1)}-${new Date().getDate() + 1}`;
        // endDate = `${new Date().getFullYear()}-${this.pad(new Date().getMonth() + 1)}-${new Date().getDate() + 1}`
        this.locations = [];
        this.selectedLocation = '';
        this.bedrooms = 1;
        this.buttonCss = '';
    }
    render() {
        return html `
      <form action="${this.url}" @submit="${this.handleFormSubmit}">
        ${this.locations.length > 0
            ? html `
              <section>
                <label for="loc">Location</label>
                <select id="location" name="loc" slot="location" tabindex="1" @change="${this.handleLocationChange}">
                  <option value="">Select a Location</option>
                  ${this.locations.map(({ value, name }) => html `
                        <option .value="${value}">${name}</option>
                      `)}
                </select>
              </section>
            `
            : ``}
        <div row>
          <section>
            <label for="startDate">Check-In</label>
            <vaadin-date-picker id="startDate" value="${this.startDate}" tabindex="2" @change="${this.handleStartDateChanged}"></vaadin-date-picker>
          </section>
          <section>
            <label for="endDate">Check-Out</label>
            <vaadin-date-picker id="endDate" value="${this.endDate}" tabindex="3" @change="${this.handleEndDateChanged}"></vaadin-date-picker>
          </section>
        </div>
        <div row>
          <section>
            <label for="numberOfGuests">Guests</label>
            <select name="guests" id="numberOfGuests" @change="${this.handleGuestsChange}" tabindex="4">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
            </select>
          </section>
          <section>
            <label for="beds">Beds</label>
            <select name="beds" id="beds" @change="${this.handleBedsChange}" tabindex="5">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
            </select>
          </section>
        </div>
        <section>
          <button type="submit" tabindex="6" .style="${this.buttonCss}">Search Listings</button>
        </section>
      </form>
    `;
    }
    handleLocationChange(e) {
        this.selectedLocation = e.currentTarget.value;
    }
    handleGuestsChange(e) {
        this.numberOfGuests = e.currentTarget.value;
    }
    handleBedsChange(e) {
        this.bedrooms = e.currentTarget.value;
    }
    handleStartDateChanged(e) {
        var _a;
        this.startDate = e.currentTarget.value;
        const endDateElement = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById('endDate');
        endDateElement.min = e.currentTarget.value;
        if (this.startDate) {
            endDateElement.value = e.currentTarget.value;
            endDateElement.open();
        }
    }
    handleEndDateChanged(e) {
        this.endDate = e.currentTarget.value;
    }
    handleFormSubmit(e) {
        e.preventDefault();
        const startDatePieces = this.startDate.toString().split('-');
        const endDatePieces = this.endDate.toString().split('-');
        let toUrl = `${this.url}?guests=${this.numberOfGuests}&check-in=${startDatePieces[2]}-${startDatePieces[1]}-${startDatePieces[0]}&check-out=${endDatePieces[2]}-${endDatePieces[1]}-${endDatePieces[0]}`;
        if (this.selectedLocation) {
            toUrl = `${toUrl}&loc=${this.selectedLocation}`;
        }
        window.location.href = toUrl;
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
    }

    label,
    select,
    input,
    section,
    button {
      font-size: 14px;
      font-family: sans-serif;
    }

    section {
      display: flex;
      flex-direction: column;
    }

    label {
      font-weight: 600;
      padding: 6px 0px 3px 0px;
      text-transform: uppercase;
      color: #9da8ad;
    }

    input,
    select,
    option {
      display: block;
      border: 1px solid #cdd3d5;
      border-radius: 0.5em;
      color: #1c2131;
      line-height: 1.3;
      padding: 0.6em 1.4em 0.5em 0.8em;
    }

    select {
      padding: 0.6em 1.4em 0.5em 0.8em;

      box-sizing: border-box;
      margin: 0;
      border: 1px solid #aaa;
      box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);

      -moz-appearance: none;
      -webkit-appearance: none;
      appearance: none;
      background-color: #fff;
      /* background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
        linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%); */
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

    [row] {
      display: flex;
    }
    [row] section {
      display: flex;
      flex-grow: 1;
    }
    [row] section:first-child {
      margin-right: 16px;
    }
  `;
__decorate([
    property({ type: String, reflect: true })
], DirectSearch.prototype, "url", void 0);
__decorate([
    property({ type: Number, reflect: true })
], DirectSearch.prototype, "numberOfGuests", void 0);
__decorate([
    property({ type: String, reflect: true })
], DirectSearch.prototype, "startDate", void 0);
__decorate([
    property({ type: String, reflect: true })
], DirectSearch.prototype, "endDate", void 0);
__decorate([
    property({ type: Array })
], DirectSearch.prototype, "locations", void 0);
__decorate([
    property({ type: String, reflect: true })
], DirectSearch.prototype, "selectedLocation", void 0);
__decorate([
    property({ type: Number, reflect: true })
], DirectSearch.prototype, "bedrooms", void 0);
__decorate([
    property({ type: String, reflect: true })
], DirectSearch.prototype, "buttonCss", void 0);
DirectSearch = __decorate([
    customElement('direct-search')
], DirectSearch);
export { DirectSearch };
//# sourceMappingURL=direct-search.js.map