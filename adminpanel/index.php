<!DOCTYPE html>
<html>
<head>
	<title>Gloria</title>
	<base href="/gloria/adminpanel/">
	<?php include("include/cdn.php");?>
</head>
<body ng-app="myApp">
 	<div >
 		<div my-nav ng-if="showNav"></div>
		<ng-view autoScroll="true"></ng-view>
		<?php include("include/footer.php"); ?>
 	</div>
</body>
</html>
