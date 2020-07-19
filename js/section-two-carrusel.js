//Flechas
let arrow_right = document.getElementById("section-two__arrow--right");
let arrow_left = document.getElementById("section-two__arrow--left");

//Elementos
let element_one = document.getElementById("section-two__element--one");
let element_two = document.getElementById("section-two__element--two");
let element_three = document.getElementById("section-two__element--three");
let element_four = document.getElementById("section-two__element--four");
let element_five = document.getElementById("section-two__element--five");
let element_six = document.getElementById("section-two__element--six");
let element_seven = document.getElementById("section-two__element--seven");

//Informacion de los elementos
//Elemento, posicion, desplazamiento
let elements = [
    [element_one, -1, -1],  
    [element_two, 0, -1], 
    [element_three, 1, -1],   
    [element_four, 2, -1], 
    [element_five, 3, -1], 
    [element_six, 4, -1], 
    [element_seven, 5, -1]   
];



arrow_right.addEventListener("click", (event)=>{
    
    for(let i=0; i<7; i++){
        //Actualiza los valores
        elements[i][1] -= 1;
        elements[i][2] -= 1;
        
        //realiza los desplazamientos
        elements[i][0].style.transition = "500ms";
        elements[i][0].style.transform = `translateX(${100*elements[i][2]}%)`;
        
        //mueve el primer elemento al final
        if( elements[i][1] == -2){
            elements[i][1] = 5;
            elements[i][2] += 7;
            
            elements[i][0].style.transition = "0ms";
            elements[i][0].style.transform = `translateX(${100*elements[i][2]}%)`;        
        }
   }   
});

arrow_left.addEventListener("click", (event)=>{
    
    for(let i=0; i<7; i++){
        //Actualiza los valores
        elements[i][1] += 1;
        elements[i][2] += 1;
        
        //realiza los desplazamientos
        elements[i][0].style.transition = "500ms";
        elements[i][0].style.transform = `translateX(${100*elements[i][2]}%)`;

        //mueve el ultimo elemento al inicio
        if( elements[i][1] == 6){
            elements[i][1] = -1;
            elements[i][2] -= 7;
            
            elements[i][0].style.transition = "0ms";
            elements[i][0].style.transform = `translateX(${100*elements[i][2]}%)`;        
        }

   } 

});





