import { NgModule } from '@angular/core';
import { ClickOutsideModule } from 'ng-click-outside';
import { MaterialModule } from './material.module';
import { LoadingComponent } from '../components';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from '../components/paginator/paginator.component';
@NgModule({
    declarations: [LoadingComponent, PaginatorComponent],
    imports: [ClickOutsideModule, MaterialModule, CommonModule],
    exports: [ClickOutsideModule, LoadingComponent, PaginatorComponent]
})
export class SharedModule { }