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

