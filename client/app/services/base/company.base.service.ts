/**
 * 
 * 
         _                     _              _ _ _     _   _     _        __ _ _      
      __| | ___    _ __   ___ | |_    ___  __| (_| |_  | |_| |__ (_)___   / _(_| | ___ 
     / _` |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| | |_| | |/ _ \
    | (_| | (_) | | | | | (_) | |_  |  __| (_| | | |_  | |_| | | | \__ \ |  _| | |  __/
     \__,_|\___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                   

 * 
 *  FOR CUSTOMIZE CompanyBaseService PLEASE EDIT ../Company.service.ts
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
import { Company } from '../../address-book_db/company';

// CONFIG
import { config } from "../../../config/properties";

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Company.service.ts
 */
 
/*
 * SCHEMA DB Company
 * 
	{
		name: {
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
export class CompanyBaseService {

    contextUrl:string = config.host + "/company";
    constructor(
        private http: Http,
        private authenticationService: AuthenticationService) {
        
    }

//CRUD METHODS
	/**
     * Create new item
     */
     create(item: Company): Observable<void> {
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
     * Get one item by id
     */
	
	get(id: string): Observable<Company> {
        return this.http
            .get(this.contextUrl + "/" + id)
            .map(response => response.json() as Company)
    }

    /**
     * Get list of items
     */
	
	list(): Observable<Company[]> {
        return this.http
            .get(this.contextUrl)
            .map(response => response.json() as Company[])
    }
    /**
     * Update item
     */
	update(item: Company): Observable<void> {
        return this.http
            .post(this.contextUrl + '/' + item._id, item)
            .map(response => response.json())
    }



}
