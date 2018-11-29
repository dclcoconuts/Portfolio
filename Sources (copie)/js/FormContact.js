var vNom;
var vPrenom;
var vDateNaissance;
var vEmail;

window.onload = function() {
    document.forms['formulaire'].reset();
}

function verifNom (){
    vNom = document.forms["formulaire"].elements["nom"].value;
    console.log(vNom); 
}

function verifPrenom (){
    vPrenom = document.forms["formulaire"].elements["prenom"].value;
    console.log(vPrenom); 
}

function verifDateNaissance (){
    vDateNaissance = document.forms["formulaire"].elements["dateNaissance"].value;
    console.log(vDateNaissance); 
    var spt = vDateNaissance.split('-');
    console.log(spt);
    if (spt[0]+18 > 2018) {
            // // document.forms["formulaire"].elements["dateNaissance"].value = "";
            // // document.getElementById(dateNaissance).focus();
            // dateNaissance.setCustomValidity("Vous êtes mineur !.");
            // console.log("Vous êtes mineurs")
    } 
}

// Verification de nom //
function verificationCaracteresNom(event) {
            
    var keyCode = event.which ? event.which : event.keyCode;
    var touche = String.fromCharCode(keyCode);
    var caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-';
    var champNom = document.getElementById('nom');
                    
    if(caracteres.indexOf(touche) >= 0) {
        champNom.value += touche;
    }                   
}

// Verification de prenom //
function verificationCaracteresPrenom(event) {
    var keyCode = event.which ? event.which : event.keyCode;
    var touche = String.fromCharCode(keyCode);
    var caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-';
    var champPrenom = document.getElementById('prenom');
        
    if (caracteres.indexOf(touche)>= 0) {
        champPrenom.value += touche;
    }
};

// Verification de adresse email//
function verificationCaracteresEmail(event) {
    var keyCode = event.which ? event.which : event.keyCode;
    var touche = String.fromCharCode(keyCode);
    var caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_@';
    var champEmail = document.getElementById('email');
        
    if (caracteres.indexOf(touche)>= 0) {
        champEmail.value += touche;
    }
};


// Verification de la date de naissance //
function verificationDateDeNaissance() {
    var dateDeNaissance = parseFloat(document.forms["formulaire"].elements["dateDeNaissance"].value);
    if (dateDeNaissance >= 2001) {
        document.getElementById("dateDeNaissanceChamp").style.backgroundColor="red";
    } else { 
        document.getElementById("dateDeNaissanceChamp").style.backgroundColor="green";
    }
};
        

// Limité le nombre de caractère d'un message //
function compteurNombreCaracteres() {
    var maxCaractere = 255;
    var caracteresActuelle = document.forms["formulaire"].elements["message"].value.length;
    console.log(caracteresActuelle);
    var caracteresRestant = 255 - caracteresActuelle;
    document.getElementById("comptCar").value="caractères restants "+caracteresRestant+"/255";
    console.log(document.getElementById("comptCar"));  
        if (caracteresActuelle >= maxCaractere) {
            document.getElementById("message").style.backgroundColor="red";
        } else {
            document.getElementById("message").style.backgroundColor="white";
        
        }
};