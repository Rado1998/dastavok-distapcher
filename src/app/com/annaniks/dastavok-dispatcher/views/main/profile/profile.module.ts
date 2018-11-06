import { NgModule } from '@angular/core';
import { ProfileView } from './profile.view';
import { ProfileRoutingModule } from './profile.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProfileService } from './profile.service';
import { FileValueAccessor } from '../../../directives';
import { SharedModule } from '../../../shared';

@NgModule({
    declarations: [ProfileView, FileValueAccessor],
    imports: [
        ProfileRoutingModule,
        ReactiveFormsModule,
        CommonModule,
        SharedModule
    ],
    providers: [ProfileService]
})
export class ProfileModule { }