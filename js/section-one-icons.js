//Iconos
let icon_home = document.getElementById("section-one__icon--home");
let icon_headphones = document.getElementById("section-one__icon--headphones");
let icon_cogs = document.getElementById("section-one__icon--cogs");
let icon_users = document.getElementById("section-one__icon--users");
let icon_flask = document.getElementById("section-one__icon--flask");
let icon_umbrella = document.getElementById("section-one__icon--umbrella");

//Iconos
let icons = [
    icon_home,
    icon_headphones,
    icon_cogs,
    icon_users,
    icon_flask,
    icon_umbrella
];

//Elementos
let container = document.getElementById("section-one__text");
let title = document.getElementById("section-one__text__title");
let description = document.getElementById("section-one__text__description");



//Titulos
let titles = [
    "Brand New Features",
    "Done Awesomely",
    "100% Mobile Ready",
    "Award Winning",
    "New Technology",
    "Ultimate Solution"
];

//Descripciones
let descriptions = [
    "Competently transform proactive internal or organic",
    "Quicquam fratrum declivia gravitate. Nam coegit alto unda",
    "Pumero divino toto prima ensis. Cingebant uno pluvialibus",
    "Nitidis locum auroram dissaepserat ulla dextra rapidisque",
    "Phosfluorescently redefine plug-and-play best practices",
    "Nam coegit alto unda austro liberioris effigiem"
];


//Cambio de circulo titilante
function changeAnimation(i){
    //Animacion del texto
    container.classList.add("section-one__text--animation");
    //Animacion del icono
    icons[i].classList.add("section-one__icon--animation");

    //Cuando desaparesca el texto cambiarlo
    setTimeout(() =>{
        title.innerHTML = titles[i];
        description.innerHTML = descriptions[i];
    }, 500);
}


//Siguiente aniamcion
for (let i = 0; i < 6; i++) {
    //Cuando termina la animacion de un icono
    icons[i].addEventListener('animationend', (event)=>{
        //Elimina la animacion
        icons[i].classList.remove("section-one__icon--animation");
        //Anima el siguiente circulo
        changeAnimation((i+1)%6);
    });
}


//Cuando se clickea un icono
for (let i = 0; i < 6; i++) {
    icons[i].addEventListener('click', (event)=>{
        //Cancela todas las animaciones
        cancelAnimations();
        //Anima al icono seleccionado
        changeAnimation(i);
    });
}

//Cancelar todas las animaciones
function cancelAnimations(){
    for (let i = 0; i < 6; i++) {
        let animations = icons[i].getAnimations;
        for (let animation in animations) {
            animation.cancel();
        }
        icons[i].classList.remove("section-one__icon--animation");
    }
}


//Eliminar la animacion del texto
container.addEventListener('animationend', (event) =>{
    container.classList.remove("section-one__text--animation");
});