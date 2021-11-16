let body = document.body;
let count = 0;

let button = document.querySelector(".button");
button.addEventListener("click", counter);

function counter(){
  count = count + 1;
  if (count > 10){
    count = 1;
  }
  console.log(count);
  sunrise(count);
}

function sunrise(count){
  if (count == 1){
    body.classList.remove("s10");
    body.classList.add("s1");
  }
  else if (count == 2){
    body.classList.remove("s1");
    body.classList.add("s2");
  }
  else if (count == 3){
    body.classList.remove("s2");
    body.classList.add("s3");
  }
  else if (count == 4){
    body.classList.remove("s3");
    body.classList.add("s4");
  }
  else if (count == 5){
    body.classList.remove("s4");
    body.classList.add("s5");
  }
  else if (count == 6){
    body.classList.remove("s5");
    body.classList.add("s6");
  }
  else if (count == 7){
    body.classList.remove("s6");
    body.classList.add("s7");
  }
  else if (count == 8){
    body.classList.remove("s7");
    body.classList.add("s8");
  }
  else if (count == 9){
    body.classList.remove("s8");
    body.classList.add("s9");
  }
  else if (count == 10){
    body.classList.remove("s9");
    body.classList.add("s10");
  }
}