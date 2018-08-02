// JavaScript source code
// validate entered email
/* Custom js goes Here */

// IIFE - Immediately Invoked Function Expression
// anonyms self execuing funtion 
(function(){
    "Use Strict"

    function AboutButtonClick() {
        console.log("About Button was Clicked!");
    }

    function AboutButtonOver(event) {
        event.currentTarget.style.opacity = 0.3;
    }

    function AboutButtonOut() {
        event.currentTarget.style.opacity = 1.0;
    }

function HomeContent() {
    let AboutButton = document.getElementById("AboutButton");

    AboutButton.innerText = "About";

        AboutButton.addEventListener("click", AboutButtonClick);
        AboutButton.addEventListener("mouseover", AboutButtonOver);
        AboutButton.addEventListener("mouseout", AboutButtonOut);

}

function footer() {
    let footer = document.getElementById("footer");

    footer.textContent = "copyright - @BAGGANISHAT - Assignment2-Updated_page";
}
function sample() {
    let sample = document.getElementById("sample");

    sample.textContent = "Hi, My name is Nishat Bagga , I born and brought up in Jalandhar, Punjab, India on 17 Sep 1998. I am very Passionate about my physic and sports. I am very Hard, tough and hot-headed person. I am very loyable and to my friends and family and the person who did good to me at any time and I can do anything for them..";
}
function heading3() {
    let heading3 = document.getElementById("heading3");

    heading3.textContent = "Mission Statement";
}
function heading4() {
    let heading4 = document.getElementById("heading4");

    heading4.textContent = "My Hobbies: ";
}


function Start() {
    // local variable
    let title = document.title;

    switch(title) {
        case "My Webpage - Home!":            
            HomeContent();
            footer();
            break;

            case "My Webpage - About!":
            sample();
            heading3();
            heading4();
            footer();
            break;

            case "My Webpage - Contact":
            footer();
            break;

            default:
            break;
    }
                 

    console.log("App Started!");
    console.log("------------------");
    console.log("Title: "+ title);
}

window.onload = Start;

})();





var validateStart=0;

function validateEmail() {
    var emailInput = document.getElementById("email");
    var errorDiv = document.getElementById("emailError");
    errorDiv.innerHTML = "Please provide a valid email address";
    
    // replace with conditional expression
    var RegExp = /^([a-zA-Z0-9_\.-]+)@([\da-zA-Z\.-]+)\.([a-zA-Z\.]{2,6})$/;
    if(RegExp.test(emailInput.value)){
        errorDiv.style.display = "none";
        emailInput.style.background = "#88ff88";
        errorDiv.innerHTML = "";
    }
    else{
        errorDiv.style.display = "block";
        errorDiv.style.color = "#8888ff";
        if(validateStart>=2){
            errorDiv.style.color = "red";
        }
        emailInput.style.background = "#ffffff";
    }
}

