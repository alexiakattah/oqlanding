/* Examples */
(function($) {
    $('.first.circle.gray').circleProgress({
        value: 1,
        fill: {gradient: [['#787878', .1], ['#787878', .1]], gradientAngle: Math.PI / 4},
        size: $("body").innerWidth() * 0.2,
        thickness: 3
      }).on('circle-animation-progress', function(event, progress, stepValue) {
        $(this).find('strong').html(Math.round(80 * progress) +  '<i>%</i>');
      });
  
   
    $('.second.circle.gray').circleProgress({
      value: 1,
      fill: {gradient: [['#787878', .1], ['#787878', .1]], gradientAngle: Math.PI / 4},
      size: $("body").innerWidth() * 0.2,
      thickness: 3
    }).on('circle-animation-progress', function(event, progress, stepValue) {
      $(this).find('strong').html('<i>$</i>' + (2.4 * progress).toFixed(2) +  '<i>k</i>');
    });

    $('.third.circle.gray').circleProgress({
        value: 1,
        fill: {gradient: [['#787878', .1], ['#787878', .1]], gradientAngle: Math.PI / 4},
        size: $("body").innerWidth() * 0.2,
        thickness: 3
      }).on('circle-animation-progress', function(event, progress, stepValue) {
        $(this).find('strong').html(Math.round(202 * progress) +  '<i>%</i>');
      });

  
  })(jQuery);