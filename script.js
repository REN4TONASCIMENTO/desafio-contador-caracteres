const textInput = document.getElementById("textInput");
const numAtual = document.getElementById("numAtual");
const max = 50;

textInput.addEventListener("input", () => {
  const count = textInput.value.length;
  numAtual.textContent = count;

  if (count <= max) {
    numAtual.classList.add("green");
    numAtual.classList.remove("red");
  } else {
    numAtual.classList.add("red");
    numAtual.classList.remove("green");
  }
});
