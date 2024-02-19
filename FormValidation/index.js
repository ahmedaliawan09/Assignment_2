function signup_validation() {
    var name = document.getElementById("na").value.trim();
    var email = document.getElementById("em").value.trim();
    var age = document.getElementById("ag").value.trim();
    var user_name = document.getElementById("us").value.trim();
    var password = document.getElementById("pas").value.trim();
    var zip_code = document.getElementById("zp").value.trim();
    var father_name = document.getElementById("fn").value.trim();
    var mobile_no = document.getElementById("mo").value.trim();

    var isValid = true;

    // Validate name
    var nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(name)) {
        isValid = false;
        alert("Please enter your name.");
    }

    // Validate email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        isValid = false;
        alert("Please enter a valid email address.");
    }

    // Validate age
    if (isNaN(age) || age <= 10 && age<=90) {
        isValid = false;
        alert("Please enter a valid age.");
    }

    if (user_name === "") {
        isValid = false;
        alert("Please enter your username.");
    }

    var passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])[0-9a-zA-Z!@#$%^&*(),.?":{}|<>]{8,}$/;
    if (!passwordRegex.test(password)) {
        isValid = false;
        alert("Password must be at least 8 characters long and contain at least one special character.");
    }

    var zipCodeRegex = /^\d{5}$/;
    if (!zipCodeRegex.test(zip_code)) {
        isValid = false;
        alert("Please enter a valid 4-digit zip code.");
    }

    if (!nameRegex.test(father_name)) {
        isValid = false;
        alert("Please enter your father's name.");
    }

    var mobileRegex = /^\d{11}$/;
    if (!mobileRegex.test(mobile_no)) {
        isValid = false;
        alert("Please enter a valid 11-digit mobile number.");
    }

    if (isValid) {
        alert("Succssfully Entered")
        window.location.href = "home.html";

    } else {
        event.preventDefault();
   
    }
}



function signin_validation() {
    var name = document.getElementById("name").value.trim();
    var password = document.getElementById("password").value.trim();

 
    if (name === "") {
        isValid = false;
        alert("Please enter your username.");
    }

    var passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])[0-9a-zA-Z!@#$%^&*(),.?":{}|<>]{8,}$/;
    if (!passwordRegex.test(password)) {
        isValid = false;
        alert("Password must be at least 8 characters long and contain at least one special character.");
    }
 

    if (isValid) {
        alert("SUCCESSFULLY ENTERED")
        window.location.href = "home.html";

    } 
    else {
        event.preventDefault();
   
    }
}




