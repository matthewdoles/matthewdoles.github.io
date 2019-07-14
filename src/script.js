window.onload = function() {

  window.onscroll = function() {
    var d = document.getElementById("two");
    var topPos = d.offsetTop;
    var three = document.getElementById("three");
    var threePos = three.offsetTop;
    var four = document.getElementById("four");
    var fourPos = four.offsetTop;
    var five = document.getElementById("five");
    var fivePos = five.offsetTop;
    console.log(threePos);
    if ($(this).scrollTop() < 100) {
    } else if ($(this).scrollTop() > topPos - 350 && $(this).scrollTop() < topPos + 200){
      $("#fun").fadeOut("slow");
    } else if ($(this).scrollTop() > threePos - 100 && $(this).scrollTop() < threePos + 600){
      $("#salesforce").fadeOut("slow");
    } else if ($(this).scrollTop() > fourPos - 100 && $(this).scrollTop() < fourPos + 600){;
      $("#projects").fadeOut("slow");
    } else if ($(this).scrollTop() > fivePos - 150 && $(this).scrollTop() < fivePos + 100){;
      $("#school").fadeOut("slow");
    }
    else {
      $("#fun").fadeIn("slow");
      $("#salesforce").fadeIn("slow");
      $("#school").fadeIn("slow");
      $("#projects").fadeIn("slow");
    }
  
  }

}

function removeHeader1() {
  //$("#whose-tagline-header").fadeToggle("slow");
  $("#whose-tagline-details").animate({
    height: "40vh",
    width: "50vh"
  },1000);
  $("#whose-tagline-details-2").fadeIn();
}
function removeHeader2() {
  $("#jordan-doles-details").animate({
    height: "40vh",
    width: "50vh"
  },1000);
  $("#jordan-doles-details-2").fadeIn();
}
function removeHeader3() {
  $("#barrel-chat-details").animate({
    height: "40vh",
    width: "50vh"
  },1000);
  $("#barrel-chat-details-2").fadeIn();
}
function removeHeader4() {
  $("#hopped-up-details").animate({
   height: "40vh",
    width: "50vh"
  },1000);
  $("#hopped-up-details-2").fadeIn();
}