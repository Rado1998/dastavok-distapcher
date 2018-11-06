import { NgModule } from '@angular/core';
import { GrowlModule } from 'primeng/growl';
import { ProgressSpinnerModule } from 'primeng/primeng';
import { MessageService } from 'primeng/components/common/messageservice';

@NgModule({
    imports: [GrowlModule, ProgressSpinnerModule],
    providers: [MessageService],
    exports: [GrowlModule, ProgressSpinnerModule],
})
export class MaterialModule { }