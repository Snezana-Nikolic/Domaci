
let bodyBcg = document.querySelector('.bodyColor');
let bodyClr = 'white';

bodyBcg.addEventListener('click', changeColor);



function changeColor() {
    let colorsArr = ["white", "black"];
    let randIndex = Math.floor(Math.random() * 2);
    bodyClr = colorsArr[randIndex];
    compareColors();
 
}
// document.body.onclick= function() {
//      let colorsArr = ["white", "black"];
//      colorsArr= document.querySelectorAll('body');
//      for(var i = 0 ; i < colorsArr.length ; i++) {
//         colorsArr[i].classList.toggle('bodyColor');
//      }
//    }

function compareColors() {
   
    switch(bodyClr){
            case 'white':
                colorBlack(); 
            break;
            case 'black': 
                colorWhite();
            break;
            default:
                colorWhite();
             break; 
            
        } 
        
}

function colorBlack(){
    bodyBcg.style.backgroundColor = 'black';
}

function colorWhite(){
    bodyBcg.style.backgroundColor = 'white';
}


let rangeInput = document.getElementById('range');
let container = document.getElementsByClassName('bodyColor')[0];

rangeInput.addEventListener("change", function(){
    
    container.style.filter = "brightness(" + rangeInput.value + "%)";
});


