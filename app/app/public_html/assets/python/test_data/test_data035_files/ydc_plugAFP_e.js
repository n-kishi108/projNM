// Adobe Flash Player

// ----- Initial Value -----
// Help Url
var yjpmAFP_Help = 'http://help.yahoo.co.jp/help/jp/common/sys/sys-10.html';
var yjpmAFP_Kids_Help = 'http://help.yahoo.co.jp/help/jp/kids/tools/tools-10.html';

// YDC Url
var yjpmAFP_ydc = 'http://downloads.yahoo.co.jp/docs/flashplayer/start.html';
var yjpmAFP_Kids_ydc = 'http://downloads.yahoo.co.jp/docs/flashplayer/start_kids.html';

//Id
yjstdYjpmModel.AFP_h = 'yjPluginAFP01';	// ����
yjstdYjpmModel.AFP_v = 'yjPluginAFP02';	// �ķ�

// Element
yjAFP = {
	yjpmImage : 'images/common/ydc_get_flash_player1.gif',
	yjpmAlt : 'Adobe Flash Player���󥹥ȡ��륬����',
	yjpmText : {
		yjpmAFP : 'Adobe Flash Player�ϡ�<a href="' + yjpmAFP_ydc + '" target="plugin">Adobe Flash Player���󥹥ȡ��륬����</a>��Yahoo!��������ɥ��󥿡��ˤ���̵��������Ǥ��ޤ���',
		yjpmAFP_k1 : '�ˤϡ�JavaScript���б������֥饦���ȥץ졼�䡼���եȥ�������Adobe Flash Player��ɬ�פǤ���Adobe Flash Player�ϡ�<a href="' + yjpmAFP_Kids_ydc + '" target="plugin">Adobe Flash Player���󥹥ȡ��륬����</a>��Yahoo!��������ɥ��󥿡��ˤ���̵���ǥ�������ɤǤ��ޤ���'
	}
};

function yjstdPlugMAFP(yjstdPmType, yjstdPmClass, yjstdPmText) {
	if (xLBenv.os.name.indexOf('MacOS9') != -1) {
		if (yjstdYjpmType[yjstdPmType] == 'Normal') {
			return yjstdPmHtml = "<p class='yjSt'>" + yjstdYjpmNG + "</p>";
		} else if (yjstdYjpmType[yjstdPmType] == 'Kids') {
			return yjstdPmHtml = "<p class='yjSt'>" + yjstdYjpmNG_k + "</p>";
		}
	} else {
		if (yjstdYjpmType[yjstdPmType] == 'Normal') {
			return yjstdPmHtml ="<div class='" + yjstdPmClass + "'><a href='" + yjpmAFP_ydc + "' target='plugin'><img src='" + yjstdImgDmn() + yjAFP.yjpmImage + "' alt='" + yjAFP.yjpmAlt + "' class='ydc1'></a></div><p class='yjSt'>" + yjAFP.yjpmText.yjpmAFP + "</p>";
		} else if (yjstdYjpmType[yjstdPmType] == 'Kids') {
			return yjstdPmHtml ="<div class='" + yjstdPmClass + "'><a href='" + yjpmAFP_Kids_ydc + "' target='plugin'><img src='" + yjstdImgDmn() + yjAFP.yjpmImage + "' alt='" + yjAFP.yjpmAlt + "' class='ydc1'></a></div><p class='yjSt'>" + yjstdPmText + yjAFP.yjpmText.yjpmAFP_k1 + "</p>";
		}
	}
}

