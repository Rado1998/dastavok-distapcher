import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Good } from '../../models/models';
@Component({
    selector: 'good-details',
    templateUrl: 'good-details.modal.html',
    styles: ['good-details.modal.scss']
})
export class GoodDetailsModal implements OnInit {

    constructor(@Inject(MAT_DIALOG_DATA) public data: Good, private dialogRef: MatDialogRef<GoodDetailsModal>) { }

    ngOnInit() {
        console.log(this.data);
    }
}