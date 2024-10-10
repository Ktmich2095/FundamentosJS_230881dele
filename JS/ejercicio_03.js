// //objetos

// const productoUno = {
//     Nombre: "Tablet",
//     Marca: "Mac",
//     Modelo: "iPad",
//     Venta: 222.12,
//     sku: Symbol("123na9"),
//     Colores:["Blanca", "Gris","Rosa","Azul"]
// }

// //imprimir el objeto
// console.warn("--- OBJETO---");
// console.log(productoUno);

// //Los objetos también pueden representarse en formato de tabla utilizando la función console.table
// console.table(productoUno);
// console.log(productoUno,Colores);
// console.log(productoUno,Venta);

// //Acceder a las propiedades de un objeto
// console.warn("Leyendo las propiedades de un objeto y sus tipos de datos\n")
// console.log(`Nombre del producto: ${producto,Nombre} que es del tipo: ${typeof(productoUno,Nombre)}`)

// const producto = {
//     nombre : "tablet", 
//     precio : 300,
//     disponible : true
// }

// console.log(producto)
// console.table(producto)

// console.log(producto.nombre)
// console.log(producto.precio)
// console.log(producto.disponible)

// //Destructuring
// const { nombre,precio,disponible } = producto
// console.log(nombre)
// console.log(precio)
// console.log(disponible)

// //Object literal enhacement
// const autenticado = true
// const usuario = "Michelle"

// const nuevoObjeto = {
//     autenticado : autenticado,
//     usuario : usuario
// }
// console.table(nuevoObjeto)

const bg= "linear-gradient(11deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";

const style_console= `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`;

//Personalización de las salidas a consola

console.warn("Práctica 05: Repaso de Objetos en JavaScript");

//Variables independientes
console.log("%c1.- Variables independientes", style_console);


//Declaramos valores independientes relacionadas a un PRODUCTO

let Producto_Nombre= "Computadora\"";
let Producto_Marca= "ASUS";
let Producto_Modelo= "ASUS Zenbook";
let Producto_Precio= 15749.50;
let Producto_Disponibilidad= true;
let Producto_SKU= Symbol("TUF707VV-HX221W");
let Producto_Stock=15;
let Producto_Imagen=null;
let Producto_Barcode;
let Producto_Categorias=["Electrónicos", "Computación"];


//accedemos a los valores actuales de las características del producto de manera independiente 

console.log(`Los datos del PRODUCTO son: \n Nombre: ${Producto_Nombre}, Tipo de Dato <${typeof(Producto_Nombre)}>
    Marca: ${Producto_Marca}, Tipo de Dato <${typeof(Producto_Marca)}>
    Modelo: ${Producto_Modelo}, Tipo de Dato <${typeof(Producto_Modelo)}>
    Precio: ${Producto_Precio}, Tipo de Dato <${typeof(Producto_Precio)}>
    Disponibilidad: ${Producto_Disponibilidad}, Tipo de Dato <${typeof(Producto_Disponibilidad)}> 
    Stock: ${Producto_Stock}, Tipo de Dato <${typeof(Producto_Stock)}>
    Barcode: ${Producto_Barcode}, Tipo de Dato <${typeof(Producto_Barcode)}>
    Imagen: ${Producto_Imagen}, Tipo de Dato <${typeof(Producto_Imagen)}>
    Categorías: ${Producto_Categorias}, Tipo de Dato <${typeof(Producto_Categorias)}>`);

    
    console.log("En el caso del SKU al ser un Symbol, no se puede concatenar a la cadena de impresión anterior")
    console.log(Producto_SKU);
    console.log(typeof(Producto_SKU));

//ahora la declaramos como un objeto
console.log("%c2.- Objeto", style_console)

let Producto=
{
    ID:3216,
    Nombre: "celular",
    Marca: "iPhone",
    Modelo: "iPhone 14",
    Precio: 3361.25,
    Disponibilidad: false,
    Stock: 0,
    SKU: "DZ5485-612",
    Imagen: "",
    Barcode: null,
    Categorias: ["electronica", "telefonos"]
}

//Ahora leemos el objeto completo

console.table(Producto);

//Para acceder a las propiedades del objeto utilizamos un "," y el nombre de la propiedad a leer.

console.log("Accediendo a propiedades específicas del PRODUCTO")
console.log(`Nombre Completo del PRODUCTO: ${Producto.Nombre} ${Producto.Marca} ${Producto.Modelo}`)
console.log(`Precio: ${Producto.Precio}`)

if(Producto.Disponibilidad == 0)
console.log(`Estatus: Agotado`)
else
console.log(`Estatus: ${Producto.Stock} unidades disponibles.`)



