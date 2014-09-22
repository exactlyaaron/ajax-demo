(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    $('#add').click(add);
  }
  function add(e) {
    alert('hey');
    var data = $('#sum').serialize();
    console.log(data);
    $.ajax({
      url: '/sum',
      type: 'POST',
      data: data,
      success: (function(response) {
        $('#result').text(response.sum);
        console.log(response);
      })
    });
    e.preventDefault();
  }
})();

//# sourceMappingURL=sum.map
