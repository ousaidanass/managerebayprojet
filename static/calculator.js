'use strict';
let prixvente = document.getElementById('prixvente');
let fraislivraisonme = document.getElementById('fraislivraisonme');
let coutarticle = document.getElementById('coutarticle');
let fraislivraison = document.getElementById('fraislivraison');
let quantitvendu = document.getElementById('quantitvendu');
let fraiss = document.getElementById('fraiss');
let benefise = document.getElementById('benefise');
let booton = document.getElementById('booton');

function VersementEbay(){
    let pourcentagecalc1 = (parseFloat(prixvente.value) + parseFloat(fraislivraisonme.value)) * 10;
    let pourcentagecalc =  parseFloat(pourcentagecalc1) / 100;
    let versementebay = parseFloat(prixvente.value) + parseFloat(fraislivraisonme.value) - pourcentagecalc - 0.35;
    return versementebay;
}

booton.onclick = function(){
    let benefisse = (VersementEbay() - (parseFloat(coutarticle.value) + parseFloat(fraislivraison.value))) * parseFloat(quantitvendu.value);
    benefise.innerHTML = 'BÉNÉFICE TOTAL with Color: ' + '<span style="color: red>"' + parseFloat(benefisse).toFixed(3) + '</span>';
}