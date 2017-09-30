const app = require('../../app.js');
const db_AddressBook_db = require('../../db/AddressBook_db_schema.js')
const properties = require('../../properties.js');
const handleError = require('../../security/util.js').handleError;
require('./custom/CompanyCustom.js');

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



//CRUD METHODS


//CRUD - CREATE
	
app.post(properties.api + '/company/', function(req, res){
	obj = new db_AddressBook_db.Company(req.body);
	obj.save(function(err){
		if (err) return handleError(err, res);
		res.send(obj);
	});
});
	
//CRUD - REMOVE

app['delete'](properties.api + '/company/:id', function(req, res){
	db_AddressBook_db.Company.findByIdAndRemove(req.params.id, function (err) {
		  if (err) return handleError(err, res);
		  res.send(err);
	});
});
	
//CRUD - GET ONE
	
app.get(properties.api + '/company/:id', function(req, res){
	db_AddressBook_db.Company.findOne({_id:req.params.id}).exec(function(err, obj){
		if (err) return handleError(err, res);
		res.send(obj);
	});
});
	
//CRUD - GET LIST
	
app.get(properties.api + '/company/', function(req, res){
	db_AddressBook_db.Company.find().exec(function(err, list){
		if (err) return handleError(err, res);
		res.send(list);
	});
});

//CRUD - EDIT
	
app.post(properties.api + '/company/:id', function(req, res){
	db_AddressBook_db.Company.findByIdAndUpdate(req.params.id, req.body, {'new': true}, function(err, obj){
		if (err) return handleError(err, res);
		res.send(obj);
	});
});


/*
 * CUSTOM SERVICES
 * 
 *	These services will be overwritten and implemented in  Custom.js
 */

