// Script JavaScrip permettant d'activer ou non la classe 'hamburger-activated'


// on recupére le contenu du menu dans la variable content
var content = document.querySelector('#hamburger-content');
// pour afficher dans le body de sidebar
var sidebarBody = document.querySelector('#hamburger-sidebar-body');

// affichage du menu dans le body
sidebarBody.innerHTML = content.innerHTML;

// on recupere le bouton
var button = document.querySelector('#hamburger-button');
// on recupere l'overlay
var overlay = document.querySelector('#hamburger-overlay');
// on récupére bouton close
// var buttonClose = document.querySelector('#hamburger-button-close');

var activatedClass = 'hamburger-activated';

// on ecoute le click sur le bouton
button.addEventListener('click', function(e) {
    // annule le comportement par defaut
    e.preventDefault();
    // on ajoute la class activatedClass au noeud parent
    this.parentNode.classList.add(activatedClass);
});

// pour fermer le menu quand on clique ailleurs
overlay.addEventListener('click', function(e) {
    e.preventDefault();
    this.parentNode.classList.remove(activatedClass);
});

// buttonClose.addEventListener('click', function(e) {
//     // e.preventDefault();
//     this.parentNode.classList.remove(activatedClass);
// });

button.addEventListener('keydown', function(e) {
    // regarde si le bouton Hamburger a ete cliqué
    if (this.parentNode.classList.contains(activatedClass))
    {
        //  pour annuler l'appui long et gérer l'appui sur Echap   
        if (e.repeat === false && e.which === 27 )
            this.parentNode.classList.remove(activatedClass);
    }
});