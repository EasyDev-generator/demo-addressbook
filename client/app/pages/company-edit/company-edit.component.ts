// Import Libraries
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

// Import Services
import { CompanyService } from '../../services/company.service';
import { ContactService } from '../../services/contact.service';

// Import Models
import { Company } from '../../address-book_db/company';

import { Contact } from '../../address-book_db/contact';

/**
 * Edit component for CompanyEdit
 */
@Component({
    selector: 'company-edit',
    templateUrl : './company-edit.component.html',
    styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {

    item: Company;
    listWorks_in: Company[];
	externalContact : Contact[]	
    model : Company;
    
    constructor(
                private companyService: CompanyService,
                private contactService: ContactService,
                private route: ActivatedRoute,
                private location: Location) {
        // Init item
        this.item = new Company();
    }

    ngOnInit(): void {
            this.route.params.subscribe(param => {
                let id: string = param['id'];
                if (id !== 'new') {
                    // Get item from server 
                    this.companyService.get(id).subscribe(item => this.item = item);
                }
                // Get relations
                this.contactService.list().subscribe(list => this.externalContact = list);
            });
    }

    /**
     * Save Item
     */
    save(formValid:boolean, item: Company): void{
        if(formValid) {
            if(item._id){
                this.companyService.update(item).subscribe(data => this.goBack());
            } else {
                this.companyService.create(item).subscribe(data => this.goBack());
            }  
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }
    

}