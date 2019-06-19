var ROOTDM = [".china.org.cn"];
var INCLUDESUBHOST = ["french.china.org.cn", "spanish.china.org.cn", "german.china.org.cn", "japanese.china.org.cn", "arabic.china.org.cn", "esperanto.china.org.cn", "russian.china.org.cn", "www.china.org.cn", "www.investchina.org.cn", "nanning.china.org.cn", "korean.china.org.cn", "german.china.org.cn", "esperanto.china.org.cn", "invest.china.org.cn", "weather.china.org.cn", "xibanyanian.china.org.cn", "business.china.org.cn", "service.china.org.cn"];
var SHOWERRHOST=1;
var _wdUID="2";
var _wecl="//dr.cl.china-online.com.cn/1.js";
var _wdLP=location.protocol.indexOf('https')>-1?'https:':'http:';
var _wdCA=_wdLP+_wecl;

function println(s){
//	  document.write(s+"</br>");
}

function _wdEC(){
}

function fesc(a){
	var s=new String(a);
	return escape(s);
}

function wdhex(num) { var s="", v; for (var i=7; i>=0; i--) { v = (num>>>(i*4)) & 0xf; s += v.toString(16); } return s; } function wdHash(d) { if (!d || d=="") return 1; var H0 = 0x67452301; var H1 = 0xefcdab89; for (var i=0;i<d.length;i++) { var c= parseInt(d.charCodeAt(i)); H0 = (((H0<<6) | (H1>>>26)) + ((H0<<16) | (H1>>>16)) - H0); H1 = (c + (H1 << 6) - H1 + (H1 << 16)) & 0xffffffff; } return wdhex(H0 & 0x7fffffff) + wdhex(H1);}

function wdGenCID() {
	return wdHash(document.location + document.cookie + document.referrer + curtime.getTime());
}

function getCookie(cookie_name)
{
	var value=null;
	var allcookies = document.cookie;
	var cookie_pos = allcookies.indexOf(cookie_name);

	if (cookie_pos != -1)
	{
		cookie_pos += cookie_name.length + 1;
		var cookie_end = allcookies.indexOf(";", cookie_pos);
		if (cookie_end == -1){
			cookie_end = allcookies.length;
		}
		value = allcookies.substring(cookie_pos, cookie_end);
	}
	return value;
}

function wdFlash() {
	var v = "", n = navigator;
	if (n.plugins && n.plugins.length) {
		for (var j = 0; j < n.plugins.length; j++ ) {
			if (n.plugins[j].name.indexOf('Shockwave Flash') !=- 1) {
			v = n.plugins[j].description.split('Shockwave Flash ')[1];
			break;
			}
		}
	} else if (window.ActiveXObject) {
		for (var j = 10; j >= 2; j-- ) {
			try {
				var fl = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + j + "');");
				if (fl) {
				v = j + '.0';
				break;
			}
			} catch(e) {}
		}
	}
	return v;
}

function send_ref(surl) {
	surl = _wdCA + surl;
	//document.write('<div style="display:none"><scr' + 'ipt src="' +surl + '" ></scr' + 'ipt></div>');
	var A=new Image(1,1);A.src=surl;
	A.onload=_wdEC;
}

function wd_tracker(otherlink){
	setup_data();
	
	if (otherlink && otherlink!="") {
		var tmp = _wdSL;
		if(otherlink.toLowerCase().indexOf('http') != 0 )
			otherlink = _wdLP + "//" + _wdHost + otherlink;
		_wdSL=otherlink;
		_wdRP = tmp;
	}
	
	write_ref();
}

function wd_reptracker(selflink, adddata){
	setup_data();
	
	if (selflink && selflink!="") {
		_wdSL=_wdLP + "//" + _wdHost + selflink;
	}
	
	write_ref();
}

function wd_paramtracker(addparam) {
        setup_data();
        
	if (addparam && addparam!="") {
                if(_wdSL.indexOf('?') == -1) {
			_wdSL = _wdSL + "?" + addparam;
		} else {
			_wdSL = _wdSL + "&" + addparam;
		}
        }

        write_ref();
}

	var _wdED= "expires=Fri, 1 Jan 2038 00:00:00 GMT;";
	var _wdCK="0";
	var _wdJE="0";
	var _wdHP="0";
	var _wdFl=0;
	var _wdTZ=0;
	var _wdLG="";
	var _wdCT="";
	var _wdFS=0;
	var _wdErr='1';

	var _wdDT=document.title;
	var _wdCS;

	var _wdSL=window.location.href;

	var _wdHost=window.location.host;
	var _wdRDM="";

	var _wdRP=document.referrer;

	var _wdUA=navigator.appName+" "+navigator.appVersion;
	var _wdRUA=navigator.userAgent;
	var _wdWS=window.screen;

	var _wdBV=navigator.appVersion.substring(0, 1);

	var _wdNN=((_wdUA.indexOf('Netscape'))!=-1)?true:false;
	var _wdMC=((_wdUA.indexOf('Mac'))!=-1)?true:false;
	var _wdIE=((_wdUA.indexOf('MSIE'))!=-1)?true:false;
	var _wdOP=((_wdRUA.indexOf('Opera'))!=-1)?true:false;
	var _wdIEV=0;
	var _wdCID;
	var _wdBCID="0";
	var _wdLS=0;
	var _wdTO = "1";

	var curtime = new Date();

