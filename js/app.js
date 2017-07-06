
//-----VARIABLES------//
function goEmojis(){

    var slotA;

    var slotB;

    var slotC;


var score;

var newScore;

// ---- IMAGES USED IN SLOTS ----- //

var images = [
    'http://i.imgur.com/74YyHqa.png',

    'http://i.imgur.com/AMn1C3n.png',

    'http://i.imgur.com/MXNLGis.png',

    'http://i.imgur.com/N3jFGfj.png',

    'http://i.imgur.com/xX6tUj7.png',

    'http://i.imgur.com/dG0pmcl.png',

    'http://i.imgur.com/0e2IQjY.png',

    'http://i.imgur.com/u11DlyW.png'

    ];


/*----RANDOMLY CHOOSE BETWEEN IMAGES IN EACH SLOT! ------*/ 
// math.floor (+ 1) will choose a number between one and 8 including 1 // 



    slotA = Math.floor(Math.random() * 8) + 1;

    slotB = Math.floor(Math.random() * 8) + 1;

    slotC = Math.floor(Math.random() * 8) + 1;


/* -----SHUFFLING THROUGH IMAGES IN EACH SLOT ------- */ 


$($('.slots')[0]).html('<img src = "' + images[slotA-1] + '">');

$($('.slots')[1]).html('<img src = "' + images[slotB-1] + '">');

$($('.slots')[2]).html('<img src = "' + images[slotC-1] + '">');

   
    


/*----WIN AND LOSE LOGIC BELOW ----------- */




    if (slots_a !== slots_b || slots_b !== slots_c) {
         return(null)
    }

    //if (slots_a == slots_b && slots_b == slots_c) {
      //  alert('match!');
    //}
    
    //   if (slots_a !== undefined && slots_b !== undefined && slots_c !== undefined) {
    //}
    
    return [slots_a, slots_b, slots_c];
  }



/* ------ SET DIVS TO TRANSITION COLOR!------- */

setInterval(function () {
    $("#bankRoll").css("background-color", function () {

        this.switch = !this.switch
        return this.switch ? "yellow" : ""

    });
}, 300)








/* ----- BUTTON CLICK TO RUN THE SLOTS -------- */

  $(document).ready(function(){
     $('button.spin').click(function(){
      goEmojis();
     });
  });
   






   
/*
$(document).ready(function () {
    $("button.spin").click(function () {
        alert('clicked!');
    });
});
*/


