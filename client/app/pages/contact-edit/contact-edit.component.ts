// Import Libraries
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

// Import Services
import { ContactService } from '../../services/contact.service';
import { CompanyService } from '../../services/company.service';

// Import Models
import { Contact } from '../../address-book_db/contact';
import { Company } from '../../address-book_db/company';
/**
 * Edit component for ContactEdit
 */
@Component({
    selector: 'contact-edit',
    templateUrl : './contact-edit.component.html',
    styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

    item: Contact;
    listWorks_in: Company[];
    model : Contact;
    
    constructor(
                private contactService: ContactService,
                private companyService: CompanyService,
                private route: ActivatedRoute,
                private location: Location) {
        // Init item
        this.item = new Contact();
    }

    ngOnInit(): void {
            this.route.params.subscribe(param => {
                let id: string = param['id'];
                if (id !== 'new') {
                    // Get item from server 
                    this.contactService.get(id).subscribe(item => this.item = item);
                }
                // Get relations
                this.companyService.list().subscribe(list => this.listWorks_in = list);
            });
    }

    /**
     * Save Item
     */
    save(formValid:boolean, item: Contact): void{
        if(formValid) {
            if(item._id){
                this.contactService.update(item).subscribe(data => this.goBack());
            } else {
                this.contactService.create(item).subscribe(data => this.goBack());
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