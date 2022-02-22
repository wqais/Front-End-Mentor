const adviceText = document.querySelector("#advice");
const getAdvice = document.querySelector(".generate-advice-btn");
const adviceId = document.querySelector("#advice-id");
const errorText = document.querySelector("#error");
const URL = "https://api.adviceslip.com/advice";

async function generateAdvice() {
  try {
    fetch(URL)
      .then((result) => result.json())
      .then(
        (data) =>
          (adviceId.textContent = data.slip.id) &&
          (adviceText.textContent = data.slip.advice)
      );
  } catch (error) {
    adviceText.classList.add("hide");
    errorText.classList.remove("hide");
    errorText.textContent = error;
  }
}

getAdvice.addEventListener("click", generateAdvice);
