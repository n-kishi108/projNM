//	Plugin Module (EUC)
//	Version : 1.5
//	Core

if(xLBenv.browser.name == "Internet Explorer" && xLBenv.browser.version <= 5.00) {  // IE5.00�ʲ��ξ��{

}else{// ����ʳ��ξ��	
	var yjstdYjpmType = {
		Type1 : 'Normal',
		Type2 : 'Kids',
		Type3 : 'English'
	};
	var yjstdYjpmClass = ['yjstdIcnH', 'yjstdIcnV'];
	var yjstdYjpmNG = '���Υ֥饦���Ǥϥ����ӥ������Ѥ��������ޤ��󡣡�<a href="http://help.yahoo.co.jp/help/jp/common/sys/sys-01.html">Yahoo! JAPAN�ο侩�֥饦��</a>�פ�������������';
	var yjstdYjpmNG_k = '���Υ֥饦���ǤϤ����Ѥ��������ޤ���Yahoo!���ä��ϡ��ʤ�٤��ǿ���Internet Explorer��Windows�ˤ���Safari��Macintosh�ˤǤ����Ѥ���������';
	var yjstdYjpmNG_e = 'Your browser doesn\'t support Adobe Reader.Please see "<a href="http://help.yahoo.co.jp/help/jp/common/sys/sys-21.html">Yahoo! JAPAN Browser Recommendation</a>."';
	var yjstdYjpmModel = new Array();
	
	// Check Protocol - for Images
	function yjstdImgDmn() {
		var yjstdGetPtl = window.location.protocol ;
		var yjstdCheckPtl = "";
		if(yjstdGetPtl.indexOf("https") != -1) yjstdCheckPtl = "https://s.yimg.jp/";
		else yjstdCheckPtl = "http://i.yimg.jp/";
		return yjstdCheckPtl;
	}

	// yjstdPmType:�ץ饰���󥿥��סʥΡ��ޥ���/���ä���/�Ѹ��ǡ�, yjstdPmModel:�ץ饰����μ���_�ʲ���/�ķ���, yjstdPmText:����ʸ��Ǥ�ա�
	function yjstdPlugM(yjstdPmType, yjstdPmModel, yjstdPmText){
	
		yjstdPmM = yjstdPmModel.split("_");
		if (yjstdPmM[1] == "h") {
			yjstdPmClass = yjstdYjpmClass[0];
		} else {
			yjstdPmClass = yjstdYjpmClass[1];
		}
	
		var yjstdPmId = yjstdYjpmModel[yjstdPmModel];
	
		document.write('<div id="' + yjstdPmId + '" class="yjstdPlug"></div>');
	
		var pmObj = document.getElementById(yjstdPmId);
	
		//yjstdPmType:�ץ饰���󥿥��סʥΡ��ޥ���/���ä���/�Ѹ��ǡ�, yjstdPmObj:�ץ饰����μ���, yjstdPmClass:class̾�ʽ�/����, yjstdPmText:����ʸ
		if (yjstdPmM[0] == 'BRW') {
			yjstdPmHtml = yjstdPlugMBrw(yjstdPmType, yjstdPmClass, yjstdPmText);
		} else if (yjstdPmM[0] == 'WMP') {
			yjstdPmHtml = yjstdPlugMWMP(yjstdPmType, yjstdPmClass, yjstdPmText);
		} else if (yjstdPmM[0] == 'AFP') {
			yjstdPmHtml = yjstdPlugMAFP(yjstdPmType, yjstdPmClass, yjstdPmText);
		} else if (yjstdPmM[0] == 'AR') {
			yjstdPmHtml = yjstdPlugMAR(yjstdPmType, yjstdPmClass, yjstdPmText);
		} else if (yjstdPmM[0] == 'WMPAFP') {
			yjstdPmHtml = yjstdPlugMWMPAFP(yjstdPmType, yjstdPmClass, yjstdPmText);
		} else if (yjstdPmM[0] == 'SL') {
			yjstdPmHtml = yjstdPlugMSL(yjstdPmType, yjstdPmClass, yjstdPmText);
		} else if (yjstdPmM[0] == 'WMPSL') {
			yjstdPmHtml = yjstdPlugMWMPSL(yjstdPmType, yjstdPmClass, yjstdPmText);
		}
	
		pmObj.innerHTML = yjstdPmHtml;
	
	}
}