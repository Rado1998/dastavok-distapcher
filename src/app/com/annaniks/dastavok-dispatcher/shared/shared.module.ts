import { NgModule } from '@angular/core';
import { ClickOutsideModule } from 'ng-click-outside';
import { MaterialModule } from './material.module';
import { LoadingComponent } from '../components';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [LoadingComponent],
    imports: [ClickOutsideModule, MaterialModule, CommonModule],
    exports: [ClickOutsideModule, LoadingComponent]
})
export class SharedModule { }