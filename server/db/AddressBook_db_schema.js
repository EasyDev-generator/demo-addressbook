/**

  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                     
                                                                                   
 *  DO NOT EDIT HIS FILE!!
 * 
 *  FOR CUSTOMIZE DB SCHEMA PLEASE EDIT db/AddressBook_db_customSchema.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT EASYDEV'S CODE GENERATION --
 * 
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const createUser = require('../security/security.js');

const db_AddressBook_db_schema = [];
const db_AddressBook_db = [];

/**
 * SCHEMA DB AddressBook_db
 */



 /**
  * Company
  */
db_AddressBook_db_schema.Company = new mongoose.Schema({
	name: {
		type: 'String', 
		required : true
	},
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	works_in: {
		type: Schema.ObjectId,
		ref : "Contact"
	},
	*/
});


 /**
  * Contact
  */
db_AddressBook_db_schema.Contact = new mongoose.Schema({
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
	works_in: {
		type: Schema.ObjectId,
		ref : "Company"
	},
	
	
	//EXTERNAL RELATIONS
	/*
	*/
});



/**
 * SCHEMA DB User
 */

db_AddressBook_db_schema.User = new mongoose.Schema({
    username: {
        type: 'String',
        required: true
    },
    password: {
        type: 'String',
        required: true
    },
    mail: {
        type: 'String'
    },
    name: {
        type: 'String'
    },
    surname: {
        type: 'String'
    },
    roles: [{
        type: 'String'
    }]
});


// Import schema customization
require('./AddressBook_db_customSchema.js');
var AddressBook_db_model = require('./AddressBook_db_crud.js');

// Declare mongoose model

db_AddressBook_db.Company = AddressBook_db_model.connection.model('Company', db_AddressBook_db_schema.Company );
db_AddressBook_db.Contact = AddressBook_db_model.connection.model('Contact', db_AddressBook_db_schema.Contact );

db_AddressBook_db.User = AddressBook_db_model.connection.model('User', db_AddressBook_db_schema.User);

module.exports = db_AddressBook_db;

// Create ADMIN user if does not exist
createUser.createUser();
