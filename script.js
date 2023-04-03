// Timer
const timerDisplay = document.querySelector(".timer-display");
const timerStartButton = document.querySelector(".timer-button.start");
const timerStopButton = document.querySelector(".timer-button.stop");
const timerResetButton = document.querySelector(".timer-button.reset");

let timerInterval;
let timerTime = 0;

function formatTime(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function startTimer() {
  timerInterval = setInterval(() => {
    timerTime++;
    timerDisplay.textContent = formatTime(timerTime);
  }, 1000);
  timerStartButton.disabled = true;
  timerStopButton.disabled = false;
}

function stopTimer() {
  clearInterval(timerInterval);
  timerStartButton.disabled = false;
  timerStopButton.disabled = true;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerTime = 0;
  timerDisplay.textContent = formatTime(timerTime);
  timerStartButton.disabled = false;
  timerStopButton.disabled = true;
}

timerStartButton.addEventListener("click", startTimer);
timerStopButton.addEventListener("click", stopTimer);
timerResetButton.addEventListener("click", resetTimer);

// Stopwatch
const stopwatchDisplay = document.querySelector(".stopwatch-display");
const stopwatchStartButton = document.querySelector(".stopwatch-button.start");
const stopwatchStopButton = document.querySelector(".stopwatch-button.stop");
const stopwatchResetButton = document.querySelector(".stopwatch-button.reset");

let stopwatchInterval;
let stopwatchTime = 0;

function formatStopwatchTime(time) {
  const minutes = Math.floor(time / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const milliseconds = time % 100;
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`;
}

function startStopwatch() {
  stopwatchInterval = setInterval(() => {
    stopwatchTime++;
    stopwatchDisplay.textContent = formatStopwatchTime(stopwatchTime);
  }, 10);
  stopwatchStartButton.disabled = true;
  stopwatchStopButton.disabled = false;
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchStartButton.disabled = false;
  stopwatchStopButton.disabled = true;
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchTime = 0;
  stopwatchDisplay.textContent = formatStopwatchTime(stopwatchTime);
  stopwatchStartButton.disabled = false;
  stopwatchStopButton.disabled = true;
}

stopwatchStartButton.addEventListener("click", startStopwatch);
stopwatchStopButton.addEventListener("click", stopStopwatch);
stopwatchResetButton.addEventListener("click", resetStopwatch);
