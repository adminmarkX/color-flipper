const colors = ["green","red","rgba(243,123,200)","#f15300"];
const colorsSimple = ["green","red","blue"];
const colorshex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];


const btn = document.getElementById("button-24");
const btn2 = document.getElementById("button-28-Simple");
const btn3 = document.getElementById("button-28-Hex");
const color = document.querySelector(".show-me");


btn.addEventListener("click",function(){

    // to get the element that i want to change the background
    var elements = document.getElementsByClassName("app-body")

    const randomNumber = getRandomNumber();

    // get random number between 0 - 3 

    console.log(randomNumber);

    // // here the body color changes but also the navbars 
    // // i dont want that so i want to change only the navbar and down
    // document.body.style.backgroundColor = colors[randomNumber];

    //  // Change the color of the specific element
     elements[0].style.backgroundColor = colors[randomNumber];
    
    // here the text of the <span> .color changes
    color.textContent = colors[randomNumber];

});

btn2.addEventListener("click",function(){

   
    // to get the element that i want to change the background
    var elements = document.getElementsByClassName("app-body")

    const randomNumber = getSimpleRandomNumber();

    // get random number between 0 - 3 

    console.log(randomNumber);

    // // here the body color changes but also the navbars 
    // // i dont want that so i want to change only the navbar and down
    // document.body.style.backgroundColor = colors[randomNumber];

    //  // Change the color of the specific element
     elements[0].style.backgroundColor = colorsSimple[randomNumber];
    
    // here the text of the <span> .color changes
    color.textContent = colors[randomNumber];

});

btn3.addEventListener("click",function(){

   
    // to get the element that i want to change the background
    var elements = document.getElementsByClassName("app-body")

    let hexColor = "#";
    for(let i=0;i<6;i++){
        hexColor += colorshex[getHexRandomNumber()]; 
    }

    color.textContent = hexColor;

    // // here the body color changes but also the navbars 
    // // i dont want that so i want to change only the navbar and down
    // document.body.style.backgroundColor = colors[randomNumber];

    //  // Change the color of the specific element
     elements[0].style.backgroundColor = hexColor;

});


function getRandomNumber(){
            // *the color length to be 1.smth or 2.smth or 3.smth
    return Math.floor(Math.random()*colors.length);
}


function getSimpleRandomNumber(){
    // *the color length to be 1.smth or 2.smth or 3.smth
return Math.floor(Math.random()*colors.length);
}

function getHexRandomNumber(){
    // *the color length to be 1.smth or 2.smth or 3.smth
return Math.floor(Math.random()*colorshex.length);
}