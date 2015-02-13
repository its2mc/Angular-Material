var app = angular.module('alkiraApp', ['ngMaterial'])

app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
	  $scope.toggleSidenav = function(menuId) {
	    $mdSidenav(menuId).toggle();
	  };
}]);

app.controller("AlertDemoCtrl",function  ($scope) {
	  $scope.alerts = [
	    { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
	    { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
	  ];

	  $scope.addAlert = function() {
	    $scope.alerts.push({type: 'success' , msg: 'Another alert!'});
	  };

	  $scope.closeAlert = function(index) {
	    $scope.alerts.splice(index, 1);
	  };
});
app.controller("interactiveLogos",function($scope){
	$scope.styles = ["img-circle img-responsive shadow-z-2 float-img","img-circle img-responsive shadow-z-3 float-img","img-circle img-responsive shadow-z-4 float-img","img-circle img-responsive shadow-z-5 float-img"];

	$scope.hoverIn = function(){
		
		};
	$scope.hoverOut = function(){
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
	$scope.alertTitle = "Sample Alert Title.";
	$scope.alertMsg = "This is a sample Alert Message.";
	$scope.label = "";
	$scope.xmlText = "Click to download xml";
	$scope.jsonText = "Click to download json";
	$scope.showAlert = function(ev) {
	    $mdDialog.show(
	      $mdDialog.alert()
	        .title($scope.alertTitle)
	        .content($scope.alertMsg)
	        .ariaLabel($scope.label)
	        .ok('OK')
	        .targetEvent(ev)
	    );
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