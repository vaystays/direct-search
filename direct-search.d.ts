import { LitElement } from 'lit-element';
import '@vaadin/vaadin-date-picker';
import '@doubletrade/lit-datepicker';
/**
 * Direct Search Element for White Label Websites
 */
export declare class DirectSearch extends LitElement {
    static styles: import("lit-element").CSSResult;
    mode: string;
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
    startDate: number;
    /**
     * The vaue for the endDate.  Will default to tomorrow's date.
     */
    endDate: number;
    showCalendar: boolean;
    locations: never[];
    selectedLocation: string;
    maxBedrooms: number;
    maxGuests: number;
    bedrooms: number;
    buttonCss: string;
    buttonText: string;
    labelLocation: string;
    labelStartDate: string;
    labelEndDate: string;
    labelGuests: string;
    labelBeds: string;
    render(): import("lit-element").TemplateResult;
    _handleDateFromChanged({ detail }: {
        detail: any;
    }): void;
    handleDateToChanged({ detail }: {
        detail: any;
    }): void;
    _handleLocationChange(e: any): void;
    _handleGuestsChange(e: any): void;
    _handleBedsChange(e: any): void;
    _handleStartDateChanged(e: any): void;
    _handleEndDateChanged(e: any): void;
    _handleFormSubmit(e: any): void;
    pad(n: number): string | number;
    _hideCalendar(): void;
    _showCalendar(): void;
    _handleCalendarFocused(): void;
    _formatDateForApi(date: any): string;
    _formatDate(date: any): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'direct-search': DirectSearch;
    }
}
//# sourceMappingURL=direct-search.d.ts.map