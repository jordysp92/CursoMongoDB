function cargaPuntuaciones3() {
	db = db.getSiblingDB('cursomongo');

	db.puntuaciones3.drop();

	if ( version26Post() ) {
		var cargaMasiva = db.puntuaciones3.initializeUnorderedBulkOp();
		for ( var i = 0 ; i < 500 ; i++ ) { 
			puntuacionesEstudiante = [];
			puntuacionesEstudiante.push( { tipo : "preguntas" , puntuacion : 100 * Math.random() } );
			puntuacionesEstudiante.push( { tipo : "ejercicios" , puntuacion : 100 * Math.random() } );
			puntuacionesEstudiante.push( { tipo : "tareas" , puntuacion : 100 * Math.random() } );
			puntuacionesEstudiante.push( { tipo : "examen" , puntuacion : 100 * Math.random() } );
			cargaMasiva.insert( { 
				idEstudiante : i + 1 , 
				puntuaciones : puntuacionesEstudiante 
			} )
		};
		cargaMasiva.execute();
	}
	else {
		for ( var i = 0 ; i < 500 ; i++ ) { 
			puntuacionesEstudiante = [];
			puntuacionesEstudiante.push( { tipo : "preguntas" , puntuacion : 100 * Math.random() } );
			puntuacionesEstudiante.push( { tipo : "ejercicios" , puntuacion : 100 * Math.random() } );
			puntuacionesEstudiante.push( { tipo : "tareas" , puntuacion : 100 * Math.random() } );
			puntuacionesEstudiante.push( { tipo : "examen" , puntuacion : 100 * Math.random() } );
			db.puntuaciones3.insert( { 
				idEstudiante : i + 1 , 
				puntuaciones : puntuacionesEstudiante 
			} )
		};
	}
};

function version26Post() {
	var partesVersion = version().split( "." );
	return partesVersion[0] + partesVersion[1] >= 26;
};

cargaPuntuaciones3();