//Constantes 
let classMainBackgrounds = [
    "main--background-1", 
    "main--background-2",
    "main--background-3",
    "main--background-4",
    "main--background-5"
    ];

let classArrowsBackgrounds = [
    "main__arrow--background-1", 
    "main__arrow--background-2",
    "main__arrow--background-3",
    "main__arrow--background-4",
    "main__arrow--background-5"
    ];

let titlesMain= [
    "CLEAN MINIMALIST DESING",
    "USE OF CONCEPTS HTML CSS JS",
    "USE OF NICE ANIMATIONS",
    "LEARNING AND PRACTICE PROJECT",
    "RESPONSIVE DESIGN"
];



//Objectos 
let main = document.getElementById("main");
let arrow__left = document.getElementById("arrow__left");
let arrow__right = document.getElementById("arrow__right");
let main__subtitle = document.getElementById("main__subtitle");
let main__title = document.getElementById("main__title");


let background_count = 0;



function changeBackgroundImage(right){
    if(right){
        background_count = indexImage(background_count+1);
    }
    else{
        background_count = indexImage(background_count-1);
    }
 
    main.classList.add("main--background-animation");
    main__title.classList.add("main__title--animation");
    main__subtitle.classList.add("main__subtitle--animation");
    
    main__title.innerHTML = titlesMain[indexImage(background_count)];

    main.classList.add(classMainBackgrounds[indexImage(background_count)]);
    arrow__left.classList.add(classArrowsBackgrounds[indexImage(background_count-1)]);
    arrow__right.classList.add(classArrowsBackgrounds[indexImage(background_count+1)]);

    if(right){
        main.classList.remove(classMainBackgrounds[indexImage(background_count-1)]);
        arrow__left.classList.remove(classArrowsBackgrounds[indexImage(background_count-2)]);
        arrow__right.classList.remove(classArrowsBackgrounds[indexImage(background_count)]);
    }
    else{
        main.classList.remove(classMainBackgrounds[indexImage(background_count+1)]);
        arrow__left.classList.remove(classArrowsBackgrounds[indexImage(background_count)]);
        arrow__right.classList.remove(classArrowsBackgrounds[indexImage(background_count+2)]);
    }


}

function indexImage(index){
    index = index % classMainBackgrounds.length;
    if(index<0){
        index = classMainBackgrounds.length -1;;
    }
    return index;
}


arrow__right.addEventListener('click', ()=>{
    changeBackgroundImage(true);
});

arrow__left.addEventListener('click', ()=>{
    changeBackgroundImage(false);
});

main.addEventListener("animationend", ()=>{
    main.classList.remove("main--background-animation");
});

main__subtitle.addEventListener("animationend", ()=>{
    main__subtitle.classList.remove("main__subtitle--animation");
});

main__title.addEventListener("animationend", ()=>{
    main__title.classList.remove("main__title--animation");
});
