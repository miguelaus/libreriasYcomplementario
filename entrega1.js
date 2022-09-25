

function Pizza(version,precio,size,id,imagen) {
	this.version = version;
	this.precio = precio;
	this.size = size;
	this.id = id;
	this.imagen = imagen;
	this.hablar = function () {console.log ("la pizza " + this.version + " es de tamaño " + this.size + " y su precio es " + this.precio + " - CODIGO: " + this.id)}
	this.idFuction = function () {console.log ( "Su plato es: Pizza " + this.version)}
}


const pizzaMargarita = new Pizza("margarita", 550, "mediana", 1, "margarita.jpg")
const pizzaPrimavera = new Pizza("primavera" , 600, "mediana",2, "primavera.jpg")
const pizzaCaprese = new Pizza("caprese", 650, "grande",3, "caprese.jpg")

let arrayPizzas =[pizzaCaprese, pizzaPrimavera, pizzaMargarita]




function Pasta(version,precio,size,id,imagen) {
	this.version = version;
	this.precio = precio;
	this.size = size;
	this.id = id;
	this.imagen = imagen;
	this.hablar = function () {console.log ("la pasta " + this.version +" es de tamaño " + this.size + " y su precio es $ " + this.precio + " - CODIGO: " + this.id)}
	this.idFuction = function () {console.log ("Su plato es:  " + this.version)}
}

const pastaSpaghetti = new Pasta('spaghetti', 400, "grande",4, "spaghetti.jpg");
const pastaRavioles = new Pasta('ravioles', 600, "grande",5, "ravioles.jpg");
const pastaMacarrones = new Pasta('macarrones', 450, "grande",6, "macarrones.jpg");

let arrayPasta = [pastaRavioles, pastaSpaghetti, pastaMacarrones]




function Ensalada(version,precio,size,id,imagen) {
	this.version = version;
	this.precio = precio;
	this.size = size;
	this.id = id;
	this.imagen = imagen;
	this.hablar = function () {console.log ("la Ensalada " + this.version +" es de tamaño " + this.size + " y su precio es $ " + this.precio + " - CODIGO: " + this.id)}
	this.idFuction = function () {console.log ("Su plato es: Ensalada " + this.version)}
}

const ensaladaTomateLechuga = new Ensalada('tomate y lechuga', 750, "mediana",7,"tomatelechuga.jpg");
const ensaladaCesar = new Ensalada('cesar', 800, "mediana",8,"cesar.jpg");
const ensaladaPapaHuevo = new Ensalada('papa y huevo', 800, "mediana",9,"papahuevo.jpg");

let arrayEnsalada = [ensaladaCesar, ensaladaPapaHuevo, ensaladaTomateLechuga] 




function Carne(version,precio,size,id,imagen) {
	this.version = version;
	this.precio = precio;
	this.size = size;
	this.id = id;
	this.imagen = imagen;
	this.hablar = function () {console.log ("la Carne: " + this.version +" es de tamaño " + this.size + " y su precio es $ " + this.precio + " - CODIGO: " + this.id)}
	this.idFuction = function () {console.log ("Su plato es: " + this.version)}
}

const carneBife = new Carne('bife', 400, "mediano",10,"bife.jpg");
const carneHamburguesa = new Carne('hamburguesa', 600, "mediana",11,"hamburguesa.jpg");
const carneVacio = new Carne('vacio', 650, "mediano",12,"vacio.jpg");
const carneChorizo = new Carne('chorizo', 400, "mediano",13,"chorizo.jpg");
const carneAsado = new Carne('asado', 600, "mediana",14,"asado.jpg");

let arrayCarne = [carneBife, carneAsado, carneVacio, carneChorizo, carneHamburguesa] 



function Trago(version,precio,size,id,imagen) {
	this.version = version;
	this.precio = precio;
	this.size = size;
	this.id = id;
	this.imagen = imagen;
	this.hablar = function () {console.log ("El trago de " + this.version +" es de tamaño " + this.size + " y su precio es $ " + this.precio + " - CODIGO: " + this.id)}
	this.idFuction = function () {console.log ("Su trago es: " + this.version)}
}

const tragoVino = new Trago('vino', 400, "copa",15,"vino.jpg");
const tragoCerveza = new Trago('cerveza', 600, "pinta",16,"cerveza.jpg");
const tragoRefresco = new Trago('refresco', 650, "vaso",17,"refresco.jpg");

let arrayTragos =  [tragoVino, tragoCerveza, tragoRefresco]



