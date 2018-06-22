function displayResult() {
  // Déclaration des variables
  var yearOfBirth = document.getElementById("yearOfBirth").value;
  var shoeSize = document.getElementById("shoeSize").value;
  var regexShoeSize = /^[1-5][0-9]$/;
  var regexYearOfBirth = /^(?:19|20)[\d]{2}$/;
  // Récupération du résultat de l'opération
  var result = shoeSize * 2;
  result += 5;
  result *= 50;
  result -= yearOfBirth;
  result += 1766;
  // Vérifie que les inputs ont bien les tailles correspondantes
  if((regexShoeSize.test(shoeSize) == true) && (regexYearOfBirth.test(yearOfBirth) == true)) {
    // Affichage du résultat de l'opération
    return result;
  } else {
    // Affiche un message si les 2 integers n'ont pas les tailles correspondantes
    alert('Please enter a number of 2 decimals for the shoes size and a number of 4 decimals for the year of birth');
  }
}
