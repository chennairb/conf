$(function() {
  $('#slides').slidesjs({
    navigation: {
      active: false,
    },
    pagination: {
      active: false,
    },
    play: {
      active: true,
      auto: true,
      interval: 3000,
      swap: true,
      effect: 'fade'
    },
    callback: {
      loaded: function(){
        $('.slidesjs-navigation, .slidesjs-pagination').hide(0); // To hide navigation and pagination
      }
    }
  });
});

$(document).ready(function(){

  $('#slack-invite-form').on('submit', function(e){

    var url = 'https://hooks.slack.com/services/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';
    var email = $("#slack-email").val();
    var text = "Please invite " + email;
    var data = {'text': text };
    var data_json = JSON.stringify(data);
    $.post(url, data_json, function(){}, 'json');
    $('#slack-invite-form').modal('hide');
    return e.preventDefault();
  });
});

