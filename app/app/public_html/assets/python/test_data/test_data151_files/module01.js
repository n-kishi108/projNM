//	Plugin Module	
// 	Version : 1.2
// 	1. Browser
// 	2. Windows Media Player
// 	3. Real Player
// 	4. Adobe Flash Player
// 	5. Adobe Reader
// 	6. Windows Media Player and Adobe Flash Player

// URL Normal
var yjPluginBrw_Help = 'http://help.yahoo.co.jp/help/jp/common/sys/sys-01.html';
var yjPluginBrw_FF   = 'http://www.mozilla-japan.org/products/firefox/';
var yjPluginBrw_IE   = 'http://www.microsoft.com/japan/windows/ie/downloads/default.mspx';
var yjPluginBrw_IE6  = 'http://www.microsoft.com/japan/windows/ie/ie6/downloads/default.mspx';
var yjPluginBrw_SF   = 'http://www.apple.com/jp/safari/';
var yjPluginWMP_Help = 'http://help.yahoo.co.jp/help/jp/common/sys/sys-08.html';
var yjPluginWMP_WMP  = 'http://www.microsoft.com/windows/windowsmedia/player/download/';
var yjPluginWMP_WMP9 = 'http://www.microsoft.com/japan/windows/windowsmedia/software/macintosh/osx/default.aspx';
var yjPluginWMP_WMP7 = 'http://www.microsoft.com/japan/windows/windowsmedia/download/mac71.aspx';
var yjPluginRP_Help  = 'http://help.yahoo.co.jp/help/jp/common/sys/sys-09.html';
var yjPluginRP_WIN   = 'http://japan.real.com/player/?lang=jp&loc=jp&src=ext';
var yjPluginRP_MAC   = 'http://japan.real.com/player/?lang=jp&loc=jp&src=ext';
var yjPluginAFP_Help = 'http://help.yahoo.co.jp/help/jp/common/sys/sys-10.html';
var yjPluginAFP_ALL  = 'http://www.adobe.com/go/getflashplayer_jp';
var yjPluginAR_Help  = 'http://help.yahoo.co.jp/help/jp/common/sys/sys-11.html';
var yjPluginAR_ALL   = 'http://www.adobe.com/jp/products/acrobat/readstep2.html';
// URL Kids
var yjPluginWMP_Kids_Help = 'http://help.yahoo.co.jp/help/jp/kids/tools/tools-41.html';
var yjPluginAFP_Kids_Help = 'http://help.yahoo.co.jp/help/jp/kids/tools/tools-10.html';
var yjPluginAR_Kids_Help  = 'http://help.yahoo.co.jp/help/jp/kids/tools/tools-07.html';

// Type
var yjPluginNormal = 0;
var yjPluginKids   = 1;

// Check Protocol - for Images
function yjImgDmn() {
	var getPtl = window.location.protocol ;
	var checkPtl = "";
	if(getPtl.indexOf("https") != -1) checkPtl = "https://s.yimg.jp/";
	else checkPtl = "http://i.yimg.jp/";
	return checkPtl;}

// Text Normal
var yjPluginBrw_Text = ['�ǿ��Υ֥饦����Internet Explorer/Firefox�ˤϡ��ܥ���򲡤��ư�ư���������Ȥ�����Ǥ��ޤ�������˾ܤ�������ϡ�<a href="' + yjPluginBrw_Help + '">Yahoo! JAPAN�ο侩�֥饦��</a>�פ�������������', '�ǿ��Υ֥饦����Safari�ˤϡ��ܥ���򲡤��ư�ư���������Ȥ�����Ǥ��ޤ�������˾ܤ�������ϡ�<a href="' + yjPluginBrw_Help + '">Yahoo! JAPAN�ο侩�֥饦��</a>�פ�������������', '�ǿ��Υ֥饦������ϡ�<a href="' + yjPluginBrw_Help + '">Yahoo! JAPAN�ο侩�֥饦��</a>�פ�������������'];
var yjPluginWMP_Text = ['Windows Media Player�ϡ��ܥ���򲡤��ư�ư���������Ȥ�����Ǥ��ޤ�������˾ܤ�������ϡ�<a href="' + yjPluginWMP_Help + '">Windows Media Player�򥤥󥹥ȡ��뤹��ˤ�</a>�פ�������������', 'Windows Media Player�ξ���ϡ�<a href="' + yjPluginWMP_Help + '">Windows Media Player�򥤥󥹥ȡ��뤹��ˤ�</a>�פ�������������'];
var yjPluginRP_Text = ['Real Player�ϡ��ܥ���򲡤��ư�ư���������Ȥ�����Ǥ��ޤ�������˾ܤ�������ϡ�<a href="' + yjPluginRP_Help + '">Real Player�򥤥󥹥ȡ��뤹��ˤ�</a>�פ�������������', 'Real Player�ξ���ϡ�<a href="' + yjPluginRP_Help + '">Real Player�򥤥󥹥ȡ��뤹��ˤ�</a>�פ�������������'];
var yjPluginAFP_Text = ['Adobe Flash Player�ϡ��ܥ���򲡤��ư�ư���������Ȥ�����Ǥ��ޤ�������˾ܤ�������ϡ�<a href="' + yjPluginAFP_Help + '">Adobe Flash Player�򥤥󥹥ȡ��뤹��ˤ�</a>�פ�������������'];
var yjPluginAR_Text    = ['Adobe Reader�ϡ��ܥ���򲡤��ư�ư���������Ȥ�����Ǥ��ޤ�������˾ܤ�������ϡ�<a href="' + yjPluginAR_Help + '">Adobe Reader�򥤥󥹥ȡ��뤹��ˤ�</a>�פ�������������'];
var yjPluginWMPAFP_Text      = ['ư��Ȳ����κ����ˤϡ��ץ졼�䡼���եȥ�������Windows Media Player/Adobe Flash Player�ˤ�ɬ�פǤ������줾��ܥ���򲡤��ư�ư���������Ȥ�����Ǥ��ޤ�������˾ܤ�������ϡ�<a href="' + yjPluginWMP_Help + '">Windows Media Player�򥤥󥹥ȡ��뤹��ˤ�</a>�ס�<a href="' + yjPluginAFP_Help + '">Adobe Flash Player�򥤥󥹥ȡ��뤹��ˤ�</a>�פ�������������', 'ư��Ȳ����κ����ˤϡ��ץ졼�䡼���եȥ�������Windows Media Player/Adobe Flash Player�ˤ�ɬ�פǤ����ǿ��Υץ졼�䡼���եȥ���������ϡ�<a href="' + yjPluginWMP_Help + '">Windows Media Player�򥤥󥹥ȡ��뤹��ˤ�</a>�ס�<a href="' + yjPluginAFP_Help + '">Adobe Flash Player�򥤥󥹥ȡ��뤹��ˤ�</a>�פ�������������'];

