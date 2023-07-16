
//detecting button press
//The code block  from previous  lessons , only  makeSound function caller added
var noOFDrumButtons=document.querySelectorAll(".drum").length;

for(var i = 0; i<noOFDrumButtons; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
      //this is the first caller of  function “makeSound”, for button press
      /*By using this.innerHTML, you can retrieve the HTML content of the clicked button.
       This is used to determine which drum button was clicked and, subsequently, play the
       corresponding drum sound based on the value of buttonSound.*/
      var buttonInnerHTML= this.innerHTML;
      makeSound(buttonInnerHTML);
      //calling for animation
      buttonAnimation(buttonInnerHTML);
  });

}



//detecting keyboard press
//Keyboard Press Detecting Code Block  the confusing part ;)
document.addEventListener("keydown",function(evnt){
  //this is the second caller of  function “makeSound” , for keyboard press
  //a rotation going on here, in order to get the key value, like the use of “this” on the button press detecting code block
  //read in book also for better understanding
  makeSound(evnt.key);
  //calling for animation
  buttonAnimation(evnt.key);
});




//The function including switch statement  calling by both the code blocks above
//the “key” here is not related  with the WEB API parameter “key” just a custom parameter defined by Angela and gets the value from callers no 1 or no 2
//the use of “key” parameter is really important in here. first of all you should get that  here it is not used as (event, key) with comma, it is used as
// (event.key) with dot, key here gives the parameter of  “keydown” event whic is already included in  in WEB API, you can think as parameter from  ready-defined object.
//It comes from parameter highlighted below


function makeSound(key)
{

    switch (key) {
      case "w":
        var tom1=new Audio("sounds/tom-1.mp3");
        tom1.play();
      break;

      case "a":
       var tom2=new Audio("sounds/tom-2.mp3");
       tom2.play();
      break;

      case "s":
       var tom3=new Audio("sounds/tom-3.mp3");
       tom3.play();
      break;

      case "d":
       var tom4=new Audio("sounds/tom-4.mp3");
       tom4.play();
      break;

      case "j":
       var kickBass= new Audio("sounds/kick-bass.mp3");
       kickBass.play();
      break;

      case "k":
       var snare=new Audio("sounds/snare.mp3");
       snare.play();
      break;

      case "l":
       var crash=new Audio("sounds/crash.mp3");
       crash.play();
      break;




      default:console.log(buttonInnerHTML);
    }
  }



    function buttonAnimation(currentKey)
    {
      //to select the button which has current key
      var activeButton= document.querySelector("."+currentKey);
      //the CSS of how the button should show animation is written in CSS file .pressed class
      //now add pressed class in classList of activebutton
      activeButton.classList.add("pressed");
      //now this has 2 parameters first one says to remove pressed class and second one says it to remove in 100milliseconts
      setTimeout(function(){
        activeButton.classList.remove("pressed");
      }, 100);
    }
