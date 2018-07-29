<section id="login-sec-1" ng-controller="adminLoginCtrl">
	<div class="login-box">
		<div class="login-header">
			<h2 class="text-white">Login</h2>
		</div>
		<div class="login-body">
			<form name="adminLoginForm" ng-submit="onSubmit($event.target)">
				<div class="form-group">
					<span class="input-label">Username:</span>
					<input type="text" name="username" id="usernameid" class="input-box" autocomplete="off" ng-model="username" required>
				</div>
				<div class="form-group">
					<span class="input-label">Password:</span>
					<input type="password" name="pass" id="passid" class="input-box" autocomplete="off" ng-model="password" required>
				</div>
				<div class="login-btn text-center p-2">
					<button class="btn btn-success" ng-disabled="!adminLoginForm.$valid">Login</button>
				</div>
			</form>
		</div>
	</div>
</section>