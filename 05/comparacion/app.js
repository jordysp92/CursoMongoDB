var MongoClient = require('mongodb').MongoClient;

const dbName = "cursomongo"

MongoClient.connect('mongodb://localhost:37017/', function(err, client) {
	if(err) throw err;

	var db = client.db(dbName);

	var criterio = { 
		'tipo' : 'examen' , 
		'puntuacion' : { $gt : 84 , $lt : 86 } 
	};
	
	db.collection('puntuaciones').find(criterio).each(function(err, doc) {
		if(err) throw err;
		
		if(doc == null) {
			return client.close();
		}

		console.log(doc);
	});
});