import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainView } from './main.view';

let mainRoutes: Routes = [
    {
        path: '', component: MainView, children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: 'src/app/com/annaniks/dastavok-dispatcher/views/main/dashboard/dashboard.module#DashboardModule' },
            { path: 'profile', loadChildren: 'src/app/com/annaniks/dastavok-dispatcher/views/main/profile/profile.module#ProfileModule' },
            { path: 'statistics', loadChildren: 'src/app/com/annaniks/dastavok-dispatcher/views/main/statistics/statistics.module#StatisticsModule' },
            { path: 'live-map', loadChildren: 'src/app/com/annaniks/dastavok-dispatcher/views/main/live-map/live-map.module#LiveMapModule' },
            { path: 'orders/:orderStatus', loadChildren: 'src/app/com/annaniks/dastavok-dispatcher/views/main/orders/orders.module#OrdersModule' },
            { path: 'companies', loadChildren: 'src/app/com/annaniks/dastavok-dispatcher/views/main/companies/companies.module#CompaniesModule' }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(mainRoutes)],
    exports: [RouterModule]
})
export class MainRoutingModule { } 