/**
 * 
 */

var num = 0;
var texto = ""

function calculo(valor) {
	
	texto += valor
	document.getElementById("posicion").innerHTML=texto

}

function sumar(valor) {
	
	texto += valor
	document.getElementById("posicion").innerHTML=texto

}

function restar(valor) {
	
	texto += valor
	document.getElementById("posicion").innerHTML=texto

}

function multiplicar(valor) {

	texto += valor
	document.getElementById("posicion").innerHTML=texto

}

function dividir(valor){
	
	texto += valor
	document.getElementById("posicion").innerHTML=texto
	
}

function borrar() {
	
	texto = ""
	document.getElementById("posicion").innerHTML=texto

}

function resultado() {	
	
	document.getElementById("posicion").innerHTML=eval(texto)
	texto=eval(texto)
	
}
