<?php
 class Conn{
 	private static $server;
 	private static $user;
 	private  static $password;
 	private static $database;
 	protected static function connect(){
 		self::$server = "localhost";
 		// self::$user = "u633907236_user";
 		self::$user = "root";
 		// self::$password = "Proton@123";
 		self::$password = "";
 		// self::$database = "u633907236_arch";
 		self::$database = "gloria";
 		$conn = new mysqli(self::$server,self::$user,self::$password,self::$database);
 		if($conn->connect_error){
 			return $conn->connect_error;
 		}else{
 			return $conn;
 		}
 	}
 }
?>