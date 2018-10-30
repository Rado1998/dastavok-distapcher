import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login.routing.module';
import { LoginView } from './login.view';
import { LoginService } from './login.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [LoginView],
    imports: [LoginRoutingModule, ReactiveFormsModule],
    providers: [LoginService]
})
export class LoginModule { }