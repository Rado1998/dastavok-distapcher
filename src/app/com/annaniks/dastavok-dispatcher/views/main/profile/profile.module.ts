import { NgModule } from '@angular/core';
import { ProfileView } from './profile.view';
import { ProfileRoutingModule } from './profile.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProfileService } from './profile.service';

@NgModule({
    declarations: [ProfileView],
    imports: [ProfileRoutingModule, ReactiveFormsModule, CommonModule],
    providers: [ProfileService]
})
export class ProfileModule { }