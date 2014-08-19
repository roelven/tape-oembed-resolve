(function(){
  
  $('input#url').blur(function() {
    var url = $(this).val();

    if (url != '') {
      $.ajax({
            url: "http://www.tape.tv/services/oembed?url=" + url,
            dataType: 'json',
            success: function (data, status, error) {
              console.log('success', data);
            },
            error: function (data, status, error) {
              console.log('error', data, status, error);
            }
        });
    }

  });

})();
