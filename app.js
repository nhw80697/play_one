const square = ` <div class="square" ></div><div class="square" ></div><div class="square" ></div><div class="square" ></div><div class="square" ></div>`;
var message = document.getElementById("message");

function addBoard(){
    document.body.innerHTML += `<div class="main_board" id="main_board"></div>`;
    const main_board = document.getElementById("main_board").innerHTML += square;
}

document.body.addEventListener('onkeydown',(e)=>{console.log(e.key); message.innerHTML += e.key})
// document.addEventListener("keydown",e =>  message.innerText += e.key)