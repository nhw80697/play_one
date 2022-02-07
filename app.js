const square = ` <div class="square" ></div><div class="square" ></div><div class="square" ></div><div class="square" ></div><div class="square" ></div>`;
function addBoard(){
    document.body.innerHTML += `<div class="main_board" id="main_board"></div>`;
    const main_board = document.getElementById("main_board").innerHTML += square;
}
var string = "";
addBoard()
var squares = document.getElementById("main_board").childNodes;

function addKey(e){
    
    if (!isNaN(e.key) && string.length <= 5){
        string += e.key;
        squares[string.length].innerHTML = e.key;
    }

    if (e.keyCode === 13 && string.length == 5){
        addBoard()
    }
}


