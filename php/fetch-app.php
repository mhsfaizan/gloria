<?php
  require_once("db-connect.php");
  class FetchApp extends Conn{
  	private static $conn;
	public static function setConnect(){
		self::$conn = self::connect();
	} 
	public static function fetchProducts(){
		$sql = "SELECT * FROM products ORDER BY product_id DESC";
		$arr = array();
		$arr2 = array();
		if($res = self::$conn->query($sql)){
			while($row=$res->fetch_assoc()){
				$proObj["product"] = $row;
				$id = $row['product_id'];
				$sql2 = "SELECT * FROM size WHERE product_id = $id";
				if($res1 = self::$conn->query($sql2)){
					while($row2 = $res1->fetch_assoc()){
						array_push($arr, $row2);
					}
					$proObj['sizes'] = $arr;
					$arr = array();
					array_push($arr2,$proObj);
					$resp['data'] = $arr2;
					$resp['status'] = 1;
				}
				else{
					$resp['data'] = self::$conn->error;
					$resp['status'] = 3;
				}
			}
		}
		else{
			$resp['data'] = self::$conn->error;
			$resp['status'] = 3;
		}
		echo json_encode($resp);
	}
  }
  FetchApp::setConnect();
?>