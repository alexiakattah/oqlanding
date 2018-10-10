
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

  startCounter(maxCountPt1, "pt_count_1");
  startCounter(maxCountPt2, "pt_count_2");
  startCounter(maxCountPt3, "pt_count_3");
  startCounter(maxCountPt4, "pt_count_4");
  startCounter(maxCountPt5, "pt_count_5");
  startCounter(maxCountPt6, "pt_count_6");
};

function startCounter(maxCount, divId) {
  let countInit = 0;
  
  setInterval(function () {
      if (countInit <= maxCount){
        $("#"+divId).html(countInit);
        countInit ++;
      }
  }, 10);
}