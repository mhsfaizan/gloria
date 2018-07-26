<?php
	require_once("db-connect.php");
	class App extends Conn{
		private static $conn;
		public static function setConnect(){
			self::$conn = self::connect();
		} 
		public static function signUp($post){
			$name = self::$conn->real_escape_string($post['name']);
			$email = self::$conn->real_escape_string($post['email']);
			$mobileno = self::$conn->real_escape_string($post['mobileno']);
			$country = self::$conn->real_escape_string($post['country']);
			$city = self::$conn->real_escape_string($post['city']);
			$profession = self::$conn->real_escape_string($post['profession']);
			$password = self::$conn->real_escape_string($post['password']);
			$is_interest = self::$conn->real_escape_string($post['isInterest']);
			$email_me = self::$conn->real_escape_string($post['emailMe']);
			$sql = "INSERT INTO users(name,email,mobileno,country,city,profession,password,is_interest,email_me) VALUES('$name','$email','$mobileno','$country','$city','$profession','$password','$is_interest','$email_me')";
			if(self::$conn->query($sql)){
				$resp['status'] = "ok";
				$resp['message'] = "succesfully Inserted";
				echo json_encode($resp);
			}
			else{
				$resp['status'] = "ok";
				$resp['message'] = self::$conn->error;
				echo json_encode($resp);
			}
		}
		public static function  runQuery($sql){
			$arr = array();
			if($res = self::$conn->query($sql)){
				if($res->num_rows>0){
					$row = $res->Fetch_assoc();
					array_push($arr, $row);
					$resp['message'] = $arr;
					$resp['status'] = 2;
				} 
				else{
					$resp['message'] = "NO rows";
					$resp['status'] = 3;
				}
			}
			else{
				$resp['message'] = self::$conn->error;
				$resp['status'] = 4;
			}
			return $resp;
		}
		public static function login($post){
			if($post['username']=="undefined"){
				$resp['message'] = "Please Enter the Username";
				$resp['status'] = 1;
				echo json_encode($resp);
			}
			else if($post['password']=="undefined"){
				$resp['message'] = "Please Enter the Password";
				$resp['status'] = 1;
				echo json_encode($resp);
			}
			else{
				$username = $post['username'];
				$password = $post['password'];
				$sql = "SELECT user_id,name,email FROM user WHERE email='$username' AND password='$password'";
				echo json_encode(self::runQuery($sql));
			}
		}
	}
	App::setConnect();
?>

