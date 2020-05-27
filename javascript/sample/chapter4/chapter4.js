var processB = function(){
	alert("処理Bが実行されました");
};

function processA(proB){
	var result = window.confirm("処理Aを実行しました。処理Bを続けて実行しますか？");
	if(result){
		proB();
	}
}

var deleteMessage = function(){
	document.getElementById('msg-area').innerHTML = "";
}

function clickBtnB() {
	document.getElementById('msg-area').innerHTML = "ボタンBをクリック";
	setTimeout(deleteMessage, 5000);
}