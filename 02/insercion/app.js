var MongoClient = require('mongodb').MongoClient;

const dbName = 'cursomongo';

MongoClient.connect('mongodb://localhost:37017/', function(err, client) {
	if(err) throw err;

	var doc = { 'estudiante' : 'Carlos', 'edad' : 13 };

	var db = client.db(dbName)

	db.collection('estudiantes').insert(doc, function(err, inserted) {
		if(err) throw err;

		console.log("Insertados: " + JSON.stringify(inserted));

		return client.close();
	});
});