function Postre(version,precio,size,id,imagen) {
	this.version = version;
	this.precio = precio;
	this.size = size;
	this.id = id;
	this.imagen = imagen;
	this.hablar = function () {console.log ("El postre " + this.version +" es de tamaño " + this.size + " y su precio es $ " + this.precio +  " - CODIGO: " + this.id)}
	this.idFuction = function () {console.log ("Su postre es: " + this.version)}
}

const postreFlan = new Postre('flan', 400, "chico",18,"flan.jpg");
const postreFruta = new Postre('fruta', 600, "chico",19,"fruta.jpg");
const postreHelado = new Postre('helado', 650, "chico",20,"helado.jpg");

let arrayPostres = [postreFlan, postreFruta, postreHelado]



function Cafe(version,precio,size,id,imagen) {
	this.version = version;
	this.precio = precio;
	this.size = size;
	this.id = id;
	this.imagen = imagen;
	this.hablar = function () {console.log ("El " + this.version +" es de tamaño " + this.size + " y su precio es $ " + this.precio + " - CODIGO: " + this.id)}
	this.idFuction = function () {console.log ("Su pedido es: " + this.version)}
}

const cafeCafe = new Cafe('cafe', 300, "chico",21,"cafe.jpg");
const cafeTe = new Cafe('te', 250, "chico",22,"te.jpg");
const cafeCapuccino = new Cafe('capuccino', 350, "chico",23,"capuccino.jpg");

let arrayCafe = [cafeCafe, cafeTe, cafeCapuccino ]




let arrayMenu = arrayEnsalada.concat(arrayCarne, arrayPasta, arrayPizzas, arrayTragos ,arrayCafe, arrayPostres)



//buscador por precio maximo
/*

let buscarPrecio = document.getElementById("buscarPorPrecio"); 

buscarPrecio.addEventListener("click", buscarPorPrecio)

function buscarPorPrecio() {


	let	buscarPrecio = prompt("ingrese cifra maxima que desea gastar") 

	let precioBusqueda = arrayMenu.filter((Pizza)=>Pizza.precio <= buscarPrecio)
	
		precioBusqueda == 0  ? 
		alert("No existen productos con ese precio") 
		: 
		alert("Los productos encontrados con ese precio son:")
		for (let precioEncontrado of precioBusqueda) {
			precioEncontrado.hablar()
		
		
	}
}







function mostrarMenu() {
	for (Pizza of arrayPizzas) {Pizza.hablar();}
	for (Pasta of arrayPasta) {Pasta.hablar();}
	for (Ensalada of arrayEnsalada) {Ensalada.hablar();}
	for (Carne of arrayCarne) {Carne.hablar();}
	for (Trago of arrayTragos) {Trago.hablar();}
	for (Postre of arrayPostres) {Postre.hablar();}	
	for (Cafe of arrayCafe) {Cafe.hablar();}	
}



function buscarPorId() {
	let buscarId = parseInt(prompt("Ingrese el CODIGO del plato deseado"));

	let idEncontrado = arrayPizzas.find((Pizza)=>Pizza.id == buscarId )
    	||  arrayPasta.find((Pasta)=>Pasta.id == buscarId )  		
		||  arrayEnsalada.find((Ensalada)=>Ensalada.id == buscarId ) 
		||  arrayCarne.find((Carne)=>Carne.id == buscarId ) 
		||  arrayTragos.find((Tragos)=>Tragos.id == buscarId ) 
		||  arrayPostres.find((Postre)=>Postre.id == buscarId ) 
		||  arrayCafe.find((Cafe)=>Cafe.id == buscarId ) 
	idEncontrado == undefined  ?
		console.log("El codigo ingresado no esta asociado a ningun plato"):
		idEncontrado.idFuction()
}

*/


// Funcion limipiar previa a las cards de Menu

function limpiar() {
	let divPizzas = document.getElementById("pizzas")
	let divPasta = document.getElementById('pasta')
	let divCafe = document.getElementById("cafe")
	let divEnsalada = document.getElementById("ensalada")
	let divTragos = document.getElementById("tragos")
	let divPostres = document.getElementById("postres")
	let divCarne = document.getElementById("carne")
	divPizzas.innerHTML = ""
	divCafe.innerHTML = ""
	divEnsalada.innerHTML = ""
	divTragos.innerHTML = ""
	divPostres.innerHTML = ""
	divCarne.innerHTML = ""
	divPasta.innerHTML = ""
	
}



//Mostrardores de menu por categoria

let productosEnCarrito = []

