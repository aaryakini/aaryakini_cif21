let body = document.body;

//shows only plastic
function togglePlastic(){
	let x = document.getElementsByClassName("nonplastic");
	for (let i = 0; i < x.length; i++){
		if (x[i].style.display === "block") {
			x[i].style.display = "none";
			let j=document.getElementById("plastic");
			j.style.textDecoration = "underline";
		} else {
			x[i].style.display = "block";
			j.style.textDecoration = "none";

		}
	}
}

//shows only nonplastic
function toggleNonPlastic(){
	let x = document.getElementsByClassName("plastic");
	for (let i = 0; i < x.length; i++){
		if (x[i].style.display === "block") {
			x[i].style.display = "none";
			let j=document.getElementById("nonplastic");
			j.style.textDecoration = "underline";
		} else {
			x[i].style.display = "block";
			j.style.textDecoration = "none";
		}
	}
}

//shows only recycled
function toggleRecycled(){
	let x = document.getElementsByClassName("nonrecycled");
	for (let i = 0; i < x.length; i++){
		if (x[i].style.display === "block") {
			x[i].style.display = "none";
			let j=document.getElementById("recycled");
			j.style.textDecoration = "underline";
		} else {
			x[i].style.display = "block";
			j.style.textDecoration = "none";
		}
	}
}

//shows only nonrecycled
function toggleNonRecycled(){
	let x = document.getElementsByClassName("recycled");
	for (let i = 0; i < x.length; i++){
			if (x[i].style.display === "block") {
			x[i].style.display = "none";
			let j=document.getElementById("nonrecycled");
			j.style.textDecoration = "underline";
		} else {
			x[i].style.display = "block";
			j.style.textDecoration = "none";
		}
	}
}