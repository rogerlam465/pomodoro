var workTime = 25;
var restTime = 5;
var pomodoroState = "work";
var pomodorotTimer;
var pomoTime = timeConvert(workTime);
var minutesRemain = 25;
var secondsRemain = 5;

// Converts human-readable workTime into thousands of a second

function timeConvert(targetTime) {
    return targetTime * 100 * 60;
}

// Pads seconds with an additional 0

function zeroPad(secondsRemain) {
    var i = "";
    if (secondsRemain < 10) {
        i = "0" + secondsRemain;
        return i;
    } else {
        return secondsRemain;
    }
}

// main function - starts countdown, changes buttons state

function goTime() {

    document.getElementById("goTimeButton").disabled = true;
    document.getElementById("stopTimeButton").disabled = false;
    document.getElementById("currentState").innerHTML = "<h2>Get crackin'!</h2>";

    pomodoroTimer = setInterval(() => {
        minutesRemain = Math.trunc((pomoTime / 100) / 60);
        secondsRemain = Math.floor((pomoTime / 100) % 60);

        document.getElementById("timeDisplay").innerHTML = "<p class='yuge'>" + minutesRemain + ":" + zeroPad(secondsRemain) + "</p>";
        pomoTime--;
        
        if (pomoTime <= 0 && pomodoroState === "work") {
            pomoTime = timeConvert(restTime);
            pomodoroState = "rest";
            document.getElementById("currentState").innerHTML = "<h2>Zzzz...!</h2>";
        } else if (pomoTime <= 0 && pomodoroState === "rest") {
            pomoTime = timeConvert(workTime);
            pomodoroState = "work";
            document.getElementById("currentState").innerHTML = "<h2>Get crackin'!h2>";
        }
    }, 10);
}

// stops countdown, resets time

function stopTime() {
    workTime = 25;
    pomoTime = timeConvert(workTime);
    minutesRemain = Math.trunc((pomoTime / 100) / 60);
    secondsRemain = Math.floor((pomoTime / 100) % 60);

    document.getElementById("goTimeButton").innerHTML = "Pomodoro START!";
    document.getElementById("goTimeButton").disabled = false;
    document.getElementById("stopTimeButton").disabled = true;
    document.getElementById("currentState").innerHTML = "<h2>Ready?</h2>";
    document.getElementById("timeDisplay").innerHTML = "<p class='yuge'>" + minutesRemain + ":" + zeroPad(secondsRemain) + "</p>";

    clearInterval(pomodoroTimer);
}

