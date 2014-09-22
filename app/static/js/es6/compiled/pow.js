(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    $('#exponentiate').click(pow);
  }
  function pow(e) {
    var data = $('#pow').serialize();
    $.ajax({
      url: '/power',
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

//# sourceMappingURL=pow.map
