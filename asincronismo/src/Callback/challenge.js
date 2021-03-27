let XMLHttpRequest = requiere('xmlhttprequest').XMLHttpRequest;

// Funcion que nos permitira traer la informacion desde la API
function fetchData(url_api, callback){
    // Generar la referencia al objeto que necesito(xhttp)
    let xhttp = new XMLHttpRequest();
    // Hacer llamado a la url -  peticion(GET), url, true(Manejar asincronismo - por default)
    xhttp.open('GET', url_api, true);
    //Escuchar lo que va a hacer esa conexion - si este ccambio sucede, Cuando el estado del objeto cambia, ejecutar la función:
    xhttp.onreadystatechange = function (event){
        /*Validacion para ver si voy a ejecutar mi callback, si el estado en el caul se encuentra es satisfactorio
        los estados que puede tener son:
        estado 0: inicializado
        estado 1: cargando
        estado 2: ya se cargó
        estado 3: ya hay información
        estado 4: solicitud completa
        PD: recuerda estas trabajando con una API externa osea un servidor por lo que
        depende del servidor cuanto demore en cada estado haces un pedido por datos
        (request) y solo es aplicar lógica.
        */
        if (xhttp.readyState === 4){
            /*
            ESTADO 1xx (100 - 199): Indica que la petición esta siendo procesada.
            ESTADO 2xx (200 - 299): Indica que la petición fue recibida, aceptada y procesada correctamente.
            ESTADO 3xx (300 - 399): Indica que hay que tomar acciones adicionales para completar la solicitud. Por lo general indican redireccionamiento.
            ESTADO 4xx (400 - 499): Errores del lado del cliente. Indica se hizo mal la solicitud de datos.
            ESTADO 5xx (500 - 599): Errores del Servidor. Indica que fallo totalmente la ejecución.
            */
           if(xhttp.status === 200){
               //Estandar de node con callbacks, primer parametro error, segundo el resultado
               callback (null, JSON.parse(xhttp.responseText))
            } else {
                const error = new Error('Error ' + url_api);
                return callback(error, null)
            }   
        }
    }
    //Envio de la solicitud.
    xhttp.send();

}