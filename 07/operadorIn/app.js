﻿var MongoClient = require('mongodb').MongoClient;

const dbName = "cursomongo"

MongoClient.connect('mongodb://localhost:37017/', function(err, client) {
	if(err) throw err;

	var db = client.db(dbName);

	var criterio = { 
		preferencias : { 
			$in : [ 'Aquagym', 'Natación' ] 
		} 
	};
	
	db.collection('gimnasio').count(criterio , function(err, total) {
		if(err) throw err;
		
		console.log(total);

		client.close();
	});
});