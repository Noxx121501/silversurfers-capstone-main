<?php
//xampp
//start apache
//start MySQL
//localhost/phpMyAdmin

//database -> postdb -> create
//u can drop database
//user acount, root user and password

//initializing variables for connection
$db_server = "localhost";
$db_user = "root";
$db_pass = "";
$db_name = "postdb";

$con_string = mysqli_connect(
  $db_server,
  $db_user,
  $db_pass,
  $db_name
);

try {
  $con_string;
} catch (mysqli_sql_exception) {
  echo "Could not connect.";
}


if ($con_string) {
  echo "You are connected!<br>";
}
