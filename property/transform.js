let propertiesTransform = [
    'v-rotate-0',
    'v-rotate-30',
    'v-rotate-45',
    'v-rotate-90',
    'v-rotate-120',
    'v-rotate-180',
    'v-rotate-360',
    'v-scale--1',
    'v-scale--2',
    'v-scale--3',
    'v-scale--4',
    'v-scale--5',
    'v-scale--6',
    'v-scale--7',
    'v-scale--8',
    'v-scale--9',
    'v-scale-1',
    'v-scale-1.1',
    'v-scale-1.2',
    'v-scale-1.3',
    'v-scale-2',
    'v-scale-2.1',
    'v-scale-2.2',
    'v-scale-2.3',
    'v-scale-3',
    'v-scale-3.1',
    'v-scale-3.2',
    'v-scale-3.3',
    'v-scale-4',
    'v-scale-4.1',
    'v-scale-4.2',
    'v-scale-4.3',
    'v-skew-1',
    'v-skew-2',
    'v-skew-3',
    'v-skew-4',
    '-v-skew-1',
    '-v-skew-2',
    '-v-skew-3',
    '-v-skew-4',
    'v-translate-1',
    'v-translate-2',
    'v-translate-3',
    'v-translate-4',
    'v-translate-middle',
    '-v-translate-1',
    '-v-translate-2',
    '-v-translate-3',
    '-v-translate-4',
    '-v-translate-middle',
    'v-translateX-1',
    'v-translateX-2',
    'v-translateX-3',
    'v-translateX-4',
    'v-translateX-middle',
    '-v-translateX-1',
    '-v-translateX-2',
    '-v-translateX-3',
    '-v-translateX-4',
    '-v-translateX-middle',
    'v-translateY-1',
    'v-translateY-2',
    'v-translateY-3',
    'v-translateY-4',
    'v-translateY-middle',
    '-v-translateY-1',
    '-v-translateY-2',
    '-v-translateY-3',
    '-v-translateY-4',
    '-v-translateY-middle',
    'v-translateZ-1',
    'v-translateZ-2',
    'v-translateZ-3',
    'v-translateZ-4',
    'v-translateZ-middle',
    '-v-translateZ-1',
    '-v-translateZ-2',
    '-v-translateZ-3',
    '-v-translateZ-4',
    '-v-translateZ-middle'
]
let valuesTransform = [
  'transform: rotate(0deg)',
  'transform: rotate(30deg)',
  'transform: rotate(45deg)',
  'transform: rotate(90deg)',
  'transform: rotate(120deg)',
  'transform: rotate(180deg)',
  'transform: rotate(360deg)',
  'transform: scale(0.1)',
  'transform: scale(0.2)',
  'transform: scale(0.3)',
  'transform: scale(0.4)',
  'transform: scale(0.5)',
  'transform: scale(0.6)',
  'transform: scale(0.7)',
  'transform: scale(0.8)',
  'transform: scale(0.9)',
  'transform: scale(1)',
  'transform: scale(1.1)',
  'transform: scale(1.2)',
  'transform: scale(1.3)',
  'transform: scale(2)',
  'transform: scale(2.1)',
  'transform: scale(2.2)',
  'transform: scale(2.3)',
  'transform: scale(3)',
  'transform: scale(3.1)',
  'transform: scale(3.2)',
  'transform: scale(3.3)',
  'transform: scale(4)',
  'transform: scale(4.1)',
  'transform: scale(4.2)',
  'transform: scale(4.3)',
  'transform: skew(5deg)',
  'transform: skew(10deg)',
  'transform: skew(15deg)',
  'transform: skew(20deg)',
  'transform: skew(-5deg)',
  'transform: skew(-10deg)',
  'transform: skew(-15deg)',
  'transform: skew(-20deg)',
  'transform: translate(10%)',
  'transform: translate(20%)',
  'transform: translate(30%)',
  'transform: translate(40%)',
  'transform: translate(50%)',
  'transform: translate(-10%)',
  'transform: translate(-20%)',
  'transform: translate(-30%)',
  'transform: translate(-40%)',
  'transform: translate(-50%)',
  'transform: translateX(10%)',
  'transform: translateX(20%)',
  'transform: translateX(30%)',
  'transform: translateX(40%)',
  'transform: translateX(50%)',
  'transform: translateX(-10%)',
  'transform: translateX(-20%)',
  'transform: translateX(-30%)',
  'transform: translateX(-40%)',
  'transform: translateX(-50%)',
  'transform: translateY(10%)',
  'transform: translateY(20%)',
  'transform: translateY(30%)',
  'transform: translateY(40%)',
  'transform: translateY(50%)',
  'transform: translateY(-10%)',
  'transform: translateY(-20%)',
  'transform: translateY(-30%)',
  'transform: translateY(-40%)',
  'transform: translateY(-50%)',
  'transform: translateZ(10%)',
  'transform: translateZ(20%)',
  'transform: translateZ(30%)',
  'transform: translateZ(40%)',
  'transform: translateZ(50%)',
  'transform: translateZ(-10%)',
  'transform: translateZ(-20%)',
  'transform: translateZ(-30%)',
  'transform: translateZ(-40%)',
  'transform: translateZ(-50%)'
]
for (var i = 0; i <= propertiesTransform.length; i++) {
    if (document.querySelector(`.${propertiesTransform[i]}`) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {
        let styles = ` 
        .${propertiesTransform[i]} { 
            ${valuesTransform[i]}
        }
        @media screen and (min-width: 900px) and (max-width: 1920px) {
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesTransform2 = [
    'mb_v-rotate-0',
    'mb_v-rotate-30',
    'mb_v-rotate-45',
    'mb_v-rotate-90',
    'mb_v-rotate-120',
    'mb_v-rotate-180',
    'mb_v-rotate-360',
    'mb_v-scale--1',
    'mb_v-scale--2',
    'mb_v-scale--3',
    'mb_v-scale--4',
    'mb_v-scale--5',
    'mb_v-scale--6',
    'mb_v-scale--7',
    'mb_v-scale--8',
    'mb_v-scale--9',
    'mb_v-scale-1',
    'mb_v-scale-1.1',
    'mb_v-scale-1.2',
    'mb_v-scale-1.3',
    'mb_v-scale-2',
    'mb_v-scale-2.1',
    'mb_v-scale-2.2',
    'mb_v-scale-2.3',
    'mb_v-scale-3',
    'mb_v-scale-3.1',
    'mb_v-scale-3.2',
    'mb_v-scale-3.3',
    'mb_v-scale-4',
    'mb_v-scale-4.1',
    'mb_v-scale-4.2',
    'mb_v-scale-4.3',
    'mb_v-skew-1',
    'mb_v-skew-2',
    'mb_v-skew-3',
    'mb_v-skew-4',
    '-mb_v-skew-1',
    '-mb_v-skew-2',
    '-mb_v-skew-3',
    '-mb_v-skew-4',
    'mb_v-translate-1',
    'mb_v-translate-2',
    'mb_v-translate-3',
    'mb_v-translate-4',
    'mb_v-translate-middle',
    '-mb_v-translate-1',
    '-mb_v-translate-2',
    '-mb_v-translate-3',
    '-mb_v-translate-4',
    '-mb_v-translate-middle',
    'mb_v-translateX-1',
    'mb_v-translateX-2',
    'mb_v-translateX-3',
    'mb_v-translateX-4',
    'mb_v-translateX-middle',
    '-mb_v-translateX-1',
    '-mb_v-translateX-2',
    '-mb_v-translateX-3',
    '-mb_v-translateX-4',
    '-mb_v-translateX-middle',
    'mb_v-translateY-1',
    'mb_v-translateY-2',
    'mb_v-translateY-3',
    'mb_v-translateY-4',
    'mb_v-translateY-middle',
    '-mb_v-translateY-1',
    '-mb_v-translateY-2',
    '-mb_v-translateY-3',
    '-mb_v-translateY-4',
    '-mb_v-translateY-middle',
    'mb_v-translateZ-1',
    'mb_v-translateZ-2',
    'mb_v-translateZ-3',
    'mb_v-translateZ-4',
    'mb_v-translateZ-middle',
    '-mb_v-translateZ-1',
    '-mb_v-translateZ-2',
    '-mb_v-translateZ-3',
    '-mb_v-translateZ-4',
    '-mb_v-translateZ-middle'
]
let valuesTransform2 = [
  'transform: rotate(0deg)',
  'transform: rotate(30deg)',
  'transform: rotate(45deg)',
  'transform: rotate(90deg)',
  'transform: rotate(120deg)',
  'transform: rotate(180deg)',
  'transform: rotate(360deg)',
  'transform: scale(0.1)',
  'transform: scale(0.2)',
  'transform: scale(0.3)',
  'transform: scale(0.4)',
  'transform: scale(0.5)',
  'transform: scale(0.6)',
  'transform: scale(0.7)',
  'transform: scale(0.8)',
  'transform: scale(0.9)',
  'transform: scale(1)',
  'transform: scale(1.1)',
  'transform: scale(1.2)',
  'transform: scale(1.3)',
  'transform: scale(2)',
  'transform: scale(2.1)',
  'transform: scale(2.2)',
  'transform: scale(2.3)',
  'transform: scale(3)',
  'transform: scale(3.1)',
  'transform: scale(3.2)',
  'transform: scale(3.3)',
  'transform: scale(4)',
  'transform: scale(4.1)',
  'transform: scale(4.2)',
  'transform: scale(4.3)',
  'transform: skew(5deg)',
  'transform: skew(10deg)',
  'transform: skew(15deg)',
  'transform: skew(20deg)',
  'transform: skew(-5deg)',
  'transform: skew(-10deg)',
  'transform: skew(-15deg)',
  'transform: skew(-20deg)',
  'transform: translate(10%)',
  'transform: translate(20%)',
  'transform: translate(30%)',
  'transform: translate(40%)',
  'transform: translate(50%)',
  'transform: translate(-10%)',
  'transform: translate(-20%)',
  'transform: translate(-30%)',
  'transform: translate(-40%)',
  'transform: translate(-50%)',
  'transform: translateX(10%)',
  'transform: translateX(20%)',
  'transform: translateX(30%)',
  'transform: translateX(40%)',
  'transform: translateX(50%)',
  'transform: translateX(-10%)',
  'transform: translateX(-20%)',
  'transform: translateX(-30%)',
  'transform: translateX(-40%)',
  'transform: translateX(-50%)',
  'transform: translateY(10%)',
  'transform: translateY(20%)',
  'transform: translateY(30%)',
  'transform: translateY(40%)',
  'transform: translateY(50%)',
  'transform: translateY(-10%)',
  'transform: translateY(-20%)',
  'transform: translateY(-30%)',
  'transform: translateY(-40%)',
  'transform: translateY(-50%)',
  'transform: translateZ(10%)',
  'transform: translateZ(20%)',
  'transform: translateZ(30%)',
  'transform: translateZ(40%)',
  'transform: translateZ(50%)',
  'transform: translateZ(-10%)',
  'transform: translateZ(-20%)',
  'transform: translateZ(-30%)',
  'transform: translateZ(-40%)',
  'transform: translateZ(-50%)'
]
for (var i = 0; i <= propertiesTransform2.length; i++) {
    if (document.querySelector(`.${propertiesTransform2[i]}`) && !document.querySelector('style').innerText.includes(propertiesTransform2[i])) {
        let styles = ` 
        .${propertiesTransform2[i]} { 
            ${valuesTransform2[i]}
        }
        @media screen and (min-width: 320px) and (max-width: 600px){
            .${propertiesTransform2[i]} { 
                ${valuesTransform2[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesTransform3 = [
    'tb_v-rotate-0',
    'tb_v-rotate-30',
    'tb_v-rotate-45',
    'tb_v-rotate-90',
    'tb_v-rotate-120',
    'tb_v-rotate-180',
    'tb_v-rotate-360',
    'tb_v-scale--1',
    'tb_v-scale--2',
    'tb_v-scale--3',
    'tb_v-scale--4',
    'tb_v-scale--5',
    'tb_v-scale--6',
    'tb_v-scale--7',
    'tb_v-scale--8',
    'tb_v-scale--9',
    'tb_v-scale-1',
    'tb_v-scale-1.1',
    'tb_v-scale-1.2',
    'tb_v-scale-1.3',
    'tb_v-scale-2',
    'tb_v-scale-2.1',
    'tb_v-scale-2.2',
    'tb_v-scale-2.3',
    'tb_v-scale-3',
    'tb_v-scale-3.1',
    'tb_v-scale-3.2',
    'tb_v-scale-3.3',
    'tb_v-scale-4',
    'tb_v-scale-4.1',
    'tb_v-scale-4.2',
    'tb_v-scale-4.3',
    'tb_v-skew-1',
    'tb_v-skew-2',
    'tb_v-skew-3',
    'tb_v-skew-4',
    '-tb_v-skew-1',
    '-tb_v-skew-2',
    '-tb_v-skew-3',
    '-tb_v-skew-4',
    'tb_v-translate-1',
    'tb_v-translate-2',
    'tb_v-translate-3',
    'tb_v-translate-4',
    'tb_v-translate-middle',
    '-tb_v-translate-1',
    '-tb_v-translate-2',
    '-tb_v-translate-3',
    '-tb_v-translate-4',
    '-tb_v-translate-middle',
    'tb_v-translateX-1',
    'tb_v-translateX-2',
    'tb_v-translateX-3',
    'tb_v-translateX-4',
    'tb_v-translateX-middle',
    '-tb_v-translateX-1',
    '-tb_v-translateX-2',
    '-tb_v-translateX-3',
    '-tb_v-translateX-4',
    '-tb_v-translateX-middle',
    'tb_v-translateY-1',
    'tb_v-translateY-2',
    'tb_v-translateY-3',
    'tb_v-translateY-4',
    'tb_v-translateY-middle',
    '-tb_v-translateY-1',
    '-tb_v-translateY-2',
    '-tb_v-translateY-3',
    '-tb_v-translateY-4',
    '-tb_v-translateY-middle',
    'tb_v-translateZ-1',
    'tb_v-translateZ-2',
    'tb_v-translateZ-3',
    'tb_v-translateZ-4',
    'tb_v-translateZ-middle',
    '-tb_v-translateZ-1',
    '-tb_v-translateZ-2',
    '-tb_v-translateZ-3',
    '-tb_v-translateZ-4',
    '-tb_v-translateZ-middle'
]
let valuesTransform3 = [
  'transform: rotate(0deg)',
  'transform: rotate(30deg)',
  'transform: rotate(45deg)',
  'transform: rotate(90deg)',
  'transform: rotate(120deg)',
  'transform: rotate(180deg)',
  'transform: rotate(360deg)',
  'transform: scale(0.1)',
  'transform: scale(0.2)',
  'transform: scale(0.3)',
  'transform: scale(0.4)',
  'transform: scale(0.5)',
  'transform: scale(0.6)',
  'transform: scale(0.7)',
  'transform: scale(0.8)',
  'transform: scale(0.9)',
  'transform: scale(1)',
  'transform: scale(1.1)',
  'transform: scale(1.2)',
  'transform: scale(1.3)',
  'transform: scale(2)',
  'transform: scale(2.1)',
  'transform: scale(2.2)',
  'transform: scale(2.3)',
  'transform: scale(3)',
  'transform: scale(3.1)',
  'transform: scale(3.2)',
  'transform: scale(3.3)',
  'transform: scale(4)',
  'transform: scale(4.1)',
  'transform: scale(4.2)',
  'transform: scale(4.3)',
  'transform: skew(5deg)',
  'transform: skew(10deg)',
  'transform: skew(15deg)',
  'transform: skew(20deg)',
  'transform: skew(-5deg)',
  'transform: skew(-10deg)',
  'transform: skew(-15deg)',
  'transform: skew(-20deg)',
  'transform: translate(10%)',
  'transform: translate(20%)',
  'transform: translate(30%)',
  'transform: translate(40%)',
  'transform: translate(50%)',
  'transform: translate(-10%)',
  'transform: translate(-20%)',
  'transform: translate(-30%)',
  'transform: translate(-40%)',
  'transform: translate(-50%)',
  'transform: translateX(10%)',
  'transform: translateX(20%)',
  'transform: translateX(30%)',
  'transform: translateX(40%)',
  'transform: translateX(50%)',
  'transform: translateX(-10%)',
  'transform: translateX(-20%)',
  'transform: translateX(-30%)',
  'transform: translateX(-40%)',
  'transform: translateX(-50%)',
  'transform: translateY(10%)',
  'transform: translateY(20%)',
  'transform: translateY(30%)',
  'transform: translateY(40%)',
  'transform: translateY(50%)',
  'transform: translateY(-10%)',
  'transform: translateY(-20%)',
  'transform: translateY(-30%)',
  'transform: translateY(-40%)',
  'transform: translateY(-50%)',
  'transform: translateZ(10%)',
  'transform: translateZ(20%)',
  'transform: translateZ(30%)',
  'transform: translateZ(40%)',
  'transform: translateZ(50%)',
  'transform: translateZ(-10%)',
  'transform: translateZ(-20%)',
  'transform: translateZ(-30%)',
  'transform: translateZ(-40%)',
  'transform: translateZ(-50%)'
]
for (var i = 0; i <= propertiesTransform3.length; i++) {
    if (document.querySelector(`.${propertiesTransform3[i]}`) && !document.querySelector('style').innerText.includes(propertiesTransform3[i])) {
        let styles = ` 
        .${propertiesTransform3[i]} { 
            ${valuesTransform3[i]}
        }
        @media screen and (min-width: 600px) and (max-width: 900px){
            .${propertiesTransform3[i]} { 
                ${valuesTransform3[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesTransform4 = [
    'pc_v-rotate-0',
    'pc_v-rotate-30',
    'pc_v-rotate-45',
    'pc_v-rotate-90',
    'pc_v-rotate-120',
    'pc_v-rotate-180',
    'pc_v-rotate-360',
    'pc_v-scale--1',
    'pc_v-scale--2',
    'pc_v-scale--3',
    'pc_v-scale--4',
    'pc_v-scale--5',
    'pc_v-scale--6',
    'pc_v-scale--7',
    'pc_v-scale--8',
    'pc_v-scale--9',
    'pc_v-scale-1',
    'pc_v-scale-1.1',
    'pc_v-scale-1.2',
    'pc_v-scale-1.3',
    'pc_v-scale-2',
    'pc_v-scale-2.1',
    'pc_v-scale-2.2',
    'pc_v-scale-2.3',
    'pc_v-scale-3',
    'pc_v-scale-3.1',
    'pc_v-scale-3.2',
    'pc_v-scale-3.3',
    'pc_v-scale-4',
    'pc_v-scale-4.1',
    'pc_v-scale-4.2',
    'pc_v-scale-4.3',
    'pc_v-skew-1',
    'pc_v-skew-2',
    'pc_v-skew-3',
    'pc_v-skew-4',
    '-pc_v-skew-1',
    '-pc_v-skew-2',
    '-pc_v-skew-3',
    '-pc_v-skew-4',
    'pc_v-translate-1',
    'pc_v-translate-2',
    'pc_v-translate-3',
    'pc_v-translate-4',
    'pc_v-translate-middle',
    '-pc_v-translate-1',
    '-pc_v-translate-2',
    '-pc_v-translate-3',
    '-pc_v-translate-4',
    '-pc_v-translate-middle',
    'pc_v-translateX-1',
    'pc_v-translateX-2',
    'pc_v-translateX-3',
    'pc_v-translateX-4',
    'pc_v-translateX-middle',
    '-pc_v-translateX-1',
    '-pc_v-translateX-2',
    '-pc_v-translateX-3',
    '-pc_v-translateX-4',
    '-pc_v-translateX-middle',
    'pc_v-translateY-1',
    'pc_v-translateY-2',
    'pc_v-translateY-3',
    'pc_v-translateY-4',
    'pc_v-translateY-middle',
    '-pc_v-translateY-1',
    '-pc_v-translateY-2',
    '-pc_v-translateY-3',
    '-pc_v-translateY-4',
    '-pc_v-translateY-middle',
    'pc_v-translateZ-1',
    'pc_v-translateZ-2',
    'pc_v-translateZ-3',
    'pc_v-translateZ-4',
    'pc_v-translateZ-middle',
    '-pc_v-translateZ-1',
    '-pc_v-translateZ-2',
    '-pc_v-translateZ-3',
    '-pc_v-translateZ-4',
    '-pc_v-translateZ-middle'
]
let valuesTransform4 = [
  'transform: rotate(0deg)',
  'transform: rotate(30deg)',
  'transform: rotate(45deg)',
  'transform: rotate(90deg)',
  'transform: rotate(120deg)',
  'transform: rotate(180deg)',
  'transform: rotate(360deg)',
  'transform: scale(0.1)',
  'transform: scale(0.2)',
  'transform: scale(0.3)',
  'transform: scale(0.4)',
  'transform: scale(0.5)',
  'transform: scale(0.6)',
  'transform: scale(0.7)',
  'transform: scale(0.8)',
  'transform: scale(0.9)',
  'transform: scale(1)',
  'transform: scale(1.1)',
  'transform: scale(1.2)',
  'transform: scale(1.3)',
  'transform: scale(2)',
  'transform: scale(2.1)',
  'transform: scale(2.2)',
  'transform: scale(2.3)',
  'transform: scale(3)',
  'transform: scale(3.1)',
  'transform: scale(3.2)',
  'transform: scale(3.3)',
  'transform: scale(4)',
  'transform: scale(4.1)',
  'transform: scale(4.2)',
  'transform: scale(4.3)',
  'transform: skew(5deg)',
  'transform: skew(10deg)',
  'transform: skew(15deg)',
  'transform: skew(20deg)',
  'transform: skew(-5deg)',
  'transform: skew(-10deg)',
  'transform: skew(-15deg)',
  'transform: skew(-20deg)',
  'transform: translate(10%)',
  'transform: translate(20%)',
  'transform: translate(30%)',
  'transform: translate(40%)',
  'transform: translate(50%)',
  'transform: translate(-10%)',
  'transform: translate(-20%)',
  'transform: translate(-30%)',
  'transform: translate(-40%)',
  'transform: translate(-50%)',
  'transform: translateX(10%)',
  'transform: translateX(20%)',
  'transform: translateX(30%)',
  'transform: translateX(40%)',
  'transform: translateX(50%)',
  'transform: translateX(-10%)',
  'transform: translateX(-20%)',
  'transform: translateX(-30%)',
  'transform: translateX(-40%)',
  'transform: translateX(-50%)',
  'transform: translateY(10%)',
  'transform: translateY(20%)',
  'transform: translateY(30%)',
  'transform: translateY(40%)',
  'transform: translateY(50%)',
  'transform: translateY(-10%)',
  'transform: translateY(-20%)',
  'transform: translateY(-30%)',
  'transform: translateY(-40%)',
  'transform: translateY(-50%)',
  'transform: translateZ(10%)',
  'transform: translateZ(20%)',
  'transform: translateZ(30%)',
  'transform: translateZ(40%)',
  'transform: translateZ(50%)',
  'transform: translateZ(-10%)',
  'transform: translateZ(-20%)',
  'transform: translateZ(-30%)',
  'transform: translateZ(-40%)',
  'transform: translateZ(-50%)'
]
for (var i = 0; i <= propertiesTransform4.length; i++) {
    if (document.querySelector(`.${propertiesTransform4[i]}`) && !document.querySelector('style').innerText.includes(propertiesTransform4[i])) {
        let styles = ` 
        .${propertiesTransform4[i]} { 
            ${valuesTransform4[i]}
        }
        @media screen and (min-width: 1920px){
            .${propertiesTransform4[i]} { 
                ${valuesTransform4[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}