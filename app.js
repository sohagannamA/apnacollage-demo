const btnId = document.getElementById("btn_click");

let count = 0;
btnId.addEventListener("click", () => {
  count++;
  btnId.value = `You Click ${count}`;
});
