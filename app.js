function addBoard(){
    var mainBoardTemplet = `<div class="main_board"></div>`;
    var squareTemplet = ` <div class="square" ></div><div class="square" ></div><div class="square" ></div><div class="square" ></div><div class="square" ></div>`;

    document.body.innerHTML += mainBoardTemplet;
    const main_board = document.getElementsByClassName("main_board");
    main_board[main_board.length-1].innerHTML += squareTemplet;
}

var random = randomNumber();
var string = "";
function addKey(e){    
    let main_board = document.getElementsByClassName("main_board");
    let squares = main_board[main_board.length-1].childNodes;

    if (!isNaN(e.key) && string.length < 5){
        string += e.key;
        squares[string.length].innerHTML = e.key;
    }

    if (e.keyCode === 13 && string.length == 5){
        console.log(random);
        [...random].forEach((value, key) => {
            [...string].forEach((valueString, keyString)=>{
                console.log(value + "-" + valueString)
                if (value == valueString && key == keyString){
                    console.log(squares[key + 1]);
                    squares[key + 1].style = "background-color: red";
                }else if(value == valueString){
                    squares[keyString + 1].style = "background-color: yellow";
                }
            })
        });
        string = "";
        addBoard()
    }
}

function randomNumber(){
    let num = Math.random() * 100000;
    while (num < 10000){num = Math.random() * 100000;}
    num = Math.round(num).toString();
    return num;
}

addBoard();

