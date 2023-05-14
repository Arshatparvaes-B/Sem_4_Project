var numselected=null;
var tileselected=null;
var board=[
    "36---7--2",
    "---8---76",
    "----5-14-",
    "-3-7--9--",
    "972---583",
    "--1--5-2-",
    "-18-3----",
    "64---8---",
    "2--1---98"
];
var solution=[
    "364917852",
    "195824376",
    "827653149",
    "536782914",
    "972461583",
    "481395627",
    "718239465",
    "649578231",
    "253146798"
];
window.onload=function(){
    setgame();
}

function setgame(){
    for (let i=1;i<=9;i++){
        let number=document.createElement("div");
        number.id=i;
        number.innerText=i;
        number.addEventListener("click",selectNumber);
        number.classList.add('number');
        document.getElementById("digits").appendChild(number);
    }
    /* for 9x9 board */
   
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            if (board[r][c] != "-") {
                // let num = document.createElement("div");
                // num.innerText = board[r][c];
                // num.classList.add("number");
                // tile.appendChild(num);
                tile.innerText=board[r][c];
                tile.classList.add("tile-start");
            }
            if (r==2 || r==5){
                tile.classList.add("horizontal-line");
            }
            if (c==2||c==5){
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", selectTile);
            document.getElementById("board").appendChild(tile);
        }
    }
}

function selectNumber(){
    if (numselected !=null){
        numselected.classList.remove("number-selected");
    }
    numselected=this;
    numselected.classList.add("number-selected");
}

function selectTile(){
    if (numselected){
        if (this.innerText !=""){
            return;
        }
        this.innerText=numselected.id;
    }
}
