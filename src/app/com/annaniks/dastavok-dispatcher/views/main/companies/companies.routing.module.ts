import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesView } from './companies.view';

let companiesRoutes: Routes = [
    { path: '', component: CompaniesView },
    { path: ':companyId', loadChildren: 'src/app/com/annaniks/dastavok-dispatcher/views/main/companies/company/company.module#CompanyModule' }
]

@NgModule({
    imports: [RouterModule.forChild(companiesRoutes)],
    exports: [RouterModule]
})
export class CompaniesRoutingModule { }