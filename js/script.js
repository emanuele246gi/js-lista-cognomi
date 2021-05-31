// Prompt email
var email = prompt ('Inserisci qui la tua email');

var listaemail = ["neri@gmail.com", "bianchi@gmail.com", "rossi@gmail.com", "verdi@gmail.com", "gialli@gmail.com"];

for (var i = 0; i < 4; i++){
    if (email == listaemail[i]){
        var controlli = "convalidato";
    }
}

if (controlli == "convalidato"){

    alert("Benvenuto nel club!");

} else {

    alert("Tu chi sei?");

}

// // Prompt cognome
// var cognome = prompt ('Inserisci qui il tuo cognome');

// var listacognomi = ["Neri", "Bianchi", "Rossi", "Verdi", "Gialli"];



// // controlli per l'accesso
