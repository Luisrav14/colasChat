	//Declaración de variables
	var cadena, cod, respuesta;

	//Declaración de expresiones
	var credito = RegExp("(CREDITO|CRÉDITO|CRÉDITOS|CREDITOS)");
	var tener = RegExp("(PERDI|PERDÍ TARJETA|PERDER|PERDI TARJETA|ROBO|EXTRAVÍO|EXTRAVIE|PERDÍ|PERDIDA|PÉRDIDA)");
	var edad = /AÑOS/;
	var cuenta = RegExp("(CUENTA|ABRIR CUENTA|TARJETA)");


	function evaluarExpresion() {
		cadena = document.getElementById("txtPregunta").value;
		escribirChat(cadena);
		cadena = cadena.toUpperCase();
		document.getElementById("txtPregunta").value = "";
		cod = 0;

		if (credito.test(cadena) == true) {
			cod = 1;
		};
		if (cuenta.test(cadena) == true) {
			cod = 2;
		};
		if (tener.test(cadena) == true) {
			cod = 3;
		};
		//Lama a responder
		setTimeout(responder, 1000);
		//responder();
	}

	function responder() {		
		console.log("cod " + cod);
		var mensaje;
		switch (cod) {
			case 1:		
				mensaje = "Al dia de contamos con diversos prestamos de hasta $500,000.00 MXN. Para mas informción visita www.bancomer.com.mx/creditos ";		
				break;

			case 2:
				mensaje = "Dentro de nuestras propuestas puedes abrir una cuenta desde 0 pesos. Para mas informción visita www.bancomer.com.mx/abre-tu-cuenta ";		
				break;

			case 3:
				mensaje = "Si perdiste tu tarjeta. Sigue estos pasos Llama a Línea BBVA a cualquier hora todos los días del año, a los teléfonos 5552262663, Cd. de México; 8 1579111, Monterrey; 3 6690229, Guadalajara y al 800 5 226 26 63, larga distancia sin costo.";
				break;

			case 5:

				break;
			default:
				mensaje = "No entiendo lo que me estás diciendo";

		}
		escribirChat(mensaje);
	}

	function escribirChat(texto) {
		document.getElementById("areaChat").value += texto + "\r";
	}