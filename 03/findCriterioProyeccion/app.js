var MongoClient = require('mongodb').MongoClient;

var dbName = "cursomongo"

MongoClient.connect('mongodb://localhost:37017/', function(err, client) {
	if(err) throw err;
	
	var db = client.db(dbName);

	var criterio = { 'edad' : 12 };

	var proyeccion = { 'estudiante' : 1, '_id' : 0 };

	db.collection('estudiantes').find(criterio, proyeccion).toArray(function(err, docs) {
	if(err) throw err;

		docs.forEach(function (doc) {
			console.log(doc.estudiante);
		});

		client.close();
	});
});