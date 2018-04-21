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

 if($obj['email']!="")
	{
	
	$result= $conn->query("SELECT * FROM users where email='$email'");
	
	
		if($result->num_rows>0){
			echo json_encode('Email already exist');	 		
		}
		else
		{		
		   $add = $conn->query("insert into users (email,password) values('$email','$password')");
			
			if($add){
				echo  json_encode('User Registered Successfully');
			}
			else{
			   echo json_encode('Check internet connection');	
			}
				
		}
	}
	
	else{
	  echo json_encode('Try Again');
	}

  $conn->close();
?>