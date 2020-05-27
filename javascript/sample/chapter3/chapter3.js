document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("msg-area").innerHTML = "画面DOMの構築が完了しました";
	
	document.getElementById("txt3").addEventListener("click",function(event){
		document.getElementById("txt3").value = "30";
	});
});

function displayLoad() {
	var inputObj = document.createElement("input");
	inputObj.setAttribute("type","text");
	inputObj.setAttribute("id","txt4");
	document.getElementById("appendTargetTd").appendChild(inputObj);
}

function btnAClick() {
	document.getElementById("txt1").value = "10";
}

function btnBClick() {
	var classElements = document.getElementsByClassName("txt-target-class");
	for (var i = 0;i < classElements.length;i++) {
		classElements[i].value = 20;
	}
}

function btnCClick() {
	document.getElementById("msg-area").innerHTML = "メッセージ設定";
}