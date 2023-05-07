function to_q1(){
  window.location.href="q1.html"
}
function to_q2(){
  window.location.href="q2.html"
}


function checka1() {
  var answer = document.querySelector('input[name="a1"]:checked').value;
  if (answer === "65") {
    document.querySelector("#answerMessage1").textContent = "你答对了！";
  }
  else {
    document.querySelector("#answerMessage1").textContent = "不对哦，要不再想想？";
  }
  document.querySelector("#answerDialog1").showModal();
}
  function closeDialog1() {
    document.querySelector("#answerDialog1").close();
}

function checka2() {
  var answer = document.querySelector('input[name="a2"]:checked').value;
  if (answer === "d") {
    document.querySelector("#answerMessage2").textContent = "你答对了！";
  }
  else {
    document.querySelector("#answerMessage2").textContent = "不对哦，要不再想想？";
  }
  document.querySelector("#answerDialog2").showModal();
}
  function closeDialog2() {
    document.querySelector("#answerDialog2").close();
}
