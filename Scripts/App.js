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