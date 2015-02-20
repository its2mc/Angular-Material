var app = angular.module('alkiraApp', ['ngMaterial']);
	app.config(function($mdThemingProvider) {
		$mdThemingProvider.theme('default')
		.primaryPalette('teal')
		.accentPalette('grey')
		.backgroundPalette('grey');
	});

app.controller('AppCtrl', function($scope, $timeout, $mdSidenav, $log) {
	$scope.activePageNo = 1;
	$scope.pages = [
	    {menuTitle : 'Home',url : 'views/home.html'},
		{menuTitle : 'Contact Us',url : 'views/contactus.html'},
		{menuTitle : 'About Us',url : 'views/aboutus.html'}
	];
	$scope.page = $scope.pages[$scope.activePageNo];

	$scope.toggleLeft = function() {
	    $mdSidenav('left').toggle()
	    	.then(function(){
	    		$log.debug("toggle left is done");
		});
	};	  
	
	$scope.nextPage = function(){
		if ($scope.activePageNo < ($scope.pages.length-1)){
			$scope.page = $scope.pages[++$scope.activePageNo];
			$log.debug("less than 2");
		}else {
			$scope.activePageNo = 0;
			$scope.page = $scope.pages[$scope.activePageNo];
			$log.debug("greater than or equal to 2");
		} 
		$log.debug($scope.page);
	};
});

app.controller('LeftCtrl', function($scope, $timeout, $mdSidenav, $log) {
		  $scope.close = function() {
		    $mdSidenav('left').close()
		                      .then(function(){
		                        $log.debug("close LEFT is done");
		                      });
		  };
});

app.controller("imageGallery",function($scope){

	$scope.images = ["../res/img/galleryImg1.jpg","../res/img/galleryImg2.jpg","../res/img/galleryImg3.jpg"];

	var count = 0;
	$scope.currentIndex = 0;

	$scope.setCurrentSlideIndex = function (index) {
	    $scope.currentIndex = index;
	};

	$scope.isCurrentSlideIndex = function (index) {
		return $scope.currentIndex === index;
	};

	$scope.nextSlide = function () {
		$scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.images.length - 1;
	};
	

});

app.controller("Buttons",function($scope,$http,$mdDialog){
	$scope.textShow = false;
	$scope.alertHide = true;
	$scope.alertTitle = "Sample Alert Title.";
	$scope.alertMsg = "This is a sample Alert Message.";
	$scope.label = "";
	$scope.xmlText = "Click to download xml";
	$scope.jsonText = "Click to download json";
	$scope.toggleAlert = function() {
		$scope.alertHide = ($scope.alertHide == true) ? false : true;
	};
	$scope.toggleText = function(){
		$scope.textShow = ($scope.textShow == true) ? false:true ;
	};
	$scope.getJSON = function(){
		$http.get('../res/dataSource/dataJSON.json').success(function(data) {
		    $scope.jsonText = data;
	    });
	};
	$scope.getXML = function(){
		$http.get('../res/dataSource/dataXML.xml').success(function(data) {
			$scope.xmlText = data;
	    });
	};
});

app.controller("DOMControl",function($scope){
	$scope.btnShow = true;
	$scope.styleVar = "";
	$scope.bckgndColor = "";
	$scope.chngBackgroundColor = function(){
		$scope.bckgndColor = ($scope.bckgndColor == "") ? "background-color: red": "";
		};
	$scope.removeBtn = function(){
		$scope.btnShow = false;
		};
	$scope.restoreBtn = function(){
		$scope.btnShow = true;
		};
	$scope.chngTxtColor = function(){
		$scope.styleVar = ($scope.styleVar == "color:green") ? "color:red" : "color:green" ;
		};
});