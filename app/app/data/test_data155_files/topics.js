var CFLiewin = navigator.userAgent.indexOf('Win') && (document.all);
var CFLflag = false;
if (yahoo_topics_genre == undefined) { var yahoo_topics_genre = "top" };
if (yahoo_topics_color1 == undefined) { var yahoo_topics_color1 = "ffffff" };
if (yahoo_topics_color2 == undefined) { var yahoo_topics_color2 = "9B72CF" };
if (yahoo_topics_color3 == undefined) { var yahoo_topics_color3 = "0000FF" };
if (yahoo_topics_color4 == undefined) { var yahoo_topics_color4 = "F1F1FD" };
if (CFLwidth == undefined) { var CFLwidth = 150 };
if (CFLheight == undefined) { var CFLheight = 208 };
if (CFLswfuri == undefined) { var CFLswfuri = 'http://i.yimg.jp/i/topics/blogparts/topics_s.swf?genre=' + yahoo_topics_genre + '&amp;wakuFontColor=' + yahoo_topics_color1 + '&amp;wakuBGColor=' + yahoo_topics_color2 + '&amp;bodyFontColor=' + yahoo_topics_color3 + '&amp;bodyBGColor=' + yahoo_topics_color4 + ""}; 
var CFLaltHTML = '<!-- Adobe Flash Player  --><div class="yjplg"><table><tr><td class="yjSt" align="left" style="padding:5px;">Adobe Flash Player�ϡ�<a href="http://downloads.yahoo.co.jp/docs/flashplayer/start.html" target="plugin">Adobe Flash Player���󥹥ȡ��륬����</a>��Yahoo!��������ɥ��󥿡��ˤ�����Ǥ��ޤ�������˾ܤ�������ϡ�<a href="http://help.yahoo.co.jp/help/jp/common/sys/sys-10.html">Adobe Flash Player�򥤥󥹥ȡ��뤹��ˤ�</a>�פ�������������</td></tr><tr><td class="icn-v" align="center"><a href="http://downloads.yahoo.co.jp/docs/flashplayer/start.html" target="plugin"><img src="http://i.yimg.jp/images/common/ydc_get_flash_player1.gif" alt="Adobe Flash Player���󥹥ȡ��륬����"></a></td></tr></table></div><!-- /Adobe Flash Player  -->';
var promo = '<table width="'+CFLwidth+'" cellpadding="0" cellspacing="0" border="0"><tr align="center"><td><img src="http://i.yimg.jp/images/news/koukai/parts_small.gif" width="11" height="11" alt="�ȥԥå����֥��ѡ���" align="absmiddle"><font style="font-size:10px;font-family:Verdana,Arial,sans-serif;margin-left:1px;"><a href="http://rd.yahoo.co.jp/media/topics/blogparts/p/1/*http://dailynews.yahoo.co.jp/fc/guide/01/" target="_new">�ȥԥå������Խ����ޤ���?</a></font></td></tr></table>';

//var CFLfpver = 8;
var CFLfpver = 6;
var plugin = (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"]) ? navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin : 0;
if (plugin) {
	//CFLflag = parseInt(plugin.description.substring(plugin.description.indexOf(".")-1)) >= CFLfpver;
	var desc = plugin.description;
	CFLflag = parseInt(desc.substring(desc.indexOf("Flash")+6,desc.indexOf("Flash")+9)) >= CFLfpver;
} else if (CFLiewin) {
	document.write('<script language="VBScript"\> \n');
	document.write('on error resume next \n');
	document.write('CFLflag = ( IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash." & CFLfpver )))\n');
	document.write('</script\> \n');
}
if ( CFLflag ) {
	document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"');
	document.write('codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0"');
	//document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"');
	//document.write(' codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0"');
	document.write(' id="CFL" width="'+ CFLwidth +'" height="'+ CFLheight +'">');
	document.write('<param name="movie" value="'+ CFLswfuri +'">');
	document.write('<param name="wmode" value="transparent">');
	document.write('<param name="allowScriptAccess" value="always" />');
	document.write('<param name="loop" value="true">');
	document.write('<param name="quality" value="high">');
	document.write('<embed src="'+ CFLswfuri +'" loop="true" wmode="transparent"');
	document.write(' quality="high" swLiveConnect="false"');
	document.write(' width="'+ CFLwidth +'" height="'+ CFLheight +'"');
	document.write(' type="application/x-shockwave-flash"');
	document.write(' allowScriptAccess="always"');
	document.write(' pluginspage="http://downloads.yahoo.co.jp/docs/flashplayer/start.html">');
	document.write('</embed>');
	document.write('</object>');
	document.write( promo );
} else {
	document.write(CFLaltHTML);
}
function CFLerr() {
	return true;
}
