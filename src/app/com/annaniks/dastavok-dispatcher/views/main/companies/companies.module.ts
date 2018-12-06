import { NgModule } from '@angular/core';
import { CompaniesRoutingModule } from './companies.routing.module';
import { CompaniesView } from './companies.view';
import { CompaniesListComponent, CompaniesListItemComponent } from '../../../components';
import { SharedModule } from '../../../shared';
import { CommonModule } from '@angular/common';
import { CompaniesService } from './companies.service';

@NgModule({
    declarations: [
        CompaniesView,
        CompaniesListComponent,
        CompaniesListItemComponent
    ],
    imports: [
        CompaniesRoutingModule,
        SharedModule,
        CommonModule
    ],
    providers: [CompaniesService]
})
export class CompaniesModule { }