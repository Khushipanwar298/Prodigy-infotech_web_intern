let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer;

const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const millisecondsDisplay = document.getElementById('milliseconds');

startStopBtn.addEventListener('click', () => {
    if (startStopBtn.textContent === 'Start') {
        startStopBtn.textContent = 'Stop';
        startStopBtn.classList.add('stop');
        startTimer();
    } else {
        startStopBtn.textContent = 'Start';
        startStopBtn.classList.remove('stop');
        stopTimer();
    }
});

resetBtn.addEventListener('click', () => {
    resetTimer();
});

function startTimer() {
    timer = setInterval(() => {
        milliseconds += 10;
        if (milliseconds === 1000) {
            milliseconds = 0;
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
        }
        updateDisplay();
    }, 10);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    stopTimer();
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
    startStopBtn.textContent = 'Start';
    startStopBtn.classList.remove('stop');
}

function updateDisplay() {
    minutesDisplay.textContent = pad(minutes);
    secondsDisplay.textContent = pad(seconds);
    millisecondsDisplay.textContent = pad(Math.floor(milliseconds / 10));
}

function pad(number) {
    return number.toString().padStart(2, '0');
}
