//mj-twitter2.js   last modified 2010/04/02  by twitter.com/spinel3

var ttag = '<div id="mjtwit">';
ttag += '<div id="twitnavi">';
ttag += '<img id="twitclose" src="/images/common/twitclose.png" alt="">';
ttag += '<span>�}�C�R�~�W���[�i��(��) �}�W��client - �L���ɂ��ĂԂ₱���I</span>';
ttag += '<img id="twitroll" src="/images/common/twitroll.png" alt="">';
ttag += '</div>';

ttag += '<form id="twitform" onsubmit="return false;">';
ttag += '<fieldset style="text-align:left; ">';
ttag += '<span id="nokori" style="position:absolute; top:4px;"></span>';
ttag += '<input type="text" id="status" name="status" />';

ttag += '<div id="funcarea"><a id="maji" href="#" target="blank"><img alt="" src="/images/common/maji2b.gif" style="height:20px;width:20px;position:relative;top:-6px; left:-6px;" /></a>';
ttag += '<a id="twitstat" href="#"><img alt="" src="/images/common/stat.jpg" /></a><img alt="" src="/images/common/titlechk2.gif" id="titlechk" /></div>';
ttag += '<div id="previewarea"><div id="tpreview"></div></div>';

ttag += '<input id="twitsubmit" type="image" src="/images/common/twitsubmit-on.gif" />';
ttag += '</fieldset></form></div>';

if( $("#mjtwit").length == 0 ){
  document.write(ttag);
}

$("#twiticon").append('<a id="majicon" href="#" target="blank"><img title="�Ԃ₫������" style="border:0; margin-left:12px; margin-right:2px;" alt="" src="/images/common/majicon.gif" /></a>');

if( $.cookie("mjtwit") == "dbl" ){
	dblmode = "true";
}else{
	dblmode = "false";
}

$("#mjtwit").css("top",$(window).height() / 2 + "px");
var left = $(window).width() / 2 - 330;
$("#mjtwit").css("left", left + "px");

if( BrowserDetect.browser!="Mozilla"){
  $("#mjtwit").draggable({handle:"#twitnavi"});
}

var longUrl = "http://journal.mycom.co.jp" + canoBase;
var comment = " #mycomj " + longUrl;
comment += " " + pageTitle;

if( window["othertwtag"] != undefined ){
  comment += " #" + window["othertwtag"] + " ";
}

window["majiUrl"] = "http://mycomjournal.jp" + canoBase;
$("#majicon").attr("href",majiUrl);

$("#maji")
	.attr("href",majiUrl)
	.hover(
	    function(){
	        naviChange("���̋L���Ɋւ���݂�Ȃ̂Ԃ₫������",1);
	    },
	    function(){
	    	naviChange(window["org"],1);
	    }
	);
	
$("#tpreview").text(comment);
$("#nokori")
	.html( comment.length )
	.hover(
	    function(){
	        naviChange("�c�蕶�����ł�",1);
	    },
	    function(){
	    	naviChange(window["org"],1);
	    }
	);

var navinum = 0;
var navitxt = new Array();
navitxt.push("1. �}�C�R�~�W���[�i��(��) �}�W��client - �L���ɂ��ĂԂ₱��!");
navitxt.push("2. �g�����͊ȒP�A���ɂԂ₫����͂��āu�Ԃ₭�v�{�^������������!");
navitxt.push("3. �F�؉�ʂ��\������AID�ƃp�X���[�h�����߂�ꂽ���ɂ́E�E�E");
navitxt.push("4. ���Ȃ���twitter�A�J�E���g��ID�ƃp�X���[�h����͂��܂��傤!");
navitxt.push("5. ���̏����͉�ʂ��X�N���[������Ə����Ă��܂��܂����E�E�E");
navitxt.push("6. �L���̍D���ȉӏ����_�u���N���b�N����ƍĕ\���������܂�!");
navitxt.push('7. �ڂ����g������<a href="http://journal.mycom.co.jp/top/notice/twitter/" target="_blank">�w���v�y�[�W</a>���Q�Ƃ��ĉ�����');

var menuYloc = null;
	menuYloc = parseInt($("#mjtwit").css("top").substring(0,$("#mjtwit").css("top").indexOf("px")));
	$(window).scroll(function () { 
		$("#mjtwit").animate({opacity: "hide", top: "-70"}, "fast");
		offset = menuYloc+$(document).scrollTop()+"px";
		$("#mjtwit").animate({top:offset},{duration:500,queue:false});
	});


naviChange = function(str,sugu) {
	window["org"] = $("#twitnavi span").html();
	$("#twitnavi span").html(str);
	
	if(!sugu){
		setTimeout( function(){ $("#twitnavi span").html(org); }, 5000 );
	}
}

