
// First we'll declare all the variables that we are going to use in this stopwatch app
let isRunning = false;
let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;


// All functions are structured below for different actions---------

// runs when the watch is started
function start() {
  if (isRunning === false) {
    timer = setInterval(runStopwatch, 1000);
  }
  isRunning = true;
}

// Runs when we stop the waytch
function stop() {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
  }
}


//This function gets called every second and is the main function of the app
function runStopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}


//Resets all the variable to initial condition
function reset() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
}

//This will update the h1 tag display at the top
function updateDisplay() {
  const display = document.getElementById("display");
  display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}


// This gets called everytime display gets updated to update the value as string
function pad(value) {
  return value.toString().padStart(2, "0");
}

updateDisplay();
