// let body = document.body;

// let button1 = document.querySelector(".plastic");
// button1.addEventListener("click", hidePlastic);

// let button2 = document.querySelector(".nonplastic");
// button2.addEventListener("click", hideNonPlastic);

// let button3 = document.querySelector(".rec");
// button3.addEventListener("click", hideRec);

// let button4 = document.querySelector(".nonrec");
// button4.addEventListener("click", hideNonRec);


// function hidePlastic(){
// 	if (body.classList.contains("plastic")){
// 		body.classList.toggle("invisible");
// 	}
// }

// function hideNonPlastic(){
// 	if (body.classList.contains("nonplastic")){
// 		body.classList.toggle("invisible");
// 	}
// }

// function hideRec(){
// 	if (body.classList.contains("rec")){
// 		body.classList.toggle("invisible");
// 	}
// }

// function hideNonRec(){
// 	if (body.classList.contains("nonrec")){
// 		body.classList.toggle("invisible");
// 	}
// }

let body = document.body;

let button1 = document.querySelectorAll(".plastic");
for (let i = 0 ; i < button1.length; i++) {
   button1[i].addEventListener('click',hidePlastic);
   console.log(button1[i]);
}

let button2 = document.querySelectorAll(".nonplastic");
for (let j = 0 ; j < button2.length; j++) {
   button2[j].addEventListener('click',hideNonPlastic);
}

let button3 = document.querySelectorAll(".rec");
for (let k = 0 ; k < button3.length; k++) {
   button3[k].addEventListener('click',hideRec);
}
let button4 = document.querySelectorAll(".nonrec");
for (let l = 0 ; l < button4.length; l++) {
   button4[l].addEventListener('click',hideNonRec);
}

function hidePlastic(button1){
	for (let i = 0; i < button1.length; i++)
	if (body.classList.contains("plastic")){
		body.classList.toggle("invisible");
	}
}

function hideNonPlastic(){
	if (body.classList.contains("nonplastic")){
		body.classList.toggle("invisible");
	}
}

function hideRec(){
	if (body.classList.contains("rec")){
		body.classList.toggle("invisible");
	}
}

function hideNonRec(){
	if (body.classList.contains("nonrec")){
		body.classList.toggle("invisible");
	}
}