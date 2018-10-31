import { NgModule } from '@angular/core';
import { ProfileView } from './profile.view';
import { ProfileRoutingModule } from './profile.routing.module';

@NgModule({
    declarations: [ProfileView],
    imports: [ProfileRoutingModule],
    providers: []
})
export class ProfileModule { }