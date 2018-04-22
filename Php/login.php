<?php 
$host = "localhost";
$database = "oquotes";
$usern = "root";
$pass ="";

 $conn = new mysqli($host, $usern, $pass, $database);
 $json = file_get_contents('php://input');  
 
 $obj = json_decode($json,true);
 $email= $obj['email'];
 $password = $obj['password'];
 
 if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
 } 

 if($obj['email']!=""){	
	
	$result= $conn->query("SELECT * FROM users where email='$email' and password='$password'");
	
		if($result->num_rows==0){
			echo json_encode('Wrong Details');				
		}
		else{		
			$row = $result->fetch_assoc();
			echo json_encode($row);
		}
	}	
	else{
	  echo json_encode('Try Again');
	}

  $conn->close();
?>