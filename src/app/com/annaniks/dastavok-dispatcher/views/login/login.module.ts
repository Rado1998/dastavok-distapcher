import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login.routing.module';
import { LoginView } from './login.view';

@NgModule({
    declarations: [LoginView],
    imports: [LoginRoutingModule],
    providers: []
})
export class LoginModule { }