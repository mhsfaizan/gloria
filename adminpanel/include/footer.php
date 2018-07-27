<section id="image-viewer" ng-if="isShowViewImage">
	<div class="my-image-container" ng-controller="fetchImageController" image-viewer>
		<div class="images">
			<img ng-src="../uploads/{{images[0]}}" class="img-fluid">
			<div class="small-images-view" >
				<img ng-src="../uploads/{{image}}" class="img-fluid" ng-repeat="image in images track by $index">
			</div>
			<button ng-click="upSetImageView()" class="btn btn-danger">Close</button>
		</div>
	</div>
</section>
<script type="text/javascript" src="js/controller.js"></script>
<script type="text/javascript" src="js/directive.js"></script>
<script type="text/javascript" src="js/route.js"></script>
<script type="text/javascript" src="js/fetch-controller.js"></script>
<script type="text/javascript" src="js/fetch-service.js"></script>
<script type="text/javascript" src="js/service.js"></script>
<!-- <script type="text/javascript" src="js/custom.js"></script> -->
<!-- <script type="text/javascript" src="js/service.js"></script> -->
<!-- <script type="text/javascript" src="js/upload-controller.js"></script> -->
<script type="text/javascript" src="js/upload-service.js"></script>
<!-- <script type="text/javascript" src="js/upload-directive.js"></script> -->