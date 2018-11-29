// Gére l'ouverture du menu Hamburger et le changement de la forme du menu

var btn = document.querySelector('.toggle_btn');
var nav = document.querySelector('.nav');

btn.onclick = function(){
    nav.classList.toggle('nav_open');
    btn.classList.toggle('change');
};

// Gére la fermeture du menu quand un lien a été cliqué ou si on clique à côté
window.onclick = function(event) {
    if (!event.target.matches('.toggle_btn')) {
      var dropdowns = document.getElementsByClassName('menu_nav');
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('nav_open')) {
            nav.classList.toggle('nav_open');
            btn.classList.toggle('change');
        }
      }
    }
  }

  
