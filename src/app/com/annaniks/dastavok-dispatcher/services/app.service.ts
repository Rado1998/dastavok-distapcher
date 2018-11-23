import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { ConfirmModal } from '../modals/confirm/confirm.modal';
import { Confirm } from '../models/models';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {

    constructor(private _matDialog: MatDialog) { }

    public openConfirmModal(): Observable<boolean> {
        let dialogRef = this._matDialog.open(ConfirmModal, {
            width: '450px',
            height: '250px'
        })
        return dialogRef.afterClosed().pipe(
            map((data: Confirm) => {
                if (data && data.confirm) {
                    return data.confirm;
                }
                else{
                    return false;
                }
            })
        )
    }

}