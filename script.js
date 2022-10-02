const btnEl = document.querySelector('#btn');
var colourEl = document.querySelector('.Colour');
const colour = ["orange", "red", "yellow", "royalblue", "blue" , "green"];

btnEl.addEventListener('click',function(){
    const randomnumber = getRandomNumber();
    document.body.style.backgroundColor = colour[randomnumber];
    colourEl.textContent = colour[randomnumber];
})

function getRandomNumber(){
    return Math.floor(Math.random()*colour.length);
}