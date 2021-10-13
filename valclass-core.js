// =========================================
// 	valclass core adalah file yang berisi
// 	berbagai macam fungsi yang dapat
//	melakukan manipulasi style dengan membaca
// 	seluruh className milik semua element
// 	yang ada di dalam body
// =========================================

// daftar nama items
let vallclass = {
	display: [],
	alignItems: [],
    boxSizing: [],
    floats: [],
    overflow: [],
    overflowX: [],
    overflowY: [],
    position: [],
    top: [],
    left: [],
    right: [],
    bottom: [],
    index: [],
    visibility: [],
    flex: [],
    direction: [],
    wrap: [],
    shrink: [],
    basis: [],
    justify: [],
    justItems: [],
    justSelf: [],
    alignContent: [],
    alignItems: [],
    alignSelf: [],
    padding: [],
    paddingTop: [],
    paddingLeft: [],
    paddingRight: [],
    paddingBottom: [],
    margin: [],
    marginTop: [],
    marginLeft: [],
    marginRight: [],
    marginBottom: [],
    width: [],
    height: [],
    fontSize: [],
    fontStyle: [],
    letterSpacing: [],
    lineHeight: [],
	textAlign: [],
	textColor: [],
	decoration: [],
	textTransform: [],
	wordBreak: [],
	bgAttachment: [],
	bgClip: [],
	bgColor: [],
	bgPosition: [],
	bgRepeat: [],
	bgSize: [],
	border: [],
	borderTop: [],
	borderLeft: [],
	borderRight: [],
	borderBottom: [],
	borderRadius: [],
	borderStyle: [],
	borderColor: [],
	borderType: [],
	rotate: [],
	skew: [],
	scale: [],
	translate: [],
	translateX: [],
	translateY: [],
	translateZ: [],
	cursor: [],
	transition: [],
	outline: [],
	oTop: [],
	oLeft: [],
	oRight: [],
	oBottom: [],
	oColor: [],
	oStyle: [],
	opacity: [],
	blur: [],
	grayscale: [],
	saturate: [],
	brightness: [],
	contrast: [],
	MBdisplay: [],
	MBalignItems: [],
    MBboxSizing: [],
    MBfloats: [],
    MBoverflow: [],
    MBoverflowX: [],
    MBoverflowY: [],
    MBposition: [],
    MBtop: [],
    MBleft: [],
    MBright: [],
    MBbottom: [],
    MBindex: [],
    MBvisibility: [],
    MBflex: [],
    MBdirection: [],
    MBwrap: [],
    MBshrink: [],
    MBbasis: [],
    MBjustify: [],
    MBjustItems: [],
    MBjustSelf: [],
    MBalignContent: [],
    MBalignItems: [],
    MBalignSelf: [],
    MBpadding: [],
    MBpaddingTop: [],
    MBpaddingLeft: [],
    MBpaddingRight: [],
    MBpaddingBottom: [],
    MBmargin: [],
    MBmarginTop: [],
    MBmarginLeft: [],
    MBmarginRight: [],
    MBmarginBottom: [],
    MBwidth: [],
    MBheight: [],
    MBfontSize: [],
    MBfontStyle: [],
    MBletterSpacing: [],
    MBlineHeight: [],
	MBtextAlign: [],
	MBtextColor: [],
	MBdecoration: [],
	MBtextTransform: [],
	MBwordBreak: [],
	MBbgAttachment: [],
	MBbgClip: [],
	MBbgColor: [],
	MBbgPosition: [],
	MBbgRepeat: [],
	MBbgSize: [],
	MBborder: [],
	MBborderTop: [],
	MBborderLeft: [],
	MBborderRight: [],
	MBborderBottom: [],
	MBborderRadius: [],
	MBborderStyle: [],
	MBborderColor: [],
	MBborderType: [],
	MBrotate: [],
	MBskew: [],
	MBscale: [],
	MBtranslate: [],
	MBtranslateX: [],
	MBtranslateY: [],
	MBtranslateZ: [],
	MBcursor: [],
	MBtransition: [],
	MBoutline: [],
	MBoTop: [],
	MBoLeft: [],
	MBoRight: [],
	MBoBottom: [],
	MBoColor: [],
	MBoStyle: [],
	MBopacity: [],
	MBblur: [],
	MBgrayscale: [],
	MBsaturate: [],
	MBbrightness: [],
	MBcontrast: [],
	TBdisplay: [],
	TBalignItems: [],
    TBboxSizing: [],
    TBfloats: [],
    TBoverflow: [],
    TBoverflowX: [],
    TBoverflowY: [],
    TBposition: [],
    TBtop: [],
    TBleft: [],
    TBright: [],
    TBbottom: [],
    TBindex: [],
    TBvisibility: [],
    TBflex: [],
    TBdirection: [],
    TBwrap: [],
    TBshrink: [],
    TBbasis: [],
    TBjustify: [],
    TBjustItems: [],
    TBjustSelf: [],
    TBalignContent: [],
    TBalignItems: [],
    TBalignSelf: [],
    TBpadding: [],
    TBpaddingTop: [],
    TBpaddingLeft: [],
    TBpaddingRight: [],
    TBpaddingBottom: [],
    TBmargin: [],
    TBmarginTop: [],
    TBmarginLeft: [],
    TBmarginRight: [],
    TBmarginBottom: [],
    TBwidth: [],
    TBheight: [],
    TBfontSize: [],
    TBfontStyle: [],
    TBletterSpacing: [],
    TBlineHeight: [],
	TBtextAlign: [],
	TBtextColor: [],
	TBdecoration: [],
	TBtextTransform: [],
	TBwordBreak: [],
	TBbgAttachment: [],
	TBbgClip: [],
	TBbgColor: [],
	TBbgPosition: [],
	TBbgRepeat: [],
	TBbgSize: [],
	TBborder: [],
	TBborderTop: [],
	TBborderLeft: [],
	TBborderRight: [],
	TBborderBottom: [],
	TBborderRadius: [],
	TBborderStyle: [],
	TBborderColor: [],
	TBborderType: [],
	TBrotate: [],
	TBskew: [],
	TBscale: [],
	TBtranslate: [],
	TBtranslateX: [],
	TBtranslateY: [],
	TBtranslateZ: [],
	TBcursor: [],
	TBtransition: [],
	TBoutline: [],
	TBoTop: [],
	TBoLeft: [],
	TBoRight: [],
	TBoBottom: [],
	TBoColor: [],
	TBoStyle: [],
	TBopacity: [],
	TBblur: [],
	TBgrayscale: [],
	TBsaturate: [],
	TBbrightness: [],
	TBcontrast: [],
	PCdisplay: [],
	PCalignItems: [],
    PCboxSizing: [],
    PCfloats: [],
    PCoverflow: [],
    PCoverflowX: [],
    PCoverflowY: [],
    PCposition: [],
    PCtop: [],
    PCleft: [],
    PCright: [],
    PCbottom: [],
    PCindex: [],
    PCvisibility: [],
    PCflex: [],
    PCdirection: [],
    PCwrap: [],
    PCshrink: [],
    PCbasis: [],
    PCjustify: [],
    PCjustItems: [],
    PCjustSelf: [],
    PCalignContent: [],
    PCalignItems: [],
    PCalignSelf: [],
    PCpadding: [],
    PCpaddingTop: [],
    PCpaddingLeft: [],
    PCpaddingRight: [],
    PCpaddingBottom: [],
    PCmargin: [],
    PCmarginTop: [],
    PCmarginLeft: [],
    PCmarginRight: [],
    PCmarginBottom: [],
    PCwidth: [],
    PCheight: [],
    PCfontSize: [],
    PCfontStyle: [],
    PCletterSpacing: [],
    PClineHeight: [],
	PCtextAlign: [],
	PCtextColor: [],
	PCdecoration: [],
	PCtextTransform: [],
	PCwordBreak: [],
	PCbgAttachment: [],
	PCbgClip: [],
	PCbgColor: [],
	PCbgPosition: [],
	PCbgRepeat: [],
	PCbgSize: [],
	PCborder: [],
	PCborderTop: [],
	PCborderLeft: [],
	PCborderRight: [],
	PCborderBottom: [],
	PCborderRadius: [],
	PCborderStyle: [],
	PCborderColor: [],
	PCborderType: [],
	PCrotate: [],
	PCskew: [],
	PCscale: [],
	PCtranslate: [],
	PCtranslateX: [],
	PCtranslateY: [],
	PCtranslateZ: [],
	PCcursor: [],
	PCtransition: [],
	PCoutline: [],
	PCoTop: [],
	PCoLeft: [],
	PCoRight: [],
	PCoBottom: [],
	PCoColor: [],
	PCoStyle: [],
	PCopacity: [],
	PCblur: [],
	PCgrayscale: [],
	PCsaturate: [],
	PCbrightness: [],
	PCcontrast: [],
}

