/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function faqDropdwn1() {
  document.getElementById("faqDropdwn1").classList.toggle("show");
}
function faqDropdwn2() {
  document.getElementById("faqDropdwn2").classList.toggle("show");
}
function faqDropdwn3() {
  document.getElementById("faqDropdwn3").classList.toggle("show");
}
function faqDropdwn4() {
  document.getElementById("faqDropdwn4").classList.toggle("show");
}
function faqDropdwn5() {
  document.getElementById("faqDropdwn5").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("faq-dropdwn-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
