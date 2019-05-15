var MongoClient = require('mongodb').MongoClient;

var dbName = 'cursomongo';

MongoClient.connect('mongodb://localhost:37017/', function(err, client) {
	if(err) throw err;

	var db = client.db(dbName);

	var docs = [
		{ 'estudiante' : 'Ana', 'edad' : 15 },
		{ 'estudiante' : 'Susana', 'edad' : 11 },
		{ 'estudiante' : 'Juan', 'edad' : 12 }
	];

	db.collection('estudiantes').insert(docs, function(err, inserted) {
		if(err) throw err;

		console.log("Insertados: " + JSON.stringify(inserted));

		return client.close();
	});
});