function mostrarMenuPizzas(array) { 
	limpiar()
	let divPizzas = document.getElementById("pizzas")
	

	arrayPizzas.forEach((pizza)=>  {
		
		let nuevaPizza = document.createElement("div")

		nuevaPizza.innerHTML = `<div class="card fix my-3" style="width: 15rem;">
		                  			<img class="card-img-top " src="images/${pizza.imagen}" alt="pasta">
		                    			<div class=" bg-black card-body">
		                      				<h5 class="card-title">${pizza.version}</h5>
		                      					<p class="card-text">Precio: ${pizza.precio} </p>
		                      					<p class="card-text">Tamaño de producto: ${pizza.size}</p>
		                      				<button id="agregarBtn${pizza.id}" class="btn btn-primary ">Agregar al Carrito </button>
		                    			</div>
	                			</div>`
	        divPizzas.append(nuevaPizza)

	        let btnAgregar = document.getElementById(`agregarBtn${pizza.id}`)

			btnAgregar.addEventListener("click", () => {

				agregarAlCarritoPizza(pizza)

			})


	})



}


function agregarAlCarritoPizza (pizza) {
	productosEnCarrito.push(pizza)
	swal()
}




function swal() {
		Swal.fire({
		  titleText: 'Tu pedido se ha cargado al carrito exitosamente!',
		  confirmButtonText: 'Continuar',
		  background: "black",
		  timer: 2500,
		  color: "white",
		  iconColor: "green",
		  icon: "success",
		})

}






function mostrarMenuPasta(array)  { 
	limpiar()
	let divPasta = document.getElementById('pasta')
	arrayPasta.forEach((pasta)=> {

		let nuevaPasta = document.createElement("div")
		nuevaPasta.innerHTML = `<div class="card my-3" style="width: 15rem;">
		                  			<img class="card-img-top" src="images/${pasta.imagen}" alt="pasta">
		                    			<div class="bg-black card-body py-5">
		                      				<h5 class="card-title">${pasta.version}</h5>
		                      					<p class="card-text">Precio: ${pasta.precio}</p>
		                      					<p class="card-text">Tamaño de producto: ${pasta.size}</p>
		                      				<button id="agregarBtn${pasta.id}" class="btn btn-primary">Agregar al Carrito</button>
		                    			</div>
	                			</div>`
	   		 divPasta.append(nuevaPasta)

	   		let btnAgregar = document.getElementById(`agregarBtn${pasta.id}`)
			btnAgregar.addEventListener("click", () => {

				agregarAlCarritoPasta(pasta)

			})




	})

}

function agregarAlCarritoPasta (pasta) {
	productosEnCarrito.push(pasta)
	swal();
	
}






function mostrarMenuEnsalada () { 
	limpiar()
	let divEnsalada = document.getElementById("ensalada")

	arrayEnsalada.forEach((ensalada)=> {

		let nuevaEnsalada = document.createElement("div")

		nuevaEnsalada.innerHTML = `<div class="card my-3" style="width: 15rem; height:400px;">
		                  			<img class="card-img-top" src="images/${ensalada.imagen}" alt="pasta">
		                    			<div class="bg-black card-body">
		                      				<h5 class="card-title">${ensalada.version}</h5>
		                      					<p class="card-text">Precio: ${ensalada.precio}</p>
		                      					<p class="card-text">Tamaño de producto: ${ensalada.size}</p>
		                      				<button id="agregarBtn${ensalada.id}" class="btn btn-primary">Agregar al Carrito</button>
		                    			</div>
	                			</div>`
	   		 divEnsalada.append(nuevaEnsalada)
	   		 let btnAgregar = document.getElementById(`agregarBtn${ensalada.id}`)
				btnAgregar.addEventListener("click", () => {

				agregarAlCarritoEnsalada(ensalada)

			})




	})
}

function agregarAlCarritoEnsalada (ensalada) {
	productosEnCarrito.push(ensalada)
	swal();

}






function mostrarMenuCarne () { 
	limpiar()
	let divCarne = document.getElementById("carne")


	arrayCarne.forEach((carne)=> {

		let nuevaCarne = document.createElement("div")

		nuevaCarne.innerHTML = `<div class="card my-3" style="width: 15rem; height: 400px;">
		                  			<img class="card-img-top" src="images/${carne.imagen}" alt="carne">
		                    			<div class="bg-black card-body">
		                      				<h5 class="card-title">${carne.version}</h5>
		                      					<p class="card-text">Precio: ${carne.precio}</p>
		                      					<p class="card-text">Tamaño de producto: ${carne.size}</p>
		                      				<button id="agregarBtn${carne.id}" class="btn btn-primary">Agregar al Carrito</button>
		                    			</div>
	                			</div>`
	   		 divCarne.append(nuevaCarne)
	   		 let btnAgregar = document.getElementById(`agregarBtn${carne.id}`)
				btnAgregar.addEventListener("click", () => {

				agregarAlCarritoCarne(carne)

			})


	})

}

