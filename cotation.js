const resultatSwitch = document.getElementById('resultat_switch');
const cotation = parseInt(prompt('Encoder une cotation de 1 a 20'));
switch (cotation) {
    case 1: 
    case 2: 
    case 3: 
    case 4: 
    case 5: 
    case 6: 
    case 7: 

        resultatSwitch.innerHTML = 'Echec'; 
        break;
    case 8-9: 
        resultatSwitch.innerHTML = 'insuffisant'; 
        break;
    case 3: 
        resultatSwitch.innerHTML = 'Suffisant'; 
        break;
    case 4: 
        resultatSwitch.innerHTML = 'Bien'; 
        break;
    case 5: 
        resultatSwitch.innerHTML = 'Tres bien'; 
        break;
    case 6: 
        resultatSwitch.innerHTML = 'Excellent'; 
        break;

    default: 
        // Les accolades sont optionnelles
        if(isNaN(cotation)) 
            resultatSwitch.innerHTML = 'BOUMMMMMMMMMMMM!'; 
        else 
            resultatSwitch.innerHTML = 'Valeur en dehors du scope !'; 
        break;
}