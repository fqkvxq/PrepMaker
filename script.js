new ClipboardJS(".copyButton");
window.addEventListener(
    "beforeunload",
    function(e) {
        e.returnValue = "離脱しますか？";
    },
    false
);
var firstPointText = "";
var reasonText = "";
var exampleText = "";
var secondPointText = "";


// フォームに文字入力をしたときの挙動
function inputText() {
    firstPointText = document.getElementById('firstPointText').value + "\n\n";
    reasonText = document.getElementById('reasonText').value + "\n\n";
    exampleText = document.getElementById('exampleText').value + "\n\n";
    secondPointText = document.getElementById('secondPointText').value;
    document.getElementById('generatedTextArea').value = firstPointText + reasonText + exampleText + secondPointText;
}

function deleteInputs() {
    if (confirm("削除しますか？")) {
        document.getElementById('firstPointText').value = "";
        document.getElementById('reasonText').value = "";
        document.getElementById('exampleText').value = "";
        document.getElementById('secondPointText').value = "";
        document.getElementById('generatedTextArea').value = "";
    }
}