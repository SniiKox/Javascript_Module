<?php
     
    $username = "guillaume.nico@bob.fr";
    $password = "salut";
 
    if( isset($_POST['mail']) && isset($_POST['pwd']) ){
 
        if($_POST['mail'] == $username && $_POST['pwd'] == $password){ // Si les infos correspondent...
            session_start();
            $_SESSION['user'] = $username;
            echo "Success";    
        }
        else{ // Sinon
            echo "Failed";
        }
    }
?>