let myHeight = document.getElementById("heightH")
let myWeight = document.getElementById("wght")
let computed = document.getElementById("appendComputed")
let calculateIt = document.getElementById("calculateB")
let statusBMI = document.getElementById("appendComment")
let clearAndAwait = document.querySelectorAll("input")
let validator = document.getElementById("validationNotifier")
let bMI;

calculateIt.addEventListener("click", computedB)

function computedB(){
    let height = myHeight.value;
    let weight = myWeight.value;
    if(isNaN(height) || isNaN(weight)){
        validator.textContent = "Only numeric values are allowed"
    }
    
    bMI = (weight) / ((height ** 2)/10000) 
    computed.textContent = bMI.toFixed(2)

    if(bMI > 24.9){
        statusBMI.textContent = "You are  over weight do some exercises"
    }
    else if(bMI > 18.6){
        statusBMI.textContent = "Your weight is at a normal range"
    }
    else if(bMI < 18.6){
        statusBMI.textContent = "You are under weight try eating more"
    }

    clearAndAwait.forEach(input => input.value = "")
}

