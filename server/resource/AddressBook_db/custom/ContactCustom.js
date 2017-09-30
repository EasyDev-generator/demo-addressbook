
const app = require('../../../app.js');
const db_AddressBook_db = require('../../../db/AddressBook_db_schema.js');
const logger = require('../../../logger.js');
const handleError = require('../../../security/util.js').handleError;
const properties = require('../../../properties.js');


// start documentation
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
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
// end documentation

// INSERT HERE YOURS CUSTOM METHODS


