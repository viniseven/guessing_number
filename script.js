const btnTry = document.querySelector('#btnTry');
const btnReset = document.querySelector('#btnReset');
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');

let randomNumber = newRandomNumber();
let xAttempts = 1;

btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);

function newRandomNumber(){
    let _min = 1; // está incluso
    let _max = 9; // está incluso
    return Math.floor(Math.random() * (_max - _min + 1) + _min);
}


function toggleScreen(){
    screen2.classList.toggle("hide");
    screen1.classList.toggle("hide");
}

document.addEventListener('keydown', 
    function(e){
        if(e.key == 'Enter' && screen1.classList.contains('hide')){
        handleResetClick();
    }
})

 function handleTryClick(event){
    event.preventDefault();
    const inputNumber = document.querySelector('#inputNumber');

    let error = isNaN(inputNumber.value) || inputNumber.value <= 0 || inputNumber.value >= 10 
    || inputNumber.value == null || inputNumber.value == '';

    if (error){
        alert('Digite um número válido entre 0 e 10');
        return;
    }else{
        if(inputNumber.value == randomNumber){
            toggleScreen();
            screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas`;
        }
    }

    xAttempts++;
    inputNumber.value = '';
 }

 function handleResetClick(){
    toggleScreen();
    xAttempts = 1;
    randomNumber = newRandomNumber();
 }
