var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbarWrapper").style.top = "0";
  } else {
    document.getElementById("navbarWrapper").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
};