function agregarAlCarritoCarne (carne) {
	productosEnCarrito.push(carne)
	swal();
}





function mostrarMenuTragos() { 
	limpiar()
	let divTragos = document.getElementById("tragos")

	arrayTragos.forEach((tragos)=> {

		let nuevaTragos = document.createElement("div")

		nuevaTragos.innerHTML = `<div class="card my-3" style="width: 15rem; height: 500px">
		                  			<img class="card-img-top" src="images/${tragos.imagen}" alt="carne">
		                    			<div class="bg-black card-body">
		                      				<h5 class="card-title">${tragos.version}</h5>
		                      					<p class="card-text">Precio: ${tragos.precio}</p>
		                      					<p class="card-text">Tamaño de producto: ${tragos.size}</p>
		                      				<button id="agregarBtn${tragos.id}" class="btn btn-primary">Agregar al Carrito</button>
		                    			</div>
	                			</div>`
	   		 divTragos.append(nuevaTragos)
	   			let btnAgregar = document.getElementById(`agregarBtn${tragos.id}`)
				btnAgregar.addEventListener("click", () => {

				agregarAlCarritoCarne(tragos)

			})

	})

}

function agregarAlCarritoTragos (tragos) {
	productosEnCarrito.push(tragos)
	swal();
}









function mostrarMenuPostres() { 
		limpiar()
		let divPostres = document.getElementById("postres")


		arrayPostres.forEach((postre)=> {

			let nuevaPostre = document.createElement("div")

			nuevaPostre.innerHTML = `<div class="card my-3" style="width: 15rem;">
			                  			<img class="card-img-top" src="images/${postre.imagen}" alt="postre">
			                    			<div class="bg-black card-body">
			                      				<h5 class="card-title">${postre.version}</h5>
			                      					<p class="card-text">Precio: ${postre.precio}</p>
			                      					<p class="card-text">Tamaño de producto: ${postre.size}</p>
		                      					<button id="agregarBtn${postre.id}" class="btn btn-primary">Agregar al Carrito</button>
			                    			</div>
		                			</div>`
		   		 divPostres.append(nuevaPostre)
		   		 let btnAgregar = document.getElementById(`agregarBtn${postre.id}`)
				btnAgregar.addEventListener("click", () => {

				agregarAlCarritoCarne(postre)

			})


		})
}

function agregarAlCarritoPostres (postre) {
	productosEnCarrito.push(postre)
	swal();
}





function mostrarMenuCafe() { 
		limpiar()
		let divCafe = document.getElementById("cafe")

		arrayCafe.forEach((cafe)=> {

			let nuevaCafe = document.createElement("div")

			nuevaCafe.innerHTML = `<div class="card my-3" style="width: 15rem;">
			                  			<img class="card-img-top" src="images/${cafe.imagen}" alt="postre">
			                    			<div class="bg-black card-body">
			                      				<h5 class="card-title">${cafe.version}</h5>
			                      					<p class="card-text">Precio: ${cafe.precio}</p>
			                      					<p class="card-text">Tamaño de producto: ${cafe.size}</p>
		                      					<button id="agregarBtn${cafe.id}" class="btn btn-primary">Agregar al Carrito</button>
			                    			</div>
		                			</div>`
		   		 divCafe.append(nuevaCafe)
		   		let btnAgregar = document.getElementById(`agregarBtn${cafe.id}`)
					btnAgregar.addEventListener("click", () => {

					agregarAlCarritoCarne(cafe)

			})


		})

}





function agregarAlCarritoCafe (cafe) {
	productosEnCarrito.push(cafe)
	swal();
}








// Carrito y Botones del Carrito



let botonCarrito = document.getElementById("botonCarrito")
let modalBody = document.getElementById("modal-body")
let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")
let parrafoCompra = document.getElementById('precioTotal')

botonCarrito.addEventListener("click", ()=>{
    cargarProductosCarrito(productosEnCarrito)
})






//Creacion de envio de compra y captura de "Compra" con || (optimizacion) y confrmacion de envio final

let compraEnEnvio 


