
var ADid_sub=Math.random();var ADflv=6;var ADua=navigator.userAgent;var ADdcap=(document.all);var ADlcap=(document.layers);var ADgcap=(document.getElementById);var ADopr=(window.opera);var ADie5=ADdcap&&ADgcap&&(!ADopr);var ADie4=ADdcap&&(!ADgcap);var ADie=ADie5;var ADwinie=ADua&&ADua.indexOf("MSIE")>=0&&ADua.indexOf("Win")>=0;var plugin=(navigator.mimeTypes&&navigator.mimeTypes["application/x-shockwave-flash"])?navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin:0;var ADwin=(ADua.indexOf("Win")!=-1);var ADNisChk=false;var ADsaf=(ADua.indexOf('Safari')!=-1&&ADua.indexOf('AppleWebKit/5')==-1);var ADsaf3=(ADua.indexOf('AppleWebKit/5')!=-1);var YFAclrFileSize=18.79;var ADssl="https://s.yimg.jp";var ADdef="http://ai.yimg.jp";var ADgif="/bdv/yahoo/javascript/sample.gif?r="+YFAimgParam;var ADprtcl=window.location.protocol;var ADyimg=(ADprtcl.indexOf("http:")!=-1)?ADdef:ADssl;var YFAclrgif=ADyimg+ADgif;function AD_getLowerLimit(){var intWork=YFAcheckImgSize.split("#");return intWork[1];}
function AD_dispBanner(dtStartTime,intLowerLimit){var dtEndTime=new Date();var dtDiffTime=getADdifTime(dtEndTime,dtStartTime);var intSpeed=Math.floor((YFAclrFileSize*8)/dtDiffTime);if(intSpeed>intLowerLimit){AD_swfCreate(YFAvflash);}else{AD_swfCreate(YFAmflash);}}
function AD_createParam(objWork,tmp1,tmp2){var objParam=document.createElement("param");objParam.setAttribute("name",tmp1);objParam.setAttribute("value",tmp2);objWork.appendChild(objParam);return objWork;}
function AD_swfCreate(file){var objParent=document.getElementById("ADframe"+ADid_sub);if(document.all&&objParent.innerHTML){objParent.innerHTML=AD_htmlObject(file);}else if(document.getElementById){objParent.removeChild(document.getElementsByName("altfla").item(0));var objChild=document.createElement("object");var objEmbed=document.createElement("embed");objChild.setAttribute("classid","clsid:D27CDB6E-AE6D-11cf-96B8-444553540000");objChild.setAttribute("style","width:"+YFAwidth+"px;height:"+YFAheight+"px");objChild.id="altfla";objChild=AD_createParam(objChild,"FlashVars","clickTAG="+YFAlink+"&targetTAG="+YFAtarget);objChild=AD_createParam(objChild,"movie",file);objChild=AD_createParam(objChild,"loop","true");objChild=AD_createParam(objChild,"quality","high");objChild=AD_createParam(objChild,"allowScriptAccess","always");objEmbed.setAttribute("name","altfla");objEmbed.setAttribute("src",file);objEmbed.setAttribute("loop","true");objEmbed.setAttribute("quality","high");objEmbed.setAttribute("swLiveConnect","false");objEmbed.setAttribute("allowScriptAccess","always");objEmbed.setAttribute("style","width:"+YFAwidth+"px;height:"+YFAheight+"px");objEmbed.setAttribute("type","application/x-shockwave-flash");objEmbed.setAttribute("FlashVars","clickTAG="+YFAlink+"&targetTAG="+YFAtarget);objChild.appendChild(objEmbed);objParent.appendChild(objChild);}
objParent.style.visibility="visible";}
function AD_htmlObject(file){var html='<obj'
+'ect classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="altfla"'
+' width="'+YFAwidth+'" height="'+YFAheight+'">'
+'<param name="FlashVars" value="clickTAG='+YFAlink+'&targetTAG='+YFAtarget+'">'
+'<param name="movie" value="'+file+'">'
+'<param name="loop" value=true>'
+'<param name="quality" value="high">'
+'<param name="allowScriptAccess" value=always>'
+'<em'
+'bed name="altfla" src="'+file+'" loop="true"'
+' quality="high" swLiveConnect="false"'
+' allowScriptAccess="always" width="'+YFAwidth+'" height="'+YFAheight+'" type="application/x-shockwave-flash"'
+' FlashVars="clickTAG='+YFAlink+'&targetTAG='+YFAtarget+'">'
+'</embed></object>';return html;}
function AD_htmlImage(){var html='<a href="'+YFAaltlink+'"'
+' target="'+YFAtarget+'"'
+'>'+'<img'
+' src="'+YFAaltimg+'"'
+' width='+YFAwidth
+' height='+YFAheight
+' border="0" alt=""'
+'></a>';return html;}
function AD_htmlDiv(){var html='<div id="ADframe'+ADid_sub+'"'
+' style="visibility:hidden;'
+' width:'+YFAwidth+'px;'
+' height:'+YFAheight+'px;'
+'">';if(ADie){html+='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">'
+'<param name="src" value="" /></object>';}else{html+='<embed name="altfla" width='+YFAwidth+' height='+YFAheight+'></embed>';}
html+='</div>';return html;}
function getADdifTime(ADDt1,ADDt2){return(ADDt1.getTime()-ADDt2.getTime())/1000;}
if(ADwinie){if(ADie4){eval('if( self["YFAwidth"] ) ADNisChk=true;');}else{eval('try { if( YFAwidth ) ADNisChk=true; } catch(e){}');}}else{if(self["YFAwidth"]){ADNisChk=true;}}
if(ADNisChk){document.open();if(ADie4){document.write(AD_htmlImage());}else{if(plugin){plugin=(plugin.description.split(" ")[2].split(".")[0])>=ADflv;}else if(ADwinie){document.write('<SCR');document.write('IPT LANGUAGE=VBScript\> \n');document.write('on error resume next \n');document.write('plugin = ( IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.'+ADflv+'")))\n');document.write('</SCR');document.write('IPT\> \n');if(plugin){plugin=true;}else{plugin=false;}}
if(plugin){while(YFAlink.indexOf("+")!=-1){YFAlink=YFAlink.replace("+","%2B");}
if(YFAtr_id.indexOf("%adid%")==-1){document.write(AD_htmlDiv());if(ADsaf){AD_swfCreate(YFAmflash);}else{var ADlowerLimit=AD_getLowerLimit();var imgWork=new Image();imgWork.style.display="none";var dtStartTime=new Date();imgWork.src=YFAclrgif;imgWork.onload=function(){eval("'onload'; AD_dispBanner( dtStartTime, ADlowerLimit );")};}}else{document.write(AD_htmlDiv());AD_swfCreate(YFAvflash);}}else{document.write(AD_htmlImage());}}
document.close();}