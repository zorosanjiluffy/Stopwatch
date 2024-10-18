const display = document.getElementById("display");
let timer = null;
let starttime = 0;
let elapsedtime = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        starttime = Date.now() - elapsedtime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}
function stop() {
    if (isRunning) {
        clearInterval(timer)
        elapsedtime = Date.now() - starttime;
        isRunning = false;
    }
}
function reset() {
    clearInterval(timer);
    starttime = 0;
    elapsedtime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00"


}
function update() {
    const currentitem = Date.now();
    elapsedtime = currentitem - starttime;

    let hours = Math.floor(elapsedtime / (1000 * 60 * 60));
    let min = Math.floor(elapsedtime / (1000 * 60) % 60);
    let sec = Math.floor(elapsedtime / 1000 % 60);
    let mile = Math.floor(elapsedtime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    min = String(min).padStart(2, "0");
    sec = String(sec).padStart(2, "0");


    display.textContent = `${hours}:${min}:${sec}:${mile}`;

}
