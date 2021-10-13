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

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

let cssFunction = [];

// fungsi Core adalah fungsi yang berperan sebagai
// fungsi untuk menambahkan setiap class utility yang ada
// di dalam className dari semua element
// yang ada di dalam body
function Core(element){

	let allClass = element?.className?.split(" ") || [];

    allClass.forEach(e =>{

        function check(args){

            if(/(rgb\(.*?\)|rgba\(.*?\)|#.*?)/igm.test(args)){

                return {
                    nativeCode: args,
                    value: args.split("-").filter((e,i)=> i !== args.split("-").length-1).join("-")+"-"+uuidv4(),
                    status: true
                } 

            }else{
                return{
                    nativeCode: null,
                    value: null,
                    status: false
                }
            }

        }

        if(check(e).status) cssFunction.push({
            value: {
                [check(e).value]: e
            },
            property: check(e).nativeCode?.split("-").filter((e_,i)=> i === check(e)?.nativeCode.split("-").length).join(""),
            nativeCode: check(e).nativeCode
        })

    });

    for(let x of cssFunction){

        if(new RegExp((/\(/igm,"\\\(").replace(/\)/igm,"\\\)")).test(element.className) || /\#.*?/igm.test(element.className)){

            element.className = element.className.replaceAll(x.nativeCode,Object.keys(x.value).join(""))

        }

    }

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

	});

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
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-d-${_class}{
                        display: ${_class};
                    }
                }
                `;              
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "alignItems"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-items-${_class}{
                        align-items: ${_class};
                    }
                }
                `;              
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "boxSizing"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-box-${_class}{
                        box-sizing: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "floats"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-float-${_class}{
                        float: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "overflow"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-overflow-${_class}{
                        overflow: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "overflowX"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-overflowX-${_class}{
                        overflow-x: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "overflowY"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-overflowY-${_class}{
                        overflow-y: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "position"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-pst-${_class}{
                        position: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "top"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-t-${_class}{
                        top: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "left"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-l-${_class}{
                        left: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "right"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-r-${_class}{
                        right: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "bottom"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-b-${_class}{
                        bottom: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "index"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-index-${_class}{
                        z-index: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "visibility"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-visibility-${_class}{
                        visibility: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "flex"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-flex-${_class}{
                        flex: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "direction"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-direction-${_class}{
                        flex-direction: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "wrap"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-wrap-${_class}{
                        flex-wrap: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "shrink"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-shrink-${_class}{
                        flex-shrink: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "basis"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-basis-${_class}{
                        flex-basis: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "justify"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-justify-${_class}{
                        justify-content: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "justItems"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-just-items-${_class}{
                        justify-items: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "justSelf"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-just-self-${_class}{
                        justify-self: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "alignContent"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-content-${_class}{
                        align-content: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "alignItems"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-items-${_class}{
                        align-items: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "alignSelf"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-self-${_class}{
                        align-self: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "padding"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-p-${_class}{
                        padding: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "paddingTop"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-pt-${_class}{
                        padding-top: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "paddingLeft"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-pl-${_class}{
                        padding-left: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "paddingRight"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-pr-${_class}{
                        padding-right: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "paddingBottom"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-pb-${_class}{
                        padding-bottom: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "margin"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-m-${_class}{
                        margin: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "marginTop"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-mt-${_class}{
                        margin-top: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "marginLeft"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-ml-${_class}{
                        margin-left: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "marginRight"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-mr-${_class}{
                        margin-right: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "marginBottom"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-mb-${_class}{
                        margin-bottom: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "width"){

                 style_sheet +=`
                .custom-w-${_class}{
                        width: ${_class};
                    }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-w-${_class}{
                        width: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "height"){
                 style_sheet +=`
                .custom-h-${_class}{
                        height: ${_class};
                    }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-h-${_class}{
                        height: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "fontSize"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-font-sz-${_class}{
                        font-size: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "fontStyle"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-font-style-${_class}{
                        font-style: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "fontWeight"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-weight-${_class}{
                        font-weight: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "letterSpacing"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom--spacing-${_class}{
                        letter-spacing: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "lineHeight"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-leading-${_class}{
                        line-height: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "textAlign"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-text-${_class}{
                        text-align: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "textColor"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-color-${_class}{
                        color: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "decoration"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-decoration-${_class}{
                        text-decoration: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "textTransform"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-text-transform-${_class}{
                        text-transform: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "wordBreak"){
                 style_sheet +=`
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
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-attachment-${_class}{
                        background-attachment: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "bgClip"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-bg-clip-${_class}{
                        background-clip: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "bgColor"){
                 style_sheet +=`
                .custom-bg-${_class}{
                        background-color: ${_class};
                    }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-bg-${_class}{
                        background-color: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "bgPosition"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-bg-post-${_class}{
                        background-position: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "bgRepeat"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-bg-rpt-${_class}{
                        background-repeat: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "bgSize"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-bg-sz-${_class}{
                        background-size: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "border"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-border-${_class}{
                        border: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "borderTop"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-border-top-${_class}{
                        border-top: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "borderLeft"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-border-l-${_class}{
                        border-left: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "borderRight"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-border-r-${_class}{
                        border-right: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "borderBottom"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-border-b-${_class}{
                        border-bottom: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "borderRadius"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-radius-${_class}{
                        border-radius: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "borderStyle"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-style-${_class}{
                        border-style: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "borderColor"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-border-clr-${_class}{
                        border-color: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "borderType"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-border-type-${_class}{
                        border-collapse: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "rotate"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-rotate-${_class}{
                        transform: rotate(${_class});
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "skew"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-skew-${_class}{
                        transform: skew(${_class});
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "scale"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-scale-${_class}{
                        transform: scale(${_class});
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "translate"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-translate-${_class}{
                        transform: translate(${_class});
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "translateX"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-translateX-${_class}{
                        transform: translateX(${_class});
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "translateY"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-translateY-${_class}{
                        transform: translateY(${_class});
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "translateZ"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-translateZ-${_class}{
                        transform: translateZ(${_class});
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "cursor"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-cursor-${_class}{
                        cursor: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "transition"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-transition-${_class}{
                        transition: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "outline"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-o-${_class}{
                        outline: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "oTop"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-o-top-${_class}{
                        outline-top: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "oLeft"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-o-left-${_class}{
                        outline-left: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "oRight"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-o-right-${_class}{
                        outline-right: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "oBottom"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-o-bottom-${_class}{
                        outline-bottom: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "oColor"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-o-color-${_class}{
                        outline-color: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "oStyle"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-o-style-${_class}{
                        outline-style: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "opacity"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-opacity-${_class}{
                        opacity: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "blur"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-blur-${_class}{
                        filter: blur(${_class});
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "grayscale"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-grayscale-${_class}{
                        filter: grayscale(${_class});
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "saturate"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-saturate-${_class}{
                        filter: saturate(${_class});
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "brightness"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-brightness-${_class}{
                        filter: brightness(${_class});
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "contrast"){
                 style_sheet +=`
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .custom-contrast-${_class}{
                        filter: contrast(${_class});
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBdisplay"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-d-${_class}{
                        display: ${_class};
                    }
                }
                `;              
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBalignItems"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-items-${_class}{
                        align-items: ${_class};
                    }
                }
                `;              
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBboxSizing"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-box-${_class}{
                        box-sizing: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBfloats"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-float-${_class}{
                        float: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBoverflow"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-overflow-${_class}{
                        overflow: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBoverflowX"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-overflowX-${_class}{
                        overflow-x: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBoverflowY"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-overflowY-${_class}{
                        overflow-y: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBposition"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-pst-${_class}{
                        position: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBtop"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-t-${_class}{
                        top: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBleft"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-l-${_class}{
                        left: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBright"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-r-${_class}{
                        right: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBbottom"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-b-${_class}{
                        bottom: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBindex"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-index-${_class}{
                        z-index: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBvisibility"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-visibility-${_class}{
                        visibility: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBflex"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-flex-${_class}{
                        flex: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBdirection"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-direction-${_class}{
                        flex-direction: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBwrap"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-wrap-${_class}{
                        flex-wrap: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBshrink"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-shrink-${_class}{
                        flex-shrink: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBbasis"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-basis-${_class}{
                        flex-basis: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBjustify"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-justify-${_class}{
                        justify-content: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBjustItems"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-just-items-${_class}{
                        justify-items: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBjustSelf"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-just-self-${_class}{
                        justify-self: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBalignContent"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-content-${_class}{
                        align-content: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBalignItems"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-items-${_class}{
                        align-items: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBalignSelf"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-self-${_class}{
                        align-self: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBpadding"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-p-${_class}{
                        padding: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBpaddingTop"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-pt-${_class}{
                        padding-top: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBpaddingLeft"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-pl-${_class}{
                        padding-left: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBpaddingRight"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-pr-${_class}{
                        padding-right: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBpaddingBottom"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-pb-${_class}{
                        padding-bottom: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBmargin"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-m-${_class}{
                        margin: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBmarginTop"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-mt-${_class}{
                        margin-top: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBmarginLeft"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-ml-${_class}{
                        margin-left: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBmarginRight"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-mr-${_class}{
                        margin-right: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBmarginBottom"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-mb-${_class}{
                        margin-bottom: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBwidth"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-w-${_class}{
                        width: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBheight"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-h-${_class}{
                        height: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBfontSize"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-font-sz-${_class}{
                        font-size: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBfontStyle"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-font-style-${_class}{
                        font-style: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBfontWeight"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-weight-${_class}{
                        font-weight: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBletterSpacing"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom--spacing-${_class}{
                        letter-spacing: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBlineHeight"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-leading-${_class}{
                        line-height: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBtextAlign"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-text-${_class}{
                        text-align: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBtextColor"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-color-${_class}{
                        color: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBdecoration"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-decoration-${_class}{
                        text-decoration: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBtextTransform"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-text-transform-${_class}{
                        text-transform: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBwordBreak"){
                 style_sheet +=`
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
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-attachment-${_class}{
                        background-attachment: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBbgClip"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-bg-clip-${_class}{
                        background-clip: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBbgColor"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-bg-${_class}{
                        background-color: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBbgPosition"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-bg-post-${_class}{
                        background-position: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBbgRepeat"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-bg-rpt-${_class}{
                        background-repeat: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBbgSize"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-bg-sz-${_class}{
                        background-size: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBborder"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-border-${_class}{
                        border: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBborderTop"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-border-top-${_class}{
                        border-top: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBborderLeft"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-border-l-${_class}{
                        border-left: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBborderRight"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-border-r-${_class}{
                        border-right: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBborderBottom"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-border-b-${_class}{
                        border-bottom: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBborderRadius"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-radius-${_class}{
                        border-radius: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBborderStyle"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-style-${_class}{
                        border-style: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBborderColor"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-border-clr-${_class}{
                        border-color: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBborderType"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-border-type-${_class}{
                        border-collapse: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBrotate"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-rotate-${_class}{
                        transform: rotate(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBskew"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-skew-${_class}{
                        transform: skew(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBscale"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-scale-${_class}{
                    transform: scale(${_class});
                }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBtranslate"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-translate-${_class}{
                    transform: translate(${_class});
                }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBtranslateX"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-translateX-${_class}{
                    transform: translateX(${_class});
                }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBtranslateY"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-translateY-${_class}{
                    transform: translateY(${_class});
                }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBtranslateZ"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-translateZ-${_class}{
                    transform: translateZ(${_class});
                }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBcursor"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-cursor-${_class}{
                    cursor: ${_class};
                }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBtransition"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-transition-${_class}{
                    transition: ${_class};
                }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBoutline"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-o-${_class}{
                    outline: ${_class};
                }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBoTop"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-o-top-${_class}{
                    outline-top: ${_class};
                }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBoLeft"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-o-left-${_class}{
                    outline-left: ${_class};
                }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBoRight"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-o-right-${_class}{
                    outline-right: ${_class};
                }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBoBottom"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-o-bottom-${_class}{
                    outline-bottom: ${_class};
                }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBoColor"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-o-color-${_class}{
                    outline-color: ${_class};
                }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBoStyle"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-o-style-${_class}{
                    outline-style: ${_class};
                }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBopacity"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-opacity-${_class}{
                    opacity: ${_class};
                }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBblur"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-blur-${_class}{
                    filter: blur(${_class});
                }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBgrayscale"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-grayscale-${_class}{
                    filter: grayscale(${_class});
                }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBsaturate"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-saturate-${_class}{
                    filter: saturate(${_class});
                }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBbrightness"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-brightness-${_class}{
                    filter: brightness(${_class});
                }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBcontrast"){
                 style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_custom-contrast-${_class}{
                    filter: contrast(${_class});
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBdisplay"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-d-${_class}{
                    display: ${_class};
                }
                }
                `;              
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBalignItems"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-items-${_class}{
                    align-items: ${_class};
                }
                }
                `;              
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBboxSizing"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-box-${_class}{
                    box-sizing: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBfloats"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-float-${_class}{
                    float: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBoverflow"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-overflow-${_class}{
                    overflow: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBoverflowX"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-overflowX-${_class}{
                    overflow-x: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBoverflowY"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-overflowY-${_class}{
                    overflow-y: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBposition"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-pst-${_class}{
                    position: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBtop"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-t-${_class}{
                    top: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBleft"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-l-${_class}{
                    left: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBright"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-r-${_class}{
                    right: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBbottom"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-b-${_class}{
                    bottom: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBindex"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-index-${_class}{
                    z-index: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBvisibility"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-visibility-${_class}{
                    visibility: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBflex"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-flex-${_class}{
                    flex: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBdirection"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-direction-${_class}{
                    flex-direction: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBwrap"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-wrap-${_class}{
                    flex-wrap: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBshrink"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-shrink-${_class}{
                    flex-shrink: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBbasis"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-basis-${_class}{
                    flex-basis: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBjustify"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-justify-${_class}{
                    justify-content: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBjustItems"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-just-items-${_class}{
                    justify-items: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBjustSelf"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-just-self-${_class}{
                    justify-self: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBalignContent"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-content-${_class}{
                    align-content: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBalignItems"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-items-${_class}{
                    align-items: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBalignSelf"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-self-${_class}{
                    align-self: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBpadding"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-p-${_class}{
                    padding: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBpaddingTop"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-pt-${_class}{
                    padding-top: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBpaddingLeft"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-pl-${_class}{
                    padding-left: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBpaddingRight"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-pr-${_class}{
                    padding-right: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBpaddingBottom"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-pb-${_class}{
                    padding-bottom: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBmargin"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-m-${_class}{
                    margin: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBmarginTop"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-mt-${_class}{
                    margin-top: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBmarginLeft"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-ml-${_class}{
                    margin-left: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBmarginRight"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-mr-${_class}{
                    margin-right: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBmarginBottom"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-mb-${_class}{
                    margin-bottom: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBwidth"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-w-${_class}{
                    width: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBheight"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-h-${_class}{
                    height: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBfontSize"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-font-sz-${_class}{
                    font-size: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBfontStyle"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-font-style-${_class}{
                    font-style: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBfontWeight"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-weight-${_class}{
                    font-weight: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBletterSpacing"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom--spacing-${_class}{
                    letter-spacing: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBlineHeight"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-leading-${_class}{
                    line-height: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBtextAlign"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-text-${_class}{
                    text-align: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBtextColor"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-color-${_class}{
                    color: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBdecoration"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-decoration-${_class}{
                    text-decoration: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBtextTransform"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-text-transform-${_class}{
                    text-transform: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBwordBreak"){
                 style_sheet +=`
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
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-attachment-${_class}{
                    background-attachment: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBbgClip"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-bg-clip-${_class}{
                    background-clip: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBbgColor"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-bg-${_class}{
                    background-color: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBbgPosition"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-bg-post-${_class}{
                    background-position: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBbgRepeat"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-bg-rpt-${_class}{
                    background-repeat: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBbgSize"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-bg-sz-${_class}{
                    background-size: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBborder"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-border-${_class}{
                    border: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBborderTop"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-border-top-${_class}{
                    border-top: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBborderLeft"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-border-l-${_class}{
                    border-left: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBborderRight"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-border-r-${_class}{
                    border-right: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBborderBottom"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-border-b-${_class}{
                    border-bottom: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBborderRadius"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-radius-${_class}{
                    border-radius: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBborderStyle"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-style-${_class}{
                    border-style: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBborderColor"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-border-clr-${_class}{
                    border-color: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBborderType"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-border-type-${_class}{
                    border-collapse: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBrotate"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-rotate-${_class}{
                    transform: rotate(${_class});
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBskew"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-skew-${_class}{
                    transform: skew(${_class});
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBscale"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-scale-${_class}{
                    transform: scale(${_class});
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBtranslate"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-translate-${_class}{
                    transform: translate(${_class});
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBtranslateX"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-translateX-${_class}{
                    transform: translateX(${_class});
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBtranslateY"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-translateY-${_class}{
                    transform: translateY(${_class});
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBtranslateZ"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-translateZ-${_class}{
                    transform: translateZ(${_class});
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBcursor"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-cursor-${_class}{
                    cursor: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBtransition"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-transition-${_class}{
                    transition: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBoutline"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-o-${_class}{
                    outline: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBoTop"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-o-top-${_class}{
                    outline-top: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBoLeft"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-o-left-${_class}{
                    outline-left: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBoRight"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-o-right-${_class}{
                    outline-right: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBoBottom"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-o-bottom-${_class}{
                    outline-bottom: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBoColor"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-o-color-${_class}{
                    outline-color: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBoStyle"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-o-style-${_class}{
                    outline-style: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBopacity"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-opacity-${_class}{
                    opacity: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBblur"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-blur-${_class}{
                    filter: blur(${_class});
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBgrayscale"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-grayscale-${_class}{
                    filter: grayscale(${_class});
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBsaturate"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-saturate-${_class}{
                    filter: saturate(${_class});
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBbrightness"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-brightness-${_class}{
                    filter: brightness(${_class});
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBcontrast"){
                 style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_custom-contrast-${_class}{
                    filter: contrast(${_class});
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCdisplay"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-d-${_class}{
                    display: ${_class};
                }
                }
                `;              
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCalignItems"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-items-${_class}{
                    align-items: ${_class};
                }
                }
                `;              
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCboxSizing"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-box-${_class}{
                    box-sizing: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCfloats"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-float-${_class}{
                    float: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCoverflow"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-overflow-${_class}{
                    overflow: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCoverflowX"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-overflowX-${_class}{
                    overflow-x: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCoverflowY"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-overflowY-${_class}{
                    overflow-y: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCposition"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-pst-${_class}{
                    position: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCtop"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-t-${_class}{
                    top: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCleft"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-l-${_class}{
                    left: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCright"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-r-${_class}{
                    right: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCbottom"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-b-${_class}{
                    bottom: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCindex"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-index-${_class}{
                    z-index: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCvisibility"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-visibility-${_class}{
                    visibility: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCflex"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-flex-${_class}{
                    flex: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCdirection"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-direction-${_class}{
                    flex-direction: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCwrap"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-wrap-${_class}{
                    flex-wrap: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCshrink"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-shrink-${_class}{
                    flex-shrink: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCbasis"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-basis-${_class}{
                    flex-basis: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCjustify"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-justify-${_class}{
                    justify-content: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCjustItems"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-just-items-${_class}{
                    justify-items: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCjustSelf"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-just-self-${_class}{
                    justify-self: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCalignContent"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-content-${_class}{
                    align-content: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCalignItems"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-items-${_class}{
                    align-items: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCalignSelf"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-self-${_class}{
                    align-self: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCpadding"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-p-${_class}{
                    padding: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCpaddingTop"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-pt-${_class}{
                    padding-top: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCpaddingLeft"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-pl-${_class}{
                    padding-left: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCpaddingRight"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-pr-${_class}{
                    padding-right: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCpaddingBottom"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-pb-${_class}{
                    padding-bottom: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCmargin"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-m-${_class}{
                    margin: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCmarginTop"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-mt-${_class}{
                    margin-top: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCmarginLeft"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-ml-${_class}{
                    margin-left: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCmarginRight"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-mr-${_class}{
                    margin-right: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCmarginBottom"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-mb-${_class}{
                    margin-bottom: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCwidth"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-w-${_class}{
                    width: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCheight"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-h-${_class}{
                    height: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCfontSize"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-font-sz-${_class}{
                    font-size: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCfontStyle"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-font-style-${_class}{
                    font-style: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCfontWeight"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-weight-${_class}{
                    font-weight: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCletterSpacing"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom--spacing-${_class}{
                    letter-spacing: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PClineHeight"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-leading-${_class}{
                    line-height: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCtextAlign"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-text-${_class}{
                    text-align: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCtextColor"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-color-${_class}{
                    color: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCdecoration"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-decoration-${_class}{
                    text-decoration: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCtextTransform"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-text-transform-${_class}{
                    text-transform: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCwordBreak"){
                 style_sheet +=`
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
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-attachment-${_class}{
                    background-attachment: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCbgClip"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-bg-clip-${_class}{
                    background-clip: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCbgColor"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-bg-${_class}{
                    background-color: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCbgPosition"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-bg-post-${_class}{
                    background-position: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCbgRepeat"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-bg-rpt-${_class}{
                    background-repeat: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCbgSize"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-bg-sz-${_class}{
                    background-size: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCborder"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-border-${_class}{
                    border: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCborderTop"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-border-top-${_class}{
                    border-top: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCborderLeft"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-border-l-${_class}{
                    border-left: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCborderRight"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-border-r-${_class}{
                    border-right: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCborderBottom"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-border-b-${_class}{
                    border-bottom: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCborderRadius"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-radius-${_class}{
                    border-radius: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCborderStyle"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-style-${_class}{
                    border-style: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCborderColor"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-border-clr-${_class}{
                    border-color: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCborderType"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-border-type-${_class}{
                    border-collapse: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCrotate"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-rotate-${_class}{
                    transform: rotate(${_class});
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCskew"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-skew-${_class}{
                    transform: skew(${_class});
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCscale"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-scale-${_class}{
                    transform: scale(${_class});
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCtranslate"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-translate-${_class}{
                    transform: translate(${_class});
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCtranslateX"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-translateX-${_class}{
                    transform: translateX(${_class});
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCtranslateY"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-translateY-${_class}{
                    transform: translateY(${_class});
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCtranslateZ"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-translateZ-${_class}{
                    transform: translateZ(${_class});
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCcursor"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-cursor-${_class}{
                    cursor: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCtransition"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-transition-${_class}{
                    transition: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCoutline"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-o-${_class}{
                    outline: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCoTop"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-o-top-${_class}{
                    outline-top: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCoLeft"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-o-left-${_class}{
                    outline-left: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCoRight"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-o-right-${_class}{
                    outline-right: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCoBottom"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-o-bottom-${_class}{
                    outline-bottom: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCoColor"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-o-color-${_class}{
                    outline-color: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCoStyle"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-o-style-${_class}{
                    outline-style: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCopacity"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-opacity-${_class}{
                    opacity: ${_class};
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCblur"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-blur-${_class}{
                    filter: blur(${_class});
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCgrayscale"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-grayscale-${_class}{
                    filter: grayscale(${_class});
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCsaturate"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-saturate-${_class}{
                    filter: saturate(${_class});
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCbrightness"){
                 style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_custom-brightness-${_class}{
                    filter: brightness(${_class});
                }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCcontrast"){
                 style_sheet +=`
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

    for(let x of cssFunction){

        if(new RegExp((/\(/igm,"\\\(").replace(/\)/igm,"\\\)")).test(style_sheet)){
 
            style_sheet = style_sheet.replaceAll(x.nativeCode,`${Object.keys(x.value).join("")}${x.property}`)

            document.head.querySelector("style").textContent = style_sheet;

        }

    }

}   


// ketika halaman web sudah siap
// maka lakukan inisalisasi
// dan masukan valclass ke dalam nya
window.onload= ()=>{

    let style_ = document.head.querySelector("style");

    if(style_ instanceof HTMLStyleElement){

        valclass_initalization();
        style_.textContent += style_.textContent.replace(/\@style_sheet/igm,style_sheet);

    }else{
        let style = document.createElement("style");

        document.head.appendChild(style);
        style.textContent = style_sheet;
        valclass_initalization();

    }

}

// ===================
// CREATE BY DABERDEV (Contributor)
// github.com/daberpro
// ===================
