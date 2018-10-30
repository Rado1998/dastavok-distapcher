import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './com/annaniks/dastavok-dispatcher/guards';

let appRoutes: Routes = [
    { path: '', loadChildren: 'src/app/com/annaniks/dastavok-dispatcher/views/main/main.module#MainModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: 'src/app/com/annaniks/dastavok-dispatcher/views/login/login.module#LoginModule' },
    { path: 'registration', loadChildren: 'src/app/com/annaniks/dastavok-dispatcher/views/registration/registration.module#RegistrationModule' }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }