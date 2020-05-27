function showAlert(id) {
	var message = "";
	if("btnClick" == id) {
		message = "ボタンクリックイベント発生";
	} else if("txt2_mouseover" == id) {
		message = "マウスオーバーイベント発生";
	} else if("txt2_mouseout" == id) {
		message = "マウスアウトイベント発生";
	} else if("txt3_focus" == id) {
		message = "フォーカスイベント発生";
	} else if("txt4_blur" == id) {
		message = "ブラーイベント発生";
	} else if("load" == id) {
		message = "読み込み完了";
	}
	if (message != "") {
		alert(message);
	}
}
