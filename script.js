var boxes = document.getElementById("boxes");

for (let i = 1; i < 10; i++) {
    var remainder = i % 2;
    boxes.innerHTML += "<div onclick={tick(this)} class ='box' ></div>";
}
var isFirstUser = true;

function tick(box) {
    if (isFirstUser === true) {
        box.innerHTML = '<img src="./image/tick.png"/>';
        isFirstUser = false;
    } else {
        box.innerHTML = '<img src="./image/cross.png"/>';
        isFirstUser = true;
    }
}