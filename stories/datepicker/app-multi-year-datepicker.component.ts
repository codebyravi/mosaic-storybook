import { Component, ViewEncapsulation } from '@angular/core';
import { DateAdapter, MC_DATE_LOCALE } from '@ptsecurity/cdk/datetime';
import { MomentDateAdapter } from '@ptsecurity/mosaic-moment-adapter';


@Component({
    selector: 'app-multi-year-datepicker',
    template: `
        <div class="example-viewport">
            <mc-form-field>
                <input mcInput [(ngModel)]="date" [mcDatepicker]="myDatepicker" />
                <mc-datepicker-toggle tabindex="7" mcSuffix [for]="myDatepicker"></mc-datepicker-toggle>
                <mc-datepicker #myDatepicker startView="multi-year"></mc-datepicker>
            </mc-form-field>
        </div>
    `,
    styles: [`
        .example-viewport {
            width: 400px;
            margin: 8px;
        }
    `],
    encapsulation: ViewEncapsulation.None,
    providers: [
        {provide: MC_DATE_LOCALE, useValue: 'ru'},
        {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MC_DATE_LOCALE]}
    ]
})
export class AppMultiYearDatepickerComponent {
    date;
}
