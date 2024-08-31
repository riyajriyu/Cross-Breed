var sidenav=document.querySelector(".side-navbar")

function shownavbar(){

      sidenav.style.left="0"

}

function closenavbar(){

    sidenav.style.left="-60%"

}
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var subscribebtn = document.getElementById("Subscribe-btn")

subscribebtn.addEventListener("click", function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var cancelpopup = document.getElementById("cancel-popup")


cancelpopup.addEventListener("click",function(event){
    event.preventdefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})


const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabcursor:true,
  spacebetween:true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

