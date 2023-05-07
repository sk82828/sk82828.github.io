function to_q1(){
  window.location.href="q1.html"
}
function checkAnswer() {
  var answer = document.querySelector('input[name="a1"]:checked').value;
  if (answer === "65") {
    document.querySelector("#answerMessage").textContent = "你答对了！";
  }
  else {
    document.querySelector("#answerMessage").textContent = "不对哦，要不再想想？";
  }
  document.querySelector("#answerDialog").showModal();
}
  function closeDialog() {
    document.querySelector("#answerDialog").close();
}
