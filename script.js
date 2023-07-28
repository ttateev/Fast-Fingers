let window1 = document.getElementById("intro");
let window2 = document.getElementById("learningPart");
let window3 = document.getElementById("game");
let countPage = document.getElementById("count-down");
let learnButton = document.getElementById("learn");
let backButton = document.getElementById("backButton");
let gameButton = document.getElementById("play");
let setButton = document.getElementById("options")
let menuButton = document.getElementById("menu");
let timeEl = document.getElementById("time");
let scoreEL = document.getElementById("score");
let highScore = document.getElementById("high-score");
let gameBack = document.getElementById("gameBack");
let gameOver = document.getElementById("gameOver");
let playAgain = document.getElementById("playAgain");
let wordText = document.getElementById("info-text");
let textInput = document.getElementById("input-area");
let setWindow = document.getElementById("settings")
let setBack = document.getElementById("setBack")
let on_off = document.getElementById("audio_setting2")
let countDwn
let chosenEl
let music

function audioPlayer() {
    if (on_off.checked === true) {
        music = new Audio('./sounds/sound.mp3');
        music.play();
    } else {
        music.pause();
    }
}

learnButton.addEventListener("click", function () {
    window1.style.display = "none";
    window2.style.display = "block";
    gameKeyboard();
})

setButton.addEventListener("click", function () {
    window1.style.display = "none";
    setWindow.style.display = "flex";
})

backButton.addEventListener("click", function () {
    window2.style.display = "none";
    window1.style.display = "flex";
    chosenEl.classList.remove("selected");
})

gameBack.addEventListener("click", function () {
    window3.style.display = "none";
    window1.style.display = "flex";
    textInput.value = "";
    clearInterval(countDwn);
})

setBack.addEventListener("click", function () {
    setWindow.style.display = "none";
    window1.style.display = "flex";
})

menuButton.addEventListener("click", function () {
    gameOver.style.display = "none";
    window1.style.display = "flex";
})

playAgain.addEventListener("click", function () {
    gameOver.style.display = "none";
    countPage.style.display = "block";
    textInput.value = "";

    let startCount = document.getElementById("start-count")
    startCount.innerHTML = 3
    let counter = setInterval(function () {
        startCount.innerHTML--
        if (startCount.innerHTML == 0) {
            clearInterval(counter);
            generalGame();
        }
    }, 1000)

})

gameButton.addEventListener("click", function () {
    window1.style.display = "none";
    countPage.style.display = "block";
    textInput.value = "";

    startCount = document.getElementById("start-count")
    startCount.innerHTML = 3
    counter = setInterval(function () {
        startCount.innerHTML--
        if (startCount.innerHTML == 0) {
            clearInterval(counter);
            generalGame();
        }
    }, 1000)
})

function generalGame() {
    countPage.style.display = "none";
    game.style.display = "block";

    let time = 7;
    timeEl.innerHTML = time;
    let currentSc = 0;
    let hiScore = 0;

    if (!localStorage.score) {
        localStorage.setItem("score", 0)
    }
    scoreEL.innerHTML = currentSc;
    hiScore = localStorage.score;
    highScore.innerHTML = hiScore;
    let randomWord = randomItem(wordsArr);
    wordText.innerHTML = randomWord;
    countDwn = setInterval(function () {
        time--;
        timeEl.innerHTML = time;
        if (time <= 0) {
            clearInterval(countDwn);
            gameOver.style.display = "flex";
            window3.style.display = "none";
        }
    }, 1000)

    textInput.addEventListener("keypress", function (e) {
        if (e.code == "Enter") {
            if (textInput.value == randomWord) {
                currentSc++;
                scoreEL.innerHTML = currentSc
                textInput.value = "";
                randomWord = randomItem(wordsArr);
                wordText.innerHTML = randomWord;
                time += 4;
                timeEl.innerHTML = time;
                
                if (currentSc >= hiScore) {
                    hiScore = currentSc;
                    highScore.innerHTML = hiScore;
                    localStorage.score = hiScore;
                }
            } else {
                time -= 2
                if (time >= 0){
                    timeEl.innerHTML = time;
                }
            }
        }
    })
}

