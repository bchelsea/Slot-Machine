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

/*----- event listeners -----*/

$(document).ready(function(){
    $('button.spin').click(function(){
        goEmojis();
        checkForWin();
        isGameOver();
        isCompleteRow();
        updateScore();
    });
    $('button#newGame').click(function() {
        resetGame();
    })
})

/*----- functions -----*/

setInterval(function () {
    $('#score').css('background-color', function () {
        this.switch = !this.switch
        return this.switch ? 'yellow' : ''

    });
}, 500) 


setInterval(function () {
    $('.spin').css('background-color', function () {
        this.switch = !this.switch
        return this.switch ? 'yellow' : ''
    });
}, 500)

function goEmojis() {
    slotA = Math.floor(Math.random() * 8) + 1;
    slotB = Math.floor(Math.random() * 8) + 1;
    slotC = Math.floor(Math.random() * 8) + 1;

    $($('.slots')[0]).html('<img src = "' + images[slotA-1] + '">');
    $($('.slots')[1]).html('<img src = "' + images[slotB-1] + '">');
    $($('.slots')[2]).html('<img src = "' + images[slotC-1] + '">');
    
}

function checkForWin() {
    if (slotA == slotB && slotB == slotC) {
        changeScore(500)
        isCompleteRow();
    } else if (
        (slotA !== slotB && slotA == slotC) || 
        (slotA == slotB && slotA !== slotC) || 
        (slotB == slotC && slotB !== slotA)) {
        changeScore(100)
    } else if (slotA !== slotB && slotB !== slotC) {
        changeScore(-75)
        return null;
    }
}

function changeScore(amt) {
    score += amt
}

function isGameOver() {
    if(score <= 0) {
        setTimeout(function(){
            $('#gameOver').show().delay(2000).fadeOut();;
        },  100);
    }
}

function isCompleteRow() {
    if(slotA == slotB && slotB == slotC) {
        setTimeout(function(){
            $('#completeRow').show().delay(2000).fadeOut();;
        },  100);
    }
}

function resetGame() {
    score = 500;
    updateScore();
}

function updateScore() {
    $('#score').html( 'MONEY WON' + ' $' + score);
}