// daftar nama class dan nama items 
// yang akan di gunakan oleh class itu sendiri
let utility = {
	"custom-d": "display",
	"custom-items": "alignItems",
    "custom-box": "boxSizing",
    "custom-float": "floats",
    "custom-overflow": "overflow",
    "custom-overflowX": "overflowX",
    "custom-overflowY": "overflowY",
    "custom-pst": "position",
    "custom-t": "top",
    "custom-l": "left",
    "custom-r": "right",
    "custom-b": "bottom",
    "custom-index": "index",
    "custom-visibility": "visibility",
    "custom-flex": "flex",
    "custom-direction": "direction",
    "custom-wrap": "wrap",
    "custom-shrink": "shrink",
    "custom-basis": "basis",
    "custom-justify": "justify",
    "custom-just-items": "justItems", 
    "custom-just-self": "justSelf", 
    "custom-content": "alignContent", 
    "custom-items": "alignItems", 
    "custom-self": "alignSelf", 
    "custom-p": "padding", 
    "custom-pt": "paddingTop", 
    "custom-pl": "paddingLeft", 
    "custom-pr": "paddingRight", 
    "custom-pb": "paddingBottom", 
    "custom-m": "margin", 
    "custom-mt": "marginTop", 
    "custom-ml": "marginLeft", 
    "custom-mr": "marginRight", 
    "custom-mb": "marginBottom", 
    "custom-w": "width", 
    "custom-h": "height", 
    "custom-font-sz": "fontSize", 
    "custom-font-style": "fontStyle", 
    "custom-weight": "fontWeight", 
    "custom-let-spacing": "letterSpacing", 
    "custom-leading": "lineHeight", 
    "custom-text": "textAlign", 
    "custom-color": "textColor", 
    "custom-decoration": "decoration", 
    "custom-text-transform": "textTransform", 
    "custom-break": "wordBreak", 
    "custom-attachment": "bgAttachment", 
    "custom-bg-clip": "bgClip", 
    "custom-bg": "bgColor", 
    "custom-bg-post": "bgPosition", 
    "custom-bg-rpt": "bgRepeat", 
    "custom-bg-sz": "bgSize", 
    "custom-border": "border", 
    "custom-border-t": "borderTop", 
    "custom-border-l": "borderLeft", 
    "custom-border-r": "borderRight", 
    "custom-border-b": "borderBottom", 
    "custom-radius": "borderRadius", 
    "custom-style": "borderStyle", 
    "custom-border-clr": "borderColor", 
    "custom-border-type": "borderType", 
    "custom-rotate": "rotate", 
    "custom-skew": "skew", 
    "custom-scale": "scale", 
    "custom-translate": "translate", 
    "custom-translateX": "translateX", 
    "custom-translateY": "translateY", 
    "custom-translateZ": "translateZ", 
    "custom-cursor": "cursor", 
    "custom-transition": "transition", 
    "custom-o": "outline", 
    "custom-o-top": "oTop", 
    "custom-o-left": "oLeft", 
    "custom-o-right": "oRight", 
    "custom-o-bottom": "oBottom", 
    "custom-o-color": "oColor", 
    "custom-o-style": "oStyle", 
    "custom-opacity": "opacity", 
    "custom-blur": "blur", 
    "custom-grayscale": "grayscale", 
    "custom-saturate": "saturate", 
    "custom-brightness": "brightness", 
    "custom-contrast": "contrast", 
	"mb_custom-d": "MBdisplay",
	"mb_custom-items": "MBalignItems",
    "mb_custom-box": "MBboxSizing",
    "mb_custom-float": "MBfloats",
    "mb_custom-overflow": "MBoverflow",
    "mb_custom-overflowX": "MBoverflowX",
    "mb_custom-overflowY": "MBoverflowY",
    "mb_custom-pst": "MBposition",
    "mb_custom-t": "MBtop",
    "mb_custom-l": "MBleft",
    "mb_custom-r": "MBright",
    "mb_custom-b": "MBbottom",
    "mb_custom-index": "MBindex",
    "mb_custom-visibility": "MBvisibility",
    "mb_custom-flex": "MBflex",
    "mb_custom-direction": "MBdirection",
    "mb_custom-wrap": "MBwrap",
    "mb_custom-shrink": "MBshrink",
    "mb_custom-basis": "MBbasis",
    "mb_custom-justify": "MBjustify",
    "mb_custom-just-items": "MBjustItems", 
    "mb_custom-just-self": "MBjustSelf", 
    "mb_custom-content": "MBalignContent", 
    "mb_custom-items": "MBalignItems", 
    "mb_custom-self": "MBalignSelf", 
    "mb_custom-p": "MBpadding", 
    "mb_custom-pt": "MBpaddingTop", 
    "mb_custom-pl": "MBpaddingLeft", 
    "mb_custom-pr": "MBpaddingRight", 
    "mb_custom-pb": "MBpaddingBottom", 
    "mb_custom-m": "MBmargin", 
    "mb_custom-mt": "MBmarginTop", 
    "mb_custom-ml": "MBmarginLeft", 
    "mb_custom-mr": "MBmarginRight", 
    "mb_custom-mb": "MBmarginBottom", 
    "mb_custom-w": "MBwidth", 
    "mb_custom-h": "MBheight", 
    "mb_custom-font-sz": "MBfontSize", 
    "mb_custom-font-style": "MBfontStyle", 
    "mb_custom-weight": "MBfontWeight", 
    "mb_custom-let-spacing": "MBletterSpacing", 
    "mb_custom-leading": "MBlineHeight", 
    "mb_custom-text": "MBtextAlign", 
    "mb_custom-color": "MBtextColor", 
    "mb_custom-decoration": "MBdecoration", 
    "mb_custom-text-transform": "MBtextTransform", 
    "mb_custom-break": "MBwordBreak", 
    "mb_custom-attachment": "MBbgAttachment", 
    "mb_custom-bg-clip": "MBbgClip", 
    "mb_custom-bg": "MBbgColor", 
    "mb_custom-bg-post": "MBbgPosition", 
    "mb_custom-bg-rpt": "MBbgRepeat", 
    "mb_custom-bg-sz": "MBbgSize", 
    "mb_custom-border": "MBborder", 
    "mb_custom-border-t": "MBborderTop", 
    "mb_custom-border-l": "MBborderLeft", 
    "mb_custom-border-r": "MBborderRight", 
    "mb_custom-border-b": "MBborderBottom", 
    "mb_custom-radius": "MBborderRadius", 
    "mb_custom-style": "MBborderStyle", 
    "mb_custom-border-clr": "MBborderColor", 
    "mb_custom-border-type": "MBborderType", 
    "mb_custom-rotate": "MBrotate", 
    "mb_custom-skew": "MBskew", 
    "mb_custom-scale": "MBscale", 
    "mb_custom-translate": "MBtranslate", 
    "mb_custom-translateX": "MBtranslateX", 
    "mb_custom-translateY": "MBtranslateY", 
    "mb_custom-translateZ": "MBtranslateZ", 
    "mb_custom-cursor": "MBcursor", 
    "mb_custom-transition": "MBtransition", 
    "mb_custom-o": "MBoutline", 
    "mb_custom-o-top": "MBoTop", 
    "mb_custom-o-left": "MBoLeft", 
    "mb_custom-o-right": "MBoRight", 
    "mb_custom-o-bottom": "MBoBottom", 
    "mb_custom-o-color": "MBoColor", 
    "mb_custom-o-style": "MBoStyle", 
    "mb_custom-opacity": "MBopacity", 
    "mb_custom-blur": "MBblur", 
    "mb_custom-grayscale": "MBgrayscale", 
    "mb_custom-saturate": "MBsaturate", 
    "mb_custom-brightness": "MBbrightness", 
    "mb_custom-contrast": "MBcontrast", 
	"tb_custom-d": "TBdisplay",
	"tb_custom-items": "TBalignItems",
    "tb_custom-box": "TBboxSizing",
    "tb_custom-float": "TBfloats",
    "tb_custom-overflow": "TBoverflow",
    "tb_custom-overflowX": "TBoverflowX",
    "tb_custom-overflowY": "TBoverflowY",
    "tb_custom-pst": "TBposition",
    "tb_custom-t": "TBtop",
    "tb_custom-l": "TBleft",
    "tb_custom-r": "TBright",
    "tb_custom-b": "TBbottom",
    "tb_custom-index": "TBindex",
    "tb_custom-visibility": "TBvisibility",
    "tb_custom-flex": "TBflex",
    "tb_custom-direction": "TBdirection",
    "tb_custom-wrap": "TBwrap",
    "tb_custom-shrink": "TBshrink",
    "tb_custom-basis": "TBbasis",
    "tb_custom-justify": "TBjustify",
    "tb_custom-just-items": "TBjustItems", 
    "tb_custom-just-self": "TBjustSelf", 
    "tb_custom-content": "TBalignContent", 
    "tb_custom-items": "TBalignItems", 
    "tb_custom-self": "TBalignSelf", 
    "tb_custom-p": "TBpadding", 
    "tb_custom-pt": "TBpaddingTop", 
    "tb_custom-pl": "TBpaddingLeft", 
    "tb_custom-pr": "TBpaddingRight", 
    "tb_custom-pb": "TBpaddingBottom", 
    "tb_custom-m": "TBmargin", 
    "tb_custom-mt": "TBmarginTop", 
    "tb_custom-ml": "TBmarginLeft", 
    "tb_custom-mr": "TBmarginRight", 
    "tb_custom-mb": "TBmarginBottom", 
    "tb_custom-w": "TBwidth", 
    "tb_custom-h": "TBheight", 
    "tb_custom-font-sz": "TBfontSize", 
    "tb_custom-font-style": "TBfontStyle", 
    "tb_custom-weight": "TBfontWeight", 
    "tb_custom-let-spacing": "TBletterSpacing", 
    "tb_custom-leading": "TBlineHeight", 
    "tb_custom-text": "TBtextAlign", 
    "tb_custom-color": "TBtextColor", 
    "tb_custom-decoration": "TBdecoration", 
    "tb_custom-text-transform": "TBtextTransform", 
    "tb_custom-break": "TBwordBreak", 
    "tb_custom-attachment": "TBbgAttachment", 
    "tb_custom-bg-clip": "TBbgClip", 
    "tb_custom-bg": "TBbgColor", 
    "tb_custom-bg-post": "TBbgPosition", 
    "tb_custom-bg-rpt": "TBbgRepeat", 
    "tb_custom-bg-sz": "TBbgSize", 
    "tb_custom-border": "TBborder", 
    "tb_custom-border-t": "TBborderTop", 
    "tb_custom-border-l": "TBborderLeft", 
    "tb_custom-border-r": "TBborderRight", 
    "tb_custom-border-b": "TBborderBottom", 
    "tb_custom-radius": "TBborderRadius", 
    "tb_custom-style": "TBborderStyle", 
    "tb_custom-border-clr": "TBborderColor", 
    "tb_custom-border-type": "TBborderType", 
    "tb_custom-rotate": "TBrotate", 
    "tb_custom-skew": "TBskew", 
    "tb_custom-scale": "TBscale", 
    "tb_custom-translate": "TBtranslate", 
    "tb_custom-translateX": "TBtranslateX", 
    "tb_custom-translateY": "TBtranslateY", 
    "tb_custom-translateZ": "TBtranslateZ", 
    "tb_custom-cursor": "TBcursor", 
    "tb_custom-transition": "TBtransition", 
    "tb_custom-o": "TBoutline", 
    "tb_custom-o-top": "TBoTop", 
    "tb_custom-o-left": "TBoLeft", 
    "tb_custom-o-right": "TBoRight", 
    "tb_custom-o-bottom": "TBoBottom", 
    "tb_custom-o-color": "TBoColor", 
    "tb_custom-o-style": "TBoStyle", 
    "tb_custom-opacity": "TBopacity", 
    "tb_custom-blur": "TBblur", 
    "tb_custom-grayscale": "TBgrayscale", 
    "tb_custom-saturate": "TBsaturate", 
    "tb_custom-brightness": "TBbrightness", 
    "tb_custom-contrast": "TBcontrast", 
	"pc_custom-d": "PCdisplay",
	"pc_custom-items": "PCalignItems",
    "pc_custom-box": "PCboxSizing",
    "pc_custom-float": "PCfloats",
    "pc_custom-overflow": "PCoverflow",
    "pc_custom-overflowX": "PCoverflowX",
    "pc_custom-overflowY": "PCoverflowY",
    "pc_custom-pst": "PCposition",
    "pc_custom-t": "PCtop",
    "pc_custom-l": "PCleft",
    "pc_custom-r": "PCright",
    "pc_custom-b": "PCbottom",
    "pc_custom-index": "PCindex",
    "pc_custom-visibility": "PCvisibility",
    "pc_custom-flex": "PCflex",
    "pc_custom-direction": "PCdirection",
    "pc_custom-wrap": "PCwrap",
    "pc_custom-shrink": "PCshrink",
    "pc_custom-basis": "PCbasis",
    "pc_custom-justify": "PCjustify",
    "pc_custom-just-items": "PCjustItems", 
    "pc_custom-just-self": "PCjustSelf", 
    "pc_custom-content": "PCalignContent", 
    "pc_custom-items": "PCalignItems", 
    "pc_custom-self": "PCalignSelf", 
    "pc_custom-p": "PCpadding", 
    "pc_custom-pt": "PCpaddingTop", 
    "pc_custom-pl": "PCpaddingLeft", 
    "pc_custom-pr": "PCpaddingRight", 
    "pc_custom-pb": "PCpaddingBottom", 
    "pc_custom-m": "PCmargin", 
    "pc_custom-mt": "PCmarginTop", 
    "pc_custom-ml": "PCmarginLeft", 
    "pc_custom-mr": "PCmarginRight", 
    "pc_custom-mb": "PCmarginBottom", 
    "pc_custom-w": "PCwidth", 
    "pc_custom-h": "PCheight", 
    "pc_custom-font-sz": "PCfontSize", 
    "pc_custom-font-style": "PCfontStyle", 
    "pc_custom-weight": "PCfontWeight", 
    "pc_custom-let-spacing": "PCletterSpacing", 
    "pc_custom-leading": "PClineHeight", 
    "pc_custom-text": "PCtextAlign", 
    "pc_custom-color": "PCtextColor", 
    "pc_custom-decoration": "PCdecoration", 
    "pc_custom-text-transform": "PCtextTransform", 
    "pc_custom-break": "PCwordBreak", 
    "pc_custom-attachment": "PCbgAttachment", 
    "pc_custom-bg-clip": "PCbgClip", 
    "pc_custom-bg": "PCbgColor", 
    "pc_custom-bg-post": "PCbgPosition", 
    "pc_custom-bg-rpt": "PCbgRepeat", 
    "pc_custom-bg-sz": "PCbgSize", 
    "pc_custom-border": "PCborder", 
    "pc_custom-border-t": "PCborderTop", 
    "pc_custom-border-l": "PCborderLeft", 
    "pc_custom-border-r": "PCborderRight", 
    "pc_custom-border-b": "PCborderBottom", 
    "pc_custom-radius": "PCborderRadius", 
    "pc_custom-style": "PCborderStyle", 
    "pc_custom-border-clr": "PCborderColor", 
    "pc_custom-border-type": "PCborderType", 
    "pc_custom-rotate": "PCrotate", 
    "pc_custom-skew": "PCskew", 
    "pc_custom-scale": "PCscale", 
    "pc_custom-translate": "PCtranslate", 
    "pc_custom-translateX": "PCtranslateX", 
    "pc_custom-translateY": "PCtranslateY", 
    "pc_custom-translateZ": "PCtranslateZ", 
    "pc_custom-cursor": "PCcursor", 
    "pc_custom-transition": "PCtransition", 
    "pc_custom-o": "PCoutline", 
    "pc_custom-o-top": "PCoTop", 
    "pc_custom-o-left": "PCoLeft", 
    "pc_custom-o-right": "PCoRight", 
    "pc_custom-o-bottom": "PCoBottom", 
    "pc_custom-o-color": "PCoColor", 
    "pc_custom-o-style": "PCoStyle", 
    "pc_custom-opacity": "PCopacity", 
    "pc_custom-blur": "PCblur", 
    "pc_custom-grayscale": "PCgrayscale", 
    "pc_custom-saturate": "PCsaturate", 
    "pc_custom-brightness": "PCbrightness", 
    "pc_custom-contrast": "PCcontrast", 
}

