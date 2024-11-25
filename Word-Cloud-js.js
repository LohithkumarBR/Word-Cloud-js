let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let wordsContainerEl = document.getElementById("wordsContainer");
let userInputEl = document.getElementById("userInput");
let errorMsgEl = document.getElementById("errorMsg");

let errorMsg = "Please enter a word";

function createAndAddWordToWordCloud(word) {

    let randomFontSize = Math.ceil(Math.random() * 40) + "px";
    let spanEl = document.createElement("span");

    spanEl.textContent = word;
    spanEl.style.fontSize = randomFontSize;
    spanEl.classList.add("m-3");

    wordsContainerEl.appendChild(spanEl);
}

for (let word of wordCloud) {
    createAndAddWordToWordCloud(word);
}

function onAddWordToWordCloud() {
    let userEnteredWord = userInputEl.value;
    if (userEnteredWord !== "") {
        userInputEl.value = "";
        errorMsgEl.textContent = "";
        createAndAddWordToWordCloud(userEnteredWord);
    } else {
        errorMsgEl.textContent = errorMsg;
    }
}