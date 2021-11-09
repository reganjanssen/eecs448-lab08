
// Function to verify if both passwords are the same
function verify(password1,password2) 
{
    var password1 = document.getElementById("password1")
    var password2 = document.getElementById("password2")

    if (password1.value.length < 8 || password2.value.length < 8) {
        alert("The password must be at least 8 characters long. Please try again.")
    }
    else if (password1.value != password2.value) {
        alert("The passwords you entered do not match. Please try again.")
    }
    else {
        alert("Passwords Match!")
        return true;
    }
}