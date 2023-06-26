function myFunctionLang() {
  document.getElementById("myDropdownlang").classList.toggle("showlang");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtnlang')) {
    var dropdowns = document.getElementsByClassName("dropdown-contentlang");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showlang')) {
        openDropdown.classList.remove('showlang');
      }
    }
  }
}