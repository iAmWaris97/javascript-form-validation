function errorMessage(id, value){
    document.getElementById(id).innerHTML = `${value} is required`;
    document.getElementById(id).style.color = "red";
    document.getElementById(id).style.fontSize = "12px";
}

function formValidation() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var telephone = document.getElementById("telephone").value;
    var message = document.getElementById("message").value;

    if (name === "" || name === null) {
        errorMessage("nameError", 'Name');
    }
    if (email === "" || email === null) {
        errorMessage("emailError", 'Email address');
    }
    if (telephone === "" || isNaN(telephone)) {
        errorMessage('telError', 'Telephone')
    }
    if (message === "") {
        errorMessage('messageError', 'Message')
    }
}