// Text Kids
var yjPluginWMP_Kids_Text = ['�ˤϡ��ץ졼�䡼���եȥ�������<a href="' + yjPluginWMP_WMP + '" target="plugin">Windows Media Player��̵����</a>��ɬ�פǤ���Windows Media Player�ϡ��ܥ���򲡤��ư�ư���������Ȥǥ�������ɤǤ��ޤ�������ˤ��路������ϡ�<a href="' + yjPluginWMP_Kids_Help + '">Windows Media Player�äƤʤˡ�</a>�פ򤴤�󤯤�������', '�ˤϡ��ץ졼�䡼���եȥ�������<a href="' + yjPluginWMP_WMP9 + '" target="plugin">Windows Media Player��̵����</a>��ɬ�פǤ���Windows Media Player�ϡ��ܥ���򲡤��ư�ư���������Ȥǥ�������ɤǤ��ޤ�������ˤ��路������ϡ�<a href="' + yjPluginWMP_Kids_Help + '">Windows Media Player�äƤʤˡ�</a>�פ򤴤�󤯤�������', '�ˤϡ��ץ졼�䡼���եȥ�������<a href="' + yjPluginWMP_WMP7 + '" target="plugin">Windows Media Player��̵����</a>��ɬ�פǤ���Windows Media Player�ϡ��ܥ���򲡤��ư�ư���������Ȥǥ�������ɤǤ��ޤ�������ˤ��路������ϡ�<a href="' + yjPluginWMP_Kids_Help + '">Windows Media Player�äƤʤˡ�</a>�פ򤴤�󤯤�������', 'Windows Media Player�ξ���ϡ�<a href="' + yjPluginWMP_Kids_Help + '">Windows Media Player�äƤʤˡ�</a>�פ򤴤�󤯤�������'];
var yjPluginAFP_Kids_Text = ['�ˤϡ�JavaScript���б������֥饦���ȥץ졼�䡼���եȥ�������<a href="' + yjPluginAFP_ALL + '" target="plugin">Adobe Flash Player��̵����</a>��ɬ�פǤ���Adobe Flash Player�ϡ��ܥ���򲡤��ư�ư���������Ȥǥ�������ɤǤ��ޤ�������ˤ��路������ϡ�<a href="' + yjPluginAFP_Kids_Help + '">Flash�äƤʤˡ�</a>�פ򤴤�󤯤�������'];
var yjPluginAR_Kids_Text  = ['�ˤϡ������ʤ��Ĥ��˥��եȥ�������<a href="' + yjPluginAR_ALL + '" target="plugin">Adobe Reader��̵����</a>��ɬ�פǤ���Adobe Reader�ϡ��ܥ���򲡤��ư�ư���������Ȥǥ�������ɤǤ��ޤ�������ˤ��路������ϡ�<a href="' + yjPluginAR_Kids_Help + '">PDF�äƤʤˡ�</a>�פ򤴤�󤯤�������'];


