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
	innerHtml:	"<svg viewBox=\"0 0 36 36\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(18 18)\" style=\"\">\n	<path d=\"M 0 0 L 36 0 L 36 36 L 0 36 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-18, -18) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_17150_15662_1\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"36\" height=\"36\" xlink:href=\"images/btn_close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 36 0 L 36 36 L 0 36 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_17150_15662_1&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-18, -18) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(18 18)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"21.3333328\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"6.72\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 962px; top: 12.00000000000001px; width: 36px; height: 36px; z-index: 1; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[7,33184,0,[962,12.00000000000001,36,36]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":962,"y":12,"width":36,"height":36},"imgDataNormal":"images/desktop_shape21748.png","imgDataOver":"images/desktop_shape21748_over.png","imgDataDown":"images/desktop_shape21748_over.png","imgDataDisabled":"images/desktop_shape21748_disabled.png","svgDataNormal":"<g transform=\"translate(18 18)\" style=\"\">\n\t<path d=\"M 0 0 L 36 0 L 36 36 L 0 36 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-18, -18) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_17150_15662_1\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"36\" height=\"36\" xlink:href=\"images/btn_close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 36 0 L 36 36 L 0 36 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_17150_15662_1&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-18, -18) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(18 18)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"21.3333328\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(18 18)\" style=\"\">\n\t<path d=\"M 0 0 L 36 0 L 36 36 L 0 36 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-18, -18) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_17150_15662_3\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"36\" height=\"36\" xlink:href=\"images/btn_close_mo.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 36 0 L 36 36 L 0 36 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_17150_15662_3&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-18, -18) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(18 18)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"21.3333328\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(18 18)\" style=\"\">\n\t<path d=\"M 0 0 L 36 0 L 36 36 L 0 36 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-18, -18) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_17150_15662_5\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"36\" height=\"36\" xlink:href=\"images/btn_close_mo.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 36 0 L 36 36 L 0 36 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_17150_15662_5&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-18, -18) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(18 18)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"21.3333328\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(18 18)\" style=\"\">\n\t<path d=\"M 0 0 L 36 0 L 36 36 L 0 36 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-18, -18) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_17150_15662_7\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"36\" height=\"36\" xlink:href=\"images/btn_close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 36 0 L 36 36 L 0 36 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_17150_15662_7&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-18, -18) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(18 18)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"21.3333328\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
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
image21769.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj21769Img\" src=\"images/zonder%20elementen-06.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 1010px; height: 663px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 0px; width: 1010px; height: 663px; z-index: 3;",
	cssClasses:	"",
	htmlId:		"tobj21769",
	bInsAnc:	0,
	cwObj:		{
		"name":	"zonder elementen-06"
	},
	objData:	{"a":[0,288,0,[0,0,1010,663]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1010,"height":663}}
};
image21881.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj21881Img\" src=\"images/richting.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 75px; height: 75px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 928px; top: 6px; width: 75px; height: 75px; z-index: 4;",
	cssClasses:	"",
	htmlId:		"tobj21881",
	bInsAnc:	0,
	cwObj:		{
		"name":	"richting"
	},
	objData:	{"a":[0,288,0,[928,6,75,75]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":928,"y":6,"width":75,"height":75}}
};
text17188.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 935px; min-height: 23px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 935px; min-height: 23px;\"><p style=\"text-align: left; margin-bottom: 0px; margin-top: 0px;\"><span style=\"font-size: 11pt; color: rgb(0, 53, 71); font-family: calibri, sans-serif;\">Beantwoord onderstaande&nbsp;vragen. Op de volgende pagina zie je de uitslag.</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 30px; top: 65px; width: 935px; height: 23px; z-index: 5;",
	cssClasses:	"OpenSans",
	htmlId:		"tobj17188",
	bInsAnc:	0,
	cwObj:		{
		"name":	"bodytext"
	},
	objData:	{"a":[0,32,0,[30,65,935,23]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":30,"y":65,"width":935,"height":23},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text17187.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 613px; min-height: 40px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 613px; min-height: 40px;\"><p style=\"line-height: 1.15; margin-top: 0px; margin-bottom: 0px;\"><strong><span style=\"font-family: Calibri, sans-serif; color: rgb(255, 255, 255); font-size: 24pt;\">Ik heb richting nodig</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 30px; top: 20px; width: 613px; height: 40px; z-index: 6;",
	cssClasses:	"Roboto",
	htmlId:		"tobj17187",
	bInsAnc:	0,
	cwObj:		{
		"name":	"page-title"
	},
	objData:	{"a":[0,32,0,[30,20,613,40]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":30,"y":20,"width":613,"height":40},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og17174.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og17174",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
image17175.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj17175Img\" src=\"images/Middel%206.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 296px; height: 526px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 57px; top: 96px; width: 296px; height: 526px; z-index: 7;",
	cssClasses:	"",
	htmlId:		"tobj17175",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Middel 6"
	},
	objData:	{"a":[0,288,0,[57,96,296,526]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":57,"y":96,"width":296,"height":526}}
};
text17183.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 269px; min-height: 32px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 269px; min-height: 32px;\"><p><strong><span style=\"font-family: Arial, sans-serif; color: rgb(0, 53, 71); font-size: 14pt;\">1. Wat is jouw functie?</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 78px; top: 117px; width: 269px; height: 32px; z-index: 8;",
	cssClasses:	"Roboto",
	htmlId:		"tobj17183",
	bInsAnc:	0,
	cwObj:		{
		"name":	"title"
	},
	objData:	{"a":[0,32,0,[78,117,269,32]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":78,"y":117,"width":269,"height":32},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton18425.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 183 33\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(91.5 16.5)\" style=\"\">\n	<path d=\"M 0 0 L 183 0 L 183 33 L 0 33 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-91.5, -16.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_17150_25\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"183\" height=\"33\" xlink:href=\"images/volgende1.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 183 0 L 183 33 L 0 33 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_17150_25&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-91.5, -16.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(91.5 16.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 115px; top: 552px; width: 183px; height: 33px; z-index: 56; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj18425",
	bInsAnc:	1,
	cwObj:		{
		"name":	"volgende 1",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og17251.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ qu21391.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ qu21410.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[115,552,183,33]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":115,"y":552,"width":183,"height":33},"imgDataNormal":"images/desktop_shape18425.png","imgDataOver":"images/desktop_shape18425.png","imgDataDown":"images/desktop_shape18425.png","imgDataDisabled":"images/desktop_shape18425_disabled.png","svgDataNormal":"<g transform=\"translate(91.5 16.5)\" style=\"\">\n\t<path d=\"M 0 0 L 183 0 L 183 33 L 0 33 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91.5, -16.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_17150_25\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"183\" height=\"33\" xlink:href=\"images/volgende1.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 183 0 L 183 33 L 0 33 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_17150_25&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91.5, -16.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91.5 16.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(91.5 16.5)\" style=\"\">\n\t<path d=\"M 0 0 L 183 0 L 183 33 L 0 33 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91.5, -16.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_17150_27\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"183\" height=\"33\" xlink:href=\"images/volgende1.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 183 0 L 183 33 L 0 33 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_17150_27&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91.5, -16.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91.5 16.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(91.5 16.5)\" style=\"\">\n\t<path d=\"M 0 0 L 183 0 L 183 33 L 0 33 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91.5, -16.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_17150_29\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"183\" height=\"33\" xlink:href=\"images/volgende1.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 183 0 L 183 33 L 0 33 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_17150_29&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91.5, -16.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91.5 16.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(91.5 16.5)\" style=\"\">\n\t<path d=\"M 0 0 L 183 0 L 183 33 L 0 33 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-91.5, -16.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_17150_31\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"183\" height=\"33\" xlink:href=\"images/volgende1.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 183 0 L 183 33 L 0 33 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_17150_31&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-91.5, -16.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91.5 16.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og17251.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og17251",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image17252.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj17252Img\" src=\"images/Middel%206.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 296px; height: 526px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 357px; top: 96px; width: 296px; height: 526px; z-index: 9;",
	cssClasses:	"",
	htmlId:		"tobj17252",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Middel 6"
	},
	objData:	{"a":[0,256,0,[357,96,296,526]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":357,"y":96,"width":296,"height":526}}
};
text24020.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 267px; min-height: 48px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 267px; min-height: 48px;\"><p style=\"text-align:left\"><strong><span style=\"font-family: &quot;Arial&quot;, sans-serif; font-size: 10pt; color: rgb(0, 53, 71);\">Ik wil basiskennis over ...</span></strong></p>\n\n<p style=\"text-align:left\"><strong style=\"null\"><span style=\"font-size: 10pt; color: rgb(0, 53, 71); font-family: Arial, sans-serif;\">​</span></strong></p>\n\n<p style=\"text-align:left\"><span style=\"font-size: 9pt; font-family: Verdana, sans-serif; color: rgb(0, 53, 71);\">Meerdere antwoorden zijn mogelijk.</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 377px; top: 150px; width: 267px; height: 48px; z-index: 10;",
	cssClasses:	"OpenSans",
	htmlId:		"tobj24020",
	bInsAnc:	0,
	cwObj:		{
		"name":	"question"
	},
	objData:	{"a":[0,0,0,[377,150,267,48]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":377,"y":150,"width":267,"height":48},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text21404.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 263px; min-height: 45px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 263px; min-height: 45px;\"><p style=\"text-align:left\"><strong><span style=\"font-family: Arial, sans-serif; font-size: 10pt; color: rgb(0, 53, 71);\">Ik wil me&nbsp;verdiepen in ...</span></strong></p>\n\n<p style=\"text-align:left\"><strong style=\"null\"><span style=\"font-size: 10pt; color: rgb(0, 53, 71); font-family: Arial, sans-serif;\">​</span></strong></p>\n\n<p style=\"text-align:left\"><span style=\"font-size: 9pt; font-family: Verdana, sans-serif; color: rgb(0, 53, 71);\">Meerdere antwoorden zijn mogelijk.</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 377px; top: 282px; width: 263px; height: 45px; z-index: 11;",
	cssClasses:	"OpenSans",
	htmlId:		"tobj21404",
	bInsAnc:	0,
	cwObj:		{
		"name":	"question"
	},
	objData:	{"a":[0,0,0,[377,282,263,45]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":377,"y":282,"width":263,"height":45},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text21383.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 260px; min-height: 22px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 260px; min-height: 22px;\"><p><strong><span style=\"font-family: Arial, sans-serif; color: rgb(0, 53, 71); font-size: 14pt;\">2. Wat wil jij leren?</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 377px; top: 117px; width: 260px; height: 22px; z-index: 12;",
	cssClasses:	"Roboto",
	htmlId:		"tobj21383",
	bInsAnc:	0,
	cwObj:		{
		"name":	"title"
	},
	objData:	{"a":[0,0,0,[377,117,260,22]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":377,"y":117,"width":260,"height":22},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton18427.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 183 33\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(91.5 16.5)\" style=\"\">\n	<path d=\"M 0 0 L 183 0 L 183 33 L 0 33 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-91.5, -16.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_17150_33\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"183\" height=\"33\" xlink:href=\"images/volgende1.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 183 0 L 183 33 L 0 33 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_17150_33&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-91.5, -16.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(91.5 16.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 410px; top: 552px; width: 183px; height: 33px; z-index: 57; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj18427",
	bInsAnc:	1,
	cwObj:		{
		"name":	"volgende 2",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og17269.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ qu21430.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[410,552,183,33]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":410,"y":552,"width":183,"height":33},"imgDataNormal":"images/desktop_shape18425.png","imgDataOver":"images/desktop_shape18425.png","imgDataDown":"images/desktop_shape18425.png","imgDataDisabled":"images/desktop_shape18425_disabled.png","svgDataNormal":"<g transform=\"translate(91.5 16.5)\" style=\"\">\n\t<path d=\"M 0 0 L 183 0 L 183 33 L 0 33 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91.5, -16.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_17150_33\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"183\" height=\"33\" xlink:href=\"images/volgende1.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 183 0 L 183 33 L 0 33 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_17150_33&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91.5, -16.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91.5 16.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(91.5 16.5)\" style=\"\">\n\t<path d=\"M 0 0 L 183 0 L 183 33 L 0 33 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91.5, -16.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_17150_35\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"183\" height=\"33\" xlink:href=\"images/volgende1.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 183 0 L 183 33 L 0 33 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_17150_35&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91.5, -16.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91.5 16.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(91.5 16.5)\" style=\"\">\n\t<path d=\"M 0 0 L 183 0 L 183 33 L 0 33 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91.5, -16.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_17150_37\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"183\" height=\"33\" xlink:href=\"images/volgende1.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 183 0 L 183 33 L 0 33 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_17150_37&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91.5, -16.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91.5 16.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(91.5 16.5)\" style=\"\">\n\t<path d=\"M 0 0 L 183 0 L 183 33 L 0 33 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-91.5, -16.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_17150_39\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"183\" height=\"33\" xlink:href=\"images/volgende1.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 183 0 L 183 33 L 0 33 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_17150_39&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-91.5, -16.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91.5 16.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og17269.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og17269",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image17270.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj17270Img\" src=\"images/Middel%206.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 296px; height: 526px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 657px; top: 96px; width: 296px; height: 526px; z-index: 13;",
	cssClasses:	"",
	htmlId:		"tobj17270",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Middel 6"
	},
	objData:	{"a":[0,256,0,[657,96,296,526]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":657,"y":96,"width":296,"height":526}}
};
text21387.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 261px; min-height: 32px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 261px; min-height: 32px;\"><p><strong><span style=\"font-family: Arial, sans-serif; color: rgb(0, 53, 71); font-size: 14pt;\">3. Hoe leer jij graag?</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 677px; top: 117px; width: 261px; height: 32px; z-index: 14;",
	cssClasses:	"Roboto",
	htmlId:		"tobj21387",
	bInsAnc:	0,
	cwObj:		{
		"name":	"title"
	},
	objData:	{"a":[0,0,0,[677,117,261,32]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":677,"y":117,"width":261,"height":32},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
textbutton18439.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 182 33\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(91 16.5)\" style=\"\">\n	<path d=\"M 0 0 L 182 0 L 182 33 L 0 33 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -16.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_17150_41\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"182\" height=\"33\" xlink:href=\"images/bekijk%20selectie.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 182 0 L 182 33 L 0 33 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_17150_41&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -16.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(91 16.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 717px; top: 552px; width: 182px; height: 33px; z-index: 58; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj18439",
	bInsAnc:	1,
	cwObj:		{
		"name":	"bekijk selectie",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVarTerug',actItem:function(){ if(Varbegeleidroute.equals('1')&&Varkompas_btn01.equals('0')&&Varkompas_btn02.equals('0')&&Varkompas_btn03.equals('0')&&Varkompas_btn04.equals('0')&&Varkompas_btn05.equals('0')&&Varkompas_btn06.equals('0')&&Varkompas_btn07.equals('0')&&Varkompas_btn08.equals('0')&&Varkompas_btn09.equals('0')&&Varkompas_btn10.equals('0')&&Varkompas_btn11.equals('0')&&Varkompas_btn12.equals('0')&&Varkompas_btn13.equals('0')&&Varkompas_btn14.equals('0')&&Varkompas_btn15.equals('0')&&Varkompas_btn16.equals('0')&&Varkompas_btn17.equals('0')&&Varkompas_btn18.equals('0')&&Varkompas_btn19.equals('0'))Varterugnaardevraag.set('0'); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar01',actItem:function(){ if(!Varvraag1.contains('f')&&Varvraag2_1.contains('a')&&Varvraag3.contains('a')&&!Varvraag1.contains('j')&&!Varvraag1.contains('k'))Varkompas_btn01.set('0'); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar02',actItem:function(){ if(!Varvraag1.contains('f')&&Varvraag2_1.contains('a')&&Varvraag3.contains('a')&&!Varvraag1.contains('j')&&!Varvraag1.contains('k'))Varkompas_btn02.set('0'); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar03',actItem:function(){ if(!Varvraag1.contains('f')&&Varvraag2_1.contains('a')&&Varvraag3.contains('a')&&!Varvraag1.contains('j')&&!Varvraag1.contains('k'))Varkompas_btn03.set('0'); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar04',actItem:function(){ if(!Varvraag1.contains('g')&&Varvraag2_2.contains('g')&&Varvraag3.contains('a')&&!Varvraag1.contains('h')&&!Varvraag1.contains('i')&&!Varvraag1.contains('j')&&!Varvraag1.contains('k'))Varkompas_btn04.set('0'); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar05',actItem:function(){ if(!Varvraag1.contains('g')&&Varvraag2_2.contains('h')&&Varvraag3.contains('a')&&!Varvraag1.contains('h')&&!Varvraag1.contains('i')&&!Varvraag1.contains('j')&&!Varvraag1.contains('k'))Varkompas_btn05.set('0'); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar06',actItem:function(){ if(!Varvraag1.contains('g')&&Varvraag2_2.contains('h')&&Varvraag3.contains('a')&&!Varvraag1.contains('f')&&!Varvraag1.contains('j')&&!Varvraag1.contains('k'))Varkompas_btn06.set('0'); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar07',actItem:function(){ if(!Varvraag1.contains('f')&&Varvraag2_2.contains('h')&&Varvraag3.contains('a')&&!Varvraag1.contains('j')&&!Varvraag1.contains('k'))Varkompas_btn07.set('0'); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar08',actItem:function(){ if(!Varvraag1.contains('f')&&Varvraag2_2.contains('d')&&Varvraag3.contains('a')&&!Varvraag1.contains('g')&&!Varvraag1.contains('h')&&!Varvraag1.contains('i')&&!Varvraag1.contains('j')&&!Varvraag1.contains('k'))Varkompas_btn08.set('0'); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar09',actItem:function(){ if(!Varvraag1.contains('f')&&Varvraag2_2.contains('d')&&Varvraag3.contains('a')&&!Varvraag1.contains('g')&&!Varvraag1.contains('j')&&!Varvraag1.contains('k'))Varkompas_btn09.set('0'); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar10',actItem:function(){ if(!Varvraag1.contains('f')&&Varvraag2_2.contains('d')&&Varvraag3.contains('a')&&!Varvraag1.contains('g')&&!Varvraag1.contains('j')&&!Varvraag1.contains('k'))Varkompas_btn10.set('0'); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar11',actItem:function(){ if(!Varvraag1.contains('f')&&Varvraag2_1.contains('a')&&Varvraag3.contains('b')&&!Varvraag1.contains('g')&&!Varvraag1.contains('j')&&!Varvraag1.contains('k'))Varkompas_btn11.set('0'); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar12',actItem:function(){ if(Varvraag2_2.contains('e')&&Varvraag3.contains('a')&&!Varvraag1.contains('h')&&!Varvraag1.contains('i')&&!Varvraag1.contains('j')&&!Varvraag1.contains('k'))Varkompas_btn12.set('0'); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar13',actItem:function(){ if(Varvraag2_2.contains('e')&&Varvraag3.contains('a')&&!Varvraag1.contains('h')&&!Varvraag1.contains('i')&&!Varvraag1.contains('g')&&!Varvraag1.contains('j')&&!Varvraag1.contains('k'))Varkompas_btn13.set('0'); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar14',actItem:function(){ if(Varvraag2_2.contains('e')&&Varvraag3.contains('a')&&!Varvraag1.contains('h')&&!Varvraag1.contains('i')&&!Varvraag1.contains('g')&&!Varvraag1.contains('f')&&!Varvraag1.contains('j')&&!Varvraag1.contains('k'))Varkompas_btn14.set('0'); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar15',actItem:function(){ if(Varvraag2_2.contains('f')&&Varvraag3.contains('a')&&!Varvraag1.contains('h')&&!Varvraag1.contains('i')&&!Varvraag1.contains('j')&&!Varvraag1.contains('k'))Varkompas_btn15.set('0'); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar16',actItem:function(){ if(Varvraag2_2.contains('f')&&Varvraag3.contains('a')&&!Varvraag1.contains('h')&&!Varvraag1.contains('i')&&!Varvraag1.contains('g')&&!Varvraag1.contains('j')&&!Varvraag1.contains('k'))Varkompas_btn16.set('0'); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar17',actItem:function(){ if(Varvraag3.contains('a')&&!Varvraag1.contains('h')&&Varvraag2_1.contains('b')&&!Varvraag1.contains('i')&&!Varvraag1.contains('j')&&!Varvraag1.contains('k'))Varkompas_btn17.set('0'); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar18',actItem:function(){ if(Varvraag3.contains('a')&&!Varvraag1.contains('h')&&!Varvraag1.contains('i')&&!Varvraag1.contains('g')&&Varvraag2_2.contains('f')&&!Varvraag1.contains('j')&&!Varvraag1.contains('k'))Varkompas_btn18.set('0'); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar18',actItem:function(){ if(Varvraag2_2.contains('e')&&Varvraag3.contains('a')&&!Varvraag1.contains('h')&&!Varvraag1.contains('i')&&!Varvraag1.contains('g')&&!Varvraag1.contains('j')&&!Varvraag1.contains('k'))Varkompas_btn18.set('0'); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar19',actItem:function(){ if(Varvraag3.contains('a')&&!Varvraag1.contains('h')&&!Varvraag1.contains('i')&&!Varvraag1.contains('g')&&Varvraag2_2.contains('e')&&!Varvraag1.contains('j')&&!Varvraag1.contains('k'))Varkompas_btn19.set('0'); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar19',actItem:function(){ if(Varvraag2_2.contains('f')&&Varvraag3.contains('a')&&!Varvraag1.contains('h')&&!Varvraag1.contains('i')&&!Varvraag1.contains('g')&&!Varvraag1.contains('j')&&!Varvraag1.contains('k'))Varkompas_btn19.set('0'); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar20',actItem:function(){ if(Varvraag3.contains('c'))Varkompas_btn20.set('0'); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar21',actItem:function(){ if(Varvraag3.contains('c'))Varkompas_btn21.set('0'); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar22',actItem:function(){ if(Varvraag3.contains('c'))Varkompas_btn22.set('0'); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar23',actItem:function(){ if(Varvraag3.contains('c'))Varkompas_btn23.set('0'); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar24',actItem:function(){ if(Varvraag1.contains('e')&&Varvraag2_1.contains('a')&&Varvraag3.contains('a'))Varkompas_btn24.set('0'); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar24',actItem:function(){ if(Varvraag1.contains('j')&&Varvraag2_1.contains('a')&&Varvraag3.contains('a'))Varkompas_btn24.set('0'); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar24',actItem:function(){ if(Varvraag1.contains('k')&&Varvraag2_1.contains('a')&&Varvraag3.contains('a'))Varkompas_btn24.set('1'); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar25',actItem:function(){ if(Varvraag1.contains('j')&&Varvraag2_2.contains('d')&&Varvraag3.contains('a'))Varkompas_btn25.set('0'); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar25',actItem:function(){ if(Varvraag1.contains('k')&&Varvraag2_2.contains('d')&&Varvraag3.contains('a'))Varkompas_btn25.set('0'); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar26',actItem:function(){ if(Varvraag1.contains('j')&&Varvraag2_2.contains('d')&&Varvraag3.contains('a'))Varkompas_btn26.set('0'); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar26',actItem:function(){ if(Varvraag1.contains('k')&&Varvraag2_2.contains('d')&&Varvraag3.contains('a'))Varkompas_btn26.set('0'); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'VarBasis',actItem:function(){ if(Varkompas_btn01.equals('0')||Varkompas_btn02.equals('0')||Varkompas_btn03.equals('0'))VarBASIS.set('0'); else VarBASIS.set('1'); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'VarPsycho',actItem:function(){ if(Varkompas_btn04.equals('0'))VarPSYCHO.set('0'); else VarPSYCHO.set('1'); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'VarLWK',actItem:function(){ if(Varkompas_btn06.equals('0')||Varkompas_btn07.equals('0')||Varkompas_btn08.equals('0')||Varkompas_btn09.equals('0')||Varkompas_btn10.equals('0')||Varkompas_btn11.equals('0')||Varkompas_btn22.equals('0')||Varkompas_btn23.equals('0')||Varkompas_btn24.equals('0')||Varkompas_btn25.equals('0')||Varkompas_btn26.equals('0'))VarLWK.set('0'); else VarLWK.set('1'); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'VarRTM',actItem:function(){ if(Varkompas_btn05.equals('0')||Varkompas_btn12.equals('0')||Varkompas_btn13.equals('0')||Varkompas_btn14.equals('0')||Varkompas_btn15.equals('0')||Varkompas_btn16.equals('0')||Varkompas_btn17.equals('0')||Varkompas_btn18.equals('0')||Varkompas_btn19.equals('0')||Varkompas_btn20.equals('0')||Varkompas_btn21.equals('1'))VarRTM.set('0'); else VarRTM.set('1'); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('forensisch_kompas_kompas_bg_overzicht.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[717,552,182,33]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":717,"y":552,"width":182,"height":33},"imgDataNormal":"images/desktop_shape18439.png","imgDataOver":"images/desktop_shape18439.png","imgDataDown":"images/desktop_shape18439.png","imgDataDisabled":"images/desktop_shape18439_disabled.png","svgDataNormal":"<g transform=\"translate(91 16.5)\" style=\"\">\n\t<path d=\"M 0 0 L 182 0 L 182 33 L 0 33 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -16.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_17150_41\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"182\" height=\"33\" xlink:href=\"images/bekijk%20selectie.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 182 0 L 182 33 L 0 33 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_17150_41&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -16.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91 16.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(91 16.5)\" style=\"\">\n\t<path d=\"M 0 0 L 182 0 L 182 33 L 0 33 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -16.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_17150_43\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"182\" height=\"33\" xlink:href=\"images/bekijk%20selectie.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 182 0 L 182 33 L 0 33 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_17150_43&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -16.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91 16.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(91 16.5)\" style=\"\">\n\t<path d=\"M 0 0 L 182 0 L 182 33 L 0 33 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -16.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_17150_45\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"182\" height=\"33\" xlink:href=\"images/bekijk%20selectie.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 182 0 L 182 33 L 0 33 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_17150_45&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -16.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91 16.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(91 16.5)\" style=\"\">\n\t<path d=\"M 0 0 L 182 0 L 182 33 L 0 33 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -16.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_17150_47\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"182\" height=\"33\" xlink:href=\"images/bekijk%20selectie.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 182 0 L 182 33 L 0 33 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_17150_47&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -16.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91 16.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
qu18463.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"qu18463",
	bInsAnc:	undefined,
	cwObj:		{
				"crLineColor":	"",
				"questType":	2,
				"dwQuestFlags":	0,
				"doImmFeedback":	0,
				"maxAllowedAttempts":	0,
				"arrAns":	["\\u0053\\u0050\\u0056"],
				"correctFeedbackFunc":	0,
				"incorrectFeedbackFunc":	0,
				"attemptsFeedbackFunc":	0,
				"varQuest":	VarQuestion_18463
	},
	objData:	{"a":[0,32,0,[]]}
};
text18472.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"opacity:0;filter:alpha(opacity=0); position: absolute; left: 0px; top: 0px; width: 88px; min-height: 17px;\"><legend><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 88px; min-height: 17px;\"><p align=\"left\"><span style=\"font-family:\'Verdana\',sans serif;color:#000000;font-size:9pt;\">Question Text</span></p></div></legend></div>",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 140px; width: 88px; height: 17px; z-index: 15;",
	cssClasses:	"",
	htmlId:		"tobj18472",
	bInsAnc:	0,
	fieldsetId:	'fset18463',
	cwObj:		{
		"name":	"Question Text"
	},
	objData:	{"a":[0,32,0,[0,140,88,17]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":140,"width":88,"height":17},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text18473.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 238px; min-height: 17px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 238px; min-height: 17px;\"><label for=\"rad18474\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family: &quot;Verdana&quot;, sans serif; color: rgb(0, 53, 71); font-size: 9pt;\">SPV</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 109px; top: 151px; width: 238px; height: 17px; z-index: 16;",
	cssClasses:	"OpenSans",
	htmlId:		"tobj18473",
	bInsAnc:	0,
	fieldsetId:	'fset18463',
	cwObj:		{
		"name":	"Choice 1 text"
	},
	objData:	{"a":[0,32,0,[109,151,238,17]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":109,"y":151,"width":238,"height":17},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio18474.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 12px; height: 13px;\"><input type=\"radio\" id=\"rad18474\" name=\"rad18463\" value=\"SPV\" onclick=\"VarQuestion_18463.set(this.value);qu18463.questionUpdated();radio18474.issueActions(12);\" style=\"left: -2000px; position: absolute; cursor: pointer; background-image: url(&quot;https://my.lectoraonline.nl/app/BN00364/images/trivantis-blank.gif&quot;);\"><label for=\"rad18474\" style=\"font-size: 9pt; font-family: Verdana, &quot;sans serif&quot;; color: rgb(0, 0, 0); background-image: url(&quot;images/MC-rondje.png&quot;); cursor: pointer; position: absolute; padding-left: 12px; text-align: left; height: 100%; line-height: 13px; background-position: 0px 50%; background-repeat: no-repeat;\"></label></div>",
	cssText:	"visibility: inherit; position: absolute; left: 80px; top: 153px; width: 12px; height: 13px; z-index: 17;",
	cssClasses:	"",
	htmlId:		"tobj18474",
	bInsAnc:	0,
	fieldsetId:	'fset18463',
	cwObj:		{
		"name":	"1a",
		"arChld":
	[
		{type:6,on:12,delay:0,name:'OnSelectChangeModVar',actItem:function(){ Varvraag1.set('a'); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[0,32,0,[80,153,12,13]],"desktopRect":{"x":80,"y":153,"width":12,"height":13},"formType":1,"dwFormFlags":0}
};
text18475.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 238px; min-height: 17px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 238px; min-height: 17px;\"><label for=\"rad18476\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family: &quot;Verdana&quot;, sans serif; color: rgb(0, 53, 71); font-size: 9pt;\">verpleegkundige</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 109px; top: 178px; width: 238px; height: 17px; z-index: 18;",
	cssClasses:	"OpenSans",
	htmlId:		"tobj18475",
	bInsAnc:	0,
	fieldsetId:	'fset18463',
	cwObj:		{
		"name":	"Choice 2 text"
	},
	objData:	{"a":[0,32,0,[109,178,238,17]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":109,"y":178,"width":238,"height":17},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio18476.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 12px; height: 13px;\"><input type=\"radio\" id=\"rad18476\" name=\"rad18463\" value=\"verpleegkundige\" onclick=\"VarQuestion_18463.set(this.value);qu18463.questionUpdated();radio18476.issueActions(12);\" style=\"left: -2000px; position: absolute; cursor: pointer; background-image: url(&quot;https://my.lectoraonline.nl/app/BN00364/images/trivantis-blank.gif&quot;);\"><label for=\"rad18476\" style=\"font-size: 9pt; font-family: Verdana, &quot;sans serif&quot;; color: rgb(0, 0, 0); background-image: url(&quot;images/MC-rondje.png&quot;); cursor: pointer; position: absolute; padding-left: 12px; text-align: left; height: 100%; line-height: 13px; background-position: 0px 50%; background-repeat: no-repeat;\"></label></div>",
	cssText:	"visibility: inherit; position: absolute; left: 80px; top: 180px; width: 12px; height: 13px; z-index: 19;",
	cssClasses:	"",
	htmlId:		"tobj18476",
	bInsAnc:	0,
	fieldsetId:	'fset18463',
	cwObj:		{
		"name":	"1b",
		"arChld":
	[
		{type:6,on:12,delay:0,name:'OnSelectChangeModVar',actItem:function(){ Varvraag1.set('b'); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[0,32,0,[80,180,12,13]],"desktopRect":{"x":80,"y":180,"width":12,"height":13},"formType":1,"dwFormFlags":0}
};
text18477.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 238px; min-height: 17px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 238px; min-height: 17px;\"><label for=\"rad18478\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family: &quot;Verdana&quot;, sans serif; color: rgb(0, 53, 71); font-size: 9pt;\">SPH</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 109px; top: 205px; width: 238px; height: 17px; z-index: 20;",
	cssClasses:	"OpenSans",
	htmlId:		"tobj18477",
	bInsAnc:	0,
	fieldsetId:	'fset18463',
	cwObj:		{
		"name":	"Choice 3 text"
	},
	objData:	{"a":[0,32,0,[109,205,238,17]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":109,"y":205,"width":238,"height":17},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio18478.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 12px; height: 13px;\"><input type=\"radio\" id=\"rad18478\" name=\"rad18463\" value=\"SPH\" onclick=\"VarQuestion_18463.set(this.value);qu18463.questionUpdated();radio18478.issueActions(12);\" style=\"left: -2000px; position: absolute; cursor: pointer; background-image: url(&quot;https://my.lectoraonline.nl/app/BN00364/images/trivantis-blank.gif&quot;);\"><label for=\"rad18478\" style=\"font-size: 9pt; font-family: Verdana, &quot;sans serif&quot;; color: rgb(0, 0, 0); background-image: url(&quot;images/MC-rondje.png&quot;); cursor: pointer; position: absolute; padding-left: 12px; text-align: left; height: 100%; line-height: 13px; background-position: 0px 50%; background-repeat: no-repeat;\"></label></div>",
	cssText:	"visibility: inherit; position: absolute; left: 80px; top: 207px; width: 12px; height: 13px; z-index: 21;",
	cssClasses:	"",
	htmlId:		"tobj18478",
	bInsAnc:	0,
	fieldsetId:	'fset18463',
	cwObj:		{
		"name":	"1c",
		"arChld":
	[
		{type:6,on:12,delay:0,name:'OnSelectChangeModVar',actItem:function(){ Varvraag1.set('c'); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[0,32,0,[80,207,12,13]],"desktopRect":{"x":80,"y":207,"width":12,"height":13},"formType":1,"dwFormFlags":0}
};
text18511.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 238px; min-height: 17px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 238px; min-height: 17px;\"><label for=\"rad18512\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family: &quot;Verdana&quot;, sans serif; color: rgb(0, 53, 71); font-size: 9pt;\">psycholoog</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 109px; top: 232px; width: 238px; height: 17px; z-index: 22;",
	cssClasses:	"OpenSans",
	htmlId:		"tobj18511",
	bInsAnc:	0,
	fieldsetId:	'fset18463',
	cwObj:		{
		"name":	"Choice 4 text"
	},
	objData:	{"a":[0,32,0,[109,232,238,17]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":109,"y":232,"width":238,"height":17},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio18512.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 12px; height: 13px;\"><input type=\"radio\" id=\"rad18512\" name=\"rad18463\" value=\"psycholoog\" onclick=\"VarQuestion_18463.set(this.value);qu18463.questionUpdated();radio18512.issueActions(12);\" style=\"left: -2000px; position: absolute; cursor: pointer; background-image: url(&quot;https://my.lectoraonline.nl/app/BN00364/images/trivantis-blank.gif&quot;);\"><label for=\"rad18512\" style=\"font-size: 9pt; font-family: Verdana, &quot;sans serif&quot;; color: rgb(0, 0, 0); background-image: url(&quot;images/MC-rondje.png&quot;); cursor: pointer; position: absolute; padding-left: 12px; text-align: left; height: 100%; line-height: 13px; background-position: 0px 50%; background-repeat: no-repeat;\"></label></div>",
	cssText:	"visibility: inherit; position: absolute; left: 80px; top: 234px; width: 12px; height: 13px; z-index: 23;",
	cssClasses:	"",
	htmlId:		"tobj18512",
	bInsAnc:	0,
	fieldsetId:	'fset18463',
	cwObj:		{
		"name":	"1d",
		"arChld":
	[
		{type:6,on:12,delay:0,name:'OnSelectChangeModVar',actItem:function(){ Varvraag1.set('d'); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[0,32,0,[80,234,12,13]],"desktopRect":{"x":80,"y":234,"width":12,"height":13},"formType":1,"dwFormFlags":0}
};
text18513.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 238px; min-height: 17px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 238px; min-height: 17px;\"><label for=\"rad18514\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family: &quot;Verdana&quot;, sans serif; color: rgb(0, 53, 71); font-size: 9pt;\">maatschappelijk werker</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 109px; top: 259px; width: 238px; height: 17px; z-index: 24;",
	cssClasses:	"OpenSans",
	htmlId:		"tobj18513",
	bInsAnc:	0,
	fieldsetId:	'fset18463',
	cwObj:		{
		"name":	"Choice 5 text"
	},
	objData:	{"a":[0,32,0,[109,259,238,17]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":109,"y":259,"width":238,"height":17},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio18514.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 12px; height: 13px;\"><input type=\"radio\" id=\"rad18514\" name=\"rad18463\" value=\"maatschappelijk werker\" onclick=\"VarQuestion_18463.set(this.value);qu18463.questionUpdated();radio18514.issueActions(12);\" style=\"left: -2000px; position: absolute; cursor: pointer; background-image: url(&quot;https://my.lectoraonline.nl/app/BN00364/images/trivantis-blank.gif&quot;);\"><label for=\"rad18514\" style=\"font-size: 9pt; font-family: Verdana, &quot;sans serif&quot;; color: rgb(0, 0, 0); background-image: url(&quot;images/MC-rondje.png&quot;); cursor: pointer; position: absolute; padding-left: 12px; text-align: left; height: 100%; line-height: 13px; background-position: 0px 50%; background-repeat: no-repeat;\"></label></div>",
	cssText:	"visibility: inherit; position: absolute; left: 80px; top: 261px; width: 12px; height: 13px; z-index: 25;",
	cssClasses:	"",
	htmlId:		"tobj18514",
	bInsAnc:	0,
	fieldsetId:	'fset18463',
	cwObj:		{
		"name":	"1e",
		"arChld":
	[
		{type:6,on:12,delay:0,name:'OnSelectChangeModVar',actItem:function(){ Varvraag1.set('e'); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[0,32,0,[80,261,12,13]],"desktopRect":{"x":80,"y":261,"width":12,"height":13},"formType":1,"dwFormFlags":0}
};
text18515.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 238px; min-height: 17px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 238px; min-height: 17px;\"><label for=\"rad18516\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family: &quot;Verdana&quot;, sans serif; color: rgb(0, 53, 71); font-size: 9pt;\">zorgbehandel inrichtingsmedewerker</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 109px; top: 286px; width: 238px; height: 17px; z-index: 26;",
	cssClasses:	"OpenSans",
	htmlId:		"tobj18515",
	bInsAnc:	0,
	fieldsetId:	'fset18463',
	cwObj:		{
		"name":	"Choice 6 text"
	},
	objData:	{"a":[0,32,0,[109,286,238,17]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":109,"y":286,"width":238,"height":17},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio18516.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 12px; height: 13px;\"><input type=\"radio\" id=\"rad18516\" name=\"rad18463\" value=\"zorgbehandel inrichtingsmedewerker\" onclick=\"VarQuestion_18463.set(this.value);qu18463.questionUpdated();radio18516.issueActions(12);\" style=\"left: -2000px; position: absolute; cursor: pointer; background-image: url(&quot;https://my.lectoraonline.nl/app/BN00364/images/trivantis-blank.gif&quot;);\"><label for=\"rad18516\" style=\"font-size: 9pt; font-family: Verdana, &quot;sans serif&quot;; color: rgb(0, 0, 0); background-image: url(&quot;images/MC-rondje.png&quot;); cursor: pointer; position: absolute; padding-left: 12px; text-align: left; height: 100%; line-height: 13px; background-position: 0px 50%; background-repeat: no-repeat;\"></label></div>",
	cssText:	"visibility: inherit; position: absolute; left: 80px; top: 288px; width: 12px; height: 13px; z-index: 27;",
	cssClasses:	"",
	htmlId:		"tobj18516",
	bInsAnc:	0,
	fieldsetId:	'fset18463',
	cwObj:		{
		"name":	"1f",
		"arChld":
	[
		{type:6,on:12,delay:0,name:'OnSelectChangeModVar',actItem:function(){ Varvraag1.set('f'); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[0,32,0,[80,288,12,13]],"desktopRect":{"x":80,"y":288,"width":12,"height":13},"formType":1,"dwFormFlags":0}
};
text18517.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 238px; min-height: 17px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 238px; min-height: 17px;\"><label for=\"rad18518\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family: &quot;Verdana&quot;, sans serif; color: rgb(0, 53, 71); font-size: 9pt;\">sociotherapeut</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 109px; top: 313px; width: 238px; height: 17px; z-index: 28;",
	cssClasses:	"OpenSans",
	htmlId:		"tobj18517",
	bInsAnc:	0,
	fieldsetId:	'fset18463',
	cwObj:		{
		"name":	"Choice 7 text"
	},
	objData:	{"a":[0,32,0,[109,313,238,17]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":109,"y":313,"width":238,"height":17},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio18518.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 12px; height: 13px;\"><input type=\"radio\" id=\"rad18518\" name=\"rad18463\" value=\"sociotherapeut\" onclick=\"VarQuestion_18463.set(this.value);qu18463.questionUpdated();radio18518.issueActions(12);\" style=\"left: -2000px; position: absolute; cursor: pointer; background-image: url(&quot;https://my.lectoraonline.nl/app/BN00364/images/trivantis-blank.gif&quot;);\"><label for=\"rad18518\" style=\"font-size: 9pt; font-family: Verdana, &quot;sans serif&quot;; color: rgb(0, 0, 0); background-image: url(&quot;images/MC-rondje.png&quot;); cursor: pointer; position: absolute; padding-left: 12px; text-align: left; height: 100%; line-height: 13px; background-position: 0px 50%; background-repeat: no-repeat;\"></label></div>",
	cssText:	"visibility: inherit; position: absolute; left: 80px; top: 315px; width: 12px; height: 13px; z-index: 29;",
	cssClasses:	"",
	htmlId:		"tobj18518",
	bInsAnc:	0,
	fieldsetId:	'fset18463',
	cwObj:		{
		"name":	"1g",
		"arChld":
	[
		{type:6,on:12,delay:0,name:'OnSelectChangeModVar',actItem:function(){ Varvraag1.set('g'); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[0,32,0,[80,315,12,13]],"desktopRect":{"x":80,"y":315,"width":12,"height":13},"formType":1,"dwFormFlags":0}
};
text18519.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 238px; min-height: 17px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 238px; min-height: 17px;\"><label for=\"rad18520\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family: &quot;Verdana&quot;, sans serif; color: rgb(0, 53, 71); font-size: 9pt;\">vaktherapeut</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 109px; top: 340px; width: 238px; height: 17px; z-index: 30;",
	cssClasses:	"OpenSans",
	htmlId:		"tobj18519",
	bInsAnc:	0,
	fieldsetId:	'fset18463',
	cwObj:		{
		"name":	"Choice 8 text"
	},
	objData:	{"a":[0,32,0,[109,340,238,17]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":109,"y":340,"width":238,"height":17},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio18520.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 12px; height: 13px;\"><input type=\"radio\" id=\"rad18520\" name=\"rad18463\" value=\"vaktherapeut\" onclick=\"VarQuestion_18463.set(this.value);qu18463.questionUpdated();radio18520.issueActions(12);\" style=\"left: -2000px; position: absolute; cursor: pointer; background-image: url(&quot;https://my.lectoraonline.nl/app/BN00364/images/trivantis-blank.gif&quot;);\"><label for=\"rad18520\" style=\"font-size: 9pt; font-family: Verdana, &quot;sans serif&quot;; color: rgb(0, 0, 0); background-image: url(&quot;images/MC-rondje.png&quot;); cursor: pointer; position: absolute; padding-left: 12px; text-align: left; height: 100%; line-height: 13px; background-position: 0px 50%; background-repeat: no-repeat;\"></label></div>",
	cssText:	"visibility: inherit; position: absolute; left: 80px; top: 342px; width: 12px; height: 13px; z-index: 31;",
	cssClasses:	"",
	htmlId:		"tobj18520",
	bInsAnc:	0,
	fieldsetId:	'fset18463',
	cwObj:		{
		"name":	"1h",
		"arChld":
	[
		{type:6,on:12,delay:0,name:'OnSelectChangeModVar',actItem:function(){ Varvraag1.set('h'); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[0,32,0,[80,342,12,13]],"desktopRect":{"x":80,"y":342,"width":12,"height":13},"formType":1,"dwFormFlags":0}
};
text18521.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 238px; min-height: 17px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 238px; min-height: 17px;\"><label for=\"rad18522\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family: &quot;Verdana&quot;, sans serif; color: rgb(0, 53, 71); font-size: 9pt;\">ervaringsmedewerker</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 109px; top: 367px; width: 238px; height: 17px; z-index: 32;",
	cssClasses:	"OpenSans",
	htmlId:		"tobj18521",
	bInsAnc:	0,
	fieldsetId:	'fset18463',
	cwObj:		{
		"name":	"Choice 9 text"
	},
	objData:	{"a":[0,32,0,[109,367,238,17]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":109,"y":367,"width":238,"height":17},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio18522.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 12px; height: 13px;\"><input type=\"radio\" id=\"rad18522\" name=\"rad18463\" value=\"ervaringsmedewerker\" onclick=\"VarQuestion_18463.set(this.value);qu18463.questionUpdated();radio18522.issueActions(12);\" style=\"left: -2000px; position: absolute; cursor: pointer; background-image: url(&quot;https://my.lectoraonline.nl/app/BN00364/images/trivantis-blank.gif&quot;);\"><label for=\"rad18522\" style=\"font-size: 9pt; font-family: Verdana, &quot;sans serif&quot;; color: rgb(0, 0, 0); background-image: url(&quot;images/MC-rondje.png&quot;); cursor: pointer; position: absolute; padding-left: 12px; text-align: left; height: 100%; line-height: 13px; background-position: 0px 50%; background-repeat: no-repeat;\"></label></div>",
	cssText:	"visibility: inherit; position: absolute; left: 80px; top: 369px; width: 12px; height: 13px; z-index: 33;",
	cssClasses:	"",
	htmlId:		"tobj18522",
	bInsAnc:	0,
	fieldsetId:	'fset18463',
	cwObj:		{
		"name":	"1i",
		"arChld":
	[
		{type:6,on:12,delay:0,name:'OnSelectChangeModVar',actItem:function(){ Varvraag1.set('i'); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[0,32,0,[80,369,12,13]],"desktopRect":{"x":80,"y":369,"width":12,"height":13},"formType":1,"dwFormFlags":0}
};
text18523.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 238px; min-height: 30px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 238px; min-height: 30px;\"><label for=\"rad18524\" style=\"cursor:\"><span style=\"font-family: Verdana, sans-serif; color: rgb(0, 53, 71); font-size: 9pt;\">woonbegeleider</span></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 109px; top: 394px; width: 238px; height: 30px; z-index: 34;",
	cssClasses:	"OpenSans",
	htmlId:		"tobj18523",
	bInsAnc:	0,
	fieldsetId:	'fset18463',
	cwObj:		{
		"name":	"Choice 10 text"
	},
	objData:	{"a":[0,32,0,[109,394,238,30]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":109,"y":394,"width":238,"height":30},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio18524.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 12px; height: 13px;\"><input type=\"radio\" id=\"rad18524\" name=\"rad18463\" value=\"woonbegeleider\" onclick=\"VarQuestion_18463.set(this.value);qu18463.questionUpdated();radio18524.issueActions(12);\" style=\"left: -2000px; position: absolute; cursor: pointer; background-image: url(&quot;https://my.lectoraonline.nl/app/BN00364/images/trivantis-blank.gif&quot;);\"><label for=\"rad18524\" style=\"font-size: 9pt; font-family: Verdana, &quot;sans serif&quot;; color: rgb(0, 0, 0); background-image: url(&quot;images/MC-rondje.png&quot;); cursor: pointer; position: absolute; padding-left: 12px; text-align: left; height: 100%; line-height: 13px; background-position: 0px 50%; background-repeat: no-repeat;\"></label></div>",
	cssText:	"visibility: inherit; position: absolute; left: 80px; top: 396px; width: 12px; height: 13px; z-index: 35;",
	cssClasses:	"",
	htmlId:		"tobj18524",
	bInsAnc:	0,
	fieldsetId:	'fset18463',
	cwObj:		{
		"name":	"1j",
		"arChld":
	[
		{type:6,on:12,delay:0,name:'OnSelectChangeModVar',actItem:function(){ Varvraag1.set('j'); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[0,32,0,[80,396,12,13]],"desktopRect":{"x":80,"y":396,"width":12,"height":13},"formType":1,"dwFormFlags":0}
};
text27770.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 232px; min-height: 18px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 232px; min-height: 18px;\"><label for=\"rad27771\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family: &quot;Verdana&quot;, sans serif; color: rgb(0, 53, 71); font-size: 9pt;\">ribw medewerker</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 109px; top: 420px; width: 232px; height: 18px; z-index: 36;",
	cssClasses:	"OpenSans",
	htmlId:		"tobj27770",
	bInsAnc:	0,
	fieldsetId:	'fset18463',
	cwObj:		{
		"name":	"Choice 11 text"
	},
	objData:	{"a":[0,32,0,[109,420,232,18]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":109,"y":420,"width":232,"height":18},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio27771.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 12px; height: 13px;\"><input type=\"radio\" id=\"rad27771\" name=\"rad18463\" value=\"ribw medewerker\" onclick=\"VarQuestion_18463.set(this.value);qu18463.questionUpdated();radio27771.issueActions(12);\" style=\"left: -2000px; position: absolute; cursor: pointer; background-image: url(&quot;https://my.lectoraonline.nl/app/BN00364/images/trivantis-blank.gif&quot;);\"><label for=\"rad27771\" style=\"font-size: 9pt; font-family: Verdana, &quot;sans serif&quot;; color: rgb(0, 0, 0); background-image: url(&quot;images/MC-rondje.png&quot;); cursor: pointer; position: absolute; padding-left: 12px; text-align: left; height: 100%; line-height: 13px; background-position: 0px 50%; background-repeat: no-repeat;\"></label></div>",
	cssText:	"visibility: inherit; position: absolute; left: 80px; top: 423px; width: 12px; height: 13px; z-index: 37;",
	cssClasses:	"",
	htmlId:		"tobj27771",
	bInsAnc:	0,
	fieldsetId:	'fset18463',
	cwObj:		{
		"name":	"1k",
		"arChld":
	[
		{type:6,on:12,delay:0,name:'OnSelectChangeModVar',actItem:function(){ Varvraag1.set('k'); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[0,32,0,[80,423,12,13]],"desktopRect":{"x":80,"y":423,"width":12,"height":13},"formType":1,"dwFormFlags":0}
};
text27772.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 234px; min-height: 37px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 234px; min-height: 37px;\"><label for=\"rad27773\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family: &quot;Verdana&quot;, sans serif; color: rgb(0, 53, 71); font-size: 9pt;\">geen van alle, maar ik werk in de forensische zorg</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 109px; top: 447px; width: 234px; height: 37px; z-index: 38;",
	cssClasses:	"OpenSans",
	htmlId:		"tobj27772",
	bInsAnc:	0,
	fieldsetId:	'fset18463',
	cwObj:		{
		"name":	"Choice 12 text"
	},
	objData:	{"a":[0,32,0,[109,447,234,37]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":109,"y":447,"width":234,"height":37},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio27773.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 12px; height: 13px;\"><input type=\"radio\" id=\"rad27773\" name=\"rad18463\" value=\"geen van alle, maar ik werk in de forensische zorg\" onclick=\"VarQuestion_18463.set(this.value);qu18463.questionUpdated();radio27773.issueActions(12);\" style=\"left: -2000px; position: absolute; cursor: pointer; background-image: url(&quot;https://my.lectoraonline.nl/app/BN00364/images/trivantis-blank.gif&quot;);\"><label for=\"rad27773\" style=\"font-size: 9pt; font-family: Verdana, &quot;sans serif&quot;; color: rgb(0, 0, 0); background-image: url(&quot;images/MC-rondje.png&quot;); cursor: pointer; position: absolute; padding-left: 12px; text-align: left; height: 100%; line-height: 13px; background-position: 0px 50%; background-repeat: no-repeat;\"></label></div>",
	cssText:	"visibility: inherit; position: absolute; left: 80px; top: 450px; width: 12px; height: 13px; z-index: 39;",
	cssClasses:	"",
	htmlId:		"tobj27773",
	bInsAnc:	0,
	fieldsetId:	'fset18463',
	cwObj:		{
		"name":	"1l",
		"arChld":
	[
		{type:6,on:12,delay:0,name:'OnSelectChangeModVar',actItem:function(){ Varvraag1.set('l'); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[0,32,0,[80,450,12,13]],"desktopRect":{"x":80,"y":450,"width":12,"height":13},"formType":1,"dwFormFlags":0}
};
qu21391.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"qu21391",
	bInsAnc:	undefined,
	cwObj:		{
				"crLineColor":	"",
				"questType":	14,
				"dwQuestFlags":	1,
				"doImmFeedback":	0,
				"maxAllowedAttempts":	0,
				"arrAns":	["\\u0044\\u0065\\u0020\\u0066\\u006F\\u0072\\u0065\\u006E\\u0073\\u0069\\u0073\\u0063\\u0068\\u0065\\u0020\\u007A\\u006F\\u0072\\u0067\\u002C\\u0052\\u0069\\u0073\\u0069\\u0063\\u006F\\u0074\\u0061\\u0078\\u0061\\u0074\\u0069\\u0065\\u0020\\u0065\\u006E\\u0020\\u002D\\u006D\\u0061\\u006E\\u0061\\u0067\\u0065\\u006D\\u0065\\u006E\\u0074"],
				"correctFeedbackFunc":	0,
				"incorrectFeedbackFunc":	0,
				"attemptsFeedbackFunc":	0,
				"varQuest":	VarQuestion_21391
	},
	objData:	{"a":[0,0,0,[]]}
};
text21396.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"visibility: hidden; position: absolute; left: -19px; top: 182px; width: 1px; height: 17px; z-index: 40;; behavior:url(-ms-transform.htc); -moz-transform:rotate(8deg) ; -webkit-transform:rotate(8deg) ; -o-transform:rotate(8deg) ; -ms-transform:rotate(8deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.9902680687415704, M12=-0.13917310096006544, M21=0.13917310096006544, M22=0.9902680687415704) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.9902680687415704, M12=-0.13917310096006544, M21=0.13917310096006544, M22=0.9902680687415704) ",
	cssClasses:	"",
	htmlId:		"tobj21396",
	bInsAnc:	0,
	fieldsetId:	'fset21391',
	cwObj:		{
		"name":	"Question Text"
	},
	objData:	{"a":[0,0,0,[-19,182,1,17]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":8,"anchorX":50,"anchorY":50},"desktopRect":{"x":-19,"y":182,"width":1,"height":17},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text21397.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 238px; min-height: 17px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 238px; min-height: 17px;\"><label for=\"rad21398\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family: &quot;Verdana&quot;, sans serif; color: rgb(0, 53, 71); font-size: 9pt;\">De forensische zorg</span></p></label></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 406px; top: 208px; width: 238px; height: 17px; z-index: 41;",
	cssClasses:	"OpenSans",
	htmlId:		"tobj21397",
	bInsAnc:	0,
	fieldsetId:	'fset21391',
	cwObj:		{
		"name":	"Choice 1 text"
	},
	objData:	{"a":[0,0,0,[406,208,238,17]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":406,"y":208,"width":238,"height":17},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
checkbox21398.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 13px; height: 13px;\"><input type=\"checkbox\" id=\"rad21398\" name=\"rad21398\" value=\"De forensische zorg\" onclick=\"qu21391.questionUpdated(1);checkbox21398.issueActions(12);\" style=\"left: -2000px; position: absolute; cursor: pointer; background-image: url(&quot;https://my.lectoraonline.nl/app/BN00364/images/trivantis-blank.gif&quot;);\"><label for=\"rad21398\" style=\"font-size: 9pt; font-family: Verdana, &quot;sans serif&quot;; color: rgb(0, 0, 0); background-image: url(&quot;images/MS-vierkant.png&quot;); cursor: pointer; position: absolute; padding-left: 13px; text-align: left; height: 100%; line-height: 13px; background-position: 0px 50%; background-repeat: no-repeat;\"></label></div>",
	cssText:	"visibility: hidden; position: absolute; left: 377px; top: 207px; width: 13px; height: 13px; z-index: 42;",
	cssClasses:	"",
	htmlId:		"tobj21398",
	bInsAnc:	0,
	fieldsetId:	'fset21391',
	cwObj:		{
		"name":	"2a",
		"arChld":
	[
		{type:6,on:12,delay:0,name:'OnSelectChangeModVar',actItem:function(){ if(!Varvraag2_1.contains('a'))Varvraag2_1.add('a'); else Varvraag2_1.sub('a'); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[0,0,0,[377,207,13,13]],"desktopRect":{"x":377,"y":207,"width":13,"height":13},"formType":5,"dwFormFlags":0}
};
text21399.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 238px; min-height: 17px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 238px; min-height: 17px;\"><label for=\"rad21400\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family: Verdana, sans-serif; color: rgb(0, 53, 71); font-size: 9pt;\">Risicotaxatie en -management</span></p></label></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 406px; top: 235px; width: 238px; height: 17px; z-index: 43;",
	cssClasses:	"OpenSans",
	htmlId:		"tobj21399",
	bInsAnc:	0,
	fieldsetId:	'fset21391',
	cwObj:		{
		"name":	"Choice 2 text"
	},
	objData:	{"a":[0,0,0,[406,235,238,17]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":406,"y":235,"width":238,"height":17},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
checkbox21400.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 13px; height: 13px;\"><input type=\"checkbox\" id=\"rad21400\" name=\"rad21400\" value=\"Risicotaxatie en -management\" onclick=\"qu21391.questionUpdated(1);checkbox21400.issueActions(12);\" style=\"left: -2000px; position: absolute; cursor: pointer; background-image: url(&quot;https://my.lectoraonline.nl/app/BN00364/images/trivantis-blank.gif&quot;);\"><label for=\"rad21400\" style=\"font-size: 9pt; font-family: Verdana, &quot;sans serif&quot;; color: rgb(0, 0, 0); background-image: url(&quot;images/MS-vierkant.png&quot;); cursor: pointer; position: absolute; padding-left: 13px; text-align: left; height: 100%; line-height: 13px; background-position: 0px 50%; background-repeat: no-repeat;\"></label></div>",
	cssText:	"visibility: hidden; position: absolute; left: 377px; top: 234px; width: 13px; height: 13px; z-index: 44;",
	cssClasses:	"",
	htmlId:		"tobj21400",
	bInsAnc:	0,
	fieldsetId:	'fset21391',
	cwObj:		{
		"name":	"2c",
		"arChld":
	[
		{type:6,on:12,delay:0,name:'OnSelectChangeModVar',actItem:function(){ if(!Varvraag2_1.contains('b'))Varvraag2_1.add('b'); else Varvraag2_1.sub('b'); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[0,0,0,[377,234,13,13]],"desktopRect":{"x":377,"y":234,"width":13,"height":13},"formType":5,"dwFormFlags":0}
};
qu21410.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"qu21410",
	bInsAnc:	undefined,
	cwObj:		{
				"crLineColor":	"",
				"questType":	14,
				"dwQuestFlags":	1,
				"doImmFeedback":	0,
				"maxAllowedAttempts":	0,
				"arrAns":	["\\u0053\\u0070\\u0061\\u006E\\u006E\\u0069\\u006E\\u0067\\u0065\\u006E\\u002C\\u0052\\u0069\\u0073\\u0069\\u0063\\u006F\\u0074\\u0061\\u0078\\u0061\\u0074\\u0069\\u0065\\u002C\\u0052\\u0069\\u0073\\u0069\\u0063\\u006F\\u006D\\u0061\\u006E\\u0061\\u0067\\u0065\\u006D\\u0065\\u006E\\u0074\\u002C\\u0041\\u006E\\u0061\\u006C\\u0079\\u0073\\u0065\\u0072\\u0065\\u006E\\u0020\\u0076\\u0061\\u006E\\u0020\\u0067\\u0065\\u0064\\u0072\\u0061\\u0067\\u002C\\u0053\\u0061\\u006D\\u0065\\u006E\\u0077\\u0065\\u0072\\u006B\\u0065\\u006E"],
				"correctFeedbackFunc":	0,
				"incorrectFeedbackFunc":	0,
				"attemptsFeedbackFunc":	0,
				"varQuest":	VarQuestion_21410
	},
	objData:	{"a":[0,0,0,[]]}
};
text21415.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"visibility: hidden; position: absolute; left: -100px; top: 305px; width: 61px; height: 34px; z-index: 45;",
	cssClasses:	"",
	htmlId:		"tobj21415",
	bInsAnc:	0,
	fieldsetId:	'fset21410',
	cwObj:		{
		"name":	"Question Text"
	},
	objData:	{"a":[0,0,0,[-100,305,61,34]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-100,"y":305,"width":61,"height":34},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text21416.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 238px; min-height: 17px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 238px; min-height: 17px;\"><label for=\"rad21417\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family: &quot;Verdana&quot;, sans serif; color: rgb(0, 53, 71); font-size: 9pt;\">Spanningen</span></p></label></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 406px; top: 343px; width: 238px; height: 17px; z-index: 46;",
	cssClasses:	"OpenSans",
	htmlId:		"tobj21416",
	bInsAnc:	0,
	fieldsetId:	'fset21410',
	cwObj:		{
		"name":	"Choice 1 text"
	},
	objData:	{"a":[0,0,0,[406,343,238,17]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":406,"y":343,"width":238,"height":17},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
checkbox21417.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 13px; height: 13px;\"><input type=\"checkbox\" id=\"rad21417\" name=\"rad21417\" value=\"Spanningen\" onclick=\"qu21410.questionUpdated(1);checkbox21417.issueActions(12);\" style=\"left: -2000px; position: absolute; cursor: pointer; background-image: url(&quot;https://my.lectoraonline.nl/app/BN00364/images/trivantis-blank.gif&quot;);\"><label for=\"rad21417\" style=\"font-size: 9pt; font-family: Verdana, &quot;sans serif&quot;; color: rgb(0, 0, 0); background-image: url(&quot;images/MS-vierkant.png&quot;); cursor: pointer; position: absolute; padding-left: 13px; text-align: left; height: 100%; line-height: 13px; background-position: 0px 50%; background-repeat: no-repeat;\"></label></div>",
	cssText:	"visibility: hidden; position: absolute; left: 377px; top: 342px; width: 13px; height: 13px; z-index: 47;",
	cssClasses:	"",
	htmlId:		"tobj21417",
	bInsAnc:	0,
	fieldsetId:	'fset21410',
	cwObj:		{
		"name":	"2d",
		"arChld":
	[
		{type:6,on:12,delay:0,name:'OnSelectChangeModVar',actItem:function(){ if(!Varvraag2_2.contains('d'))Varvraag2_2.add('d'); else Varvraag2_2.sub('d'); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[0,0,0,[377,342,13,13]],"desktopRect":{"x":377,"y":342,"width":13,"height":13},"formType":5,"dwFormFlags":0}
};
text21418.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 238px; min-height: 17px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 238px; min-height: 17px;\"><label for=\"rad21419\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family: &quot;Verdana&quot;, sans serif; color: rgb(0, 53, 71); font-size: 9pt;\">Risicotaxatie</span></p></label></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 406px; top: 370px; width: 238px; height: 17px; z-index: 48;",
	cssClasses:	"OpenSans",
	htmlId:		"tobj21418",
	bInsAnc:	0,
	fieldsetId:	'fset21410',
	cwObj:		{
		"name":	"Choice 2 text"
	},
	objData:	{"a":[0,0,0,[406,370,238,17]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":406,"y":370,"width":238,"height":17},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
checkbox21419.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 13px; height: 13px;\"><input type=\"checkbox\" id=\"rad21419\" name=\"rad21419\" value=\"Risicotaxatie\" onclick=\"qu21410.questionUpdated(1);checkbox21419.issueActions(12);\" style=\"left: -2000px; position: absolute; cursor: pointer; background-image: url(&quot;https://my.lectoraonline.nl/app/BN00364/images/trivantis-blank.gif&quot;);\"><label for=\"rad21419\" style=\"font-size: 9pt; font-family: Verdana, &quot;sans serif&quot;; color: rgb(0, 0, 0); background-image: url(&quot;images/MS-vierkant.png&quot;); cursor: pointer; position: absolute; padding-left: 13px; text-align: left; height: 100%; line-height: 13px; background-position: 0px 50%; background-repeat: no-repeat;\"></label></div>",
	cssText:	"visibility: hidden; position: absolute; left: 377px; top: 369px; width: 13px; height: 13px; z-index: 49;",
	cssClasses:	"",
	htmlId:		"tobj21419",
	bInsAnc:	0,
	fieldsetId:	'fset21410',
	cwObj:		{
		"name":	"2e",
		"arChld":
	[
		{type:6,on:12,delay:0,name:'OnSelectChangeModVar',actItem:function(){ if(!Varvraag2_2.contains('e'))Varvraag2_2.add('e'); else Varvraag2_2.sub('e'); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[0,0,0,[377,369,13,13]],"desktopRect":{"x":377,"y":369,"width":13,"height":13},"formType":5,"dwFormFlags":0}
};
text24179.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 238px; min-height: 18px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 238px; min-height: 18px;\"><label for=\"rad24180\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family: &quot;Verdana&quot;, sans serif; color: rgb(0, 53, 71); font-size: 9pt;\">Risicomanagement</span></p></label></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 406px; top: 397px; width: 238px; height: 18px; z-index: 50;",
	cssClasses:	"OpenSans",
	htmlId:		"tobj24179",
	bInsAnc:	0,
	fieldsetId:	'fset21410',
	cwObj:		{
		"name":	"Choice 3 text"
	},
	objData:	{"a":[0,0,0,[406,397,238,18]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":406,"y":397,"width":238,"height":18},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
checkbox24180.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 13px; height: 13px;\"><input type=\"checkbox\" id=\"rad24180\" name=\"rad24180\" value=\"Risicomanagement\" onclick=\"qu21410.questionUpdated(1);checkbox24180.issueActions(12);\" style=\"left: -2000px; position: absolute; cursor: pointer; background-image: url(&quot;https://my.lectoraonline.nl/app/BN00364/images/trivantis-blank.gif&quot;);\"><label for=\"rad24180\" style=\"font-size: 9pt; font-family: Verdana, &quot;sans serif&quot;; color: rgb(0, 0, 0); background-image: url(&quot;images/MS-vierkant.png&quot;); cursor: pointer; position: absolute; padding-left: 13px; text-align: left; height: 100%; line-height: 13px; background-position: 0px 50%; background-repeat: no-repeat;\"></label></div>",
	cssText:	"visibility: hidden; position: absolute; left: 377px; top: 396px; width: 13px; height: 13px; z-index: 51;",
	cssClasses:	"",
	htmlId:		"tobj24180",
	bInsAnc:	0,
	fieldsetId:	'fset21410',
	cwObj:		{
		"name":	"2f",
		"arChld":
	[
		{type:6,on:12,delay:0,name:'OnSelectChangeModVar',actItem:function(){ if(!Varvraag2_2.contains('f'))Varvraag2_2.add('f'); else Varvraag2_2.sub('f'); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[0,0,0,[377,396,13,13]],"desktopRect":{"x":377,"y":396,"width":13,"height":13},"formType":5,"dwFormFlags":0}
};
text24181.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 238px; min-height: 18px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 238px; min-height: 18px;\"><label for=\"rad24182\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family: &quot;Verdana&quot;, sans serif; color: rgb(0, 53, 71); font-size: 9pt;\">Analyseren van gedrag</span></p></label></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 406px; top: 425px; width: 238px; height: 18px; z-index: 52;",
	cssClasses:	"OpenSans",
	htmlId:		"tobj24181",
	bInsAnc:	0,
	fieldsetId:	'fset21410',
	cwObj:		{
		"name":	"Choice 4 text"
	},
	objData:	{"a":[0,0,0,[406,425,238,18]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":406,"y":425,"width":238,"height":18},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
checkbox24182.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 13px; height: 13px;\"><input type=\"checkbox\" id=\"rad24182\" name=\"rad24182\" value=\"Analyseren van gedrag\" onclick=\"qu21410.questionUpdated(1);checkbox24182.issueActions(12);\" style=\"left: -2000px; position: absolute; cursor: pointer; background-image: url(&quot;https://my.lectoraonline.nl/app/BN00364/images/trivantis-blank.gif&quot;);\"><label for=\"rad24182\" style=\"font-size: 9pt; font-family: Verdana, &quot;sans serif&quot;; color: rgb(0, 0, 0); background-image: url(&quot;images/MS-vierkant.png&quot;); cursor: pointer; position: absolute; padding-left: 13px; text-align: left; height: 100%; line-height: 13px; background-position: 0px 50%; background-repeat: no-repeat;\"></label></div>",
	cssText:	"visibility: hidden; position: absolute; left: 377px; top: 424px; width: 13px; height: 13px; z-index: 53;",
	cssClasses:	"",
	htmlId:		"tobj24182",
	bInsAnc:	0,
	fieldsetId:	'fset21410',
	cwObj:		{
		"name":	"2g",
		"arChld":
	[
		{type:6,on:12,delay:0,name:'OnSelectChangeModVar',actItem:function(){ if(!Varvraag2_2.contains('g'))Varvraag2_2.add('g'); else Varvraag2_2.sub('g'); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[0,0,0,[377,424,13,13]],"desktopRect":{"x":377,"y":424,"width":13,"height":13},"formType":5,"dwFormFlags":0}
};
text24183.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 238px; min-height: 18px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 238px; min-height: 18px;\"><label for=\"rad24184\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family: Verdana, sans-serif; color: rgb(0, 53, 71); font-size: 9pt;\">Samenwerken</span></p></label></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 406px; top: 453px; width: 238px; height: 18px; z-index: 54;",
	cssClasses:	"OpenSans",
	htmlId:		"tobj24183",
	bInsAnc:	0,
	fieldsetId:	'fset21410',
	cwObj:		{
		"name":	"Choice 5 text"
	},
	objData:	{"a":[0,0,0,[406,453,238,18]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":406,"y":453,"width":238,"height":18},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
checkbox24184.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 13px; height: 13px;\"><input type=\"checkbox\" id=\"rad24184\" name=\"rad24184\" value=\"Samenwerken\" onclick=\"qu21410.questionUpdated(1);checkbox24184.issueActions(12);\" style=\"left: -2000px; position: absolute; cursor: pointer; background-image: url(&quot;https://my.lectoraonline.nl/app/BN00364/images/trivantis-blank.gif&quot;);\"><label for=\"rad24184\" style=\"font-size: 9pt; font-family: Verdana, &quot;sans serif&quot;; color: rgb(0, 0, 0); background-image: url(&quot;images/MS-vierkant.png&quot;); cursor: pointer; position: absolute; padding-left: 13px; text-align: left; height: 100%; line-height: 13px; background-position: 0px 50%; background-repeat: no-repeat;\"></label></div>",
	cssText:	"visibility: hidden; position: absolute; left: 377px; top: 452px; width: 13px; height: 13px; z-index: 55;",
	cssClasses:	"",
	htmlId:		"tobj24184",
	bInsAnc:	0,
	fieldsetId:	'fset21410',
	cwObj:		{
		"name":	"2h",
		"arChld":
	[
		{type:6,on:12,delay:0,name:'OnSelectChangeModVar',actItem:function(){ if(!Varvraag2_2.contains('h'))Varvraag2_2.add('h'); else Varvraag2_2.sub('h'); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[0,0,0,[377,452,13,13]],"desktopRect":{"x":377,"y":452,"width":13,"height":13},"formType":5,"dwFormFlags":0}
};
qu21430.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"qu21430",
	bInsAnc:	undefined,
	cwObj:		{
				"crLineColor":	"",
				"questType":	14,
				"dwQuestFlags":	1,
				"doImmFeedback":	0,
				"maxAllowedAttempts":	0,
				"arrAns":	["\\u005A\\u0065\\u006C\\u0066\\u0073\\u0074\\u0061\\u006E\\u0064\\u0069\\u0067\\u002C\\u0020\\u006F\\u0065\\u0066\\u0065\\u006E\\u0065\\u006E\\u0064\\u0020\\u0061\\u0061\\u006E\\u0020\\u0064\\u0065\\u0020\\u0068\\u0061\\u006E\\u0064\\u0020\\u0076\\u0061\\u006E\\u0020\\u0063\\u0061\\u0073\\u0075\\u0026\\u0069\\u0075\\u006D\\u006C\\u003B\\u0073\\u0074\\u0069\\u0065\\u006B\\u002E\\u0020\\u002C\\u0053\\u0061\\u006D\\u0065\\u006E\\u0020\\u006D\\u0065\\u0074\\u0020\\u0063\\u006F\\u006C\\u006C\\u0065\\u0067\\u0061\\u0026\\u0072\\u0073\\u0071\\u0075\\u006F\\u003B\\u0073\\u0020\\u006F\\u0066\\u0020\\u006F\\u006E\\u0064\\u0065\\u0072\\u0020\\u0062\\u0065\\u0067\\u0065\\u006C\\u0065\\u0069\\u0064\\u0069\\u006E\\u0067\\u0020\\u0076\\u0061\\u006E\\u0020\\u0065\\u0065\\u006E\\u0020\\u0063\\u006F\\u0061\\u0063\\u0068\\u0020\\u006F\\u0066\\u0020\\u0074\\u0072\\u0061\\u0069\\u006E\\u0065\\u0072\\u002E\\u002C\\u0049\\u006E\\u0020\\u0064\\u0065\\u0020\\u0070\\u0072\\u0061\\u006B\\u0074\\u0069\\u006A\\u006B\\u002C\\u0020\\u006F\\u0070\\u0020\\u0064\\u0065\\u0020\\u0077\\u0065\\u0072\\u006B\\u0070\\u006C\\u0065\\u006B\\u002E"],
				"correctFeedbackFunc":	0,
				"incorrectFeedbackFunc":	0,
				"attemptsFeedbackFunc":	0,
				"varQuest":	VarQuestion_21430
	},
	objData:	{"a":[0,64,0,[]]}
};
text21435.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 241px; min-height: 17px;\"><legend><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 241px; min-height: 17px;\"><p align=\"left\"><span style=\"font-size: 9pt; color: rgb(0, 53, 71); font-family: Verdana, &quot;sans serif&quot;;\">Meerdere antwoorden zijn mogelijk.</span></p></div></legend></div>",
	cssText:	"visibility: hidden; position: absolute; left: 677px; top: 156px; width: 241px; height: 17px; z-index: 59;",
	cssClasses:	"OpenSans",
	htmlId:		"tobj21435",
	bInsAnc:	0,
	fieldsetId:	'fset21430',
	cwObj:		{
		"name":	"Question Text"
	},
	objData:	{"a":[0,0,0,[677,156,241,17]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":677,"y":156,"width":241,"height":17},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text21625.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 238px; min-height: 36px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 238px; min-height: 36px;\"><label for=\"rad21626\" style=\"cursor:\"><p style=\"text-align:left\"><span style=\"font-size: 9pt; color: rgb(0, 53, 71); font-family: Verdana, sans-serif;\">Zelfstandig, oefenend aan de hand van&nbsp;<span style=\"color: rgb(0, 53, 71);\">casuïstiek.&nbsp;</span></span></p></label></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 706px; top: 188px; width: 238px; height: 36px; z-index: 60;",
	cssClasses:	"OpenSans",
	htmlId:		"tobj21625",
	bInsAnc:	0,
	fieldsetId:	'fset21430',
	cwObj:		{
		"name":	"Choice 1 text"
	},
	objData:	{"a":[0,0,0,[706,188,238,36]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":706,"y":188,"width":238,"height":36},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
checkbox21626.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 13px; height: 13px;\"><input type=\"checkbox\" id=\"rad21626\" name=\"rad21626\" value=\"Zelfstandig, oefenend aan de hand van casu&amp;iuml;stiek. \" onclick=\"qu21430.questionUpdated(1);checkbox21626.issueActions(12);\" style=\"left: -2000px; position: absolute; cursor: pointer; background-image: url(&quot;https://my.lectoraonline.nl/app/BN00364/images/trivantis-blank.gif&quot;);\"><label for=\"rad21626\" style=\"font-size: 9pt; font-family: Verdana, &quot;sans serif&quot;; color: rgb(0, 0, 0); background-image: url(&quot;images/MS-vierkant.png&quot;); cursor: pointer; position: absolute; padding-left: 13px; text-align: left; height: 100%; line-height: 13px; background-position: 0px 50%; background-repeat: no-repeat;\"></label></div>",
	cssText:	"visibility: hidden; position: absolute; left: 677px; top: 192px; width: 13px; height: 13px; z-index: 61;",
	cssClasses:	"",
	htmlId:		"tobj21626",
	bInsAnc:	0,
	fieldsetId:	'fset21430',
	cwObj:		{
		"name":	"3a",
		"arChld":
	[
		{type:6,on:12,delay:0,name:'OnSelectChangeModVar',actItem:function(){ if(!Varvraag3.contains('a'))Varvraag3.add('a'); else Varvraag3.sub('a'); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[0,0,0,[677,192,13,13]],"desktopRect":{"x":677,"y":192,"width":13,"height":13},"formType":5,"dwFormFlags":0}
};
text21627.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 238px; min-height: 44px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 238px; min-height: 44px;\"><label for=\"rad21628\" style=\"cursor:\"><p align=\"left\"><span style=\"font-size: 9pt; color: rgb(0, 53, 71); font-family: Verdana, &quot;sans serif&quot;;\">Samen met collega’s of onder begeleiding van een coach of trainer.</span></p></label></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 706px; top: 230px; width: 238px; height: 44px; z-index: 62;",
	cssClasses:	"OpenSans",
	htmlId:		"tobj21627",
	bInsAnc:	0,
	fieldsetId:	'fset21430',
	cwObj:		{
		"name":	"Choice 2 text"
	},
	objData:	{"a":[0,0,0,[706,230,238,44]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":706,"y":230,"width":238,"height":44},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
checkbox21628.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 13px; height: 13px;\"><input type=\"checkbox\" id=\"rad21628\" name=\"rad21628\" value=\"Samen met collega&amp;rsquo;s of onder begeleiding van een coach of trainer.\" onclick=\"qu21430.questionUpdated(1);checkbox21628.issueActions(12);\" style=\"left: -2000px; position: absolute; cursor: pointer; background-image: url(&quot;https://my.lectoraonline.nl/app/BN00364/images/trivantis-blank.gif&quot;);\"><label for=\"rad21628\" style=\"font-size: 9pt; font-family: Verdana, &quot;sans serif&quot;; color: rgb(0, 0, 0); background-image: url(&quot;images/MS-vierkant.png&quot;); cursor: pointer; position: absolute; padding-left: 13px; text-align: left; height: 100%; line-height: 13px; background-position: 0px 50%; background-repeat: no-repeat;\"></label></div>",
	cssText:	"visibility: hidden; position: absolute; left: 677px; top: 234px; width: 13px; height: 13px; z-index: 63;",
	cssClasses:	"",
	htmlId:		"tobj21628",
	bInsAnc:	0,
	fieldsetId:	'fset21430',
	cwObj:		{
		"name":	"3b",
		"arChld":
	[
		{type:6,on:12,delay:0,name:'OnSelectChangeModVar',actItem:function(){ if(!Varvraag3.contains('b'))Varvraag3.add('b'); else Varvraag3.sub('b'); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[0,0,0,[677,234,13,13]],"desktopRect":{"x":677,"y":234,"width":13,"height":13},"formType":5,"dwFormFlags":0}
};
text21629.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 238px; min-height: 32px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 238px; min-height: 32px;\"><label for=\"rad21630\" style=\"cursor:\"><p align=\"left\"><span style=\"font-size: 9pt; color: rgb(0, 53, 71); font-family: Verdana, &quot;sans serif&quot;;\">In de praktijk, op de werkplek.</span></p></label></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 706px; top: 277px; width: 238px; height: 32px; z-index: 64;",
	cssClasses:	"OpenSans",
	htmlId:		"tobj21629",
	bInsAnc:	0,
	fieldsetId:	'fset21430',
	cwObj:		{
		"name":	"Choice 3 text"
	},
	objData:	{"a":[0,0,0,[706,277,238,32]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":706,"y":277,"width":238,"height":32},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
checkbox21630.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 13px; height: 13px;\"><input type=\"checkbox\" id=\"rad21630\" name=\"rad21630\" value=\"In de praktijk, op de werkplek.\" onclick=\"qu21430.questionUpdated(1);checkbox21630.issueActions(12);\" style=\"left: -2000px; position: absolute; cursor: pointer; background-image: url(&quot;https://my.lectoraonline.nl/app/BN00364/images/trivantis-blank.gif&quot;);\"><label for=\"rad21630\" style=\"font-size: 9pt; font-family: Verdana, &quot;sans serif&quot;; color: rgb(0, 0, 0); background-image: url(&quot;images/MS-vierkant.png&quot;); cursor: pointer; position: absolute; padding-left: 13px; text-align: left; height: 100%; line-height: 13px; background-position: 0px 50%; background-repeat: no-repeat;\"></label></div>",
	cssText:	"visibility: hidden; position: absolute; left: 677px; top: 275px; width: 13px; height: 13px; z-index: 65;",
	cssClasses:	"",
	htmlId:		"tobj21630",
	bInsAnc:	0,
	fieldsetId:	'fset21430',
	cwObj:		{
		"name":	"3c",
		"arChld":
	[
		{type:6,on:12,delay:0,name:'OnSelectChangeModVar',actItem:function(){ if(!Varvraag3.contains('c'))Varvraag3.add('c'); else Varvraag3.sub('c'); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[0,0,0,[677,275,13,13]],"desktopRect":{"x":677,"y":275,"width":13,"height":13},"formType":5,"dwFormFlags":0}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"9","color":null,"bgColor":null,"name":"'Verdana',sans serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	3
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/Middel%206.png","images/volgende1.png","images/bekijk%20selectie.png","images/btn_close.png","images/btn_close_mo.png","images/zonder%20elementen-06.png","images/richting.png"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1009px; height: 662px; overflow: hidden; background-size: auto;'
rcdObj.backgrd_Desktop = ["#ffffff","",0,0,1];
