function selectNo() {
  const error = document.getElementById("error");
  error.textContent = "❌ WTF bitch. System error detected. Go to the YES option to resolve.";
}

function selectYes() {
  document.querySelector(".container").style.display = "none";
  document.getElementById("celebration").style.display = "block";
}