function setup_data() {
	try{
		if(ROOTDM);
	}catch(e){
		ROOTDM=null;
	}
	try{
		if(INCLUDESUBHOST);
	}catch(e){
		INCLUDESUBHOST=null;
	}
	try{
		if(SHOWERRHOST);
	}catch(e){
		SHOWERRHOST=null;
	}
	try{
		if(_wdUID);
	}catch(e){
		return;
	}

	if (document.location.protocol=="file:"){
		return;
	}

	if (document.characterSet) _wdCS=fesc(document.characterSet);
	else if (document.charset) _wdCS=fesc(document.charset);

	if( INCLUDESUBHOST &&INCLUDESUBHOST !=null && INCLUDESUBHOST.length!=0) {
		for (i = 0; i < INCLUDESUBHOST.length; i++)
		{
			if( INCLUDESUBHOST[i] && _wdHost && INCLUDESUBHOST[i].indexOf(_wdHost)!=-1 ) {
				_wdErr='0';
				break;
			}
		}
	}else{
		_wdErr='0';
	}

	if('1' == _wdErr && SHOWERRHOST !=null && SHOWERRHOST != 1){
		return;
	}
	if('1' == _wdErr) println("");



	if(ROOTDM && ROOTDM!=null  && ROOTDM.length!=0 && _wdHost && _wdHost!=""){
		for (i = 0; i < ROOTDM.length; i++) {
			if(_wdHost.indexOf(ROOTDM[i])!= -1){
				_wdRDM = ROOTDM[i];
			}
		}
	}

	println("_wdRP="+_wdRP);
	
	if ( ! _wdRP || _wdRP == "") {
		_wdRP = "";
	} else {
		r = _wdRP.indexOf(document.domain);
		if ((r >= 0) && (r <= 8)) {
		} else if (_wdRP.indexOf("[") == 0 && _wdRP.lastIndexOf("]") == (_wdRP.length - 1)) {
			_wdRP = "";
		}
	}

	println("_wdRP="+_wdRP);
	println("_wdUA="+_wdUA);
	println("_wdRUA="+_wdRUA);

	if(_wdIE) {
		_wdIEV=(parseInt(_wdUA.substr(_wdUA.indexOf('MSIE')+5)));
	}

	if(_wdIE&&(_wdIEV>=5)){
		document.body.addBehavior("#default#clientCaps");
		_wdCT=document.body.connectionType;
		document.body.addBehavior("#default#homePage");
		_wdHP=(document.body.isHomePage(location.href))?"1":"0";
	}

	try {
		if(_wdIE) _wdFS=document.fileSize;
	} catch (error) {
	 	_wdFS=0; 
	}


	_wdFl = wdFlash();

	_wdTZ = new Date().getTimezoneOffset()/-60;

	if((typeof(_wdWS)!="undefined")&&(_wdWS!=null)) {
		_wdSW=_wdWS.width;
		_wdSH=_wdWS.height;
		_wdCD=_wdWS.colorDepth;
		_wdSR=_wdSW+'x'+_wdSH;

		if(_wdNN &&(_wdBV >=4)) {
			_wdCD=_wdWS.pixelDepth;
		}
	}

	if( (_wdNN && _wdBV >=4) || _wdOP) {
		_wdLG=navigator.language;
	}


	if(_wdIE &&(_wdBV >=4)&& !_wdOP) {
		_wdLG=navigator.userLanguage;
	}

	_wdJE=(navigator.javaEnabled()==true)?"1":"0";


	if(navigator.cookieEnabled){
		_wdCK=(navigator.cookieEnabled==true)?"1":"0";
	}
	if(_wdCK == 1) {
		setup_cookie();
	}
}

function setup_cookie() {
	var _wdCKTmp = document.cookie;
	var tmp = _wdCKTmp.indexOf("wdcid=");
	if (tmp < 0) {
		_wdBCID = "0";
		_wdCID= wdGenCID();
		var domaintmp = "";
		if(_wdRDM && _wdRDM != ""){
			domaintmp="domain="+_wdRDM+";";
		}
		document.cookie = "wdcid=" + escape(_wdCID) + ";" + _wdED + domaintmp + "path=/;";

		if (document.cookie.indexOf("wdcid=") < 0){
			_wdCK = 0;
			return;
		}
	} else {
	_wdBCID = "1";
	_wdCID = getCookie("wdcid");
	}
	tmp = document.cookie.indexOf("wdlast=");
	if (tmp < 0) {
	_wdLS = 0;
	} else {
	_wdLS = parseInt(getCookie("wdlast"));
	if ((curtime.getTime() / 1000) - _wdLS < _wdTimeOut)  _wdTO = "0";
	}
	document.cookie = "wdlast="
	+ Math.round(curtime.getTime() / 1000)+ ";" + _wdED + "path=/;";

}

function write_ref() {
	if(_wdCK=="0"){
		_dgURL=getGeneralInfo() + getLocalInfo();
	}else{
		_dgURL=getGeneralInfo() + getCookieInfo();
		if(_wdTO=="1")
			_dgURL = _dgURL + getLocalInfo();
	}
	send_ref(_dgURL);
	return;
}

function getGeneralInfo(){
	return  "?z="+_wdUID
	+"&a="+ curtime.getTime().toString(16)
	+"&b="+fesc(_wdDT)
	+"&B="+_wdCS
	+"&c="+fesc(_wdSL)
	+"&d="+fesc(_wdRP)
	+"&e="+_wdHP
	+"&f="+_wdFS
	+"&H="+fesc(_wdHost)
	+"&E="+_wdErr ;

}

function getLocalInfo(){
	return "&i="+fesc(_wdLG)
	+"&j="+_wdJE
	+"&k="+_wdSR
	+"&l="+_wdCD
	+"&m="+_wdFl
	+"&n="+fesc(_wdCT)
	+"&o="+_wdTZ;

}

function getCookieInfo(){
	return		 "&r="+_wdCID
	+"&s="+_wdBCID
	+"&t="+_wdLS
	+"&u="+_wdTO;
}

window.onerror=_wdEC;

var _wdTimeOut=1800;

