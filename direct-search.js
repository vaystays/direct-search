var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, css } from 'lit-element';
import '@vaadin/vaadin-date-picker';
import '@doubletrade/lit-datepicker';
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
/**
 * Direct Search Element for White Label Websites
 */
let DirectSearch = class DirectSearch extends LitElement {
    constructor() {
        super(...arguments);
        this.mode = 'default'; // default|property
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
        this.startDate = today.getTime();
        /**
         * The vaue for the endDate.  Will default to tomorrow's date.
         */
        this.endDate = tomorrow.getTime();
        this.showCalendar = false;
        this.locations = [];
        this.selectedLocation = '';
        this.maxBedrooms = 10;
        this.maxGuests = 10;
        this.bedrooms = 1;
        this.buttonCss = '';
        this.buttonText = 'Search Listings';
        this.labelLocation = 'Location';
        this.labelStartDate = 'Check-In';
        this.labelEndDate = 'Check-Out';
        this.labelGuests = 'Guests';
        this.labelBeds = 'Beds';
        this.showStartText = true;
        this.showEndText = true;
    }
    render() {
        return html `
      <form action="${this.url}" @submit="${this._handleFormSubmit}">
        <div>
          ${this.locations.length > 0
            ? html `
                <section style="flex: 4">
                  <label for="loc">${this.labelLocation}</label>
                  <select id="location" name="loc" slot="location" tabindex="1" @change="${this._handleLocationChange}">
                    <option value="">Select a Location</option>
                    ${this.locations.map(({ value, name }) => html `
                          <option .value="${value}">${name}</option>
                        `)}
                  </select>
                </section>
              `
            : ``}
        </div>
        <div>
          <section name="calendar-container">
            <label for="startDate">${this.labelStartDate}</label>

            <div name="input-wrapper" @click="${this._handleCalendarFocused}">
              ${this.showStartText
            ? html `
                    <div style="flex: 1; text-align: center;">Start</div>
                  `
            : html `
                    <div>${this._formatDate(new Date(this.startDate))}</div>
                  `}
              <div name="arrow">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                  <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                </svg>
              </div>
              ${this.showEndText
            ? html `
                    <div style="flex: 1; text-align: center;">End</div>
                  `
            : html `
                    <div>${this._formatDate(new Date(this.endDate))}</div>
                  `}
            </div>
          </section>
        </div>
        <section @blur="${this._hideCalendar}" style="width: 95%; display: flex; position: absolute;">
          ${this.showCalendar
            ? html `
                <lit-datepicker
                  @date-from-changed="${this._handleDateFromChanged}"
                  @date-to-changed="${this._handleDateToChanged}"
                  force-narrow
                  narrow
                ></lit-datepicker>
              `
            : ``}
        </section>
        <div row>
          <section>
            <label for="numberOfGuests">${this.labelGuests}</label>
            <select name="guests" id="numberOfGuests" @change="${this._handleGuestsChange}" tabindex="4">
              ${Array.from({ length: this.maxGuests }, (_, k) => k + 1).map(i => html `
                    <option value="${i}">${i}</option>
                  `)}
            </select>
          </section>
          <section>
            <label for="beds">${this.labelBeds}</label>
            <select name="beds" id="beds" @change="${this._handleBedsChange}" tabindex="5">
              ${Array.from({ length: this.maxBedrooms }, (_, k) => k + 1).map(i => html `
                    <option value="${i}">${i}</option>
                  `)}
            </select>
          </section>
        </div>

        <section>
          <button type="submit" tabindex="6" .style="${this.buttonCss}">${this.buttonText}</button>
        </section>
      </form>
    `;
    }
    _handleDateFromChanged({ detail }) {
        console.log(detail, 'from');
        if (detail.value) {
            const date = new Date(detail.value * 1000);
            console.log(`From changed: ${date}`);
            this.startDate = date.getTime();
            this.showStartText = false;
        }
    }
    _handleDateToChanged({ detail }) {
        console.log(detail, 'to');
        if (detail.value) {
            const date = new Date(detail.value * 1000);
            console.log(`To changed: ${date}`);
            this.endDate = date.getTime();
            this.showEndText = false;
            this._hideCalendar();
        }
    }
    _handleLocationChange(e) {
        this.selectedLocation = e.currentTarget.value;
    }
    _handleGuestsChange(e) {
        this.numberOfGuests = e.currentTarget.value;
    }
    _handleBedsChange(e) {
        this.bedrooms = e.currentTarget.value;
    }
    _handleStartDateChanged(e) {
        var _a;
        this.startDate = e.currentTarget.value;
        const endDateElement = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById('endDate');
        endDateElement.min = e.currentTarget.value;
        if (this.startDate) {
            endDateElement.value = e.currentTarget.value;
            endDateElement.open();
        }
    }
    _handleEndDateChanged(e) {
        this.endDate = e.currentTarget.value;
    }
    _handleFormSubmit(e) {
        e.preventDefault();
        debugger;
        const startDatePieces = new Date(this.startDate);
        const endDatePieces = new Date(this.endDate);
        let toUrl = `${this.url}?guests=${this.numberOfGuests}&check-in=${this._formatDateForApi(startDatePieces)}&check-out=${this._formatDateForApi(endDatePieces)}`;
        if (this.selectedLocation) {
            toUrl = `${toUrl}&loc=${this.selectedLocation}`;
        }
        if (this.mode === 'property') {
            toUrl = `${this.selectedLocation}?guests=${this.numberOfGuests}&check-in=${this._formatDateForApi(startDatePieces)}&check-out=${this._formatDateForApi(endDatePieces)}`;
        }
        if (window.location != window.parent.location) {
            window.parent.location.href = toUrl;
        }
        else {
            window.location.href = toUrl;
        }
    }
    pad(n) {
        return n < 10 ? '0' + n : n;
    }
    _hideCalendar() {
        this.showCalendar = false;
    }
    _showCalendar() {
        this.showCalendar = true;
    }
    _handleCalendarFocused() {
        this.showCalendar = true;
    }
    _formatDateForApi(date) {
        return `${date.getFullYear()}-${this.pad(date.getMonth() + 1)}-${this.pad(date.getDate())}`;
    }
    _formatDate(date) {
        return `${this.pad(date.getMonth() + 1)}/${date.getDate()}/${date.getFullYear()}`;
    }
};
DirectSearch.styles = css `
    :host {
      display: flex;
      flex-direction: column;
      padding: 16px;
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
    option,
    [name='input-wrapper'] {
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
      border: 1px solid #666;
      padding: 12px 24px;
      font-weight: bold;
      font-size: 16px;
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

    lit-datepicker {
      background: white;
      box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
    }

    [name='calendar-input-wrapper'] {
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    /* [name='calendar-input-wrapper']:first-child {
      margin-right: 16px;
    } */

    [name='calendar-container'] {
      display: flex;
      flex-direction: column;
    }

    [name='arrow'] {
      margin-top: -2px;
      padding: 16px;
      padding-top: 0;

      z-index: 1001;
    }

    [name='input-wrapper'] {
      display: flex;
      flex-direction: row;
      height: 20px;
    }

    [name='input-wrapper'] input {
      border: 0px;
      padding: 0px;
      flex: 1;
      min-width: 75px;
    }

    [name='input-wrapper'] input:focus {
      outline: none;
    }
    .calendar-labels {
      position: absolute;
      z-index: 1000;
      background: white;
      width: 15%;
      min-width: 90px;

      height: 20px;
    }

    [name='endDate'] {
      margin-left: 40%;
      padding-left: 32px;
    }
  `;
