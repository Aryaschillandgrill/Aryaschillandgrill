var dish = document.getElementById("dish");
(function () {
  var burger = document.querySelector('.navbar-burger');
  var menu = document.querySelector('#' + burger.dataset.target);
  burger.addEventListener('click', function () {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
  });
})();

const viewAbout = function(){
  document.getElementById("aboutTitle").scrollIntoView();
}
const viewMenu = function(){
  document.getElementById("menu").scrollIntoView();
}
const viewLocation = function(){
  document.getElementById("aboutTitle").scrollIntoView();
}


var navbar = document.getElementById("navbar");

// window.onscroll = function(){
//   if(document.body.scrollTop >= 200){
//     $(".navbar").css("background" , "blue");
//   }
// }

const foodListView = function(){
  if(dish.style.display === "none"){
    dish.style.display = "block";
  }
  else{
    dish.style.display = "none";
  }
}