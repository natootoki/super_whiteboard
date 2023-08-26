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

let filerecords = [];
let filerecord = "";

let text_list = "";

const selectFile = () => {
    // FileListオブジェクト取得
    const selectFiles = document.querySelector("#select-file").files
    console.log("Hello, file!")

    // Fileオブジェクト取得
    const file = selectFiles[0]

    // FileReaderオブジェクト取得
    const reader = new FileReader()
    reader.readAsText(file)

    // ファイル読み込み完了時の処理
    reader.onload = () => {
        console.log(reader.result)
        test = reader.result
        filerecords = test.split("\r\n")
        //   filetext = test.split("\n")[2].split(",").slice(2).join(",");
        for (const item of filerecords){
            const paragraphContainer = document.getElementById("paragraphContainer");
            const paragraph = document.createElement("span");
            paragraph.textContent = item.split(",").slice(2).join(",").slice(1, -1);
            paragraphContainer.appendChild(paragraph);
    
            // スタイルを設定して位置を指定
            paragraph.style.position = "absolute";
            paragraph.style.left = item.split(",")[0] + "px";
            paragraph.style.top = item.split(",")[1] + "px";
            // paragraph.style.left = 0 + "px";
            // paragraph.style.top = 0 + "px";
        }
        console.log(filerecords)

        const fileset = document.getElementById("select-file");
        fileset.value = ""
    }

    // ファイル読み込みエラー時の処理
    reader.onerror = () => {
        console.log("ファイル読み込みエラー")
    }
}

function OnButtonClick() {
    let blob = new Blob([text_list],{type:"text/plain"});

    let link = document.createElement('a');

    link.href = URL.createObjectURL(blob);

    let dt = new Date();
    let y = dt.getFullYear();
    let m = ("00" + (dt.getMonth()+1)).slice(-2);
    let d = ("00" + (dt.getDate())).slice(-2);
    let h = ("00" + (dt.getHours())).slice(-2);
    let mi = ("00" + (dt.getMinutes())).slice(-2);
    let s = ("00" + (dt.getSeconds())).slice(-2);
    let result = y + m + d + h + mi + s;


    link.download = 'filename'+result+'.txt';

    link.click();
}

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
    
    const fileset = document.createElement("input");
    fileset.id = "select-file"
    fileset.type = "file";
    fileset.setAttribute("onChange", "selectFile()");
    paragraphContainer.appendChild(fileset);

    const br = document.createElement("br");
    paragraphContainer.appendChild(br);

    const fileget = document.createElement("input");
    fileget.id = "get-file"
    fileget.type = "button";
    fileget.value = "エクスポート";
    fileget.setAttribute("onClick", "OnButtonClick()");
    paragraphContainer.appendChild(fileget);

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
        if (text_list != ""){
            text_list += "\r\n"
        }
        text_list += xCoordinate + zure_x
        text_list += ","
        text_list += yCoordinate + zure_y
        text_list += ","
        text_list += '"'+field.value+'"'
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
