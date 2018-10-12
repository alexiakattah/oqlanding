
let ptCounted = false;
let enCounted = false;

$(window).scroll(function() {
  if(isScrolledIntoView($("#countWhiteSection"))) {
    if (!ptCounted){
      loadPtCounts();
      ptCounted = true;
    }
  }
});

$('#countWhiteSection').on({
  'touchmove': function(e) { 
    if (!ptCounted){
      loadPtCounts();
      ptCounted = true;
    }
  }
});

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();
  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function loadPtCounts(){
  const maxCountPt1 = 80;
  const maxCountPt2 = 2.4;
  const maxCountPt3 = 202;
  const maxCountPt4 = 200;
  const maxCountPt5 = 92;
  const maxCountPt6 = 854;

  startCounter(maxCountPt1, "pt_count_1", 3);
  startCounter(maxCountPt2, "pt_count_2", 3);
  startCounter(maxCountPt3, "pt_count_3", 3);
  startCounter(maxCountPt4, "pt_count_4", 3);
  startCounter(maxCountPt5, "pt_count_5", 3);
  startCounter(maxCountPt6, "pt_count_6", 3);

  startCounter(maxCountPt1, "pt_count_7", 3);
  startCounter(maxCountPt2, "pt_count_8", 3);
  startCounter(maxCountPt3, "pt_count_9", 3);
  startCounter(maxCountPt4, "pt_count_10", 3);
  startCounter(maxCountPt5, "pt_count_11", 3);
  startCounter(maxCountPt6, "pt_count_12", 3);
};

function startCounter(maxCount, divId, timeToLoad) {
  let countInit = 0;
  const countInterval = maxCount / timeToLoad;
  
  setInterval(function () {
      if (countInit <= maxCount){
        if (countInit < maxCount){
          $("#"+divId).html(countInit.toFixed(1));
        }
        else {
          $("#"+divId).html(countInit);
        }
        
        countInit += countInterval;
      }
  }, 200);
}