// fungsi Core adalah fungsi yang berperan sebagai
// fungsi untuk menambahkan setiap class utility yang ada
// di dalam className dari semua element
// yang ada di dalam body
function Core(element){

	let allClass = element?.className?.split(" ") || [];

	allClass.forEach(e =>{

		let token = e.split("-");

		if(token.length === 4){

			let type = token.splice(token.length-1)

			if(token.join("-") in utility){

				vallclass[utility[token.join("-")]].push(type[0]);
				vallclass[utility[token.join("-")]] = [...new Set(vallclass[utility[token.join("-")]])];

			}

			return;

		}
		if(token.length === 3){

			let type = token.splice(token.length-1,token.length-1)

			if(token.join("-") in utility){

				vallclass[utility[token.join("-")]].push(type[0]);
				vallclass[utility[token.join("-")]] = [...new Set(vallclass[utility[token.join("-")]])];

			}

			return;

		}

		if(token.length === 2){

			let type = token.splice(token.length-1,token.length-1);

			if(token.join("-") in utility){

				vallclass[utility[token.join("-")]].push(type[0]);
				vallclass[utility[token.join("-")]] = [...new Set(vallclass[utility[token.join("-")]])];

			}		

			return;
		}

	})

	if(element.children.length > 0){

		for(let x of element.children) Core(x);

	}

}

