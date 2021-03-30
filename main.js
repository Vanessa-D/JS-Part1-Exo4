// Création d'une fonction qui permet de récupérer et afficher les valeurs saisies dans les input
function myFunction() {
    let lastname =document.getElementById("inputName").value;
    let firstname =document.getElementById("inputPrenom").value;
    let city =document.getElementById("inputVille").value;
    // Condition : si l'un des input n'est pas rempli et n'est pas un nombre, affiche message d'erreur
    if(isNaN(lastname) && isNaN(firstname) && isNaN(city)) {
        alert("Nom : " + lastname + "\n" + "Prénom : " + firstname + "\n" + "Ville : " + city);
    } else {
        alert("Try again");
    }
}

// Autre façon de récupérer les valeurs

// var exemple = document.getElementsByName("test")[0].value
// var exemple = document.getElementsByName("test")[1].value
// var exemple = document.getElementsByName("test")[2].value

// --> "test" étant le name pour chaque input
