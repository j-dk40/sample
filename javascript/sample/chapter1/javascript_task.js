function funcA(a) {
	// 空の場合に対応できないため対応
	var pattern = /^[-]?([1-9]\d*|0)(\.\d+)?$/;
	if(!pattern.test(a)) {
		alert("数値以外の入力値です");
		return;
	}

	if(a < 10) {
		alert("10より小さい数値です");
	} else if(a >= 10) {
		alert("10以上の数値です");
	} else {
		alert("数値以外の入力値です")
	}
}

function funcB(b, c) {
	if(c <= 0 || c >= 4) {
		alert("反復回数の指定が間違っています");
		return;
	}
	
	for(var i = 0;i < c;i++) {
		alert(b);
	}
}