<?php
 class Conn{
 	private static $server;
 	private static $user;
 	private  static $password;
 	private static $database;
 	protected static function connect(){
 		
 		// self::$database = "u633907236_glori";
 		self::$database = "gloria";

 		// self::$user = "u633907236_glori";
 		self::$user = "root";

 		// self::$server = "mysql.hostinger.in";
 		self::$server = "localhost";

 		// self::$password = "fc2WeY5HY0Mj";
 		self::$password = "";
 		
 		
 		$conn = new mysqli(self::$server,self::$user,self::$password,self::$database);
 		if($conn->connect_error){
 			return $conn->connect_error;
 		}else{
 			return $conn;
 		}
 	}
 }
?>