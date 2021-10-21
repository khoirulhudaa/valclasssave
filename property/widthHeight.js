let propertiesWidthHeight=["v-w-1","v-w-1-5","v-w-2","v-w-2-5","v-w-3","v-w-3-5","v-w-4","v-w-4-5","v-w-5","v-w-5-5","v-w-6","v-w-6-5","v-w-7","v-w-7-5","v-w-8","v-w-8-5","v-w-9","v-w-9-5","v-w-full","v-w-screen","v-w-min","v-w-max","v-w-half","v-w-5px","v-w-10px","v-w-15px","v-w-20px","v-w-25px","v-w-30px","v-w-35px","v-w-40px","v-w-45px","v-w-50px","v-w-55px","v-w-60px","v-w-65px","v-w-70px","v-w-75px","v-w-80px","v-w-85px","v-w-90px","v-w-95px","v-w-100px","v-w-200px","v-w-300px","v-w-400px","v-w-500px","v-w-600px","v-w-700px","v-w-800px","v-h-1","v-h-1-5","v-h-2","v-h-2-5","v-h-3","v-h-3-5","v-h-4","v-h-4-5","v-h-5","v-h-5-5","v-h-6","v-h-6-5","v-h-7","v-h-7-5","v-h-8","v-h-8-5","v-h-9","v-h-9-5","v-h-full","v-h-screen","v-h-min","v-h-max","v-h-half","v-h-5px","v-h-10px","v-h-15px","v-h-20px","v-h-25px","v-h-30px","v-h-35px","v-h-40px","v-h-45px","v-h-50px","v-h-55px","v-h-60px","v-h-65px","v-h-70px","v-h-75px","v-h-80px","v-h-85px","v-h-90px","v-h-95px","v-h-100px","v-h-200px","v-h-300px","v-h-400px","v-h-500px","v-h-600px","v-h-700px","v-h-800px"],valuesWidthHeight=["width: 10%;","width: 15%;","width: 20%;","width: 25%;","width: 30%;","width: 35%;","width: 40%;","width: 45%;","width: 50%;","width: 55%;","width: 60%;","width: 65%;","width: 70%;","width: 75%;","width: 80%;","width: 85%;","width: 90%;","width: 95%;","width: 100%;","width: 100vw;","width: min-content;","width: max-content;","width: 50%;","width: 5px;","width: 10px;","width: 15px;","width: 20px;","width: 25px;","width: 30px;","width: 35px;","width: 40px;","width: 45px;","width: 50px;","width: 55px;","width: 60px;","width: 65px;","width: 70px;","width: 75px;","width: 80px;","width: 85px;","width: 90px;","width: 95px;","width: 100px;","width: 200px;","width: 300px;","width: 400px;","width: 500px;","width: 600px;","width: 700px;","width: 800px;","height: 10%;","height: 15%;","height: 20%;","height: 25%;","height: 30%;","height: 35%;","height: 40%;","height: 45%;","height: 50%;","height: 55%;","height: 60%;","height: 65%;","height: 70%;","height: 75%;","height: 80%;","height: 85%;","height: 90%;","height: 95%;","height: 100%;","height: 100vw;","height: min-content;","height: max-content;","height: 50%;","height: 5px;","height: 10px;","height: 15px;","height: 20px;","height: 25px;","height: 30px;","height: 35px;","height: 40px;","height: 45px;","height: 50px;","height: 55px;","height: 60px;","height: 65px;","height: 70px;","height: 75px;","height: 80px;","height: 85px;","height: 90px;","height: 95px;","height: 100px;","height: 200px;","height: 300px;","height: 400px;","height: 500px;","height: 600px;","height: 700px;","height: 800px;"];for(var i=0;i<=propertiesWidthHeight.length;i++)if(document.querySelector(`.${propertiesWidthHeight[i]}`)&&!document.querySelector("style").innerText.includes(propertiesWidthHeight[i])){let h=` \n        .${propertiesWidthHeight[i]} { \n            ${valuesWidthHeight[i]}\n        }\n        @media screen and (min-width: 900px) and (max-width: 1920px) {\n            .${propertiesWidthHeight[i]} { \n                ${valuesWidthHeight[i]}\n            }\n        }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(h))}let propertiesWidthHeight2=["mb_v-w-1","mb_v-w-1-5","mb_v-w-2","mb_v-w-2-5","mb_v-w-3","mb_v-w-3-5","mb_v-w-4","mb_v-w-4-5","mb_v-w-5","mb_v-w-5-5","mb_v-w-6","mb_v-w-6-5","mb_v-w-7","mb_v-w-7-5","mb_v-w-8","mb_v-w-8-5","mb_v-w-9","mb_v-w-9-5","mb_v-w-full","mb_v-w-screen","mb_v-w-min","mb_v-w-max","mb_v-w-half","mb_v-w-5px","mb_v-w-10px","mb_v-w-15px","mb_v-w-20px","mb_v-w-25px","mb_v-w-30px","mb_v-w-35px","mb_v-w-40px","mb_v-w-45px","mb_v-w-50px","mb_v-w-55px","mb_v-w-60px","mb_v-w-65px","mb_v-w-70px","mb_v-w-75px","mb_v-w-80px","mb_v-w-85px","mb_v-w-90px","mb_v-w-95px","mb_v-w-100px","mb_v-w-200px","mb_v-w-300px","mb_v-w-400px","mb_v-w-500px","mb_v-w-600px","mb_v-w-700px","mb_v-w-800px","mb_v-h-1","mb_v-h-1-5","mb_v-h-2","mb_v-h-2-5","mb_v-h-3","mb_v-h-3-5","mb_v-h-4","mb_v-h-4-5","mb_v-h-5","mb_v-h-5-5","mb_v-h-6","mb_v-h-6-5","mb_v-h-7","mb_v-h-7-5","mb_v-h-8","mb_v-h-8-5","mb_v-h-9","mb_v-h-9-5","mb_v-h-full","mb_v-h-screen","mb_v-h-min","mb_v-h-max","mb_v-h-half","mb_v-h-5px","mb_v-h-10px","mb_v-h-15px","mb_v-h-20px","mb_v-h-25px","mb_v-h-30px","mb_v-h-35px","mb_v-h-40px","mb_v-h-45px","mb_v-h-50px","mb_v-h-55px","mb_v-h-60px","mb_v-h-65px","mb_v-h-70px","mb_v-h-75px","mb_v-h-80px","mb_v-h-85px","mb_v-h-90px","mb_v-h-95px","mb_v-h-100px","mb_v-h-200px","mb_v-h-300px","mb_v-h-400px","mb_v-h-500px","mb_v-h-600px","mb_v-h-700px","mb_v-h-800px"],valuesWidthHeight2=["width: 10%;","width: 15%;","width: 20%;","width: 25%;","width: 30%;","width: 35%;","width: 40%;","width: 45%;","width: 50%;","width: 55%;","width: 60%;","width: 65%;","width: 70%;","width: 75%;","width: 80%;","width: 85%;","width: 90%;","width: 95%;","width: 100%;","width: 100vw;","width: min-content;","width: max-content;","width: 50%;","width: 5px;","width: 10px;","width: 15px;","width: 20px;","width: 25px;","width: 30px;","width: 35px;","width: 40px;","width: 45px;","width: 50px;","width: 55px;","width: 60px;","width: 65px;","width: 70px;","width: 75px;","width: 80px;","width: 85px;","width: 90px;","width: 95px;","width: 100px;","width: 200px;","width: 300px;","width: 400px;","width: 500px;","width: 600px;","width: 700px;","width: 800px;","height: 10%;","height: 15%;","height: 20%;","height: 25%;","height: 30%;","height: 35%;","height: 40%;","height: 45%;","height: 50%;","height: 55%;","height: 60%;","height: 65%;","height: 70%;","height: 75%;","height: 80%;","height: 85%;","height: 90%;","height: 95%;","height: 100%;","height: 100vw;","height: min-content;","height: max-content;","height: 50%;","height: 5px;","height: 10px;","height: 15px;","height: 20px;","height: 25px;","height: 30px;","height: 35px;","height: 40px;","height: 45px;","height: 50px;","height: 55px;","height: 60px;","height: 65px;","height: 70px;","height: 75px;","height: 80px;","height: 85px;","height: 90px;","height: 95px;","height: 100px;","height: 200px;","height: 300px;","height: 400px;","height: 500px;","height: 600px;","height: 700px;","height: 800px;"];for(i=0;i<=propertiesWidthHeight2.length;i++)if(document.querySelector(`.${propertiesWidthHeight2[i]}`)&&!document.querySelector("style").innerText.includes(propertiesWidthHeight2[i])){let h=` \n        .${propertiesWidthHeight2[i]} { \n            ${valuesWidthHeight2[i]}\n        }\n        @media screen and (min-width: 320px) and (max-width: 600px){\n            .${propertiesWidthHeight2[i]} { \n                ${valuesWidthHeight2[i]}\n            }\n        }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(h))}let propertiesWidthHeight3=["tb_v-w-1","tb_v-w-1-5","tb_v-w-2","tb_v-w-2-5","tb_v-w-3","tb_v-w-3-5","tb_v-w-4","tb_v-w-4-5","tb_v-w-5","tb_v-w-5-5","tb_v-w-6","tb_v-w-6-5","tb_v-w-7","tb_v-w-7-5","tb_v-w-8","tb_v-w-8-5","tb_v-w-9","tb_v-w-9-5","tb_v-w-full","tb_v-w-screen","tb_v-w-min","tb_v-w-max","tb_v-w-half","tb_v-w-5px","tb_v-w-10px","tb_v-w-15px","tb_v-w-20px","tb_v-w-25px","tb_v-w-30px","tb_v-w-35px","tb_v-w-40px","tb_v-w-45px","tb_v-w-50px","tb_v-w-55px","tb_v-w-60px","tb_v-w-65px","tb_v-w-70px","tb_v-w-75px","tb_v-w-80px","tb_v-w-85px","tb_v-w-90px","tb_v-w-95px","tb_v-w-100px","tb_v-w-200px","tb_v-w-300px","tb_v-w-400px","tb_v-w-500px","tb_v-w-600px","tb_v-w-700px","tb_v-w-800px","tb_v-h-1","tb_v-h-1-5","tb_v-h-2","tb_v-h-2-5","tb_v-h-3","tb_v-h-3-5","tb_v-h-4","tb_v-h-4-5","tb_v-h-5","tb_v-h-5-5","tb_v-h-6","tb_v-h-6-5","tb_v-h-7","tb_v-h-7-5","tb_v-h-8","tb_v-h-8-5","tb_v-h-9","tb_v-h-9-5","tb_v-h-full","tb_v-h-screen","tb_v-h-min","tb_v-h-max","tb_v-h-half","tb_v-h-5px","tb_v-h-10px","tb_v-h-15px","tb_v-h-20px","tb_v-h-25px","tb_v-h-30px","tb_v-h-35px","tb_v-h-40px","tb_v-h-45px","tb_v-h-50px","tb_v-h-55px","tb_v-h-60px","tb_v-h-65px","tb_v-h-70px","tb_v-h-75px","tb_v-h-80px","tb_v-h-85px","tb_v-h-90px","tb_v-h-95px","tb_v-h-100px","tb_v-h-200px","tb_v-h-300px","tb_v-h-400px","tb_v-h-500px","tb_v-h-600px","tb_v-h-700px","tb_v-h-800px"],valuesWidthHeight3=["width: 10%;","width: 15%;","width: 20%;","width: 25%;","width: 30%;","width: 35%;","width: 40%;","width: 45%;","width: 50%;","width: 55%;","width: 60%;","width: 65%;","width: 70%;","width: 75%;","width: 80%;","width: 85%;","width: 90%;","width: 95%;","width: 100%;","width: 100vw;","width: min-content;","width: max-content;","width: 50%;","width: 5px;","width: 10px;","width: 15px;","width: 20px;","width: 25px;","width: 30px;","width: 35px;","width: 40px;","width: 45px;","width: 50px;","width: 55px;","width: 60px;","width: 65px;","width: 70px;","width: 75px;","width: 80px;","width: 85px;","width: 90px;","width: 95px;","width: 100px;","width: 200px;","width: 300px;","width: 400px;","width: 500px;","width: 600px;","width: 700px;","width: 800px;","height: 10%;","height: 15%;","height: 20%;","height: 25%;","height: 30%;","height: 35%;","height: 40%;","height: 45%;","height: 50%;","height: 55%;","height: 60%;","height: 65%;","height: 70%;","height: 75%;","height: 80%;","height: 85%;","height: 90%;","height: 95%;","height: 100%;","height: 100vw;","height: min-content;","height: max-content;","height: 50%;","height: 5px;","height: 10px;","height: 15px;","height: 20px;","height: 25px;","height: 30px;","height: 35px;","height: 40px;","height: 45px;","height: 50px;","height: 55px;","height: 60px;","height: 65px;","height: 70px;","height: 75px;","height: 80px;","height: 85px;","height: 90px;","height: 95px;","height: 100px;","height: 200px;","height: 300px;","height: 400px;","height: 500px;","height: 600px;","height: 700px;","height: 800px;"];for(i=0;i<=propertiesWidthHeight3.length;i++)if(document.querySelector(`.${propertiesWidthHeight3[i]}`)&&!document.querySelector("style").innerText.includes(propertiesWidthHeight3[i])){let h=` \n        .${propertiesWidthHeight3[i]} { \n            ${valuesWidthHeight3[i]}\n        }\n        @media screen and (min-width: 600px) and (max-width: 900px){\n            .${propertiesWidthHeight3[i]} { \n                ${valuesWidthHeight3[i]}\n            }\n        }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(h))}let propertiesWidthHeight4=["pc_v-w-1","pc_v-w-1-5","pc_v-w-2","pc_v-w-2-5","pc_v-w-3","pc_v-w-3-5","pc_v-w-4","pc_v-w-4-5","pc_v-w-5","pc_v-w-5-5","pc_v-w-6","pc_v-w-6-5","pc_v-w-7","pc_v-w-7-5","pc_v-w-8","pc_v-w-8-5","pc_v-w-9","pc_v-w-9-5","pc_v-w-full","pc_v-w-screen","pc_v-w-min","pc_v-w-max","pc_v-w-half","pc_v-w-5px","pc_v-w-10px","pc_v-w-15px","pc_v-w-20px","pc_v-w-25px","pc_v-w-30px","pc_v-w-35px","pc_v-w-40px","pc_v-w-45px","pc_v-w-50px","pc_v-w-55px","pc_v-w-60px","pc_v-w-65px","pc_v-w-70px","pc_v-w-75px","pc_v-w-80px","pc_v-w-85px","pc_v-w-90px","pc_v-w-95px","pc_v-w-100px","pc_v-w-200px","pc_v-w-300px","pc_v-w-400px","pc_v-w-500px","pc_v-w-600px","pc_v-w-700px","pc_v-w-800px","pc_v-h-1","pc_v-h-1-5","pc_v-h-2","pc_v-h-2-5","pc_v-h-3","pc_v-h-3-5","pc_v-h-4","pc_v-h-4-5","pc_v-h-5","pc_v-h-5-5","pc_v-h-6","pc_v-h-6-5","pc_v-h-7","pc_v-h-7-5","pc_v-h-8","pc_v-h-8-5","pc_v-h-9","pc_v-h-9-5","pc_v-h-full","pc_v-h-screen","pc_v-h-min","pc_v-h-max","pc_v-h-half","pc_v-h-5px","pc_v-h-10px","pc_v-h-15px","pc_v-h-20px","pc_v-h-25px","pc_v-h-30px","pc_v-h-35px","pc_v-h-40px","pc_v-h-45px","pc_v-h-50px","pc_v-h-55px","pc_v-h-60px","pc_v-h-65px","pc_v-h-70px","pc_v-h-75px","pc_v-h-80px","pc_v-h-85px","pc_v-h-90px","pc_v-h-95px","pc_v-h-100px","pc_v-h-200px","pc_v-h-300px","pc_v-h-400px","pc_v-h-500px","pc_v-h-600px","pc_v-h-700px","pc_v-h-800px"],valuesWidthHeight4=["width: 10%;","width: 15%;","width: 20%;","width: 25%;","width: 30%;","width: 35%;","width: 40%;","width: 45%;","width: 50%;","width: 55%;","width: 60%;","width: 65%;","width: 70%;","width: 75%;","width: 80%;","width: 85%;","width: 90%;","width: 95%;","width: 100%;","width: 100vw;","width: min-content;","width: max-content;","width: 50%;","width: 5px;","width: 10px;","width: 15px;","width: 20px;","width: 25px;","width: 30px;","width: 35px;","width: 40px;","width: 45px;","width: 50px;","width: 55px;","width: 60px;","width: 65px;","width: 70px;","width: 75px;","width: 80px;","width: 85px;","width: 90px;","width: 95px;","width: 100px;","width: 200px;","width: 300px;","width: 400px;","width: 500px;","width: 600px;","width: 700px;","width: 800px;","height: 10%;","height: 15%;","height: 20%;","height: 25%;","height: 30%;","height: 35%;","height: 40%;","height: 45%;","height: 50%;","height: 55%;","height: 60%;","height: 65%;","height: 70%;","height: 75%;","height: 80%;","height: 85%;","height: 90%;","height: 95%;","height: 100%;","height: 100vw;","height: min-content;","height: max-content;","height: 50%;","height: 5px;","height: 10px;","height: 15px;","height: 20px;","height: 25px;","height: 30px;","height: 35px;","height: 40px;","height: 45px;","height: 50px;","height: 55px;","height: 60px;","height: 65px;","height: 70px;","height: 75px;","height: 80px;","height: 85px;","height: 90px;","height: 95px;","height: 100px;","height: 200px;","height: 300px;","height: 400px;","height: 500px;","height: 600px;","height: 700px;","height: 800px;"];for(i=0;i<=propertiesWidthHeight4.length;i++)if(document.querySelector(`.${propertiesWidthHeight4[i]}`)&&!document.querySelector("style").innerText.includes(propertiesWidthHeight4[i])){let h=` \n        .${propertiesWidthHeight4[i]} { \n            ${valuesWidthHeight4[i]}\n        }\n        @media screen and (min-width: 1920px){\n            .${propertiesWidthHeight4[i]} { \n                ${valuesWidthHeight4[i]}\n            }\n        }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(h))}