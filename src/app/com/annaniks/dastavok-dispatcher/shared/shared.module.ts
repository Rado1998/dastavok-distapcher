import { NgModule } from '@angular/core';
import { ClickOutsideModule } from 'ng-click-outside';
import { MaterialModule } from './material.module';
import { LoadingComponent, PaginatorComponent, CardComponent } from '../components';
import { CommonModule } from '@angular/common';
import { ConfirmModal } from '../modals'
@NgModule({
    declarations: [LoadingComponent, PaginatorComponent, ConfirmModal,CardComponent],
    imports: [ClickOutsideModule, MaterialModule, CommonModule],
    entryComponents: [ConfirmModal],
    exports: [ClickOutsideModule, LoadingComponent, PaginatorComponent,CardComponent],
})
export class SharedModule { }