//Desestructuración de objetos.
console.log("%c3.- Destructuración de Objetos", style_console);

let Producto2=
{
    Clave: 316,
    Nombre: "Lentes para Sol",
    Marca: "Oakley",
    Modelo: "QNTM Kato",
    Precio: 6829.00,
    Disponibilidad: true,
    Stock: 5,
    SKU: "009481D-0356",
    Imagen: "../assets/products/sunglasses/KatoRe.png",
    Barcode: 888392491626 ,
    Categorias: ["Deportes", "Lentes", "Hombre", "Accesorios"]
}

let Comprador={
    ID: 3216,
    Nombre: "Mich",
    Apellidos: "Otero",
    Tipo: "Fugaz",
    Correo: "2095@gmail.com",
    PaisOrigen: "México",
    SaldoActual: 14000.00
}

let Pedido={
    ID: 5816,
    Producto_ID: 316,
    Comprador_clave: 3216,
    Cantidad: 2,
    Estatus: "Carrito de compra",
    TipoPago: "Tarjeta de Crédito"
}

//En base de a los 3 objetos necesitamos calcular el costo de la compra y si nos alcanza a favor del cliente
let{Precio: Producto_Precio2}=Producto2; 
let{Cantidad: Pedido_Cantidad}= Pedido;
let{SaldoActual: Cliente_SaldoActual}= Comprador;
let Costo_Compra= Producto_Precio2*Pedido_Cantidad;

console.log(`El cliente ha agregado a su carrito de compras ${Pedido_Cantidad} unidades, con un costo total de: $${(Costo_Compra)}`)

if(Costo_Compra< Cliente_SaldoActual)
    console.log("El cliente tiene saldo suficiente")




//Actualizar el valor de los objetos

console.log("%c4.- Actualización de los valores de las propiedades de un objeto",style_console);
console.log(`El objeto actualmente tiene los siguientes valores`)
console.log(JSON.stringify(Producto2, null, 2));
//Connvierte el objeto de una cadena para evitar problemas con la referencia 
console.log(`Por cuestiones de inflación el costo del producto ha cambiado y debe ser actualizado... de $6,829.00 a $6,915.50`)

//Para modificar el valor de un objeto basta con igualar el nuevo valor de la propiedad
Producto2.Precio=6915.50;
console.log(`Los nuevos valores del Producto son:`)
console.log(Producto2);

// ¿Puedo cambiar no solo el valor sino el tipo de dato de un objeto en JS?
console.log(`-----------------------------------------------------------------------------------`)
console.log(`El objeto actualmente tiene los siguientes valores`)
var tipoDisponibilidad= typeof(Producto2.Disponibilidad)
console.log(`El tipo de dato de la disponibilidad es: ${tipoDisponibilidad}`)
console.log(JSON.stringify(Producto2,null,2)); //Disponibilidad Boolean
Producto2.Disponibilidad="Sí";
let nuevoTipoDisponible= typeof(Producto2.Disponibilidad)
console.log(Producto2);
console.log(`El tipo de dato de la disponibilidad es: ${nuevoTipoDisponible}`)

//Agregar nuevas propiedades a un objeto existente
console.log("%c5.- Agregación de propiedades de un objeto", style_console);
console.log("Objeto antes de ser modificado: ");
console.table(Comprador);

//Agregando propiedades
Comprador['Direccion'] = "Granate #3, Luis Donaldo Colosio, Huauchinango, Puebla, México";
Comprador['Tipo'] = "Premium";
Comprador['Estatus'] = "Inactivo";
Comprador['TotalCompras'] = 50000.00
console.log("Objeto despues de ser modificado");
console.table(Comprador)


//Eliminar propiedades de un objeto existente
console.log("%c6.- Eliminación de propiedades de un objeto (MUTACIÓN)", style_console);
console.log("La estructura y valores del objeto PEDIDO son previos a la modificación:")
console.table(Pedido)
delete Pedido.TipoPago
console.log("Despues de la modificación...")
console.table(Pedido)

console.log("%c7.- Métodos para controlar la mutabilidad de los Objetos, Congengelación (FREEZE)",style_console)

//Si deseamos no permitir que los objetos sean modificados ni en estructura, ni en valor, utilizaremos el método FREEZE(conngelar)
console.log('La estructura actual del objeto COMPRADOR es: ')
console.table(Comprador)
Object.freeze(Comprador)
//Inteneramos agregar, eliminar o modificar los valores de sus propiedades
Comprador.FechaUltimaCompra = "10/08/24 10:15:25"
delete Comprador.Tipo;
Comprador.Direccion="Narciso Mendoza #14, Los dicios, San Martin Texmelucan, Puebla"
console.log("Verificamos si se realizaron los cambios en el objeto COMPRADOR")
console.table(Comprador)

