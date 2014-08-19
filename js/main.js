(function(){
  
  $('input#url').blur(function() {
    var url = $(this).val();

    if (url != '') {
      $.ajax({
            url: "http://www.tape.tv/services/oembed?url=" + url,
            dataType: 'json',
            success: function(data){
                $('#embedcode').html(data.html);
            }
        });
    }

  });

})();
