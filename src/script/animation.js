import $ from 'jquery';

$(document).ready(function() {
    $(".js--wp").waypoint(function(direction) {
        $('.js--wp').addClass('animated fadeInLeft');  
          },{
          offset: '60%'
      })
});    

