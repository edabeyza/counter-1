


const counter = document.getElementById("counter")

const increaseButton = document.getElementById("increaseButton");

const descreaseButton = document.getElementById("descreaseButton");


console.log(counter);
console.log(increaseButton);
console.log(descreaseButton);

increaseButton.addEventListener("click", ()=>{
    counter.innerText++
})
decreaseButton.addEventListener("click", ()=>{
    counter.innerText--;
})