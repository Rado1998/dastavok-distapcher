import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login.routing.module';
import { LoginView } from './login.view';
import { LoginService } from './login.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [LoginView],
    imports: [LoginRoutingModule, ReactiveFormsModule, CommonModule],
    providers: [LoginService]
})
export class LoginModule { }