// validate entered password
function validatePassword() {
    var pw1Input = document.getElementById("pw1");
    var errorDiv = document.getElementById("passwordError");
    errorDiv.innerHTML = ">5 up,low case,number,and special characters.";
        // replace with conditional expression
    var p = pw1Input.value;
    var Rega_z = /[a-z]+/;
    var RegA_Z = /[A-Z]+/;
    var Reg0_9 = /[0-9]+/;
    var RegExp = /[!@#$%^&()]+/;
    //if (pw1Input.value.length < 6) {
    if (Rega_z.test(p) && RegA_Z.test(p) && Reg0_9.test(p) && RegExp.test(p) && p.length > 5) {
        // remove any password error styling and message
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        pw1Input.style.background = "#88ff88";
        
    }else{
        errorDiv.style.display = "block";
        errorDiv.style.color = "#8888ff";
        if(validateStart>=2){
            errorDiv.style.color = "red";
        }
        pw1Input.style.background = "#ffffff";
    }
}
function validateConfirm() {
    var pw1Input = document.getElementById("pw1");
    var pw2Input = document.getElementById("pw2");
    var errorDiv = document.getElementById("confirmError");
    errorDiv.innerHTML = "Passwords must match";
        // replace with conditional expression
    if (pw1Input.value.length < 6 || pw1Input.value.localeCompare(pw2Input.value) !== 0) {
        errorDiv.style.display = "block";
        errorDiv.style.color = "#8888ff";
        if(validateStart>=2){
            errorDiv.style.color = "red";
        }  
        pw2Input.style.background = "#ffffff";      
    } 
    else{
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        pw2Input.style.background = "#88ff88";
    }    
}
function validatePostalCode(){
    var postalCode = document.getElementById("postalCode");
    var postalCodeError = document.getElementById("postalCodeError");
    //console.log(pc.value);
    postalCodeError.innerHTML = "The pattern of postal code is 'a0a0a0'."
    var RegExp = /^[a-zA-Z][0-9][a-zA-Z][0-9][a-zA-Z][0-9]$/;
    if(RegExp.test(postalCode.value)){
        postalCodeError.style.display = "none";
        postalCode.style.background = "#88ff88";
        postalCodeError.innerHTML = "";
    }
    else{
        postalCode.style.background = "#ffffff";
        postalCodeError.style.display = "block";
        if(validateStart>=2){
            postalCodeError.style.color = "red";
        }
        else
        {
            postalCodeError.style.color = "#8888ff";            
        }
    }
}

function validateProvince(){
    var province = document.getElementById("province");
    var provinceError = document.getElementById("provinceError");
    provinceError.innerHTML = "The Province field can't be blank."
    if(province.value == ""){
        province.style.background = "#ffffff";
        provinceError.style.display = "block";
        provinceError.style.color = "#8888ff";
        if(validateStart>=2){
            provinceError.style.color = "red";
        }
    }
    else{
        provinceError.style.display = "none";
        province.style.background = "#88ff88";
    }
}

function validateAge(){
    var age = document.getElementById("age");
    var ageError = document.getElementById("ageError");
    ageError.innerHTML = "The Age can't be less than 18."
    if(parseInt(age.value) < 18 || age.value == ""){
        ageError.style.display = "block";
        age.style.background = "#ffffff";
        ageError.style.color = "#8888ff";
        if(validateStart>=2){
            ageError.style.color = "red";
        }
    }
    else{
        ageError.style.display = "none";
        age.style.background = "#88ff88";
    }
}


function validateFirstName(){
    var fn = document.getElementById("fname");
    var fe = document.getElementById("firstNameError");
    fe.innerHTML = "The First Name is at least 2 characters."
    if(fn.value == "" || fn.value.length < 2){
        fe.style.display = "block";
        fe.style.color = "#8888ff";
        if(validateStart>=2){
            fe.style.color = "red";
        }
        fn.style.background = "#ffffff";
    }
    else{
        fe.style.display = "none";
        fn.style.background = "#88ff88";
    }
}
function validateLastName(){
    var ln = document.getElementById("lname");
    var le = document.getElementById("lastNameError");
    le.innerHTML = "The Last Name is at least 2 characters."
    //console.log(ln.value);
    if(ln.value == "" || ln.value.length < 2){
        le.style.display = "block";
        le.style.color = "#8888ff";
        if(validateStart>=2){
            le.style.color = "red";
        }
        ln.style.background = "#ffffff";
    }
    else{
        le.style.display = "none";
        ln.style.background = "#88ff88";
    }
}
function validateAddress(){
    var address = document.getElementById("address");
    var addressError = document.getElementById("addressError");
    addressError.innerHTML = "The Address is at least 6 characters."
    //console.log(ln.value);
    if(address.value == "" || address.value.length < 6){
        address.style.background = "#ffffff";
        addressError.style.display = "block";
        addressError.style.color = "#8888ff";
        if(validateStart>=2){
            addressError.style.color = "red";
        }
    }
    else{
        addressError.style.display = "none";
        address.style.background = "#88ff88";
    }
}
function validateCity(){
    var city = document.getElementById("city");
    var cityError = document.getElementById("cityError");
    cityError.innerHTML = "The City is at least 2 characters."
    //console.log(ln.value);
    if(city.value == "" || city.value.length < 2){
        city.style.background = "#ffffff";
        cityError.style.display = "block";
        cityError.style.color = "#8888ff";
        if(validateStart>=2){
            cityError.style.color = "red";
        }
    }
    else{
        cityError.style.display = "none";
        city.style.background = "#88ff88";
    }
}
function validateForm(){
    validateStart += 2;
    validateFirstName();
    validateLastName();
    validateAddress();
    validateCity();
    validatePostalCode();
    
    validateProvince();
    validateAge();
    validatePassword();
    validateConfirm();    
    validateEmail();
}
function createEventListeners() {
   
   var fname = document.getElementById("fname");
   if (fname.addEventListener) {
     fname.addEventListener("keyup", validateFirstName, false); 
   } else if (fname.attachEvent)  {
     fname.attachEvent("onkeyup", validateFirstName);
   }
   var lname = document.getElementById("lname");
   if (lname.addEventListener) {
     lname.addEventListener("keyup", validateLastName, false); 
   } else if (lname.attachEvent)  {
     lname.attachEvent("onkeyup", validateLastName);
   }
   var address = document.getElementById("address");
   if (address.addEventListener) {
     address.addEventListener("keyup", validateAddress, false); 
   } else if (address.attachEvent)  {
     address.attachEvent("onkeyup", validateAddress);
   }
   var city = document.getElementById("city");
   if (city.addEventListener) {
     city.addEventListener("keyup", validateCity, false); 
   } else if (city.attachEvent)  {
     city.attachEvent("onkeyup", validateCity);
   }
   var province = document.getElementById("province");
   if (province.addEventListener) {
     province.addEventListener("keyup", validateProvince, false); 
   } else if (province.attachEvent)  {
     province.attachEvent("onkeyup", validateProvince);
   }
   var postalCode = document.getElementById("postalCode");
   if (postalCode.addEventListener) {
     postalCode.addEventListener("keyup", validatePostalCode, false); 
   } else if (postalCode.attachEvent)  {
     postalCode.attachEvent("onkeyup", validatePostalCode);
   }
   var age = document.getElementById("age");
   if (age.addEventListener) {
     age.addEventListener("keyup", validateAge, false); 
   } else if (age.attachEvent)  {
     age.attachEvent("onkeyup", validateAge);
   }
   var password = document.getElementById("pw1");
   if (password.addEventListener) {
     password.addEventListener("keyup", validatePassword, false); 
   } else if (password.attachEvent)  {
     password.attachEvent("onkeyup", validatePassword);
   }
   var confirm = document.getElementById("pw2");
   if (confirm.addEventListener) {
     confirm.addEventListener("keyup", validateConfirm, false); 
   } else if (confirm.attachEvent)  {
     confirm.attachEvent("onkeyup", validateConfirm);
   }
   var email = document.getElementById("email");
   if (email.addEventListener) {
     email.addEventListener("keyup", validateEmail, false); 
   } else if (email.attachEvent)  {
     email.attachEvent("onkeyup", validateEmail);
   }

   
}

function setUpPages() {
    createEventListeners();    
}

function reload(){
    document.location.reload();
}

if (window.addEventListener) {
    window.addEventListener("load", setUpPages, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPages, validateEmail);
}

