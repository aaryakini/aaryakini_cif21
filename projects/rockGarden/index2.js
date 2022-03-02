let body = document.body;

function togglePlastic(){
	let x = document.getElementsByClassName("plastic");
	for (let i = 0; i < x.length; i++){
		if (x[i].style.display === "block") {
		x[i].style.display = "none";
		} else {
			x[i].style.display = "block";
		}
	}
}

function toggleNonPlastic(){
	let x = document.getElementsByClassName("nonplastic");
	for (let i = 0; i < x.length; i++){
		if (x[i].style.display === "block") {
		x[i].style.display = "none";
		} else {
			x[i].style.display = "block";
		}
	}
}

function toggleRecycled(){
	let x = document.getElementsByClassName("recycled");
	for (let i = 0; i < x.length; i++){
		if (x[i].style.display === "block") {
		x[i].style.display = "none";
		} else {
			x[i].style.display = "block";
		}
	}
}

function toggleNonRecycled(){
	let x = document.getElementsByClassName("nonrecycled");
	for (let i = 0; i < x.length; i++){
		if (x[i].style.display === "block") {
		x[i].style.display = "none";
		} else {
			x[i].style.display = "block";
		}
	}
}