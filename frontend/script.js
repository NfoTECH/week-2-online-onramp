let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let phoneInput = document.querySelector("#phone-no");
let messageInput = document.querySelector("#message");
let cancelBtn = document.querySelector("#cancel-btn");
let sendBtn = document.querySelector("#send-btn");

function clearFields() {
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
    messageInput.value = '';
}
 cancelBtn.addEventListener("click", clearFields);

 sendBtn.addEventListener ("click", () => {
        if (
         !nameInput.value ||
         !emailInput.value ||
         !phoneInput.value ||
         !messageInput.value
        ) {
            alert ("All Input Boxes Must Be Filled");
            return;
        }
        if (isNaN(phoneInput.value)) {
            alert ("Phone Input Field Must Contain Only Numbers");
            return;
        }
        if (messageInput.value > 100) {
            alert ("Message Field Cannot Have More Than 100 Characters");
            return;
        }
        alert ("Welcome" + " " + nameInput.value);
        clearFields();
 })