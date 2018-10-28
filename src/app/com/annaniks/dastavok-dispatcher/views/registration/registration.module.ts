import { NgModule } from '@angular/core';
import { RegistrationView } from './registration.view';
import { RegistrationRoutingModule } from './registration.routing.module';

@NgModule({
    declarations: [RegistrationView],
    imports: [RegistrationRoutingModule],
    exports: []
})
export class RegistrationModule { }