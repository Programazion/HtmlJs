alert('LOADING PAGE')
console.log("LOADING JavaScript");
console.log(Date());

function actionButton(){

    console.log('My Action');
    alert("Esta seguro de cambiar el texto?");
    var elementP= document.getElementsByTagName('p');
    elementP[0].innerHTML="El texto se cambió al oprimir el boton";
}
/*var elementP = document.getElementsByTagName('p');
//typeof varname, varname nos muestra todos los atributos que contiene un elemento seleccionado.

//console.log(typeof elementP, elementP);
console.log(elementP[0]); 
//Inne.Html edita texto estático y dinámico en funciones
//elementP[0].innerHTML ="Este Texto fue editado porque antes era Lorem ipsun"

//var idP = document.getElementById('MyText') = "data"
//console.log(idP)
/*var idP = document.getElementById('myInput');
*/
/*var elementsP = document.querySelectorAll('p')
console.log(elementsP[0]) 

function action(){
    var elementP = document.getElementById("MyText");
    elementP.innerHTML="Texto editado";
}*/

// Aplicando un condicional

/*const a = "abc"
if(a=="abc"){
    var elementP = document.getElementsByTagName('p');
    elementP[1].innerHTML ="Este Texto fue editado por un condicional";   
}*/
