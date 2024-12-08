var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

//FRASE QUE DESAPARECE
typewriter.typeString('Desarrolladora Frontend Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('La diferencia entre lo ordinario y lo extraordinario es un poquito de esfuerzo...')
    .pauseFor(2500)
    //NUMERO DE CARACTERES QUE SE BORRARÁN
    .deleteChars(22)
    .typeString('<strong>código bien hecho.</strong>')
    .pauseFor(2500)
    .start();