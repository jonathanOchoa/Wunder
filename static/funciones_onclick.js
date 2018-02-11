
		var document = $(this);
		
		$(document).ready(function(){ // cuando la pagina este cargada.
			
			
			function mostrarMas(){
				//mostrar
				$("#boton1").removeClass("no-active").addClass("active");  	// mas
				//ocultar
				$("#boton0").removeClass("active").addClass("no-active"); 	// ordenar
				$("#tamaño-desplegable").css('height', '278px');			// tamaño
				$("#conversaciones").addClass("hidden"); 					// conversaciones
				$("#actividad").addClass("hidden"); 						// actividad
				$("#user-popover").addClass("hidden"); 						// submenu barra
				$("#menuClickDerecho0").addClass("hidden"); 				// menu click derecho 0
				$("#menuClickDerecho1").addClass("hidden"); 				// menu click derecho 1
				$("#menuClickDerecho2").addClass("hidden"); 				// menu click derecho 2
				$("#menuClickDerecho3").addClass("hidden"); 				// menu click derecho 3
				$("#ejecutarMostrarAgregarTarea").removeClass("focus"); 	// destacado, asignar a y fecha
				$("#botonAgregarTarea1").removeClass("hidden"); 			// agregar lista icono del + 
				$("#botonAgregarTarea2").addClass("hidden"); 				// agregar lista icono microfono
			}
			
			function mostrarOrdenar(){
				//mostrar
				$("#boton0").removeClass("no-active").addClass("active"); 	// ordenar
				//ocultar
				$("#boton1").removeClass("active").addClass("no-active");  	// mas
				$("#tamaño-desplegable").css('height', '187px');			// tamaño
				$("#conversaciones").addClass("hidden"); 					// conversaciones
				$("#actividad").addClass("hidden"); 						// actividad
				$("#user-popover").addClass("hidden"); 						// submenu barra
				$("#menuClickDerecho0").addClass("hidden"); 				// menu click derecho 0
				$("#menuClickDerecho1").addClass("hidden"); 				// menu click derecho 1
				$("#menuClickDerecho2").addClass("hidden"); 				// menu click derecho 2
				$("#menuClickDerecho3").addClass("hidden"); 				// menu click derecho 3
				$("#ejecutarMostrarAgregarTarea").removeClass("focus"); 	// destacado, asignar a y fecha
				$("#botonAgregarTarea1").removeClass("hidden"); 			// agregar lista icono del + 
				$("#botonAgregarTarea2").addClass("hidden"); 				// agregar lista icono microfono
			}
			
			function mostrarConversaciones(){
				//mostrar
				$("#conversaciones").removeClass("hidden"); 				// conversaciones
				//ocultar
				$("#boton1").removeClass("active").addClass("no-active"); 	// mas
				$("#boton0").removeClass("active").addClass("no-active"); 	// ordenar
				$("#tamaño-desplegable").css('height','0px'); 				// tamaño
				$("#actividad").addClass("hidden"); 						// actividad
				$("#user-popover").addClass("hidden"); 						// submenu barra
				$("#menuClickDerecho0").addClass("hidden"); 				// menu click derecho 0
				$("#menuClickDerecho1").addClass("hidden"); 				// menu click derecho 1
				$("#menuClickDerecho2").addClass("hidden"); 				// menu click derecho 2
				$("#menuClickDerecho3").addClass("hidden"); 				// menu click derecho 3
				$("#ejecutarMostrarAgregarTarea").removeClass("focus"); 	// destacado, asignar a y fecha
				$("#botonAgregarTarea1").removeClass("hidden"); 			// agregar lista icono del + 
				$("#botonAgregarTarea2").addClass("hidden"); 				// agregar lista icono microfono
			}
			
			function mostrarActividad(){
				//mostrar
				$("#actividad").removeClass("hidden"); 						// actividad
				//ocultar
				$("#boton1").removeClass("active").addClass("no-active"); 	// mas
				$("#boton0").removeClass("active").addClass("no-active"); 	// ordenar
				$("#tamaño-desplegable").css('height','0px'); 				// tamaño
				$("#conversaciones").addClass("hidden"); 					// conversaciones
				$("#user-popover").addClass("hidden"); 						// submenu barra
				$("#menuClickDerecho0").addClass("hidden"); 				// menu click derecho 0
				$("#menuClickDerecho1").addClass("hidden"); 				// menu click derecho 1
				$("#menuClickDerecho2").addClass("hidden"); 				// menu click derecho 2
				$("#menuClickDerecho3").addClass("hidden"); 				// menu click derecho 3
				$("#ejecutarMostrarAgregarTarea").removeClass("focus"); 	// destacado, asignar a y fecha
				$("#botonAgregarTarea1").removeClass("hidden"); 			// agregar lista icono del + 
				$("#botonAgregarTarea2").addClass("hidden"); 				// agregar lista icono microfono
			}
			
			function ocultar(){
				//ocultar
				$("#boton1").removeClass("active").addClass("no-active"); 						// mas
				$("#boton0").removeClass("active").addClass("no-active"); 						// ordenar
				$("#tamaño-desplegable").css('height','0px'); 									// tamaño
				$("#conversaciones").addClass("hidden"); 										// conversaciones
				$("#actividad").addClass("hidden"); 											// actividad
				$("#user-popover").addClass("hidden"); 											// submenu barra
				$("#menuClickDerecho0").addClass("hidden"); 									// menu click derecho 0
				$("#menuClickDerecho1").addClass("hidden"); 									// menu click derecho 1
				$("#menuClickDerecho2").addClass("hidden"); 									// menu click derecho 2
				$("#menuClickDerecho3").addClass("hidden"); 									// menu click derecho 3
				$("#ejecutarMostrarAgregarTarea").removeClass("focus"); 						// destacado, asignar a y fecha
				$("#botonAgregarTarea1").removeClass("hidden"); 								// agregar lista icono del + 
				$("#botonAgregarTarea2").addClass("hidden"); 									// agregar lista icono microfono
				$("#botonAgregaTareaAsignarA").addClass("hidden"); 		    					// agregar lista icono asignar a
				$("#botonAgregaTareaFecha").addClass("hidden"); 								// agregar lista icono fecha
				$(".lista-tareas-pendientes").removeClass("selected").addClass("no-selected"); 	// ocultar lista tareas pendientes
				$(".mostrar-opciones-mas").addClass("disabled");					 			// mostrar opciones en AUBMENU MAS de lista tareas
			}
			
			function mostrarCuenta(){
				//mostrar
				$("#user-popover").removeClass("hidden"); 					// submenu barra
				//ocultar
				$("#boton1").removeClass("active").addClass("no-active"); 	// mas
				$("#boton0").removeClass("active").addClass("no-active"); 	// ordenar
				$("#tamaño-desplegable").css('height', '0px');				// tamaño
				$("#conversaciones").addClass("hidden"); 					// conversaciones
				$("#actividad").addClass("hidden"); 						// actividad
				$("#menuClickDerecho0").addClass("hidden"); 				// menu click derecho 0
				$("#menuClickDerecho1").addClass("hidden"); 				// menu click derecho 1
				$("#menuClickDerecho2").addClass("hidden"); 				// menu click derecho 2
				$("#menuClickDerecho3").addClass("hidden"); 				// menu click derecho 3
				$("#ejecutarMostrarAgregarTarea").removeClass("focus"); 	// destacado, asignar a y fecha
				$("#botonAgregarTarea1").removeClass("hidden"); 			// agregar lista icono del + 
				$("#botonAgregarTarea2").addClass("hidden"); 				// agregar lista icono microfono
			}
			
			function mostrarBarraLateral(){
				//mostrar
				$("#lists").removeClass("collapsed");  						// barra lateral
				//ocultar
				$("#conversaciones").addClass("hidden"); 					// conversaciones
				$("#actividad").addClass("hidden"); 						// actividad
				$("#menuClickDerecho0").addClass("hidden"); 				// menu click derecho 0
				$("#menuClickDerecho1").addClass("hidden"); 				// menu click derecho 1
				$("#menuClickDerecho2").addClass("hidden"); 				// menu click derecho 2
				$("#menuClickDerecho3").addClass("hidden"); 				// menu click derecho 3
				$("#sidebarActions").css('width', '280px'); 				// boton de abajo crear lista    // esto solo funciona el main de horbito
				$("#ejecutarMostrarAgregarTarea").removeClass("focus"); 	// destacado, asignar a y fecha
				$("#botonAgregarTarea1").removeClass("hidden"); 			// agregar lista icono del + 
				$("#botonAgregarTarea2").addClass("hidden"); 				// agregar lista icono microfono
			}
			function ocultarBarraLateral(){
				//ocultar
				$("#lists").addClass("collapsed"); 							// barra lateral
				$("#conversaciones").addClass("hidden"); 					// conversaciones
				$("#actividad").addClass("hidden"); 						// actividad
				$("#user-popover").addClass("hidden"); 						// submenu barra
				$("#menuClickDerecho0").addClass("hidden"); 				// menu click derecho 0
				$("#menuClickDerecho1").addClass("hidden"); 				// menu click derecho 1
				$("#menuClickDerecho2").addClass("hidden"); 				// menu click derecho 2
				$("#menuClickDerecho3").addClass("hidden"); 				// menu click derecho 3
				$("#sidebarActions").css('width', '40px'); 					// boton de abajo crear lista    // esto solo funciona el main de horbito
				$("#ejecutarMostrarAgregarTarea").removeClass("focus"); 	// destacado, asignar a y fecha
				$("#botonAgregarTarea1").removeClass("hidden"); 			// agregar lista icono del + 
				$("#botonAgregarTarea2").addClass("hidden"); 				// agregar lista icono microfono
			}
			
			function MostrarEliminarLista(){
				//mostrar
				$("#boton4").removeClass("hidden"); 						// eliminar
				//ocultar
				$("#boton1").removeClass("active").addClass("no-active"); 	// mas
				$("#boton0").removeClass("active").addClass("no-active"); 	// ordenar
				$("#boton2").addClass("hidden");							// compartir	
				$("#tamaño-desplegable").css('height','0px'); 				// tamaño
				$("#conversaciones").addClass("hidden"); 					// conversaciones
				$("#actividad").addClass("hidden"); 						// actividad
				$("#user-popover").addClass("hidden");  					// submenu barra
				$("#menuClickDerecho0").addClass("hidden"); 				// menu click derecho 0
				$("#menuClickDerecho1").addClass("hidden"); 				// menu click derecho 1
				$("#menuClickDerecho2").addClass("hidden"); 				// menu click derecho 2
				$("#menuClickDerecho3").addClass("hidden"); 				// menu click derecho 3
				$("#ejecutarMostrarAgregarTarea").removeClass("focus"); 	// destacado, asignar a y fecha
				$("#botonAgregarTarea1").removeClass("hidden"); 			// agregar lista icono del + 
				$("#botonAgregarTarea2").addClass("hidden"); 				// agregar lista icono microfono
			}
			
			function ocultarEliminarLista(){
				// ocultar
				$("#boton4").addClass("hidden"); 							// eliminar
				$("#boton1").removeClass("active").addClass("no-active"); 	// mas
				$("#boton0").removeClass("active").addClass("no-active"); 	// ordenar
				$("#tamaño-desplegable").css('height','0px'); 				// tamaño
				$("#conversaciones").addClass("hidden"); 					// conversaciones
				$("#actividad").addClass("hidden"); 						// actividad
				$("#user-popover").addClass("hidden");  					// submenu barra
			}
				
			function mostrarAgregarTarea(){
				//mostrar
				$("#ejecutarMostrarAgregarTarea").addClass("focus"); 		// agregar lista icono destacado asignar a y fecha
				$("#botonAgregarTarea2").removeClass("hidden"); 			// agregar lista icono microfono
				//ocultar
				$("#botonAgregarTarea1").addClass("hidden"); 				// agregar lista icono del + 
				$("#boton1").removeClass("active").addClass("no-active"); 	// mas
				$("#boton0").removeClass("active").addClass("no-active"); 	// ordenar
				$("#tamaño-desplegable").css('height','0px'); 				// tamaño
				$("#conversaciones").addClass("hidden"); 					// conversaciones
				$("#actividad").addClass("hidden"); 						// actividad
				$("#user-popover").addClass("hidden");  					// submenu barra
				$("#botonAgregaTareaFecha").addClass("hidden"); 			// agregar lista icono fecha
				$("#botonAgregaTareaAsignarA").addClass("hidden"); 			// agregar lista icono asignar a
			}
			
			function mostrarAgregarTareaDestacar(){
				//mostrar
				$("#ejecutarAgregaTareaDestacar").addClass("starred"); 		// Agregar Tarea Destacar
				//ocultar
				$("#botonAgregaTareaFecha").addClass("hidden"); 			// agregar lista icono fecha
				$("#botonAgregaTareaAsignarA").addClass("hidden"); 			// agregar lista icono asignar a
			}
			function ocultarAgregarTareaDestacar(){
				//ocultar
				$("#ejecutarAgregaTareaDestacar").removeClass("starred"); 	// Agregar Tarea Destacar
				$("#botonAgregaTareaFecha").addClass("hidden"); 		  	// agregar lista icono fecha
				$("#botonAgregaTareaAsignarA").addClass("hidden"); 		  	// agregar lista icono asignar a
			}
			
			function mostrarAgregaTareaAsignarA(){
				//mostrar
				$("#botonAgregaTareaAsignarA").removeClass("hidden"); 		// agregar lista icono asignar a
				//ocultar
				$("#botonAgregaTareaFecha").addClass("hidden"); 			// agregar lista icono fecha
			}
			function ocultarAgregaTareaAsignarA(){
				//ocultar
				$("#botonAgregaTareaFecha").addClass("hidden"); 			// agregar lista icono fecha
				$("#botonAgregaTareaAsignarA").addClass("hidden"); 			// agregar lista icono asignar a
			}
			
			function mostrarAgregarTareaFecha(){
				//mostrar
				$("#botonAgregaTareaFecha").removeClass("hidden"); 			// agregar lista icono fecha 
				
				$("#botonAgregaTareaAsignarA").addClass("hidden"); 			// agregar lista icono asignar a
			}
			
					function mostrarAgregarTareaFechaVencimiento(){
						$("#ejecutarMostrarAgregarTareaFechaVencimiento").addClass("selected"); // boton azul fecha vencimiento 
						$("#ejecutarMostrarAgregarTareaFechaAviso").removeClass("selected"); 	// boton gris fecha aviso
						$("#botonAgregarTareaFechaVencimiento").removeClass("hidden"); 			// div fecha vencimiento
						$("#botonMostrarAgregarTareaFechaAviso").addClass("hidden");				// div fecha aviso 
					}
					function mostrarAgregarTareaFechaAviso(){
						$("#ejecutarMostrarAgregarTareaFechaVencimiento").removeClass("selected"); 	// boton gris fecha vencimiento
						$("#ejecutarMostrarAgregarTareaFechaAviso").addClass("selected"); 			// boton azul fecha aviso
						$("#botonAgregarTareaFechaVencimiento").addClass("hidden"); 				// div fecha vencimiento
						$("#botonMostrarAgregarTareaFechaAviso").removeClass("hidden");				// div fecha aviso 
					}
			
			function ocultarAgregarTareaFecha(){ 	
				//ocultar
				$("#botonAgregaTareaFecha").addClass("hidden"); 	// agregar lista icono fecha
				$("#botonAgregaTareaAsignarA").addClass("hidden"); 	// agregar lista icono asignar a
			}
			
			function mostrarTareaTerminada(){ 	
				//mostrar
				$("#botonTareaTerminada").removeClass("hidden"); 	// agregar lista icono fecha
			}
			function ocultarTareaTerminada(){ 	
				//ocultar
				$("#botonTareaTerminada").addClass("hidden"); 		// agregar lista icono fecha
			}
		
		// INICIO VENTANAS MODALES
		
			function mostrarCompartir(){
				//mostrar
				$("#boton2").removeClass("hidden"); 						// compartir
				//ocultar
				$("#boton0").removeClass("active").addClass("no-active"); 	// ordenar
				$("#boton1").removeClass("active").addClass("no-active"); 	// mas
				$("#tamaño-desplegable").css('height','0px');				// tamaño
				$("#conversaciones").addClass("hidden"); 					// conversaciones
				$("#actividad").addClass("hidden"); 						// actividad
				$("#user-popover").addClass("hidden");  					// submenu barra
				$("#menuClickDerecho0").addClass("hidden"); 				// menu click derecho 0
				$("#menuClickDerecho1").addClass("hidden"); 				// menu click derecho 1
				$("#menuClickDerecho2").addClass("hidden"); 				// menu click derecho 2
				$("#menuClickDerecho3").addClass("hidden"); 				// menu click derecho 3
				$("#ejecutarMostrarAgregarTarea").removeClass("focus"); 	// destacado, asignar a y fecha
				$("#botonAgregarTarea1").removeClass("hidden"); 			// agregar lista icono del + 
				$("#botonAgregarTarea2").addClass("hidden"); 				// agregar lista icono microfono
			}
			
					function mostrarCompartirMiembrosLista(){
						//mostrar
						$("#ejecutarMostrarMiembrosEditarLista").removeClass("no-active").addClass("active");	// compartir miembros
						$("#editarListaBoton1").removeClass("hidden"); 										 	// tabla de añadir miembros
						$("#editarListaBoton2").removeClass("hidden");										 	// tabla lista miembros
						//ocultar
						$("#ejecutarMostrarOpcionesEditarLista").removeClass("active").addClass("no-active");	// compartir opciones
						$("#editarListaBoton3").addClass("hidden");											 	// tabla opciones de lista
					}
					function mostrarCompartirOpcionesLista(){
						//mostrar
						$("#ejecutarMostrarOpcionesEditarLista").removeClass("no-active").addClass("active");	// compartir opciones
						$("#editarListaBoton3").removeClass("hidden");							 			 	// tabla no molestar
						//ocultar
						$("#ejecutarMostrarMiembrosEditarLista").removeClass("active").addClass("no-active");	// compartir miembros
						$("#editarListaBoton1").addClass("hidden"); 										 	// tabla de añadir miembros
						$("#editarListaBoton2").addClass("hidden");					 						 	// tabla lista miembros
					}
			
			function ocultarCompartir(){
				//ocultar
				$("#boton2").addClass("hidden");												
			}
			
			function mostrarCrearLista(){
				//mostrar
				$("#boton3").removeClass("hidden");  						// crear lista
				//ocultar
				$("#boton0").removeClass("active").addClass("no-active"); 	// ordenar
				$("#boton1").removeClass("active").addClass("no-active"); 	// mas
				$("#tamaño-desplegable").css('height','0px'); 				// tamaño
				$("#user-popover").addClass("hidden");  					// submenu barra
				$("#conversaciones").addClass("hidden"); 					// conversaciones
				$("#actividad").addClass("hidden"); 						// actividad
				$("#menuClickDerecho0").addClass("hidden"); 				// menu click derecho 0
				$("#menuClickDerecho1").addClass("hidden"); 				// menu click derecho 1
				$("#menuClickDerecho2").addClass("hidden"); 				// menu click derecho 2
				$("#menuClickDerecho3").addClass("hidden"); 				// menu click derecho 3
				$("#ejecutarMostrarAgregarTarea").removeClass("focus"); 	// destacado, asignar a y fecha
				$("#botonAgregarTarea1").removeClass("hidden"); 			// agregar lista icono del + 
				$("#botonAgregarTarea2").addClass("hidden"); 				// agregar lista icono microfono
			}
			
					function mostrarCompartirMiembrosCrearLista(){
						//mostrar
						$("#ejecutarMostrarMiembrosCrearLista").removeClass("no-active").addClass("active"); 	// compartir miembros
						$("#CrearListaBoton1").removeClass("hidden"); 											// tabla de añadir miembros
						$("#CrearListaBoton2").removeClass("hidden");											// tabla lista miembros
						//ocultar
						$("#ejecutarMostrarOpcionesCrearLista").removeClass("active").addClass("no-active"); 	// compartir opciones
						$("#CrearListaBoton3").addClass("hidden"); 												// tabla no molestar
					}
					function mostrarCompartirOpcionesCrearLista(){
						//mostrar
						$("#ejecutarMostrarOpcionesCrearLista").removeClass("no-active").addClass("active");	// compartir opciones
						$("#CrearListaBoton3").removeClass("hidden"); 											// tabla no molestar
						//ocultar
						$("#ejecutarMostrarMiembrosCrearLista").removeClass("active").addClass("no-active");	// compartir miembros
						$("#CrearListaBoton1").addClass("hidden"); 												// tabla de añadir miembros
						$("#CrearListaBoton2").addClass("hidden");												// tabla lista miembros
					}
			
			function ocultarCrearLista(){ 		
				//ocultar
				$("#boton3").addClass("hidden"); 	// crear lista
			}
			
		// FINAL VENTANAS MODALES
			
////////////////////////////////////////////////////////////////////////////////////////////////////		
////////////////////////////	EJECUTAR FUNCIONES	////////////////////////////////////////////////			
////////////////////////////////////////////////////////////////////////////////////////////////////	
		
///////////////////////////////////
////¿Como funciona esto?
// cuando cliclo por defecto se cierra todo 
// excepto si clico en alguna de las funciones de mostrar ya que stopPropagation() invalida el proceso
// cuando una una funcion de mostrar tengo que indicar que se cierre todo lo demas paque que todo funcione.

			
			// GENERAL	--> OCULTAR 
			$('html').click(function() { ocultar(); } );
			$('#wunderlist-base').click(function() { ocultar(); });  // esta opcion sustituye el $('html').click(function() { ocultar(); }); para que funcione en horbito
			
			// MAS	--> MOSTRAR OCULTAR 
			$('#ejecutarMas').click(function(e){
				/* Mostrar nuestro menú*/
				e.stopPropagation();
				if($("#tamaño-desplegable").css('height') == "0px" || $("#tamaño-desplegable").css('height') == "187px"){
					mostrarMas();
				}else if ($("#tamaño-desplegable").css('height') == "278px"){
					ocultar();
				}
			}); 
			$('#boton1').click(function(e){
				e.stopPropagation();
				mostrarMas();
			});
			
			// ORDENAR	--> MOSTRAR OCULTAR
			$("#ejecutarOrdenar").on('click', function(e){
				e.stopPropagation();
				if($("#tamaño-desplegable").css('height') == "0px" || $("#tamaño-desplegable").css('height') == "278px"){
					mostrarOrdenar();
				}else if ($("#tamaño-desplegable").css('height') == "187px"){
					ocultar();
				}
			});
			$('#boton0').click(function(e){
				e.stopPropagation();
				mostrarOrdenar();
			});
			
			// SUBMENU CONVERSACIONES	--> MOSTRAR OCULTAR
			$("#ejecutarConversaciones").on('click', function(e){
				e.stopPropagation();
				if($("#conversaciones").hasClass("hidden")){ // si existe un hidden entonces....
					mostrarConversaciones();
				}else {
					ocultar();
				}
			});
			$('#conversaciones').click(function(e){
				e.stopPropagation();
				mostrarConversaciones();
			});
			
			// SUBMENU ACTIVIDAD	--> MOSTRAR OCULTAR
			$("#ejecutarActividad").on('click', function(e){
				e.stopPropagation();
				if($("#actividad").hasClass("hidden")){ // si existe un hidden entonces....
					mostrarActividad();
				}else {
					ocultar();
				}
			});
			$('#actividad').click(function(e){
				e.stopPropagation();
				mostrarActividad();
			});
			
			// SUBMENU CUENTA	--> MOSTRAR OCULTAR
			$("#ejecutarCuenta").on('click', function(e){
				e.stopPropagation();
				if($("#user-popover").hasClass("hidden")){ // si existe un hidden entonces....
					mostrarCuenta();
				}else {
					ocultar();
				}
			});
			$('#user-popover').click(function(e){
				e.stopPropagation();
				mostrarCuenta();
			});
			
			// BARRA	--> MOSTRAR OCULTAR
			$("#ejecutarBarraLateral").on('click', function(e){
				e.stopPropagation();
				if($("#lists").hasClass("collapsed")){ // si existe un collapsed entonces....
					mostrarBarraLateral();
				}else {
					ocultarBarraLateral();
				}
			});
			
			// ELIMINAR LISTA-NOTA	--> MOSTRAR 
			$(".ejecutarMostrarEliminarLista").on('click', function(){
				MostrarEliminarLista();
			});
			
			// ELIMINAR LISTA-NOTA	--> OCULTAR 
			$("#ejecutarOcultarEliminarLista").on('click', function(){
				ocultarEliminarLista();
			});
			
			// AGREGAR TAREA   --> MOSTRAR 
			$("#ejecutarMostrarAgregarTarea").on('click', function(e){
				e.stopPropagation();
				mostrarAgregarTarea();
			});
			
			// AGREGAR TAREA DESTACAR	--> MOSTRAR OCULTAR
			$("#ejecutarAgregaTareaDestacar").on('click', function(){
				if($("#ejecutarAgregaTareaDestacar").hasClass("starred")){ // si existe un starred entonces....
					ocultarAgregarTareaDestacar();
				}else {
					mostrarAgregarTareaDestacar();
				}
			});
			
			// AGREGAR TAREA ASIGNAR A	--> MOSTRAR OCULTAR
			$("#ejecutarMostrarAgregaTareaAsignarA").on('click', function(e){
				e.stopPropagation();
				if($("#botonAgregaTareaAsignarA").hasClass("hidden")){ // si existe un hidden entonces....
					mostrarAgregaTareaAsignarA();
				}else {
					ocultarAgregaTareaAsignarA();
				}
			});
			$('#botonAgregaTareaAsignarA').click(function(e){
				e.stopPropagation();
				mostrarAgregaTareaAsignarA();
			});
			
			//  AGREGAR TAREA FECHA	--> MOSTRAR OCULTAR
			$("#ejecutarMostrarAgregarTareaFecha").on('click', function(e){
				e.stopPropagation();
				if($("#botonAgregaTareaFecha").hasClass("hidden")){ // si existe un hidden entonces....
					mostrarAgregarTareaFecha();
				}else {
					ocultarAgregarTareaFecha();
				}
			});
			$('#botonAgregaTareaFecha').click(function(e){
				e.stopPropagation();
				mostrarAgregarTareaFecha();
			});
					// AGREGAR TAREA FECHA VENCIMIENTO	--> MOSTRAR 
					$("#ejecutarMostrarAgregarTareaFechaVencimiento").on('click', function(){
						mostrarAgregarTareaFechaVencimiento();
					});
					// AGREGAR TAREA FECHA AVISO		--> MOSTRAR 
					$("#ejecutarMostrarAgregarTareaFechaAviso").on('click', function(){ 
						mostrarAgregarTareaFechaAviso();
					});
			$(".ejecutarOcultarAgregarTareaFecha").on('click', function(e){ 
				e.stopPropagation();
				ocultarAgregarTareaFecha();		
			});
			
			$("#ejecutarTareaTerminada").on('click', function(e){
				e.stopPropagation();
				if($("#botonTareaTerminada").hasClass("hidden")){ // si existe un hidden entonces....
					mostrarTareaTerminada();
				}else {
					ocultarTareaTerminada();
				}
			});
			
		
		// INICIO CLICK DERECHO
		
			// CLICK DERECHO 0 -> MOSTRAR
			$("#lista1").mousedown(function(e){
				//1: izquierda, 2: medio/ruleta, 3: derecho
				e.stopPropagation();
				if(e.which == 3){
					$("#menuClickDerecho0").removeClass("hidden"); 	// menu click derecho 0
					$("#menuClickDerecho0").css('left',e.pageX+'px'); 
					$("#menuClickDerecho0").css('top',e.pageY+'px'); 
					$("#menuClickDerecho1").addClass("hidden"); 	// menu click derecho 1
					$("#menuClickDerecho2").addClass("hidden"); 	// menu click derecho 2
					$("#menuClickDerecho3").addClass("hidden"); 	// menu click derecho 3
				}
			});
			$('#menuClickDerecho0').click(function(e){
				e.stopPropagation();
				$("#menuClickDerecho0").removeClass("hidden"); 	// menu click derecho 0
			});
			
			// CLICK DERECHO 1 -> MOSTRAR	
			$("#lista9").mousedown(function(e){
				e.stopPropagation();
				if(e.which == 3){
					$("#menuClickDerecho1").removeClass("hidden"); 	// menu click derecho 1
					$("#menuClickDerecho1").css('left',e.pageX+'px'); 
					$("#menuClickDerecho1").css('top',e.pageY+'px'); 
					$("#menuClickDerecho0").addClass("hidden"); 	// menu click derecho 0
					$("#menuClickDerecho2").addClass("hidden"); 	// menu click derecho 2
					$("#menuClickDerecho3").addClass("hidden"); 	// menu click derecho 3
				}
			});
			$('#menuClickDerecho1').click(function(e){
				e.stopPropagation();
				$("#menuClickDerecho1").removeClass("hidden"); 	// menu click derecho 1
			});
			
			// CLICK DERECHO 2 -> MOSTRAR	
			$("#nota3").mousedown(function(e){
				e.stopPropagation();
				if(e.which == 3){
					//var pos = $(".wz-view-container").position();
					//alert( "left: " + pos.left );
					$("#menuClickDerecho2").removeClass("hidden"); 	// menu click derecho 2
					$("#menuClickDerecho2").css('left',e.pageX+'px'); 
					$("#menuClickDerecho2").css('top',e.pageY+'px'); 
					$("#menuClickDerecho0").addClass("hidden"); 	// menu click derecho 0
					$("#menuClickDerecho1").addClass("hidden"); 	// menu click derecho 1
					$("#menuClickDerecho3").addClass("hidden"); 	// menu click derecho 3
				}
				
			});
			$('#menuClickDerecho2').click(function(e){
				e.stopPropagation();
				$("#menuClickDerecho2").removeClass("hidden"); 	// menu click derecho 2
			});
			
			// CLICK DERECHO 2 -> MOSTRAR	
			$("#nota5").mousedown(function(e){
				e.stopPropagation();
				if(e.which == 3){
					$("#menuClickDerecho3").removeClass("hidden"); 	// menu click derecho 3
					$("#menuClickDerecho3").css('left',e.pageX+'px'); 
					$("#menuClickDerecho3").css('top',e.pageY+'px'); 
					$("#menuClickDerecho0").addClass("hidden"); 	// menu click derecho 0
					$("#menuClickDerecho1").addClass("hidden"); 	// menu click derecho 1
					$("#menuClickDerecho2").addClass("hidden"); 	// menu click derecho 2
				}
				
			});
			$('#menuClickDerecho3').click(function(e){
				e.stopPropagation();
				$("#menuClickDerecho3").removeClass("hidden"); 	// menu click derecho 3
			});
			
		// FINAL CLICK DERECHO	
		
		// INICO VENTANAS MODALES	
		
			// COMPARTIR	--> MOSTRAR 
			$(".ejecutarMostrarCompartir").on('click', function(){
				mostrarCompartir();
			});
				
					// MIEMBROS DE LISTA	--> MOSTRAR 
					$("#ejecutarMostrarMiembrosEditarLista").on('click', function(){
						mostrarCompartirMiembrosLista();
					});
					// OPCIONES DE LISTA	--> MOSTRAR 
					$("#ejecutarMostrarOpcionesEditarLista").on('click', function(){
						mostrarCompartirOpcionesLista();
					});
				
			// COMPARTIR	--> OCULTAR 
			$("#ejecutarOcultarCompartir").on('click', function(){
				ocultarCompartir();
			});
			
			// CREAR LISTA	--> MOSTRAR 
			$("#ejecutarMostrarCrearLista").on('click', function(){
				mostrarCrearLista();
			});
			
					// MIEMBROS DE LISTA	--> MOSTRAR 
					$("#ejecutarMostrarMiembrosCrearLista").on('click', function(){
						mostrarCompartirMiembrosCrearLista();
					});
					// OPCIONES DE LISTA	--> MOSTRAR 
					$("#ejecutarMostrarOpcionesCrearLista").on('click', function(){
						mostrarCompartirOpcionesCrearLista();
					});
					
			// CREAR LISTA	--> OCULTAR 
			$("#ejecutarOcultarCrearLista").on('click', function(){
				ocultarCrearLista();
			});
			
		// FINAL VENTANAS MODALES
		
			// SELECCIONAR DESTACADO --> MOSTRAR Y OCULTAR 
			/*$(".taskItem-star").on('click', function(){
				//star-wrapper   //starred-wrapper hidden
				var guardar = $(this).attr('id');
				alert(guardar);
				
				var guardar = $(this).attr('id');
				if ($( "#" + guardar + " > span.starred-wrapper").hasClass("hidden")){
					$( "#" + guardar + " > span.star-wrapper").removeClass("hidden"); // destacado
					$( "#" + guardar + " > span.starred-wrapper").addClass("hidden"); // destacado
				}else{
					$( "#" + guardar + " > span.star-wrapper").addClass("hidden"); 		 // destacado
					$( "#" + guardar + " > span.starred-wrapper").removeClass("hidden"); // destacado
				}
			});*/
			
			// SELECCIONAR NOTA	--> MOSTRAR Y OCULTAR 
			$(".lista-tareas-pendientes").on('click', function(e){
				e.stopPropagation();
				for (var i=1;i<=3;i++){
					if ($(this).attr('id') == 'nota'+i){
						$("#nota"+i).removeClass("no-selected").addClass("selected"); // notas --> transforma el background de blanco a azul
						$(".mostrar-opciones-mas").removeClass("disabled"); 		  // mostrar opciones en AUBMENU MAS de lista tareas
					}else{
						$("#nota"+i).removeClass("selected").addClass("no-selected"); // notas --> transforma el background de blanco a azul
					}
				}
			});
			
			// SELECCIONAR LISTA --> MOSTRAR Y OCULTAR 
			$(".sidebarItem ").on('click', function(){
				for (var i=1;i<=9;i++){
					if ($(this).attr('id') == 'lista'+i){
						$("#lista"+i).removeClass("no-active").addClass("active"); // listas --> transforma el background de blanco a azul
					}else{
						$("#lista"+i).removeClass("active").addClass("no-active"); // listas --> transforma el background de blanco a azul
					}
				}
			});
		});