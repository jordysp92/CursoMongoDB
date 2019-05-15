// Ejercicio 1.9. NodeJS
var MongoClient = require('mongodb').MongoClient;

var dbName="cursomongo"

// Conectar con el servidor
// Revisar la cadena de conexión, para que el puerto y la base de datos sean los nuestros
MongoClient.connect('mongodb://localhost:37017/', function(err, client) {
    if(err) throw err;

    var db = client.db(dbName);

    // Encontrar un documento de una colección
	// Revisar el nombre de la colección. Puede que estemos usando otra
    db.collection('estudiantes').findOne({}, function(err, doc) {

        if(err) throw err;

        // Mostrar el resultado 
        // Si no hay documentos se mostrará un null.
        console.log(doc);

        // Cerrar la conexión
        client.close();
    });

    // Mostrar mensaje de éxito
    console.log("Ejecutado un findOne!");
});
