if (window.VarCurrentView) VarCurrentView.set('Desktop');
function init_Desktop() {
	if ( rcdObj.view != 'Desktop' ) return;
	if (!isOPAPub() || isLOPopup()) window.init_page();
	preload(rcdObj['preload_'+rcdObj.view]);
}
function defineFuncs_Desktop() {
	if ( rcdObj.view != 'Desktop' ) return;
	try{
		if (window.initGEV)
		{
		 initGEV(0,swipeLeft,swipeRight);

		}
		} catch(e) { if (window.console) window.console.log(e); }	pageClick = n;
	pageRClick = n;
	pageKey = n;
}
textbutton21748.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 36 36\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(18 18)\" style=\"\">\n	<path d=\"M 0 0 L 36 0 L 36 36 L 0 36 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-18, -18) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_16143_15662_1\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"36\" height=\"36\" xlink:href=\"images/btn_close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 36 0 L 36 36 L 0 36 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16143_15662_1&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-18, -18) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(18 18)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"21.3333328\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"6.72\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 962px; top: 12.000000000000007px; width: 36px; height: 36px; z-index: 1; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj21748",
	bInsAnc:	1,
	cwObj:		{
		"name":	"btn_close",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'close',actItem:function(){ {cleanupTitle('forensisch_kompas.html'); trivExitPage('ObjLayerActionExit()',false);} 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:0,delay:0,name:'show hint',actItem:function(){ text23012.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:1,delay:0,name:'hide hint',actItem:function(){ text23012.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[7,33184,0,[962,12.000000000000007,36,36]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":962,"y":12,"width":36,"height":36},"imgDataNormal":"images/desktop_shape21748.png","imgDataOver":"images/desktop_shape21748_over.png","imgDataDown":"images/desktop_shape21748_over.png","imgDataDisabled":"images/desktop_shape21748_disabled.png","svgDataNormal":"<g transform=\"translate(18 18)\" style=\"\">\n\t<path d=\"M 0 0 L 36 0 L 36 36 L 0 36 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-18, -18) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16143_15662_1\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"36\" height=\"36\" xlink:href=\"images/btn_close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 36 0 L 36 36 L 0 36 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16143_15662_1&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-18, -18) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(18 18)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"21.3333328\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(18 18)\" style=\"\">\n\t<path d=\"M 0 0 L 36 0 L 36 36 L 0 36 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-18, -18) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16143_15662_3\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"36\" height=\"36\" xlink:href=\"images/btn_close_mo.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 36 0 L 36 36 L 0 36 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16143_15662_3&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-18, -18) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(18 18)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"21.3333328\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(18 18)\" style=\"\">\n\t<path d=\"M 0 0 L 36 0 L 36 36 L 0 36 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-18, -18) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16143_15662_5\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"36\" height=\"36\" xlink:href=\"images/btn_close_mo.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 36 0 L 36 36 L 0 36 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16143_15662_5&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-18, -18) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(18 18)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"21.3333328\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(18 18)\" style=\"\">\n\t<path d=\"M 0 0 L 36 0 L 36 36 L 0 36 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-18, -18) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_16143_15662_7\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"36\" height=\"36\" xlink:href=\"images/btn_close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 36 0 L 36 36 L 0 36 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16143_15662_7&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-18, -18) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(18 18)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"21.3333328\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text23012.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 175px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 175px; min-height: 20px;\"><p style=\"text-align: right;\"><span style=\"font-size: 10pt; color: rgb(0, 53, 71); font-family: Arial, sans-serif;\">terug naar overzicht</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 780px; top: 21px; width: 175px; height: 20px; z-index: 2;",
	cssClasses:	"OpenSans",
	htmlId:		"tobj23012",
	bInsAnc:	0,
	cwObj:		{
		"name":	"sluit hint"
	},
	objData:	{"a":[0,128,0,[780,21,175,20]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":780,"y":21,"width":175,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
image21773.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj21773Img\" src=\"images/zonder%20elementen-06.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 1010px; height: 663px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 0px; width: 1010px; height: 663px; z-index: 3;",
	cssClasses:	"",
	htmlId:		"tobj21773",
	bInsAnc:	0,
	cwObj:		{
		"name":	"zonder elementen-06"
	},
	objData:	{"a":[0,288,0,[0,0,1010,663]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1010,"height":663}}
};
shape16144.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 950 600\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(475 300)\" style=\"\">\n	<path d=\"M 21.5 0 L 928.5 0 A 21.5 21.5 0 0 1 950 21.5 L 950 578.5 A 21.5 21.5 0 0 1 928.5 600 L 21.5 600 A 21.5 21.5 0 0 1 0 578.5 L 0 21.5 A 21.5 21.5 0 0 1 21.5 0 Z\" style=\"stroke: rgb(0, 0, 0); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:0.8;filter:alpha(opacity=80); pointer-events: auto;\" transform=\"translate(0 0) translate(-475, -300) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(475 300)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:0.8;filter:alpha(opacity=80);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 29.999999999999943px; top: 31.000000000000114px; width: 950px; height: 600px; z-index: 4; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj16144",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[0,32,0,[29.999999999999943,31.000000000000114,950,600]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":30,"y":31,"width":950,"height":600},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape16144.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.8;\">"}
};
text16145.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 950px; min-height: 60px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 950px; min-height: 60px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: center;\"><span><b><span style=\"font-size: 28pt; color: rgb(30, 60, 96); font-family: calibri, sans-serif;\">Welke route kies je?</span></b></span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 33px; top: 90px; width: 950px; height: 60px; z-index: 5;",
	cssClasses:	"Roboto",
	htmlId:		"tobj16145",
	bInsAnc:	0,
	cwObj:		{
		"name":	"page-title"
	},
	objData:	{"a":[0,32,0,[33,90,950,60]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":33,"y":90,"width":950,"height":60},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text24007.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 222px; min-height: 102px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 222px; min-height: 102px;\"><p style=\"text-align: center; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-size:10pt;\"><strong><span style=\"font-family: &quot;Arial&quot;, sans-serif; color: rgb(0, 53, 71);\">Kies \'Ik ga zelf op ontdekking\' wanneer je al weet welke leerinterventies relevant voor jou&nbsp;kunnen zijn.&nbsp;</span></strong></span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 214px; top: 180px; width: 222px; height: 102px; z-index: 6;",
	cssClasses:	"OpenSans",
	htmlId:		"tobj24007",
	bInsAnc:	0,
	cwObj:		{
		"name":	"bodytext"
	},
	objData:	{"a":[0,32,0,[214,180,222,102]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":214,"y":180,"width":222,"height":102},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text24074.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 219px; min-height: 102px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 219px; min-height: 102px;\"><p style=\"text-align: center; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><strong><span style=\"font-size: 10pt; color: rgb(0, 53, 71); font-family: Arial, sans-serif;\">Kies \'Ik heb richting nodig\' wanneer je aan de hand van vragen wilt bepalen welke leerinterventies bij jou passen.</span></strong></p>\n\n<p style=\"text-align: center; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><strong><span style=\"font-size: 10pt; color: rgb(0, 53, 71); font-family: &quot;Arial&quot;, sans-serif;\">​</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 575px; top: 180px; width: 219px; height: 102px; z-index: 7;",
	cssClasses:	"OpenSans",
	htmlId:		"tobj24074",
	bInsAnc:	0,
	cwObj:		{
		"name":	"bodytext"
	},
	objData:	{"a":[0,32,0,[575,180,219,102]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":575,"y":180,"width":219,"height":102},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og16168.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og16168",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
textbutton23889.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 224 244\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><linearGradient id=\"SVGID_16143_16\" gradientUnits=\"userSpaceOnUse\" x1=\"112\" y1=\"244\" x2=\"112\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n</linearGradient>\n<g transform=\"translate(112 122)\" style=\"\">\n	<linearGradient id=\"SVGID_16143_16\" gradientUnits=\"userSpaceOnUse\" x1=\"112.5\" y1=\"244.5\" x2=\"112.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n</linearGradient>\n<path d=\"M 0 0 L 223 0 L 223 243 L 0 243 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16143_16&quot;); fill-rule: nonzero; opacity:0;filter:alpha(opacity=0); pointer-events: auto;\" transform=\"translate(0 0) translate(-111.5, -121.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(112 122)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:0;filter:alpha(opacity=0);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 212.49999999999997px; top: 281.5px; width: 224px; height: 244px; z-index: 12; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj23889",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button 1",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkResetVars',actItem:function(){ ResetVars(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ Varkompas_userChoice.set('1'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ Varterugnaardevraag.set('1'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('forensisch_kompas_kompas_bg_overzicht.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32864,0,[212.49999999999997,281.5,224,244]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":213,"y":282,"width":224,"height":244},"imgDataNormal":"images/desktop_shape23889.png","imgDataOver":"images/desktop_shape23889.png","imgDataDown":"images/desktop_shape23889.png","imgDataDisabled":"images/desktop_shape23889.png","svgDataNormal":"<linearGradient id=\"SVGID_16143_16\" gradientUnits=\"userSpaceOnUse\" x1=\"112\" y1=\"244\" x2=\"112\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(112 122)\" style=\"\">\n\t<linearGradient id=\"SVGID_16143_16\" gradientUnits=\"userSpaceOnUse\" x1=\"112.5\" y1=\"244.5\" x2=\"112.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 0 0 L 223 0 L 223 243 L 0 243 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16143_16&quot;); fill-rule: nonzero; opacity: 0; pointer-events: auto;\" transform=\"translate(0 0) translate(-111.5, -121.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(112 122)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<linearGradient id=\"SVGID_16143_17\" gradientUnits=\"userSpaceOnUse\" x1=\"112\" y1=\"244\" x2=\"112\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(112 122)\" style=\"\">\n\t<linearGradient id=\"SVGID_16143_17\" gradientUnits=\"userSpaceOnUse\" x1=\"112.5\" y1=\"244.5\" x2=\"112.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 0 0 L 223 0 L 223 243 L 0 243 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16143_17&quot;); fill-rule: nonzero; opacity: 0; pointer-events: auto;\" transform=\"translate(0 0) translate(-111.5, -121.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(112 122)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<linearGradient id=\"SVGID_16143_18\" gradientUnits=\"userSpaceOnUse\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"244\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(112 122)\" style=\"\">\n\t<linearGradient id=\"SVGID_16143_18\" gradientUnits=\"userSpaceOnUse\" x1=\"0.5\" y1=\"0.5\" x2=\"0.5\" y2=\"244.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 0 0 L 223 0 L 223 243 L 0 243 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16143_18&quot;); fill-rule: nonzero; opacity: 0; pointer-events: auto;\" transform=\"translate(0 0) translate(-111.5, -121.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(112 122)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<linearGradient id=\"SVGID_16143_19\" gradientUnits=\"userSpaceOnUse\" x1=\"112\" y1=\"244\" x2=\"112\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(112 122)\" style=\"\">\n\t<linearGradient id=\"SVGID_16143_19\" gradientUnits=\"userSpaceOnUse\" x1=\"112.5\" y1=\"244.5\" x2=\"112.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 0 0 L 223 0 L 223 243 L 0 243 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16143_19&quot;); fill-rule: nonzero; opacity: 0; pointer-events: auto;\" transform=\"translate(0 0) translate(-111.5, -121.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(112 122)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0;\">"}
};
image16149.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj16149Img\" src=\"images/btn1.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 223px; height: 244px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 214px; top: 281px; width: 223px; height: 244px; z-index: 8;",
	cssClasses:	"",
	htmlId:		"tobj16149",
	bInsAnc:	0,
	cwObj:		{
		"name":	"btn1"
	},
	objData:	{"a":[0,288,0,[214,281,223,244]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":214,"y":281,"width":223,"height":244}}
};
text16154.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 221px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 221px; min-height: 20px;\"><p style=\"text-align: center;\"><span style=\"font-size: 11pt; color: rgb(255, 255, 255); font-family: Calibri, sans-serif;\">Ik ga zelf op ontdekking.</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 215px; top: 432px; width: 221px; height: 20px; z-index: 9;",
	cssClasses:	"OpenSans",
	htmlId:		"tobj16154",
	bInsAnc:	0,
	cwObj:		{
		"name":	"txt-ikWilDoen"
	},
	objData:	{"a":[0,32,0,[215,432,221,20]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":215,"y":432,"width":221,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og16167.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og16167",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
textbutton23903.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 221 244\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><linearGradient id=\"SVGID_16143_20\" gradientUnits=\"userSpaceOnUse\" x1=\"110.5\" y1=\"244\" x2=\"110.5\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n</linearGradient>\n<g transform=\"translate(110.5 122)\" style=\"\">\n	<linearGradient id=\"SVGID_16143_20\" gradientUnits=\"userSpaceOnUse\" x1=\"111\" y1=\"244.5\" x2=\"111\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n</linearGradient>\n<path d=\"M 0 0 L 220 0 L 220 243 L 0 243 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16143_20&quot;); fill-rule: nonzero; opacity:0;filter:alpha(opacity=0); pointer-events: auto;\" transform=\"translate(0 0) translate(-110, -121.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(110.5 122)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:0;filter:alpha(opacity=0);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 573.5px; top: 281.5px; width: 221px; height: 244px; z-index: 13; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj23903",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button 2",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkResetVars',actItem:function(){ ResetVars(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ Varkompas_userChoice.set('0'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ Varterugnaardevraag.set('0'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('forensisch_kompas_kompas_wizard_begeleiding.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32864,0,[573.5,281.5,221,244]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":574,"y":282,"width":221,"height":244},"imgDataNormal":"images/desktop_shape23903.png","imgDataOver":"images/desktop_shape23903.png","imgDataDown":"images/desktop_shape23903.png","imgDataDisabled":"images/desktop_shape23903.png","svgDataNormal":"<linearGradient id=\"SVGID_16143_20\" gradientUnits=\"userSpaceOnUse\" x1=\"110.5\" y1=\"244\" x2=\"110.5\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(110.5 122)\" style=\"\">\n\t<linearGradient id=\"SVGID_16143_20\" gradientUnits=\"userSpaceOnUse\" x1=\"111\" y1=\"244.5\" x2=\"111\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 0 0 L 220 0 L 220 243 L 0 243 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16143_20&quot;); fill-rule: nonzero; opacity: 0; pointer-events: auto;\" transform=\"translate(0 0) translate(-110, -121.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(110.5 122)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<linearGradient id=\"SVGID_16143_21\" gradientUnits=\"userSpaceOnUse\" x1=\"110.5\" y1=\"244\" x2=\"110.5\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(110.5 122)\" style=\"\">\n\t<linearGradient id=\"SVGID_16143_21\" gradientUnits=\"userSpaceOnUse\" x1=\"111\" y1=\"244.5\" x2=\"111\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 0 0 L 220 0 L 220 243 L 0 243 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16143_21&quot;); fill-rule: nonzero; opacity: 0; pointer-events: auto;\" transform=\"translate(0 0) translate(-110, -121.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(110.5 122)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<linearGradient id=\"SVGID_16143_22\" gradientUnits=\"userSpaceOnUse\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"244\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(110.5 122)\" style=\"\">\n\t<linearGradient id=\"SVGID_16143_22\" gradientUnits=\"userSpaceOnUse\" x1=\"0.5\" y1=\"0.5\" x2=\"0.5\" y2=\"244.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 0 0 L 220 0 L 220 243 L 0 243 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16143_22&quot;); fill-rule: nonzero; opacity: 0; pointer-events: auto;\" transform=\"translate(0 0) translate(-110, -121.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(110.5 122)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<linearGradient id=\"SVGID_16143_23\" gradientUnits=\"userSpaceOnUse\" x1=\"110.5\" y1=\"244\" x2=\"110.5\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(110.5 122)\" style=\"\">\n\t<linearGradient id=\"SVGID_16143_23\" gradientUnits=\"userSpaceOnUse\" x1=\"111\" y1=\"244.5\" x2=\"111\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 0 0 L 220 0 L 220 243 L 0 243 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_16143_23&quot;); fill-rule: nonzero; opacity: 0; pointer-events: auto;\" transform=\"translate(0 0) translate(-110, -121.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(110.5 122)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0;\">"}
};
image16151.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj16151Img\" src=\"images/btn2.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 223px; height: 244px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 572px; top: 281px; width: 223px; height: 244px; z-index: 10;",
	cssClasses:	"",
	htmlId:		"tobj16151",
	bInsAnc:	0,
	cwObj:		{
		"name":	"btn2"
	},
	objData:	{"a":[0,288,0,[572,281,223,244]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":572,"y":281,"width":223,"height":244}}
};
text16158.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 221px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 221px; min-height: 20px;\"><p style=\"text-align: center;\"><span style=\"font-size: 11pt; color: rgb(255, 255, 255); font-family: Calibri, sans-serif;\">Ik heb richting nodig.</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 573px; top: 432px; width: 221px; height: 20px; z-index: 11;",
	cssClasses:	"OpenSans",
	htmlId:		"tobj16158",
	bInsAnc:	0,
	cwObj:		{
		"name":	"txt-ikWilDoen"
	},
	objData:	{"a":[0,32,0,[573,432,221,20]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":573,"y":432,"width":221,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"9","color":null,"bgColor":null,"name":"'Verdana',sans serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	2
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/btn1.png","images/btn2.png","images/btn_close.png","images/btn_close_mo.png","images/zonder%20elementen-06.png"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1009px; height: 662px; overflow: hidden; background-size: auto;'
rcdObj.backgrd_Desktop = ["#ffffff","",0,0,1];
