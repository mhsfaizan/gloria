<section id="add-product" class="mt-4" product-dir ng-controller="productCtrl">
		<div class="container">
			<div class="product-form-container">
				<div class="tabs-container">
					<button class="btn-active" ng-click="showProduct()">Information</button>
					<button ng-click="hideProduct()">Prices</button>
				</div>
				<div class="main-add-product">
					<div class="product-info" ng-show="isShowPro">
						<form name="productForm" class="container-fluid" ng-submit="onProSubmit($event.target)">
							<div class="row">
								<div class="col-md-12">
									<div class="form-group">
										<input type="text" name="" class="form-control" placeholder="Enter Product Name" required ng-model="productName">
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-6">
									<div class="form-group" >
										<select class="form-control" required ng-model="cat" ng-options="category.item for category in categories">
										</select>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<select class="form-control" ng-options="subCat for subCat in cat.subCategory" ng-model="subCat">
										</select>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-12">
									<div class="form-group">
										<textarea class="form-control" placeholder="Enter Product Description" rows="5" ng-model="description" required></textarea>
									</div> 
								</div>
							</div>
							<button class="btn btn-primary" ng-click="hideProduct()" ng-disabled="!productForm.$valid">Next</button>
						</form>

					</div>
					<div class="price table-responsive pl-2 pr-2" ng-hide="isShowPro">
						<form class="text-center" name="sizeForm" ng-submit="onSizeSub($event.target)">
							<table class="table table-bordered">
							    <thead>
							      <tr>
							        <th>SIZE</th>
							        <th>COLOR</th>
							        <th>PRICE</th>
							        <th>DISCOUNT</th>
							      </tr>
							    </thead>
							    <tbody>
							      <tr>
							        <td align="center">
							        	<select class="form-control" ng-model="size">
							        		<option>{{size}}</option>
							        		<option>XL</option>
							        		<option>L</option>
							        		<option>M</option>
							        		<option>S</option>
							        	</select>
							        	
							        </td>
							        <td align="center">
							        	<span>
							        		<input type="text" name="color" placeholder="enter color" class="form-control" ng-model="color" required><br>
								        	<input type="file" name="image" class="form-control" ng-model="images" required  valid-file color-img>
							        	</span>
							        	
							        	<a href="#" class="add-color-row">Add +</a>
							        </td>
							        <td><input type="number" name="" placeholder="Enter Price" class="form-control" ng-model="price" required></td>
							        <td><input type="number" name="" placeholder="Discount" class="form-control" ng-model="discount" required></td>
							      </tr>
							      <tr>
							      	<td colspan="4"><a href="#" class="add-more-size">Add More Rows</a></td>
							      </tr>
							    </tbody>
							</table>
							<button class="btn btn-primary" ng-disabled="!sizeForm.$valid">Upload Product</button>
						</form>
					</div>
				</div>
			</div>
		</div>
</section>