<?php
$passwords = array("name1@gmail.com"   =>"pass1",
                   "name2@gmail.com"   =>"pass2");
if(isset($_POST["submit1"])){

if (isset($passwords[$_POST["username"]]) && $passwords[$_POST["username"]] == $_POST["password"]){
   header('Location:forum.html');
   echo "<H2>Login successful.</H2>";
}else{
  header('Location:index.php');

}
}

?>
