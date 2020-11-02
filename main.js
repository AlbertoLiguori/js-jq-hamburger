//APRE HAMBURGER MENU
$(".header-right > a").click(function(){
  $(".hamburger-menu").addClass("active")
})

//CHIUDE HAMBURGER MENU
$(".hamburger-menu > .close").click(function(){
  $(".hamburger-menu").removeClass("active")
})
