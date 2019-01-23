var modal = document.getElementById('maPopin');


var btn = document.getElementById("monBouton");


var span = document.getElementsByClassName("fermer")[0];

var champ = document.getElementById("mail");

var erreur = true;

//document.getElementById('submit1').disabled=1;

// do {
//   document.getElementById('submit1').disabled=1;
// } while (!verifForm);


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function verifMail(champ)
{
   var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
   if(!regex.test(champ.value))
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
   
}

function surligne(champ, erreur)
{
   if(erreur)
   {
      champ.style.backgroundColor = "#fba";
      document.getElementById("messageErreur").style.display ="block";
   } 
    
   else
   {
      champ.style.backgroundColor = "";
      document.getElementById("messageErreur").style.display ="none";
   }
   
}

function verifForm()
{
   var mailOk = verifMail(champ);
   
   if(mailOk)
   {
      return true;
   }
   else
   {
      return false;
      document.getElementById("messageErreur").style.display ="none";
   }
}