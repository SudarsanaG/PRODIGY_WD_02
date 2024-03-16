let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;

function startTimer() {
  timer = setInterval(incrementTimer, 1000);
}

function incrementTimer() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }
  displayTime();
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  hours = 0;
  minutes = 0;
  seconds = 0;
  displayTime();
}

function displayTime() {
  document.getElementById('hours').innerText = padTime(hours);
  document.getElementById('minutes').innerText = padTime(minutes);
  document.getElementById('seconds').innerText = padTime(seconds);
}

function padTime(time) {
  return (time < 10 ? '0' : '') + time;
}

document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('stopBtn').addEventListener('click', stopTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);

resetTimer(); // Initialize display