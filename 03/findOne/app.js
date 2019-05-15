var MongoClient = require('mongodb').MongoClient;

var dbName = "cursomongo"

MongoClient.connect('mongodb://localhost:37017/', function(err, client) {
	if(err) throw err;

	var db = client.db(dbName);
	
	var criterio = { 'edad' : 12 };

	db.collection('estudiantes').findOne(criterio, function(err, doc) {
	if(err) throw err;

		console.log(doc);

		client.close();
	});
});