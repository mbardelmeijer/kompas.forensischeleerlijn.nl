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
	innerHtml:	"<svg viewBox=\"0 0 36 36\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(18 18)\" style=\"\">\n	<path d=\"M 0 0 L 36 0 L 36 36 L 0 36 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-18, -18) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_15662_1\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"36\" height=\"36\" xlink:href=\"images/btn_close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 36 0 L 36 36 L 0 36 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_15662_1&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-18, -18) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(18 18)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"21.3333328\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"6.72\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 962px; top: 12.000000000000004px; width: 36px; height: 36px; z-index: 1; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[7,33184,0,[962,12.000000000000004,36,36]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":962,"y":12,"width":36,"height":36},"imgDataNormal":"images/desktop_shape21748.png","imgDataOver":"images/desktop_shape21748_over.png","imgDataDown":"images/desktop_shape21748_over.png","imgDataDisabled":"images/desktop_shape21748_disabled.png","svgDataNormal":"<g transform=\"translate(18 18)\" style=\"\">\n\t<path d=\"M 0 0 L 36 0 L 36 36 L 0 36 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-18, -18) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_15662_1\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"36\" height=\"36\" xlink:href=\"images/btn_close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 36 0 L 36 36 L 0 36 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_15662_1&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-18, -18) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(18 18)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"21.3333328\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(18 18)\" style=\"\">\n\t<path d=\"M 0 0 L 36 0 L 36 36 L 0 36 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-18, -18) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_15662_3\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"36\" height=\"36\" xlink:href=\"images/btn_close_mo.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 36 0 L 36 36 L 0 36 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_15662_3&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-18, -18) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(18 18)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"21.3333328\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(18 18)\" style=\"\">\n\t<path d=\"M 0 0 L 36 0 L 36 36 L 0 36 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-18, -18) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_15662_5\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"36\" height=\"36\" xlink:href=\"images/btn_close_mo.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 36 0 L 36 36 L 0 36 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_15662_5&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-18, -18) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(18 18)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"21.3333328\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(18 18)\" style=\"\">\n\t<path d=\"M 0 0 L 36 0 L 36 36 L 0 36 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-18, -18) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_15662_7\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"36\" height=\"36\" xlink:href=\"images/btn_close.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 36 0 L 36 36 L 0 36 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_15662_7&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-18, -18) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(18 18)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"21.3333328\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
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
image18407.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj18407Img\" src=\"images/start-bg-01-01-01.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 1015px; height: 665px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 0px; width: 1015px; height: 665px; z-index: 3;",
	cssClasses:	"",
	htmlId:		"tobj18407",
	bInsAnc:	0,
	cwObj:		{
		"name":	"start-bg-01-01-01"
	},
	objData:	{"a":[0,288,0,[0,0,1015,665]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1015,"height":665}}
};
textbutton15672.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 182 34\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(91 17)\" style=\"\">\n	<path d=\"M 0 0 L 182 0 L 182 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -17) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_15662_9\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"182\" height=\"34\" xlink:href=\"images/startbutton.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 182 0 L 182 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_15662_9&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -17) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(91 17)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-16.89\" y=\"5.04\" fill=\"#FFFFFF\">Start</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 550px; top: 387px; width: 182px; height: 34px; z-index: 6; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"OpenSans",
	htmlId:		"tobj15672",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button 1",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('forensisch_kompas_kompas_hoe_wil_je_het_aanpakken.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[550,387,182,34]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":550,"y":387,"width":182,"height":34},"imgDataNormal":"images/desktop_shape15672.png","imgDataOver":"images/desktop_shape15672.png","imgDataDown":"images/desktop_shape15672.png","imgDataDisabled":"images/desktop_shape15672_disabled.png","svgDataNormal":"<g transform=\"translate(91 17)\" style=\"\">\n\t<path d=\"M 0 0 L 182 0 L 182 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_15662_9\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"182\" height=\"34\" xlink:href=\"images/startbutton.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 182 0 L 182 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_15662_9&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-16.89\" y=\"5.04\" fill=\"#FFFFFF\">Start</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(91 17)\" style=\"\">\n\t<path d=\"M 0 0 L 182 0 L 182 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_15662_11\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"182\" height=\"34\" xlink:href=\"images/startbutton.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 182 0 L 182 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_15662_11&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-16.89\" y=\"5.04\" fill=\"#FFFFFF\">Start</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(91 17)\" style=\"\">\n\t<path d=\"M 0 0 L 182 0 L 182 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_15662_13\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"182\" height=\"34\" xlink:href=\"images/startbutton.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 182 0 L 182 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_15662_13&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-16.89\" y=\"5.04\" fill=\"#FFFFFF\">Start</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(91 17)\" style=\"\">\n\t<path d=\"M 0 0 L 182 0 L 182 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_15662_15\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"182\" height=\"34\" xlink:href=\"images/startbutton.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 182 0 L 182 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_15662_15&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-91, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(91 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-16.89\" y=\"5.04\" fill=\"#FFFFFF\">Start</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text15663.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 605px; min-height: 155px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 605px; min-height: 155px;\"><p style=\"line-height: 1.25; margin-top: 0px; margin-bottom: 0px; text-align: center;\"><strong><span style=\"font-size: 36pt; color: rgb(255, 255, 255); font-family: calibri;\">Bepaal jouw leerpad voor Forensische zorg</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 219px; top: 78px; width: 605px; height: 155px; z-index: 4;",
	cssClasses:	"Roboto",
	htmlId:		"tobj15663",
	bInsAnc:	0,
	cwObj:		{
		"name":	"page-title"
	},
	objData:	{"a":[0,32,0,[219,78,605,155]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":219,"y":78,"width":605,"height":155},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text24003.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 402px; min-height: 107px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 402px; min-height: 107px;\"><p style=\"text-align: center; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: Arial, sans-serif; font-size: 12pt; color: rgb(0, 53, 71);\">Op de volgende pagina\'s krijg je een aantal vragen. Het beantwoorden van deze vragen helpt je bij het kiezen van een persoonlijk leerpad. Klik op start om te beginnen.&nbsp;</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 429px; top: 261px; width: 402px; height: 107px; z-index: 5;",
	cssClasses:	"OpenSans",
	htmlId:		"tobj24003",
	bInsAnc:	0,
	cwObj:		{
		"name":	"bodytext"
	},
	objData:	{"a":[0,32,0,[429,261,402,107]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":429,"y":261,"width":402,"height":107},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"9","color":null,"bgColor":null,"name":"'Verdana',sans serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	1
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/start-bg-01-01-01.png","images/btn_close.png","images/btn_close_mo.png","images/startbutton.png"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1009px; height: 662px; overflow: hidden; background-size: auto;'
rcdObj.backgrd_Desktop = ["#C0D1FF","",0,0,1];
