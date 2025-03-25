var startButtonPressed = false;
var timer = null;
var min = 25;
var sec = 0;
var r = 255;
var g = 186;
var b = 249;
var goDown = false;
function startButton() {
    if (!startButtonPressed)
        startButtonPressed = true;
    else
        return;

    var start = "";
    var mid = ':';
    timer = setInterval(function(){
        changeBackground();
        if (min < 10)
            start = "0";
        else
            start = "";

        if (sec < 10)
            mid = ':0';
        else
            mid = ':';
        document.getElementById("timer").innerHTML=start+min+mid+sec;
        if (sec == 0)
        {
            min--;
            sec = 59;
        }
        else
        {
            sec--;
        }
        if (min < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

function pauseButton() {
    if (timer != null)
    {
        clearInterval(timer);
        startButtonPressed = false;
    }
}

function restartButton() {
    if (timer != null)
    {
        clearInterval(timer);
        startButtonPressed = false;
        min = 25;
        sec = 0;
        var mid = ':0'
        r = 255;
        g = 186;
        b = 249;
        document.getElementById("body").style.backgroundColor = "rgb("+r+", "+g+", "+b+")";
        document.getElementById("timer").innerHTML=min+mid+sec;
    }
}

function changeBackground() {
    var colorChange = 2;
    if (r >= 255)
    {
        goDown = true;
    }
    else if (r <= 212)
    {
        goDown = false;
    }

    if (goDown)
        colorChange = -Math.abs(colorChange);
    else
        colorChange = Math.abs(colorChange);

    r = r + colorChange;
    g = g + colorChange;
    if (g >= 255)
        g = 255;
    if (g <= 0)
        g = 0;
    console.log(sec);
    console.log(colorChange);
    console.log("rgb("+r+", "+g+", "+b+")");
    document.getElementById("body").style.backgroundColor = "rgb("+r+", "+g+", "+b+")";
}