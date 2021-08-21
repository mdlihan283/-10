$(document).ready(function(){
   $(".mobileMenuIcon").click(function(){
      $(".menu").toggleClass("showMenu");
      $(".mobileMenuIcon i").toggleClass("fa-times");
   });
});