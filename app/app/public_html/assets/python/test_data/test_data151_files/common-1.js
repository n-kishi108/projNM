var AGT=navigator.userAgent.toLowerCase();var requested_comment="";var requested_tb="";var uId="";var uUrl="";var posX;var posY;var pos;var oEmoticonPicker=null;var bEmoticonPicker=false;isWIN=(AGT.indexOf("win")!=-1)?true:false;isMAC=(AGT.indexOf("mac")!=-1)?true:false;isNS4=(document.layers)?true:false;isIE4=(document.all&&!document.getElementById)?true:false;isIE5=(document.all&&document.getElementById)?true:false;isIE6=(AGT.indexOf("msie 6.0")!=-1)?true:false;isIE7=(AGT.indexOf("msie 7.0")!=-1)?true:false;isIE8=(AGT.indexOf("msie 8.0")!=-1)?true:false;isNS6=(!document.all&&document.getElementById)?true:false;isOPE=((AGT.indexOf("opera")!=-1)&&document.documentElement)?true:false;String.prototype.trim=function(){return this.replace(/^\s*(\b.*\b|)\s*$/,"$1")};function get_comment_ajax(c,g,h,d){var e=getObj("commentArea"+c);var j=getObj("cmtFrm_img"+c);var f=getObj("cmtframe"+c);if(e==null){toggle_commentarea(e,j,f);return}if(requested_comment!=""){return}if(c==""){return}requested_comment=c;if(e.innerHTML==""){j.src=jsImgUrl+"/folder/boxset/"+jsskinNumber+"/icn_loading.gif";j.alt="読み込み中";var a="/"+jsBlogId+"/MYBLOG/one_comment.html";var b="&no="+c;b+="&f="+g;sendRequest(get_comment_callback,b,"POST",a,d)}else{toggle_commentarea(e,j,f);requested_comment=""}}function get_tb_ajax(e,a,d){var h=getObj("tbArea"+e);var c=getObj("cmtFrm_img"+e+"_tb");var g=getObj("cmtframe"+e+"_tb");if(h==null){toggle_commentarea(h,c,g);return}if(requested_tb!=""){return}if(e==""){return}requested_tb=e;if(h.innerHTML==""){c.src=jsImgUrl+"/folder/boxset/"+jsskinNumber+"/icn_loading.gif";c.alt="読み込み中";var b="/"+jsBlogId+"/MYBLOG/one_comment.html";var f="&no="+e;f+="&f="+a;f+="&tb=1";sendRequest(get_tb_callback,f,"POST",b,d)}else{toggle_commentarea(h,c,g);requested_tb=""}}function toggle_commentarea(c,a,b){if(b.style.display=="none"){a.src=jsImgUrl+"/folder/boxset/"+jsskinNumber+"/icn_minus.gif";a.alt="閉じる";b.style.display="block"}else{a.src=jsImgUrl+"/folder/boxset/"+jsskinNumber+"/icn_plus.gif";a.alt="開く";b.style.display="none"}}function get_comment_callback(b){var d=getObj("commentArea"+requested_comment);var a=getObj("cmtFrm_img"+requested_comment);var c=getObj("cmtframe"+requested_comment);a.src=jsImgUrl+"/folder/boxset/"+jsskinNumber+"/icn_minus.gif";a.alt="閉じる";if(b.responseText){d.innerHTML=b.responseText+"<div class=comment_dummy></div>"}else{d.innerHTML="<div class=comment_dummy></div>"}d.style.display="block";c.style.display="block";requested_comment=""}function toggleTabLv(b,e,a,f){var h=getObj(b);var d=getObj(e);if(h==null||h.innerHTML!=""){toggleTab(b,e);return}d.src=jsImgUrl+"/folder/boxset/"+jsskinNumber+"/icn_loading.gif";d.alt="読み込み中";h.innerHTML=" ";var c="/"+jsBlogId+"/MYBLOG/visitor_list.html";var g="&.done="+a;sendRequest(toggleTabLv_callback,g,"POST",c,f,true)}function toggleTabLv_callback(c){var b=getObj("lv_list");var a=getObj("lv_img");if(b.style.display=="block"){b.style.display="none";a.src=jsImgUrl+"/folder/boxset/"+jsskinNumber+"/icn_plus.gif";a.alt="開く"}else{b.style.display="block";a.src=jsImgUrl+"/folder/boxset/"+jsskinNumber+"/icn_minus.gif";a.alt="閉じる"}if(b){b.innerHTML=c.responseText;b.style.display="block"}}function get_tb_callback(b){var d=getObj("tbArea"+requested_tb);var a=getObj("cmtFrm_img"+requested_tb+"_tb");var c=getObj("cmtframe"+requested_tb+"_tb");a.src=jsImgUrl+"/folder/boxset/"+jsskinNumber+"/icn_minus.gif";a.alt="閉じる";if(d){d.innerHTML=b.responseText;d.style.display="block"}c.style.display="block";requested_tb=""}function chkAjaBrowser(){var b,c=navigator.userAgent;this.bw={safari:((b=c.split("AppleWebKit/")[1])?b.split("(")[0]:0)>=124,konqueror:((b=c.split("Konqueror/")[1])?b.split(";")[0]:0)>=3.3,mozes:((b=c.split("Gecko/")[1])?b.split(" ")[0]:0)>=20011128,opera:(!!window.opera)&&((typeof XMLHttpRequest)=="function"),msie:(!!window.ActiveXObject)?(!!createHttpRequest()):false};return(this.bw.safari||this.bw.konqueror||this.bw.mozes||this.bw.opera||this.bw.msie)}function createHttpRequest(){if(window.XMLHttpRequest){return new XMLHttpRequest()}else{if(window.ActiveXObject){try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(b){try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(a){return null}}}else{return null}}}function sendRequest(o,h,a,d,f,m,g,n){var k=createHttpRequest();if(k==null){return null}var m=(!!sendRequest.arguments[5])?m:false;if(m||a.toUpperCase()=="GET"){d+="?"}if(m){d=d+"t="+(new Date()).getTime()}var c=new chkAjaBrowser();var e=c.bw.opera;var b=c.bw.safari;var j=c.bw.konqueror;var p=c.bw.mozes;if(e||b||p){k.onload=function(){o(k)}}else{k.onreadystatechange=function(){if(k.readyState==4){o(k)}}}h=uriEncode(h);if(a.toUpperCase()=="GET"){d+=h}k.open(a,d,f,g,n);setEncHeader(k);k.send(h);return k}function setEncHeader(a){var b="application/x-www-form-urlencoded; charset=UTF-8";if(!window.opera){a.setRequestHeader("Content-Type",b)}else{if((typeof a.setRequestHeader)=="function"){a.setRequestHeader("Content-Type",b)}}return a}function uriEncode(c){if(c!=""){var d="";var a=c.split("&");for(i=1;i<a.length;i++){var b=a[i].split("=");d+="&"+encodeURIComponent(b[0])+"="+encodeURIComponent(b[1])}}else{d=""}return d}function getObj(a){if(isNS4){elm=document.layers[a]}else{if(isIE4){elm=document.all[a]}else{if(isIE5||isNS6){elm=document.getElementById(a)}}}return elm}function popupImg(f,e,a){var d=getObj("images[id]");var c,b;c=window.screen.availWidth-100;b=window.screen.availHeight-100;if(!e){e=d.width}if(!a){a=d.height}if(e>=c){e=c}if(a>=b){a=b}ImageWin=open("/"+jsBlogId+"/MYBLOG/show_image.html?id="+f,"showimage","width="+e+",height="+a+",scrollbars=1");ImageWin.focus()}function go_url(b,a){uId=b;if(a){uUrl=a}else{uUrl=""}go_blog()}function go_blog(){if(uId!=""&&uId!="yahoo!anon"){window.open("/"+uId,"","")}else{if(uUrl!=""){window.open(uUrl,"","")}else{alert("Yahoo!ブログを開設していないか、ＵＲＬが未入力の利用者です。 ")}}}function wiki_common(frm_name,field_name,content){var field=eval("document."+frm_name+"."+field_name);field.value=field.value+content;field.focus()}function wiki_bold(a,b){wiki_common(a,b,"''' ボールド '''\n")}function wiki_italic(a,b){wiki_common(a,b,"'' 斜体 ''\n")}function wiki_bold_italic(a,b){wiki_common(a,b,"''''' 太字斜体 '''''\n")}function wiki_head(c,d,a){var b="";while(a){b+="=";a--}wiki_common(c,d,b+" タイトル "+b+"\n")}function wiki_quote(a,b){wiki_common(a,b,"{{{:\n 引用 \n}}}\n")}function wiki_link(a,b){wiki_common(a,b,"[http://LinkURL]")}function wiki_img(a,b){wiki_common(a,b,"[[img( http://LinkURL)]]")}function wiki_item(a,b){wiki_common(a,b,"[[item(http://fileURL)]]")}function popup_img_view(b,d,a){var e="no";if(d>(screen.availWidth-20)){d=screen.availWidth-40;e="yes"}if(a>(screen.availHeight-20)){a=screen.availHeight-80;d=parseInt(d)+16;e="yes"}var c="top=10, left=10, width="+d+", height="+a+", scrollbars="+e+", resizable=yes";ereg=null;imageWin=window.open("/"+jsBlogId+"/GALLERY/show_image_v2.html?id="+b,"",c);imageWin.focus()}function wiki_help(){window.open("http://help.yahoo.co.jp/help/jp/blog/blog-47.html")}function del(d,c,a){var b;if(a){b="http://"+jsBlogPostHost+"/"+jsBlogId+"/MYBLOG/delete.html?sopt=art&fid="+c+"&p="+jspage+"&update=1&m=l&crumb="+jscrumb+"&pid="+d+"&.done="+jscurrent_page}else{b="http://"+jsBlogPostHost+"/"+jsBlogId+"/MYBLOG/delete.html?sopt=art&fid="+c+"&p="+jspage+"&update=1&m=l&crumb="+jscrumb+"&pid="+d}if(confirm("本当に削除しますか？ ")){document.location=b}}function del_tb(e,a,d,c){var b="http://"+jsBlogPostHost+"/"+jsBlogId+"/MYBLOG/delete.html?fid="+d+"&id="+a+"&pid="+e+"&p="+jspage+"&update=1&m=c&crumb="+jscrumb+"&.done="+jscurrent_page+"&sopt=tb";if(c){b=b+"#"+a}if(confirm("本当に削除しますか？ ")){document.location=b}}function tb(b,a){tbWin=open("/"+jsBlogId+"/MYBLOG/send_ping.html?fid="+a+"&p="+jspage+"&m=l&pid="+b,"tbWin","width=354,height=230,scrollbars=0,resizable=yes")}function tb_url2(b,a){tbUrlWin=open("/"+jsBlogId+"/MYBLOG/tb_url.html?fid="+a+"&p="+jspage+"&m=l&pid="+b,"tbWin","width=470,height=330,scrollbars=0,resizable=yes")}function tb_cp(a){if(!isIE5||isNS6){alert("InternetExplorer以外をお使いの場合は、コピーできません。 ");return}var b=document.body.createTextRange();var c=getObj(a);c.style.display="block";b.moveToElementText(document.all(a));b.select();b.execCommand("copy",a);c.style.display="none";alert("トラックバックアドレス（ＵＲＬ）をクリップボードにコピーしました。 ")}function submitSearch(b){if(b=="Gsearch"){var a=document.Gsearch}else{var a=document.search}if(a.sv.value.trim()==""){alert("検索用キーワードを入力してください。 ");return}a.submit()}function funcAutoGSubmit(a){a=(a)?a:((event)?event:null);if(a.keyCode==13){submitSearch("Gsearch")}return true}function funcAutoSubmit(a){a=(a)?a:((event)?event:null);if(a.keyCode==13){submitSearch("search")}return true}function autoGSubmit(){document.onkeydown=funcAutoGSubmit}function autoSubmit(){document.onkeydown=funcAutoSubmit}function initCate(a){for(i=a.length-1;i>=0;i--){a.options[i]=null}}function insertCate(a,b){input_val=jsdb_cate_code[b.toString(10)];input_out=jsdb_cate_name[b.toString(10)];for(i=0;i<input_val.length;i++){a.options[i]=new Option(input_out[i],input_val[i])}return parseInt(input_val[0])}function changeSubCategory1(){var e=getObj("f");var c=e.cate1;var b=e.cate2;var a=e.cate3;var d=c.selectedIndex;initCate(b);var f=insertCate(b,c.options[c.selectedIndex].value);initCate(a);insertCate(a,f)}function changeSubCategory2(){var d=getObj("f");var b=d.cate2;var a=d.cate3;var c=b.selectedIndex;initCate(a);insertCate(a,b.options[b.selectedIndex].value)}function changeFolder(){var e=getObj("f");var d=e._fid;var c=e.cate1;var b=e.cate2;var a=e.cate3;fcateObj=jsfolder_obj[d.options[d.selectedIndex].value];for(i=0;i<c.length;i++){if(c.options[i].value==fcateObj[0]){c.selectedIndex=i}}initCate(b);insertCate(b,c.options[c.selectedIndex].value);for(i=0;i<b.length;i++){if(b.options[i].value==fcateObj[1]){b.selectedIndex=i}}initCate(a);insertCate(a,b.options[b.selectedIndex].value);for(i=0;i<a.length;i++){if(a.options[i].value==fcateObj[2]){a.selectedIndex=i}}}function strlen(e){var b=e.length;var f=0;var d=0;for(i=0;i<b;i++){var c=e.charCodeAt(i);if(c>128){f++}}d=(b-f)+(f*2);return d}function check_comment(a){var d=getObj("f"+a);var c=getObj("comment_id_post"+a);var b=getObj("comment_id_icon"+a);if(!jscrumb&&jsvcrumb){if(d.nm.value.trim()==""){alert("名前を入力してください。 ");d.nm.value="";d.nm.focus();return}if(d.pw.value.trim()==""){alert("パスワードを入力してください。 ");d.pw.value="";d.pw.focus();return}}if(d.content.value.trim()==""){alert("コメントを入力してください。 ");d.content.value="";d.content.focus();return}if(d.content.value.length>500){alert("コメントは、最大５００文字です。");d.content.focus();return}d.submit();c.removeAttribute("href");if(typeof YAHOO.util.Dom!=="undefined"){YAHOO.util.Dom.replaceClass(b,"ImgReply","ImgReply_gray")}b.setAttribute("alt","投稿中")}function check_comment_gb(a){var d=getObj("f"+a);var c=getObj("comment_id_post"+a);var b=getObj("comment_id_icon"+a);if(!jscrumb&&jsvcrumb){if(d.nm.value.trim()==""){alert("名前を入力してください。 ");d.nm.value="";d.nm.focus();return}if(d.pw.value.trim()==""){alert("パスワードを入力してください。 ");d.pw.value="";d.pw.focus();return}}if(d.content.value.trim()==""){alert("コメントを入力してください。 ");d.content.value="";d.content.focus();return}if(d.content.value.length>500){alert("ゲストブックへの投稿は、最大500文字です。");d.content.focus();return}if(typeof(d.nickname)!=="undefined"){d.nickname.disabled=false}d.submit();c.removeAttribute("href");if(typeof YAHOO.util.Dom!=="undefined"){YAHOO.util.Dom.replaceClass(b,"ImgReply","ImgReply_gray")}b.setAttribute("alt","投稿中")}function confirm_login(b){var a=false;b.blur();a=confirm("コメントを入力するには、 Yahoo!ブログにログインする必要があります。 \nYahoo!ブログにログインしますか？ ");if(a){document.location="https://login.yahoo.co.jp/config/login?.src=blog&.done="+jscurrent_page}}function confirm_login_timeout(b){var a=false;if(b!=null){b.blur()}a=confirm("投稿するには、 Yahoo!ブログにログインしなおす必要があります。 \nYahoo!ブログにログインしますか？ ");if(a){document.location="https://login.yahoo.co.jp/config/login?.src=blog&.done="+jscurrent_page}}function position(a){if((isIE4||isIE5)&&!isIE6&&!isIE7&&!isIE8){if(a==null){a=event}posX=a.x+document.body.scrollLeft;posY=a.y+document.body.scrollTop}else{posX=a.clientX+document.documentElement.scrollLeft;posY=a.clientY+document.documentElement.scrollTop}}function EmoticonPicker(){this.divWrite=a;if(jscrumb){var c=new Array("001","002","003","004","005","006","007","008","009","010","011","012","013","014","015","016","017","018","019","020","021","022","023","024","025","026","027","028","029","030","031","032","033","034","035","036","037","038","039","040","041","043","044","045","046","047","048","049","050","051","052","053","054","055","056","057","058","059","081","082","083","086","101","102","103","104")}else{var c=new Array("001","002","003","004","005","006","007","008","009","010","011","012","013","014","015","016","017","018","019","020","021","022","023","024","025","026","027","028","029","030","031","032","033","034","035","036","037","038","039","040","041","043","044","045","046","047","048","049","050","051","052","053","054","055","056","057","058","059","081","082","083","086")}var d=c.length;pos=0;var e="";e+='<table class="selectFaceMarkWindow" cellspacing="0" cellpadding="0" border="1"><tr><td>';e+='<table class="faceMarkWrap" cellspacing="0" cellpadding="0" border="1"><tr><td>';for(var b=0;b<d;b++){if(c[b]=="101"){e+='</td></tr></table><table class="avatarExpressionWrap" cellspacing="0" cellpadding="0" border="1"><tr><td>';e+='<div class="avatarExpressionTitle">  Yahoo!アバター： </div>'}e+='<div class="fmCell" onmouseover="this.style.background=\'#2e3192\';" onmouseout="this.style.background=\'white\';" onclick=\'selectEmoticon("'+c[b]+'")\' ><img class="ImgFaithMark'+c[b]+'" alt="顔アイコン" src="http://i.yimg.jp/images/clear.gif" /></div>'}e+="</td></tr></table>";e+="</td></tr></table>";function a(g){pos=g;var f=getObj("emoticon_picker"+pos);if(!bEmoticonPicker){f.style.visibility="visible";f.innerHTML=e;bEmoticonPicker=true}else{f.style.visibility="hidden";f.innerHTML="";bEmoticonPicker=false}}}function selectEmoticon(b){var d=getObj("emoticon"+pos);var c=getObj("f"+pos);var a=getObj("emoticon_picker"+pos);a.style.visibility="hidden";a.innerHTML="";bEmoticonPicker=false;d.className="ImgFaithMark"+b;c.emoticon.value=convertEmoImg(b)}function toggleTab(b,c){var d=getObj(b);var a=getObj(c);if(d.style.display=="block"){d.style.display="none";if(c!=""){a.src=jsImgUrl+"/folder/boxset/"+jsskinNumber+"/icn_plus.gif";a.alt="開く"}}else{d.style.display="block";if(c!=""){a.src=jsImgUrl+"/folder/boxset/"+jsskinNumber+"/icn_minus.gif";a.alt="閉じる"}}}function toggleProfile(e){var d=getObj("tb_01");var b=getObj("tb_02");var c=getObj("id_profile");var a=getObj("id_avatar");if(e=="avatar"){d.style.display="none";c.src=jsImgUrl+"/folder/boxset/"+jsskinNumber+"/tab_pro.gif";b.style.display="block";a.src=jsImgUrl+"/folder/boxset/"+jsskinNumber+"/tab_abatau.gif"}else{b.style.display="none";a.src=jsImgUrl+"/folder/boxset/"+jsskinNumber+"/tab_abata.gif";d.style.display="block";c.src=jsImgUrl+"/folder/boxset/"+jsskinNumber+"/tab_prou.gif"}}function popup_today_msg(){open("/"+jsBlogId+"/MANAGE/today_message_popup.html?.done="+jscurrent_page,"ptodaymesg","width=354,height=115,resizable=yes")}function popup_blog_title(){open("/"+jsBlogId+"/PROFILE/edit_blog_title.html?.done="+jscurrent_page,"ptodaymesg","width=354,height=115,resizable=yes")}function popup_scrap(a,c,d,b){if(b!="0"){alert("転載することができない記事です。 ");return}if(!jsyid){if(confirm("記事を転載するには、 Yahoo!ブログにログインする必要があります。 \nYahoo!ブログにログインしますか？ ")){document.location="https://login.yahoo.co.jp/config/login?.src=blog&.done="+jscurrent_page}else{return}}else{open("/"+jsBlogId+"/MYBLOG/scrap_popup.html?tbid="+a+"&fid="+c+"&pid="+d+"&crumb="+jscrumb,"","width=354,height=120,resizable=yes")}}function popup_move(a,b){open("/"+jsBlogId+"/MYBLOG/move_popup.html?fid="+a+"&pid="+b+"&crumb="+jscrumb,"","width=354,height=120,resizable=yes")}function add_fav2(){if(!jsyid){if(confirm("お気に入りに登録するには、 Yahoo!ブログにログインする必要があります。 \nYahoo!ブログにログインしますか？ ")){document.location="https://login.yahoo.co.jp/config/login?.src=blog&.done="+jscurrent_page}else{return}}else{location.href="http://rd.yahoo.co.jp/blog/favorite/button/*http://"+jsBlogWebHost+"/"+jsBlogId+"/MYBLOG/set_subs.html?crumb="+jscrumb}}function help_rss(){window.open("/"+jsBlogId+"/MYBLOG/help_rss_popup.html","xmlhelp","width=470,height=330,resizable=yes")}function get_byte(c){var b=0;for(var a=0;a<c.length;a++){if(c.charCodeAt(a)>128){b+=2}else{b+=1}}return b}function popupImgGal(a,b,g){var e="no";if(b>(screen.availWidth-20)){b=screen.availWidth-40;e="yes"}if(g>(screen.availHeight-20)){g=screen.availHeight-80;b=parseInt(b)+16;e="yes"}var d="top=10, left=10, width="+b+", height="+g+", scrollbars="+e+", resizable=yes";var j=getObj(a);var c=j.src;var f=new RegExp("_thumb","g");var h=c.replace(f,"");f=null;imageWin=window.open("/"+jsBlogId+"/GALLERY/show_image_v2.html?id="+h,"",d);imageWin.focus()}function goGalListSlt(d){var a=getObj("move_folder");var b=a.menu.selectedIndex;var c=a.menu.options[b].value;if(c=="all"){location.href="gallery.html"}else{location.href="gallery.html?fid="+c}}function is_readymake(){if(window.document.readyState!=null&&window.document.readyState!="complete"){return false}else{return true}}function invalidLink(b){var a=b.getElementsByTagName("a");for(i=0,l=a.length;i<l;i++){a[i].href="javascript:void(0)";a[i].target="";a[i].style.cursor="default"}return}function prevInit(){var b=getObj("blogHeaderArea");var a=getObj("modulesArea");invalidLink(b);invalidLink(a);return}function convertEmoImg(a){var c="";var b="";if(a<100){b=a.substr(1,2)}else{b=a}c=b+".gif";return c}function setPopupImg(){var k=new RegExp("\\s*popup_img_(\\d+)_(\\d+)\\s*(alignLeft|alignRight)?\\s*");var d=document.getElementById("mainContentsArea").getElementsByTagName("img");for(var b=0,a=d.length;b<a;b++){var c=d[b];if(c.className.match(k)){var f=RegExp.$1;var m=RegExp.$2;var e=RegExp.$3;if(f>560){var j=document.createElement("span");j.className="popup_img "+e;c.className=c.className.replace((new RegExp(e))," ");var h=document.createElement("a");h.className="loupe";h.href=c.src;h.title="オリジナルのサイズの画像を見る場合はクリックしてください";h.onclick=(function(o,p,n){return function(){popup_img_view(o,p,n);return false}})(c.src,f,m);var g=c;if(c.parentNode.tagName.toLowerCase()=="a"){g=c.parentNode}g.parentNode.insertBefore(j,g);g.parentNode.removeChild(g);j.appendChild(g);j.appendChild(h)}if(c.parentNode.tagName.toLowerCase()=="a"){c.title=c.parentNode.href+" へ"}}}}if(typeof YAHOO!=="undefined"&&typeof YAHOO.util!=="undefined"&&typeof YAHOO.util.Event!=="undefined"){YAHOO.util.Event.onDOMReady(function(){setPopupImg()})};