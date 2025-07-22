const btnId = document.getElementById("btn_click");
const message = document.getElementById("message");

let count = 0;
let reverseCount = 10;
btnId.addEventListener("click", () => {
  if (count < reverseCount) {
    count++;
    message.innerHTML = "Increment Count";
    message.style.color = "green";
  } else {
    reverseCount--;
    message.innerHTML = "Decrement Count";
    message.style.color = "red";
    if (reverseCount === 0) {
      count = 0;
      reverseCount = 10;
    }
  }
  btnId.value = `You Click ${count < 10 ? count : reverseCount}`;
});
