const isokboolean = false;
const anneebichamps = document.getElementById('anneebis');
const anneebi = parseInt(prompt('Encoder une annee'));

if (anneebi%2==0 && anneebi%400!=0) {
    if(anneebi%100!=0){isokboolean=true;}}

    if (isokboolean=true) {anneebichamps.innerHTML"annee bi" } else {anneebichamps.innerHTML"annee pas bi"};
