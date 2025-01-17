import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationView } from './registration.view';

let registrationRoutes: Routes = [
    { path: '', component: RegistrationView }
]

@NgModule({
    imports: [RouterModule.forChild(registrationRoutes)],
    exports: [RouterModule]
})
export class RegistrationRoutingModule { }