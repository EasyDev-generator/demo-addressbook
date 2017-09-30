/**
 * 
 * 
         _                     _              _ _ _     _   _     _        __ _ _      
      __| | ___    _ __   ___ | |_    ___  __| (_| |_  | |_| |__ (_)___   / _(_| | ___ 
     / _` |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| | |_| | |/ _ \
    | (_| | (_) | | | | | (_) | |_  |  __| (_| | | |_  | |_| | | | \__ \ |  _| | |  __/
     \__,_|\___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                   

 * 
 *  FOR CUSTOMIZE ContactBase PLEASE EDIT ../contact.ts
 * 
 *  THIS FILE WILL BE OVERWRITTEN BY NEXT EASYDEV GENERATION
 * 
 */
 

import { Company } from '../company';

/**
 * This is the model of Contact object
 * 
 */
export class ContactBase {

    public _id: string;
    public birth_date?: Date;
    public gender?: String;
    public name: String;
    public surname: String;
    
    // Relations works_in
	public works_in: Company;
	
	
	
    	
    constructor(){}
}