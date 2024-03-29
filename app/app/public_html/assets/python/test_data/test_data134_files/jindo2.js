/**
* http://bts.nhncorp.com/nhnbts/browse/NJMTM-3805
* @release date 2010.03.31
* -- filename: jindo2.js	revision: 173726
* -- filename: nj.common.js	revision: 94675
* -- filename: $Element.delegate.js	revision: 50852
* -- filename: nj.mission.function.js	revision: 204286
* -- filename: element.insertadjacethtml.js	revision: 67072
*/
if(typeof window!="undefined"&&typeof window.nhn=="undefined"){window.nhn=new Object
}if(typeof window!="undefined"){window.jindo={}
}else{jindo={}
}jindo.$Jindo=function(){var cl=arguments.callee;
var cc=cl._cached;
if(cc){return cc
}if(!(this instanceof cl)){return new cl()
}if(!cc){cl._cached=this
}this.version="1.3.9"
};
jindo.$=function(sID){var ret=new Array;
var el=null;
var reg=/^<([a-z]+|h[1-5])>$/i;
var reg2=/^<([a-z]+|h[1-5])(\s+[^>]+)?>/i;
for(var i=0;
i<arguments.length;
i++){el=arguments[i];
if(typeof el=="string"){el=el.replace(/^\s+|\s+$/g,"");
if(reg.test(el)){el=document.createElement(RegExp.$1)
}else{if(reg2.test(el)){var p={thead:"table",tbody:"table",tr:"tbody",td:"tr",dt:"dl",dd:"dl",li:"ul",legend:"fieldset"};
var tag=RegExp.$1.toLowerCase();
var parents=[];
for(var j=0;
tag=p[tag];
j++){var o=document.createElement(tag);
if(j){o.appendChild(parents[j-1])
}parents.push(o)
}if(!parents[0]){parents[0]=document.createElement("div")
}var first=parents[0];
jindo.$Element(first).html(el);
for(el=first.firstChild;
el;
el=el.nextSibling){if(el.nodeType==1){ret[ret.length]=el
}}}else{el=document.getElementById(el)
}}}if(el){ret[ret.length]=el
}}return ret.length>1?ret:(ret[0]||null)
};
jindo.$Class=function(oDef){function typeClass(){var t=this;
var a=[];
var superFunc=function(m,superClass,func){if(m!="constructor"&&func.toString().indexOf("$super")>-1){var funcArg=func.toString().replace(/function\s*\(([^\)]*)[\w\W]*/g,"$1").split(",");
var funcStr=func.toString().replace(/function\s*\(.*\)\s*\{/,"").replace(/this\.\$super/g,"this.$super.$super");
funcStr=funcStr.substr(0,funcStr.length-1);
func=superClass[m]=new Function(funcArg,funcStr)
}return function(){var f=this.$this[m];
var t=this.$this;
var r=(t[m]=func).apply(t,arguments);
t[m]=f;
return r
}
};
while(typeof t._$superClass!="undefined"){t.$super=new Object;
t.$super.$this=this;
for(var x in t._$superClass.prototype){if(typeof this[x]=="undefined"&&x!="$init"){this[x]=t._$superClass.prototype[x]
}if(x!="constructor"&&x!="_$superClass"&&typeof t._$superClass.prototype[x]=="function"){t.$super[x]=superFunc(x,t._$superClass,t._$superClass.prototype[x])
}else{t.$super[x]=t._$superClass.prototype[x]
}}if(typeof t.$super.$init=="function"){a[a.length]=t
}t=t.$super
}for(var i=a.length-1;
i>-1;
i--){a[i].$super.$init.apply(a[i].$super,arguments)
}if(typeof this.$init=="function"){this.$init.apply(this,arguments)
}}if(typeof oDef.$static!="undefined"){var i=0,x;
for(x in oDef){x=="$static"||i++
}for(x in oDef.$static){typeClass[x]=oDef.$static[x]
}if(!i){return oDef.$static
}delete oDef.$static
}typeClass.prototype=oDef;
typeClass.prototype.constructor=typeClass;
typeClass.extend=jindo.$Class.extend;
return typeClass
};
jindo.$Class.extend=function(superClass){this.prototype._$superClass=superClass;
for(var x in superClass){if(x=="prototype"){continue
}this[x]=superClass[x]
}return this
};
jindo.$$=jindo.cssquery=(function(){var sVersion="2.3";
var debugOption={repeat:1};
var UID=1;
var cost=0;
var validUID={};
var bSupportByClassName=jindo.$("<DIV>").getElementsByClassName?true:false;
var safeHTML=false;
var getUID4HTML=function(oEl){var nUID=safeHTML?(oEl._cssquery_UID&&oEl._cssquery_UID[0]):oEl._cssquery_UID;
if(nUID&&validUID[nUID]==oEl){return nUID
}nUID=UID++;
oEl._cssquery_UID=safeHTML?[nUID]:nUID;
validUID[nUID]=oEl;
return nUID
};
var getUID4XML=function(oEl){var oAttr=oEl.getAttribute("_cssquery_UID");
var nUID=safeHTML?(oAttr&&oAttr[0]):oAttr;
if(!nUID){nUID=UID++;
oEl.setAttribute("_cssquery_UID",safeHTML?[nUID]:nUID)
}return nUID
};
var getUID=getUID4HTML;
var uniqid=function(sPrefix){return(sPrefix||"")+new Date().getTime()+parseInt(Math.random()*100000000)
};
function getElementsByClass(searchClass,node,tag){var classElements=new Array();
if(node==null){node=document
}if(tag==null){tag="*"
}var els=node.getElementsByTagName(tag);
var elsLen=els.length;
var pattern=new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
for(i=0,j=0;
i<elsLen;
i++){if(pattern.test(els[i].className)){classElements[j]=els[i];
j++
}}return classElements
}var getChilds_dontShrink=function(oEl,sTagName,sClassName){if(bSupportByClassName&&sClassName){if(oEl.getElementsByClassName){return oEl.getElementsByClassName(sClassName)
}if(oEl.querySelectorAll){return oEl.querySelectorAll(sClassName)
}return getElementsByClass(sClassName,oEl,sTagName)
}else{if(sTagName=="*"){return oEl.all||oEl.getElementsByTagName(sTagName)
}}return oEl.getElementsByTagName(sTagName)
};
var clearKeys=function(){backupKeys._keys={}
};
var oDocument_dontShrink=document;
var bXMLDocument=false;
var backupKeys=function(sQuery){var oKeys=backupKeys._keys;
sQuery=sQuery.replace(/'(\\'|[^'])*'/g,function(sAll){var uid=uniqid("QUOT");
oKeys[uid]=sAll;
return uid
});
sQuery=sQuery.replace(/"(\\"|[^"])*"/g,function(sAll){var uid=uniqid("QUOT");
oKeys[uid]=sAll;
return uid
});
sQuery=sQuery.replace(/\[(.*?)\]/g,function(sAll,sBody){if(sBody.indexOf("ATTR")==0){return sAll
}var uid="["+uniqid("ATTR")+"]";
oKeys[uid]=sAll;
return uid
});
var bChanged;
do{bChanged=false;
sQuery=sQuery.replace(/\(((\\\)|[^)|^(])*)\)/g,function(sAll,sBody){if(sBody.indexOf("BRCE")==0){return sAll
}var uid="_"+uniqid("BRCE");
oKeys[uid]=sAll;
bChanged=true;
return uid
})
}while(bChanged);
return sQuery
};
var restoreKeys=function(sQuery,bOnlyAttrBrace){var oKeys=backupKeys._keys;
var bChanged;
var rRegex=bOnlyAttrBrace?/(\[ATTR[0-9]+\])/g:/(QUOT[0-9]+|\[ATTR[0-9]+\])/g;
do{bChanged=false;
sQuery=sQuery.replace(rRegex,function(sKey){if(oKeys[sKey]){bChanged=true;
return oKeys[sKey]
}return sKey
})
}while(bChanged);
sQuery=sQuery.replace(/_BRCE[0-9]+/g,function(sKey){return oKeys[sKey]?oKeys[sKey]:sKey
});
return sQuery
};
var restoreString=function(sKey){var oKeys=backupKeys._keys;
var sOrg=oKeys[sKey];
if(!sOrg){return sKey
}return eval(sOrg)
};
var wrapQuot=function(sStr){return'"'+sStr.replace(/"/g,'\\"')+'"'
};
var getStyleKey=function(sKey){if(/^@/.test(sKey)){return sKey.substr(1)
}return null
};
var getCSS=function(oEl,sKey){if(oEl.currentStyle){if(sKey=="float"){sKey="styleFloat"
}return oEl.currentStyle[sKey]||oEl.style[sKey]
}else{if(window.getComputedStyle){return oDocument_dontShrink.defaultView.getComputedStyle(oEl,null).getPropertyValue(sKey.replace(/([A-Z])/g,"-$1").toLowerCase())||oEl.style[sKey]
}}if(sKey=="float"&&/MSIE/.test(window.navigator.userAgent)){sKey="styleFloat"
}return oEl.style[sKey]
};
var oCamels={accesskey:"accessKey",cellspacing:"cellSpacing",cellpadding:"cellPadding","class":"className",colspan:"colSpan","for":"htmlFor",maxlength:"maxLength",readonly:"readOnly",rowspan:"rowSpan",tabindex:"tabIndex",valign:"vAlign"};
var getDefineCode=function(sKey){var sVal;
var sStyleKey;
if(bXMLDocument){sVal='oEl.getAttribute("'+sKey+'",2)'
}else{if(sStyleKey=getStyleKey(sKey)){sKey="$$"+sStyleKey;
sVal='getCSS(oEl, "'+sStyleKey+'")'
}else{switch(sKey){case"checked":sVal='oEl.checked + ""';
break;
case"disabled":sVal='oEl.disabled + ""';
break;
case"enabled":sVal='!oEl.disabled + ""';
break;
case"readonly":sVal='oEl.readOnly + ""';
break;
case"selected":sVal='oEl.selected + ""';
break;
default:if(oCamels[sKey]){sVal="oEl."+oCamels[sKey]
}else{sVal='oEl.getAttribute("'+sKey+'",2)'
}}}}return"_"+sKey+" = "+sVal
};
var getReturnCode=function(oExpr){var sStyleKey=getStyleKey(oExpr.key);
var sVar="_"+(sStyleKey?"$$"+sStyleKey:oExpr.key);
var sVal=oExpr.val?wrapQuot(oExpr.val):"";
switch(oExpr.op){case"~=":return"("+sVar+' && (" " + '+sVar+' + " ").indexOf(" " + '+sVal+' + " ") > -1)';
case"^=":return"("+sVar+" && "+sVar+".indexOf("+sVal+") == 0)";
case"$=":return"("+sVar+" && "+sVar+".substr("+sVar+".length - "+oExpr.val.length+") == "+sVal+")";
case"*=":return"("+sVar+" && "+sVar+".indexOf("+sVal+") > -1)";
case"!=":return"("+sVar+" != "+sVal+")";
case"=":return"("+sVar+" == "+sVal+")"
}return"("+sVar+")"
};
var getNodeIndex=function(oEl){var nUID=getUID(oEl);
var nIndex=oNodeIndexes[nUID]||0;
if(nIndex==0){for(var oSib=(oEl.parentNode||oEl._IE5_parentNode).firstChild;
oSib;
oSib=oSib.nextSibling){if(oSib.nodeType!=1){continue
}nIndex++;
setNodeIndex(oSib,nIndex)
}nIndex=oNodeIndexes[nUID]
}return nIndex
};
var oNodeIndexes={};
var setNodeIndex=function(oEl,nIndex){var nUID=getUID(oEl);
oNodeIndexes[nUID]=nIndex
};
var unsetNodeIndexes=function(){setTimeout(function(){oNodeIndexes={}
},0)
};
var oPseudoes_dontShrink={contains:function(oEl,sOption){return(oEl.innerText||oEl.textContent||"").indexOf(sOption)>-1
},"last-child":function(oEl,sOption){for(oEl=oEl.nextSibling;
oEl;
oEl=oEl.nextSibling){if(oEl.nodeType==1){return false
}}return true
},"first-child":function(oEl,sOption){for(oEl=oEl.previousSibling;
oEl;
oEl=oEl.previousSibling){if(oEl.nodeType==1){return false
}}return true
},"only-child":function(oEl,sOption){var nChild=0;
for(var oChild=(oEl.parentNode||oEl._IE5_parentNode).firstChild;
oChild;
oChild=oChild.nextSibling){if(oChild.nodeType==1){nChild++
}if(nChild>1){return false
}}return nChild?true:false
},empty:function(oEl,_){return oEl.firstChild?false:true
},"nth-child":function(oEl,nMul,nAdd){var nIndex=getNodeIndex(oEl);
return nIndex%nMul==nAdd
},"nth-last-child":function(oEl,nMul,nAdd){var oLast=(oEl.parentNode||oEl._IE5_parentNode).lastChild;
for(;
oLast;
oLast=oLast.previousSibling){if(oLast.nodeType==1){break
}}var nTotal=getNodeIndex(oLast);
var nIndex=getNodeIndex(oEl);
var nLastIndex=nTotal-nIndex+1;
return nLastIndex%nMul==nAdd
}};
var getExpression=function(sBody){var oRet={defines:"",returns:"true"};
var sBody=restoreKeys(sBody,true);
var aExprs=[];
var aDefineCode=[],aReturnCode=[];
var sId,sTagName;
var sBody=sBody.replace(/:([\w-]+)(\(([^)]*)\))?/g,function(_1,sType,_2,sOption){switch(sType){case"not":var oInner=getExpression(sOption);
var sFuncDefines=oInner.defines;
var sFuncReturns=oInner.returnsID+oInner.returnsTAG+oInner.returns;
aReturnCode.push("!(function() { "+sFuncDefines+" return "+sFuncReturns+" })()");
break;
case"nth-child":case"nth-last-child":sOption=restoreString(sOption);
if(sOption=="even"){sOption="2n"
}else{if(sOption=="odd"){sOption="2n+1"
}}var nMul,nAdd;
if(/([0-9]*)n([+-][0-9]+)*/.test(sOption)){nMul=parseInt(RegExp.$1)||1;
nAdd=parseInt(RegExp.$2)||0
}else{nMul=Infinity;
nAdd=parseInt(sOption)
}aReturnCode.push("oPseudoes_dontShrink["+wrapQuot(sType)+"](oEl, "+nMul+", "+nAdd+")");
break;
case"first-of-type":case"last-of-type":sType=(sType=="first-of-type"?"nth-of-type":"nth-last-of-type");
sOption=1;
case"nth-of-type":case"nth-last-of-type":sOption=restoreString(sOption);
if(sOption=="even"){sOption="2n"
}else{if(sOption=="odd"){sOption="2n+1"
}}var nMul,nAdd;
if(/([0-9]*)n([+-][0-9]+)*/.test(sOption)){nMul=parseInt(RegExp.$1)||1;
nAdd=parseInt(RegExp.$2)||0
}else{nMul=Infinity;
nAdd=parseInt(sOption)
}oRet.nth=[nMul,nAdd,sType];
break;
default:sOption=sOption?restoreString(sOption):"";
aReturnCode.push("oPseudoes_dontShrink["+wrapQuot(sType)+"](oEl, "+wrapQuot(sOption)+")");
break
}return""
});
var sBody=sBody.replace(/\[(@?[\w-]+)(([!^~$*]?=)([^\]]*))?\]/g,function(_1,sKey,_2,sOp,sVal){sKey=restoreString(sKey);
sVal=restoreString(sVal);
if(sKey=="checked"||sKey=="disabled"||sKey=="enabled"||sKey=="readonly"||sKey=="selected"){if(!sVal){sOp="=";
sVal="true"
}}aExprs.push({key:sKey,op:sOp,val:sVal});
return""
});
var sClassName=null;
var sBody=sBody.replace(/\.([\w-]+)/g,function(_,sClass){aExprs.push({key:"class",op:"~=",val:sClass});
if(!sClassName){sClassName=sClass
}return""
});
var sBody=sBody.replace(/#([\w-]+)/g,function(_,sIdValue){if(bXMLDocument){aExprs.push({key:"id",op:"=",val:sIdValue})
}else{sId=sIdValue
}return""
});
sTagName=sBody=="*"?"":sBody;
var oVars={};
for(var i=0,oExpr;
oExpr=aExprs[i];
i++){var sKey=oExpr.key;
if(!oVars[sKey]){aDefineCode.push(getDefineCode(sKey))
}aReturnCode.unshift(getReturnCode(oExpr));
oVars[sKey]=true
}if(aDefineCode.length){oRet.defines="var "+aDefineCode.join(",")+";"
}if(aReturnCode.length){oRet.returns=aReturnCode.join("&&")
}oRet.quotID=sId?wrapQuot(sId):"";
oRet.quotTAG=sTagName?wrapQuot(bXMLDocument?sTagName:sTagName.toUpperCase()):"";
if(bSupportByClassName){oRet.quotCLASS=sClassName?wrapQuot(sClassName):""
}oRet.returnsID=sId?"oEl.id == "+oRet.quotID+" && ":"";
oRet.returnsTAG=sTagName&&sTagName!="*"?"oEl.tagName == "+oRet.quotTAG+" && ":"";
return oRet
};
var splitToParts=function(sQuery){var aParts=[];
var sRel=" ";
var sBody=sQuery.replace(/(.*?)\s*(!?[+>~ ]|!)\s*/g,function(_,sBody,sRelative){if(sBody){aParts.push({rel:sRel,body:sBody})
}sRel=sRelative.replace(/\s+$/g,"")||" ";
return""
});
if(sBody){aParts.push({rel:sRel,body:sBody})
}return aParts
};
var isNth_dontShrink=function(oEl,sTagName,nMul,nAdd,sDirection){var nIndex=0;
for(var oSib=oEl;
oSib;
oSib=oSib[sDirection]){if(oSib.nodeType==1&&(!sTagName||sTagName==oSib.tagName)){nIndex++
}}return nIndex%nMul==nAdd
};
var compileParts=function(aParts){var aPartExprs=[];
for(var i=0,oPart;
oPart=aParts[i];
i++){aPartExprs.push(getExpression(oPart.body))
}var sFunc="";
var sPushCode="aRet.push(oEl); if (oOptions.single) { bStop = true; }";
for(var i=aParts.length-1,oPart;
oPart=aParts[i];
i--){var oExpr=aPartExprs[i];
var sPush=(debugOption.callback?"cost++;":"")+oExpr.defines;
var sReturn="if (bStop) {"+(i==0?"return aRet;":"return;")+"}";
if(oExpr.returns=="true"){sPush+=(sFunc?sFunc+"(oEl);":sPushCode)+sReturn
}else{sPush+="if ("+oExpr.returns+") {"+(sFunc?sFunc+"(oEl);":sPushCode)+sReturn+"}"
}var sCheckTag="oEl.nodeType != 1";
if(oExpr.quotTAG){sCheckTag="oEl.tagName != "+oExpr.quotTAG
}var sTmpFunc="(function(oBase"+(i==0?", oOptions) { var bStop = false; var aRet = [];":") {");
if(oExpr.nth){sPush="if (isNth_dontShrink(oEl, "+(oExpr.quotTAG?oExpr.quotTAG:"false")+","+oExpr.nth[0]+","+oExpr.nth[1]+',"'+(oExpr.nth[2]=="nth-of-type"?"previousSibling":"nextSibling")+'")) {'+sPush+"}"
}switch(oPart.rel){case" ":if(oExpr.quotID){sTmpFunc+="var oEl = oDocument_dontShrink.getElementById("+oExpr.quotID+");var oCandi = oEl;for (; oCandi; oCandi = (oCandi.parentNode || oCandi._IE5_parentNode)) {if (oCandi == oBase) break;}if (!oCandi || "+sCheckTag+") return aRet;"+sPush
}else{sTmpFunc+="var aCandi = getChilds_dontShrink(oBase, "+(oExpr.quotTAG||'"*"')+", "+(oExpr.quotCLASS||"null")+");for (var i = 0, oEl; oEl = aCandi[i]; i++) {"+(oExpr.quotCLASS?"if ("+sCheckTag+") continue;":"")+sPush+"}"
}break;
case">":if(oExpr.quotID){sTmpFunc+="var oEl = oDocument_dontShrink.getElementById("+oExpr.quotID+");if ((oEl.parentNode || oEl._IE5_parentNode) != oBase || "+sCheckTag+") return aRet;"+sPush
}else{sTmpFunc+="for (var oEl = oBase.firstChild; oEl; oEl = oEl.nextSibling) {if ("+sCheckTag+") { continue; }"+sPush+"}"
}break;
case"+":if(oExpr.quotID){sTmpFunc+="var oEl = oDocument_dontShrink.getElementById("+oExpr.quotID+");var oPrev;for (oPrev = oEl.previousSibling; oPrev; oPrev = oPrev.previousSibling) { if (oPrev.nodeType == 1) break; }if (!oPrev || oPrev != oBase || "+sCheckTag+") return aRet;"+sPush
}else{sTmpFunc+="for (var oEl = oBase.nextSibling; oEl; oEl = oEl.nextSibling) { if (oEl.nodeType == 1) break; }if (!oEl || "+sCheckTag+") { return aRet; }"+sPush
}break;
case"~":if(oExpr.quotID){sTmpFunc+="var oEl = oDocument_dontShrink.getElementById("+oExpr.quotID+");var oCandi = oEl;for (; oCandi; oCandi = oCandi.previousSibling) { if (oCandi == oBase) break; }if (!oCandi || "+sCheckTag+") return aRet;"+sPush
}else{sTmpFunc+="for (var oEl = oBase.nextSibling; oEl; oEl = oEl.nextSibling) {if ("+sCheckTag+") { continue; }if (!markElement_dontShrink(oEl, "+i+")) { break; }"+sPush+"}"
}break;
case"!":if(oExpr.quotID){sTmpFunc+="var oEl = oDocument_dontShrink.getElementById("+oExpr.quotID+");for (; oBase; oBase = (oBase.parentNode || oBase._IE5_parentNode)) { if (oBase == oEl) break; }if (!oBase || "+sCheckTag+") return aRet;"+sPush
}else{sTmpFunc+="for (var oEl = (oBase.parentNode || oBase._IE5_parentNode); oEl; oEl = (oEl.parentNode || oEl._IE5_parentNode)) {if ("+sCheckTag+") { continue; }"+sPush+"}"
}break;
case"!>":if(oExpr.quotID){sTmpFunc+="var oEl = oDocument_dontShrink.getElementById("+oExpr.quotID+");var oRel = (oBase.parentNode || oBase._IE5_parentNode);if (!oRel || oEl != oRel || ("+sCheckTag+")) return aRet;"+sPush
}else{sTmpFunc+="var oEl = (oBase.parentNode || oBase._IE5_parentNode);if (!oEl || "+sCheckTag+") { return aRet; }"+sPush
}break;
case"!+":if(oExpr.quotID){sTmpFunc+="var oEl = oDocument_dontShrink.getElementById("+oExpr.quotID+");var oRel;for (oRel = oBase.previousSibling; oRel; oRel = oRel.previousSibling) { if (oRel.nodeType == 1) break; }if (!oRel || oEl != oRel || ("+sCheckTag+")) return aRet;"+sPush
}else{sTmpFunc+="for (oEl = oBase.previousSibling; oEl; oEl = oEl.previousSibling) { if (oEl.nodeType == 1) break; }if (!oEl || "+sCheckTag+") { return aRet; }"+sPush
}break;
case"!~":if(oExpr.quotID){sTmpFunc+="var oEl = oDocument_dontShrink.getElementById("+oExpr.quotID+");var oRel;for (oRel = oBase.previousSibling; oRel; oRel = oRel.previousSibling) { if (oRel.nodeType != 1) { continue; }if (oRel == oEl) { break; }}if (!oRel || ("+sCheckTag+")) return aRet;"+sPush
}else{sTmpFunc+="for (oEl = oBase.previousSibling; oEl; oEl = oEl.previousSibling) {if ("+sCheckTag+") { continue; }if (!markElement_dontShrink(oEl, "+i+")) { break; }"+sPush+"}"
}break
}sTmpFunc+=(i==0?"return aRet;":"")+"})";
sFunc=sTmpFunc
}eval("var fpCompiled = "+sFunc+";");
return fpCompiled
};
var parseQuery=function(sQuery){var sCacheKey=sQuery;
var fpSelf=arguments.callee;
var fpFunction=fpSelf._cache[sCacheKey];
if(!fpFunction){sQuery=backupKeys(sQuery);
var aParts=splitToParts(sQuery);
fpFunction=fpSelf._cache[sCacheKey]=compileParts(aParts);
fpFunction.depth=aParts.length
}return fpFunction
};
parseQuery._cache={};
var parseTestQuery=function(sQuery){var fpSelf=arguments.callee;
var aSplitQuery=backupKeys(sQuery).split(/\s*,\s*/);
var aResult=[];
var nLen=aSplitQuery.length;
var aFunc=[];
for(var i=0;
i<nLen;
i++){aFunc.push((function(sQuery){var sCacheKey=sQuery;
var fpFunction=fpSelf._cache[sCacheKey];
if(!fpFunction){sQuery=backupKeys(sQuery);
var oExpr=getExpression(sQuery);
eval("fpFunction = function(oEl) { "+oExpr.defines+"return ("+oExpr.returnsID+oExpr.returnsTAG+oExpr.returns+"); };")
}return fpFunction
})(restoreKeys(aSplitQuery[i])))
}return aFunc
};
parseTestQuery._cache={};
var distinct=function(aList){var aDistinct=[];
var oDummy={};
for(var i=0,oEl;
oEl=aList[i];
i++){var nUID=getUID(oEl);
if(oDummy[nUID]){continue
}aDistinct.push(oEl);
oDummy[nUID]=true
}return aDistinct
};
var markElement_dontShrink=function(oEl,nDepth){var nUID=getUID(oEl);
if(cssquery._marked[nDepth][nUID]){return false
}cssquery._marked[nDepth][nUID]=true;
return true
};
var oResultCache=null;
var bUseResultCache=false;
var cssquery=function(sQuery,oParent,oOptions){if(typeof sQuery=="object"){var oResult={};
for(var k in sQuery){oResult[k]=arguments.callee(sQuery[k],oParent,oOptions)
}return oResult
}cost=0;
var executeTime=new Date().getTime();
var aRet;
for(var r=0,rp=debugOption.repeat;
r<rp;
r++){aRet=(function(sQuery,oParent,oOptions){oOptions=oOptions||{};
if(!oParent){oParent=document
}oDocument_dontShrink=oParent.ownerDocument||oParent.document||oParent;
if(/\bMSIE\s([0-9]+(\.[0-9]+)*);/.test(navigator.userAgent)&&parseFloat(RegExp.$1)<6){try{oDocument_dontShrink.location
}catch(e){oDocument_dontShrink=document
}oDocument_dontShrink.firstChild=oDocument_dontShrink.getElementsByTagName("html")[0];
oDocument_dontShrink.firstChild._IE5_parentNode=oDocument_dontShrink
}bXMLDocument=(typeof XMLDocument!="undefined")?(oDocument_dontShrink.constructor===XMLDocument):(!oDocument_dontShrink.location);
getUID=bXMLDocument?getUID4XML:getUID4HTML;
clearKeys();
var aSplitQuery=backupKeys(sQuery).split(/\s*,\s*/);
var aResult=[];
var nLen=aSplitQuery.length;
for(var i=0;
i<nLen;
i++){aSplitQuery[i]=restoreKeys(aSplitQuery[i])
}for(var i=0;
i<nLen;
i++){var sSingleQuery=aSplitQuery[i];
var aSingleQueryResult=null;
var sResultCacheKey=sSingleQuery+(oOptions.single?"_single":"");
var aCache=bUseResultCache?oResultCache[sResultCacheKey]:null;
if(aCache){for(var j=0,oCache;
oCache=aCache[j];
j++){if(oCache.parent==oParent){aSingleQueryResult=oCache.result;
break
}}}if(!aSingleQueryResult){var fpFunction=parseQuery(sSingleQuery);
cssquery._marked=[];
for(var j=0,nDepth=fpFunction.depth;
j<nDepth;
j++){cssquery._marked.push({})
}aSingleQueryResult=distinct(fpFunction(oParent,oOptions));
if(bUseResultCache){if(!(oResultCache[sResultCacheKey] instanceof Array)){oResultCache[sResultCacheKey]=[]
}oResultCache[sResultCacheKey].push({parent:oParent,result:aSingleQueryResult})
}}aResult=aResult.concat(aSingleQueryResult)
}unsetNodeIndexes();
return aResult
})(sQuery,oParent,oOptions)
}executeTime=new Date().getTime()-executeTime;
if(debugOption.callback){debugOption.callback(sQuery,cost,executeTime)
}return aRet
};
cssquery.test=function(oEl,sQuery){clearKeys();
var aFunc=parseTestQuery(sQuery);
for(var i=0,nLen=aFunc.length;
i<nLen;
i++){if(aFunc[i](oEl)){return true
}}return false
};
cssquery.useCache=function(bFlag){if(typeof bFlag!="undefined"){bUseResultCache=bFlag;
cssquery.clearCache()
}return bUseResultCache
};
cssquery.clearCache=function(){oResultCache={}
};
cssquery.getSingle=function(sQuery,oParent){return cssquery(sQuery,oParent,{single:true})[0]||null
};
cssquery.xpath=function(sXPath,oParent){var sXPath=sXPath.replace(/\/(\w+)(\[([0-9]+)\])?/g,function(_1,sTag,_2,sTh){sTh=sTh||"1";
return">"+sTag+":nth-of-type("+sTh+")"
});
return cssquery(sXPath,oParent)
};
cssquery.debug=function(fpCallback,nRepeat){debugOption.callback=fpCallback;
debugOption.repeat=nRepeat||1
};
cssquery.safeHTML=function(bFlag){var bIE=/MSIE/.test(window.navigator.userAgent);
if(arguments.length>0){safeHTML=bFlag&&bIE
}return safeHTML||!bIE
};
cssquery.version=sVersion;
cssquery.release=function(){if(/MSIE/.test(window.navigator.userAgent)){delete validUID;
validUID={};
if(bUseResultCache){cssquery.clearCache()
}}};
cssquery._getCacheInfo=function(){return{uidCache:validUID,eleCache:oResultCache}
};
cssquery._resetUID=function(){UID=0
};
return cssquery
})();
jindo.$Agent=function(){var cl=arguments.callee;
var cc=cl._cached;
if(cc){return cc
}if(!(this instanceof cl)){return new cl
}if(!cc){cl._cached=this
}this._navigator=navigator
};
jindo.$Agent.prototype.navigator=function(){var info=new Object;
var ver=-1;
var u=this._navigator.userAgent;
var v=this._navigator.vendor||"";
function f(s,h){return((h||"").indexOf(s)>-1)
}info.getName=function(){var name="";
for(x in info){if(typeof info[x]=="boolean"&&info[x]){name=x
}}return name
};
info.webkit=f("WebKit",u);
info.opera=(typeof window.opera!="undefined")||f("Opera",u);
info.ie=!info.opera&&f("MSIE",u);
info.chrome=info.webkit&&f("Chrome",u);
info.safari=info.webkit&&!info.chrome&&f("Apple",v);
info.firefox=f("Firefox",u);
info.mozilla=f("Gecko",u)&&!info.safari&&!info.chrome&&!info.firefox;
info.camino=f("Camino",v);
info.netscape=f("Netscape",u);
info.omniweb=f("OmniWeb",u);
info.icab=f("iCab",v);
info.konqueror=f("KDE",v);
try{if(info.ie){ver=u.match(/(?:MSIE) ([0-9.]+)/)[1]
}else{if(info.firefox||info.opera||info.omniweb){ver=u.match(/(?:Firefox|Opera|OmniWeb)\/([0-9.]+)/)[1]
}else{if(info.mozilla){ver=u.match(/rv:([0-9.]+)/)[1]
}else{if(info.safari){ver=parseFloat(u.match(/Safari\/([0-9.]+)/)[1]);
if(ver==100){ver=1.1
}else{ver=[1,1.2,-1,1.3,2,3][Math.floor(ver/100)]
}}else{if(info.icab){ver=u.match(/iCab[ \/]([0-9.]+)/)[1]
}else{if(info.chrome){ver=u.match(/Chrome[ \/]([0-9.]+)/)[1]
}}}}}}info.version=parseFloat(ver);
if(isNaN(info.version)){info.version=-1
}}catch(e){info.version=-1
}this.navigator=function(){return info
};
return info
};
jindo.$Agent.prototype.os=function(){var info=new Object;
var u=this._navigator.userAgent;
var p=this._navigator.platform;
var f=function(s,h){return(h.indexOf(s)>-1)
};
info.getName=function(){var name="";
for(x in info){if(typeof info[x]=="boolean"&&info[x]){name=x
}}return name
};
info.win=f("Win",p);
info.mac=f("Mac",p);
info.linux=f("Linux",p);
info.win2000=info.win&&(f("NT 5.0",u)||f("2000",u));
info.winxp=info.win&&f("NT 5.1",u);
info.xpsp2=info.winxp&&f("SV1",u);
info.vista=info.win&&f("NT 6.0",u);
info.win7=info.win&&f("NT 6.1",u);
this.os=function(){return info
};
return info
};
jindo.$Agent.prototype.flash=function(){var info=new Object;
var p=this._navigator.plugins;
var m=this._navigator.mimeTypes;
var f=null;
info.installed=false;
info.version=-1;
if(typeof p!="undefined"&&p.length){f=p["Shockwave Flash"];
if(f){info.installed=true;
if(f.description){info.version=parseFloat(f.description.match(/[0-9.]+/)[0])
}}if(p["Shockwave Flash 2.0"]){info.installed=true;
info.version=2
}}else{if(typeof m!="undefined"&&m.length){f=m["application/x-shockwave-flash"];
info.installed=(f&&f.enabledPlugin)
}else{for(var i=10;
i>1;
i--){try{f=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+i);
info.installed=true;
info.version=i;
break
}catch(e){}}}}this.flash=function(){return info
};
this.info=this.flash;
return info
};
jindo.$Agent.prototype.silverlight=function(){var info=new Object;
var p=this._navigator.plugins;
var s=null;
info.installed=false;
info.version=-1;
if(typeof p!="undefined"&&p.length){s=p["Silverlight Plug-In"];
if(s){info.installed=true;
info.version=parseInt(s.description.split(".")[0]);
if(s.description=="1.0.30226.2"){info.version=2
}}}else{try{s=new ActiveXObject("AgControl.AgControl");
info.installed=true;
if(s.isVersionSupported("3.0")){info.version=3
}else{if(s.isVersionSupported("2.0")){info.version=2
}else{if(s.isVersionSupported("1.0")){info.version=1
}}}}catch(e){}}this.silverlight=function(){return info
};
return info
};
jindo.$A=function(array){var cl=arguments.callee;
if(typeof array=="undefined"){array=[]
}if(array instanceof cl){return array
}if(!(this instanceof cl)){return new cl(array)
}this._array=[];
for(var i=0;
i<array.length;
i++){this._array[this._array.length]=array[i]
}};
jindo.$A.prototype.toString=function(){return this._array.toString()
};
jindo.$A.prototype.length=function(nLen,oValue){if(typeof nLen=="number"){var l=this._array.length;
this._array.length=nLen;
if(typeof oValue!="undefined"){for(var i=l;
i<nLen;
i++){this._array[i]=oValue
}}return this
}else{return this._array.length
}};
jindo.$A.prototype.has=function(oValue){return(this.indexOf(oValue)>-1)
};
jindo.$A.prototype.indexOf=function(oValue){if(typeof this._array.indexOf!="undefined"){return this._array.indexOf(oValue)
}for(var i=0;
i<this._array.length;
i++){if(this._array[i]==oValue){return i
}}return -1
};
jindo.$A.prototype.$value=function(){return this._array
};
jindo.$A.prototype.push=function(oValue1){return this._array.push.apply(this._array,jindo.$A(arguments).$value())
};
jindo.$A.prototype.pop=function(){return this._array.pop()
};
jindo.$A.prototype.shift=function(){return this._array.shift()
};
jindo.$A.prototype.unshift=function(oValue1){this._array.unshift.apply(this._array,jindo.$A(arguments).$value());
return this._array.length
};
jindo.$A.prototype.forEach=function(fCallback,oThis){var arr=this._array;
var errBreak=this.constructor.Break;
var errContinue=this.constructor.Continue;
function f(v,i,a){try{fCallback.call(oThis,v,i,a)
}catch(e){if(!(e instanceof errContinue)){throw e
}}}if(typeof this._array.forEach=="function"){try{this._array.forEach(f)
}catch(e){if(!(e instanceof errBreak)){throw e
}}return this
}for(var i=0;
i<arr.length;
i++){try{f(arr[i],i,arr)
}catch(e){if(e instanceof errBreak){break
}throw e
}}return this
};
jindo.$A.prototype.slice=function(nStart,nEnd){var a=this._array.slice.call(this._array,nStart,nEnd);
return jindo.$A(a)
};
jindo.$A.prototype.splice=function(nIndex,nHowMany){var a=this._array.splice.apply(this._array,arguments);
return jindo.$A(a)
};
jindo.$A.prototype.shuffle=function(){this._array.sort(function(a,b){return Math.random()>Math.random()?1:-1
});
return this
};
jindo.$A.prototype.reverse=function(){this._array.reverse();
return this
};
jindo.$A.prototype.empty=function(){return this.length(0)
};
jindo.$A.Break=function(){if(!(this instanceof arguments.callee)){throw new arguments.callee
}};
jindo.$A.Continue=function(){if(!(this instanceof arguments.callee)){throw new arguments.callee
}};
jindo.$A.prototype.map=function(fCallback,oThis){var arr=this._array;
var errBreak=this.constructor.Break;
var errContinue=this.constructor.Continue;
function f(v,i,a){try{return fCallback.call(oThis,v,i,a)
}catch(e){if(e instanceof errContinue){return v
}else{throw e
}}}if(typeof this._array.map=="function"){try{this._array=this._array.map(f)
}catch(e){if(!(e instanceof errBreak)){throw e
}}return this
}for(var i=0;
i<this._array.length;
i++){try{arr[i]=f(arr[i],i,arr)
}catch(e){if(e instanceof errBreak){break
}throw e
}}return this
};
jindo.$A.prototype.filter=function(fCallback,oThis){var ar=new Array;
this.forEach(function(v,i,a){if(fCallback.call(oThis,v,i,a)===true){ar[ar.length]=v
}});
return jindo.$A(ar)
};
jindo.$A.prototype.every=function(fCallback,oThis){if(typeof this._array.every!="undefined"){return this._array.every(fCallback,oThis)
}var result=true;
this.forEach(function(v,i,a){if(fCallback.call(oThis,v,i,a)===false){result=false;
jindo.$A.Break()
}});
return result
};
jindo.$A.prototype.some=function(fCallback,oThis){if(typeof this._array.some!="undefined"){return this._array.some(fCallback,oThis)
}var result=false;
this.forEach(function(v,i,a){if(fCallback.call(oThis,v,i,a)===true){result=true;
jindo.$A.Break()
}});
return result
};
jindo.$A.prototype.refuse=function(oValue1){var a=jindo.$A(arguments);
return this.filter(function(v,i){return !a.has(v)
})
};
jindo.$A.prototype.unique=function(){var a=this._array,b=[],l=a.length;
var i,j;
for(i=0;
i<l;
i++){for(j=0;
j<b.length;
j++){if(a[i]==b[j]){break
}}if(j>=b.length){b[j]=a[i]
}}this._array=b;
return this
};
jindo.$Ajax=function(url,option){var cl=arguments.callee;
if(!(this instanceof cl)){return new cl(url,option)
}function _getXHR(){if(window.XMLHttpRequest){return new XMLHttpRequest()
}else{if(ActiveXObject){try{return new ActiveXObject("MSXML2.XMLHTTP")
}catch(e){return new ActiveXObject("Microsoft.XMLHTTP")
}return null
}}}var loc=location.toString();
var domain="";
try{domain=loc.match(/^https?:\/\/([a-z0-9_\-\.]+)/i)[1]
}catch(e){}this._status=0;
this._url=url;
this._options=new Object;
this._headers=new Object;
this._options={type:"xhr",method:"post",proxy:"",timeout:0,onload:function(req){},onerror:null,ontimeout:function(req){},jsonp_charset:"utf-8",callbackid:"",callbackname:"",sendheader:true,async:true};
this.option(option);
if(jindo.$Ajax.CONFIG){this.option(jindo.$Ajax.CONFIG)
}var _opt=this._options;
_opt.type=_opt.type.toLowerCase();
_opt.method=_opt.method.toLowerCase();
if(typeof window.__jindo2_callback=="undefined"){window.__jindo2_callback=new Array()
}switch(_opt.type){case"get":case"post":_opt.method=_opt.type;
_opt.type="xhr";
case"xhr":this._request=_getXHR();
break;
case"flash":if(!jindo.$Ajax.SWFRequest){throw Error("Require $Ajax.SWFRequest")
}this._request=new jindo.$Ajax.SWFRequest();
break;
case"jsonp":if(!jindo.$Ajax.JSONPRequest){throw Error("Require $Ajax.JSONPRequest")
}_opt.method="get";
this._request=new jindo.$Ajax.JSONPRequest();
this._request.charset=_opt.jsonp_charset;
this._request.callbackid=_opt.callbackid;
this._request.callbackname=_opt.callbackname;
break;
case"iframe":if(!jindo.$Ajax.FrameRequest){throw Error("Require $Ajax.FrameRequest")
}this._request=new jindo.$Ajax.FrameRequest();
this._request._proxy=_opt.proxy;
break
}};
jindo.$Ajax.prototype._onload=(function(isIE){if(isIE){return function(){var bSuccess=this._request.readyState==4&&this._request.status==200;
var oResult;
if(this._request.readyState==4){try{if(this._request.status!=200&&typeof this._options.onerror=="function"){if(!this._request.status==0){this._options.onerror(jindo.$Ajax.Response(this._request))
}}else{oResult=this._options.onload(jindo.$Ajax.Response(this._request))
}}finally{if(typeof this._oncompleted=="function"){this._oncompleted(bSuccess,oResult)
}this.abort();
delete this._request.onreadystatechange;
try{delete this._request.onload
}catch(e){this._request.onload=undefined
}}}}
}else{return function(){var bSuccess=this._request.readyState==4&&this._request.status==200;
var oResult;
if(this._request.readyState==4){try{if(this._request.status!=200&&typeof this._options.onerror=="function"){this._options.onerror(jindo.$Ajax.Response(this._request))
}else{oResult=this._options.onload(jindo.$Ajax.Response(this._request))
}}finally{this._status--;
if(typeof this._oncompleted=="function"){this._oncompleted(bSuccess,oResult)
}}}}
}})(/MSIE/.test(window.navigator.userAgent));
jindo.$Ajax.prototype.request=function(oData){this._status++;
var t=this;
var req=this._request;
var opt=this._options;
var data,v,a=[],data="";
var _timer=null;
var url=this._url;
if(typeof oData=="undefined"||!oData){data=null
}else{for(var k in oData){v=oData[k];
if(typeof v=="function"){v=v()
}if(v instanceof Array||v instanceof jindo.$A){jindo.$A(v).forEach(function(value,index,array){a[a.length]=k+"="+encodeURIComponent(value)
})
}else{a[a.length]=k+"="+encodeURIComponent(v)
}}data=a.join("&")
}if(opt.type.toUpperCase()=="XHR"&&opt.method.toUpperCase()=="GET"){if(url.indexOf("?")==-1){url+="?"
}else{url+="&"
}url+=data;
data=null
}req.open(opt.method.toUpperCase(),url,opt.async);
if(opt.sendheader){req.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8");
req.setRequestHeader("charset","utf-8");
for(var x in this._headers){if(typeof this._headers[x]=="function"){continue
}req.setRequestHeader(x,String(this._headers[x]))
}}if(req.addEventListener){if(this._loadFunc){req.removeEventListener("load",this._loadFunc,false)
}this._loadFunc=function(rq){clearTimeout(_timer);
t._onload(rq)
};
req.addEventListener("load",this._loadFunc,false)
}else{if(typeof req.onload!="undefined"){req.onload=function(rq){clearTimeout(_timer);
t._onload(rq)
}
}else{req.onreadystatechange=function(rq){clearTimeout(_timer);
t._onload(rq)
}
}}if(opt.timeout>0){_timer=setTimeout(function(){try{req.abort()
}catch(e){}opt.ontimeout(req);
if(typeof this._oncompleted=="function"){this._oncompleted(false)
}},opt.timeout*1000)
}req.send(data);
return this
};
jindo.$Ajax.prototype.isIdle=function(){return this._status==0
};
jindo.$Ajax.prototype.abort=function(){try{this._request.abort()
}finally{this._status--
}return this
};
jindo.$Ajax.prototype.option=function(name,value){if(typeof name=="undefined"){return""
}if(typeof name=="string"){if(typeof value=="undefined"){return this._options[name]
}this._options[name]=value;
return this
}try{for(var x in name){this._options[x]=name[x]
}}catch(e){}return this
};
jindo.$Ajax.prototype.header=function(name,value){if(typeof name=="undefined"){return""
}if(typeof name=="string"){if(typeof value=="undefined"){return this._headers[name]
}this._headers[name]=value;
return this
}try{for(var x in name){this._headers[x]=name[x]
}}catch(e){}return this
};
jindo.$Ajax.Response=function(req){if(this===jindo.$Ajax){return new jindo.$Ajax.Response(req)
}this._response=req
};
jindo.$Ajax.Response.prototype.xml=function(){return this._response.responseXML
};
jindo.$Ajax.Response.prototype.text=function(){return this._response.responseText
};
jindo.$Ajax.Response.prototype.status=function(){return this._response.status
};
jindo.$Ajax.Response.prototype.readyState=function(){return this._response.readyState
};
jindo.$Ajax.Response.prototype.json=function(){if(this._response.responseJSON){return this._response.responseJSON
}else{if(this._response.responseText){try{return new Function("return "+this._response.responseText)()
}catch(e){return{}
}}}return{}
};
jindo.$Ajax.Response.prototype.header=function(name){if(typeof name=="string"){return this._response.getResponseHeader(name)
}return this._response.getAllResponseHeaders()
};
if(typeof window!="undefined"){for(prop in jindo){window[prop]=jindo[prop]
}}jindo.$Ajax.RequestBase=jindo.$Class({_headers:{},_respHeaders:{},_respHeaderString:"",callbackid:"",callbackname:"",responseXML:null,responseJSON:null,responseText:"",status:404,readyState:0,$init:function(){},onload:function(){},abort:function(){},open:function(){},send:function(){},setRequestHeader:function(sName,sValue){this._headers[sName]=sValue
},getResponseHeader:function(sName){return this._respHeaders[sName]||""
},getAllResponseHeaders:function(){return this._respHeaderString
},_getCallbackInfo:function(){var id="";
if(this.callbackid!=""){var idx=0;
do{id="$"+this.callbackid+"_"+idx;
idx++
}while(window.__jindo2_callback[id])
}else{do{id="$"+Math.floor(Math.random()*10000)
}while(window.__jindo2_callback[id])
}if(this.callbackname==""){this.callbackname="_callback"
}return{callbackname:this.callbackname,id:id,name:"window.__jindo2_callback."+id}
}});
jindo.$Ajax.JSONPRequest=jindo.$Class({charset:"utf-8",_script:null,_onerror:null,_callback:function(data){if(this._onerror){clearTimeout(this._onerror);
this._onerror=null
}var self=this;
this.responseJSON=data;
this.onload(this);
setTimeout(function(){self.abort()
},10)
},abort:function(){if(this._script){try{this._script.parentNode.removeChild(this._script)
}catch(e){}}},open:function(method,url){this.responseJSON=null;
this._url=url
},send:function(data){var t=this;
var info=this._getCallbackInfo();
var head=document.getElementsByTagName("head")[0];
this._script=jindo.$("<script>");
this._script.type="text/javascript";
this._script.charset=this.charset;
if(head){head.appendChild(this._script)
}else{if(document.body){document.body.appendChild(this._script)
}}window.__jindo2_callback[info.id]=function(data){try{t.readyState=4;
t.status=200;
t._callback(data)
}finally{delete window.__jindo2_callback[info.id]
}};
var agent=jindo.$Agent();
if(agent.navigator().ie||agent.navigator().opera){this._script.onreadystatechange=function(){if(this.readyState=="loaded"){if(!t.responseJSON){t.readyState=4;
t.status=500;
t._onerror=setTimeout(function(){t._callback(null)
},200)
}this.onreadystatechange=null
}}
}else{this._script.onload=function(){if(!t.responseJSON){t.readyState=4;
t.status=500;
t._onerror=setTimeout(function(){t._callback(null)
},200)
}this.onload=null;
this.onerror=null
};
this._script.onerror=function(){if(!t.responseJSON){t.readyState=4;
t.status=404;
t._onerror=setTimeout(function(){t._callback(null)
},200)
}this.onerror=null;
this.onload=null
}
}this._script.src=this._url+"?"+info.callbackname+"="+info.name+"&"+data
}}).extend(jindo.$Ajax.RequestBase);
jindo.$Ajax.SWFRequest=jindo.$Class({_callback:function(status,data,headers){this.readyState=4;
if((typeof status).toLowerCase()=="number"){this.status=status
}else{if(status==true){this.status=200
}}if(this.status==200){if(typeof data=="string"){try{this.responseText=decodeURIComponent(data);
if(!this.responseText||this.responseText==""){this.responseText=data
}}catch(e){}}if(typeof headers=="object"){this._respHeaders=headers
}}this.onload(this)
},open:function(method,url){var re=/https?:\/\/([a-z0-9_\-\.]+)/i;
this._url=url;
this._method=method
},send:function(data){this.responseXML=false;
this.responseText="";
var t=this;
var dat={};
var info=this._getCallbackInfo();
var swf=window.document[jindo.$Ajax.SWFRequest._tmpId];
function f(arg){switch(typeof arg){case"string":return'"'+arg.replace(/\"/g,'\\"')+'"';
break;
case"number":return arg;
break;
case"object":var ret="",arr=[];
if(arg instanceof Array){for(var i=0;
i<arg.length;
i++){arr[i]=f(arg[i])
}ret="["+arr.join(",")+"]"
}else{for(var x in arg){arr[arr.length]=f(x)+":"+f(arg[x])
}ret="{"+arr.join(",")+"}"
}return ret;
default:return'""'
}}data=(data||"").split("&");
for(var i=0;
i<data.length;
i++){pos=data[i].indexOf("=");
key=data[i].substring(0,pos);
val=data[i].substring(pos+1);
dat[key]=decodeURIComponent(val)
}window.__jindo2_callback[info.id]=function(success,data){try{t._callback(success,data)
}finally{delete window.__jindo2_callback[info.id]
}};
var oData={url:this._url,type:this._method,data:dat,charset:"UTF-8",callback:info.name,header_json:this._headers};
swf.requestViaFlash(f(oData))
}}).extend(jindo.$Ajax.RequestBase);
jindo.$Ajax.SWFRequest.write=function(swf_path){if(typeof swf_path=="undefined"){swf_path="./ajax.swf"
}jindo.$Ajax.SWFRequest._tmpId="tmpSwf"+(new Date).getMilliseconds()+Math.floor(Math.random()*100000);
document.write('<div style="position:absolute;top:-1000px;left:-1000px"><object id="'+jindo.$Ajax.SWFRequest._tmpId+'" width="1" height="1" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0"><param name="movie" value="'+swf_path+'"><param name = "allowScriptAccess" value = "always" /><embed name="'+jindo.$Ajax.SWFRequest._tmpId+'" src="'+swf_path+'" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" width="1" height="1" allowScriptAccess="always" swLiveConnect="true"></embed></object></div>')
};
jindo.$Ajax.FrameRequest=jindo.$Class({_frame:null,_proxy:"",_domain:"",_callback:function(id,data,header){var self=this;
this.readyState=4;
this.status=200;
this.responseText=data;
this._respHeaderString=header;
header.replace(/^([\w\-]+)\s*:\s*(.+)$/m,function($0,$1,$2){self._respHeaders[$1]=$2
});
this.onload(this);
setTimeout(function(){self.abort()
},10)
},abort:function(){if(this._frame){try{this._frame.parentNode.removeChild(this._frame)
}catch(e){}}},open:function(method,url){var re=/https?:\/\/([a-z0-9_\-\.]+)/i;
var dom=document.location.toString().match(re);
this._method=method;
this._url=url;
this._remote=String(url).match(/(https?:\/\/[a-z0-9_\-\.]+)(:[0-9]+)?/i)[0];
this._frame=null;
this._domain=(dom[1]!=document.domain)?document.domain:""
},send:function(data){this.responseXML="";
this.responseText="";
var t=this;
var re=/https?:\/\/([a-z0-9_\-\.]+)/i;
var info=this._getCallbackInfo();
var url=this._remote+"/ajax_remote_callback.html?method="+this._method;
var header=new Array;
window.__jindo2_callback[info.id]=function(id,data,header){try{t._callback(id,data,header)
}finally{delete window.__jindo2_callback[info.id]
}};
for(var x in this._headers){header[header.length]="'"+x+"':'"+this._headers[x]+"'"
}header="{"+header.join(",")+"}";
url+="&id="+info.id;
url+="&header="+encodeURIComponent(header);
url+="&proxy="+encodeURIComponent(this._proxy);
url+="&domain="+this._domain;
url+="&url="+encodeURIComponent(this._url.replace(re,""));
url+="#"+encodeURIComponent(data);
var fr=this._frame=jindo.$("<iframe>");
fr.style.position="absolute";
fr.style.visibility="hidden";
fr.style.width="1px";
fr.style.height="1px";
var body=document.body||document.documentElement;
if(body.firstChild){body.insertBefore(fr,body.firstChild)
}else{body.appendChild(fr)
}fr.src=url
}}).extend(jindo.$Ajax.RequestBase);
jindo.$Ajax.Queue=function(option){var cl=arguments.callee;
if(!(this instanceof cl)){return new cl(option)
}this._options={async:false,useResultAsParam:false,stopOnFailure:false};
this.option(option);
this._queue=[]
};
jindo.$Ajax.Queue.prototype.option=function(name,value){if(typeof name=="undefined"){return""
}if(typeof name=="string"){if(typeof value=="undefined"){return this._options[name]
}this._options[name]=value;
return this
}try{for(var x in name){this._options[x]=name[x]
}}catch(e){}return this
};
jindo.$Ajax.Queue.prototype.add=function(oAjax,oParam){this._queue.push({obj:oAjax,param:oParam})
};
jindo.$Ajax.Queue.prototype.request=function(){if(this.option("async")){this._requestAsync()
}else{this._requestSync(0)
}};
jindo.$Ajax.Queue.prototype._requestSync=function(nIdx,oParam){var t=this;
if(this._queue.length>nIdx+1){this._queue[nIdx].obj._oncompleted=function(bSuccess,oResult){if(!t.option("stopOnFailure")||bSuccess){t._requestSync(nIdx+1,oResult)
}}
}var _oParam=this._queue[nIdx].param||{};
if(this.option("useResultAsParam")&&oParam){try{for(var x in oParam){if(typeof _oParam[x]=="undefined"){_oParam[x]=oParam[x]
}}}catch(e){}}this._queue[nIdx].obj.request(_oParam)
};
jindo.$Ajax.Queue.prototype._requestAsync=function(){for(var i=0;
i<this._queue.length;
i++){this._queue[i].obj.request(this._queue[i].param)
}};
jindo.$H=function(hashObject){var cl=arguments.callee;
if(typeof hashObject=="undefined"){hashObject=new Object
}if(hashObject instanceof cl){return hashObject
}if(!(this instanceof cl)){return new cl(hashObject)
}this._table={};
for(var k in hashObject){if(this._table[k]==hashObject[k]){continue
}this._table[k]=hashObject[k]
}};
jindo.$H.prototype.$value=function(){return this._table
};
jindo.$H.prototype.$=function(key,value){if(typeof value=="undefined"){return this._table[key]
}this._table[key]=value;
return this
};
jindo.$H.prototype.length=function(){var i=0;
for(var k in this._table){if(typeof Object.prototype[k]!="undeifned"&&Object.prototype[k]===this._table[k]){continue
}i++
}return i
};
jindo.$H.prototype.forEach=function(callback,thisObject){var t=this._table;
var h=this.constructor;
for(var k in t){if(!t.propertyIsEnumerable(k)){continue
}try{callback.call(thisObject,t[k],k,t)
}catch(e){if(e instanceof h.Break){break
}if(e instanceof h.Continue){continue
}throw e
}}return this
};
jindo.$H.prototype.filter=function(callback,thisObject){var h=jindo.$H();
this.forEach(function(v,k,o){if(callback.call(thisObject,v,k,o)===true){h.add(k,v)
}});
return h
};
jindo.$H.prototype.map=function(callback,thisObject){var t=this._table;
this.forEach(function(v,k,o){t[k]=callback.call(thisObject,v,k,o)
});
return this
};
jindo.$H.prototype.add=function(key,value){this._table[key]=value;
return this
};
jindo.$H.prototype.remove=function(key){if(typeof this._table[key]=="undefined"){return null
}var val=this._table[key];
delete this._table[key];
return val
};
jindo.$H.prototype.search=function(value){var result=false;
this.forEach(function(v,k,o){if(v===value){result=k;
jindo.$H.Break()
}});
return result
};
jindo.$H.prototype.hasKey=function(key){var result=false;
return(typeof this._table[key]!="undefined")
};
jindo.$H.prototype.hasValue=function(value){return(this.search(value)!==false)
};
jindo.$H.prototype.sort=function(){var o=new Object;
var a=this.values();
var k=false;
a.sort();
for(var i=0;
i<a.length;
i++){k=this.search(a[i]);
o[k]=a[i];
delete this._table[k]
}this._table=o;
return this
};
jindo.$H.prototype.ksort=function(){var o=new Object;
var a=this.keys();
a.sort();
for(var i=0;
i<a.length;
i++){o[a[i]]=this._table[a[i]]
}this._table=o;
return this
};
jindo.$H.prototype.keys=function(){var keys=new Array;
for(var k in this._table){keys.push(k)
}return keys
};
jindo.$H.prototype.values=function(){var values=[];
for(var k in this._table){values[values.length]=this._table[k]
}return values
};
jindo.$H.prototype.toQueryString=function(){var buf=[],val=null,idx=0;
for(var k in this._table){if(typeof (val=this._table[k])=="object"&&val.constructor==Array){for(i=0;
i<val.length;
i++){buf[buf.length]=encodeURIComponent(k)+"[]="+encodeURIComponent(val[i]+"")
}}else{buf[buf.length]=encodeURIComponent(k)+"="+encodeURIComponent(this._table[k]+"")
}}return buf.join("&")
};
jindo.$H.prototype.empty=function(){var keys=this.keys();
for(var i=0;
i<keys.length;
i++){delete this._table[keys[i]]
}return this
};
jindo.$H.Break=function(){if(!(this instanceof arguments.callee)){throw new arguments.callee
}};
jindo.$H.Continue=function(){if(!(this instanceof arguments.callee)){throw new arguments.callee
}};
jindo.$Json=function(sObject){var cl=arguments.callee;
if(typeof sObject=="undefined"){sObject=new Object
}if(sObject instanceof cl){return sObject
}if(!(this instanceof cl)){return new cl(sObject)
}if(typeof sObject=="string"){try{sObject=new Function("return "+sObject)()
}catch(e){sObject=new Object
}}this._object=sObject
};
jindo.$Json.fromXML=function(sXML){var o=new Object;
var re=/\s*<(\/?[\w:\-]+)((?:\s+[\w:\-]+\s*=\s*(?:"(?:\\"|[^"])*"|'(?:\\'|[^'])*'))*)\s*((?:\/>)|(?:><\/\1>|\s*))|\s*<!\[CDATA\[([\w\W]*?)\]\]>\s*|\s*>?([^<]*)/ig;
var re2=/^[0-9]+(?:\.[0-9]+)?$/;
var ec={"&amp;":"&","&nbsp;":" ","&quot;":'"',"&lt;":"<","&gt;":">"};
var fg={tags:["/"],stack:[o]};
var es=function(s){return s.replace(/&[a-z]+;/g,function(m){return(typeof ec[m]=="string")?ec[m]:m
})
};
var at=function(s,c){s.replace(/([\w\:\-]+)\s*=\s*(?:"((?:\\"|[^"])*)"|'((?:\\'|[^'])*)')/g,function($0,$1,$2,$3){c[$1]=es(($2?$2.replace(/\\"/g,'"'):undefined)||($3?$3.replace(/\\'/g,"'"):undefined))
})
};
var em=function(o){for(var x in o){if(Object.prototype[x]){continue
}return false
}return true
};
var cb=function($0,$1,$2,$3,$4,$5){var cur,cdata="";
var idx=fg.stack.length-1;
if(typeof $1=="string"&&$1){if($1.substr(0,1)!="/"){var has_attr=(typeof $2=="string"&&$2);
var closed=(typeof $3=="string"&&$3);
var newobj=(!has_attr&&closed)?"":{};
cur=fg.stack[idx];
if(typeof cur[$1]=="undefined"){cur[$1]=newobj;
cur=fg.stack[idx+1]=cur[$1]
}else{if(cur[$1] instanceof Array){var len=cur[$1].length;
cur[$1][len]=newobj;
cur=fg.stack[idx+1]=cur[$1][len]
}else{cur[$1]=[cur[$1],newobj];
cur=fg.stack[idx+1]=cur[$1][1]
}}if(has_attr){at($2,cur)
}fg.tags[idx+1]=$1;
if(closed){fg.tags.length--;
fg.stack.length--
}}else{fg.tags.length--;
fg.stack.length--
}}else{if(typeof $4=="string"&&$4){cdata=$4
}else{if(typeof $5=="string"&&$5){cdata=es($5)
}}}if(cdata.length>0){var par=fg.stack[idx-1];
var tag=fg.tags[idx];
if(re2.test(cdata)){cdata=parseFloat(cdata)
}else{if(cdata=="true"||cdata=="false"){cdata=new Boolean(cdata)
}}if(typeof par=="undefined"){return 
}if(par[tag] instanceof Array){var o=par[tag];
if(typeof o[o.length-1]=="object"&&!em(o[o.length-1])){o[o.length-1].$cdata=cdata;
o[o.length-1].toString=function(){return cdata
}
}else{o[o.length-1]=cdata
}}else{if(typeof par[tag]=="object"&&!em(par[tag])){par[tag].$cdata=cdata;
par[tag].toString=function(){return cdata
}
}else{par[tag]=cdata
}}}};
sXML=sXML.replace(/<(\?|\!-)[^>]*>/g,"");
sXML.replace(re,cb);
return jindo.$Json(o)
};
jindo.$Json.prototype.get=function(sPath){var o=this._object;
var p=sPath.split("/");
var re=/^([\w:\-]+)\[([0-9]+)\]$/;
var stack=[[o]],cur=stack[0];
var len=p.length,c_len,idx,buf,j,e;
for(var i=0;
i<len;
i++){if(p[i]=="."||p[i]==""){continue
}if(p[i]==".."){stack.length--
}else{buf=[];
idx=-1;
c_len=cur.length;
if(c_len==0){return[]
}if(re.test(p[i])){idx=+RegExp.$2
}for(j=0;
j<c_len;
j++){e=cur[j][p[i]];
if(typeof e=="undefined"){continue
}if(e instanceof Array){if(idx>-1){if(idx<e.length){buf[buf.length]=e[idx]
}}else{buf=buf.concat(e)
}}else{if(idx==-1){buf[buf.length]=e
}}}stack[stack.length]=buf
}cur=stack[stack.length-1]
}return cur
};
jindo.$Json.prototype.toString=function(){var func={$:function($){if(typeof $=="object"&&$==null){return"null"
}if(typeof $=="undefined"){return'""'
}if(typeof $=="boolean"){return $?"true":"false"
}if(typeof $=="string"){return this.s($)
}if(typeof $=="number"){return $
}if($ instanceof Array){return this.a($)
}if($ instanceof Object){return this.o($)
}},s:function(s){var e={'"':'\\"',"\\":"\\\\","\n":"\\n","\r":"\\r","\t":"\\t"};
var c=function(m){return(typeof e[m]!="undefined")?e[m]:m
};
return'"'+s.replace(/[\\"'\n\r\t]/g,c)+'"'
},a:function(a){var s="[",c="",n=a.length;
for(var i=0;
i<n;
i++){if(typeof a[i]=="function"){continue
}s+=c+this.$(a[i]);
if(!c){c=","
}}return s+"]"
},o:function(o){var s="{",c="";
for(var x in o){if(typeof o[x]=="function"){continue
}s+=c+this.s(x)+":"+this.$(o[x]);
if(!c){c=","
}}return s+"}"
}};
return func.$(this._object)
};
jindo.$Json.prototype.toXML=function(){var f=function($,tag){var t=function(s,at){return"<"+tag+(at||"")+">"+s+"</"+tag+">"
};
switch(typeof $){case"undefined":case"null":return t("");
case"number":return t($);
case"string":if($.indexOf("<")<0){return t($.replace(/&/g,"&amp;"))
}else{return t("<![CDATA["+$+"]]>")
}case"boolean":return t(String($));
case"object":var ret="";
if($ instanceof Array){var len=$.length;
for(var i=0;
i<len;
i++){ret+=f($[i],tag)
}}else{var at="";
for(var x in $){if(x=="$cdata"||typeof $[x]=="function"){continue
}ret+=f($[x],x)
}if(tag){ret=t(ret,at)
}}return ret
}};
return f(this._object,"")
};
jindo.$Json.prototype.toObject=function(){return this._object
};
jindo.$Json.prototype.$value=jindo.$Json.prototype.toObject;
jindo.$Cookie=function(){var cl=arguments.callee;
var cached=cl._cached;
if(cl._cached){return cl._cached
}if(!(this instanceof cl)){return new cl
}if(typeof cl._cached=="undefined"){cl._cached=this
}};
jindo.$Cookie.prototype.keys=function(){var ca=document.cookie.split(";");
var re=/^\s+|\s+$/g;
var a=new Array;
for(var i=0;
i<ca.length;
i++){a[a.length]=ca[i].substr(0,ca[i].indexOf("=")).replace(re,"")
}return a
};
jindo.$Cookie.prototype.get=function(sName){var ca=document.cookie.split(/\s*;\s*/);
var re=new RegExp("^(\\s*"+sName+"\\s*=)");
for(var i=0;
i<ca.length;
i++){if(re.test(ca[i])){return unescape(ca[i].substr(RegExp.$1.length))
}}return null
};
jindo.$Cookie.prototype.set=function(sName,sValue,nDays,sDomain,sPath){var sExpire="";
if(typeof nDays=="number"){sExpire=";expires="+(new Date((new Date()).getTime()+nDays*1000*60*60*24)).toGMTString()
}if(typeof sDomain=="undefined"){sDomain=""
}if(typeof sPath=="undefined"){sPath="/"
}document.cookie=sName+"="+escape(sValue)+sExpire+"; path="+sPath+(sDomain?"; domain="+sDomain:"");
return this
};
jindo.$Cookie.prototype.remove=function(sName,sDomain,sPath){if(this.get(sName)!=null){this.set(sName,"",-1,sDomain,sPath)
}return this
};
jindo.$Element=function(el){var cl=arguments.callee;
if(el&&el instanceof cl){return el
}if(!jindo.$(el)){return null
}if(!(this instanceof cl)){return new cl(el)
}this._element=jindo.$(el);
this.tag=(typeof this._element.tagName!="undefined")?this._element.tagName.toLowerCase():""
};
jindo.$Element.prototype.$value=function(){return this._element
};
jindo.$Element.prototype.visible=function(bVisible){if(typeof bVisible!="undefined"){this[bVisible?"show":"hide"]();
return this
}return(this.css("display")!="none")
};
jindo.$Element.prototype.show=function(){var s=this._element.style;
var b="block";
var c={p:b,div:b,form:b,h1:b,h2:b,h3:b,h4:b,ol:b,ul:b,fieldset:b,td:"table-cell",th:"table-cell",li:"list-item",table:"table",thead:"table-header-group",tbody:"table-row-group",tfoot:"table-footer-group",tr:"table-row",col:"table-column",colgroup:"table-column-group",caption:"table-caption",dl:b,dt:b,dd:b};
try{if(typeof c[this.tag]=="string"){s.display=c[this.tag]
}else{s.display="inline"
}}catch(e){s.display="block"
}return this
};
jindo.$Element.prototype.hide=function(){this._element.style.display="none";
return this
};
jindo.$Element.prototype.toggle=function(){this[this.visible()?"hide":"show"]();
return this
};
jindo.$Element.prototype.opacity=function(value){var v,e=this._element,b=this.visible();
value=parseFloat(value);
if(!isNaN(value)){value=Math.max(Math.min(value,1),0);
if(typeof e.filters!="undefined"){value=Math.ceil(value*100);
if(typeof e.filters!="unknown"&&typeof e.filters.alpha!="undefined"){e.filters.alpha.opacity=value
}else{e.style.filter=(e.style.filter+" alpha(opacity="+value+")")
}}else{e.style.opacity=value
}return value
}if(typeof e.filters!="undefined"){v=(typeof e.filters.alpha=="undefined")?(b?100:0):e.filters.alpha.opacity;
v=v/100
}else{v=parseFloat(e.style.opacity);
if(isNaN(v)){v=b?1:0
}}return v
};
jindo.$Element.prototype.css=function(sName,sValue){var e=this._element;
if(sName=="opacity"){return typeof sValue=="undefined"?this.opacity():this.opacity(sValue)
}if(typeof sName=="string"){var view;
if(typeof sValue=="string"||typeof sValue=="number"){var obj=new Object;
obj[sName]=sValue;
sName=obj
}else{if(e.currentStyle){if(sName=="cssFloat"){sName="styleFloat"
}return e.currentStyle[sName]||e.style[sName]
}else{if(window.getComputedStyle){if(sName=="cssFloat"){sName="float"
}var d=e.ownerDocument||e.document||document;
return d.defaultView.getComputedStyle(e,null).getPropertyValue(sName.replace(/([A-Z])/g,"-$1").toLowerCase())||e.style[sName]
}else{if(sName=="cssFloat"&&/MSIE/.test(window.navigator.userAgent)){sName="styleFloat"
}return e.style[sName]
}}return null
}}if(typeof jindo.$H!="undefined"&&sName instanceof jindo.$H){sName=sName.$value()
}if(typeof sName=="object"){var v,type;
for(var k in sName){v=sName[k];
type=(typeof v);
if(type!="string"&&type!="number"){continue
}if(k=="opacity"){type=="undefined"?this.opacity():this.opacity(v);
continue
}if(k=="cssFloat"&&navigator.userAgent.indexOf("MSIE")>-1){k="styleFloat"
}try{e.style[k]=v
}catch(err){if(k=="cursor"&&v=="pointer"){e.style.cursor="hand"
}else{if(("#top#left#right#bottom#").indexOf(k+"#")>0&&(type=="number"||!isNaN(parseInt(v)))){e.style[k]=parseInt(v)+"px"
}}}}}return this
};
jindo.$Element.prototype.attr=function(sName,sValue){var e=this._element;
if(typeof sName=="string"){if(typeof sValue!="undefined"){var obj=new Object;
obj[sName]=sValue;
sName=obj
}else{if(sName=="class"||sName=="className"){return e.className
}return e.getAttribute(sName)
}}if(typeof jindo.$H!="undefined"&&sName instanceof jindo.$H){sName=sName.$value()
}if(typeof sName=="object"){for(var k in sName){if(/^on[a-zA-Z]+$/.test(k)){e[k]=sName[k];
continue
}if(typeof (sValue)!="undefined"&&sValue===null){e.removeAttribute(k)
}else{e.setAttribute(k,sName[k])
}}}return this
};
jindo.$Element.prototype.width=function(width){if(typeof width=="number"){var e=this._element;
e.style.width=width+"px";
if(e.offsetWidth!=width){e.style.width=(width*2-e.offsetWidth)+"px"
}return this
}return this._element.offsetWidth
};
jindo.$Element.prototype.height=function(height){if(typeof height=="number"){var e=this._element;
e.style.height=height+"px";
if(e.offsetHeight!=height){var height=(height*2-e.offsetHeight);
if(height>0){e.style.height=height+"px"
}}return this
}return this._element.offsetHeight
};
jindo.$Element.prototype.className=function(sClass){var e=this._element;
if(typeof sClass=="undefined"){return e.className
}e.className=sClass;
return this
};
jindo.$Element.prototype.hasClass=function(sClass){return(" "+this._element.className+" ").indexOf(" "+sClass+" ")>-1
};
jindo.$Element.prototype.addClass=function(sClass){var e=this._element;
if(this.hasClass(sClass)){return this
}e.className=(e.className+" "+sClass).replace(/^\s+/,"");
return this
};
jindo.$Element.prototype.removeClass=function(sClass){var e=this._element;
e.className=(" "+e.className+" ").replace(" "+sClass+" "," ").replace(/\s+$/,"").replace(/^\s+/,"");
return this
};
jindo.$Element.prototype.toggleClass=function(sClass,sClass2){sClass2=sClass2||"";
if(this.hasClass(sClass)){this.removeClass(sClass);
if(sClass2){this.addClass(sClass2)
}}else{this.addClass(sClass);
if(sClass2){this.removeClass(sClass2)
}}return this
};
jindo.$Element.prototype.text=function(sText){var prop=(typeof this._element.innerText!="undefined")?"innerText":"textContent";
if(this.tag=="textarea"||this.tag=="input"){prop="value"
}if(typeof sText=="string"){try{this._element[prop]=sText
}catch(e){return this.html(sText.replace(/&/g,"&amp;").replace(/</g,"&lt;"))
}return this
}return this._element[prop]
};
jindo.$Element.prototype.html=function(sHTML){if(typeof sHTML=="string"){jindo.$$.release();
var oEl=this._element;
var isIe=(typeof window.opera=="undefined"&&navigator.userAgent.indexOf("MSIE")>-1);
var isFF=(navigator.userAgent.indexOf("Firefox")>-1);
var bBugAgent=isIe||(isFF&&!oEl.parentNode);
if(bBugAgent){var sId="R"+new Date().getTime()+parseInt(Math.random()*100000);
var oDoc=oEl.ownerDocument||oEl.document||document;
var oDummy;
var sTag=oEl.tagName.toLowerCase();
switch(sTag){case"select":case"table":oDummy=jindo.$("<div>");
oDummy.innerHTML="<"+sTag+' class="'+sId+'">'+sHTML+"</"+sTag+">";
break;
case"tr":case"thead":case"tbody":oDummy=jindo.$("<div>");
oDummy.innerHTML="<table><"+sTag+' class="'+sId+'">'+sHTML+"</"+sTag+"></table>";
break;
default:oEl.innerHTML=sHTML;
break
}if(oDummy){var oFound;
for(oFound=oDummy.firstChild;
oFound;
oFound=oFound.firstChild){if(oFound.className==sId){break
}}if(oFound){var notYetSelected=true;
for(var oChild;
oChild=oEl.firstChild;
){oChild.removeNode(true)
}for(var oChild=oFound.firstChild;
oChild;
oChild=oFound.firstChild){if(sTag=="select"&&isIe){var cloneNode=oChild.cloneNode(true);
if(oChild.selected&&notYetSelected){notYetSelected=false;
cloneNode.selected=true
}oEl.appendChild(cloneNode);
oChild.removeNode(true)
}else{oEl.appendChild(oChild)
}}oDummy.removeNode&&oDummy.removeNode(true)
}oDummy=null
}}else{oEl.innerHTML=sHTML
}return this
}return this._element.innerHTML
};
jindo.$Element.prototype.outerHTML=function(){var e=this._element;
if(typeof e.outerHTML!="undefined"){return e.outerHTML
}var div=jindo.$("<div>");
var par=e.parentNode;
if(!par){return e.innerHTML
}par.insertBefore(div,e);
div.style.display="none";
div.appendChild(e);
var s=div.innerHTML;
par.insertBefore(e,div);
par.removeChild(div);
return s
};
jindo.$Element.prototype.toString=jindo.$Element.prototype.outerHTML;
jindo.$Element.prototype.appear=function(duration,callback){var self=this;
var op=this.opacity();
if(!this.visible()){op=0
}if(op==1){return this
}try{clearTimeout(this._fade_timer)
}catch(e){}callback=callback||new Function;
var step=(1-op)/((duration||0.3)*100);
var func=function(){op+=step;
self.opacity(op);
if(op>=1){callback(self)
}else{self._fade_timer=setTimeout(func,10)
}};
this.show();
func();
return this
};
jindo.$Element.prototype.disappear=function(duration,callback){var self=this;
var op=this.opacity();
if(op==0){return this
}try{clearTimeout(this._fade_timer)
}catch(e){}callback=callback||new Function;
var step=op/((duration||0.3)*100);
var func=function(){op-=step;
self.opacity(op);
if(op<=0){self.hide();
self.opacity(1);
callback(self)
}else{self._fade_timer=setTimeout(func,10)
}};
func();
return this
};
jindo.$Element.prototype.offset=function(nTop,nLeft){var oEl=this._element;
var oPhantom=null;
if(typeof nTop=="number"&&typeof nLeft=="number"){if(isNaN(parseInt(this.css("top")))){this.css("top",0)
}if(isNaN(parseInt(this.css("left")))){this.css("left",0)
}var oPos=this.offset();
var oGap={top:nTop-oPos.top,left:nLeft-oPos.left};
oEl.style.top=parseInt(this.css("top"))+oGap.top+"px";
oEl.style.left=parseInt(this.css("left"))+oGap.left+"px";
return this
}var bSafari=/Safari/.test(navigator.userAgent);
var bIE=/MSIE/.test(navigator.userAgent);
var nVer=bIE?navigator.userAgent.match(/(?:MSIE) ([0-9.]+)/)[1]:0;
var fpSafari=function(oEl){var oPos={left:0,top:0};
for(var oParent=oEl,oOffsetParent=oParent.offsetParent;
oParent=oParent.parentNode;
){if(oParent.offsetParent){oPos.left-=oParent.scrollLeft;
oPos.top-=oParent.scrollTop
}if(oParent==oOffsetParent){oPos.left+=oEl.offsetLeft+oParent.clientLeft;
oPos.top+=oEl.offsetTop+oParent.clientTop;
if(!oParent.offsetParent){oPos.left+=oParent.offsetLeft;
oPos.top+=oParent.offsetTop
}oOffsetParent=oParent.offsetParent;
oEl=oParent
}}return oPos
};
var fpOthers=function(oEl){var oPos={left:0,top:0};
var oDoc=oEl.ownerDocument||oEl.document||document;
var oHtml=oDoc.documentElement;
var oBody=oDoc.body;
if(oEl.getBoundingClientRect){if(!oPhantom){if(bIE&&nVer<8&&window.external){oPhantom={left:2,top:2};
oBase=null
}else{oPhantom={left:0,top:0}
}}var box=oEl.getBoundingClientRect();
if(oEl!==oHtml&&oEl!==oBody){oPos.left=box.left-oPhantom.left;
oPos.top=box.top-oPhantom.top;
oPos.left+=oHtml.scrollLeft||oBody.scrollLeft;
oPos.top+=oHtml.scrollTop||oBody.scrollTop
}}else{if(oDoc.getBoxObjectFor){var box=oDoc.getBoxObjectFor(oEl);
var vpBox=oDoc.getBoxObjectFor(oHtml||oBody);
oPos.left=box.screenX-vpBox.screenX;
oPos.top=box.screenY-vpBox.screenY
}else{for(var o=oEl;
o;
o=o.offsetParent){oPos.left+=o.offsetLeft;
oPos.top+=o.offsetTop
}for(var o=oEl.parentNode;
o;
o=o.parentNode){if(o.tagName=="BODY"){break
}if(o.tagName=="TR"){oPos.top+=2
}oPos.left-=o.scrollLeft;
oPos.top-=o.scrollTop
}}}return oPos
};
return(bSafari?fpSafari:fpOthers)(oEl)
};
jindo.$Element.prototype.evalScripts=function(sHTML){var aJS=[];
sHTML=sHTML.replace(new RegExp("<script(\\s[^>]+)*>(.*?)<\/script>","gi"),function(_1,_2,sPart){aJS.push(sPart);
return""
});
eval(aJS.join("\n"));
return this
};
jindo.$Element.prototype.append=function(oElement){var o=jindo.$Element(oElement).$value();
this._element.appendChild(o);
return jindo.$Element(o)
};
jindo.$Element.prototype.prepend=function(oElement){var e=this._element;
var o=jindo.$Element(oElement).$value();
if(e.childNodes.length>0){e.insertBefore(o,e.childNodes[0])
}else{e.appendChild(o)
}return jindo.$Element(o)
};
jindo.$Element.prototype.replace=function(oElement){jindo.$$.release();
var e=this._element;
var o=jindo.$Element(oElement).$value();
e.parentNode.insertBefore(o,e);
e.parentNode.removeChild(e);
return jindo.$Element(o)
};
jindo.$Element.prototype.appendTo=function(oElement){var o=jindo.$Element(oElement).$value();
o.appendChild(this._element);
return this
};
jindo.$Element.prototype.prependTo=function(oElement){var o=jindo.$Element(oElement).$value();
if(o.childNodes.length>0){o.insertBefore(this._element,o.childNodes[0])
}else{o.appendChild(this._element)
}return this
};
jindo.$Element.prototype.before=function(oElement){var o=jindo.$Element(oElement).$value();
this._element.parentNode.insertBefore(o,this._element);
return jindo.$Element(o)
};
jindo.$Element.prototype.after=function(oElement){var o=this.before(oElement);
o.before(this);
return o
};
jindo.$Element.prototype.parent=function(pFunc,limit){var e=this._element;
var a=[],p=null;
if(typeof pFunc=="undefined"){return jindo.$Element(e.parentNode)
}if(typeof limit=="undefined"||limit==0){limit=-1
}while(e.parentNode&&limit--!=0){p=jindo.$Element(e.parentNode);
if(e.parentNode==document.documentElement){break
}if(!pFunc||(pFunc&&pFunc(p))){a[a.length]=p
}e=e.parentNode
}return a
};
jindo.$Element.prototype.child=function(pFunc,limit){var e=this._element;
var a=[],c=null,f=null;
if(typeof pFunc=="undefined"){return jindo.$A(e.childNodes).filter(function(v){return v.nodeType==1
}).map(function(v){return jindo.$Element(v)
}).$value()
}if(typeof limit=="undefined"||limit==0){limit=-1
}(f=function(el,lim){var ch=null,o=null;
for(var i=0;
i<el.childNodes.length;
i++){ch=el.childNodes[i];
if(ch.nodeType!=1){continue
}o=jindo.$Element(el.childNodes[i]);
if(!pFunc||(pFunc&&pFunc(o))){a[a.length]=o
}if(lim!=0){f(el.childNodes[i],lim-1)
}}})(e,limit-1);
return a
};
jindo.$Element.prototype.prev=function(pFunc){var e=this._element;
var a=[];
var b=(typeof pFunc=="undefined");
if(!e){return b?jindo.$Element(null):a
}do{e=e.previousSibling;
if(!e||e.nodeType!=1){continue
}if(b){return jindo.$Element(e)
}if(!pFunc||pFunc(e)){a[a.length]=jindo.$Element(e)
}}while(e);
return b?jindo.$Element(e):a
};
jindo.$Element.prototype.next=function(pFunc){var e=this._element;
var a=[];
var b=(typeof pFunc=="undefined");
if(!e){return b?jindo.$Element(null):a
}do{e=e.nextSibling;
if(!e||e.nodeType!=1){continue
}if(b){return jindo.$Element(e)
}if(!pFunc||pFunc(e)){a[a.length]=jindo.$Element(e)
}}while(e);
return b?jindo.$Element(e):a
};
jindo.$Element.prototype.first=function(){var el=this._element.firstElementChild||this._element.firstChild;
if(!el){return null
}while(el&&el.nodeType!=1){el=el.nextSibling
}return el?jindo.$Element(el):null
};
jindo.$Element.prototype.last=function(){var el=this._element.lastElementChild||this._element.lastChild;
if(!el){return null
}while(el&&el.nodeType!=1){el=el.previousSibling
}return el?jindo.$Element(el):null
};
jindo.$Element.prototype.isChildOf=function(element){var e=this._element;
var el=jindo.$Element(element).$value();
while(e&&e.parentNode){e=e.parentNode;
if(e==el){return true
}}return false
};
jindo.$Element.prototype.isParentOf=function(element){var el=jindo.$Element(element).$value();
while(el&&el.parentNode){el=el.parentNode;
if(this._element==el){return true
}}return false
};
jindo.$Element.prototype.isEqual=function(element){try{return(this._element===jindo.$Element(element).$value())
}catch(e){return false
}};
jindo.$Element.prototype.fireEvent=function(sEvent,oProps){function IE(sEvent,oProps){sEvent=(sEvent+"").toLowerCase();
var oEvent=document.createEventObject();
if(oProps){for(k in oProps){oEvent[k]=oProps[k]
}oEvent.button=(oProps.left?1:0)+(oProps.middle?4:0)+(oProps.right?2:0);
oEvent.relatedTarget=oProps.relatedElement||null
}this._element.fireEvent("on"+sEvent,oEvent);
return this
}function DOM2(sEvent,oProps){var sType="HTMLEvents";
sEvent=(sEvent+"").toLowerCase();
if(sEvent=="click"||sEvent.indexOf("mouse")==0){sType="MouseEvent";
if(sEvent=="mousewheel"){sEvent="dommousescroll"
}}else{if(sEvent.indexOf("key")==0){sType="KeyboardEvent"
}}var evt=document.createEvent(sType);
if(oProps){switch(sType){case"MouseEvent":oProps.button=0+(oProps.middle?1:0)+(oProps.right?2:0);
evt.initMouseEvent(sEvent,true,true,null,oProps.detail,oProps.screenX,oProps.screenY,oProps.clientX,oProps.clientY,oProps.ctrl,oProps.alt,oProps.shift,oProps.meta,oProps.button,oProps.relatedElement);
break;
case"KeyboardEvent":if(evt.initKeyboardEvent){evt.initKeyboardEvent(sEvent,true,true,null,null,null,oProps.ctrl,oProps.alt,oProps.shift,oProps.meta);
evt.keyCode=oProps.keyCode;
evt.charCode=oProps.keyCode
}else{evt.initKeyEvent(sEvent,true,true,null,oProps.ctrl,oProps.alt,oProps.shift,oProps.meta,oProps.keyCode,oProps.keyCode)
}break;
default:evt.initEvent(sEvent,true,true)
}}else{evt.initEvent(sEvent,true,true)
}this._element.dispatchEvent(evt);
return this
}jindo.$Element.prototype.fireEvent=(typeof this._element.dispatchEvent!="undefined")?DOM2:IE;
return this.fireEvent(sEvent,oProps)
};
jindo.$Element.prototype.empty=function(){jindo.$$.release();
this.html("");
return this
};
jindo.$Element.prototype.remove=function(oChild){jindo.$$.release();
jindo.$Element(oChild).leave();
return this
};
jindo.$Element.prototype.leave=function(){var e=this._element;
if(e.parentNode){jindo.$$.release();
e.parentNode.removeChild(e)
}jindo.$Fn.freeElement(this._element);
return this
};
jindo.$Element.prototype.wrap=function(wrapper){var e=this._element;
wrapper=jindo.$Element(wrapper).$value();
if(e.parentNode){e.parentNode.insertBefore(wrapper,e)
}wrapper.appendChild(e);
return this
};
jindo.$Element.prototype.ellipsis=function(stringTail){stringTail=stringTail||"...";
var txt=this.text();
var len=txt.length;
var cur_h=this.height();
var i=0;
var h=this.text("A").height();
if(cur_h<h*1.5){return this.text(txt)
}cur_h=h;
while(cur_h<h*1.5){i+=Math.max(Math.ceil((len-i)/2),1);
cur_h=this.text(txt.substring(0,i)+stringTail).height()
}while(cur_h>h*1.5){i--;
cur_h=this.text(txt.substring(0,i)+stringTail).height()
}};
jindo.$Element.prototype.indexOf=function(element){try{var e=jindo.$Element(element).$value();
var n=this._element.childNodes;
var c=0;
var l=n.length;
for(var i=0;
i<l;
i++){if(n[i].nodeType!=1){continue
}if(n[i]===e){return c
}c++
}}catch(e){}return -1
};
jindo.$Element.prototype.queryAll=function(sSelector){return jindo.$$(sSelector,this._element)
};
jindo.$Element.prototype.query=function(sSelector){return jindo.$$.getSingle(sSelector,this._element)
};
jindo.$Element.prototype.test=function(sSelector){return jindo.$$.test(this._element,sSelector)
};
jindo.$Element.prototype.xpathAll=function(sXPath){return jindo.$$.xpath(sSelector,this._element)
};
jindo.$Fn=function(func,thisObject){var cl=arguments.callee;
if(func instanceof cl){return func
}if(!(this instanceof cl)){return new cl(func,thisObject)
}this._events=[];
this._tmpElm=null;
this._key=null;
if(typeof func=="function"){this._func=func;
this._this=thisObject
}else{if(typeof func=="string"&&typeof thisObject=="string"){this._func=new Function(func,thisObject)
}}};
jindo.$Fn.prototype.$value=function(){return this._func
};
jindo.$Fn.prototype.bind=function(){var a=jindo.$A(arguments).$value();
var f=this._func;
var t=this._this;
var b=function(){var args=jindo.$A(arguments).$value();
if(a.length){args=a.concat(args)
}return f.apply(t,args)
};
return b
};
jindo.$Fn.prototype.bindForEvent=function(){var a=arguments;
var f=this._func;
var t=this._this;
var m=this._tmpElm||null;
var b=function(e){var args=jindo.$A(a);
if(typeof e=="undefined"){e=window.event
}if(typeof e.currentTarget=="undefined"){e.currentTarget=m
}var oEvent=jindo.$Event(e);
args.unshift(oEvent);
var returnValue=f.apply(t,args.$value());
if(typeof returnValue!="undefined"&&oEvent.type=="beforeunload"){e.returnValue=returnValue
}return returnValue
};
return b
};
jindo.$Fn.prototype.attach=function(oElement,sEvent){var fn=null,l,ev=sEvent,el=oElement,ua=navigator.userAgent;
if((el instanceof Array)||(jindo.$A&&(el instanceof jindo.$A)&&(el=el.$value()))){for(var i=0;
i<el.length;
i++){this.attach(el[i],ev)
}return this
}if(!el||!ev){return this
}if(typeof el.$value=="function"){el=el.$value()
}el=jindo.$(el);
ev=ev.toLowerCase();
this._tmpElm=el;
fn=this.bindForEvent();
this._tmpElm=null;
if(typeof el.addEventListener!="undefined"){if(ev=="domready"){ev="DOMContentLoaded"
}else{if(ev=="mousewheel"&&ua.indexOf("WebKit")<0&&!/Opera/.test(ua)){ev="DOMMouseScroll"
}else{if(ev=="mouseenter"){ev="mouseover";
fn=jindo.$Fn._fireWhenElementBoundary(el,fn)
}else{if(ev=="mouseleave"){ev="mouseout";
fn=jindo.$Fn._fireWhenElementBoundary(el,fn)
}}}}el.addEventListener(ev,fn,false)
}else{if(typeof el.attachEvent!="undefined"){if(ev=="domready"){jindo.$Fn._domready(el,fn);
return this
}else{el.attachEvent("on"+ev,fn)
}}}if(!this._key){this._key="$"+jindo.$Fn.gc.count++;
jindo.$Fn.gc.pool[this._key]=this
}this._events[this._events.length]={element:el,event:sEvent.toLowerCase(),func:fn};
return this
};
jindo.$Fn.prototype.detach=function(oElement,sEvent){var fn=null,l,el=oElement,ev=sEvent,ua=navigator.userAgent;
if((el instanceof Array)||(jindo.$A&&(el instanceof jindo.$A)&&(el=el.$value()))){for(var i=0;
i<el.length;
i++){this.detach(el[i],ev)
}return this
}if(!el||!ev){return this
}if(jindo.$Element&&el instanceof jindo.$Element){el=el.$value()
}el=jindo.$(el);
ev=ev.toLowerCase();
var e=this._events;
for(var i=0;
i<e.length;
i++){if(e[i].element!==el||e[i].event!==ev){continue
}fn=e[i].func;
this._events=jindo.$A(this._events).refuse(e[i]).$value();
break
}if(typeof el.removeEventListener!="undefined"){if(ev=="domready"){ev="DOMContentLoaded"
}else{if(ev=="mousewheel"&&ua.indexOf("WebKit")<0){ev="DOMMouseScroll"
}else{if(ev=="mouseenter"){ev="mouseover"
}else{if(ev=="mouseleave"){ev="mouseout"
}}}}el.removeEventListener(ev,fn,false)
}else{if(typeof el.detachEvent!="undefined"){if(ev=="domready"){jindo.$Fn._domready.list=jindo.$Fn._domready.list.refuse(fn);
return this
}else{el.detachEvent("on"+ev,fn)
}}}return this
};
jindo.$Fn.prototype.delay=function(nSec,args){if(typeof args=="undefined"){args=[]
}setTimeout(this.bind.apply(this,args),nSec*1000);
return this
};
jindo.$Fn.prototype.setInterval=function(nSec,args){if(typeof args=="undefined"){args=[]
}return setInterval(this.bind.apply(this,args),nSec*1000)
};
jindo.$Fn.prototype.free=function(oElement){var len=this._events.length;
while(len>0){var el=this._events[--len].element;
if(oElement&&el!=oElement){continue
}this.detach(el,this._events[len].event);
delete this._events[len]
}if(this._events.length==0){try{delete jindo.$Fn.gc.pool[this._key]
}catch(e){}}};
jindo.$Fn._domready=function(doc,func){if(typeof jindo.$Fn._domready.list=="undefined"){var f=null,l=jindo.$Fn._domready.list=jindo.$A([func]);
var done=false,execFuncs=function(){if(!done){done=true;
var evt={type:"domready",target:doc,currentTarget:doc};
while(f=l.shift()){f(evt)
}}};
(function(){try{doc.documentElement.doScroll("left")
}catch(e){setTimeout(arguments.callee,50);
return 
}})();
doc.onreadystatechange=function(){if(doc.readyState=="complete"){doc.onreadystatechange=null;
execFuncs()
}}
}else{jindo.$Fn._domready.list.push(func)
}};
jindo.$Fn._fireWhenElementBoundary=function(doc,func){return function(evt){var oEvent=jindo.$Event(evt);
var relatedElement=jindo.$Element(oEvent.relatedElement);
if(relatedElement&&(relatedElement.isEqual(this)||relatedElement.isChildOf(this))){return 
}func.call(this,evt)
}
};
jindo.$Fn.gc=function(){var p=jindo.$Fn.gc.pool;
for(var key in p){try{p[key].free()
}catch(e){}}jindo.$Fn.gc.pool=p={}
};
jindo.$Fn.freeElement=function(oElement){var p=jindo.$Fn.gc.pool;
for(var key in p){try{p[key].free(oElement)
}catch(e){}}};
jindo.$Fn.gc.count=0;
jindo.$Fn.gc.pool={};
if(typeof window!="undefined"){jindo.$Fn(jindo.$Fn.gc).attach(window,"unload")
}jindo.$Event=function(e){var cl=arguments.callee;
if(e instanceof cl){return e
}if(!(this instanceof cl)){return new cl(e)
}if(typeof e=="undefined"){e=window.event
}if(e===window.event&&document.createEventObject){e=document.createEventObject(e)
}this._event=e;
this._globalEvent=window.event;
this.type=e.type.toLowerCase();
if(this.type=="dommousescroll"){this.type="mousewheel"
}else{if(this.type=="DOMContentLoaded"){this.type="domready"
}}this.canceled=false;
this.element=e.target||e.srcElement;
this.currentElement=e.currentTarget;
this.relatedElement=null;
if(typeof e.relatedTarget!="undefined"){this.relatedElement=e.relatedTarget
}else{if(e.fromElement&&e.toElement){this.relatedElement=e[(this.type=="mouseout")?"toElement":"fromElement"]
}}};
jindo.$Event.prototype.mouse=function(){var e=this._event;
var delta=0;
var left=(e.which&&e.button==0)||!!(e.button&1);
var mid=(e.which&&e.button==1)||!!(e.button&4);
var right=(e.which&&e.button==2)||!!(e.button&2);
var ret={};
if(e.wheelDelta){delta=e.wheelDelta/120
}else{if(e.detail){delta=-e.detail/3
}}ret={delta:delta,left:left,middle:mid,right:right};
this.mouse=function(){return ret
};
return ret
};
jindo.$Event.prototype.key=function(){var e=this._event;
var k=e.keyCode||e.charCode;
var ret={keyCode:k,alt:e.altKey,ctrl:e.ctrlKey,meta:e.metaKey,shift:e.shiftKey,up:(k==38),down:(k==40),left:(k==37),right:(k==39),enter:(k==13),esc:(k==27)};
this.key=function(){return ret
};
return ret
};
jindo.$Event.prototype.pos=function(bGetOffset){var e=this._event;
var b=(this.element.ownerDocument||document).body;
var de=(this.element.ownerDocument||document).documentElement;
var pos=[b.scrollLeft||de.scrollLeft,b.scrollTop||de.scrollTop];
var ret={clientX:e.clientX,clientY:e.clientY,pageX:"pageX" in e?e.pageX:e.clientX+pos[0]-b.clientLeft,pageY:"pageY" in e?e.pageY:e.clientY+pos[1]-b.clientTop,layerX:"offsetX" in e?e.offsetX:e.layerX-1,layerY:"offsetY" in e?e.offsetY:e.layerY-1};
if(bGetOffset&&jindo.$Element){var offset=jindo.$Element(this.element).offset();
ret.offsetX=ret.pageX-offset.left;
ret.offsetY=ret.pageY-offset.top
}return ret
};
jindo.$Event.prototype.stop=function(nCancel){nCancel=nCancel||jindo.$Event.CANCEL_ALL;
var e=(window.event&&window.event==this._globalEvent)?this._globalEvent:this._event;
var b=!!(nCancel&jindo.$Event.CANCEL_BUBBLE);
var d=!!(nCancel&jindo.$Event.CANCEL_DEFAULT);
this.canceled=true;
if(typeof e.preventDefault!="undefined"&&d){e.preventDefault()
}if(typeof e.stopPropagation!="undefined"&&b){e.stopPropagation()
}if(d){e.returnValue=false
}if(b){e.cancelBubble=true
}return this
};
jindo.$Event.prototype.stopDefault=function(){return this.stop(jindo.$Event.CANCEL_DEFAULT)
};
jindo.$Event.prototype.stopBubble=function(){return this.stop(jindo.$Event.CANCEL_BUBBLE)
};
jindo.$Event.prototype.$value=function(){return this._event
};
jindo.$Event.CANCEL_BUBBLE=1;
jindo.$Event.CANCEL_DEFAULT=2;
jindo.$Event.CANCEL_ALL=3;
jindo.$ElementList=function(els){var cl=arguments.callee;
if(els instanceof cl){return els
}if(!(this instanceof cl)){return new cl(els)
}if(els instanceof Array||(jindo.$A&&els instanceof jindo.$A)){els=jindo.$A(els)
}else{if(typeof els=="string"&&cssquery){els=jindo.$A(cssquery(els))
}else{els=jindo.$A()
}}this._elements=els.map(function(v,i,a){return jindo.$Element(v)
})
};
jindo.$ElementList.prototype.get=function(idx){return this._elements.$value()[idx]
};
jindo.$ElementList.prototype.getFirst=function(){return this.get(0)
};
jindo.$ElementList.prototype.getLast=function(){return this.get(Math.Max(this._elements.length-1,0))
};
(function(proto){var setters="show,hide,toggle,addClass,removeClass,toggleClass,fireEvent,leave,";
setters+="empty,appear,disappear,className,width,height,text,html,css,attr";
jindo.$A(setters.split(",")).forEach(function(name){proto[name]=function(){var args=jindo.$A(arguments).$value();
this._elements.forEach(function(el){el[name].apply(el,args)
});
return this
}
});
jindo.$A(["appear","disappear"]).forEach(function(name){proto[name]=function(duration,callback){var len=this._elements.length;
var self=this;
this._elements.forEach(function(el,idx){if(idx==len-1){el[name](duration,function(){callback(self)
})
}else{el[name](duration)
}});
return this
}
})
})(jindo.$ElementList.prototype);
jindo.$S=function(str){var cl=arguments.callee;
if(typeof str=="undefined"){str=""
}if(str instanceof cl){return str
}if(!(this instanceof cl)){return new cl(str)
}this._str=str+""
};
jindo.$S.prototype.$value=function(){return this._str
};
jindo.$S.prototype.toString=jindo.$S.prototype.$value;
jindo.$S.prototype.trim=function(){return jindo.$S(this._str.replace(/^\s+|\s+$/g,""))
};
jindo.$S.prototype.escapeHTML=function(){var entities={'"':"quot","&":"amp","<":"lt",">":"gt","'":"#39"};
var s=this._str.replace(/[<>&"']/g,function(m0){return entities[m0]?"&"+entities[m0]+";":m0
});
return jindo.$S(s)
};
jindo.$S.prototype.stripTags=function(){return jindo.$S(this._str.replace(/<\/?(?:h[1-5]|[a-z]+(?:\:[a-z]+)?)[^>]*>/ig,""))
};
jindo.$S.prototype.times=function(nTimes){var buf=[];
for(var i=0;
i<nTimes;
i++){buf[buf.length]=this._str
}return jindo.$S(buf.join(""))
};
jindo.$S.prototype.unescapeHTML=function(){var entities={quot:'"',amp:"&",lt:"<",gt:">","#39":"'"};
var s=this._str.replace(/&([a-z]+|#[0-9]+);/g,function(m0,m1){return entities[m1]?entities[m1]:m0
});
return jindo.$S(s)
};
jindo.$S.prototype.escape=function(){var s=this._str.replace(/([\u0080-\uFFFF]+)|[\n\r\t"'\\]/g,function(m0,m1,_){if(m1){return escape(m1).replace(/%/g,"\\")
}return(_={"\n":"\\n","\r":"\\r","\t":"\\t"})[m0]?_[m0]:"\\"+m0
});
return jindo.$S(s)
};
jindo.$S.prototype.bytes=function(nBytes){var code=0,bytes=0,i=0,len=this._str.length;
var charset=((document.charset||document.characterSet||document.defaultCharset)+"").toLowerCase();
var cut=(typeof nBytes=="number");
if(charset=="utf-8"){for(i=0;
i<len;
i++){code=this._str.charCodeAt(i);
if(code<128){bytes+=1
}else{if(code<2048){bytes+=2
}else{if(code<65536){bytes+=3
}else{bytes+=4
}}}if(cut&&bytes>nBytes){this._str=this._str.substr(0,i);
break
}}}else{for(i=0;
i<len;
i++){bytes+=(this._str.charCodeAt(i)>128)?2:1;
if(cut&&bytes>nBytes){this._str=this._str.substr(0,i);
break
}}}return cut?this:bytes
};
jindo.$S.prototype.parseString=function(){var str=this._str.split(/&/g),pos,key,val,buf={};
for(var i=0;
i<str.length;
i++){key=str[i].substring(0,pos=str[i].indexOf("="));
val=decodeURIComponent(str[i].substring(pos+1));
if(key.substr(key.length-2,2)=="[]"){key=key.substring(0,key.length-2);
if(typeof buf[key]=="undefined"){buf[key]=[]
}buf[key][buf[key].length]=val
}else{buf[key]=val
}}return buf
};
jindo.$S.prototype.escapeRegex=function(){var s=this._str;
var r=/([\?\.\*\+\-\/\(\)\{\}\[\]\:\!\^\$\\\|])/g;
return jindo.$S(s.replace(r,"\\$1"))
};
jindo.$S.prototype.format=function(){var args=arguments;
var idx=0;
var s=this._str.replace(/%([ 0])?(-)?([1-9][0-9]*)?([bcdsoxX])/g,function(m0,m1,m2,m3,m4){var a=args[idx++];
var ret="",pad="";
m3=m3?+m3:0;
if(m4=="s"){ret=a+""
}else{if(" bcdoxX".indexOf(m4)>0){if(typeof a!="number"){return""
}ret=(m4=="c")?String.fromCharCode(a):a.toString(({b:2,d:10,o:8,x:16,X:16})[m4]);
if(" X".indexOf(m4)>0){ret=ret.toUpperCase()
}}}if(ret.length<m3){pad=jindo.$S(m1||" ").times(m3-ret.length).toString()
}(m2=="-")?(ret+=pad):(ret=pad+ret);
return ret
});
return jindo.$S(s)
};
jindo.$Document=function(el){var cl=arguments.callee;
if(el instanceof cl){return el
}if(!(this instanceof cl)){return new cl(el)
}this._doc=el||document;
this._docKey=this.renderingMode()=="Standards"?"documentElement":"body"
};
jindo.$Document.prototype.$value=function(){return this._doc
};
jindo.$Document.prototype.scrollSize=function(){var isWebkit=navigator.userAgent.indexOf("WebKit")>-1;
var oDoc=this._doc[isWebkit?"body":this._docKey];
return{width:Math.max(oDoc.scrollWidth,oDoc.clientWidth),height:Math.max(oDoc.scrollHeight,oDoc.clientHeight)}
};
jindo.$Document.prototype.scrollPosition=function(){var isWebkit=navigator.userAgent.indexOf("WebKit")>-1;
var oDoc=this._doc[isWebkit?"body":this._docKey];
return{left:oDoc.scrollLeft||window.pageXOffset||window.scrollX||0,top:oDoc.scrollTop||window.pageYOffset||window.scrollY||0}
};
jindo.$Document.prototype.clientSize=function(){var oDoc=this._doc[this._docKey];
var isSafari=navigator.userAgent.indexOf("WebKit")>-1&&navigator.userAgent.indexOf("Chrome")==-1;
return(isSafari)?{width:window.innerWidth,height:window.innerHeight}:{width:oDoc.clientWidth,height:oDoc.clientHeight}
};
jindo.$Document.prototype.renderingMode=function(){var isIe=(typeof window.opera=="undefined"&&navigator.userAgent.indexOf("MSIE")>-1);
var isSafari=(navigator.userAgent.indexOf("WebKit")>-1&&navigator.userAgent.indexOf("Chrome")<0&&navigator.vendor.indexOf("Apple")>-1);
var sRet;
if("compatMode" in this._doc){sRet=this._doc.compatMode=="CSS1Compat"?"Standards":(isIe?"Quirks":"Almost")
}else{sRet=isSafari?"Standards":"Quirks"
}return sRet
};
jindo.$Document.prototype.queryAll=function(sSelector){return jindo.$$(sSelector,this._doc)
};
jindo.$Document.prototype.query=function(sSelector){return jindo.$$.getSingle(sSelector,this._doc)
};
jindo.$Document.prototype.xpathAll=function(sXPath){return jindo.$$.xpath(sSelector,this._doc)
};
jindo.$Form=function(el){var cl=arguments.callee;
if(el instanceof cl){return el
}if(!(this instanceof cl)){return new cl(el)
}el=jindo.$(el);
if(!el.tagName||el.tagName.toUpperCase()!="FORM"){throw new Error("The element should be a FORM element")
}this._form=el
};
jindo.$Form.prototype.$value=function(){return this._form
};
jindo.$Form.prototype.serialize=function(){var self=this;
var oRet={};
var nLen=arguments.length;
var fpInsert=function(sKey){var sVal=self.value(sKey);
if(typeof sVal!="undefined"){oRet[sKey]=sVal
}};
if(nLen==0){jindo.$A(this.element()).forEach(function(o){if(o.name){fpInsert(o.name)
}})
}else{for(var i=0;
i<nLen;
i++){fpInsert(arguments[i])
}}return jindo.$H(oRet).toQueryString()
};
jindo.$Form.prototype.element=function(sKey){if(arguments.length>0){return this._form[sKey]
}return this._form.elements
};
jindo.$Form.prototype.enable=function(){var sKey=arguments[0];
if(typeof sKey=="object"){var self=this;
jindo.$H(sKey).forEach(function(bFlag,sKey){self.enable(sKey,bFlag)
});
return this
}var aEls=this.element(sKey);
if(!aEls){return this
}aEls=aEls.nodeType==1?[aEls]:aEls;
if(arguments.length<2){var bEnabled=true;
jindo.$A(aEls).forEach(function(o){if(o.disabled){bEnabled=false;
jindo.$A.Break()
}});
return bEnabled
}else{var sFlag=arguments[1];
jindo.$A(aEls).forEach(function(o){o.disabled=!sFlag
});
return this
}};
jindo.$Form.prototype.value=function(sKey){if(typeof sKey=="object"){var self=this;
jindo.$H(sKey).forEach(function(bFlag,sKey){self.value(sKey,bFlag)
});
return this
}var aEls=this.element(sKey);
if(!aEls){throw new Error("The element is not exist")
}aEls=aEls.nodeType==1?[aEls]:aEls;
if(arguments.length>1){var sVal=arguments[1];
jindo.$A(aEls).forEach(function(o){switch(o.type){case"radio":case"checkbox":o.checked=(o.value==sVal);
break;
case"select-one":var nIndex=-1;
for(var i=0,len=o.options.length;
i<len;
i++){if(o.options[i].value==sVal){nIndex=i
}}o.selectedIndex=nIndex;
break;
default:o.value=sVal;
break
}});
return this
}var aRet=[];
jindo.$A(aEls).forEach(function(o){switch(o.type){case"radio":case"checkbox":if(o.checked){aRet.push(o.value)
}break;
case"select-one":if(o.selectedIndex!=-1){aRet.push(o.options[o.selectedIndex].value)
}break;
default:aRet.push(o.value);
break
}});
return aRet.length>1?aRet:aRet[0]
};
jindo.$Form.prototype.submit=function(sTargetName,fValidation){var sOrgTarget=null;
if(typeof sTargetName=="string"){sOrgTarget=this._form.target;
this._form.target=sTargetName
}if(typeof sTargetName=="function"){fValidation=sTargetName
}if(typeof fValidation!="undefined"){if(!fValidation(this._form)){return this
}}this._form.submit();
if(sOrgTarget!==null){this._form.target=sOrgTarget
}return this
};
jindo.$Form.prototype.reset=function(fValidation){if(typeof fValidation!="undefined"){if(!fValidation(this._form)){return this
}}this._form.reset();
return this
};
jindo.$Template=function(str){var obj=null,tag="";
var cl=arguments.callee;
if(str instanceof cl){return str
}if(!(this instanceof cl)){return new cl(str)
}if(typeof str=="undefined"){str=""
}else{if((obj=document.getElementById(str)||str)&&obj.tagName&&(tag=obj.tagName.toUpperCase())&&(tag=="TEXTAREA"||(tag=="SCRIPT"&&obj.getAttribute("type")=="text/template"))){str=(obj.value||obj.innerHTML).replace(/^\s+|\s+$/g,"")
}}this._str=str+""
};
jindo.$Template.splitter=/(?!\\)[\{\}]/g;
jindo.$Template.pattern=/^(?:if (.+)|elseif (.+)|for (?:(.+)\:)?(.+) in (.+)|(else)|\/(if|for)|=(.+)|js (.+)|set (.+))$/;
jindo.$Template.prototype.process=function(data){var key="\x01";
var leftBrace="\x02";
var rightBrace="\x03";
var tpl=(" "+this._str+" ").replace(/\\{/g,leftBrace).replace(/\\}/g,rightBrace).replace(/(?!\\)\}\{/g,"}"+key+"{").split(jindo.$Template.splitter),i=tpl.length;
var map={'"':'\\"',"\\":"\\\\","\n":"\\n","\r":"\\r","\t":"\\t","\f":"\\f"};
var reg=[/(["'](?:(?:\\.)+|[^\\["']+)*["']|[a-zA-Z_][\w\.]*)/g,/[\n\r\t\f"\\]/g,/^\s+/,/\s+$/,/#/g];
var cb=[function(m){return(m.substring(0,1)=='"'||m.substring(0,1)=="'"||m=="null")?m:"d."+m
},function(m){return map[m]||m
},"",""];
var stm=[];
var lev=0;
tpl[0]=tpl[0].substr(1);
tpl[i-1]=tpl[i-1].substr(0,tpl[i-1].length-1);
if(i<2){return tpl
}while(i--){if(i%2){tpl[i]=tpl[i].replace(jindo.$Template.pattern,function(){var m=arguments;
if(m[10]){return m[10].replace(/(\w+)=(?:([a-zA-Z_][a-zA-Z0-9_]+)|(.+))$/g,function(){var mm=arguments;
var str="d."+mm[1]+"=";
if(mm[2]){str+="d."+mm[2]
}else{str+=mm[3].replace(/(=(?:[a-zA-Z_][\w\.]*)+)/g,function(m){return(m.substring(0,1)=="=")?"d."+m.replace("=",""):m
})
}return str
})+";"
}if(m[9]){return"s[i++]="+m[9].replace(/(=(?:[a-zA-Z_][\w\.]*)+)/g,function(m){return(m.substring(0,1)=="=")?"d."+m.replace("=",""):m
})+";"
}if(m[8]){return"s[i++]= d."+m[8]+";"
}if(m[1]){return"if("+m[1].replace(reg[0],cb[0]).replace(/d\.(typeof) /,"$1 ").replace(/ d\.(instanceof) d\./," $1 ")+"){"
}if(m[2]){return"}else if("+m[2].replace(reg[0],cb[0]).replace(/d\.(typeof) /,"$1 ").replace(/ d\.(instanceof) d\./," $1 ")+"){"
}if(m[5]){return("var t#=d."+m[5]+"||{},p#=isArray(t#),i#=0;for(var x# in t#){ if( (p# && isNaN(i#=parseInt(x#))) || (!p# && !t#.propertyIsEnumerable(x#)) ) continue; d."+m[4]+"=t#[x#];"+(m[3]?"d."+m[3]+"=p#?i#:x#;":"")).replace(reg[4],lev++)
}if(m[6]){return"}else{"
}if(m[7]){return"};"
}return m[0]
})
}else{if(tpl[i]==key){tpl[i]=""
}else{if(tpl[i]){tpl[i]='s[i++]="'+tpl[i].replace(reg[1],cb[1])+'";'
}}}}tpl=tpl.join("").replace(new RegExp(leftBrace,"g"),"{").replace(new RegExp(rightBrace,"g"),"}");
tpl=(new Function("d",'var s=[],i=0;function isArray(o){ return Object.prototype.toString.call(o) == "[object Array]" };'+tpl+'return s.join("");'))(data);
return tpl
};
jindo.$Date=function(src){var a=arguments,t="";
var cl=arguments.callee;
if(src&&src instanceof cl){return src
}if(!(this instanceof cl)){return new cl(a[0],a[1],a[2],a[3],a[4],a[5],a[6])
}if((t=typeof src)=="string"){this._date=cl.parse(src)
}else{if(t=="number"){if(typeof a[1]=="undefined"){this._date=new Date(src)
}else{this._date=new Date(a[0],a[1],a[2],a[3],a[4],a[5],a[6])
}}else{if(t=="object"&&src.constructor==Date){(this._date=new Date).setTime(src.getTime());
this._date.setMilliseconds(src.getMilliseconds())
}else{this._date=new Date
}}}};
jindo.$Date.names={month:["January","Febrary","March","April","May","June","July","August","September","October","Novermber","December"],s_month:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],day:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],s_day:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],ampm:["AM","PM"]};
jindo.$Date.now=function(){return Date.now()
};
jindo.$Date.parse=function(strDate){return new Date(Date.parse(strDate))
};
jindo.$Date.prototype.$value=function(){return this._date
};
jindo.$Date.prototype.format=function(strFormat){var o={};
var d=this._date;
return(strFormat||"").replace(/[a-z]/ig,function callback(m){if(typeof o[m]!="undefined"){return o[m]
}switch(m){case"d":case"j":o.j=d.getDate();
o.d=(o.j>9?"":"0")+o.j;
return o[m];
case"l":case"D":case"w":case"N":o.w=d.getDay();
o.N=o.w?o.w:7;
o.D=jindo.$Date.names.s_day[o.w];
o.l=jindo.$Date.names.day[o.w];
return o[m];
case"S":return(!!(o.S=["st","nd","rd"][d.getDate()]))?o.S:(o.S="th");
case"z":o.z=Math.floor((d.getTime()-(new Date(d.getFullYear(),0,1)).getTime())/(3600*24*1000));
return o.z;
case"m":case"n":o.n=d.getMonth()+1;
o.m=(o.n>9?"":"0")+o.n;
return o[m];
case"L":o.L=this.isLeapYear();
return o.L;
case"o":case"Y":case"y":o.o=o.Y=d.getFullYear();
o.y=(o.o+"").substr(2);
return o[m];
case"a":case"A":case"g":case"G":case"h":case"H":o.G=d.getHours();
o.g=(o.g=o.G%12)?o.g:12;
o.A=o.G<12?jindo.$Date.names.ampm[0]:jindo.$Date.names.ampm[1];
o.a=o.A.toLowerCase();
o.H=(o.G>9?"":"0")+o.G;
o.h=(o.g>9?"":"0")+o.g;
return o[m];
case"i":o.i=(((o.i=d.getMinutes())>9)?"":"0")+o.i;
return o.i;
case"s":o.s=(((o.s=d.getSeconds())>9)?"":"0")+o.s;
return o.s;
case"u":o.u=d.getMilliseconds();
return o.u;
case"U":o.U=this.time();
return o.U;
default:return m
}})
};
jindo.$Date.prototype.time=function(nTime){if(typeof nTime=="number"){this._date.setTime(nTime);
return this
}return this._date.getTime()
};
jindo.$Date.prototype.year=function(nYear){if(typeof nYear=="number"){this._date.setFullYear(nYear);
return this
}return this._date.getFullYear()
};
jindo.$Date.prototype.month=function(nMon){if(typeof nMon=="number"){this._date.setMonth(nMon);
return this
}return this._date.getMonth()
};
jindo.$Date.prototype.date=function(nDate){if(typeof nDate=="number"){this._date.setDate(nDate);
return this
}return this._date.getDate()
};
jindo.$Date.prototype.day=function(){return this._date.getDay()
};
jindo.$Date.prototype.hours=function(nHour){if(typeof nHour=="number"){this._date.setHours(nHour);
return this
}return this._date.getHours()
};
jindo.$Date.prototype.seconds=function(nSec){if(typeof nSec=="number"){this._date.setSeconds(nSec);
return this
}return this._date.getSeconds()
};
jindo.$Date.prototype.minutes=function(nMin){if(typeof nMin=="number"){this._date.setMinutes(nMin);
return this
}return this._date.getMinutes()
};
jindo.$Date.prototype.isLeapYear=function(){var y=this._date.getFullYear();
return !(y%4)&&!!(y%100)||!(y%400)
};
jindo.$Window=function(el){var cl=arguments.callee;
if(el instanceof cl){return el
}if(!(this instanceof cl)){return new cl(el)
}this._win=el||window
};
jindo.$Window.prototype.$value=function(){return this._win
};
jindo.$Window.prototype.resizeTo=function(nWidth,nHeight){this._win.resizeTo(nWidth,nHeight);
return this
};
jindo.$Window.prototype.resizeBy=function(nWidth,nHeight){this._win.resizeBy(nWidth,nHeight);
return this
};
jindo.$Window.prototype.moveTo=function(nLeft,nTop){this._win.moveTo(nLeft,nTop);
return this
};
jindo.$Window.prototype.moveBy=function(nLeft,nTop){this._win.moveBy(nLeft,nTop);
return this
};
jindo.$Window.prototype.sizeToContent=function(){if(typeof this._win.sizeToContent=="function"){this._win.sizeToContent()
}else{var doc=jindo.$Document(this._win.document);
var clientSize=doc.clientSize();
var scrollSize=doc.scrollSize();
this.resizeBy(scrollSize.width-clientSize.width,scrollSize.height-clientSize.height)
}return this
};
if(typeof window!="undefined"){for(prop in jindo){window[prop]=jindo[prop]
}}if(typeof jindo=="undefined"){jindo={};
jindo.$Class=$Class;
jindo.$Event=$Event;
jindo.$H=$H;
jindo.$Fn=$Fn
}nhn.Component=jindo.$Class({_eventHandlers:null,_options:null,$init:function(){var ins=this.constructor._instances;
if(typeof ins=="undefined"){this.constructor._instances=ins=[]
}ins[ins.length]=this;
this._eventHandlers={};
this._options={};
this._options._setters={}
},option:function(sName,sValue){var nameType=(typeof sName);
if(nameType=="undefined"){return this._options
}else{if(nameType=="string"){if(typeof sValue!="undefined"){this._options[sName]=sValue;
if(typeof this._options._setters[sName]=="function"){this._options._setters[sName](sValue)
}return this
}else{return this._options[sName]
}}else{if(nameType=="object"){try{for(var x in sName){this._options[x]=sName[x];
if(typeof this._options._setters[x]=="function"){this._options._setters[x](sName[x])
}}}catch(e){}return this
}}}},optionSetter:function(sName,fSetter){var nameType=(typeof sName);
if(nameType=="undefined"){return this._options._setters
}else{if(nameType=="string"){if(typeof fSetter!="undefined"){this._options._setters[sName]=jindo.$Fn(fSetter,this).bind();
return this
}else{return this._options._setters[sName]
}}else{if(nameType=="object"){try{for(var x in sName){this._options._setters[x]=jindo.$Fn(sName[x],this).bind()
}}catch(e){}return this
}}}},fireEvent:function(sEvent,oEvent){var oEvent=oEvent?(oEvent instanceof jindo.$Event?oEvent._event:oEvent):{};
var inlineHandler=this["on"+sEvent];
var handlerList=this._eventHandlers[sEvent];
var bHasInlineHandler=typeof inlineHandler=="function";
var bHasHandlerList=typeof handlerList!="undefined";
if(!bHasInlineHandler&&!bHasHandlerList){return true
}var isRealEvent=(function(oEvent){try{if(oEvent instanceof Event){return true
}}catch(x){}try{if(oEvent instanceof MouseEvent){return true
}}catch(x){}try{if(oEvent instanceof KeyEvent){return true
}}catch(x){}try{if(("cancelBubble" in oEvent||"preventBubble" in oEvent)&&"type" in oEvent){return true
}}catch(x){}return false
})(oEvent);
if(!isRealEvent){try{if(typeof oEvent._extends=="undefined"){oEvent._extends=[];
oEvent.stop=function(){this._extends[this._extends.length-1].canceled=true
}
}oEvent._extends.push({type:sEvent,canceled:false});
oEvent.type=sEvent
}catch(e){isRealEvent=true
}}if(isRealEvent){oEvent=jindo.$Event(oEvent)
}var aArg=[oEvent];
for(var i=2,len=arguments.length;
i<len;
i++){aArg.push(arguments[i])
}if(bHasInlineHandler){inlineHandler.apply(this,aArg)
}if(bHasHandlerList){for(var i=0,handler;
handler=handlerList[i];
i++){handler.apply(this,aArg)
}}if(isRealEvent){return !oEvent.canceled
}var oPopedEvent=oEvent._extends.pop();
return !oPopedEvent.canceled
},attach:function(sEvent,fHandler){if(arguments.length==1){jindo.$H(arguments[0]).forEach(jindo.$Fn(function(fHandler,sEvent){this.attach(sEvent,fHandler)
},this).bind());
return this
}var handlers=this._eventHandlers[sEvent];
if(typeof handlers=="undefined"){handlers=this._eventHandlers[sEvent]=[]
}handlers.push(fHandler);
return this
},detach:function(sEvent,fHandler){if(arguments.length==1){jindo.$H(arguments[0]).forEach($Fn(function(fHandler,sEvent){this.detach(sEvent,fHandler)
},this).bind());
return this
}var handlers=this._eventHandlers[sEvent];
if(typeof handlers=="undefined"){return this
}for(var i=0,handler;
handler=handlers[i];
i++){if(handler===fHandler){handlers=handlers.splice(i,1);
break
}}return this
},detachAll:function(sEvent){var handlers=this._eventHandlers;
if(arguments.length){if(typeof handlers[sEvent]=="undefined"){return this
}delete handlers[sEvent];
return this
}for(var o in handlers){delete handlers[o]
}return this
}});
nhn.Component.factory=function(objs,opt){var retArr=[];
if(typeof opt=="undefined"){opt={}
}for(var i=0;
i<objs.length;
i++){try{obj=new this(objs[i],opt);
retArr[retArr.length]=obj
}catch(e){}}return retArr
};
nhn.HTMLComponent=jindo.$Class({tagName:""}).extend(nhn.Component);
nhn.HTMLComponent.paint=function(){var ins=this._instances;
if(typeof ins=="undefined"){return 
}for(var i=0;
i<ins.length;
i++){if(ins[i]&&ins[i].paint){ins[i].paint()
}}};
nhn.HTMLComponent.factory=function(objs,opt){if(typeof objs=="string"){var sClassName=objs;
if(/^(\w+)\s*(?:\[(\w+)\s*=\s*(\w+)\])?$/.test(this.prototype.tagName)){var a=[];
objs=document.getElementsByTagName(RegExp.$1);
if(RegExp.$2&&RegExp.$3){for(var i=0;
i<objs.length;
i++){if(objs[i].getAttribute(RegExp.$2)==RegExp.$3){a[a.length]=objs[i]
}}objs=a
}if(sClassName){var regex=new RegExp("\\b"+sClassName+"\\b","i");
for(var i=0,a=[];
i<objs.length;
i++){if(regex.test(objs[i].className)){a[a.length]=objs[i]
}}objs=a
}}else{return[]
}}this._tmpFactory=nhn.Component.factory;
var objs=this._tmpFactory(objs,opt);
delete this._tmpFactory;
return objs
};
(function(){$.verifyPackageName=function(namespace){namespace=$S(namespace).trim().$value();
if(namespace==""){return null
}var names=namespace.split(".");
var componentName="",parent=window;
if(names.length==1){componentName=names.pop()
}else{for(var i=0,length=names.length;
i<length;
i++){var n=names[i];
if(i==names.length-1){componentName=n;
break
}if(parent[n]==undefined){parent[n]={}
}parent=parent[n]
}}return{container:parent,name:componentName}
}
})();
(function(namespace){var pkg=$.verifyPackageName(namespace);
pkg.container[pkg.name]=function(target,func,initState){var t=this;
func=func||{};
func.enter=func.enter||function(){};
func.leave=func.leave||function(){};
var isIn=initState;
var refOver=$Fn(function(event){try{var node=event.element;
do{if(target==node){break
}try{if(node.tagName.toUpperCase()=="BODY"){return 
}}catch(e){return 
}}while(node=node.parentNode);
var parent=event.relatedElement.parentNode;
do{if(target==parent){return 
}try{if(parent.tagName.toUpperCase()=="BODY"){break
}}catch(e){break
}}while(parent=parent.parentNode);
if(!isIn){isIn=true;
func.enter(event,target)
}}catch(e){}},this).attach(target,"mouseover");
var refOut=$Fn(function(event){try{var node=event.relatedElement;
if(node==target){return 
}do{if(node==target){return 
}try{if(node.tagName.toUpperCase()=="BODY"){break
}}catch(e){break
}}while(node=node.parentNode);
if(isIn){isIn=false;
func.leave(event,target)
}}catch(e){}},this).attach(target,"mouseout");
var refMove=$Fn(function(event){if(!isIn){isIn=true;
if(t._oBefore!=null){t._oBefore[0](null,t._oBefore[1])
}func.enter(event,target);
t._oBefore=null
}},this).attach(target,"mousemove");
var aReturn=[refOver,refOut,refMove];
aReturn._element=target;
aReturn.detachAll=function(){this[0].detach(this._element,"mouseover");
this[1].detach(this._element,"mouseout");
this[2].detach(this._element,"mousemove");
delete this._element
};
return aReturn
};
nj.Hover=pkg.container[pkg.name]
})("nj.hover");
(function(namespace){var pkg=$.verifyPackageName(namespace);
pkg.container[pkg.name]=nj.hover;
jp.Hover=nj.hover
})("jp.hover");
(function(namespace){var pkg=$.verifyPackageName(namespace);
pkg.container[pkg.name]=function cutStr(str,myCut){var jpSize,engUpperSize,engLowSize,others,regTag;
if(typeof (arguments[2])=="object"){var oOptions=arguments[2];
jpSize=oOptions.jp;
engUpperSize=oOptions.upper;
engLowSize=oOptions.lower;
others=oOptions.others;
regTag=oOptions.regTag||null
}else{jpSize=arguments[2];
engUpperSize=arguments[3];
engLowSize=arguments[4];
others=arguments[5]
}var reArr=[];
if(regTag){var reg=new RegExp("<"+regTag+">|</"+regTag+">","ig");
reArr=str.replace(reg,"{0}").split("{0}")
}else{reArr=[str]
}var cnt=0;
var length=0;
var sHankaku="ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝｧｨｩｪｫｬｭｮｯﾞﾟｰ､｡｢｣";
var plainText="";
var ret="";
for(var i=0,l=reArr.length;
i<l;
i++){var strPart=reArr[i];
var strPartCut="";
for(var j=0,m=strPart.length;
j<m;
j++){length=j;
var code=strPart.charAt(j).charCodeAt(0);
if(sHankaku.indexOf(strPart.charAt(j))>=0){cnt+=others
}else{if(code>=256){cnt+=jpSize
}else{if(code>=65&&code<=90){cnt+=engUpperSize
}else{if(code>=97&&code<=122){cnt+=engLowSize
}else{cnt+=others
}}}}if(cnt>=myCut){break
}}strPartCut=strPart.substr(0,length+1);
if(regTag&&(i+1)%2==0){ret+="<"+regTag+">"+strPartCut+"</"+regTag+">"
}else{ret+=strPartCut
}if(cnt>=myCut){cnt++;
break
}}return{str:ret,size:Math.floor(cnt)}
}
})("nj.cutStr");
(function(namespace){var pkg=$.verifyPackageName(namespace);
pkg.container[pkg.name]=function(sTemplate,oData){var reg=(arguments.length==2)?/#([A-Za-z0-9_]+)#/g:arguments[2];
return sTemplate.replace(reg,function(m,p){return oData[p]||""
})
}
})("nj.replaceStr");
$S.prototype.trim=function(){return $S(this._str.replace(/^[\s　]+|[\s　]+$/g,""))
};
$Element.prototype.delegate=function(sType){if(!$Element._hasDelegate(this._oDelegateData,sType)){this._oDelegateData=$Element._addDelegate(this._oDelegateData,sType);
var fAroundFunc=$Fn(function(sType,wEvent){if(typeof wEvent=="undefined"){wEvent=window.event
}if(typeof wEvent.currentTarget=="undefined"){wEvent.currentTarget=this._element
}var oEle=wEvent.target||wEvent.srcElement;
var aData=this._oDelegateData[sType];
var data;
for(var i in aData){data=aData[i];
for(var j=0,l=data.length;
j<l;
j++){if(data[j].checker(oEle)){data[j].func($Event(wEvent))
}}}},this).bind(sType);
$Element._eventBind(this._element,sType,fAroundFunc);
var oEle=this._element;
oEle[sType+this._getDelegeteCount()]=fAroundFunc;
oEle=null
}this._aDataOfEvent=this._oDelegateData[sType];
return this
};
$Element.prototype.undelegate=function(sType){$Element._unEventBind(this._element,sType,this._element[sType+this._getDelegeteCount()]);
if($Agent().navigator().ie){this._element[sType+this._getDelegeteCount()]=null
}else{delete this._element[sType+this._getDelegeteCount()]
}delete this._oDelegateData[sType]
};
$Element.prototype.bind=function(vChecker,fExcute){if(this._aDataOfEvent){var checker;
if(typeof vChecker=="string"){checker=$Fn(function(sCssquery,oEle){return cssquery.test(oEle,sCssquery)
},this).bind(vChecker)
}else{if(typeof vChecker=="function"){checker=$Fn(function(vChecker,oEle){return vChecker(this._element,oEle)
},this).bind(vChecker)
}}this._aDataOfEvent[vChecker]=$Element._addBind(this._aDataOfEvent,vChecker,fExcute,checker)
}else{alert("delegate를 먼저 지정하세요.")
}return this
};
$Element.prototype.unbind=function(vChecker,fExcute){var aData=this._aDataOfEvent[vChecker];
if(aData){this._aDataOfEvent[vChecker]=[];
for(var i=0,l=aData.length;
i<l;
i++){if(aData[i].func!=fExcute){this._aDataOfEvent[vChecker].push(aData[i])
}}}return this
};
$Element._delegateCount=0;
$Element._addBind=function(aDataOfEvent,vChecker,fExcute,fChecker){var aEvent=aDataOfEvent[vChecker];
if(aEvent){for(var i=0,l=aEvent.length;
i<l;
i++){if(aEvent[i].func==fExcute){return aEvent
}}}else{aEvent=aDataOfEvent[vChecker]=[]
}aEvent.push({checker:fChecker,func:fExcute});
return aEvent
};
$Element._hasDelegate=function(oDelegateData,sType){if(typeof oDelegateData=="undefined"){return false
}else{return oDelegateData[sType]
}};
$Element._addDelegate=function(oDelegateData,sType){if(typeof oDelegateData=="undefined"){var oReturn=new Object();
oReturn[sType]={};
return oReturn
}else{oDelegateData[sType]={};
return oDelegateData
}};
$Element._eventBind=function(oEle,sType,fAroundFunc){if(oEle.addEventListener){$Element._eventBind=function(oEle,sType,fAroundFunc){oEle.addEventListener(sType,fAroundFunc,false)
}
}else{$Element._eventBind=function(oEle,sType,fAroundFunc){oEle.attachEvent("on"+sType,fAroundFunc)
}
}$Element._eventBind(oEle,sType,fAroundFunc)
};
$Element._unEventBind=function(oEle,sType,fAroundFunc){if(oEle.removeEventListener){$Element._unEventBind=function(oEle,sType,fAroundFunc){oEle.removeEventListener(sType,fAroundFunc,false)
}
}else{$Element._unEventBind=function(oEle,sType,fAroundFunc){oEle.detachEvent("on"+sType,fAroundFunc)
}
}$Element._unEventBind(oEle,sType,fAroundFunc)
};
$Element.prototype._getDelegeteCount=function(){this._currentDelegeteCount=++$Element._delegateCount;
this._getDelegeteCount=function(){return this._currentDelegeteCount
};
return this._currentDelegeteCount
};
function openLayerLogin(fn){function fnOnLogin(oRes,oParams){g_login=true;
var oData={nickname:oRes.json().nickname};
$Element("userArea").html($Template(G_HEADER_LOGON_TEMPLATE).process(oData));
window.oLayerLogin.close();
fn()
}if(typeof window.oLayerLogin=="undefined"){nj.Login.setHtml();
window.oLayerLogin=new nj.Login({loginApi:g_loginApi,proxyUrl:g_proxyUrl,rsaKeysApi:g_rsaKeysApi,onLogin:fnOnLogin,onLoginFailure:function(){},element:$("loginPanel"),onLoginParams:""})
}else{window.oLayerLogin._options.onLogin=fnOnLogin
}window.oLayerLogin.open({center:true})
}function errorImage(self,sType,fn){self.onerror=null;
fn=fn||function(){};
sType=(typeof sType=="undefined"?"default":sType);
var oType=errorImage.oData[(typeof errorImage.oData[sType]=="undefined"?"default":sType)];
$Element(self).attr({src:(typeof STATIC_SERVER=="undefined"?oType.staticServer:STATIC_SERVER)+oType.src,width:oType.w,height:oType.h});
fn(self)
}errorImage.oData={staticServer:"http://static.naver.jp/","default":{src:"/mission/img/thumb_entry_noimage_120x120.gif",w:"120",h:"120"},noimg50:{src:"/mission/img/thumb_entry_noimage_50x50.gif",w:"50",h:"50"},noimg60:{src:"/mission/img/thumb_entry_noimage_60x60.gif",w:"60",h:"60"},noimg56:{src:"/mission/img/thumb_entry_noimage_56x56.gif",w:"56",h:"56"},noimg65:{src:"/mission/img/thumb_entry_noimage_65x65.gif",w:"65",h:"65"},noimg80x60:{src:"/mission/img/thumb_entry_noimage_80x60.gif",w:"80",h:"60"},noimg80:{src:"/mission/img/thumb_entry_noimage_80x80.gif",w:"80",h:"80"},noimg100:{src:"/mission/img/thumb_entry_noimage_100x100.gif",w:"100",h:"100"},noimg120x90:{src:"/mission/img/thumb_entry_noimage_120x90.gif",w:"120",h:"90"},noimg120:{src:"/mission/img/thumb_entry_noimage_120x120.gif",w:"120",h:"120"},noimg200:{src:"/mission/img/thumb_entry_noimage_200x150.gif",w:"200",h:"150"},matome40:{src:"/mission/img/matome_noimage_40x40.gif",w:"40",h:"40"},matome50:{src:"/mission/img/matome_noimage_50x50.gif",w:"50",h:"50"},matome60:{src:"/mission/img/matome_noimage_60x60.gif",w:"60",h:"60"},matome80:{src:"/mission/img/matome_noimage_80x80.gif",w:"80",h:"80"},matome95:{src:"/mission/img/matome_noimage_95x95.gif",w:"95",h:"95"},user18:{src:"/user_mission/img/user_noimage_18x18.gif",w:"18",h:"18"},user32:{src:"/user_mission/img/user_noimage_32x32.gif",w:"32",h:"32"},user40:{src:"/user_mission/img/user_noimage_40x40.gif",w:"40",h:"40"},user51:{src:"/user_mission/img/user_noimage_51x51.gif",w:"51",h:"51"},user58:{src:"/user_mission/img/user_noimage_58x58.gif",w:"58",h:"58"},user120:{src:"/user_mission/img/user_noimage_120x120.gif",w:"120",h:"120"}};
function resizeImage(self,nMaxW,nMaxH,nSearchW,nSearchH){var oNewSize=calcuImageResize(parseInt(self.width)==0?nSearchW:parseInt(self.width),parseInt(self.height)==0?nSearchH:parseInt(self.height),nMaxW,nMaxH);
self.width=oNewSize.width;
self.height=oNewSize.height
}function resizeAddZoom(self){self.parentNode.parentNode.style.zoom="1";
self.parentNode.parentNode.parentNode.style.zoom="1"
}function calcuImageResize(nW,nH,nMaxW,nMaxH){nW=nW||nMaxW;
nH=nH||nMaxH;
if(nW>=nMaxW&&nH>=nMaxH){var nWP=(100*nW)/nMaxW;
var nHP=(100*nH)/nMaxH;
if(nWP>nHP){nW=nMaxW;
nH=(100*nH)/nWP
}else{nH=nMaxH;
nW=(100*nW)/nHP
}}else{if(nW>=nMaxW){var nP=(100*nW)/nMaxW;
nH=(100*nH)/nP;
nW=nMaxW
}else{if(nH>=nMaxH){var nP=(100*nH)/nMaxH;
nW=(100*nW)/nP;
nH=nMaxH
}}}return{width:nW,height:nH}
}function curtail(sText,nSize){var oStr=nj.cutStr(sText,nSize,11,8,5,6);
if(oStr.str.length!=sText.length){return oStr.str+"..."
}return sText
}(function(ns){if(typeof window[ns]=="undefined"){window[ns]={}
}window[ns]={be:function(target){return(typeof target=="undefined"?false:true)
},_exist:function(element){if(!this.be(element)||!this.be(element.value)){alert("not be element");
return false
}return true
},trim:function(sText){return $S(sText).trim().$value()
},isBlank:function(sText){return this.trim(sText)==""?true:false
},isNumeric:function(sText){sText=this.trim(sText);
var bIsNumber=true;
for(var i=0,len=sText.length;
i<len;
i++){var nCode=parseInt(sText.charCodeAt(i));
if(nCode<48||nCode>57){bIsNumber=false;
break
}}return bIsNumber
},validateBlank:function(element,oParam,bNotSelect){if(!this._exist(element)){return false
}if(!this.isBlank(element.value)){return true
}else{alert(oParam.msg);
if(!bNotSelect){element.focus()
}return false
}},validateDefaultText:function(element,oParam,bNotSelect){if(!this._exist(element)){return false
}if(this.trim(element.value)!=oParam.text){return true
}else{alert(oParam.msg);
if(!bNotSelect){element.select()
}return false
}},validateLength:function(element,oParam,bNotSelect){if(!this._exist(element)){return false
}var sText=this.trim(element.value);
if(sText.length>=oParam.min&&sText.length<=oParam.max){return true
}else{alert(oParam.msg);
if(!bNotSelect){element.select()
}return false
}},validateNumeric:function(element,oParam,bNotSelect){if(!this._exist(element)){return false
}if(this.isNumeric(element.value)){return true
}else{alert(oParam.msg);
if(!bNotSelect){element.select()
}return false
}},validate:function(element,oParam,bNotSelect){if(!this._exist(element)){return false
}if(oParam.fn(element)){return true
}else{alert(oParam.msg);
if(!bNotSelect){element.focus()
}return false
}},clearText:function(element,oParams){if(this.trim(element.value)==oParams.text){element.value=""
}},sendServer:function(sUrl,oParam,fn){var oAjax=new $Ajax(sUrl,{onload:function(oRes){fn(oRes.json(),oParam)
},ontimeout:function(oRes){fn(false)
},timeout:5}).request(oParam);
return oAjax
},addComma:function(nNum,nPositionOfPoint){var sNum=""+nNum;
nPositionOfPoint=nPositionOfPoint||3;
var sPre="",sPost="",nPos=-1;
nPos=sNum.indexOf(".");
if(nPos==-1){sPre=sNum
}else{sPre=sNum.substr(0,nPos);
sPost=sNum.substr(nPos+1)
}var aStr=sPre.split("");
if(aStr.length<=nPositionOfPoint){return sPre+(sPost==""?"":"."+sPost)
}else{var aNewStr=[];
for(var i=aStr.length-1,j=1;
i>=0;
i--,j++){aNewStr.unshift(aStr[i]);
if(j%nPositionOfPoint==0&&i!=0){aNewStr.unshift(",")
}}return aNewStr.join("")+"."+sPost
}},htmlEncode:function(str){return str.replace(/&lt;/ig,"<").replace(/&gt;/ig,">").replace(/&quot;/ig,'"').replace(/&amp;/ig,"&")
},validateURL:function(sURL){return/^(http|https):\/\/((\w|-)+(?:[\.:](\w|-))+)(?:\/|)?([^"\?]*?)(?:\?([^\?"]*?))?$/i.test(sURL)
},validateElementURL:function(el,oParam,bNotSelect){if(!fnMatome.validateURL(el.value)){alert(oParam.msg);
if(!bNotSelect){el.select()
}return false
}return true
},checkImageExtension:function(el,oParam,bNotSelect){if(!el.value.match(/\.(jpg|jpeg|gif|png)$/i)){alert(oParam.msg);
if(!bNotSelect){el.select()
}return false
}return true
}}
})("fnMatome");
$Element.insertAdjacentHTML=function(_ele,html,insertType,type,fn){if(_ele.insertAdjacentHTML){$Element.insertAdjacentHTML=function(_ele,html,insertType,type,fn){_ele.insertAdjacentHTML(insertType,html)
}
}else{$Element.insertAdjacentHTML=function(_ele,html,insertType,type,fn){var fragment=document.createDocumentFragment();
var div=document.createElement("div");
div.innerHTML=html;
var scripts=div.getElementsByTagName("script");
for(var i=0,l=scripts.length;
i<l;
i++){scripts[i].parentNode.removeChild(scripts[i])
}while(div[type]){fragment.appendChild(div[type])
}fn(fragment.cloneNode(true))
}
}$Element.insertAdjacentHTML(_ele,html,insertType,type,fn)
};
$Element.prototype.appendInnerHTML=function(html){$Element.insertAdjacentHTML(this._element,html,"beforeEnd","firstChild",$Fn(function(ele){this._element.appendChild(ele)
},this).bind());
return this
};
$Element.prototype.prependInnerHTML=function(html){$Element.insertAdjacentHTML(this._element,html,"afterBegin","lastChild",$Fn(function(ele){this._element.insertBefore(ele,this._element.firstChild)
},this).bind());
return this
};
$Element.prototype.beforeInnerHTML=function(html){$Element.insertAdjacentHTML(this._element,html,"beforeBegin","firstChild",$Fn(function(ele){this._element.parentNode.insertBefore(ele,this._element)
},this).bind());
return this
};
$Element.prototype.afterInnerHTML=function(html){$Element.insertAdjacentHTML(this._element,html,"afterEnd","lastChild",$Fn(function(ele){this._element.parentNode.insertBefore(ele,this._element.nextSibling)
},this).bind());
return this
};