let body = document.body;
let plastic = document.getElementById("plastic");
let nonplastic = document.getElementById("nonplastic");
let recycled = document.getElementById("recycled");
let nonrecycled = document.getElementById("nonrecycled");

//shows only plastic
function togglePlastic(){
	let x = document.getElementsByClassName("nonplastic");
	for (let i = 0; i < x.length; i++){
		if (x[i].style.display === "none") {
			x[i].style.display = "block";
			plastic.style.textDecoration = "none";
			nonplastic.disabled = false; //automatically renders elements unclickable
			recycled.disabled = false;
			nonrecycled.disabled = false;
		} else {
			x[i].style.display = "none";
			plastic.style.textDecoration = "underline";
			nonplastic.disabled = true;
			recycled.disabled = true;
			nonrecycled.disabled = true;
		}
	}
}

//shows only nonplastic
function toggleNonPlastic(){
	let x = document.getElementsByClassName("plastic");
	for (let i = 0; i < x.length; i++){
		if (x[i].style.display === "none") {
			x[i].style.display = "block";
			nonplastic.style.textDecoration = "none";
			plastic.disabled = false;
			recycled.disabled = false;
			nonrecycled.disabled = false;
		} else {
			x[i].style.display = "none";
			nonplastic.style.textDecoration = "underline";
			plastic.disabled = true;
			recycled.disabled = true;
			nonrecycled.disabled = true;
		}
	}
}

//shows only recycled
function toggleRecycled(){
	let x = document.getElementsByClassName("nonrecycled");
	for (let i = 0; i < x.length; i++){
		if (x[i].style.display === "none") {
			x[i].style.display = "block";
			recycled.style.textDecoration = "none";
			nonrecycled.disabled = false;
			plastic.disabled = false;
			nonplastic.disabled = false;
		} else {
			x[i].style.display = "none";
			recycled.style.textDecoration = "underline";
			nonrecycled.disabled = true;
			plastic.disabled = true;
			nonplastic.disabled = true;
		}
	}
}

//shows only nonrecycled
function toggleNonRecycled(){
	let x = document.getElementsByClassName("recycled");
	for (let i = 0; i < x.length; i++){
		if (x[i].style.display === "none") {
			x[i].style.display = "block";
			nonrecycled.style.textDecoration = "none";
			recycled.disabled = false;
			plastic.disabled = false;
			nonplastic.disabled = false;
		} else {
			x[i].style.display = "none";
			nonrecycled.style.textDecoration = "underline";
			recycled.disabled = true;
			plastic.disabled = true;
			nonplastic.disabled = true;
		}
	}
}