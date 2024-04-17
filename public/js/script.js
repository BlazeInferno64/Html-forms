const form = document.querySelector(".form");

const submitBtn = document.querySelector(".send");
const resetBtn = document.querySelector(".reset");
const recieverSendBtn = document.querySelector(".submit");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const queryInput = document.querySelector("#query");

const receiverEmailInput = document.querySelector("#email-reciever");


form.addEventListener("input",(e) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(nameInput.value.length <= 0){
        submitBtn.classList.add("none");
        resetBtn.classList.add("none");
    }
    else if(!emailRegex.test(emailInput.value)){
        submitBtn.classList.add("none");
        resetBtn.classList.add("none");
    }
    else if(queryInput.value.length <= 0){
        submitBtn.classList.add("none");
        resetBtn.classList.add("none");
    }
    else{
        submitBtn.classList.remove("none");
        resetBtn.classList.remove("none");
        return;
    }
})

receiverEmailInput.addEventListener("input",(e) => {
    /*if(receiverEmailInput.value.length <= 0){
        //recieverSendBtn.classList.add("none");
        form.action = '';
    }
    else{
        form.action = receiverEmailInput.value;
        //recieverSendBtn.classList.remove("none");
    }*/
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(emailRegex.test(receiverEmailInput.value)){
        recieverSendBtn.classList.remove("none");
        form.action = `mailto:${receiverEmailInput.value}`;
    }
    else{
        recieverSendBtn.classList.add("none");
        form.action = '';
        return;
    }
})

recieverSendBtn.addEventListener("click",async(e) => {
    try {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(emailRegex.test(receiverEmailInput.value)){
            alert(`Sending mail to ${receiverEmailInput.value}...`);
            await form.submit();
        }
        else{
            throw new Error(`Cannot send mail to an invalid mail address: ${receiverEmailInput.value}!`);
        }
    } catch (error) {
        console.error(error);
        alert(error);
        return;
    }
})

submitBtn.addEventListener("click",(e) => {
    e.preventDefault();
    openEmailCard();
})
resetBtn.addEventListener("click",(e) => {
    alert(`Form has been reseted successfully!`);
    submitBtn.classList.add("none");
    resetBtn.classList.add("none");
})
