const sFirst = document.getElementById("sFirst");
const sSecond = document.getElementById("sSecond");
const sThird = document.getElementById("sThird");
const text = document.getElementById("text");

const tFirst = 1;
const tSecond = 2;
const tThird = 3;

var textResult = 0;

var i = false;
function principal() {
  switch (textResult) {
  case 0 :
    text.textContent = "";
    break;
  case 1 :
    text.textContent = tFirst;
    break;
  }
}
function Test() {   alert(i);}
sFirst.addEventListener("click", function(){ i = !i; 
  Test()
});

