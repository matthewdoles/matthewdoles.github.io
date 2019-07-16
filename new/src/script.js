function downFunction() {
    var d = document.getElementById("experience");
    var topPos = d.offsetTop;
    var three = document.getElementById("salesforce");
    var threePos = three.offsetTop;
    var four = document.getElementById("projects");
    var fourPos = four.offsetTop;
    var five = document.getElementById("education");
    var fivePos = five.offsetTop;

    if ($(this).scrollTop() >= 0 && $(this).scrollTop() < topPos) {
        $('html,body').animate({scrollTop: $('#experience').offset().top}, 1500);
    } else if ($(this).scrollTop() >= topPos && $(this).scrollTop() < threePos){
        $('html,body').animate({scrollTop: $('#salesforce').offset().top}, 1500);
    } else if ($(this).scrollTop() >= threePos && $(this).scrollTop() < fourPos){
        $('html,body').animate({scrollTop: $('#projects').offset().top}, 1500);
    } else if ($(this).scrollTop() >= fourPos && $(this).scrollTop() < fivePos){
        $('html,body').animate({scrollTop: $('#education').offset().top}, 1500);
    }

}

function upFunction() {
    var d = document.getElementById("experience");
    var topPos = d.offsetTop;
    var three = document.getElementById("salesforce");
    var threePos = three.offsetTop;
    var four = document.getElementById("projects");
    var fourPos = four.offsetTop;
    var five = document.getElementById("education");
    var fivePos = five.offsetTop;

    if ($(this).scrollTop() >= topPos && $(this).scrollTop() < threePos){
        $('html,body').animate({scrollTop: $('#top').offset().top}, 1500);
    } else if ($(this).scrollTop() >= threePos && $(this).scrollTop() < fourPos){
        $('html,body').animate({scrollTop: $('#experience').offset().top}, 1500);
    } else if ($(this).scrollTop() >= fourPos && $(this).scrollTop() < fivePos){
        $('html,body').animate({scrollTop: $('#salesforce').offset().top}, 1500);
    } else if ($(this).scrollTop() >= fivePos) {
        $('html,body').animate({scrollTop: $('#projects').offset().top}, 1500);
    } 

}
