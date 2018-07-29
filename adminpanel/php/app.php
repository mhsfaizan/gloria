<?php
  require_once("db-connect.php");
  class App extends Conn{
  	 private static $conn;
  	 public static function myConnect(){
  	 	self::$conn = self::connect();
  	 }

  	 public static function login($post){
  	 	$username = $post['username'];
  	 	$password = $post['password'];
  	 	$sql = "SELECT admin_id FROM admin WHERE username='$username' AND password='$password'";
  	 	echo json_encode(self::fetchRun($sql));
  	 }
  	 public static function fetchRun($sql){
  	 	$arr = array();
  	 	if($res = self::$conn->query($sql)){
  	 		if($res->num_rows>0){
  	 			$row = $res->fetch_assoc();
  	 			array_push($arr,$row);
  	 			$resp['data'] = $arr;
  	 			$resp['status'] = 1;
  	 		}
  	 		else{
  	 			$resp['data'] = "No rows";
  	 			$resp['status'] = 2;
  	 		}
  	 	}
  	 	else{
  	 		$resp['data'] = "query Run";
  	 		$resp['status'] = 3;
  	 	}
  	 	return $resp;
  	 }
  }

  App::myConnect();
?>