let section_three__option_all = document.getElementById("section-three__option--all");
let section_three__option_slider = document.getElementById("section-three__option--slider");
let section_three__option_video = document.getElementById("section-three__option--video");

let section_three__element_one = document.getElementById("section-three__element--one");
let section_three__element_two = document.getElementById("section-three__element--two");
let section_three__element_three = document.getElementById("section-three__element--three");
let section_three__element_four = document.getElementById("section-three__element--four");
let section_three__element_five = document.getElementById("section-three__element--five");
let section_three__element_six = document.getElementById("section-three__element--six");
let section_three__element_seven = document.getElementById("section-three__element--seven");
let section_three__element_eight = document.getElementById("section-three__element--eight");
let section_three__element_nine = document.getElementById("section-three__element--nine");
let section_three__element_ten = document.getElementById("section-three__element--ten");
let section_three__element_eleven = document.getElementById("section-three__element--eleven");
let section_three__element_twelve = document.getElementById("section-three__element--twelve");

let all = [
    section_three__element_one,
    section_three__element_two,
    section_three__element_three,
    section_three__element_four,
    section_three__element_five,
    section_three__element_six ,
    section_three__element_seven,
    section_three__element_eight,
    section_three__element_nine,
    section_three__element_ten,
    section_three__element_eleven,
    section_three__element_twelve
]

let slider = [
    section_three__element_one,
    section_three__element_four,
    section_three__element_five,
    section_three__element_six ,
    section_three__element_ten,
];


let video = [
    section_three__element_six ,
    section_three__element_seven,
    section_three__element_eight,
    section_three__element_nine,
    section_three__element_eleven
]


function changeElements(newElements){
    
    all.forEach(element =>{
        element.classList.add("section-three__element--animation-out");
    });

    setTimeout(() =>{
        all.forEach(element =>{
            element.style.display = "none";
            element.classList.remove("section-three__element--animation-out");
            element.classList.remove("section-three__element--animation-in");
        });

        newElements.forEach(element => {
            element.style.display = "initial";
            element.classList.add("section-three__element--animation-in");
        });
        
    }, 1000);
}


section_three__option_all.addEventListener("click", (event)=>{
    changeElements(all);
});

section_three__option_slider.addEventListener("click", (event)=>{
    changeElements(slider);
});

section_three__option_video.addEventListener("click", (event)=>{
    changeElements(video);
});