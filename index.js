console.log("Hello, js!")

// x座標とy座標を指定
let xCoordinate = 100; // 例: 100ピクセル
let yCoordinate = 200; // 例: 200ピクセル
let xspeed = 3;
let yspeed = 3;

let up_is_down = false;
let down_is_down = false;
let left_is_down = false;
let right_is_down = false;

document.addEventListener("DOMContentLoaded", function() {
    const inputContainer = document.getElementById("inputContainer");
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.placeholder = "テキストを入力してください";
    inputContainer.appendChild(inputField);

    // スタイルを設定して位置を指定
    inputContainer.style.position = "absolute";
    inputContainer.style.left = xCoordinate + "px";
    inputContainer.style.top = yCoordinate + "px";
});

// キーダウンイベントのリスナーを追加
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowUp") {
        up_is_down = true
    }
    if (event.key === "ArrowDown") {
        down_is_down = true
    }
    if (event.key === "ArrowLeft") {
        left_is_down = true
    }
    if (event.key === "ArrowRight") {
        right_is_down = true
    }
});

// キーダウンイベントのリスナーを追加
document.addEventListener("keyup", function(event) {
    if (event.key === "ArrowUp") {
        up_is_down = false
    }
    if (event.key === "ArrowDown") {
        down_is_down = false
    }
    if (event.key === "ArrowLeft") {
        left_is_down = false
    }
    if (event.key === "ArrowRight") {
        right_is_down = false
    }
});

const loop = () => {

    if (up_is_down){
        yCoordinate -= yspeed
    }
    if (down_is_down){
        yCoordinate += yspeed
    }
    if (left_is_down){
        xCoordinate -= xspeed
    }
    if (right_is_down){
        xCoordinate += xspeed
    }

    inputContainer.style.left = xCoordinate + "px";
    inputContainer.style.top = yCoordinate + "px";
}

setInterval(loop, 30);