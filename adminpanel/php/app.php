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
     public static function executeQuery($sql){
        if($res = self::$conn->query($sql)){
            $resp['data'] = "SUCCESFULLY INSERTED";
            $resp['status'] = 1;   
        }
        else{
          $resp['data'] = self::$conn->error;
          $resp['status'] = 2;
        }
        return $resp;
     }
     public static function uploadImages($file){
        /* Location */
        $location = '../../productsimg/';

        // Count total files
        $countfiles = count($file['name']);
        // Looping all files
        for ( $i = 0;$i < $countfiles;$i++ ){
             $filename = str_replace(" ","_",$file['name'][$i]);
            // Upload file    
            move_uploaded_file($file['tmp_name'][$i],$location.$filename);      
            $file_arr[] = $filename;
        }
        return implode(",",$file_arr);
      }
     public static function uploadSize($post,$file){
      if($post['proId']!="undefined"){
        $images = self::uploadImages($file);
        $size = $post['size'];
        $color = $post['color'];
        $price = $post['price'];
        $productId = $post['proId'];
        $discount = $post['discount'];
        $sql = "INSERT INTO size(sizename,color,images,price,discount,product_id) VALUES('$size','$color','$images','$price','$discount',$productId)";
        echo json_encode(self::executeQuery($sql));
      }
      else{
        $resp['status'] = 3;
        $resp['data'] = "First Upload The Project";
        echo json_encode($resp);
      }
     }
     public static function uploadProduct($post){
       $productname = $post['productName'];
       $cat = $post['cat'];
       $subcat = $post['subCat'];
       $description = $post['description'];
       $sql = "INSERT INTO products(product_name,category,sub_category,description) VALUES('$productname','$cat','$subcat','$description')";
       $response = self::executeQuery($sql);
       if($response['status']==1){
         $sql1 = "SELECT  product_id FROM products ORDER BY product_id DESC limit 1";
         $res = self::$conn->query($sql1);
         $resp['data'] = $res->fetch_assoc();
         $resp['status'] = 1;
       }
       else{
         $resp['data'] = "Not Inserted";
         $resp['status'] = 2;
       }
       echo json_encode($resp);
     } 
  }

  App::myConnect();
?>