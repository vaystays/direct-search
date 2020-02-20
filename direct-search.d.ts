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
import { LitElement } from 'lit-element';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class DirectSearch extends LitElement {
    static styles: import("lit-element").CSSResult;
    /**
     * The url for the white label site
     */
    url: string;
    /**
     * The value to override for the number of guests. Will default to 1
     */
    numberOfGuests: number;
    /**
     * The value for the startDate.  Will default to today's date.
     */
    startDate: string;
    /**
     * The vaue for the endDate.  Will default to tomorrow's date.
     */
    endDate: string;
    locations: never[];
    selectedLocation: string;
    bedrooms: number;
    buttonCss: string;
    render(): import("lit-element").TemplateResult;
    handleLocationChange(e: any): void;
    handleGuestsChange(e: any): void;
    handleBedsChange(e: any): void;
    handleStartDateChanged(e: any): void;
    handleEndDateChanged(e: any): void;
    handleFormSubmit(e: any): void;
    pad(n: any): any;
}
declare global {
    interface HTMLElementTagNameMap {
        'direct-search': DirectSearch;
    }
}
//# sourceMappingURL=direct-search.d.ts.map