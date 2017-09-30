/**
 * 
 * 
         _                     _              _ _ _     _   _     _        __ _ _      
      __| | ___    _ __   ___ | |_    ___  __| (_| |_  | |_| |__ (_)___   / _(_| | ___ 
     / _` |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| | |_| | |/ _ \
    | (_| | (_) | | | | | (_) | |_  |  __| (_| | | |_  | |_| | | | \__ \ |  _| | |  __/
     \__,_|\___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                   

 * 
 *  FOR CUSTOMIZE ContactBaseService PLEASE EDIT ../Contact.service.ts
 * 
 *  THIS FILE WILL BE OVERWRITTEN BY NEXT EASYDEV GENERATION
 * 
 */
 
// DEPENDENCIES
import { Observable } from 'rxjs/Rx';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

// SECURITY
import { AuthenticationService } from '../../security/authentication.service';

// MODEL
import { Contact } from '../../address-book_db/contact';

// CONFIG
import { config } from "../../../config/properties";

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Contact.service.ts
 */
 
/*
 * SCHEMA DB Contact
 * 
	{
		birth_date: {
			type: 'Date'
		},
		gender: {
			type: 'String',
			enum : ["F","M"], 
		},
		name: {
			type: 'String', 
			required : true
		},
		surname: {
			type: 'String', 
			required : true
		},
		//RELATIONS
		
		
		//EXTERNAL RELATIONS
		
		works_in: {
			type: Schema.ObjectId,
			ref : "Contact"
		},
		
	}
 * 
 */
@Injectable()
export class ContactBaseService {

    contextUrl:string = config.host + "/contact";
    constructor(
        private http: Http,
        private authenticationService: AuthenticationService) {
        
    }

//CRUD METHODS
	/**
     * Create new item
     */
     create(item: Contact): Observable<void> {
        return this.http
            .post(this.contextUrl, item)
            .map(response => response.json());
    }
	/**
     * Remove one item by id
     */
     remove(id: string): Observable<void> {
        return this.http
            .delete(this.contextUrl + "/" + id)
            .map(response => null);
    }
    
    /**
     * Find by works_in
     */
    findByworks_in(id: string): Observable<Contact[]> {
        return this.http
            .get(this.contextUrl + '/findByworks_in/' + id)
            .map(response => response.json() as Contact[]);
    }	
    /**
     * Get one item by id
     */
	
	get(id: string): Observable<Contact> {
        return this.http
            .get(this.contextUrl + "/" + id)
            .map(response => response.json() as Contact)
    }

    /**
     * Get list of items
     */
	
	list(): Observable<Contact[]> {
        return this.http
            .get(this.contextUrl)
            .map(response => response.json() as Contact[])
    }
    /**
     * Update item
     */
	update(item: Contact): Observable<void> {
        return this.http
            .post(this.contextUrl + '/' + item._id, item)
            .map(response => response.json())
    }



}