console.log("%c8.- Métodos para controlar la mutabilidad de los objetos, sellado (SEAL)", style_console);
//Sin embargo, en el caso que deseamos poder modificar los valores de las propiedades del objeto, pero no su estructura, usaremos SEAL
console.log("Objeto antes de ser modificado")
console.table(Pedido)
//Sellamos el objeto
Object.seal(Pedido)
//Intentamos modificar su estructura
Pedido['FechaPedido'] = "28/08/24 11:05:10"
delete Pedido['Cantidad'];
console.log('Verificamos si se realizaron los cambios en el Objeto PEDIDO')
console.table(Pedido)
//Ahora intentamos modificar el valor de las propiedades
Pedido.Cantidad= 5
console.log("Verificamos si se realizaron los cambios en el objeto PEDIDO")
console.table(Pedido)

//Destructuración de 2 o más objetos
console.log("%c9.- Destructuración de 2 o más objetos", style_console);
let{Precio:productoPrecio, Marca:productoMarca}=Producto
let{Correo:clienteCorreo, PaisOrigen:clientePais, SaldoActual:clienteSaldo, Tipo:clienteTipo}=Comprador

//Transformar valores cuantitativos en cualitativo
if(productoPrecio>2000)
    productoPrecio = "Caro"
else
    productoPrecio = "Barato"

if(clienteSaldo > 0)
    clienteSaldo = "A favor"
else if (clienteSaldo < 0)
    clienteSaldo = "En contra"
else
    clienteSaldo = "Sin deuda"

//Transformar valores cualitativos en cuantitativos

let clienteNivel;

if(clienteTipo == "Premium")
    clienteNivel = 1
else if(clienteTipo == "Freemium")
    clienteNivel = 2
else if(clienteTipo == "No identificado")
    clienteNivel = 3

//Clasificamos al cliente por su País de Origen
if(clientePais == "México")
    clientePais = "Nacional"
else
    clientePais = "Extranjero"

//OLE - Object Literal Enhacement

let datosClientePromociones = (clienteCorreo,clientePais, clienteNivel, clienteSaldo, productoMarca, productoPrecio)

//El nuevo objeto que creamos seria un ejemplo de la información que enviariamos el area de Marketing para la difusión de promociones
console.log("Los datos del cliente y sus hábitos de compra son: ")
console.table(datosClientePromociones)



//Operaciones sobre objetos
//Unión de objetos
console.log("%c10.- Unión de Objetos usando el método de asignación (ASSING)",style_console)

console.log("Imprimimos la estructura y valores del objeto PRODUCTO")
console.table(Producto)


console.log("Imprimimos la estructura y valores del Objeto PEDIDO")
console.table(Pedido)

//Suponiendo que el usuario ya realizó el pago el pedido se convertira en una VENTA que requiere información de ambos objetos

const Venta = Object.assign(Producto, Pedido);
console.log("Consultamos este nuevo objeto VENTA")
console.table(Venta);

//Unión de objetos usando SPREAD OPERATOOR para evitar la perdida de información con objetos que comparten el mismo nombre en sus propiedades
console.log("%c11.- Unión de objetos usando el SPREAD OPERATOR(...)",style_console)
Producto.ID=100;
let Venta2={
    producto: {...Producto},
    comprador:{...Comprador},
    pedido:{...Pedido}
}

console.log("Fusionamos los 3 objetos en uno nuevo, sin perdida de información")
console.log(Venta2)
console.table(Venta2)

//Verificar el estatus de mutabilidad de los objetos
console.log("Vamos a verificar el estatus de mutabilidad del objetos PEDIDO")
console.log(`Esta el objeto de Pedido Congelado ? : ${Object.isFrozen(Pedido)}`)
console.log(`Esta el objeto de Pedido Congelado: ${Object.isSealed(Pedido)}`);

console.log("Vamos a verificar el estatus de mutabilidad del objetos COMPRADOR")
console.log(`Esta el objeto de Pedido Congelado ? : ${Object.isFrozen(Comprador)}`)
console.log(`Esta el objeto de Pedido Congelado: ${Object.isSealed(Comprador)}`);

console.log("Vamos a verificar el estatus de mutabilidad del objetos PRODUCTO")
console.log(`Esta el objeto de Pedido Congelado ? : ${Object.isFrozen(Producto)}`)
console.log(`Esta el objeto de Pedido Congelado: ${Object.isSealed(Producto)}`);

//Modificamos la estructura de producto, agregando una nueva propiedad
Producto["isLegacy"]=false;
console.log(Producto)
console.log(Venta2)