function gameKeyboard() {
    let selectedEl = randomItem(letterArr)
    chosenEl = document.getElementById(selectedEl)
    chosenEl.classList.add("selected");
    document.addEventListener("keyup", function (event) {
        if (event.code == selectedEl) {
            chosenEl.classList.remove("selected");
            selectedEl = randomItem(letterArr)
            chosenEl = document.getElementById(selectedEl)
            chosenEl.classList.add("selected");
        } else {
            let wrongLetter = document.getElementById(event.code);
            wrongLetter.classList.add("hit");
            setTimeout(() => {
                wrongLetter.classList.remove("hit");
            }, 1000)
        }
    })
}

var balloonsContainer = document.getElementById("balloons-container"),
    balloons = balloonsContainer.childNodes,
    introTitle = document.getElementById('intro-title'),
    introSub = document.getElementById('intro-sub'),
    introBut = document.getElementById('intro-button');

for (var i = 0; i < balloons.length; i++) {
    var balloon = balloons[i];
    balloon.addEventListener('click', pop, false);
}

function pop(e) {
    var element = e.target;
    if (element.classList.contains('yellow')) {
        intro.style.background = 'rgb(235,255,20)';
        introBut.className = "button-yellow";
        if (introTitle.style.color !== 'rgb(51,51,51)') {
            introTitle.style.color = 'rgb(51,51,51)';
            introSub.style.color = 'rgba(51,51,51,.8)';
        }
    }
    else if (element.classList.contains('blue')) {
        intro.style.background = 'rgb(39,20,255)';
        introBut.className = "button-blue";
        if (introTitle.style.color !== 'rgb(255,255,255)') {
            introTitle.style.color = 'rgb(255,255,255)';
            introSub.style.color = 'rgba(255,255,255,.8)';
        }
    }
    else if (element.classList.contains('purple')) {
        intro.style.background = 'rgb(189,96,255)';
        introBut.className = "button-purple";
        if (introTitle.style.color !== 'rgb(255,255,255)') {
            introTitle.style.color = 'rgb(255,255,255)';
            introSub.style.color = 'rgba(255,255,255,.8)';
        }
    }
    else if (element.classList.contains('red')) {
        intro.style.background = 'rgb(255,39,20)';
        introBut.className = "button-red";
        if (introTitle.style.color !== 'rgb(255,255,255)') {
            introTitle.style.color = 'rgb(255,255,255)';
            introSub.style.color = 'rgba(255,255,255,.8)';
        }
    }
    else if (element.classList.contains('cyan')) {
        intro.style.background = 'rgb(20,235,255)';
        introBut.className = "button-cyan";
        if (introTitle.style.color !== 'rgb(255,255,255)') {
            introTitle.style.color = 'rgb(255,255,255)';
            introSub.style.color = 'rgba(255,255,255,.8)';
        }
    }
    else if (element.classList.contains('pink')) {
        intro.style.background = 'rgb(255,138,187)';
        introBut.className = "button-pink";
        if (introTitle.style.color !== 'rgb(255,255,255)') {
            introTitle.style.color = 'rgb(255,255,255)';
            introSub.style.color = 'rgba(255,255,255,.8)';
        }
    }
    else if (element.classList.contains('green')) {
        intro.style.background = 'rgb(20,189,34)';
        introBut.className = "button-green";
        if (introTitle.style.color !== 'rgb(255,255,255)') {
            introTitle.style.color = 'rgb(255,255,255)';
            introSub.style.color = 'rgba(255,255,255,.8)';
        }
    }
    else if (element.classList.contains('orange')) {
        intro.style.background = 'rgb(255,171,53)';
        introBut.className = "button-orange";
        if (introTitle.style.color !== 'rgb(255,255,255)') {
            introTitle.style.color = 'rgb(255,255,255)';
            introSub.style.color = 'rgba(255,255,255,.8)';
        }
    }
    element.style.display = "none";
    e.preventDefault();
    e.stopPropagation();
}