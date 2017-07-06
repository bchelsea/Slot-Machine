 /*----- constants -----*/
var slotA;

var slotB;

var slotC;

var score = 500;




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

/*----- functions -----*/

 setInterval(function () {
    $("#score").css("background-color", function () {
        this.switch = !this.switch
        return this.switch ? "yellow" : ""

    });
}, 500) 


setInterval(function () {
    $(".spin").css("background-color", function () {
        this.switch = !this.switch
        return this.switch ? "yellow" : ""
    });
}, 500)


function goEmojis() {

    slotA = Math.floor(Math.random() * 8) + 1;
    slotB = Math.floor(Math.random() * 8) + 1;
    slotC = Math.floor(Math.random() * 8) + 1;

    $($('.slots')[0]).html('<img src = "' + images[slotA-1] + '">');
    $($('.slots')[1]).html('<img src = "' + images[slotB-1] + '">');
    $($('.slots')[2]).html('<img src = "' + images[slotC-1] + '">');
    
    if (slotA == slotB && slotB == slotC) {
        setTimeout("alert('CHACHING! lucky three in a row, 500 bucks for you!');", 100);
}   else if (slotA !== slotB && slotB !== slotC) {
        return(null)
}   else (slotA !== slotB && slotB == slotC) 
        return(null)
}

  $(document).ready(function(){
     $('button.spin').click(function(){
      goEmojis(); 
    
    
    if (slotA == slotB && slotB == slotC) {
    score += 500;
}   else if (slotA == slotB && slotB !== slotC || slotA == slotB && slotA == slotC) {
    score += 100;
}   else {
    score -= 25;
};

$('#score').html( 'MONEY WON' + ' $' + score);

});
   

})

 
/*----- app's state (variables) -----*/
/*----- cached element references -----*/
