function cargaPuntuaciones2() {
	db = db.getSiblingDB('cursomongo');

	db.puntuaciones2.drop();

	if ( version26Post() ) {
		var cargaMasiva = db.puntuaciones2.initializeUnorderedBulkOp();
		for ( var i = 0 ; i < 500 ; i++ ) { 
			puntuacionesEstudiante = {
				preguntas : 100 * Math.random(),
				ejercicios : 100 * Math.random(),
				tareas : 100 * Math.random(),
				examen : 100 * Math.random()
			};
			cargaMasiva.insert( { 
				idEstudiante : i + 1 , 
				puntuaciones : puntuacionesEstudiante 
			} );
		};
		cargaMasiva.execute();
	}
	else {
		for ( var i = 0 ; i < 500 ; i++ ) { 
			puntuacionesEstudiante = {
				preguntas : 100 * Math.random(),
				ejercicios : 100 * Math.random(),
				tareas : 100 * Math.random(),
				examen : 100 * Math.random()
			};
			db.puntuaciones2.insert( { 
				idEstudiante : i + 1 , 
				puntuaciones : puntuacionesEstudiante 
			} );
		};
	}
};

function version26Post() {
	var partesVersion = version().split( "." );
	return partesVersion[0] + partesVersion[1] >= 26;
};

cargaPuntuaciones2();