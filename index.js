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
  document.getElementById("sampleAnimation").scrollIntoView();
}

const foodListView = function(){
  if(dish.style.display === "none"){
    dish.style.display = "block";
  }
  else{
    dish.style.display = "none";
  }
}