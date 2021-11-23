let body = document.body;

let button1 = document.querySelector(".plastic");
button1.addEventListener("click", hidePlastic);

let button2 = document.querySelector(".nonplastic");
button2.addEventListener("click", hideNonPlastic);

let button3 = document.querySelector(".rec");
button3.addEventListener("click", hideRec);

let button4 = document.querySelector(".nonrec");
button4.addEventListener("click", hideNonRec);


function hidePlastic(){
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