// melakukan pengisian dari semua element yang ada di dalam body
// dan dari body itu sendiri
Core(document.body);

// custom style sheet template (CUSTOM)
// jika tidak di perlukan cukup biarkan menjadi string kosong (``)
let style_sheet = `
	
	html,body{
		margin: 0px;
		padding: 0px;
	}

`;

function valclass_initalization(){

	// melakukan looping untuk menambahkan valclass
	// ke dalam element style 
	

	for(let className in vallclass){

		for(let _class of vallclass[className]){
			if(className === "display"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-d-${_class}{
						display: ${_class};
					}
				}
				`;				
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "alignItems"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-items-${_class}{
						align-items: ${_class};
					}
				}
				`;				
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "boxSizing"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-box-${_class}{
						box-sizing: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "floats"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-float-${_class}{
						float: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "overflow"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-overflow-${_class}{
						overflow: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "overflowX"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-overflowX-${_class}{
						overflow-x: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "overflowY"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-overflowY-${_class}{
						overflow-y: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "position"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-pst-${_class}{
						position: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "top"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-t-${_class}{
						top: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "left"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-l-${_class}{
						left: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "right"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-r-${_class}{
						right: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "bottom"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-b-${_class}{
						bottom: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "index"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-index-${_class}{
						z-index: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "visibility"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-visibility-${_class}{
						visibility: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
            if(className === "flex"){
                let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-flex-${_class}{
						flex: ${_class};
					}
				}
                `;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
			if(className === "direction"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-direction-${_class}{
						flex-direction: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "wrap"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-wrap-${_class}{
						flex-wrap: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "shrink"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-shrink-${_class}{
						flex-shrink: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "basis"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-basis-${_class}{
						flex-basis: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "justify"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-justify-${_class}{
						justify-content: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "justItems"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-just-items-${_class}{
						justify-items: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "justSelf"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-just-self-${_class}{
						justify-self: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "alignContent"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-content-${_class}{
						align-content: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "alignItems"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-items-${_class}{
						align-items: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "alignSelf"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-self-${_class}{
						align-self: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "padding"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-p-${_class}{
						padding: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "paddingTop"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-pt-${_class}{
						padding-top: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "paddingLeft"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-pl-${_class}{
						padding-left: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "paddingRight"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-pr-${_class}{
						padding-right: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "paddingBottom"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-pb-${_class}{
						padding-bottom: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "margin"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-m-${_class}{
						margin: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "marginTop"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-mt-${_class}{
						margin-top: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "marginLeft"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-ml-${_class}{
						margin-left: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "marginRight"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-mr-${_class}{
						margin-right: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "marginBottom"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-mb-${_class}{
						margin-bottom: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "width"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-w-${_class}{
						width: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "height"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-h-${_class}{
						height: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "fontSize"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-font-sz-${_class}{
						font-size: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "fontStyle"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-font-style-${_class}{
						font-style: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "fontWeight"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-weight-${_class}{
						font-weight: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "letterSpacing"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-let-spacing-${_class}{
						letter-spacing: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "lineHeight"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-leading-${_class}{
						line-height: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "textAlign"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-text-${_class}{
						text-align: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "textColor"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-color-${_class}{
						color: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "decoration"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-decoration-${_class}{
						text-decoration: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "textTransform"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-text-transform-${_class}{
						text-transform: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "wordBreak"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-break-${_class}{
						word-break: ${_class};
						overflow-wrap: break-word;
					}
				}
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
				`;	
			}
			if(className === "bgAttachment"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-attachment-${_class}{
						background-attachment: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "bgClip"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-bg-clip-${_class}{
						background-clip: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "bgColor"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-bg-${_class}{
						background-color: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "bgPosition"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-bg-post-${_class}{
						background-position: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "bgRepeat"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-bg-rpt-${_class}{
						background-repeat: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "bgSize"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-bg-sz-${_class}{
						background-size: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "border"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-border-${_class}{
						border: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "borderTop"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-border-top-${_class}{
						border-top: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "borderLeft"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-border-l-${_class}{
						border-left: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "borderRight"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-border-r-${_class}{
						border-right: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "borderBottom"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-border-b-${_class}{
						border-bottom: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "borderRadius"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-radius-${_class}{
						border-radius: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "borderStyle"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-style-${_class}{
						border-style: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "borderColor"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-border-clr-${_class}{
						border-color: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "borderType"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-border-type-${_class}{
						border-collapse: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "rotate"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-rotate-${_class}{
						transform: rotate(${_class});
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "skew"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-skew-${_class}{
						transform: skew(${_class});
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "scale"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-scale-${_class}{
						transform: scale(${_class});
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "translate"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-translate-${_class}{
						transform: translate(${_class});
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "translateX"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-translateX-${_class}{
						transform: translateX(${_class});
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "translateY"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-translateY-${_class}{
						transform: translateY(${_class});
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "translateZ"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-translateZ-${_class}{
						transform: translateZ(${_class});
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "cursor"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-cursor-${_class}{
						cursor: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "transition"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-transition-${_class}{
						transition: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "outline"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-o-${_class}{
						outline: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "oTop"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-o-top-${_class}{
						outline-top: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "oLeft"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-o-left-${_class}{
						outline-left: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "oRight"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-o-right-${_class}{
						outline-right: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "oBottom"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-o-bottom-${_class}{
						outline-bottom: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "oColor"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-o-color-${_class}{
						outline-color: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "oStyle"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-o-style-${_class}{
						outline-style: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "opacity"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-opacity-${_class}{
						opacity: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "blur"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-blur-${_class}{
						filter: blur(${_class});
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "grayscale"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-grayscale-${_class}{
						filter: grayscale(${_class});
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "saturate"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-saturate-${_class}{
						filter: saturate(${_class});
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "brightness"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-brightness-${_class}{
						filter: brightness(${_class});
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "contrast"){
				let style_sheet =`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
					.custom-contrast-${_class}{
						filter: contrast(${_class});
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBdisplay"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-d-${_class}{
						display: ${_class};
					}
				}
				`;				
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBalignItems"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-items-${_class}{
						align-items: ${_class};
					}
				}
				`;				
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBboxSizing"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-box-${_class}{
						box-sizing: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBfloats"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-float-${_class}{
						float: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBoverflow"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-overflow-${_class}{
						overflow: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBoverflowX"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-overflowX-${_class}{
						overflow-x: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBoverflowY"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-overflowY-${_class}{
						overflow-y: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBposition"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-pst-${_class}{
						position: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBtop"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-t-${_class}{
						top: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBleft"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-l-${_class}{
						left: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBright"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-r-${_class}{
						right: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBbottom"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-b-${_class}{
						bottom: ${_class};
					}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBindex"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-index-${_class}{
						z-index: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBvisibility"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-visibility-${_class}{
						visibility: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
            if(className === "MBflex"){
                let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-flex-${_class}{
						flex: ${_class};
					}
				}
                `;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
			if(className === "MBdirection"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-direction-${_class}{
						flex-direction: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBwrap"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-wrap-${_class}{
						flex-wrap: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBshrink"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-shrink-${_class}{
						flex-shrink: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBbasis"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-basis-${_class}{
						flex-basis: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBjustify"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-justify-${_class}{
						justify-content: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBjustItems"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-just-items-${_class}{
						justify-items: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBjustSelf"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-just-self-${_class}{
						justify-self: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBalignContent"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-content-${_class}{
						align-content: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBalignItems"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-items-${_class}{
						align-items: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBalignSelf"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-self-${_class}{
						align-self: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBpadding"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-p-${_class}{
						padding: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBpaddingTop"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-pt-${_class}{
						padding-top: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBpaddingLeft"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-pl-${_class}{
						padding-left: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBpaddingRight"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-pr-${_class}{
						padding-right: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBpaddingBottom"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-pb-${_class}{
						padding-bottom: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBmargin"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-m-${_class}{
						margin: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBmarginTop"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-mt-${_class}{
						margin-top: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBmarginLeft"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-ml-${_class}{
						margin-left: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBmarginRight"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-mr-${_class}{
						margin-right: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBmarginBottom"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-mb-${_class}{
						margin-bottom: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBwidth"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-w-${_class}{
						width: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBheight"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-h-${_class}{
						height: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBfontSize"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-font-sz-${_class}{
						font-size: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBfontStyle"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-font-style-${_class}{
						font-style: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBfontWeight"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-weight-${_class}{
						font-weight: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBletterSpacing"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-let-spacing-${_class}{
						letter-spacing: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBlineHeight"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-leading-${_class}{
						line-height: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBtextAlign"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-text-${_class}{
						text-align: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBtextColor"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-color-${_class}{
						color: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBdecoration"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-decoration-${_class}{
						text-decoration: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBtextTransform"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-text-transform-${_class}{
						text-transform: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBwordBreak"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-break-${_class}{
						word-break: ${_class};
						overflow-wrap: break-word;
				}
				}
					document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
				`;	
			}
			if(className === "MBbgAttachment"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-attachment-${_class}{
						background-attachment: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBbgClip"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-bg-clip-${_class}{
						background-clip: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBbgColor"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-bg-${_class}{
						background-color: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBbgPosition"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-bg-post-${_class}{
						background-position: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBbgRepeat"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-bg-rpt-${_class}{
						background-repeat: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBbgSize"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-bg-sz-${_class}{
						background-size: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBborder"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-border-${_class}{
						border: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBborderTop"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-border-top-${_class}{
						border-top: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBborderLeft"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-border-l-${_class}{
						border-left: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBborderRight"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-border-r-${_class}{
						border-right: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBborderBottom"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-border-b-${_class}{
						border-bottom: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBborderRadius"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-radius-${_class}{
						border-radius: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBborderStyle"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-style-${_class}{
						border-style: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBborderColor"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-border-clr-${_class}{
						border-color: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBborderType"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-border-type-${_class}{
						border-collapse: ${_class};
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBrotate"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-rotate-${_class}{
						transform: rotate(${_class});
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBskew"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-skew-${_class}{
						transform: skew(${_class});
					}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBscale"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-scale-${_class}{
					transform: scale(${_class});
				}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBtranslate"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-translate-${_class}{
					transform: translate(${_class});
				}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBtranslateX"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-translateX-${_class}{
					transform: translateX(${_class});
				}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBtranslateY"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-translateY-${_class}{
					transform: translateY(${_class});
				}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBtranslateZ"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-translateZ-${_class}{
					transform: translateZ(${_class});
				}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBcursor"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-cursor-${_class}{
					cursor: ${_class};
				}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBtransition"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-transition-${_class}{
					transition: ${_class};
				}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBoutline"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-o-${_class}{
					outline: ${_class};
				}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBoTop"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-o-top-${_class}{
					outline-top: ${_class};
				}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBoLeft"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-o-left-${_class}{
					outline-left: ${_class};
				}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBoRight"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-o-right-${_class}{
					outline-right: ${_class};
				}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBoBottom"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-o-bottom-${_class}{
					outline-bottom: ${_class};
				}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBoColor"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-o-color-${_class}{
					outline-color: ${_class};
				}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBoStyle"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-o-style-${_class}{
					outline-style: ${_class};
				}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBopacity"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-opacity-${_class}{
					opacity: ${_class};
				}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBblur"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-blur-${_class}{
					filter: blur(${_class});
				}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBgrayscale"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-grayscale-${_class}{
					filter: grayscale(${_class});
				}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBsaturate"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-saturate-${_class}{
					filter: saturate(${_class});
				}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBbrightness"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-brightness-${_class}{
					filter: brightness(${_class});
				}
				}
				`;	
			document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "MBcontrast"){
				let style_sheet =`
				@media screen and (min-width: 320px) and (max-width: 600px){
					.mb_custom-contrast-${_class}{
					filter: contrast(${_class});
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBdisplay"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-d-${_class}{
				    display: ${_class};
				}
				}
				`;				
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBalignItems"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-items-${_class}{
				    align-items: ${_class};
				}
				}
				`;				
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBboxSizing"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-box-${_class}{
					box-sizing: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBfloats"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-float-${_class}{
					float: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBoverflow"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-overflow-${_class}{
					overflow: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBoverflowX"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-overflowX-${_class}{
					overflow-x: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBoverflowY"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-overflowY-${_class}{
					overflow-y: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBposition"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-pst-${_class}{
					position: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBtop"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-t-${_class}{
					top: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBleft"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-l-${_class}{
					left: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBright"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-r-${_class}{
					right: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBbottom"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-b-${_class}{
					bottom: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBindex"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-index-${_class}{
					z-index: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBvisibility"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-visibility-${_class}{
					visibility: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
            if(className === "TBflex"){
                let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-flex-${_class}{
                    flex: ${_class};
                }
				}
                `;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
			if(className === "TBdirection"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-direction-${_class}{
					flex-direction: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBwrap"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-wrap-${_class}{
					flex-wrap: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBshrink"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-shrink-${_class}{
					flex-shrink: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBbasis"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-basis-${_class}{
					flex-basis: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBjustify"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-justify-${_class}{
					justify-content: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBjustItems"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-just-items-${_class}{
					justify-items: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBjustSelf"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-just-self-${_class}{
					justify-self: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBalignContent"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-content-${_class}{
					align-content: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBalignItems"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-items-${_class}{
					align-items: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBalignSelf"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-self-${_class}{
					align-self: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBpadding"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-p-${_class}{
					padding: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBpaddingTop"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-pt-${_class}{
					padding-top: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBpaddingLeft"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-pl-${_class}{
					padding-left: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBpaddingRight"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-pr-${_class}{
					padding-right: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBpaddingBottom"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-pb-${_class}{
					padding-bottom: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBmargin"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-m-${_class}{
					margin: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBmarginTop"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-mt-${_class}{
					margin-top: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBmarginLeft"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-ml-${_class}{
					margin-left: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBmarginRight"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-mr-${_class}{
					margin-right: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBmarginBottom"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-mb-${_class}{
					margin-bottom: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBwidth"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-w-${_class}{
					width: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBheight"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-h-${_class}{
					height: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBfontSize"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-font-sz-${_class}{
					font-size: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBfontStyle"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-font-style-${_class}{
					font-style: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBfontWeight"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-weight-${_class}{
					font-weight: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBletterSpacing"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-let-spacing-${_class}{
					letter-spacing: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBlineHeight"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-leading-${_class}{
					line-height: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBtextAlign"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-text-${_class}{
					text-align: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBtextColor"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-color-${_class}{
					color: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBdecoration"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-decoration-${_class}{
					text-decoration: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBtextTransform"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-text-transform-${_class}{
					text-transform: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBwordBreak"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-break-${_class}{
					word-break: ${_class};
					overflow-wrap: break-word;
				}
				}
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
				`;	
			}
			if(className === "TBbgAttachment"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-attachment-${_class}{
					background-attachment: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBbgClip"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-bg-clip-${_class}{
					background-clip: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBbgColor"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-bg-${_class}{
					background-color: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBbgPosition"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-bg-post-${_class}{
					background-position: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBbgRepeat"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-bg-rpt-${_class}{
					background-repeat: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBbgSize"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-bg-sz-${_class}{
					background-size: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBborder"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-border-${_class}{
					border: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBborderTop"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-border-top-${_class}{
					border-top: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBborderLeft"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-border-l-${_class}{
					border-left: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBborderRight"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-border-r-${_class}{
					border-right: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBborderBottom"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-border-b-${_class}{
					border-bottom: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBborderRadius"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-radius-${_class}{
					border-radius: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBborderStyle"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-style-${_class}{
					border-style: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBborderColor"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-border-clr-${_class}{
					border-color: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBborderType"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-border-type-${_class}{
					border-collapse: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBrotate"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-rotate-${_class}{
					transform: rotate(${_class});
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBskew"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-skew-${_class}{
					transform: skew(${_class});
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBscale"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-scale-${_class}{
					transform: scale(${_class});
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBtranslate"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-translate-${_class}{
					transform: translate(${_class});
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBtranslateX"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-translateX-${_class}{
					transform: translateX(${_class});
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBtranslateY"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-translateY-${_class}{
					transform: translateY(${_class});
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBtranslateZ"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-translateZ-${_class}{
					transform: translateZ(${_class});
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBcursor"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-cursor-${_class}{
					cursor: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBtransition"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-transition-${_class}{
					transition: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBoutline"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-o-${_class}{
					outline: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBoTop"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-o-top-${_class}{
					outline-top: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBoLeft"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-o-left-${_class}{
					outline-left: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBoRight"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-o-right-${_class}{
					outline-right: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBoBottom"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-o-bottom-${_class}{
					outline-bottom: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBoColor"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-o-color-${_class}{
					outline-color: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBoStyle"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-o-style-${_class}{
					outline-style: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBopacity"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-opacity-${_class}{
					opacity: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBblur"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-blur-${_class}{
					filter: blur(${_class});
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBgrayscale"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-grayscale-${_class}{
					filter: grayscale(${_class});
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBsaturate"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-saturate-${_class}{
					filter: saturate(${_class});
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBbrightness"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-brightness-${_class}{
					filter: brightness(${_class});
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "TBcontrast"){
				let style_sheet =`
				@media screen and (min-width: 600px) and (max-width: 900px){
					.tb_custom-contrast-${_class}{
					filter: contrast(${_class});
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCdisplay"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-d-${_class}{
				    display: ${_class};
				}
				}
				`;				
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCalignItems"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-items-${_class}{
				    align-items: ${_class};
				}
				}
				`;				
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCboxSizing"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-box-${_class}{
					box-sizing: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCfloats"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-float-${_class}{
					float: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCoverflow"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-overflow-${_class}{
					overflow: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCoverflowX"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-overflowX-${_class}{
					overflow-x: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCoverflowY"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-overflowY-${_class}{
					overflow-y: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCposition"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-pst-${_class}{
					position: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCtop"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-t-${_class}{
					top: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCleft"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-l-${_class}{
					left: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCright"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-r-${_class}{
					right: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCbottom"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-b-${_class}{
					bottom: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCindex"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-index-${_class}{
					z-index: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCvisibility"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-visibility-${_class}{
					visibility: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
            if(className === "PCflex"){
                let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-flex-${_class}{
                    flex: ${_class};
                }
				}
                `;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
			if(className === "PCdirection"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-direction-${_class}{
					flex-direction: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCwrap"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-wrap-${_class}{
					flex-wrap: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCshrink"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-shrink-${_class}{
					flex-shrink: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCbasis"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-basis-${_class}{
					flex-basis: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCjustify"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-justify-${_class}{
					justify-content: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCjustItems"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-just-items-${_class}{
					justify-items: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCjustSelf"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-just-self-${_class}{
					justify-self: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCalignContent"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-content-${_class}{
					align-content: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCalignItems"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-items-${_class}{
					align-items: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCalignSelf"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-self-${_class}{
					align-self: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCpadding"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-p-${_class}{
					padding: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCpaddingTop"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-pt-${_class}{
					padding-top: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCpaddingLeft"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-pl-${_class}{
					padding-left: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCpaddingRight"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-pr-${_class}{
					padding-right: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCpaddingBottom"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-pb-${_class}{
					padding-bottom: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCmargin"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-m-${_class}{
					margin: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCmarginTop"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-mt-${_class}{
					margin-top: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCmarginLeft"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-ml-${_class}{
					margin-left: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCmarginRight"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-mr-${_class}{
					margin-right: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCmarginBottom"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-mb-${_class}{
					margin-bottom: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCwidth"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-w-${_class}{
					width: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCheight"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-h-${_class}{
					height: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCfontSize"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-font-sz-${_class}{
					font-size: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCfontStyle"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-font-style-${_class}{
					font-style: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCfontWeight"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-weight-${_class}{
					font-weight: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCletterSpacing"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-let-spacing-${_class}{
					letter-spacing: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PClineHeight"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-leading-${_class}{
					line-height: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCtextAlign"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-text-${_class}{
					text-align: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCtextColor"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-color-${_class}{
					color: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCdecoration"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-decoration-${_class}{
					text-decoration: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCtextTransform"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-text-transform-${_class}{
					text-transform: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCwordBreak"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-break-${_class}{
					word-break: ${_class};
					overflow-wrap: break-word;
				}
				}
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
				`;	
			}
			if(className === "PCbgAttachment"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-attachment-${_class}{
					background-attachment: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCbgClip"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-bg-clip-${_class}{
					background-clip: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCbgColor"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-bg-${_class}{
					background-color: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCbgPosition"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-bg-post-${_class}{
					background-position: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCbgRepeat"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-bg-rpt-${_class}{
					background-repeat: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCbgSize"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-bg-sz-${_class}{
					background-size: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCborder"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-border-${_class}{
					border: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCborderTop"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-border-top-${_class}{
					border-top: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCborderLeft"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-border-l-${_class}{
					border-left: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCborderRight"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-border-r-${_class}{
					border-right: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCborderBottom"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-border-b-${_class}{
					border-bottom: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCborderRadius"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-radius-${_class}{
					border-radius: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCborderStyle"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-style-${_class}{
					border-style: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCborderColor"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-border-clr-${_class}{
					border-color: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCborderType"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-border-type-${_class}{
					border-collapse: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCrotate"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-rotate-${_class}{
					transform: rotate(${_class});
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCskew"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-skew-${_class}{
					transform: skew(${_class});
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCscale"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-scale-${_class}{
					transform: scale(${_class});
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCtranslate"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-translate-${_class}{
					transform: translate(${_class});
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCtranslateX"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-translateX-${_class}{
					transform: translateX(${_class});
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCtranslateY"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-translateY-${_class}{
					transform: translateY(${_class});
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCtranslateZ"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-translateZ-${_class}{
					transform: translateZ(${_class});
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCcursor"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-cursor-${_class}{
					cursor: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCtransition"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-transition-${_class}{
					transition: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCoutline"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-o-${_class}{
					outline: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCoTop"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-o-top-${_class}{
					outline-top: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCoLeft"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-o-left-${_class}{
					outline-left: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCoRight"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-o-right-${_class}{
					outline-right: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCoBottom"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-o-bottom-${_class}{
					outline-bottom: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCoColor"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-o-color-${_class}{
					outline-color: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCoStyle"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-o-style-${_class}{
					outline-style: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCopacity"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-opacity-${_class}{
					opacity: ${_class};
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCblur"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-blur-${_class}{
					filter: blur(${_class});
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCgrayscale"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-grayscale-${_class}{
					filter: grayscale(${_class});
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCsaturate"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-saturate-${_class}{
					filter: saturate(${_class});
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCbrightness"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-brightness-${_class}{
					filter: brightness(${_class});
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}
			if(className === "PCcontrast"){
				let style_sheet =`
				@media screen and (min-width: 1920px){
					.pc_custom-contrast-${_class}{
					filter: contrast(${_class});
				}
				}
				`;	
				document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
			}

		}

	}

}	

// ketika halaman web sudah siap
// maka lakukan inisalisasi
// dan masukan valclass ke dalam nya
window.onload= ()=>{
	
	valclass_initalization();
}
