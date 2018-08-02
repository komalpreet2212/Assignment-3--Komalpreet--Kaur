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
function text() {
    let text = document.getElementById("text");

    text.textContent = "This Website belongs to Komalpreet Kaur, I born and brought up in Lohian Khas, Punjab, India on 22 Dec 1998. I am very Recognized about my Studies. I am very Soft and Delighted. I am very open-minded and let to enjoy life. I don't want anyone to rip me of from my life and my freedom. I am very Emotional in terms of relations. I am very soft but sometimes I think stone-heart is better for some people. ";
}
function h3() {
    let h3 = document.getElementById("h3");

    h3.textContent = " MY GOAL ";
}
function h32() {
    let h32 = document.getElementById("h32");

    h32.textContent = " Hobbies: ";
}


function Start() {
    // local variable
    let title = document.title;

    switch(title) {
        case "HomePage":            
            HomeContent();
            footer();
            break;

            case "About page":
            text();
            h3();
            h32();
            break;

            case "ContactPage":
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



function validateForm() {
    var elements = document.getElementsByTagName("input");
    for (var i = 0; i < elements.length; i++) {
        if(elements[i].value == "") {
            alert(elements[i].name + ' is required.');
            return false;
        }
    }
    var postalCode = elements["Postal Code"].value.toUpperCase();
    var regularExpression = /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ] ?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/;
    if (!postalCode.match(regularExpression)) {
        alert("Please enter a valid Postal Code!");
        return false;
    }
    else {
        elements["Postal Code"].value = postalCode;
    }    
    var province = document.getElementById("province").value.toUpperCase();
    if (!verifyProvince(province)) {
        alert("Please enter a valid Canadian Province (NS, NF, PE, NB, QC, ON, MN, SK, AB, BC).");
        return false;
    }
    else {
        document.getElementById("province").value = province;
    }
    var age = elements["Age"];
    if (age.value < 18) {
        alert("Sorry, but you must be at least 18 years old to submit this form.");
        return false;
    }
    var pass = elements["Password"].value;
    var confirmPass = elements["Confirm Password"].value;
    if (pass != confirmPass) {
        alert("Passwords don't match.")
        return false;
    }
    if (!pass.match(/[A-Z]/) || !pass.match(/[0-9]/) || pass.length < 6) {
        alert("Your password must contain at least 6 characters, one upper-case character and one digit.");
        return false;
    }
    var email = elements["Email"].value
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        alert("Please enter a valid e-mail.");
        return false;
    }
    alert("Thanks for registering with our website, your customer record was created successfully.");
    document.forms[0].reset();
    return false;
}

function verifyProvince(value) {
    var provinces = ['NS', 'NF', 'PE', 'NB', 'QC', 'ON', 'MN', 'SK', 'AB', 'BC'];
    return provinces.includes(value);
}

