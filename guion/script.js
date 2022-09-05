//Creo la clase de objeto producto como base para cargar los productos 
class Producto {
    constructor(nombre, id, precio, color, stock) {
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.color = color;
        this.stock = stock;
    }

    vender(cantidad) {
        this.stock = this.stock - cantidad;
    }
}

//Inicializo los arrays para las categorias de los productos
const remeras = [];
const sacos = [];
const jeans = [];

//Cargo el stock de productos segun su categoria
//REMERAS
remeras.push(new Producto("Viva la vida", 1, 1400, "Beige", 30));
remeras.push(new Producto("La vie en rose", 2, 1400, "Rose", 10));
remeras.push(new Producto("Musculosa paz", 3, 1000, "Blanco", 20));
remeras.push(new Producto("Remera Good Times", 4, 1000, "Blanco", 15));
//SACOS DE PAÑO
sacos.push(new Producto("Saco de paño scream", 5, 9000, "Marron", 20));
sacos.push(new Producto("Saco de paño rojo vino", 6, 7000, "Rojo", 40));
sacos.push(new Producto("Saco de paño marron", 7, 7000, "Marron", 40));
//JEANS
jeans.push(new Producto("Jeans negro", 8, 4200, "Negro", 10));
jeans.push(new Producto("Jeans beige", 9, 4500, "Beige", 10));


//Recorro los arrays para mostrarle los productos al usuario
for (const remera of remeras) {
    alert("ID (" + remera.id + ") - " + remera.nombre);
}
for (const saco of sacos) {
    alert("ID (" + saco.id + ") - " + saco.nombre);
}
for (const jean of jeans) {
    alert("ID (" + jean.id + ") - " + jean.nombre);
}

//Funcion para calcular el precio final de la compra
function calcularPrecio(precioPrenda, cantidadPrenda, costoEnvio) {
    return ((precioPrenda * 1.21) * cantidadPrenda) + costoEnvio;
}

//Solicito al usuario el ID de la prenda y lo almaceno en una nueva variable con la prenda seleccionada
let prendaSeleccionada = parseInt(prompt("Ingrese el ID de la prenda que desea comprar:"));
const remeraBuscada = remeras.find(remera => remera.id === prendaSeleccionada);
const sacosBuscado = sacos.find(sacos => sacos.id === prendaSeleccionada);
const jeansBuscado = jeans.find(jeans => jeans.id === prendaSeleccionada);

//Solicito al usuario la cantidad de la prenda
let cantidad = parseInt(prompt("Ingrese la cantidad de unidades que quiere comprar de la prenda seleccionada:"));

//Costo de envio promedio dentro de CABA
const envio = 800;

//Salidas de consola indicando el precio final de la compra segun la prenda elegida
if (prendaSeleccionada <= 0) {
    alert("Ingresa un ID valido");
} else if (prendaSeleccionada <= 4) {
    alert("El precio final de tu compra es: $" + calcularPrecio(remeraBuscada.precio, cantidad, envio));
    alert("¡Que lo disfrutes!")
    remeraBuscada.vender(cantidad);
} else if (prendaSeleccionada <= 7) {
    alert("El precio final de tu compra es: $" + calcularPrecio(sacosBuscado.precio, cantidad, envio));
    alert("¡Que lo disfrutes!")
    sacosBuscado.vender(cantidad);
} else if (prendaSeleccionada <= 9) {
    alert("El precio final de tu compra es: $" + calcularPrecio(jeansBuscado.precio, cantidad, envio));
    alert("¡Que lo disfrutes!")
    jeansBuscado.vender(cantidad);
} else {
    alert("Ingresa un ID valido");
}
