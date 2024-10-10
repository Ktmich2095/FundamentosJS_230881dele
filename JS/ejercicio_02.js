let miCliente;
console.log("El cliente es: ", miCliente)
console.log("El tipo de dato de la variable cliente es: ",typeof(miCliente));
miCliente = "Michelle";
console.log("El cliente es: ", miCliente)
console.log("El tipo de dato de la variable cliente es: ",typeof(miCliente));
miCliente = 123;
console.log("El cliente es: ", miCliente)
console.log("El tipo de dato de la variable cliente es: ",typeof(miCliente));
//Undefined es el tipo de dato que por defecto se asigna a variables no inicializadas
console.warn("--- Tipo de Dato : BOOLEAN (Boleano - True/False)")
let esPremium = "No lo sé";
console.log(`¿Es el cliente Premium?: ${esPremium}`)
console.log("El tipo de dato de la variable cliente es: ",typeof(esPremium));
console.log("Asignando el valor 'true' a la variable")
esPremium = true
console.log("El tipo de dato de la variable cliente es: ",typeof(esPremium));
console.log(`¿Es el cliente Premium?: ${esPremium}`)
esPremium=0
if(esPremium)
    console.log("El cliente pago por usar el servicio.");
else 
    console.log("El cliente que recibe los servicios gratuitos")
// 3. NUMBER
var cantidad;
const costo_producto = 10.50;
let saldo_cuenta = -2500.40;
let monto_transacción;
console.warn("---Tipo de Dato - NUMBER (Números, positivos, negativos, decimales, flotantes)");
console.log(`Tu saldo al día de hoy es de: ${saldo_cuenta}, (Tipo de Dato = ${typeof(saldo_cuenta)})`);
console.log(`El producto que has seleccionado cuesta: ${costo_producto}`);
cantidad = 8;
console.log(`Has elegido comprar: ${cantidad} de productos.`);
console.log(`El importe total de la compra es:  ${(cantidad*costo_producto)}`);
saldo_cuenta = saldo_cuenta - (cantidad*costo_producto);
console.log(`Tu nuevo saldo es de: ${saldo_cuenta}`);
//El cliente realiza un abono de 1500
monto_transacción=1500;
console.log(`Tu abono de ${monto_transacción} ha sido recibida, tu nuevo saldo es de: ${(saldo_cuenta+monto_transacción)}`)