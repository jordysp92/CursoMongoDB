var MongoClient = require('mongodb').MongoClient;

const dbName = "cursomongo"

MongoClient.connect('mongodb://localhost:37017/', function(err, client) {
	if(err) throw err;

	var db = client.db(dbName);

	var criterio = { 
		puntuaciones : { 
			$elemMatch : { 
				tipo : "examen", 
				puntuacion : { $gt : 90 } 
			} 
		} 
	};
	
	db.collection('puntuaciones3').count(criterio , function(err, total) {
		if(err) throw err;
		
		console.log(total);

		client.close();
	});
});