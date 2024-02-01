const timerDisplay = document.querySelector('.timer-display');
const startButton = document.getElementById('start-timer');
const pauseButton = document.getElementById('pause-timer');
const resetButton = document.getElementById('reset-timer');

let timerInterval;
let seconds = 0;
let minutes = 0;
let hours = 0;



const updateTimerDisplay = () => {
    timerDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
   
}

const startTimer = () => {
    timerInterval = setInterval(() => {
        seconds++
        if (seconds === 60) { 
            seconds = 0
            minutes++
        }
    
        if (minutes === 60) {
            minutes = 0
            hours++
        }

        updateTimerDisplay()
    }, 1000)


    startButton.disabled = true;
    pauseButton.disabled = false;
    resetButton.disabled = false;
}

const resetTimer = () => {
    clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    updateTimerDisplay()

    startButton.disabled = false;
    pauseButton.disabled = true;
    resetButton.disabled = true;
}

const pauseTimer = () => {
    clearInterval(timerInterval);
    startButton.disabled = false;
}

startButton.addEventListener('click', startTimer)
pauseButton.addEventListener('click', pauseTimer)
resetButton.addEventListener('click', resetTimer)
