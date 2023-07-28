let letterArr = [
  "Digit1",
  "Digit2",
  "Digit3",
  "Digit4",
  "Digit5",
  "Digit6",
  "Digit7",
  "Digit8",
  "Digit9",
  "Digit0",
  "Equal",
  "KeyQ",
  "KeyW",
  "KeyE",
  "KeyR",
  "KeyT",
  "KeyY",
  "KeyU",
  "KeyI",
  "KeyO",
  "KeyP",
  "BracketLeft",
  "BracketRight",
  "KeyA",
  "KeyS",
  "KeyD",
  "KeyF",
  "KeyG",
  "KeyH",
  "KeyJ",
  "KeyK",
  "KeyL",
  "Quote",
  "KeyZ",
  "KeyX",
  "KeyC",
  "KeyV",
  "KeyB",
  "KeyN",
  "KeyM"
]



function randomItem(arr){
  let itemValue = Math.floor(Math.random()*arr.length)
  return arr[itemValue]
} 
randomItem(letterArr)

function gameKeyboard(){
  let selectedEl = randomItem(letterArr) //keyL
  let chosenEl = document.getElementById(selectedEl)// 
  chosenEl.classList.add("selected");
}