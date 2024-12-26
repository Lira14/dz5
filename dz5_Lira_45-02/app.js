const coinsValue= document.getElementById("coins");
const energyValue = document.getElementById("energy");

let counterEnergy = 50
let counterCoins  = 0


coinsValue.innerText = counterCoins
energyValue.innerText = counterEnergy


const button = document.querySelector(".button");

button.onclick = () => {
    if(counterEnergy >0){
        counterCoins+=3
        counterEnergy-=5
        coinsValue.innerText = counterCoins
        energyValue.innerText = counterEnergy
    }

}
