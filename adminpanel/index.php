<!DOCTYPE html>
<html>
<head>
	<title>Archue</title>
	<base href="/angularjs/archue/dashboardpanel/">
	<meta name="google-signin-client_id" content="214072094810-0t4c1gcf2hmn4e4fgjat4i2a48eenq04.apps.googleusercontent.com">
	<?php include("include/cdn.php");?>
</head>
<body ng-app="myApp" ng-controller="rootController">
 	<div root-dir>
 		<div my-nav ng-if="showNav"></div>
		<ng-view autoScroll="true"></ng-view>
		<?php include("include/footer.php"); ?>
 	</div>
</body>
</html>
