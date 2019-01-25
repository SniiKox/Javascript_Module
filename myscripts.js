var modal = document.getElementById('maPopin');

var btn = document.getElementById("monBouton");

var span = document.getElementsByClassName("fermer")[0];

var champ = document.getElementById("mail");

var pwd = document.getElementById("pwd");

var erreur = true;


btn.addEventListener("click", function() {
  modal.style.display = "block";
});

span.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

champ.addEventListener("blur", verifMail);

function verifMail()
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
      champ.style.backgroundColor = "#98f297";
      document.getElementById("messageErreur").style.display ="none";
   }
}


pwd.addEventListener("blur", verifPwd);

function verifPwd()
{

   if (pwd.value == "")
   {
      surligne2(pwd, true);
      return false;
   }
   else
   {
      surligne2(pwd, false);
      return true;
   }
   
}

function surligne2(pwd, erreur)
{
if(erreur)
   {
      pwd.style.backgroundColor = "#fba";
      document.getElementById("messageErreurPwd").style.display ="block";
   } 
    
   else
   {
      pwd.style.backgroundColor = "#98f297";
      document.getElementById("messageErreurPwd").style.display ="none";
   }
 }

 champ.addEventListener("keyup", verifForm);
 pwd.addEventListener("keyup", verifForm);

function verifForm()
{
   var mailOk = verifMail(champ);
   var passwordOK = verifPwd(pwd);

   if (mailOk && passwordOK) 
   {
      
      document.getElementById('submit1').disabled = 0;
      return true;
      //document.getElementById("messageErreur").style.display = "none";

   } 
   else 
   {
      document.getElementById('submit1').disabled = 1;
      return false;
   }
}

// $(document).ready(function(){
	 
//   $("#submit1").click(function(e){
//     e.preventDefault();
 
//     $.post(
//       'connexion.php',
//       {
//         username : $("#mail").val(),
//         password : $("#pwd").val()
//       },
 
//       function(data){
        

//         if(data == 'Success'){
 
//            $("#resultat").html("<p>Vous avez été connecté avec succès !</p>");
//         }
//         else{
 
//            $("#resultat").html("<p>Erreur lors de la connexion...</p>");
//         }
     
//       },
//       'text'
//      );
//   });
// });