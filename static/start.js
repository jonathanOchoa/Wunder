	
	var gmail_win = $(this);
	
	api.integration.wunderlist.listAccounts(function (error, accounts) {

		// Si el error detiene la ejecución y devuelve un error
		if(error){
		   wunderlistErrorList(error);
		}

		// si hay cuentas
		if (accounts.length > 0) {
			
			var have_wunderlist_accounts = false;
			accounts.forEach(function (account) {
				have_wunderlist_accounts = true;
			});
			
			if(have_wunderlist_accounts){
				
				// Mostrar aplicación, ocultar inicio de sesión
				$('#contenedor-login').addClass('hidden');
				$('#wunderlist-base').removeClass('hidden');
				
				/*
				for(var i =0; i<accounts.length;i++){
					console.log(accounts[i].id);
				}
				*/
				var numero = 1;
				for (var key1 in accounts) {
					for (var key2 in accounts[key1]) {    
						console.log(numero + 'key:' + key2);
						console.log('contenido:' + accounts[key1][key2]);
						numero++;
					}
				}
				
				start();
			}				
		// si no hay cuentas
		}else{
			// Mostrar inicio de sesión, ocultar aplicación
			gmail_win.on(".wz-app-235").css({'width': '464px', 'min-width': '464px', 'height': '536px', 'min-height': '536px'});
			$('#contenedor-login').removeClass('hidden');
			$('#wunderlist-base').addClass('hidden');	
			start();
		}
	});
	
	function wunderlistErrorList(error){ 
		return console.log('Error al obtener las cuentas con permisos revocados');       
	}
				

				
				
				
    				