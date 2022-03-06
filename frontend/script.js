
let emailInput = document.querySelector("#email");
let phoneInput = document.querySelector("#phone-no");
let messageInput = document.querySelector("#message");

function nameValidity() {
    let nameInput = document.querySelector("#name").value;
    if (nameInput !== String && nameInput == 0) {
        alert ("Name is required");
    } else {
        alert ("success")
    }
}
 function emailValidity () {
     let email = emailInput.textContent;
     let pattern = /\S+@\S+\.\S+/;
     if (email !== pattern) {
         alert ("please put a valid email")
     } else{
         alert ("success")
        return pattern.test(email);
     }
 }
 function phoneValidity () {
     let phone = phoneNo.textContent
     if (phone !== Number) {
         alert ("phone number field must contain only numbers");
     } else {
         alert ("success")
     }
 }

 function messageValidity () {
     let message = messageInput.textContent
     if (message > 100) {
         alert ("message field cannot have more than 100 characters")
     } else {
         alert ("success")
     }
    }

function cancel() {
    nameValidity() = "";
    emailValidity() = "";
    phoneValidity() = "";
    messageValidity() = "";
}

function submit() {
if (!nameValidity() || ! emailValidity() || ! phoneValidity() || ! messageValidity()) {
    alert('all input boxes must be filled');
} else {
    alert("welcome" + nameInput.value);
}
}
