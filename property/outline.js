let propertiesOutlines = [
    'v-o-style-dotted',
    'v-o-style-dashed',
    'v-o-style-double',
    'v-o-style-groove',
    'v-o-style-solid',
    'v-o-style-ridge',
    'v-o-style-hidden',
    'v-o-1',
    'v-o-2',
    'v-o-3',
    'v-o-4',
    'v-o-top-1',
    'v-o-top-2',
    'v-o-top-3',
    'v-o-top-4',
    'v-o-left-1',
    'v-o-left-2',
    'v-o-left-3',
    'v-o-left-4',
    'v-o-right-1',
    'v-o-right-2',
    'v-o-right-3',
    'v-o-right-4',
    'v-o-bottom-1',
    'v-o-bottom-2',
    'v-o-bottom-3',
    'v-o-bottom-4',
    'v-o-color-dark',
    'v-o-color-light',
    'v-o-color-danger',
    'v-o-color-info',
    'v-o-color-primary',
    'v-o-color-smooth',
    'v-o-color-transparent',
    'v-o-color-secondary',
    'v-o-color-warning',
    'v-o-color-green'
]
let valuesOutlines = [
    'outline-style: dotted;',
    'outline-style: dashed;',
    'outline-style: double',
    'outline-style: groove;',
    'outline-style: solid',
    'outline-style: ridge;',
    'outline-style: hidden;',
    'outline: 1px;',
    'outline: 2px;',
    'outline: 3px;',
    'outline: 4px;',
    'outline-top: 1px;',
    'outline-top: 2px;',
    'outline-top: 3px;',
    'outline-top: 4px;',
    'outline-left: 1px;',
    'outline-left: 2px;',
    'outline-left: 3px;',
    'outline-left: 4px;',
    'outline-right: 1px;',
    'outline-right: 2px;',
    'outline-right: 3px;',
    'outline-right: 4px;',
    'outline-bottom: 1px;',
    'outline-bottom: 2px;',
    'outline-bottom: 3px;',
    'outline-bottom: 4px;',
    'outline-color: rgb(70, 70, 70);',
    'outline-color: rgb(238, 238, 238);',
    'outline-color: rgb(255, 76, 44);',
    'outline-color: rgb(2, 168, 245);',
    'outline-color: rgb(42, 131, 248);',
    'outline-color: rgb(255, 242, 242);',
    'outline-color: transparent;',
    'outline-color: rgb(141, 141, 141);',
    'outline-color: rgb(253, 207, 0);',
    'outline-color: rgb(11, 245, 101);'
]
for (var i = 0; i <= propertiesOutlines.length; i++) {
    if (document.querySelector(`.${propertiesOutlines[i]}`) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {
        let styles = ` 
        .${propertiesOutlines[i]} { 
            ${valuesOutlines[i]}
        }
        @media screen and (min-width: 900px) and (max-width: 1920px) {
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesOutlines2 = [
    'mb_v-o-style-dotted',
    'mb_v-o-style-dashed',
    'mb_v-o-style-double',
    'mb_v-o-style-groove',
    'mb_v-o-style-solid',
    'mb_v-o-style-ridge',
    'mb_v-o-style-hidden',
    'mb_v-o-1',
    'mb_v-o-2',
    'mb_v-o-3',
    'mb_v-o-4',
    'mb_v-o-top-1',
    'mb_v-o-top-2',
    'mb_v-o-top-3',
    'mb_v-o-top-4',
    'mb_v-o-left-1',
    'mb_v-o-left-2',
    'mb_v-o-left-3',
    'mb_v-o-left-4',
    'mb_v-o-right-1',
    'mb_v-o-right-2',
    'mb_v-o-right-3',
    'mb_v-o-right-4',
    'mb_v-o-bottom-1',
    'mb_v-o-bottom-2',
    'mb_v-o-bottom-3',
    'mb_v-o-bottom-4',
    'mb_v-o-color-dark',
    'mb_v-o-color-light',
    'mb_v-o-color-danger',
    'mb_v-o-color-info',
    'mb_v-o-color-primary',
    'mb_v-o-color-smooth',
    'mb_v-o-color-transparent',
    'mb_v-o-color-secondary',
    'mb_v-o-color-warning',
    'mb_v-o-color-green'
]
let valuesOutlines2 = [
    'outline-style: dotted;',
    'outline-style: dashed;',
    'outline-style: double',
    'outline-style: groove;',
    'outline-style: solid',
    'outline-style: ridge;',
    'outline-style: hidden;',
    'outline: 1px;',
    'outline: 2px;',
    'outline: 3px;',
    'outline: 4px;',
    'outline-top: 1px;',
    'outline-top: 2px;',
    'outline-top: 3px;',
    'outline-top: 4px;',
    'outline-left: 1px;',
    'outline-left: 2px;',
    'outline-left: 3px;',
    'outline-left: 4px;',
    'outline-right: 1px;',
    'outline-right: 2px;',
    'outline-right: 3px;',
    'outline-right: 4px;',
    'outline-bottom: 1px;',
    'outline-bottom: 2px;',
    'outline-bottom: 3px;',
    'outline-bottom: 4px;',
    'outline-color: rgb(70, 70, 70);',
    'outline-color: rgb(238, 238, 238);',
    'outline-color: rgb(255, 76, 44);',
    'outline-color: rgb(2, 168, 245);',
    'outline-color: rgb(42, 131, 248);',
    'outline-color: rgb(255, 242, 242);',
    'outline-color: transparent;',
    'outline-color: rgb(141, 141, 141);',
    'outline-color: rgb(253, 207, 0);',
    'outline-color: rgb(11, 245, 101);'
]
for (var i = 0; i <= propertiesOutlines2.length; i++) {
    if (document.querySelector(`.${propertiesOutlines2[i]}`) && !document.querySelector('style').innerText.includes(propertiesOutlines2[i])) {
        let styles = ` 
        .${propertiesOutlines2[i]} { 
            ${valuesOutlines2[i]}
        }
        @media screen and (min-width: 320px) and (max-width: 600px){
            .${propertiesOutlines2[i]} { 
                ${valuesOutlines2[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesOutlines3 = [
    'tb_v-o-style-dotted',
    'tb_v-o-style-dashed',
    'tb_v-o-style-double',
    'tb_v-o-style-groove',
    'tb_v-o-style-solid',
    'tb_v-o-style-ridge',
    'tb_v-o-style-hidden',
    'tb_v-o-1',
    'tb_v-o-2',
    'tb_v-o-3',
    'tb_v-o-4',
    'tb_v-o-top-1',
    'tb_v-o-top-2',
    'tb_v-o-top-3',
    'tb_v-o-top-4',
    'tb_v-o-left-1',
    'tb_v-o-left-2',
    'tb_v-o-left-3',
    'tb_v-o-left-4',
    'tb_v-o-right-1',
    'tb_v-o-right-2',
    'tb_v-o-right-3',
    'tb_v-o-right-4',
    'tb_v-o-bottom-1',
    'tb_v-o-bottom-2',
    'tb_v-o-bottom-3',
    'tb_v-o-bottom-4',
    'tb_v-o-color-dark',
    'tb_v-o-color-light',
    'tb_v-o-color-danger',
    'tb_v-o-color-info',
    'tb_v-o-color-primary',
    'tb_v-o-color-smooth',
    'tb_v-o-color-transparent',
    'tb_v-o-color-secondary',
    'tb_v-o-color-warning',
    'tb_v-o-color-green'
]
let valuesOutlines3 = [
    'outline-style: dotted;',
    'outline-style: dashed;',
    'outline-style: double',
    'outline-style: groove;',
    'outline-style: solid',
    'outline-style: ridge;',
    'outline-style: hidden;',
    'outline: 1px;',
    'outline: 2px;',
    'outline: 3px;',
    'outline: 4px;',
    'outline-top: 1px;',
    'outline-top: 2px;',
    'outline-top: 3px;',
    'outline-top: 4px;',
    'outline-left: 1px;',
    'outline-left: 2px;',
    'outline-left: 3px;',
    'outline-left: 4px;',
    'outline-right: 1px;',
    'outline-right: 2px;',
    'outline-right: 3px;',
    'outline-right: 4px;',
    'outline-bottom: 1px;',
    'outline-bottom: 2px;',
    'outline-bottom: 3px;',
    'outline-bottom: 4px;',
    'outline-color: rgb(70, 70, 70);',
    'outline-color: rgb(238, 238, 238);',
    'outline-color: rgb(255, 76, 44);',
    'outline-color: rgb(2, 168, 245);',
    'outline-color: rgb(42, 131, 248);',
    'outline-color: rgb(255, 242, 242);',
    'outline-color: transparent;',
    'outline-color: rgb(141, 141, 141);',
    'outline-color: rgb(253, 207, 0);',
    'outline-color: rgb(11, 245, 101);'
]
for (var i = 0; i <= propertiesOutlines3.length; i++) {
    if (document.querySelector(`.${propertiesOutlines3[i]}`) && !document.querySelector('style').innerText.includes(propertiesOutlines3[i])) {
        let styles = ` 
        .${propertiesOutlines3[i]} { 
            ${valuesOutlines3[i]}
        }
        @media screen and (min-width: 600px) and (max-width: 900px){
            .${propertiesOutlines3[i]} { 
                ${valuesOutlines3[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesOutlines4 = [
    'pc_v-o-style-dotted',
    'pc_v-o-style-dashed',
    'pc_v-o-style-double',
    'pc_v-o-style-groove',
    'pc_v-o-style-solid',
    'pc_v-o-style-ridge',
    'pc_v-o-style-hidden',
    'pc_v-o-1',
    'pc_v-o-2',
    'pc_v-o-3',
    'pc_v-o-4',
    'pc_v-o-top-1',
    'pc_v-o-top-2',
    'pc_v-o-top-3',
    'pc_v-o-top-4',
    'pc_v-o-left-1',
    'pc_v-o-left-2',
    'pc_v-o-left-3',
    'pc_v-o-left-4',
    'pc_v-o-right-1',
    'pc_v-o-right-2',
    'pc_v-o-right-3',
    'pc_v-o-right-4',
    'pc_v-o-bottom-1',
    'pc_v-o-bottom-2',
    'pc_v-o-bottom-3',
    'pc_v-o-bottom-4',
    'pc_v-o-color-dark',
    'pc_v-o-color-light',
    'pc_v-o-color-danger',
    'pc_v-o-color-info',
    'pc_v-o-color-primary',
    'pc_v-o-color-smooth',
    'pc_v-o-color-transparent',
    'pc_v-o-color-secondary',
    'pc_v-o-color-warning',
    'pc_v-o-color-green'
]
let valuesOutlines4 = [
    'outline-style: dotted;',
    'outline-style: dashed;',
    'outline-style: double',
    'outline-style: groove;',
    'outline-style: solid',
    'outline-style: ridge;',
    'outline-style: hidden;',
    'outline: 1px;',
    'outline: 2px;',
    'outline: 3px;',
    'outline: 4px;',
    'outline-top: 1px;',
    'outline-top: 2px;',
    'outline-top: 3px;',
    'outline-top: 4px;',
    'outline-left: 1px;',
    'outline-left: 2px;',
    'outline-left: 3px;',
    'outline-left: 4px;',
    'outline-right: 1px;',
    'outline-right: 2px;',
    'outline-right: 3px;',
    'outline-right: 4px;',
    'outline-bottom: 1px;',
    'outline-bottom: 2px;',
    'outline-bottom: 3px;',
    'outline-bottom: 4px;',
    'outline-color: rgb(70, 70, 70);',
    'outline-color: rgb(238, 238, 238);',
    'outline-color: rgb(255, 76, 44);',
    'outline-color: rgb(2, 168, 245);',
    'outline-color: rgb(42, 131, 248);',
    'outline-color: rgb(255, 242, 242);',
    'outline-color: transparent;',
    'outline-color: rgb(141, 141, 141);',
    'outline-color: rgb(253, 207, 0);',
    'outline-color: rgb(11, 245, 101);'
]
for (var i = 0; i <= propertiesOutlines4.length; i++) {
    if (document.querySelector(`.${propertiesOutlines4[i]}`) && !document.querySelector('style').innerText.includes(propertiesOutlines4[i])) {
        let styles = ` 
        .${propertiesOutlines4[i]} { 
            ${valuesOutlines4[i]}
        }
        @media screen and (min-width: 1920px){
            .${propertiesOutlines4[i]} { 
                ${valuesOutlines4[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}