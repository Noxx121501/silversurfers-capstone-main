<?php
include("database.php");

$user_name = "Nicole";
$user_surname = "Abduraman";
$user_comment = "hello guys";


$sql_insert = "INSERT INTO comments (user_name, user_surname, user_comment) VALUES ('$user_name', '$user_surname', '$user_comment')";
$sql_select = "SELECT * FROM comments WHERE user_name = 'Bernadette'";

/*
    try {
      mysqli_query($con_string, $sql_insert);
      echo "Comment submitted!";
    } catch (mysqli_sql_exception) {
      echo "Error posting comment. Try again.";
    }
    */

$result = mysqli_query($con_string, $sql_select);
if (mysqli_num_rows($result) > 0) {
  $row = mysqli_fetch_assoc($result);
  echo $row["id"] . "<br>";
  echo $row["user_name"] . "<br>";
  echo $row["user_surname"] . "<br>";
  echo $row["user_comment"] . "<br>";
}

mysqli_close($con_string);
