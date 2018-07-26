<?php
	require_once("db-connect.php");
	class App extends Conn{
		private static $conn;
		public static function setConnect(){
			self::$conn = self::connect();
		} 
		
		public static function  runFetchQuery($sql){
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
		public static function executeQuery($sql){
			if(self::$conn->query($sql)){
				$resp['message'] = "Succesfully executed";
				$resp['status'] = 1;
			}
			else{
				$resp['message'] = "Query Error";
				$resp['status'] = 2;
			}
			return $resp;
		}
		public static function signUp($post){
			if($post['name']==""){
				$resp['message'] = "Enter Name Please";
				$resp['status'] = 2;
				echo json_encode($resp);
			}
			else if($post['email']==""){
				$resp['message'] = "Enter Email";
				$resp['status'] = 2;
				echo json_encode($resp);
			}
			else if($post['contactno']==""){
				$resp['message'] = "Enter contactno";
				$resp['status'] = 2;
				echo json_encode($resp);

			}
			else if($post['password']==""){
				$resp['password'] = "Enter Password";
				$resp['status'] = 2;
				echo json_encode($resp);

			}
			else{
				$name = self::$conn->real_escape_string($post['name']);
				$email = self::$conn->real_escape_string($post['email']);
				$contactno = self::$conn->real_escape_string($post['contactno']);
				$password = self::$conn->real_escape_string($post['password']);
				$sql = "INSERT INTO user(name,email,contactno,password) VALUES('$name','$email','$contactno','$password')";
				echo json_encode(self::executeQuery($sql));
			}
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
				echo json_encode(self::runFetchQuery($sql));
			}
		}
	}
	App::setConnect();
?>

