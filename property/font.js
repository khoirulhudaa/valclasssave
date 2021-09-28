
let propertiesFonts = [
    'v-weight-normal',
    'v-weight-bold',
    'v-weight-100',
    'v-weight-200',
    'v-weight-300',
    'v-weight-400',
    'v-weight-500',
    'v-weight-600',
    'v-weight-700',
    'v-weight-800',
    'v-font-italic',
    'v-font-normal',
    'v-font-oblique',
    'v-font-sm',
    'v-font-md',
    'v-font-lg',
    'v-font-xl',
    'v-font-10',
    'v-font-12',
    'v-font-14',
    'v-font-16',
    'v-font-18',
    'v-font-20',
    'v-font-22',
    'v-font-24',
    'v-font-26',
    'v-font-28',
    'v-font-30',
    'v-font-32',
    'v-font-34',
    'v-font-36',
    'v-font-38',
    'v-font-40',
    'v-font-42',
    'v-font-44',
    'v-font-46',
    'v-font-48',
    'v-font-50',
    'v-font-52',
    'v-font-54',
    'v-font-56',
    'v-font-58',
    'v-font-60',
    'v-font-62',
    'v-font-64',
    'v-font-66',
    'v-font-68',
    'v-font-70',
]
let valuesFonts = [
    'font-weight: normal;',
    'font-weight: bold;',
    'font-weight: 100;',
    'font-weight: 200;',
    'font-weight: 300;',
    'font-weight: 400;',
    'font-weight: 500;',
    'font-weight: 600;',
    'font-weight: 700;',
    'font-weight: 800;',
    'font-style: italic;',
    'font-style: normal;',
    'font-style: oblique;',
    'font-size: 15px;',
    'font-size: 20px;',
    'font-size: 25px;',
    'font-size: 30px;',
    'font-size: 10px;',
    'font-size: 12px;',
    'font-size: 14px;',
    'font-size: 16px;',
    'font-size: 18px;',
    'font-size: 20px;',
    'font-size: 22px;',
    'font-size: 24px;',
    'font-size: 26px;',
    'font-size: 28px;',
    'font-size: 30px;',
    'font-size: 32px;',
    'font-size: 34px;',
    'font-size: 36px;',
    'font-size: 38px;',
    'font-size: 40px;',
    'font-size: 42px;',
    'font-size: 44px;',
    'font-size: 46px;',
    'font-size: 48px;',
    'font-size: 50px;',
    'font-size: 52px;',
    'font-size: 54px;',
    'font-size: 56px;',
    'font-size: 58px;',
    'font-size: 60px;',
    'font-size: 62px;',
    'font-size: 64px;',
    'font-size: 66px;',
    'font-size: 68px;',
    'font-size: 70px;',
]
for (var i = 0; i <= propertiesFonts.length; i++) {
    if (document.querySelector(`.${propertiesFonts[i]}`) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {
        let styles = ` 
            @media screen and (min-width: 900px){
                .${propertiesFonts[i]} { 
                    ${valuesFonts[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}