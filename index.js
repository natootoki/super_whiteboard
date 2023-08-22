console.log("Hello, js!")

// x座標とy座標を指定
let xCoordinate = 100; // 例: 100ピクセル
let yCoordinate = 200; // 例: 200ピクセル
let xspeed = 3;
let yspeed = 3;

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
        console.log("上矢印キーが押されました");
        yCoordinate -= yspeed
    } else if (event.key === "ArrowDown") {
        console.log("下矢印キーが押されました");
        yCoordinate += yspeed
    } else if (event.key === "ArrowLeft") {
        console.log("左矢印キーが押されました");
        xCoordinate -= xspeed
    } else if (event.key === "ArrowRight") {
        console.log("右矢印キーが押されました");
        xCoordinate += xspeed
    }
    inputContainer.style.left = xCoordinate + "px";
    inputContainer.style.top = yCoordinate + "px";
});