import { NgModule } from '@angular/core';
import {
    ProgressSpinnerModule,
    DropdownModule,
    InputTextModule,
    MessageService,
    GrowlModule,
    ButtonModule,
    CarouselModule,
    CalendarModule,
    ProgressBarModule
} from 'primeng/primeng';
import { MatDialogModule } from '@angular/material';


@NgModule({
    imports: [
        GrowlModule,
        ProgressSpinnerModule,
        MatDialogModule,
        DropdownModule,
        InputTextModule,
        ButtonModule,
        CarouselModule,
        CalendarModule,
        ProgressBarModule

    ],
    providers: [MessageService],
    exports: [
        GrowlModule,
        ProgressSpinnerModule,
        MatDialogModule,
        DropdownModule,
        ButtonModule,
        CarouselModule,
        CalendarModule,
        ProgressBarModule
    ],
})
export class MaterialModule { }