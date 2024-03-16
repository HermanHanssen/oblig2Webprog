

let film;
let antall;
let feilAntall;
let fornavn;
let feilFnavn;
let etternavn;
let feilEnavn;
let telefonnummer;
let feilTlf;
let epost;
let feilEpost;

let kjopBilett;
let bilettListen;
let slettBilettene;


const start = "<table><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>";

document.addEventListener("DOMContentLoaded", function (){

    film = document.getElementById("film");
    antall = document.getElementById("antall");
    feilAntall = document.getElementById("feilAntall");
    fornavn = document.getElementById("fornavn");
    feilFnavn = document.getElementById("feilFnavn");
    etternavn =document.getElementById("etternavn");
    feilEnavn = document.getElementById("feilEnavn");
    telefonnummer =document.getElementById("telefonnummer");
    feilTlf = document.getElementById("feilTlf");
    epost = document.getElementById("epost");
    feilEpost = document.getElementById("feilEpost");

    kjopBilett = document.getElementById("kjopBiletter");
    bilettListen = document.getElementById("bilettListen");
    slettBilettene = document.getElementById("slettBilettene");
    console.log("DOMContentLoaded kjører!");

    let ut = "<table class='table table-dark'><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th></tr></table>";
    bilettListen.innerHTML=ut;

    kjopBilett.addEventListener("click", kjopBilettFunksjon);
    slettBilettene.addEventListener("click", slettBiletter);
    hentBilletter();




});

function bokstavSjekk(input){
    return !/[^a-âA-Å]/.test(input);
}

function kjopBilettFunksjon(){
    console.log("Bilettkjøpe-funksjonen kjører")

    feilAntall.innerHTML ="";
    feilFnavn.innerHTML="";
    feilEnavn.innerHTML="";
    feilTlf.innerHTML="";
    feilEpost.innerHTML="";

    let valgtFilm = film.value;
    let valgtIntAntall = parseInt(antall.value);
    let valgtStringAntall = antall.value;
    let valgtFornavn = fornavn.value;
    let valgtEtternavn = etternavn.value;
    let valgtIntTLF = parseInt(telefonnummer.value);
    let valgtStringTLF = telefonnummer.value;
    let valgtEpost = epost.value;

    let feilmelding = false;

    if(isNaN(valgtIntAntall) || !valgtStringAntall || valgtStringAntall.length>2){
        feilAntall.innerHTML="Må skrive noe i antall";
        feilmelding = true;
    }
    else if (valgtIntAntall<1){
        feilAntall.innerHTML="Antall biletter må være minst 1";
        feilmelding = true;
    }

    if(!valgtFornavn || !bokstavSjekk(valgtFornavn)){
        feilFnavn.innerHTML="Må skrive noe som fornavn";
        feilmelding = true;
    }

    if(!valgtEtternavn || !bokstavSjekk(valgtEtternavn)){
        feilEnavn.innerHTML="Må skrive noe som etternavn";
        feilmelding = true;
    }

    if(isNaN(valgtIntTLF) || !valgtStringTLF || valgtStringTLF.length !==8){
        feilTlf.innerHTML="Må skrive noe inn i telefonnummer";
        feilmelding = true;
    }

    if(!valgtEpost){
        feilEpost.innerHTML="Må skrive noe inn i epost";
        feilmelding = true;
    }

    if(!feilmelding){
        console.log("ingen feil i input");
        addBilett(valgtFilm,valgtStringAntall,valgtFornavn,valgtEtternavn,valgtStringTLF,valgtEpost)
    }
    else{
        console.log("Error");
    }

}

const liste =[];

function addBilett(film, antall, fNavn, eNavn, tlf, epost){

    let billett ={
        movie: film,
        amount: antall,
        firstname: fNavn,
        surname: eNavn,
        telephone: tlf,
        email: epost,
    }

    /*
    liste.push(bilett);
    console.log(liste);
    let utString = " "
    for(let i=0; i<liste.length; i++){
        utString +=  liste[i].movie + " "+liste[i].amount + " "+liste[i].firstname
            +" "+ liste[i].surname + " "+liste[i].telephone +" "+liste[i].email;
        utString += "<br>";

    }
    */

    $.post("/lagre",billett, function(){
        hentBilletter();
    })

}

function hentBilletter(){
    console.log("Hentefunksjonen kjører:)")
    $.get("/hentBiletter", function(data){
        formatering(data);

    });
}

function formatering(billetter){
    console.log("formatering kjører")

    let utString = "<table class='table table-dark'><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>";

    for (const b of billetter) {

        utString += "<tr><td>" + b.movie + "</td><td>" + b.amount + "</td><td>" + b.firstname + "</td><td>"
            + b.surname + "</td><td>" + b.telephone + "</td><td>" + b.email + "</td></tr>";

    }

        utString +="</table>";

        $("#bilettListen").html(utString);



}

function slettBiletter(){
    $.get("/slettBiletter",function(){
        hentBilletter();
    })
    }


