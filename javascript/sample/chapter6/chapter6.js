$(document).ready( function(){
	// 最初は非表示にしておく
	$('#modal-area').hide();

	$('#btnAdd').on('click',function(){
		$("#modal-area" ).dialog({
			open: function( event, ui ) {
				$(".ui-dialog-titlebar-close").hide();
			}
		});
		var imgTag = "<img src='loader.gif' />";
		$("#loader-area").html(imgTag);
		$("#load-text-area").html("<p>処理を行っています。<br />少々お待ちください。</p>");
		
		setTimeout(delayExecuteProcess, 3000);
		/*
		if(checkInvalid() === true) {
			showCompleteMessage();
		}
		*/
	});
	$('#btnChange').on('click',function(){
		if($('#slt4').attr('disabled') === undefined) {
			$('#slt4').attr('disabled', 'disabled');
		} else {
			$('#slt4').attr('disabled', null);
		}
	});
});

function delayExecuteProcess() {
	if(checkInvalid() === true) {
		showCompleteMessage();
	}
	$("#modal-area" ).dialog("close");
}

function checkInvalid() {
	$('#msg-area').css("color", "black");
	var invalidMessage = "";
	if($('#txt1').val() === "") {
		invalidMessage = "txt1が空です";
	}
	if($('#dt2').val() === "") {
		if(invalidMessage !== "") {
			invalidMessage += "<br />";
		}
		invalidMessage += "dt2が空です";
	}
	if($('#txt3').val() === "") {
		if(invalidMessage !== "") {
			invalidMessage += "<br />";
		}
		invalidMessage += "txt3が空です";
	}
	if($('#slt4').attr('disabled') === undefined) {
		if($('#slt4').val() === null) {
			if(invalidMessage !== "") {
				invalidMessage += "<br />";
			}
			invalidMessage += "slt4が未選択です";
		}
	}
	if($('input[name=rdogrp]:checked').val() == undefined) {
		if(invalidMessage !== "") {
			invalidMessage += "<br />";
		}
		invalidMessage += "rdogrpが未選択です";
	}
	
	if(invalidMessage !== "") {
		$('#msg-area').css("color", "red");
		$('#msg-area').html(invalidMessage);
		return false;
	}
	return true;
}

function showCompleteMessage() {
	$('#msg-area').html("登録処理が完了しました！");
}
