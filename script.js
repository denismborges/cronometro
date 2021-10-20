var hh = 0;
var mm = 0;
var ss = 0;

var cron;

function iniciar() {
    cron = setInterval(() => {
        timer();
    }, 1000);
}

function pausar() {
    clearInterval(cron);
}

function parar() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById("cont").innerHTML = "00:00:00";
}

function timer() {
    ss++;

    if (ss == 60) {
        ss = 0;
        mm++;   
    }

    if (mm == 60) {
        mm = 0;
        hh++;
    }

    document.getElementById("cont").innerHTML = `${pad(hh, 2)}:${pad(mm, 2)}:${pad(ss, 2)}`;
}

function pad(num, size) {
    num = num.toString();
    while (num.length < size) {
        num = "0" + num;
    }
    return num;
}