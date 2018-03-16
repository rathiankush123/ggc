$(document).ready(function(){

	$("#mainInfo").hide();

	$("#infoBtn").click(function(){
    	$("#mainInfo").toggle();
    });

    $("#generateGitCommands").click(function(){

		var gitAddCmd = 'git add ' + $('#fileNames').val();
		$("#gitAddCmd").text(gitAddCmd);
		var gitCommitCmd = 'git commit -m ' + '"' + $('#commitMessage').val() + '"';
		$("#gitCommitCmd").text(gitCommitCmd);
		var gitPushCmd = 'git push origin '+ $('#branchName').val();
		$("#gitPushCmd").text(gitPushCmd);


		var dateObj = new Date();
		var year = dateObj.getFullYear();
		var month = dateObj.getMonth() + 1 ;
		if(month < 10){
			month = "0" + month;
		}
		var date = dateObj.getDate();
		if(date < 10){
			date = "0" + date;
		}

		var tagName = year.toString()+month.toString()+date.toString() 
						+ "_"
						+ "TAG"
						+ "_rc-01";

		var createTagCmd = "git tag -a " + tagName + " origin/" + $('#branchName').val() + " -m " + '"'+ $('#commitMessage').val() + '"';
		$("#createTagCmd").text(createTagCmd);

		var pushTagCmd = "git push origin " + tagName;
		$("#pushTagCmd").text(pushTagCmd);

		return false;
    });

});

function copyToClipboard(element) {
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val($(element).text()).select();
	document.execCommand("copy");
	$temp.remove();
	alert('Copied!');
}