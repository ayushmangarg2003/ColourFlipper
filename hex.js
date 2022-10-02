const btnEl = document.querySelector('#btn');
var colourEl = document.querySelector('.Colour');
const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]


btnEl.addEventListener('click',function(){
    let hexColour = "#";
    for (let i = 0; i < 6; i++) {
        hexColour += hex[getRandomNumber()]
    }

    colourEl.textContent = hexColour;
    document.body.style.backgroundColor = hexColour;
})

function getRandomNumber(){
    return Math.floor(Math.random()*hex.length);
}