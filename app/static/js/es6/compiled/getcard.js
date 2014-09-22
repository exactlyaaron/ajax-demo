(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    $('#getcard').click(getCard);
  }
  function getCard(e) {
    $.ajax({
      url: '/getcard',
      type: 'POST',
      success: (function(response) {
        var suitPercent = response.suit * 100;
        var cardPercent = response.card * 8.33333;
        $('#card').css('background-position', (cardPercent + "% " + suitPercent + "%"));
      })
    });
    e.preventDefault();
  }
})();

//# sourceMappingURL=getcard.map
