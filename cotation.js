
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
    case 8:
    case 9: 
        resultatSwitch.innerHTML = 'insuffisant'; 
        break;
    case 10:
    case 11:
        case 12: 
        resultatSwitch.innerHTML = 'Suffisant'; 
        break;
    case 13:
    case 14: 
    case 15: 
    case 16:
        resultatSwitch.innerHTML = 'Bien'; 
        break;
    case 17:
    case 18:
    case 19:
        resultatSwitch.innerHTML = 'Tres bien'; 
        break;
    case 20: 
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