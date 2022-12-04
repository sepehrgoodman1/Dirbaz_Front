const P_SelectInput = document.querySelector(".P_SelectInput");
const RadioGoroup = document.querySelector(".RadioGroup");
const ImagesChecked = RadioGoroup.querySelectorAll(".ImgCheck");
const ItemSelect = RadioGoroup.querySelectorAll(".ItemSelect");
const WrapperAllMelks = document.querySelector(".WrapperAllMelks");
const ArrowRight = document.querySelector(".ArrowRight");




var LeftSlider = 300;
// select radio buttons
function RadioButton(index) {
  for (let i = 0; i < ItemSelect.length; i++) {
    ItemSelect[i].addEventListener("click", () => {
      console.log(ItemSelect[i]);

      ImagesChecked.forEach((element) => {
        element.src = "assets/images/check.svg";
      });
      ImagesChecked[index].src = "assets/images/checked.svg";
    });
  }
}

// Detect all clicks on the document
document.addEventListener("click", function (event) {
  // If user clicks inside the element, do nothing
  if (event.target.closest(".P_SelectInput")) return;
  // If user clicks outside the element, hide it!
  RadioGoroup.classList.add("DisNone");
});

P_SelectInput.addEventListener("click", () => {
    RadioGoroup.classList.remove("DisNone");
});


 
var swiper = new Swiper(".slide-content", {
  slidesPerView: 4,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
      1950: {
        slidesPerView: 4,
    },
  },
});






