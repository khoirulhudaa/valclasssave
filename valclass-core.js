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
	text: [],
	item: []
}

// daftar nama class dan nama items 
// yang akan di gunakan oleh class itu sendiri
let utility = {
	"v-d": "display",
	"v-text": "text",
	"v-item": "item"
}

// fungsi Core adalah fungsi yang berperan sebagai
// fungsi untuk menambahkan setiap class utility yang ada
// di dalam className dari semua element
// yang ada di dalam body
function Core(element){

	let allClass = element?.className?.split(" ") || [];

	allClass.forEach(e =>{

		let token = e.split("-");

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
		width: 100%;
		height: 100%;
	}

`;

function valclass_initalization(){

	// melakukan looping untuk menambahkan valclass
	// ke dalam element style 
	for(let className in vallclass){

		for(let _class of vallclass[className]){

			if(className === "display"){

				style_sheet +=`

				.v-d-${_class}{

					display:${_class};

				}

				`;				

			}

			if(className === "text"){

				style_sheet +=`

				.v-text-${_class}{

					text-align:${_class};

				}

				`;	

			}

		}

	}

}	

// ketika halaman web sudah siap
// maka lakukan inisalisasi
// dan masukan valclass ke dalam nya
window.onload= ()=>{

	valclass_initalization();

	let style_ = document.head.querySelector("style");

	if(style_ instanceof HTMLStyleElement){

		style_.textContent = style_.textContent.replace(/\@style_sheet/igm,style_sheet);

	}else{

		let style = document.createElement("style");
		style.textContent = style_sheet;

		document.head.appendChild(style);

	}

}