__decorate([
    property({ type: String, reflect: true })
], DirectSearch.prototype, "mode", void 0);
__decorate([
    property({ type: String, reflect: true })
], DirectSearch.prototype, "url", void 0);
__decorate([
    property({ type: Number, reflect: true })
], DirectSearch.prototype, "numberOfGuests", void 0);
__decorate([
    property({ type: Number, reflect: true })
], DirectSearch.prototype, "startDate", void 0);
__decorate([
    property({ type: Number, reflect: true })
], DirectSearch.prototype, "endDate", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], DirectSearch.prototype, "showCalendar", void 0);
__decorate([
    property({ type: Array })
], DirectSearch.prototype, "locations", void 0);
__decorate([
    property({ type: String, reflect: true })
], DirectSearch.prototype, "selectedLocation", void 0);
__decorate([
    property({ type: Number, reflect: true })
], DirectSearch.prototype, "maxBedrooms", void 0);
__decorate([
    property({ type: Number, reflect: true })
], DirectSearch.prototype, "maxGuests", void 0);
__decorate([
    property({ type: Number, reflect: true })
], DirectSearch.prototype, "bedrooms", void 0);
__decorate([
    property({ type: String, reflect: true })
], DirectSearch.prototype, "buttonCss", void 0);
__decorate([
    property({ type: String, reflect: true })
], DirectSearch.prototype, "buttonText", void 0);
__decorate([
    property({ type: String, reflect: true })
], DirectSearch.prototype, "labelLocation", void 0);
__decorate([
    property({ type: String, reflect: true })
], DirectSearch.prototype, "labelStartDate", void 0);
__decorate([
    property({ type: String, reflect: true })
], DirectSearch.prototype, "labelEndDate", void 0);
__decorate([
    property({ type: String, reflect: true })
], DirectSearch.prototype, "labelGuests", void 0);
__decorate([
    property({ type: String, reflect: true })
], DirectSearch.prototype, "labelBeds", void 0);
__decorate([
    property({ type: Boolean })
], DirectSearch.prototype, "showStartText", void 0);
__decorate([
    property({ type: Boolean })
], DirectSearch.prototype, "showEndText", void 0);
DirectSearch = __decorate([
    customElement('direct-search')
], DirectSearch);
export { DirectSearch };
//# sourceMappingURL=direct-search.js.map