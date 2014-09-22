(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#rollthedie').click(rollTheDie);
  }

  function rollTheDie(e){

    $.ajax({
      url: '/roll',
      type: 'POST',
      success: response => {
        $('#dice').empty();

        var image = '<img src="/img/dice/'+response.side+'.png">';
        $('#dice').append(image);
      }
    });

    e.preventDefault();
  }

})();
