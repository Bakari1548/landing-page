const btnDisplay1 = document.getElementById('btnDisplay1');
const btnDisplay2 = document.getElementById('btnDisplay2');
const btnDisplay3 = document.getElementById('btnDisplay3');

let imageFleche1 = document.querySelector(".logo-fleche-1");
let imageFleche2 = document.querySelector(".logo-fleche-2");
let imageFleche3 = document.querySelector(".logo-fleche-3");

let divText1 = document.querySelector('.proposition-1');
let divText2 = document.querySelector('.proposition-2');
let divText3 = document.querySelector('.proposition-3');

let text1 = document.getElementById('textProposition1'); 
let text2 = document.getElementById('textProposition2'); 
let text3 = document.getElementById('textProposition3'); 

// divText1.style.trasition = '500ms'

btnDisplay1.addEventListener('click', (e) => {
    let btnDisplay1IsPressed = e.currentTarget.id;
    // console.log(btnDisplay1IsPressed);
    imageFleche1.style.transform = 'rotate(180deg)'
    imageFleche1.setAttribute('style', 'transition: 500ms;')    

    if(text1.style.display === "block"){
        imageFleche1.setAttribute('style', 'transition: 500ms;')
        text1.setAttribute('style', 'display: none;')
        imageFleche1.style.transform = 'rotate(0deg)'
    }else{
        text1.setAttribute('style', 'display: block;')
        imageFleche1.style.transform = 'rotate(180deg)'

    }
})
btnDisplay2.addEventListener('click', (e) => {
    let btnDisplay2IsPressed = e.currentTarget.id;
    console.log(btnDisplay2IsPressed);
    imageFleche2.style.transform = 'rotate(180deg)'
    imageFleche2.setAttribute('style', 'transition: 500ms;')
    text2.style.transition = '1s';    
    

    if(text2.style.display === "block"){
        imageFleche2.setAttribute('style', 'transition: 500ms;')
        text2.setAttribute('style', 'display: none;')
        imageFleche2.style.transform = 'rotate(0deg)'
    }else{
        text2.setAttribute('style', 'display: block;')
        imageFleche2.style.transform = 'rotate(180deg)'

    }
})
btnDisplay3.addEventListener('click', (e) => {
    let btnDisplay3IsPressed = e.currentTarget.id;
    console.log(btnDisplay3IsPressed);
    imageFleche3.style.transform = 'rotate(180deg)'
    imageFleche3.setAttribute('style', 'transition: 500ms;')
    text3.style.transition = '1s';    

    if(text3.style.display === "block"){
        imageFleche3.setAttribute('style', 'transition: 500ms;')
        text3.setAttribute('style', 'display: none;')
        imageFleche3.style.transform = 'rotate(0deg)'
    
    }else{
        text3.setAttribute('style', 'display: block;')
        imageFleche3.style.transform = 'rotate(180deg)'

    }
})


let arrow = document.querySelector('.arrow');
arrow.style.visibility = 'hidden'

arrow.addEventListener('scroll', () => {
    arrow.style.visibility = 'visible'
})