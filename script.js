let btnRef = document.querySelectorAll(".button-option");
let msgRef = document.getElementById("message");
let popupRef = document.querySelector(".popup");
let restartBtn = document.getElementById("restart");
let newgameBtn = document.getElementById("new-game");

let wining__pattren = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6], 
];

let Xturn = true;
let count = 0;

const disabledButtons = () => {
    btnRef.forEach((element) => (element.disabled = true));
    popupRef.classList.remove("hide")
};

const enabledButtons = () => {
    btnRef.forEach((element) => {
        element.innerText = "";
        element.disabled = false;
    });
    popupRef.classList.add("hide");
};

const winFunction = (letter) =>{
disabledButtons();
if(letter == "X") {
    msgRef.innerHTML = "&#x1F389; <br> 'X' Wins";
}
else {
    msgRef.innerHTML = "&#x1F389; <br> 'O' Wins";
}
};

const drawFunction = () => {
    disabledButtons();
    msgRef.innerHTML = "&#x1F60E; <br> It's a Draw   ";
};

newgameBtn.addEventListener("click", () => {
    enabledButtons();
    count  = 0;
});
restartBtn.addEventListener("click", () => {
    enabledButtons();
    count  = 0;
});

const winChecker = () => {
    for(let i of wining__pattren) {
        let [element1, element2, element3] = [
            btnRef[i[0]].innerText,
            btnRef[i[1]].innerText,
            btnRef[i[2]].innerText,
        ];
        if(element1 != "" && (element2 != "") && (element3 != "")) {
            if(element1 == element2 && element2 == element3) {
                winFunction(element1);
            }
        }
    }
};

btnRef.forEach((element) => {
    element.addEventListener("click", () => {
        if(Xturn) {
            Xturn = false;
            element.innerText = "X";
            element.disabled = true;
        }
        else {
            Xturn = true;
            element.innerText = "O";
            element.disabled = true;
        }
        count += 1;
        if(count == 9) {
            drawFunction();
        }
        winChecker();
    });
    
});

window.onload = enabledButtons;
