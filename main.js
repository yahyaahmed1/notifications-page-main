let makeRead = document.querySelector("header > p");
let msgs = document.querySelectorAll(".messages > div");

makeRead.addEventListener("click", () => {
  for (let i = 0; i < msgs.length; i++) {
    if (msgs[i].classList.contains("unread")) {
      msgs[i].classList.remove("unread");
    }
  }
});