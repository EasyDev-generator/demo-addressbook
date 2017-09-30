const app = require('../../app.js');
const db_AddressBook_db = require('../../db/AddressBook_db_schema.js')
const properties = require('../../properties.js');
const handleError = require('../../security/util.js').handleError;
require('./custom/ContactCustom.js');

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



//CRUD METHODS


//CRUD - CREATE
	
app.post(properties.api + '/contact/', function(req, res){
	obj = new db_AddressBook_db.Contact(req.body);
	obj.save(function(err){
		if (err) return handleError(err, res);
		res.send(obj);
	});
});
	
//CRUD - REMOVE

app['delete'](properties.api + '/contact/:id', function(req, res){
	db_AddressBook_db.Contact.findByIdAndRemove(req.params.id, function (err) {
		  if (err) return handleError(err, res);
		  res.send(err);
	});
});

//CRUD - FIND BY works_in
	
app.get(properties.api + '/contact/findByworks_in/:key', function(req, res){

	db_AddressBook_db.Contact.find({ 'works_in' : req.params.key}).exec(function(err, list){
		if (err) return handleError(err, res);
		res.send(list);
	});
	
});
	
//CRUD - GET ONE
	
app.get(properties.api + '/contact/:id', function(req, res){
	db_AddressBook_db.Contact.findOne({_id:req.params.id}).exec(function(err, obj){
		if (err) return handleError(err, res);
		res.send(obj);
	});
});
	
//CRUD - GET LIST
	
app.get(properties.api + '/contact/', function(req, res){
	db_AddressBook_db.Contact.find().exec(function(err, list){
		if (err) return handleError(err, res);
		res.send(list);
	});
});

//CRUD - EDIT
	
app.post(properties.api + '/contact/:id', function(req, res){
	db_AddressBook_db.Contact.findByIdAndUpdate(req.params.id, req.body, {'new': true}, function(err, obj){
		if (err) return handleError(err, res);
		res.send(obj);
	});
});


/*
 * CUSTOM SERVICES
 * 
 *	These services will be overwritten and implemented in  Custom.js
 */

