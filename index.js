$(document).ready(function() {
  $('.finished').hide();
    info();
    move();
// ill come back to making the no click work later  $('.fourx4').click(function(){return false;});

  $('.threex3').on('click', function() {
    $('.falling').empty();
    $('.box').stop();
    $('.info').animate({"margin-top": "120px"}, 400);
    $('.info').animate({"margin-top": "1600px"}, 1300);
    hide();
    go();
  });
});

function go () {
  setTimeout(function () {
    renderCards(cardNumbers());
 }, 1000)
}


function hide () {
  setTimeout(function () {
    $('.info').remove();
 }, 1400)
}

function move() {

  for (i = 0; i < 200; i++) {
    var $box = $("<div class='box " + i + "'></div>");
    $('.falling').append($box);
  };

  var colors = [
    'hsl(25, 85%, 65%)',
    'hsl(55, 85%, 65%)',
    'hsl(90, 85%, 65%)',
    'hsl(160, 85%, 65%)',
    'hsl(220, 85%, 65%)',
    'hsl(265, 85%, 65%)',
    'hsl(310, 85%, 65%)',
    'hsl(360, 85%, 65%)'];

  for (k = 0; k < 50; k++) {
      var l = Math.floor(Math.random() * 7);
    $('.' + k).css('background-color', colors[l]);
  }

$('.box').hide();

  var j = 0;
  function myLoop () {
    setTimeout(function () {
      var x = Math.floor(Math.random() * window.innerWidth - 150);
      var y = Math.floor(Math.random() * 9);
      var $num = '.' + j;
      $($num).show().text(y);
      $($num).animate({"left": "+=" + x + "px"}, 50);
      $($num).animate({"top": "+=1000px"},  2500);
      $($num).fadeOut(1);
      j++;
      if (j < 50) {
        myLoop();
      }
   }, 700)
}
myLoop();

function fadeout($thing) {
  setTimeout(function() {
    $($thing).fadeOut(1);
  }, 100)
}
};


function info() {
  $('.info').animate({
    "margin-top": "200px"
  }, 1200, function show() {
    $('.row').show();
  });
  $('.info').animate({
    height: "350px",
  }, 1200);
};


function cardNumbers() {
  // In order array of the cards values
  var inOrder = [];
  //Out of order array of the cards values
  var outOfOrder = [];
  //For loop to create two of every value for the cards
  for (num = 1; num < 9; num++) {
    inOrder.push(num);
    inOrder.push(num);
  };
  //While loop to randomize the order of the cards values
  while (inOrder.length > 0) {
    var random = Math.floor(Math.random() * inOrder.length);
    var number = inOrder[random];
    outOfOrder.push(number);
    inOrder.splice(random, 1);
  };
  //Returned vaule of the randomly ordered card values
  return outOfOrder;
};

var numbers = cardNumbers();


// Render cards function

function renderCards(cardValues) {
  var colors = [
    'hsl(25, 85%, 65%)',
    'hsl(55, 85%, 65%)',
    'hsl(90, 85%, 65%)',
    'hsl(160, 85%, 65%)',
    'hsl(220, 85%, 65%)',
    'hsl(265, 85%, 65%)',
    'hsl(310, 85%, 65%)',
    'hsl(360, 85%, 65%)'];

    $('.game').data('flippedCards', []);

  for (i = 0; i < cardValues.length; i++) {
    var eachCard = cardValues[i];
    var color = colors[eachCard - 1];
    var data = {
      eachCard: eachCard,
      color: color,
      isFlipped: false
    };


    var $newCard = $('<div class="col-xs-3 card"></div>')
    $newCard.data(data)


    $('.game').append($newCard);
    findCard($newCard);
  }
  $('.game').animate({"margin-top": "98.25rem"}, 1200);
  $('.game').animate({"margin-top": "82.25rem"}, 500);
  $('.game').animate({"margin-top": "95.25rem"}, 400);
  $('.game').animate({"margin-top": "86.25rem"}, 300);
  $('.game').animate({"margin-top": "90.25rem"}, 200);
  $('.game').animate({"margin-top": "88.25rem"}, 100);

  $('.card').click(function() {
    flipCard($(this), $('.game'));
  });
};


//Flip cards function

var count = 0;
function flipCard($card, $game) {
  if ($card.data('isFlipped')) {
    return;
  }

  $card.css('background-color', $card.data('color')).text($card.data('eachCard')).data('isFlipped', true);

  var flippedCards = $game.data('flippedCards');
  flippedCards.push($card);

  if (flippedCards.length === 2) {
    if (flippedCards[0].data('eachCard') === flippedCards[1].data('eachCard')) {
      var matchCss = {
        backgroundColor: 'rgb(153, 153, 153)',
        color: 'rgb(204, 204, 204)'
      };
      flippedCards[0].css(matchCss);
      flippedCards[1].css(matchCss);
        count++;
    } else {
      var card1 = flippedCards[0];
      var card2 = flippedCards[1];
      window.setTimeout(function() {
        card1.css('background-color', 'rgb(32, 64, 86)').text('').data('isFlipped', false);
        card2.css('background-color', 'rgb(32, 64, 86)').text('').data('isFlipped', false);
      }, 350);
    }
    $game.data('flippedCards', []);
    won(count);
  }
};


function removeEndBoard () {
  setTimeout(function () {
    $('.game').empty()
 }, 2000)
};

function finish() {
  $('.finished').show().animate({
    "height": "200px", "top": "350px"
  }, 600, function show() {
    $('h2').show();
  });
};

function won(count) {
  if (count === 8) {
    //  1st row
      cards[0].animate({'top': '-900px'}, 3000);
      cards[1].animate({'top': '-900px'}, 3000);
      cards[2].animate({'top': '-900px'}, 3000);
      cards[3].animate({'top': '-900px'}, 3000);

      //  2nd row
      cards[4].animate({'top': '-900px'}, 3000);
      cards[5].animate({'top': '-900px'}, 3000);
      cards[6].animate({'top': '-900px'}, 3000);
      cards[7].animate({'top': '-900px'}, 3000);

      //  3rd row
      cards[8].animate({'top': '1800px'}, 3000);
      cards[9].animate({'top': '1800px'}, 3000);
      cards[10].animate({'top': '1800px'}, 3000);
      cards[11].animate({'top': '1800px'}, 3000);

      //  4th row
      cards[12].animate({'top': '1800px'}, 3000);
      cards[13].animate({'top': '1800px'}, 3000);
      cards[14].animate({'top': '1800px'}, 3000);
      cards[15].animate({'top': '1800px'}, 3000);
      removeEndBoard()
      finish();
  } else {
    return;
  };
};
  var cards = [];
function findCard($card) {
  cards.push($card);
}
