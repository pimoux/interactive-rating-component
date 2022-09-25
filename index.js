let chosenValue = null;

const submitButtonElt = document.querySelector(".submit");
const rateButtonsElt = document.querySelectorAll(".rate-button");
const firstCard = document.querySelector(".card.choose-rate");
const secondCard = document.querySelector(".card.thank-you");
const rateSelectedElt = document.querySelector(".rate-selected");

rateButtonsElt.forEach(elt => {
    elt.addEventListener("click", (e) => {
        rateButtonsElt.forEach(elt => {
            if (elt.classList.contains("active")) {
                elt.classList.remove("active");
            }
        });
        
        submitButtonElt.disabled = false;
        e.target.classList.add("active");
        chosenValue = e.target.value;
    });
});

submitButtonElt.addEventListener("click", () => {
    firstCard.style.display = "none";
    secondCard.style.display = "block";
    rateSelectedElt.textContent = "You selected " + chosenValue + " out of 5";
});