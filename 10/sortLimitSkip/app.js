var MongoClient = require('mongodb').MongoClient;

const dbName = "cursomongo"

MongoClient.connect('mongodb://localhost:37017/', function(err, client) {
	if(err) throw err;

	var db = client.db(dbName);

	var criterio = { 'tipo' : 'examen' , 'puntuacion' : { $gte : 90 } };
	var ordenacion = { puntuacion : -1 };
	
	db.collection('puntuaciones').find(criterio, { puntuacion : 1 , _id : 0 }).sort(ordenacion).limit(10).skip(10).each(function(err, doc) {
		if(err) throw err;
		
		if(doc == null) {
			return client.close();
		}

		console.log(doc);
	});
});