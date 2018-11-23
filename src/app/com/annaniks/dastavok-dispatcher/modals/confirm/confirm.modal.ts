import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'confirm',
    templateUrl: 'confirm.modal.html',
    styleUrls: ['confirm.modal.scss']
})
export class ConfirmModal implements OnInit {

    constructor(private dialogRef: MatDialogRef<ConfirmModal>) { }

    ngOnInit() { }

    public onClickYes(): void {
        this.dialogRef.close({ confirm: true });
    }

    public onClickNo(): void {
        this.dialogRef.close({ confirm: false })
    }
}