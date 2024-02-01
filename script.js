function validateForm() {
    var emailInput = document.getElementById("email");
    var email = emailInput.value.trim();
    const emailValidation = document.getElementById('emailV');
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var alphaInput = document.getElementById("alpha");
    var alpha = alphaInput.value.trim();
    const alphaValidation = document.getElementById('alphaV');
    var alphaRegex = /^[a-zA-Z\s]*$/;

    var maleChecked = document.getElementById("male").checked;
    var femaleChecked = document.getElementById("female").checked;
    const genderValidation = document.getElementById('genderV');

    var urlInput = document.getElementById("url");
    var url = urlInput.value.trim();
    const urlValidation = document.getElementById('urlV');
    var urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

    var textareaInput = document.getElementById("textarea");
    var textarea = textareaInput.value.trim();
    const textareaValidation = document.getElementById('textareaV');

    var imageInput = document.getElementById("image");
    var image = imageInput.value;
    const imageValidation = document.getElementById('imageV');

    var passwordInput = document.getElementById("password");
    var password = passwordInput.value.trim();
    const passwordValidation = document.getElementById('passwordV');
    
    var phoneInput = document.getElementById("phone");
    var phone = phoneInput.value.trim();
    const phoneValidation = document.getElementById('phoneV');

    var birthdateInput = document.getElementById("birthdate");
    var birthdate = new Date(birthdateInput.value);
    const birthdateValidation = document.getElementById('birthdateV');

    var currencyInput = document.getElementById("currency");
    var currency = currencyInput.value.trim();
    const currencyValidation = document.getElementById('currencyV');

    // var checkboxInputs = document.querySelectorAll('input[type="checkbox"]');
    // var checkedCount = 0;
    // const checkboxValidation = document.getElementById('checkboxV');

    
    emailValidation.textContent = "";
    alphaValidation.textContent = "";
    genderValidation.textContent = "";
    urlValidation.textContent = "";
    textareaValidation.textContent = "";
    imageValidation.textContent = "";
    passwordValidation.textContent = "";
    phoneValidation.textContent = "";
    birthdateValidation.textContent = "";
    currencyValidation.textContent = "";
    // checkboxValidation.textContent = "";

    console.log("llll");

    if (!emailRegex.test(email)) {
        emailValidation.textContent = "Email not valid";
        return false;
    } 
    if (!alphaRegex.test(alpha)) {
        alphaValidation.textContent = "Alpha not valid";
        return false;
    } 
    if (!maleChecked && !femaleChecked) {
        genderValidation.textContent = "Please select a gender";
        return false;
    }
    if (!urlRegex.test(url)) {
        urlValidation.textContent = "URL not valid";
        return false;
    }
    if (textarea === "") {
        textareaValidation.textContent = "Textarea cannot be empty";
        return false;
    }
    if (image === "") {
        imageValidation.textContent = "Please select an image";
        return false;
    }
    if (password.length < 8) {
        passwordValidation.textContent = "Password must be at least 8 characters long";
        return false;
    }
    
    
    var phoneRegex = /^\d{10}$/; 
    if (!phoneRegex.test(phone)) {
        phoneValidation.textContent = "Phone number must be 10 digits";
        return false;
    }

    var minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 100); 
    if (birthdate > minDate) {
        birthdateValidation.textContent = "Date of birth must be at least 100 years ago";
        return false;
    }

   
    var currencyRegex = /^\d+(\.\d{1,2})?$/;
    if (!currencyRegex.test(currency)) {
        currencyValidation.textContent = "Currency not valid";
        return false;
    }

   
    // checkboxInputs.forEach(function(checkbox) {
    //     if (checkbox.checked) {
    //         checkedCount++;
    //     }
    // });
    // if (checkedCount === 0) {
    //     checkboxValidation.textContent = "Please select at least one option";
    //     return false;
   else{
        window.alert("Form submitted");
    return true;

    }

    
}

