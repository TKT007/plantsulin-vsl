$(document).ready(function () {
  // Print current season
  function getCurrentSeason() {
    var month = new Date().getMonth() + 1;
    var elements = document.getElementsByClassName("season"),
      currentSeason;

    switch (month) {
      case 12:
      case 1:
      case 2:
        currentSeason = "winter";
        break;
      case 3:
      case 4:
      case 5:
        currentSeason = "spring";
        break;
      case 6:
      case 7:
      case 8:
        currentSeason = "summer";
        break;
      case 9:
      case 10:
      case 11:
        currentSeason = "fall";
        break;
      default:
        currentSeason = "Invalid Month number";
        break;
    }

    for (var i = 0; i < elements.length; i++) {
      elements[i].innerHTML = currentSeason;
    }
  }


  // Scroll to CTA
  $(function () {
    $("a")
       .not("footer a, .button-main, #quiz-block a, #flags--title")
       .click(function () {
          let elem_index = $("a").not("footer a, .button-main, #quiz-block a, #flags--title").index(this) + 1;
          console.log("Click index (CTA):" + elem_index);
          request(12, elem_index, storageName);
          $("html, body").animate({
                scrollTop: $("#scroll").offset().top - 50,
             },
             1000
          );
       });
 });

  
  // Initialization
  getCurrentSeason();
});