botonFinalizarCompra.addEventListener ("click", () => {
	
	let productosEnCarritoJSON = JSON.stringify(productosEnCarrito);
	localStorage.setItem("Compra", productosEnCarritoJSON);
	

	compraEnEnvio = JSON.parse(localStorage.getItem("Compra")) || []

		Swal.fire({
		  title: 'Estas a punto de finalizar tu compra',
		  text: "Revisa todos los productos que se encuentren en el carrito antes de confirmar",
		  icon: 'warning',
		  iconColor: "#22F13A",
		  showCancelButton: true,
		  color: "#FFFFFF",
		  background: '#000000',
  		  backdrop: `rgba(0,0,#93FCBD,0.4) left top no-repeat`,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'Confirmar'
			}).then((result) => {
		  if (result.isConfirmed) {
		    Swal.fire(
		      'Confirmado',
		      'Tu pedido está en envio',
		      'success'
		    )
		  }
		})

	console.log (compraEnEnvio)
})




//boton eliminar producto prueba






// Optimizacion con ternario (IF)


function cargarProductosCarrito(array){
    modalBody.innerHTML = ""

    array.forEach((productoCarrito)=>{

        modalBody.innerHTML += `

	        <div class="card border-primary mb-3 d-flex flex-wrap" id ="productoCarrito${productoCarrito.version}" style="max-width: 200px;">
	            <img class="card-img-top" src="images/${productoCarrito.imagen}" alt="${productoCarrito.version}">
	            <div class="card-body bg-black">
	                    <h4 class="card-title">${productoCarrito.version}</h4>
	                    <p class="card-text"> ${productoCarrito.size}</p>
	                    <p class="card-text">$${productoCarrito.precio}</p> 
	                    <button class= "btn btn-danger" id="${productoCarrito.id}r"><i class="fas fa-trash-alt"></i></button>
	            </div>    
	        
	        
	        </div>`

    })
    //calcular el total y aplicacion && para envio gratuito
    function compraTotal(array){
    let acumulador = 0

    acumulador = array.reduce((acumulador, productoCarrito)=>{
        return acumulador + productoCarrito.precio
    },0)
   
    acumulador == 0 ? Swal.fire({
					  icon: 'error',
					  title: 'Upa...',
					  text: 'Aún no hay productos en tu carrito!',
					   color: "#FFFFFF",
		  				background: '#000000',
					}):  
    	acumulador >= 3000 && Swal.fire({
							  position: 'top-end',
							  icon: 'success',
							  title: 'Felicidades ! con tu compra superior a $3000 obtienes el envio gratuito',
							  showConfirmButton: false,
							  timer: 2500
							});
        parrafoCompra.innerHTML = `El total de su carrito es ${acumulador}`
    	
}


   
    compraTotal(array)
}









//Compra total con ternario (IF)

function compraTotal(array){
    let acumulador = 0

    acumulador = array.reduce((acumulador, productoCarrito)=>{
        return acumulador + productoCarrito.precio
    },0)
    acumulador == 0 ?
					  Swal.fire({
					  icon: 'error',
					  title: 'Upa...',
					  text: 'Something went wrong!',
					}):    
      	
        parrafoCompra.innerHTML = `El total de su carrito es: ${acumulador}`
    
}








//botones de menues


let mostrarMenuPizzasBtn = document.getElementById("mostrarPizzasBtn")

mostrarMenuPizzasBtn.addEventListener("click",mostrarMenuPizzas)


let mostrarMenuPastaBtn = document.getElementById("mostrarPastaBtn")

mostrarMenuPastaBtn.addEventListener("click",mostrarMenuPasta)


let mostrarMenuEnsaladaBtn = document.getElementById("mostrarEnsaladaBtn")

mostrarMenuEnsaladaBtn.addEventListener("click",mostrarMenuEnsalada)



let mostrarMenuCarneBtn = document.getElementById("mostrarCarneBtn")

mostrarMenuCarneBtn.addEventListener("click",mostrarMenuCarne)



let mostrarMenuTragosBtn = document.getElementById("mostrarTragosBtn")

mostrarMenuTragosBtn.addEventListener("click",mostrarMenuTragos)


let mostrarMenuPostresBtn = document.getElementById("mostrarPostresBtn")

mostrarMenuPostresBtn.addEventListener("click",mostrarMenuPostres)



let mostrarMenuCafeBtn = document.getElementById("mostrarCafeBtn")

mostrarMenuCafeBtn.addEventListener("click", mostrarMenuCafe)


