//crear array para días como str y los valores como array.
var semana = ("lunes","martes","miercoles","jueves","viernes","sabado","domingo");
var precios = [1000,1500,5000,600,800,6500,9860];
var compra = [300,3000,5500,5990,9990,10000]
//1.crear funcion que muestre  para días martes y jueves un 20% desc en total de la compra
function descmartesyjueves (x){
    if (semana = "martes" || semana = "jueves"){
        console.log(x = totalcompra(compra[0]+compra[1]+compra[2],compra[3]+compra[4]+compra[5])*0.8); //Es necesario que sume todos los numeros del array compra y lo *0.8
    }else{
        console.log(x = totalcompra);
    }
    return(x)
}
console.log(x)

//2.Función que calculé el total con 5% desc, si la compra es: tiene más
// de 3 productos y uno de ellos tiene un valor mayor a 10.000.
function 5descuento = (y){
    if(compra.length > 3 && compra[i]>10000){ //si tiene más de 3 posiciones la compra y un valor mayor a 10000 
       console.log(y= (compra[0]+compra[1]+compra[3]+compra[4],compra[5])*0.95); //muestra y como la sumatoria de los item *0.95 (5% de descuento aplicado)
    }else{
        console.log(y=(compra[0]+compra[1]+compra[3]+compra[4],compra[5]));//de lo contrario muestra solo la sumatoria
    }
    return(y)
}
console.log(y)

//3. Crear función que verifique valores negativos
//si hay valores negativos, devuelve "error", el valor negativo y la posición o indice donde esta.
//si no hay valores negativos, devuelve "exito"

function verificarerror (str){//se crea función string que verifique si tiene error o no
    if(compra < 0){
    console.log(a = "error", compra[i], compra[]);//si tiene error, que devuelva "error", la posición y el valor
    }else{
        console.log("exito")
    }
}
console.log(str)

//4.crear funcion que retorne el valor del producto más alto.
//crear funcion que retorne el valor del producto más bajo.
precios1 = [200,5500,900,7000,500,300]
var preciomayor = 0;
//crear una funcion que encuentre el precio más alto
for(i= 0; i < precios1.length; i++){
    if(precios1[i] > preciomayor)
{
preciomayor = precios1[i];
};
}
console.log(precios1);

//crear una funcion que encuentre el precio más bajo
var preciomenor = 0 
for(i= 0; i < precios1.length; i++){
    if(precios1[i] < preciomenor)
{
preciomenor = precios1[i];
};
}
console.log(precios1);