//Arranque inicial de la pagina, y funciones para cargar algunos elementos de la misma
$(function () {
    console.log("ready!");
    typewriter(); //Carga de la animacion del titulo
})

//Animacion titulo
var quoteArray = ["Desarrollador profesional - Mobile y Web - Fullstack"];
var textPosition = 0;
var speed = 50;

var img = $('<img />', { 
    src: './res/foto.jpeg', 
    class: 'hidden-img' // Esta clase oculta la imagen inicialmente
})

typewriter = () => {
    $('#title').html(quoteArray[0].substring(0, textPosition) + '<span>&#10074</span>') ;

    if (textPosition++ != quoteArray[0].length) {
        setTimeout(typewriter, speed);
    } else {
        $("#mifoto").fadeIn(2000);
        
    }
}

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('.navbar').addClass('scrolled');
    } else {
      $('.navbar').removeClass('scrolled');
    }
  });
  

