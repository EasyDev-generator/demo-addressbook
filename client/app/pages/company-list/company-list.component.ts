// Import Libraries
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from "@angular/material";
import { ModalRemoveComponent } from '../../components/modal-remove.component';


// Import Services
import { CompanyService } from '../../services/company.service';

// Import Models
import { Company } from '../../address-book_db/company';

import { Contact } from '../../address-book_db/contact';

@Component({
    selector: "company-list",
    templateUrl: './company-list.component.html',
    styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
    
    // Attributes
    list: Company[];
    search: any = {};
    idSelected: string;
    
    // Constructor
    constructor(
                private companyService: CompanyService, 
                public dialog: MdDialog) {}

    // Functions
    ngOnInit(): void {
        this.companyService.list().subscribe(list => this.list = list);
    }

    openModal(id: string): void {
        let dialogRef = this.dialog.open(ModalRemoveComponent, {
            width: '250px',
            data: () => {
                // Execute on confirm
                this.companyService.remove(id).subscribe(() => {
                    dialogRef.close();
                });
                this.list = this.list.filter(item => item._id != id);
            }
        });
    }

}