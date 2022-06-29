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
  document.getElementById("locationSection").scrollIntoView();
}

var navbar = document.getElementById("navbar");

// window.onscroll = function(){
//   if(document.body.scrollTop >= 200){
//     $(".navbar").css("background" , "blue");
//   }
// }
var dish = document.getElementById("dish");
var viewDish = document.getElementById("dishBtn");
var openMenu = true;
const foodListView = function(){
  if(openMenu === true){
    dish.style.display = "block";
    viewDish.innerHTML = "Close";
    openMenu = false;
   }

   else{
    dish.style.display = "none";
    viewDish.innerHTML = "View Menu";
    openMenu = true;
   }
}

var inside = document.getElementById("inside");
var viewButton = document.getElementById("viewButton");
var viewPlace = true;
const viewInside = function(){
  if(viewPlace === true){
    inside.style.display = "block";
    viewButton.innerHTML = "Close";
    viewPlace = false;
  }
  else{
    inside.style.display = "none";
    viewButton.innerHTML = "View Place";
    viewPlace = true;
  }
}



