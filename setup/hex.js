const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const color = document.querySelector('.color');
const btn = document.getElementById('btn');

const colorChanger= ()=>{
    let hexNumber= '#'
    for(let i = 0; i<6;i++){
        hexNumber +=hex[randomNumber()]
   }
   color.textContent = hexNumber
   document.body.style.backgroundColor = hexNumber
}

const randomNumber = ()=>{
    return Math.floor(Math.random()*hex.length);
}
btn.addEventListener('click',colorChanger)