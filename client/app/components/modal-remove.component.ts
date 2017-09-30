// Import Libraries
import { Observable } from 'rxjs/Rx';
import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from "@angular/material";

/**
 * Ask confirm for remove an object
 */
@Component({
    selector: 'modal-remove',
    templateUrl: './modal-remove.component.html',
})
export class ModalRemoveComponent {

    constructor(
        public dialogRef: MdDialogRef<ModalRemoveComponent>,
        @Inject(MD_DIALOG_DATA) public remove: any
    ) { }

    close(): void {
        this.dialogRef.close();
    }

}