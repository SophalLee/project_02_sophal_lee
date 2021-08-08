const form = document.getElementById('form');
const successMessage = document.getElementsByClassName('success-message');
const successMessageButton = document.querySelector('.success-message > button');
const firstname = document.getElementById('firstname');
const surname = document.getElementById('surname');
const telephone = document.getElementById('telephone');
const email = document.getElementById('email');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if(checkInputs()) {
        successMessage[0].style.visibility = 'visible';
    }
});

/* Hide message when the close button has been clicked */
successMessageButton.addEventListener('click', () => {
    successMessage[0].style.visibility = 'hidden';
});

/* Validate input from form */
function checkInputs() {
    const firstnameValue = firstname.value.trim();
    const surnameValue = surname.value.trim();
    const telephoneValue = telephone.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    let firstnameSuccess = true;
    let surnameSuccess = true;
    let telephoneSuccess = true;
    let emailSuccess = true;
    let messageSuccess = true;

    if(firstnameValue === '') {
        setErrorFor(firstname, "First name cannot be blank");
        firstnameSuccess = false;
    }
    else if(!lettersAndSpaceCheck(firstnameValue)) {
        setErrorFor(firstname, "Invalid name");
        firstnameSuccess = false
    }
    else {
        setSuccessFor(firstname);
        firstnameSuccess = true;
    }

    if(surnameValue === '') {
        setErrorFor(surname, "Surname cannot be blank");
        surnameSuccess = false;
    }
    else if(!lettersAndSpaceCheck(surnameValue)) {
        setErrorFor(surname, "Invalid surname");
        surnameSuccess = false;
    }
    else {
        setSuccessFor(surname);
        surnameSuccess = true;
    }

    if(!numbersAndSpaceCheck(telephoneValue)) {
        setErrorFor(telephone, "Invalid telephone");
        telephoneSuccess = false;
    }
    else {
        setSuccessFor(telephone);
        telephoneSuccess = true;
    }

    if(emailValue === '') {
        setErrorFor(email, "Email cannot be blank");
        emailSuccess = false;
    }
    else if(!emailCheck(emailValue)) {
        setErrorFor(email, "Invalid email");
        emailSuccess = false;
    }
    else {
        setSuccessFor(email);
        emailSuccess = true;
    }

    if(messageValue === '') {
        setErrorFor(message, "Message cannot be blank");
        messageSuccess = false;
    }
    else {
        setSuccessFor(message);
        messageSuccess = true;
    }

    return (firstnameSuccess && surnameSuccess && telephoneSuccess && emailSuccess && messageSuccess);
    
}

/* Display error message and error icon */
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const error = formControl.querySelector('.error-message');

    error.className = 'error-message error';
    error.innerText = message;
    formControl.className = 'form-control error'; 
}

/* Display success icon and remove any error message */
function setSuccessFor(input) {
    const formControl = input.parentElement;
    const error = formControl.querySelector('.error-message');
    error.className = 'error-message';
    formControl.className = 'form-control success';
}

/* Check whether string contain only letters and space */
function lettersAndSpaceCheck(str) {
    var regEx = /^[a-zA-Z\s]*$/;

    if(str.match(regEx)) {
        return true;
    }
    else {
        return false;
    }
}

/* Check whether string contain only numbers and space */
function numbersAndSpaceCheck(str) {
    var regEx = /^[0-9\s]*$/;

    if(str.match(regEx)) {
        return true;
    }
    else {
        return false;
    }
}

/* Check whether email is valid or not */
function emailCheck(str) {
    var regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(str.match(regEx)) {
        return true;
    }
    else {
        return false;
    }
}