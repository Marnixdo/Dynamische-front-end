let loggedIn = ["Berat"];

function handleLogin(){
    let naam = document.getElementById('inputNaam').value;
    console.log("U heeft op de button geklikt");
    if (loggedIn.includes(naam)){
        loggedIn.splice(loggedIn.indexOf(naam), 1)
        console.log('U zit al in de lijst');}
        console.log(loggedIn)
        console.log('U bent ingelogd: ' + naam);
        document.getElementById('inputNaam').value = '';
        document.getElementById('melding"').innerText = 'succes';
        }

    document.getElementById("inlogButton").onclick = handleLogin;
    