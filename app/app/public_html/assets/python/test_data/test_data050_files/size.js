


var vNum = navigator.appVersion.charAt(0);
var bName = navigator.appName.charAt(0);
if ( bName == "M" && vNum < 4)
	location.href="getnewbrowser.html";
if ( bName == "N" && vNum < 4)
	location.href="getnewbrowser.html";

document.writeln("<STYLE TYPE='text/css'><!--");
if(navigator.appVersion.indexOf("Mac") > -1)
{
	if( bName == "M")
	 {
		// MAC IE
		document.writeln(".e9{font-Size:7px;}");
		document.writeln(".e10{font-size:10px;}");
		document.writeln(".e12{font-size:12px;}");
		document.writeln(".e14{font-size:14px;}");
		document.writeln(".e18{font-size:18px;}");
		document.writeln(".j9{font-size:9px;}");
		document.writeln(".j10{font-Size:10px;}");
		document.writeln(".j12{font-Size:12px;}");
		document.writeln(".j14{font-Size:14px;}");
		document.writeln(".j18{font-Size:18px;}");
	}
	else
	{
		if( vNum < 5 )
		{
			// MAC NETSCAPE 4.x
			document.writeln(".e9{font-Size:9px; line-height:12px;}");
			document.writeln(".e10{font-size:10px; line-height:12px;}");
			document.writeln(".e12{font-size:12px; line-height:16px;}");
			document.writeln(".e14{font-size:14px; line-height:19px;}");
			document.writeln(".e18{font-size:18px; line-height:21px;}");
			document.writeln(".j9{font-size:9px; line-height:12px;}");
			document.writeln(".j10{font-Size:10px; line-height:12px;}"); 
			document.writeln(".j12{font-Size:12px; line-height:16px;}");
			document.writeln(".j14{font-Size:14px; line-height:19px;}");
			document.writeln(".j18{font-Size:18px;}");
	 	}
	 	else
	 	{
			// MAC NETSCAPE 6.x~
			document.writeln(".e9{font-Size:9px}");
			document.writeln(".e10{font-size:10px}");
			document.writeln(".e12{font-size:12px}");
			document.writeln(".e14{font-size:14px}");
			document.writeln(".e18{font-size:18px}");
			document.writeln(".j9{font-size:9px; line-height:12px}");
			document.writeln(".j10{font-Size:10px; line-height:13px}"); 
			document.writeln(".j12{font-Size:12px; line-height:15px}");
			document.writeln(".j14{font-Size:14px; line-height:18px}");	
			document.writeln(".j18{font-Size:18px;; line-height:20px}");
	 	}
	 }

}
else
{
	if( bName == "M")
	{
		// WIN IE
		document.writeln(".e9{font-Size:9px;letter-spacing:1px}");
		document.writeln(".e10{font-size:10px;line-height:15px;letter-spacing:1px}");
		document.writeln(".e12{font-size:13px;line-height:17px;letter-spacing:1px}");
		document.writeln(".e14{font-size:15px;line-height:20px;letter-spacing:1px}");
		document.writeln(".e18{font-size:19px;line-height:20px;letter-spacing:1px}");
		document.writeln(".j9{font-size:9px;letter-spacing:1px}");
		document.writeln(".j10{font-Size:10px; line-height:14px;letter-spacing:1px}");
		document.writeln(".j12{font-Size:13px; line-height:17px;}");
		document.writeln(".j14{font-Size:15px;line-height:19px;letter-spacing:1px}");
		document.writeln(".j18{font-Size:19px;line-height:24px;letter-spacing:1px}");
	}
	else
	{
		if( vNum < 5 )
		{
			// WIN NETSCAPE 4.x
			document.writeln(".e9{font-Size:11px;line-height:13px;}");
			document.writeln(".e10{font-size:13px;line-height:15px;}");
			document.writeln(".e12{font-size:15px;line-height:18px;}");
			document.writeln(".e14{font-size:17px;line-height:20px;}");
			document.writeln(".e18{font-size:21px;line-height:21px;}");
			document.writeln(".j9{font-size:10px;line-height:13px;}");
			document.writeln(".j10{font-Size:11px;line-height:15px;}");
			document.writeln(".j12{font-Size:14px;line-height:18px;}");
			document.writeln(".j14{font-Size:16px;line-height:21px;}");
			document.writeln(".j18{font-Size:20px;line-height:24px;}");
		}
		else
		{
			// WIN NETSCAPE 6.x~
			document.writeln(".e9{font-Size:11px;line-height:13px;}");
			document.writeln(".e10{font-size:13px;line-height:15px;}");
			document.writeln(".e12{font-size:14px;line-height:18px;}");
			document.writeln(".e14{font-size:17px;line-height:20px;}");
			document.writeln(".e18{font-size:21px;line-height:21px;}");
			document.writeln(".j9{font-size:10px;line-height:11px;letter-spacing:2px}");
			document.writeln(".j10{font-Size:11px;line-height:15px;letter-spacing:1px}");
			document.writeln(".j12{font-Size:13px;line-height:19px;letter-spacing:1px}");
			document.writeln(".j14{font-Size:15px;line-height:21px;letter-spacing:1px}");
			document.writeln(".j18{font-Size:20px;line-height:24px;letter-spacing:1px}");
		
		}
	}
}
 document.writeln("--></STYLE>");