(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    $('#rollthedice').click(rollTheDice);
  }
  function rollTheDice(e) {
    $.ajax({
      url: '/pairs',
      type: 'POST',
      success: (function(response) {
        console.log(response);
        $('#dice1').empty();
        $('#dice2').empty();
        $('#winner').text('');
        var winner;
        var image1 = '<img src="/img/dice/' + response.dice1 + '.png">';
        $('#dice1').append(image1);
        var image2 = '<img src="/img/dice/' + response.dice2 + '.png">';
        $('#dice2').append(image2);
        if (response.winner === true) {
          winner = 'YES!';
        } else {
          winner = 'NO!';
        }
        $('#winner').append('Winner? ' + winner);
      })
    });
    e.preventDefault();
  }
})();

//# sourceMappingURL=pairs.map