$("#twitsubmit")
	.hover(
	    function(){
	        naviChange("���̃{�^����������twitter�ɂԂ₫�����M����܂�",1);
	    },
	    function(){
	    	naviChange(window["org"],1);
	    }
	)
    .click(function(){
        if( $("#nokori").text() < 0 ){
        	naviChange("140�����𒴂��Ă��܂��I");
        }else{
	        $("#status").val( $("#tpreview").text() );
	        post(this.form);  $("#status").val("");
	        setTimeout( function(){ naviChange("�܂��̂����p�����҂����Ă���܂��I"); }, 1500 );
        }
        
    })
    .mousedown(function(){$("#twitsubmit").attr("src","/images/common/twitsubmit-off.gif");})
    .mouseup(function(){$("#twitsubmit").attr("src","/images/common/twitsubmit-on.gif");})

$("#status")
	.click(function (event) {
	    $(this).focus();
	})
    .focus(function(){
        $(this).css("background-color", "#ffffc0");
    })
    .blur(function(){
        $(this).css("background-color", "white");
    })
    .keyup(function(event){
    	if( !$("#tpreview").text().match(/\#mycomj/) ){
    		$("#tpreview").text(comment);
    	}
		$("#tpreview").text( $("#status").val() + ' ' + $("#tpreview").text().match(/\#mycomj.*/) );
		$("#nokori").text( 140 - $("#tpreview").text().length );
		
    })

$("#tpreview")
	.hover(
	    function(){
	        naviChange("�v���r���[�ł��B���̓��e��Twitter�ɓ��e����܂��B",1);
	    },
	    function(){
	    	naviChange(window["org"],1);
	    }
	);
	
$("#mainContent")
	.dblclick(function (event) {
	  if($("#mjtwit").css("display") == "none" && dblmode == "true"){
		$("#mjtwit").css("display","block");
		
		$("#status").focus();
	  }else{
	  	if(event.target.id != "twitroll"){ $("#mjtwit").css("display","none"); }
	  }
	})
	
$("#twitclose")
	.click(function (event) {
	  $("#mjtwit").css("display","none");
	});

var titlechk = false;

$("#titlechk")
	.hover(
	    function(){
	        naviChange("�Ԃ₫�ɋL���^�C�g������ꂽ�菜������ł��܂�",1);
	    },
	    function(){
	    	naviChange(window["org"],1);
	    }
	)
	.click(function (event) {
	  titlechk = !titlechk;
	  
	  if(titlechk){
	  	$(this).attr("src","/images/common/titlechk1.gif");
		var reg = new RegExp('(' + pageTitle.replace(/\W/g, '\\$&') + ')', 'gi');
		$("#tpreview").text( $("#tpreview").text().replace(reg,"") );
	  }
	  else if(!titlechk){
	  	$(this).attr("src","/images/common/titlechk2.gif");
		$("#tpreview").text( $("#tpreview").text() + pageTitle );
	  }
	  $("#nokori").text( 140 - $("#tpreview").text().length );
	});

$("#twitroll")
	.click(function (event) {
	  if(navinum == navitxt.length-1){
	  	navinum = 0;
	  }else{
	    navinum += 1;
	  }
	  
	  $("#twitnavi span").html(navitxt[navinum]);
	  
	});

$("#twitstat")
	.hover(
	    function(){
	        naviChange("���̋L���Ɋւ���Ԃ₫�̓��v��\�����܂�",1);
	    },
	    function(){
	    	naviChange(window["org"],1);
	    }
	);
	
$("#twiticon img:eq(0)")
	.click(function (event) {
	  
	  if($("#mjtwit").css("display") == "none"){
	    $("#mjtwit").css("display","block");
	    dblmode = "true";
	  }else{
	    $("#mjtwit").css("display","none");
	  }
	  
	});

  function post(f) {
	document.charset = "UTF-8";
    var status = f.status.value;
    TwitterAPI.statuses.update(status);
    document.charset = "shift_jis";
    
       $.ajax({
         url: "/mj-twitter.php?ca=" + encodeURIComponent(longUrl),
         success: function(msg){
           ;
         }
       });
  }

$.ajax({
    type: "GET",
    url: "http://api.journal.mycom.co.jp/tsubustat.php?callback=statcb&uri=" + encodeURIComponent(longUrl.replace(/http.*mycom.co.jp/,"")),
    dataType: "jsonp",
    success: function (data) {
    	if(data.count > 1){
          $("#maji").append(data.count+"��");
          $("#twiticon").append(data.count);
        }
    }
});

function setsUrl(surl){
        comment = " #mycomj " + surl;
	comment += " " + pageTitle;

	if( window["othertwtag"] != undefined ){
		comment += " #" + window["othertwtag"] + " ";
	}
		
	$("#tpreview").text( $("#status").val() + comment );
	$("#nokori").text( 140 - $("#tpreview").text().length );
        
	$("#twitstat").css("display", "block");
	$("#twitstat").attr("href",surl + "+");
	$("#twitstat").attr("target","_blank");
}