// 1-1.��Browser��CSS�ǲ���
function yjPluginBrw01(type,text){
var yjPlugin_Text = text;
if (xLBenv.os.name.indexOf('Windows XP') != -1 || xLBenv.os.name.indexOf('Windows Server 2003') != -1 || xLBenv.os.name.indexOf('Windows Vista') != -1 ) {
	document.write('<div class="yjplg"><div class="icn-h"><a href="' + yjPluginBrw_FF + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getfirefox_88x31.png" alt="Firefox����������"></a><a href="' + yjPluginBrw_IE + '" target="plugin"><img src="' + yjImgDmn() + 'images/ybb/icon/ieget_animated.gif" alt="Internet Explorer����������"></a></div><p class="yjSt">');
	document.write( yjPluginBrw_Text[0] );
	document.write('</p></div>');}
else if (xLBenv.os.name.indexOf('Windows 98') != -1 || xLBenv.os.name.indexOf('Windows ME') != -1 || xLBenv.os.name.indexOf('Windows NT 4.0') != -1 || xLBenv.os.name.indexOf('Windows 2000') != -1 ) {
	document.write('<div class="yjplg"><div class="icn-h"><a href="' + yjPluginBrw_FF + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getfirefox_88x31.png" alt="Firefox����������"></a><a href="' + yjPluginBrw_IE6 + '" target="plugin"><img src="' + yjImgDmn() + 'images/ybb/icon/ieget_animated.gif" alt="Internet Explorer����������"></a></div><p class="yjSt">');
	document.write( yjPluginBrw_Text[0] );
	document.write('</p></div>');}
else if (xLBenv.os.name.indexOf('MacOSX') != -1) {
	document.write('<div class="yjplg"><div class="icn-h yj-txt yjSt"><a href="' + yjPluginBrw_SF + '" class="yj-txt" target="plugin">[Safari����������]</a></div><p class="yjSt">');
	document.write( yjPluginBrw_Text[1] );
	document.write('</p></div>');}
else if (xLBenv.os.name.indexOf('MacOS9') != -1) {
	document.write('');}
else {
	document.write('<div class="yjplg"><p class="yjSt">');
	document.write( yjPluginBrw_Text[2] );
	document.write('</p></div>');}
}

// 1-2.��Browser��CSS�ǽķ�
function yjPluginBrw02(type,text){
var yjPlugin_Text = text;
if (xLBenv.os.name.indexOf('Windows XP') != -1 || xLBenv.os.name.indexOf('Windows Server 2003') != -1 || xLBenv.os.name.indexOf('Windows Vista') != -1 ) {
	document.write('<div class="yjplg"><div class="icn-v"><a href="' + yjPluginBrw_FF + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getfirefox_88x31.png" alt="Firefox����������"></a><a href="' + yjPluginBrw_IE + '" target="plugin"><img src="' + yjImgDmn() + 'images/ybb/icon/ieget_animated.gif" alt="Internet Explorer����������"></a></div><p class="yjSt">');
	document.write( yjPluginBrw_Text[0] );
	document.write('</p></div>');}
else if (xLBenv.os.name.indexOf('Windows 98') != -1 || xLBenv.os.name.indexOf('Windows ME') != -1 || xLBenv.os.name.indexOf('Windows NT 4.0') != -1 || xLBenv.os.name.indexOf('Windows 2000') != -1 ) {
	document.write('<div class="yjplg"><div class="icn-v"><a href="' + yjPluginBrw_FF + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getfirefox_88x31.png" alt="Firefox����������"></a><a href="' + yjPluginBrw_IE6 + '" target="plugin"><img src="' + yjImgDmn() + 'images/ybb/icon/ieget_animated.gif" alt="Internet Explorer����������"></a></div><p class="yjSt">');
	document.write( yjPluginBrw_Text[0] );
	document.write('</p></div>');}
else if (xLBenv.os.name.indexOf('MacOSX') != -1) {
	document.write('<div class="yjplg"><div class="icn-v yj-txt yjSt"><a href="' + yjPluginBrw_SF + '" class="yj-txt" target="plugin">[Safari����������]</a></div><p class="yjSt">');
	document.write( yjPluginBrw_Text[1] );
	document.write('</p></div>');}
else if (xLBenv.os.name.indexOf('MacOS9') != -1) {
	document.write('');}
else {
	document.write('<div class="yjplg"><p class="yjSt">');
	document.write( yjPluginBrw_Text[2] );
	document.write('</p></div>');}
}

// 1-3.��Browser��Table�ǲ���
function yjPluginBrw03(type,text){
var yjPlugin_Text = text;
if (xLBenv.os.name.indexOf('Windows XP') != -1 || xLBenv.os.name.indexOf('Windows Server 2003') != -1 || xLBenv.os.name.indexOf('Windows Vista') != -1 ) {
	document.write('<div class="yjplg"><table><tr><td class="yjSt">');
	document.write( yjPluginBrw_Text[0] );
	document.write('</td><td class="icn-h"><a href="' + yjPluginBrw_FF + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getfirefox_88x31.png" alt="Firefox����������"></a></td><td class="icn-h"><a href="' + yjPluginBrw_IE + '" target="plugin"><img src="' + yjImgDmn() + 'images/ybb/icon/ieget_animated.gif" alt="Internet Explorer����������"></a></td></tr></table></div>');}
else if (xLBenv.os.name.indexOf('Windows 98') != -1 || xLBenv.os.name.indexOf('Windows ME') != -1 || xLBenv.os.name.indexOf('Windows NT 4.0') != -1 || xLBenv.os.name.indexOf('Windows 2000') != -1 ) {
	document.write('<div class="yjplg"><table><tr><td class="yjSt">');
	document.write( yjPluginBrw_Text[0] );
	document.write('</td><td class="icn-h"><a href="' + yjPluginBrw_FF + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getfirefox_88x31.png" alt="Firefox����������"></a></td><td class="icn-h"><a href="' + yjPluginBrw_IE6 + '" target="plugin"><img src="' + yjImgDmn() + 'images/ybb/icon/ieget_animated.gif" alt="Internet Explorer����������"></a></td></tr></table></div>');}
else if (xLBenv.os.name.indexOf('MacOSX') != -1) {
	document.write('<div class="yjplg"><table><tr><td class="yjSt">');
	document.write( yjPluginBrw_Text[1] );
	document.write('</td><td class="icn-h yj-txt yjSt"><a href="' + yjPluginBrw_SF + '" class="yj-txt" target="plugin">[Safari����������]</a></td></tr></table></div>');}
else if (xLBenv.os.name.indexOf('MacOS9') != -1) {
	document.write('');}
else {
	document.write('<div class="yjplg"><table><tr><td class="yjSt">');
	document.write( yjPluginBrw_Text[2] );
	document.write('</td></tr></table></div>');}
}

// 1-4.��Browser��Table�ǽķ�
function yjPluginBrw04(type,text){
var yjPlugin_Text = text;
if (xLBenv.os.name.indexOf('Windows XP') != -1 || xLBenv.os.name.indexOf('Windows Server 2003') != -1 || xLBenv.os.name.indexOf('Windows Vista') != -1 ) {
	document.write('<div class="yjplg"><table><tr><td class="icn-v"><a href="' + yjPluginBrw_FF + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getfirefox_88x31.png" alt="Firefox����������"></a><a href="' + yjPluginBrw_IE + '" target="plugin"><img src="' + yjImgDmn() + 'images/ybb/icon/ieget_animated.gif" alt="Internet Explorer����������"></a></td></tr><tr><td class="yjSt">');
	document.write( yjPluginBrw_Text[0] );
	document.write('</td></tr></table></div>');}
else if (xLBenv.os.name.indexOf('Windows 98') != -1 || xLBenv.os.name.indexOf('Windows ME') != -1 || xLBenv.os.name.indexOf('Windows NT 4.0') != -1 || xLBenv.os.name.indexOf('Windows 2000') != -1 ) {
	document.write('<div class="yjplg"><table><tr><td class="icn-v"><a href="' + yjPluginBrw_FF + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getfirefox_88x31.png" alt="Firefox����������"></a><a href="' + yjPluginBrw_IE6 + '" target="plugin"><img src="' + yjImgDmn() + 'images/ybb/icon/ieget_animated.gif" alt="Internet Explorer����������"></a></td></tr><tr><td class="yjSt">');
	document.write( yjPluginBrw_Text[0] );
	document.write('</td></tr></table></div>');}
else if (xLBenv.os.name.indexOf('MacOSX') != -1) {
	document.write('<div class="yjplg"><table><tr><td class="icn-v yj-txt yjSt"><a href="' + yjPluginBrw_SF + '" class="yj-txt" target="plugin">[Safari����������]</a></td></tr><tr><td class="yjSt">');
	document.write( yjPluginBrw_Text[1] );
	document.write('</td></tr></table></div>');}
else if (xLBenv.os.name.indexOf('MacOS9') != -1) {
	document.write('');}
else {
	document.write('<div class="yjplg"><table><tr><td class="yjSt">');
	document.write( yjPluginBrw_Text[2] );
	document.write('</td></tr></table></div>');}
}

// 2-1.��Windows Media Player��CSS�ǲ���
function yjPluginWMP01(type,text){
var yjPlugin_Text = text;
if (xLBenv.os.name.indexOf('Windows XP') != -1 || xLBenv.os.name.indexOf('Windows Vista') != -1) {
	document.write('<div class="yjplg"><div class="icn-h"><a href="' + yjPluginWMP_WMP + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getwmp11.gif" alt="Windows Media Player����������"></a></div><p class="yjSt">');
	if (type == yjPluginNormal) {
		document.write( yjPluginWMP_Text[0] );}
	else if (type == yjPluginKids) {
		document.write( yjPlugin_Text + yjPluginWMP_Kids_Text[0]);}
	else {
		document.write( yjPluginWMP_Text[0] );}
	document.write('</p></div>');}
else if (xLBenv.os.name.indexOf('Windows ME') != -1 || xLBenv.os.name.indexOf('Windows 2000') != -1) {
	document.write('<div class="yjplg"><div class="icn-h"><a href="' + yjPluginWMP_WMP + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getwmp.gif" alt="Windows Media Player����������"></a></div><p class="yjSt">');
	if (type == yjPluginNormal) {
		document.write( yjPluginWMP_Text[0] );}
	else if (type == yjPluginKids) {
		document.write( yjPlugin_Text + yjPluginWMP_Kids_Text[0]);}
	else {
		document.write( yjPluginWMP_Text[0] );}
	document.write('</p></div>');}
else if (xLBenv.os.name.indexOf('Windows 98') != -1) {
	document.write('<div class="yjplg"><div class="icn-h"><a href="' + yjPluginWMP_WMP + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getwmp_mac71.gif" alt="Windows Media Player����������"></a></div><p class="yjSt">');
	if (type == yjPluginNormal) {
		document.write( yjPluginWMP_Text[0] );}
	else if (type == yjPluginKids) {
		document.write( yjPlugin_Text + yjPluginWMP_Kids_Text[0]);}
	else {
		document.write( yjPluginWMP_Text[0] );}
	document.write('</p></div>');}
else if (xLBenv.os.name.indexOf('MacOSX') != -1) {
	document.write('<div class="yjplg"><div class="icn-h"><a href="' + yjPluginWMP_WMP9 + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getwmp.gif" alt="Windows Media Player����������"></a></div><p class="yjSt">');
	if (type == yjPluginNormal) {
		document.write( yjPluginWMP_Text[0] );}
	else if (type == yjPluginKids) {
		document.write( yjPlugin_Text + yjPluginWMP_Kids_Text[1]);}
	else {
		document.write( yjPluginWMP_Text[0] );}
	document.write('</p></div>');}
else if (xLBenv.os.name.indexOf('MacOS9') != -1) {
	document.write('<div class="yjplg"><div class="icn-h"><a href="' + yjPluginWMP_WMP7 + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getwmp_mac71.gif" alt="Windows Media Player����������"></a></div><p class="yjSt">');
	if (type == yjPluginNormal) {
		document.write( yjPluginWMP_Text[0] );}
	else if (type == yjPluginKids) {
		document.write( yjPlugin_Text + yjPluginWMP_Kids_Text[2]);}
	else {
		document.write( yjPluginWMP_Text[0] );}
	document.write('</p></div>');}
else {
	document.write('<div class="yjplg"><p class="yjSt">');
	if (type == yjPluginNormal) {
		document.write( yjPluginWMP_Text[1] );}
	else if (type == yjPluginKids) {
		document.write( yjPlugin_Text + yjPluginWMP_Kids_Text[3]);}
	else {
		document.write( yjPluginWMP_Text[1] );}
	document.write('</p></div>');}
}

// 2-2.��Windows Media Player��CSS�ǽķ�
function yjPluginWMP02(type,text){
var yjPlugin_Text = text;
if (xLBenv.os.name.indexOf('Windows XP') != -1 || xLBenv.os.name.indexOf('Windows Vista') != -1) {
	document.write('<div class="yjplg"><div class="icn-v"><a href="' + yjPluginWMP_WMP + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getwmp11.gif" alt="Windows Media Player����������"></a></div><p class="yjSt">');
	if (type == yjPluginNormal) {
		document.write( yjPluginWMP_Text[0] );}
	else if (type == yjPluginKids) {
		document.write( yjPlugin_Text + yjPluginWMP_Kids_Text[0]);}
	else {
		document.write( yjPluginWMP_Text[0] );}
	document.write('</p></div>');}
else if (xLBenv.os.name.indexOf('Windows ME') != -1 || xLBenv.os.name.indexOf('Windows 2000') != -1) {
	document.write('<div class="yjplg"><div class="icn-v"><a href="' + yjPluginWMP_WMP + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getwmp.gif" alt="Windows Media Player����������"></a></div><p class="yjSt">');
	if (type == yjPluginNormal) {
		document.write( yjPluginWMP_Text[0] );}
	else if (type == yjPluginKids) {
		document.write( yjPlugin_Text + yjPluginWMP_Kids_Text[0]);}
	else {
		document.write( yjPluginWMP_Text[0] );}
	document.write('</p></div>');}
else if (xLBenv.os.name.indexOf('Windows 98') != -1) {
	document.write('<div class="yjplg"><div class="icn-v"><a href="' + yjPluginWMP_WMP + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getwmp_mac71.gif" alt="Windows Media Player����������"></a></div><p class="yjSt">');
	if (type == yjPluginNormal) {
		document.write( yjPluginWMP_Text[0] );}
	else if (type == yjPluginKids) {
		document.write( yjPlugin_Text + yjPluginWMP_Kids_Text[0]);}
	else {
		document.write( yjPluginWMP_Text[0] );}
	document.write('</p></div>');}
else if (xLBenv.os.name.indexOf('MacOSX') != -1) {
	document.write('<div class="yjplg"><div class="icn-v"><a href="' + yjPluginWMP_WMP9 + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getwmp.gif" alt="Windows Media Player����������"></a></div><p class="yjSt">');
	if (type == yjPluginNormal) {
		document.write( yjPluginWMP_Text[0] );}
	else if (type == yjPluginKids) {
		document.write( yjPlugin_Text + yjPluginWMP_Kids_Text[1]);}
	else {
		document.write( yjPluginWMP_Text[0] );}
	document.write('</p></div>');}
else if (xLBenv.os.name.indexOf('MacOS9') != -1) {
	document.write('<div class="yjplg"><div class="icn-v"><a href="' + yjPluginWMP_WMP7 + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getwmp_mac71.gif" alt="Windows Media Player����������"></a></div><p class="yjSt">');
	if (type == yjPluginNormal) {
		document.write( yjPluginWMP_Text[0] );}
	else if (type == yjPluginKids) {
		document.write( yjPlugin_Text + yjPluginWMP_Kids_Text[2]);}
	else {
		document.write( yjPluginWMP_Text[0] );}
	document.write('</p></div>');}
else {
	document.write('<div class="yjplg"><p class="yjSt">');
	if (type == yjPluginNormal) {
		document.write( yjPluginWMP_Text[1] );}
	else if (type == yjPluginKids) {
		document.write( yjPlugin_Text + yjPluginWMP_Kids_Text[3]);}
	else {
		document.write( yjPluginWMP_Text[1] );}
	document.write('</p></div>');}
}

// 2-3.��Windows Media Player��Table�ǲ���
function yjPluginWMP03(type,text){
var yjPlugin_Text = text;
if (xLBenv.os.name.indexOf('Windows XP') != -1 || xLBenv.os.name.indexOf('Windows Vista') != -1) {
	document.write('<div class="yjplg"><table><tr><td class="yjSt">');
	if (type == yjPluginNormal) {
		document.write( yjPluginWMP_Text[0] );}
	else if (type == yjPluginKids) {
		document.write( yjPlugin_Text + yjPluginWMP_Kids_Text[0]);}
	else {
		document.write( yjPluginWMP_Text[0] );}
	document.write('</td><td class="icn-h"><a href="' + yjPluginWMP_WMP + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getwmp11.gif" alt="Windows Media Player����������"></a></td></tr></table></div>');}
else if (xLBenv.os.name.indexOf('Windows ME') != -1 || xLBenv.os.name.indexOf('Windows 2000') != -1) {
	document.write('<div class="yjplg"><table><tr><td class="yjSt">');
	if (type == yjPluginNormal) {
		document.write( yjPluginWMP_Text[0] );}
	else if (type == yjPluginKids) {
		document.write( yjPlugin_Text + yjPluginWMP_Kids_Text[0]);}
	else {
		document.write( yjPluginWMP_Text[0] );}
	document.write('</td><td class="icn-h"><a href="' + yjPluginWMP_WMP + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getwmp.gif" alt="Windows Media Player����������"></a></td></tr></table></div>');}
else if (xLBenv.os.name.indexOf('Windows 98') != -1) {
	document.write('<div class="yjplg"><table><tr><td class="yjSt">');
	if (type == yjPluginNormal) {
		document.write( yjPluginWMP_Text[0] );}
	else if (type == yjPluginKids) {
		document.write( yjPlugin_Text + yjPluginWMP_Kids_Text[0]);}
	else {
		document.write( yjPluginWMP_Text[0] );}
	document.write('</td><td class="icn-h"><a href="' + yjPluginWMP_WMP + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getwmp_mac71.gif" alt="Windows Media Player����������"></a></td></tr></table></div>');}
else if (xLBenv.os.name.indexOf('MacOSX') != -1) {
	document.write('<div class="yjplg"><table><tr><td class="yjSt">');
	if (type == yjPluginNormal) {
		document.write( yjPluginWMP_Text[0] );}
	else if (type == yjPluginKids) {
		document.write( yjPlugin_Text + yjPluginWMP_Kids_Text[1]);}
	else {
		document.write( yjPluginWMP_Text[0] );}
	document.write('</td><td class="icn-h"><a href="' + yjPluginWMP_WMP9 + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getwmp.gif" alt="Windows Media Player����������"></a></td></tr></table></div>');}
else if (xLBenv.os.name.indexOf('MacOS9') != -1) {
	document.write('<div class="yjplg"><table><tr><td class="yjSt">');
	if (type == yjPluginNormal) {
		document.write( yjPluginWMP_Text[0] );}
	else if (type == yjPluginKids) {
		document.write( yjPlugin_Text + yjPluginWMP_Kids_Text[2]);}
	else {
		document.write( yjPluginWMP_Text[0] );}
	document.write('</td><td class="icn-h"><a href="' + yjPluginWMP_WMP7 + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getwmp_mac71.gif" alt="Windows Media Player����������"></a></td></tr></table></div>');}
else {
	document.write('<div class="yjplg"><table><tr><td class="yjSt">');
	if (type == yjPluginNormal) {
		document.write( yjPluginWMP_Text[1] );}
	else if (type == yjPluginKids) {
		document.write( yjPlugin_Text + yjPluginWMP_Kids_Text[3]);}
	else {
		document.write( yjPluginWMP_Text[1] );}
	document.write('</td></tr></table></div>');}
}

// 2-4.��Windows Media Player��Table�ǽķ�
function yjPluginWMP04(type,text){
var yjPlugin_Text = text;
if (xLBenv.os.name.indexOf('Windows XP') != -1 || xLBenv.os.name.indexOf('Windows Vista') != -1) {
	document.write('<div class="yjplg"><table><tr><td class="icn-v"><a href="' + yjPluginWMP_WMP + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getwmp11.gif" alt="Windows Media Player����������"></a></td></tr><tr><td class="yjSt">');
	if (type == yjPluginNormal) {
		document.write( yjPluginWMP_Text[0] );}
	else if (type == yjPluginKids) {
		document.write( yjPlugin_Text + yjPluginWMP_Kids_Text[0]);}
	else {
		document.write( yjPluginWMP_Text[0] );}
	document.write('</td></tr></table></div>');}
else if (xLBenv.os.name.indexOf('Windows ME') != -1 || xLBenv.os.name.indexOf('Windows 2000') != -1) {
	document.write('<div class="yjplg"><table><tr><td class="icn-v"><a href="' + yjPluginWMP_WMP + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getwmp.gif" alt="Windows Media Player����������"></a></td></tr><tr><td class="yjSt">');
	if (type == yjPluginNormal) {
		document.write( yjPluginWMP_Text[0] );}
	else if (type == yjPluginKids) {
		document.write( yjPlugin_Text + yjPluginWMP_Kids_Text[0]);}
	else {
		document.write( yjPluginWMP_Text[0] );}
	document.write('</td></tr></table></div>');}
else if (xLBenv.os.name.indexOf('Windows 98') != -1) {
	document.write('<div class="yjplg"><table><tr><td class="icn-v"><a href="' + yjPluginWMP_WMP + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getwmp_mac71.gif" alt="Windows Media Player����������"></a></td></tr><tr><td class="yjSt">');
	if (type == yjPluginNormal) {
		document.write( yjPluginWMP_Text[0] );}
	else if (type == yjPluginKids) {
		document.write( yjPlugin_Text + yjPluginWMP_Kids_Text[0]);}
	else {
		document.write( yjPluginWMP_Text[0] );}
	document.write('</td></tr></table></div>');}
else if (xLBenv.os.name.indexOf('MacOSX') != -1) {
	document.write('<div class="yjplg"><table><tr><td class="icn-v"><a href="' + yjPluginWMP_WMP9 + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getwmp.gif" alt="Windows Media Player����������"></a></td></tr><tr><td class="yjSt">');
	if (type == yjPluginNormal) {
		document.write( yjPluginWMP_Text[0] );}
	else if (type == yjPluginKids) {
		document.write( yjPlugin_Text + yjPluginWMP_Kids_Text[1]);}
	else {
		document.write( yjPluginWMP_Text[0] );}
	document.write('</td></tr></table></div>');}
else if (xLBenv.os.name.indexOf('MacOS9') != -1) {
	document.write('<div class="yjplg"><table><tr><td class="icn-v"><a href="' + yjPluginWMP_WMP7 + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getwmp_mac71.gif" alt="Windows Media Player����������"></a></td></tr><tr><td class="yjSt">');
	if (type == yjPluginNormal) {
		document.write( yjPluginWMP_Text[0] );}
	else if (type == yjPluginKids) {
		document.write( yjPlugin_Text + yjPluginWMP_Kids_Text[2]);}
	else {
		document.write( yjPluginWMP_Text[0] );}
	document.write('</td></tr></table></div>');}
else {
	document.write('<div class="yjplg"><table><tr><td class="yjSt">');
	if (type == yjPluginNormal) {
		document.write( yjPluginWMP_Text[1] );}
	else if (type == yjPluginKids) {
		document.write( yjPlugin_Text + yjPluginWMP_Kids_Text[3]);}
	else {
		document.write( yjPluginWMP_Text[1] );}
	document.write('</td></tr></table></div>');}
}

// 3-1.��Real Player��CSS�ǲ���
function yjPluginRP01(type,text){
var yjPlugin_Text = text;
if (xLBua.indexOf('Win') != -1 ) {
	document.write('<div class="yjplg"><div class="icn-h"><a href="' + yjPluginRP_WIN + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getrealp.gif" alt="Real Player����������"></a></div><p class="yjSt">');
	document.write( yjPluginRP_Text[0] );
	document.write('</p></div>');}
else if (xLBua.indexOf('Mac') != -1 ) {
	document.write('<div class="yjplg"><div class="icn-h"><a href="' + yjPluginRP_MAC + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getrealp.gif" alt="Real Player����������"></a></div><p class="yjSt">');
	document.write( yjPluginRP_Text[0] );
	document.write('</p></div>');}
else {
	document.write('<div class="yjplg"><p class="yjSt">');
	document.write( yjPluginRP_Text[1] );
	document.write('</p></div>');}
}

// 3-2.��Real Player��CSS�ǽķ�
function yjPluginRP02(type,text){
var yjPlugin_Text = text;
if (xLBua.indexOf('Win') != -1 ) {
	document.write('<div class="yjplg"><div class="icn-v"><a href="' + yjPluginRP_WIN + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getrealp.gif" alt="Real Player����������"></a></div><p class="yjSt">');
	document.write( yjPluginRP_Text[0] );
	document.write('</p></div>');}
else if (xLBua.indexOf('Mac') != -1 ) {
	document.write('<div class="yjplg"><div class="icn-v"><a href="' + yjPluginRP_MAC + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getrealp.gif" alt="Real Player����������"></a></div><p class="yjSt">');
	document.write( yjPluginRP_Text[0] );
	document.write('</p></div>');}
else {
	document.write('<div class="yjplg"><p class="yjSt">');
	document.write( yjPluginRP_Text[1] );
	document.write('</p></div>');}
}

// 3-3.��Real Player��Table�ǲ���
function yjPluginRP03(type,text){
var yjPlugin_Text = text;
if (xLBua.indexOf('Win') != -1 ) {
	document.write('<div class="yjplg"><table><tr><td class="yjSt">');
	document.write( yjPluginRP_Text[0] );
	document.write('</td><td class="icn-h"><a href="' + yjPluginRP_WIN + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getrealp.gif" alt="Real Player����������"></a></td></tr></table></div>');}
else if (xLBua.indexOf('Mac') != -1 ) {
	document.write('<div class="yjplg"><table><tr><td class="yjSt">');
	document.write( yjPluginRP_Text[0] );
	document.write('</td><td class="icn-h"><a href="' + yjPluginRP_MAC + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getrealp.gif" alt="Real Player����������"></a></td></tr></table></div>');}
else {
	document.write('<div class="yjplg"><table><tr><td class="yjSt">');
	document.write( yjPluginRP_Text[1] );
	document.write('</td></tr></table></div>');}
}

// 3-4.��Real Player��Table�ǽķ�
function yjPluginRP04(type,text){
var yjPlugin_Text = text;
if (xLBua.indexOf('Win') != -1 ) {
	document.write('<div class="yjplg"><table><tr><td class="icn-v"><a href="' + yjPluginRP_WIN + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getrealp.gif" alt="Real Player����������"></a></td></tr><tr><td class="yjSt">');
	document.write( yjPluginRP_Text[0] );
	document.write('</td></tr></table></div>');}
else if (xLBua.indexOf('Mac') != -1 ) {
	document.write('<div class="yjplg"><table><tr><td class="icn-v"><a href="' + yjPluginRP_MAC + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getrealp.gif" alt="Real Player����������"></a></td></tr><tr><td class="yjSt">');
	document.write( yjPluginRP_Text[0] );
	document.write('</td></tr></table></div>');}
else {
	document.write('<div class="yjplg"><table><tr><td class="yjSt">');
	document.write( yjPluginRP_Text[1] );
	document.write('</td></tr></table></div>');}
}

// 4-1.��Adobe Flash Player��CSS�ǲ���
function yjPluginAFP01(type,text){
var yjPlugin_Text = text;
	document.write('<div class="yjplg"><div class="icn-h"><a href="' + yjPluginAFP_ALL + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/get_flash_player.gif" alt="Flash Player����������"></a></div><p class="yjSt">');
	if (type == yjPluginNormal) {
		document.write( yjPluginAFP_Text[0] );}
	else if (type == yjPluginKids) {
		document.write( yjPlugin_Text + yjPluginAFP_Kids_Text[0]);}
	else {
		document.write( yjPluginAFP_Text[0] );}
	document.write('</p></div>');}

// 4-2.��Adobe Flash Player��CSS�ǽķ�
function yjPluginAFP02(type,text){
var yjPlugin_Text = text;
	document.write('<div class="yjplg"><div class="icn-v"><a href="' + yjPluginAFP_ALL + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/get_flash_player.gif" alt="Flash Player����������"></a></div><p class="yjSt">');
	if (type == yjPluginNormal) {
		document.write( yjPluginAFP_Text[0] );}
	else if (type == yjPluginKids) {
		document.write( yjPlugin_Text + yjPluginAFP_Kids_Text[0]);}
	else {
		document.write( yjPluginAFP_Text[0] );}
	document.write('</p></div>');}

// 4-3.��Adobe Flash Player��Table�ǲ���
function yjPluginAFP03(type,text){
var yjPlugin_Text = text;
	document.write('<div class="yjplg"><table><tr><td class="yjSt">');
	if (type == yjPluginNormal) {
		document.write( yjPluginAFP_Text[0] );}
	else if (type == yjPluginKids) {
		document.write( yjPlugin_Text + yjPluginAFP_Kids_Text[0]);}
	else {
		document.write( yjPluginAFP_Text[0] );}
	document.write('</td><td class="icn-h"><a href="' + yjPluginAFP_ALL + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/get_flash_player.gif" alt="Flash Player����������"></a></td></tr></table></div>');}

// 4-4.��Adobe Flash Player��Table�ǽķ�
function yjPluginAFP04(type,text){
var yjPlugin_Text = text;
	document.write('<div class="yjplg"><table><tr><td class="icn-v"><a href="' + yjPluginAFP_ALL + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/get_flash_player.gif" alt="Flash Player����������"></a></td></tr><tr><td class="yjSt">');
	if (type == yjPluginNormal) {
		document.write( yjPluginAFP_Text[0] );}
	else if (type == yjPluginKids) {
		document.write( yjPlugin_Text + yjPluginAFP_Kids_Text[0]);}
	else {
		document.write( yjPluginAFP_Text[0] );}
	document.write('</td></tr></table></div>');}

// 5-1.��Adobe Reader��CSS�ǲ���
function yjPluginAR01(type,text){
var yjPlugin_Text = text;
	document.write('<div class="yjplg"><div class="icn-h"><a href="' + yjPluginAR_ALL + '" target="plugin"><img src="' + yjImgDmn() + 'images/howto/getacro.gif" alt="Adobe Reader����������"></a></div><p class="yjSt">');
	if (type == yjPluginNormal) {
		document.write( yjPluginAR_Text[0] );}
	else if (type == yjPluginKids) {
		document.write( yjPlugin_Text + yjPluginAR_Kids_Text[0]);}
	else {
		document.write( yjPluginAR_Text[0] );}
	document.write('</p></div>');}

// 5-2.��Adobe Reader��CSS�ǽķ�
function yjPluginAR02(type,text){
var yjPlugin_Text = text;
	document.write('<div class="yjplg"><div class="icn-v"><a href="' + yjPluginAR_ALL + '" target="plugin"><img src="' + yjImgDmn() + 'images/howto/getacro.gif" alt="Adobe Reader����������"></a></div><p class="yjSt">');
	if (type == yjPluginNormal) {
		document.write( yjPluginAR_Text[0] );}
	else if (type == yjPluginKids) {
		document.write( yjPlugin_Text + yjPluginAR_Kids_Text[0]);}
	else {
		document.write( yjPluginAR_Text[0] );}
	document.write('</p></div>');}

// 5-3.��Adobe Reader��Table�ǲ���
function yjPluginAR03(type,text){
var yjPlugin_Text = text;
	document.write('<div class="yjplg"><table><tr><td class="yjSt">');
	if (type == yjPluginNormal) {
		document.write( yjPluginAR_Text[0] );}
	else if (type == yjPluginKids) {
		document.write( yjPlugin_Text + yjPluginAR_Kids_Text[0]);}
	else {
		document.write( yjPluginAR_Text[0] );}
	document.write('</td><td class="icn-h"><a href="' + yjPluginAR_ALL + '" target="plugin"><img src="' + yjImgDmn() + 'images/howto/getacro.gif" alt="Adobe Reader����������"></a></td></tr></table></div>');}

// 5-4.��Adobe Reader��Table�ǽķ�
function yjPluginAR04(type,text){
var yjPlugin_Text = text;
	document.write('<div class="yjplg"><table><tr><td class="icn-v"><a href="' + yjPluginAR_ALL + '" target="plugin"><img src="' + yjImgDmn() + 'images/howto/getacro.gif" alt="Adobe Reader����������"></a></td></tr><tr><td class="yjSt">');
	if (type == yjPluginNormal) {
		document.write( yjPluginAR_Text[0] );}
	else if (type == yjPluginKids) {
		document.write( yjPlugin_Text + yjPluginAR_Kids_Text[0]);}
	else {
		document.write( yjPluginAR_Text[0] );}
	document.write('</td></tr></table></div>');}

// 6-1.��Windows Media Player and Adobe Flash Player��CSS�ǲ���
function yjPluginWMPAFP01(type,text){
var yjPlugin_Text = text;
if (xLBenv.os.name.indexOf('Windows XP') != -1 || xLBenv.os.name.indexOf('Windows Vista') != -1) {
	document.write('<div class="yjplg"><div class="icn-h"><a href="' + yjPluginWMP_WMP + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getwmp11.gif" alt="Windows Media Player����������"></a><a href="' + yjPluginAFP_ALL + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/get_flash_player.gif" alt="Flash Player����������"></a></div><p class="yjSt">');
	document.write( yjPluginWMPAFP_Text[0] );
	document.write('</p></div>');}
else if (xLBenv.os.name.indexOf('Windows ME') != -1 || xLBenv.os.name.indexOf('Windows 2000') != -1) {
	document.write('<div class="yjplg"><div class="icn-h"><a href="' + yjPluginWMP_WMP + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getwmp.gif" alt="Windows Media Player����������"></a><a href="' + yjPluginAFP_ALL + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/get_flash_player.gif" alt="Flash Player����������"></a></div><p class="yjSt">');
	document.write( yjPluginWMPAFP_Text[0] );
	document.write('</p></div>');}
else if (xLBenv.os.name.indexOf('Windows 98') != -1) {
	document.write('<div class="yjplg"><div class="icn-h"><a href="' + yjPluginWMP_WMP + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getwmp_mac71.gif" alt="Windows Media Player����������"></a><a href="' + yjPluginAFP_ALL + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/get_flash_player.gif" alt="Flash Player����������"></a></div><p class="yjSt">');
	document.write( yjPluginWMPAFP_Text[0] );
	document.write('</p></div>');}
else if (xLBenv.os.name.indexOf('MacOSX') != -1) {
	document.write('<div class="yjplg"><div class="icn-h"><a href="' + yjPluginWMP_WMP9 + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getwmp.gif" alt="Windows Media Player����������"></a><a href="' + yjPluginAFP_ALL + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/get_flash_player.gif" alt="Flash Player����������"></a></div><p class="yjSt">');
	document.write( yjPluginWMPAFP_Text[0] );
	document.write('</p></div>');}
else if (xLBenv.os.name.indexOf('MacOS9') != -1) {
	document.write('<div class="yjplg"><div class="icn-h"><a href="' + yjPluginWMP_WMP7 + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getwmp_mac71.gif" alt="Windows Media Player����������"></a><a href="' + yjPluginAFP_ALL + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/get_flash_player.gif" alt="Flash Player����������"></a></div><p class="yjSt">');
	document.write( yjPluginWMPAFP_Text[0] );
	document.write('</p></div>');}
else {
	document.write('<div class="yjplg"><p class="yjSt">');
	document.write( yjPluginWMPAFP_Text[1] );
	document.write('</p></div>');}
}

// 6-2.��Windows Media Player and Adobe Flash Player��CSS�ǽķ�
function yjPluginWMPAFP02(type,text){
var yjPlugin_Text = text;
if (xLBenv.os.name.indexOf('Windows XP') != -1 || xLBenv.os.name.indexOf('Windows Vista') != -1) {
	document.write('<div class="yjplg"><div class="icn-v"><a href="' + yjPluginWMP_WMP + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getwmp11.gif" alt="Windows Media Player����������"></a><a href="' + yjPluginAFP_ALL + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/get_flash_player.gif" alt="Flash Player����������"></a></div><p class="yjSt">');
	document.write( yjPluginWMPAFP_Text[0] );
	document.write('</p></div>');}
else if (xLBenv.os.name.indexOf('Windows ME') != -1 || xLBenv.os.name.indexOf('Windows 2000') != -1) {
	document.write('<div class="yjplg"><div class="icn-v"><a href="' + yjPluginWMP_WMP + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getwmp.gif" alt="Windows Media Player����������"></a><a href="' + yjPluginAFP_ALL + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/get_flash_player.gif" alt="Flash Player����������"></a></div><p class="yjSt">');
	document.write( yjPluginWMPAFP_Text[0] );
	document.write('</p></div>');}
else if (xLBenv.os.name.indexOf('Windows 98') != -1) {
	document.write('<div class="yjplg"><div class="icn-v"><a href="' + yjPluginWMP_WMP + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getwmp_mac71.gif" alt="Windows Media Player����������"></a><a href="' + yjPluginAFP_ALL + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/get_flash_player.gif" alt="Flash Player����������"></a></div><p class="yjSt">');
	document.write( yjPluginWMPAFP_Text[0] );
	document.write('</p></div>');}
else if (xLBenv.os.name.indexOf('MacOSX') != -1) {
	document.write('<div class="yjplg"><div class="icn-v"><a href="' + yjPluginWMP_WMP9 + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getwmp.gif" alt="Windows Media Player����������"></a><a href="' + yjPluginAFP_ALL + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/get_flash_player.gif" alt="Flash Player����������"></a></div><p class="yjSt">');
	document.write( yjPluginWMPAFP_Text[0] );
	document.write('</p></div>');}
else if (xLBenv.os.name.indexOf('MacOS9') != -1) {
	document.write('<div class="yjplg"><div class="icn-v"><a href="' + yjPluginWMP_WMP7 + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getwmp_mac71.gif" alt="Windows Media Player����������"></a><a href="' + yjPluginAFP_ALL + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/get_flash_player.gif" alt="Flash Player����������"></a></div><p class="yjSt">');
	document.write( yjPluginWMPAFP_Text[0] );
	document.write('</p></div>');}
else {
	document.write('<div class="yjplg"><p class="yjSt">');
	document.write( yjPluginWMPAFP_Text[1] );
	document.write('</p></div>');}
}

// 6-3.��Windows Media Player and Adobe Flash Player��Table�ǲ���
function yjPluginWMPAFP03(type,text){
var yjPlugin_Text = text;
if (xLBenv.os.name.indexOf('Windows XP') != -1 || xLBenv.os.name.indexOf('Windows Vista') != -1) {
	document.write('<div class="yjplg"><table><tr><td colspan="2" class="yjSt">');
	document.write( yjPluginWMPAFP_Text[0] );
	document.write('</td><td class="icn-h"><a href="' + yjPluginWMP_WMP + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getwmp11.gif" alt="Windows Media Player����������"></a></td><td class="icn-h"><a href="' + yjPluginAFP_ALL + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/get_flash_player.gif" alt="Flash Player����������"></a></td></tr></table></div>');}
else if (xLBenv.os.name.indexOf('Windows ME') != -1 || xLBenv.os.name.indexOf('Windows 2000') != -1) {
	document.write('<div class="yjplg"><table><tr><td colspan="2" class="yjSt">');
	document.write( yjPluginWMPAFP_Text[0] );
	document.write('</td><td class="icn-h"><a href="' + yjPluginWMP_WMP + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getwmp.gif" alt="Windows Media Player����������"></a></td><td class="icn-h"><a href="' + yjPluginAFP_ALL + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/get_flash_player.gif" alt="Flash Player����������"></a></td></tr></table></div>');}
else if (xLBenv.os.name.indexOf('Windows 98') != -1) {
	document.write('<div class="yjplg"><table><tr><td colspan="2" class="yjSt">');
	document.write( yjPluginWMPAFP_Text[0] );
	document.write('</td><td class="icn-h"><a href="' + yjPluginWMP_WMP + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getwmp_mac71.gif" alt="Windows Media Player����������"></a></td><td class="icn-h"><a href="' + yjPluginAFP_ALL + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/get_flash_player.gif" alt="Flash Player����������"></a></td></tr></table></div>');}
else if (xLBenv.os.name.indexOf('MacOSX') != -1) {
	document.write('<div class="yjplg"><table><tr><td colspan="2" class="yjSt">');
	document.write( yjPluginWMPAFP_Text[0] );
	document.write('</td><td class="icn-h"><a href="' + yjPluginWMP_WMP9 + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getwmp.gif" alt="Windows Media Player����������"></a></td><td class="icn-h"><a href="' + yjPluginAFP_ALL + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/get_flash_player.gif" alt="Flash Player����������"></a></td></tr></table></div>');}
else if (xLBenv.os.name.indexOf('MacOS9') != -1) {
	document.write('<div class="yjplg"><table><tr><td colspan="2" class="yjSt">');
	document.write( yjPluginWMPAFP_Text[0] );
	document.write('</td><td class="icn-h"><a href="' + yjPluginWMP_WMP7 + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getwmp_mac71.gif" alt="Windows Media Player����������"></a></td><td class="icn-h"><a href="' + yjPluginAFP_ALL + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/get_flash_player.gif" alt="Flash Player����������"></a></td></tr></table></div>');}
else {
	document.write('<div class="yjplg"><table><tr><td colspan="2" class="yjSt">');
	document.write( yjPluginWMPAFP_Text[1] );
	document.write('</td></tr></table></div>');}
}

// 6-4.��Windows Media Player and Adobe Flash Player��Table�ǽķ�
function yjPluginWMPAFP04(type,text){
var yjPlugin_Text = text;
if (xLBenv.os.name.indexOf('Windows XP') != -1 || xLBenv.os.name.indexOf('Windows Vista') != -1) {
	document.write('<div class="yjplg"><table><tr><td class="icn-v"><a href="' + yjPluginWMP_WMP + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getwmp11.gif" alt="Windows Media Player����������"></a><a href="' + yjPluginAFP_ALL + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/get_flash_player.gif" alt="Flash Player����������"></a></td></tr><tr><td class="yjSt">');
	document.write( yjPluginWMPAFP_Text[0] );
	document.write('</td></tr></table></div>');}
else if (xLBenv.os.name.indexOf('Windows ME') != -1 || xLBenv.os.name.indexOf('Windows 2000') != -1) {
	document.write('<div class="yjplg"><table><tr><td class="icn-v"><a href="' + yjPluginWMP_WMP + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getwmp.gif" alt="Windows Media Player����������"></a><a href="' + yjPluginAFP_ALL + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/get_flash_player.gif" alt="Flash Player����������"></a></td></tr><tr><td class="yjSt">');
	document.write( yjPluginWMPAFP_Text[0] );
	document.write('</td></tr></table></div>');}
else if (xLBenv.os.name.indexOf('Windows 98') != -1) {
	document.write('<div class="yjplg"><table><tr><td class="icn-v"><a href="' + yjPluginWMP_WMP + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getwmp_mac71.gif" alt="Windows Media Player����������"></a><a href="' + yjPluginAFP_ALL + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/get_flash_player.gif" alt="Flash Player����������"></a></td></tr><tr><td class="yjSt">');
	document.write( yjPluginWMPAFP_Text[0] );
	document.write('</td></tr></table></div>');}
else if (xLBenv.os.name.indexOf('MacOSX') != -1) {
	document.write('<div class="yjplg"><table><tr><td class="icn-v"><a href="' + yjPluginWMP_WMP9 + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getwmp.gif" alt="Windows Media Player����������"></a><a href="' + yjPluginAFP_ALL + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/get_flash_player.gif" alt="Flash Player����������"></a></td></tr><tr><td class="yjSt">');
	document.write( yjPluginWMPAFP_Text[0] );
	document.write('</td></tr></table></div>');}
else if (xLBenv.os.name.indexOf('MacOS9') != -1) {
	document.write('<div class="yjplg"><table><tr><td class="icn-v"><a href="' + yjPluginWMP_WMP7 + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/getwmp_mac71.gif" alt="Windows Media Player����������"></a><a href="' + yjPluginAFP_ALL + '" target="plugin"><img src="' + yjImgDmn() + 'images/common/get_flash_player.gif" alt="Flash Player����������"></a></td></tr><tr><td class="yjSt">');
	document.write( yjPluginWMPAFP_Text[0] );
	document.write('</td></tr></table></div>');}
else {
	document.write('<div class="yjplg"><table><tr><td class="yjSt">');
	document.write( yjPluginWMPAFP_Text[1] );
	document.write('</td></tr></table></div>');}
}