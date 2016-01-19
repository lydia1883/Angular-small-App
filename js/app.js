/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-01-19 16:11:33
 * @version $Id$
 */

  var bookStoreApp=angular.module('bookStoreApp',[
  	"ngRoute","ngAnimate","bookStoreCtrls","bookStoreFilters"
  	,"bookStoreServices","bookStoreDirectives"
  ]);


  bookStoreApp.config(function($routeProvider){

  	$routeProvider.when('/hello',{

  		templateUrl:'tpls/hello.html',
  		controller:'HelloCtrl'
  	}).when('/list',{

  		templateUrl:'tpls/bookList.html',
  		controller:'BookListCtrl'
  	}).otherwise({
  		redirectTo:'/hello'
  	})

  });


