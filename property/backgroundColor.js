let propertiesBgColors = [
    'v-bg-dark',
    'v-bg-light',
    'v-bg-danger',
    'v-bg-info',
    'v-bg-primary',
    'v-bg-smooth',
    'v-bg-transparent',
    'v-bg-secondary',
    'v-bg-warning',
    'v-bg-green',
    'v-bg-white'
]
let valuesBgColors = [
    'background-color: rgb(70, 70, 70);',
    'background-color: rgb(238, 238, 238);',
    'background-color: rgb(255, 76, 44);',
    'background-color: rgb(2, 168, 245);',
    'background-color: rgb(42, 131, 248);',
    'background-color: rgb(255, 242, 242);',
    'background-color: transparent;',
    'background-color: rgb(141, 141, 141);',
    'background-color: rgb(253, 207, 0);',
    'background-color: #0de982;',
    'background-color: #fff;'
]
for (var i = 0; i <= propertiesBgColors.length; i++) {
    if (document.querySelector(`.${propertiesBgColors[i]}`) && !document.querySelector('style').innerText.includes(propertiesBgColors[i])) {
        let styles = ` 
            .${propertiesBgColors[i]} { 
                ${valuesBgColors[i]}
            }
            @media screen and (min-width: 90px) and (max-width: 1920px){
                .${propertiesBgColors[i]} { 
                    ${valuesBgColors[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesBgColors2 = [
    'mb_v-bg-dark',
    'mb_v-bg-light',
    'mb_v-bg-danger',
    'mb_v-bg-info',
    'mb_v-bg-primary',
    'mb_v-bg-smooth',
    'mb_v-bg-transparent',
    'mb_v-bg-secondary',
    'mb_v-bg-warning',
    'mb_v-bg-green',
    'mb_v-bg-white'
]
let valuesBgColors2 = [
    'background-color: rgb(70, 70, 70);',
    'background-color: rgb(238, 238, 238);',
    'background-color: rgb(255, 76, 44);',
    'background-color: rgb(2, 168, 245);',
    'background-color: rgb(42, 131, 248);',
    'background-color: rgb(255, 242, 242);',
    'background-color: transparent;',
    'background-color: rgb(141, 141, 141);',
    'background-color: rgb(253, 207, 0);',
    'background-color: #0de982;',
    'background-color: #fff;'
]
for (var i = 0; i <= propertiesBgColors2.length; i++) {
    if (document.querySelector(`.${propertiesBgColors2[i]}`) && !document.querySelector('style').innerText.includes(propertiesBgColors2[i])) {
        let styles = ` 
            .${propertiesBgColors2[i]} { 
                ${valuesBgColors2[i]}
            }
            @media screen and (min-width: 320px) and (max-width: 600px){
                    .${propertiesBgColors2[i]} { 
                    ${valuesBgColors2[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesBgColors3 = [
    'tb_v-bg-dark',
    'tb_v-bg-light',
    'tb_v-bg-danger',
    'tb_v-bg-info',
    'tb_v-bg-primary',
    'tb_v-bg-smooth',
    'tb_v-bg-transparent',
    'tb_v-bg-secondary',
    'tb_v-bg-warning',
    'tb_v-bg-green',
    'tb_v-bg-white'
]
let valuesBgColors3 = [
    'background-color: rgb(70, 70, 70);',
    'background-color: rgb(238, 238, 238);',
    'background-color: rgb(255, 76, 44);',
    'background-color: rgb(2, 168, 245);',
    'background-color: rgb(42, 131, 248);',
    'background-color: rgb(255, 242, 242);',
    'background-color: transparent;',
    'background-color: rgb(141, 141, 141);',
    'background-color: rgb(253, 207, 0);',
    'background-color: #0de982;',
    'background-color: #fff;'
]
for (var i = 0; i <= propertiesBgColors3.length; i++) {
    if (document.querySelector(`.${propertiesBgColors3[i]}`) && !document.querySelector('style').innerText.includes(propertiesBgColors3[i])) {
        let styles = ` 
            .${propertiesBgColors3[i]} { 
                ${valuesBgColors3[i]}
            }
            @media screen and (min-width: 600px) and (max-width: 900px){
                    .${propertiesBgColors3[i]} { 
                    ${valuesBgColors3[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesBgColors4 = [
    'pc_v-bg-dark',
    'pc_v-bg-light',
    'pc_v-bg-danger',
    'pc_v-bg-info',
    'pc_v-bg-primary',
    'pc_v-bg-smooth',
    'pc_v-bg-transparent',
    'pc_v-bg-secondary',
    'pc_v-bg-warning',
    'pc_v-bg-green',
    'pc_v-bg-white'
]
let valuesBgColors4 = [
    'background-color: rgb(70, 70, 70);',
    'background-color: rgb(238, 238, 238);',
    'background-color: rgb(255, 76, 44);',
    'background-color: rgb(2, 168, 245);',
    'background-color: rgb(42, 131, 248);',
    'background-color: rgb(255, 242, 242);',
    'background-color: transparent;',
    'background-color: rgb(141, 141, 141);',
    'background-color: rgb(253, 207, 0);',
    'background-color: #0de982;',
    'background-color: #fff;'
]
for (var i = 0; i <= propertiesBgColors4.length; i++) {
    if (document.querySelector(`.${propertiesBgColors4[i]}`) && !document.querySelector('style').innerText.includes(propertiesBgColors4[i])) {
        let styles = ` 
            .${propertiesBgColors4[i]} { 
                ${valuesBgColors4[i]}
            }
            @media screen and (min-width: 1920px){
                    .${propertiesBgColors4[i]} { 
                    ${valuesBgColors4[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}