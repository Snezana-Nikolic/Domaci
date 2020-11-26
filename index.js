
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("logo2").style.display = "block";
    document.getElementById("logo1").style.display = "none";
  } else {
    document.getElementById("logo2").style.display = "none";
    document.getElementById("logo1").style.display = "block";
  }
}

new WOW().init();
