// 1. Calcul de taxe (17%)
function calculerTaxe() {
    let prix = document.getElementById("prix").value;
    let taxe = prix * 0.17;
    document.getElementById("resultatTaxe").innerText =
        "Taxe: " + taxe + " | Total: " + (parseFloat(prix) + taxe);
}

// 2. Afficher la date

function afficherDate() {
    let date = new Date();
    document.getElementById("date").innerText = date.toLocaleDateString();
}


// 3. Vérification dans un tableau
function verifierNombre() {
    let tableau = [1, 2, 3, 4, 5, 10, 20];
    let nombre = parseInt(document.getElementById("nombre").value);

    let existe = tableau.includes(nombre);

    document.getElementById("resultatArray").innerText =
        existe ? "Le nombre existe ✔️" : "Le nombre n'existe pas ❌";
}