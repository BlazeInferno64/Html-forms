const emailBg = document.querySelector(".email-bg");
const emailCard = document.querySelector(".email-card");
const closeEmailCardBtn = document.querySelector(".close");

const openEmailCard = () => {
    emailBg.classList.remove("hide");
    emailCard.classList.add("ani");
    emailCard.classList.remove("hide");

    setTimeout(() => {
        emailCard.classList.remove("down");
    }, 500);
}

const closeEmailCard = () => {
    emailCard.classList.add("up");
    emailCard.classList.add("anti");
    setTimeout(() => {
        emailCard.classList.add("hide");
    }, 700);
    setTimeout(() => {
        emailBg.classList.add("hide");
        emailCard.classList.remove("anti");
        emailCard.classList.add("hide");
    }, 1000);

    setTimeout(() => {
        emailCard.classList.add("down");
        emailCard.classList.remove("up");
        emailCard.classList.remove("ani");
    }, 1200);
}

closeEmailCardBtn.addEventListener("click",(e) => {
    closeEmailCard();
})