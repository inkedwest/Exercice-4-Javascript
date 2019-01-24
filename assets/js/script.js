// on crée une fonction displayInformations que l'on va déclencher au clic pour recuperer et afficher la valeur de nos "inputs"
function displayInformations(){
  // Ici je declare mon regex qui va permettre de securiser le code
  var regexName = /^[a-zA-Z ]+$/;
  // dans le document HTML (document) tu recupere l'element grace à son ID =>(getElementById) ('ex :lastname)
  // ici on ne recupere que la valeur de l'element grace à .value
  // on stocke la valeur recuperée dans une variable (avec var etc ...)
  var lastname = document.getElementById('lastname').value;
  var firstname = document.getElementById('firstname').value;
  var city = document.getElementById('city').value;
  // avec if je declare la condition qui permettra de retourner un message selon ce que j'ai entré dans les cases
  if (lastname.match(regexName) && firstname.match(regexName) && city.match(regexName)){
    alert('Nom : ' + lastname + '\nPrénom : ' + firstname + '\nVille : ' + city);
  // Sinon la boite de dialogue affichera que ce n'est pas autorisé
  }else {
    alert('Ceci n'est pas autorisé');
  }
}
