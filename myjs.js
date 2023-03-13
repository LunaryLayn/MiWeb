//Arranque inicial de la pagina, y funciones para cargar algunos elementos de la misma
$(function () {
    console.log("ready!");
    typewriter(); //Carga de la animacion del titulo
})

//Animacion titulo
var quoteArray = ["Desarrollador profesional<br>Mobile y Web - Fullstack"];
var textPosition = 0;
var speed = 100;

typewriter = () => {
    $('#title').html(quoteArray[0].substring(0, textPosition) + '<span>&#10074</span>') ;

    if (textPosition++ != quoteArray[0].length)
        setTimeout(typewriter, speed);
}