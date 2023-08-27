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

// 今のボードの状態を表す文字列
let text_list = "";

let para_ini = "para";
let para_id = 0;

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
            para_id += 1;
            paragraph.id = para_ini + para_id;
            paragraphContainer.appendChild(paragraph);
    
            // スタイルを設定して位置を指定
            paragraph.style.position = "absolute";
            paragraph.style.left = item.split(",")[0] + "px";
            paragraph.style.top = item.split(",")[1] + "px";
            // paragraph.style.left = 0 + "px";
            // paragraph.style.top = 0 + "px";

            if (text_list != ""){
                text_list += "\r\n"
            }
            text_list += item.split(",")[0]
            text_list += ","
            text_list += item.split(",")[1]
            text_list += ","
            text_list += item.split(",").slice(2).join(",")
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

// ファイルエクスポート時の処理
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

// 取込用の処理
function GetListClick() {
    var textarea = document.getElementById("textarea");
    textarea.value = text_list
}

// 反映用の処理
function SetListClick() {
    var textarea = document.getElementById("textarea");

    const paragraphContainer = document.getElementById("paragraphContainer");
    paragraphContainer.textContent = "";
    myFunction()

    text_list = "";
    filerecords = textarea.value.split("\n")
    //   filetext = test.split("\n")[2].split(",").slice(2).join(",");
    for (const item of filerecords){
        const paragraphContainer = document.getElementById("paragraphContainer");
        const paragraph = document.createElement("span");
        paragraph.textContent = item.split(",").slice(2).join(",").slice(1, -1);
        para_id += 1;
        paragraph.id = para_ini + para_id;
        paragraphContainer.appendChild(paragraph);

        // スタイルを設定して位置を指定
        paragraph.style.position = "absolute";
        paragraph.style.left = item.split(",")[0] + "px";
        paragraph.style.top = item.split(",")[1] + "px";
        // paragraph.style.left = 0 + "px";
        // paragraph.style.top = 0 + "px";

        if (text_list != ""){
            text_list += "\r\n"
        }
        text_list += item.split(",")[0]
        text_list += ","
        text_list += item.split(",")[1]
        text_list += ","
        text_list += item.split(",").slice(2).join(",")
    }
}

// 呼び出す関数の例
function myFunction() {
    const paragraphContainer = document.getElementById("paragraphContainer");
    // contextmenu イベントが発生したときに実行される関数
    paragraphContainer.addEventListener("contextmenu", function(event) {
        event.preventDefault(); // コンテキストメニューを表示しない
    });
    paragraphContainer.textContent = "Hello, html!"

    const paragraph = document.createElement("div");
    paragraph.textContent = field.value;
    paragraphContainer.appendChild(paragraph);
    
    // ファイルインポート用
    const fileset = document.createElement("input");
    fileset.id = "select-file"
    fileset.type = "file";
    fileset.setAttribute("onChange", "selectFile()");
    paragraphContainer.appendChild(fileset);

    // 改行
    var br = document.createElement("br");
    paragraphContainer.appendChild(br);

    // ファイルエクスポート用
    const fileget = document.createElement("input");
    fileget.id = "get-file"
    fileget.type = "button";
    fileget.value = "エクスポート";
    fileget.setAttribute("onClick", "OnButtonClick()");
    paragraphContainer.appendChild(fileget);

    // 改行
    var br = document.createElement("br");
    paragraphContainer.appendChild(br);

    // 新しいテキストエリア要素を作成
    var textarea = document.createElement("textarea");
    textarea.rows = "4";
    textarea.cols = "50";
    textarea.id = "textarea";
    textarea.placeholder = "ここにテキストを入力してください。";
    paragraphContainer.appendChild(textarea);

    // 改行
    var br = document.createElement("br");
    paragraphContainer.appendChild(br);

    // 取り込み
    const get_list = document.createElement("input");
    get_list.id = "get-list"
    get_list.type = "button";
    get_list.value = "取込";
    get_list.setAttribute("onClick", "GetListClick()");
    paragraphContainer.appendChild(get_list);

    // 反映
    const set_list = document.createElement("input");
    set_list.id = "set-list"
    set_list.type = "button";
    set_list.value = "反映";
    set_list.setAttribute("onClick", "SetListClick()");
    paragraphContainer.appendChild(set_list);

    paragraphContainer.style.position = "absolute";
    paragraphContainer.style.left = 0 + "px";
    paragraphContainer.style.top = 0 + "px";
    const windowWidth = window.innerWidth; // ウィンドウの幅
    const windowHeight = window.innerHeight; // ウィンドウの高さ
    paragraphContainer.style.width = windowWidth + "px"; // <div> の幅を設定
    paragraphContainer.style.height = windowHeight + "px";
}

// ページロード時の処理
document.addEventListener("DOMContentLoaded", function() {
    const inputContainer = document.getElementById("inputContainer");
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.id = "field";
    inputField.placeholder = "テキストを入力してください";
    inputContainer.appendChild(inputField);

    // 確定前にプレビューで表示させる
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

    myFunction()
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
        para_id += 1;
        paragraph.id = para_ini + para_id;
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
