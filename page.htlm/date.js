const dateid = document.getElementById('dateid');

const dateStrîng = prompt('Encoder une date DD-MM-AAAA');
if (dateStrîng.length==10) {
    const jour = dateStrîng.substring(0,2);
    const mois = dateStrîng.substring(3,2);
    const annee = dateStrîng.substring(6,4);
    const d1 = new date(parseInt(annee),parseInt(mois),parseInt(jour));
    dateid.innerHTML = d1;


}
