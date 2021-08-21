const form = document.getElementById('form');
const successMessage = document.getElementsByClassName('success-message');
const successMessageButton = document.querySelector('.success-message > button');
const firstname = document.getElementById('firstname');
const surname = document.getElementById('surname');
const telephone = document.getElementById('telephone');
const email = document.getElementById('email');
const message = document.getElementById('message');

const regexName = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9 \.'\-]+$/;
const regexNumber = /^[0-9\s]*$/;
const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

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
    let firstnameSuccess = false;
    let surnameSuccess = false;
    let telephoneSuccess = false;
    let emailSuccess = false;
    let messageSuccess = false;

    if(!validateInput(regexName, firstname.value.trim())) {
        setErrorFor(firstname, "Invalid name");
        firstnameSuccess = false
    }
    else {
        setSuccessFor(firstname);
        firstnameSuccess = true;
    }

    if(!validateInput(regexName, surname.value.trim())) {
        setErrorFor(surname, "Invalid surname");
        surnameSuccess = false;
    }
    else {
        setSuccessFor(surname);
        surnameSuccess = true;
    }

    if(!validateInput(regexNumber, telephone.value.trim())) {
        setErrorFor(telephone, "Invalid telephone");
        telephoneSuccess = false;
    }
    else {
        setSuccessFor(telephone);
        telephoneSuccess = true;
    }

    if(!validateInput(regexEmail, email.value.trim())) {
        setErrorFor(email, "Invalid email");
        emailSuccess = false;
    }
    else {
        setSuccessFor(email);
        emailSuccess = true;
    }

    if(message.value.trim().length < 10 || message.value.trim() === '') {
        setErrorFor(message, "Message is too short or cannot be blank");
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

/* Validate user input - regexpression match */
function validateInput(regex, input) {
    return regex.test(input);
}
