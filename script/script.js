$(document).ready(function () {
  $(".slider-menu").slick({
    dots: false,

    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  const switchTheme = () => {
    const rootElem = document.documentElement;
    let dataTheme = rootElem.getAttribute("data-theme"),
      newTheme;
    newTheme = dataTheme === "light" ? "dark" : "light";
    rootElem.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };
  document
    .querySelector("#theme-switch")
    .addEventListener("click", switchTheme);
});

const url = "https://fakestoreapi.com/products";
$.ajax({
  url: url,
  method: "GET",
  success: function (result) {
    let data = JSON.parse(result);
    console.log(result);
  },
});
