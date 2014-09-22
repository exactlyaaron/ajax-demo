(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    $('#sumthelist').click(sumthelist);
  }
  function sumthelist(e) {
    var data = $('#sumlist').serialize();
    console.log('DATA ' + data);
    $.ajax({
      url: '/sumlist',
      type: 'POST',
      data: data,
      success: (function(response) {
        $('#result').text(response.result);
        console.log(response);
      })
    });
    e.preventDefault();
  }
})();

//# sourceMappingURL=sumlist.map
