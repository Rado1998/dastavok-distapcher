import { NgModule } from '@angular/core';
import { CompanyView } from './company.view';
import { CompanyRoutingModule } from './company.routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule, MaterialModule } from '../../../../shared';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [CompanyView],
    imports: [
        CompanyRoutingModule, 
        SharedModule, 
        CommonModule, 
        MaterialModule,
        FormsModule
    ],
    providers: []
})
export class CompanyModule { }