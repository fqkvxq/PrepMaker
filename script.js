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
document.getElementById('letterLength').textContent = "0";


// フォームに文字入力をしたときの挙動
function inputText() {
    firstPointText = document.getElementById('firstPointText').value + "\n\n";
    reasonText = document.getElementById('reasonText').value + "\n\n";
    exampleText = document.getElementById('exampleText').value + "\n\n";
    secondPointText = document.getElementById('secondPointText').value;
    document.getElementById('generatedTextArea').value = firstPointText + reasonText + exampleText + secondPointText;
    var totalLength = firstPointText.length + reasonText.length + exampleText.length + secondPointText.length;
    document.getElementById('letterLength').textContent = (totalLength - 6).toString();
}

function deleteInputs() {
    if (confirm("空白を削除してコピーしますか？")) {
        document.getElementById('headlineText').value = "";
        document.getElementById('firstPointText').value = "";
        document.getElementById('reasonText').value = "";
        document.getElementById('exampleText').value = "";
        document.getElementById('secondPointText').value = "";
        document.getElementById('generatedTextArea').value = "";
        document.getElementById('letterLength').textContent = "0";
    }
}

function deleteKuhaku() {
    if (confirm("削除しますか？")) {
        console.dir("作動");
        var text = document.getElementById('generatedTextArea').value;
        text = text.replace(/\s+/g, "");
        document.getElementById('generatedTextArea').value = text;
        console.log(text);
        document.getElementById('generatedTextArea').select();
        document.execCommand("copy");
    }
}

// 指定したタグ以外のタグをすべて削除
function removeTag(str, arrowTag) {
    // 配列形式の場合は'|'で結合
    if (
        Array.isArray ?
        Array.isArray(arrowTag) :
        Object.prototype.toString.call(arrowTag) === "[object Array]"
    ) {
        arrowTag = arrowTag.join("|");
    }

    // arrowTag が空の場合は全てのHTMLタグを除去する
    arrowTag = arrowTag ? arrowTag : "";

    // パターンを動的に生成
    var pattern = new RegExp(
        "(?!<\\/?(" +
        arrowTag +
        ")(>|\\s[^>]*>))<(\"[^\"]*\"|\\'[^\\']*\\'|[^\\'\">])*>",
        "gim"
    );

    return str.replace(pattern, "");
}