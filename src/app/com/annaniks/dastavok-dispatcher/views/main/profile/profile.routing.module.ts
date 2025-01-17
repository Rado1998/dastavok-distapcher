import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileView } from './profile.view';

let profileRoutes: Routes = [
    { path: '', component: ProfileView }
]

@NgModule({
    imports: [RouterModule.forChild(profileRoutes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule { }