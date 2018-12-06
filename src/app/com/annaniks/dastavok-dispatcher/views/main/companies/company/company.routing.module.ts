import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyView } from './company.view';

let companyRoutes: Routes = [
    { path: '', component: CompanyView }
]

@NgModule({
    imports: [RouterModule.forChild(companyRoutes)],
    exports: [RouterModule]
})
export class CompanyRoutingModule { }