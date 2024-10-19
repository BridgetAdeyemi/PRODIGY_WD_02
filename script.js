let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("displayTime");
let timer = null;
let isRunning = false;

// stop watch function
function stopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  // check if hours, minutes and seconds are < 10 and add 0
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  displayTime.innerHTML = `${h}:${m}:${s}`;
}

//toggleStartStop function
function toggleStartStop() {
  const startStopBtn = document.getElementById("startStopBtn");
  if (!isRunning) {
    startStopBtn.textContent = "Stop";

    startStopBtn.style.backgroundColor = "#920606e0";
    timer = setInterval(stopwatch, 1000);
  } else {
    startStopBtn.textContent = "Start";

    startStopBtn.style.backgroundColor = "#155ca8";
    clearInterval(timer);
  }

  isRunning = !isRunning;
}

//reset function
function watchReset() {
  [seconds, minutes, hours] = [0, 0, 0];
  displayTime.innerHTML = "00:00:00";
  clearInterval(timer);
  document.getElementById("startStopBtn").textContent = "Start";
  startStopBtn.style.backgroundColor = "#155ca8";
  document.getElementById("laps").innerHTML = "";
}

//recordLap function
function recordLap() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = hours < 10 ? "0" + minutes : minutes;
  let s = hours < 10 ? "0" + seconds : seconds;
  let lapTime = `${h}:${m}:${s}`;

  let lapsDiv = document.getElementById("laps");
  let lapElement = document.createElement("div");
  lapElement.textContent = `Lap: ${lapTime}`;
  lapElement.classList.add("lap-item");
  lapsDiv.appendChild(lapElement);

  if (!document.getElementById("clearLapsBtn")) {
    let clearBtn = document.createElement("button");
    clearBtn.textContent = "Clear Laps";
    clearBtn.id = "clearLapsBtn";
    clearBtn.onclick = clearLaps;

    lapsDiv.appendChild(clearBtn);
  } else {
    let clearBtn = document.getElementById("clearLapsBtn");
    lapsDiv.appendChild(clearBtn);
  }
}
function clearLaps() {
  document.getElementById("laps").innerHTML = ""; // Clear lap times
}
