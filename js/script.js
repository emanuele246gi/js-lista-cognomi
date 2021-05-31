// Prompt email
var email = prompt ('Inserisci qui la tua email');

var listaemail = ["neri@gmail.com", "bianchi@gmail.com", "rossi@gmail.com", "verdi@gmail.com", "gialli@gmail.com"];

// controlli per l'accesso
for (var i = 0; i < 4; i++){
    if (email == listaemail[i]){
        var controlliuno = "convalidatouno";
    }
}

if (controlliuno == "convalidatouno"){

    alert("Email confermata!");

} else {

    alert("Email non riconosciuta.");

}

// Prompt cognome
var cognome = prompt ('Inserisci qui il tuo cognome');

var listacognomi = ["Neri", "Bianchi", "Rossi", "Verdi", "Gialli"];

// controlli per l'accesso
for (var i = 0; i < 4; i++){
    if (cognome == listacognomi[i]){
        var controllidue = "convalidatodue";
    }
}

if (controllidue == "convalidatodue"){

    alert("Benvenuto nel club!");

} else {

    alert("Tu chi sei?");

}

// Lista stesa
listacognomi.sort();
document.getElementById("testo").innerHTML = listacognomi;