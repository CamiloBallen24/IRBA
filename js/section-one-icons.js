let icon_home = document.getElementById("section-one__icon--home");
let icon_headphones = document.getElementById("section-one__icon--headphones");
let icon_cogs = document.getElementById("section-one__icon--cogs");
let icon_users = document.getElementById("section-one__icon--users");
let icon_flask = document.getElementById("section-one__icon--flask");
let icon_umbrella = document.getElementById("section-one__icon--umbrella");


let container = document.getElementById("section-one__text");
let title = document.getElementById("section-one__text__title");
let description = document.getElementById("section-one__text__description");



let icons = [
    icon_home,
    icon_headphones,
    icon_cogs,
    icon_users,
    icon_flask,
    icon_umbrella
];

let titles = [
    "Brand New Features",
    "Done Awesomely",
    "100% Mobile Ready",
    "Award Winning",
    "New Technology",
    "Ultimate Solution"
];

let descriptions = [
    "Competently transform proactive internal or organic",
    "Quicquam fratrum declivia gravitate. Nam coegit alto unda",
    "Pumero divino toto prima ensis. Cingebant uno pluvialibus",
    "Nitidis locum auroram dissaepserat ulla dextra rapidisque",
    "Phosfluorescently redefine plug-and-play best practices",
    "Nam coegit alto unda austro liberioris effigiem"
];



function changeAnimation(i){
    container.classList.add("section-one__text--animation");
    icons[i].classList.add("section-one__icon--animation");

    setTimeout(() =>{
        title.innerHTML = titles[i];
        description.innerHTML = descriptions[i];
    }, 500);
}


for (let i = 0; i < 6; i++) {
    icons[i].addEventListener('animationend', (event)=>{
        icons[i].classList.remove("section-one__icon--animation");
        changeAnimation((i+1)%6);
    });
}



for (let i = 0; i < 6; i++) {
    icons[i].addEventListener('click', (event)=>{
        cancelAnimations();
        changeAnimation(i);
    });
}

function cancelAnimations(){
    for (let i = 0; i < 6; i++) {
        let animations = icons[i].getAnimations;
        for (let animation in animations) {
            animation.cancel();
        }
        icons[i].classList.remove("section-one__icon--animation");
    }
}



container.addEventListener('animationend', (event) =>{
    container.classList.remove("section-one__text--animation");
});