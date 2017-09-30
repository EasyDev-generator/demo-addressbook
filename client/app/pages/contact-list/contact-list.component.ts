// Import Libraries
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from "@angular/material";
import { ModalRemoveComponent } from '../../components/modal-remove.component';


// Import Services
import { ContactService } from '../../services/contact.service';

// Import Models
import { Contact } from '../../address-book_db/contact';
import { Company } from '../../address-book_db/company';
@Component({
    selector: "contact-list",
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
    
    // Attributes
    list: Contact[];
    search: any = {};
    idSelected: string;
    
    // Constructor
    constructor(
                private contactService: ContactService, 
                public dialog: MdDialog) {}

    // Functions
    ngOnInit(): void {
        this.contactService.list().subscribe(list => this.list = list);
    }

    openModal(id: string): void {
        let dialogRef = this.dialog.open(ModalRemoveComponent, {
            width: '250px',
            data: () => {
                // Execute on confirm
                this.contactService.remove(id).subscribe(() => {
                    dialogRef.close();
                });
                this.list = this.list.filter(item => item._id != id);
            }
        });
    }

}