let mostrarMenuCompleto = document.getElementById("mostrarMenuBtn")





//boton buscar general


let buttonBuscar = document.getElementById("buttonBuscar")

buttonBuscar.addEventListener("click", buscarPorPlato )





//Buscador de platos

function buscarPorPlato() {
	let buscarPlato = document.getElementById("buscarPlato")

	switch (buscarPlato.value.toLowerCase()) {

	case "pizza":
	mostrarMenuPizzas();
	break;	

	case "margarita":
	mostrarMenuPizzas();
	break;

	case "primavera":
	mostrarMenuPizzas();
	break;

	case "caprese":
	mostrarMenuPizzas();
	break;

	case "pizza":
	mostrarMenuPizzas();
	break;

	case "flan" :
	mostrarMenuPostres();
	break; 

	case "helado":
	mostrarMenuPostres();
	break; 

	case "fruta":
	mostrarMenuPostres();
	break; 

	case "carne":
	mostrarMenuCarne();
	break;

	case "vacio" :
	mostrarMenuCarne();
	break;

	case "hamburguesa":
	mostrarMenuCarne();
	break; 

	case  "bife" :
	mostrarMenuCarne();
	break; 

	case  "chorizo" :
	mostrarMenuCarne();
	break;  

	case "asado" :
	mostrarMenuCarne();
	break; 

	case "pasta":
	mostrarMenuPasta();
	break;

	case "spaghetti":
	mostrarMenuPasta();
	break;

	case "ravioles":
	mostrarMenuPasta();
	break;

	case "macarrones":
	mostrarMenuPasta();
	break;

	case "vino":
	mostrarMenuTragos();
	break;

	case "cerveza":
	mostrarMenuTragos();
	break;

	case "refresco":
	mostrarMenuTragos();
	break;

	case "cesar":
	mostrarMenuEnsalada();
	break;

	case "tomate y lechuga":
	mostrarMenuEnsalada();
	break;

	case "papa y huevo":
	mostrarMenuEnsalada();
	break;

	case "lechuga y tomate":
	mostrarMenuEnsalada();
	break;

	case "cafe":
	mostrarMenuCafe();
	break;

	case "capuccino":
	mostrarMenuCafe();
	break;

	case "te":
	mostrarMenuCafe();
	break;

	default:
	buscarPlato = Toastify({
		  text: "Lo sentimos, el plato que buscas no se encuentra en nuestro Menu",
		  background: "red",
		  offset: {
		    x: 50, 
		    y: 10 },
			}).showToast();
			}
}









//Creacion de clientes 


function Cliente(nombre,apellido,calle,numeracion,telefono) {
	this.nombre = nombre;
	this.apellido = apellido;
	this.calle = calle;
	this.numeracion = numeracion;
	this.telefono = telefono;

}
	let nombreCliente = document.getElementById("nombreCliente")
	let apellidoCliente = document.getElementById("apellidoCliente")
	let calleCliente = document.getElementById("calleCliente")
	let numeracionCliente = document.getElementById("numeracionCliente")
	let telefonoCliente = document.getElementById("telefonoCliente")


let arrayClientes = []






function crearCliente(array) {

	let nombreCliente = document.getElementById("nombreCliente")
	let apellidoCliente = document.getElementById("apellidoCliente")
	let calleCliente = document.getElementById("calleCliente")
	let numeracionCliente = document.getElementById("numeracionCliente")
	let telefonoCliente = document.getElementById("telefonoCliente")

	let nuevoCliente = new Cliente (nombreCliente.value, apellidoCliente.value, calleCliente.value, numeracionCliente.value, telefonoCliente.value)
	array.push(nuevoCliente)

	console.log(array)
}


function alertaClienteNuevo() {
	const Toast = Swal.mixin({
  	toast: true,
  	position: 'top-end',
  	showConfirmButton: false,
  	timer: 6000,
  	iconcolor: "green",
  	timerProgressBar: true,
  	background: "black",
  	color: "white",
  	didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})


Toast.fire({
  icon: 'success',
  title: 'Gracias por registrarte, en instantes recibiras un SMS con tu código de cliente.',
})
}

//Almacenamiento cliente en el LocalStorage

let clienteNuevo = document.getElementById("clienteNuevo")

clienteNuevo.addEventListener("click", ()=>{
	crearCliente(arrayClientes);
	alertaClienteNuevo();

	let arrayClientesJSON = JSON.stringify(arrayClientes);
	localStorage.setItem("Clientes", arrayClientesJSON)
})



