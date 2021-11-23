var guessParagraph = document.querySelector("#guessPara");
var wrongGuessParagraph = document.querySelector("#wrongGuessPara");
var guessCountParagraph = document.querySelector("#guessCountPara");
var winParagraph = document.querySelector("#winPara");
var loseParagraph = document.querySelector("#losePara");

var wordsArray = ["yashar", "number", "ganja", "dog","grape"];
var bottomLineArray = [];
var bottomLineLetter = [];
var wrongGuesses =[];
var randomWord = "";

var winCounter = 0;
var loseCounter = 0;
var guessCounter = 9;

function randomWordFunc(arr) {
  var randomIndex = Math.floor(Math.random() * wordsArray.length);
  return arr[randomIndex];
}

function StartGame() {
  //
  randomWord = randomWordFunc(wordsArray);
  var selectedLettersInWord = randomWord.split("");
  var bottomLine = selectedLettersInWord.length;
  console.log(randomWord);
  console.log(bottomLine);

  for (var i = 0; i < bottomLine; i++) {
    bottomLineArray.push("_");
  }

  guessParagraph.innerHTML = `${bottomLineArray.join(" ")}`;
}

function mySupposition(e) {
  var myLetter = e.key.toLowerCase();
  var selectedLettersInWord = randomWord.split("");
  if(selectedLettersInWord.indexOf(myLetter)!==-1){
    for (var i = 0; i < bottomLineArray.length; i++) {
      if (selectedLettersInWord[i] === myLetter) {
        bottomLineArray[i] = myLetter;
        bottomLineLetter.push(myLetter)
      }
    }
  }else{
    wrongGuesses.push(myLetter);
    guessCounter--;
  }
  
  if(bottomLineArray.indexOf("_")===-1){
    randomWord = randomWordFunc(wordsArray);
    selectedLettersInWord = randomWord.split("");
    bottomLine = selectedLettersInWord.length;
    wrongGuesses = [];
    bottomLineLetter = [];
    bottomLineArray = [];
    guessCounter = 9;
    winCounter++;
    for (var i = 0; i < bottomLine; i++) {
      bottomLineArray.push("_");
    }
    wrongGuessParagraph.innerHTML = `<strong>Wrong Guesses</strong>:${wrongGuesses}`;
    winParagraph.innerHTML = `<strong>Wins</strong>: ${winCounter}`;
    guessCountParagraph.innerHTML = `<strong>Guesses Left</strong>: ${guessCounter}`;
    alert("You win")
  }

  if(guessCounter===0){
    loseCounter++;
    wrongGuesses = [];
    selectedLettersInWord = randomWord.split("");
    bottomLine = selectedLettersInWord.length;
    bottomLineArray=[];
    for (var i = 0; i < bottomLine; i++) {
      bottomLineArray.push("_");
    }
    guessCounter = 9;
    guessParagraph.innerHTML = `${bottomLineArray.join(" ")}`;
    wrongGuessParagraph.innerHTML = `<strong>Wrong Guesses</strong>:${wrongGuesses}`;
    loseParagraph.innerHTML = `<strong>Loses</strong>: ${loseCounter}`;
    guessCountParagraph.innerHTML = `<strong>Guesses Left</strong>: ${guessCounter}`;
    alert("You Lose")
  }

  guessParagraph.innerHTML = `${bottomLineArray.join(" ")}`;
  wrongGuessParagraph.innerHTML = `<strong>Wrong Guesses</strong>: ${wrongGuesses}`
  winParagraph.innerHTML = `<strong>Wins</strong>: ${winCounter}`
  guessCountParagraph.innerHTML = `<strong>Guesses Left</strong>: ${guessCounter}`
  console.log(bottomLineLetter)
}

StartGame();

window.onkeydown = mySupposition;
