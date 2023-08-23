console.log("Hello, js!")

// x座標とy座標を指定
let xCoordinate = 100; // 例: 100ピクセル
let yCoordinate = 200; // 例: 200ピクセル
let xspeed = 5;
let yspeed = 5;

let up_is_down = false;
let down_is_down = false;
let left_is_down = false;
let right_is_down = false;

let zure_x = 0;
let zure_y = -32;

document.addEventListener("DOMContentLoaded", function() {
    const inputContainer = document.getElementById("inputContainer");
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.id = "field";
    inputField.placeholder = "テキストを入力してください";
    inputContainer.appendChild(inputField);

    const preview = document.createElement("span");
    preview.id = "preview";
    preview.textContent = field.value;
    inputContainer.appendChild(preview);
    preview.style.position = "absolute";
    preview.style.left = zure_x + "px";
    preview.style.top = zure_y + "px";

    // スタイルを設定して位置を指定
    inputContainer.style.position = "absolute";
    inputContainer.style.left = xCoordinate + "px";
    inputContainer.style.top = yCoordinate + "px";

    const paragraphContainer = document.getElementById("paragraphContainer");
    const paragraph = document.createElement("div");
    paragraph.textContent = field.value;
    paragraphContainer.appendChild(paragraph);

    paragraphContainer.style.position = "absolute";
    paragraphContainer.style.left = 0 + "px";
    paragraphContainer.style.top = 0 + "px";
    const windowWidth = window.innerWidth; // ウィンドウの幅
    const windowHeight = window.innerHeight; // ウィンドウの高さ
    paragraphContainer.style.width = windowWidth + "px"; // <div> の幅を設定
    paragraphContainer.style.height = windowHeight + "px";

});

function updateContainerSize() {
    const paragraphContainer = document.getElementById("paragraphContainer");
    const windowWidth = window.innerWidth; // ウィンドウの幅
    const windowHeight = window.innerHeight; // ウィンドウの高さ
    paragraphContainer.style.width = windowWidth + "px"; // <div> の幅を設定
    paragraphContainer.style.height = windowHeight + "px";
}

// ウィンドウサイズが変更された際に updateContainerSize 関数を実行
window.addEventListener("resize", updateContainerSize);

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
    if (event.key === "Enter") {
        let field = document.getElementById("field");
        console.log(field.value)

        const paragraphContainer = document.getElementById("paragraphContainer");
        const paragraph = document.createElement("span");
        paragraph.textContent = field.value;
        paragraphContainer.appendChild(paragraph);

        // スタイルを設定して位置を指定
        paragraph.style.position = "absolute";
        paragraph.style.left = xCoordinate + zure_x + "px";
        paragraph.style.top = yCoordinate + zure_y + "px";
        // paragraph.style.left = 0 + "px";
        // paragraph.style.top = 0 + "px";

        console.log(xCoordinate + zure_x, ", ", yCoordinate + zure_y, ", ", field.value)
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

    const preview = document.getElementById("preview");
    preview.textContent = field.value;
}

setInterval(loop, 30);
