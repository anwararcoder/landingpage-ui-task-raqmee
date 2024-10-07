document.addEventListener("DOMContentLoaded", function () {
  // Popup Videos
  document.querySelectorAll(".modalVideos").forEach(function (modal) {
    var span = modal.querySelector(".close");
    var iframe = modal.querySelector(".youtube-video");
    var buttons = document.querySelectorAll(".open-popup-video-btn");
    buttons.forEach(function (btn) {
      btn.onclick = function () {
        modal.style.display = "flex";
        var videoUrl = btn.getAttribute("data-url");
        iframe.src = videoUrl;
      };
    });
    span.onclick = function () {
      modal.style.display = "none";
      iframe.src = "";
    };
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
        iframe.src = "";
      }
    };
  });

  // Add Class Active When To (.all-navbar) When Scroll
  window.addEventListener("scroll", function () {
    if (window.pageYOffset < 50) {
      document.querySelector(".nav-bar").classList.remove("active");
    } else {
      document.querySelector(".nav-bar").classList.add("active");
    }
  });

  // Open Navbar Menu on Responsive
  document.querySelectorAll(".open-nav-bar").forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("open-nav-bar-menu").classList.toggle("active");
    });
  });

  // Navbar Links Settings
  document.querySelectorAll(".has-menu > a").forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelectorAll(".has-menu > a").forEach(function (otherItem) {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active");
          var nextElement = otherItem.nextElementSibling;
          if (nextElement.tagName === "UL") {
            nextElement.classList.remove("active");
          }
        }
      });
      item.classList.toggle("active");
      var nextElement = item.nextElementSibling;
      if (nextElement.tagName === "UL") {
        nextElement.classList.toggle("active");
      }
    });
  });

  // Dropdown
  document.querySelectorAll(".dropdown").forEach((dropdown) => {
    const button = dropdown.querySelector("button");
    const menu = dropdown.querySelector(".dropdown-menu");

    button.addEventListener("click", () => {
      const isOpen = menu.style.display === "block";
      // Close all dropdown menus and remove "active" class from all buttons
      document.querySelectorAll(".dropdown-menu").forEach((menu) => {
        menu.style.display = "none";
      });
      document.querySelectorAll(".dropdown button").forEach((button) => {
        button.classList.remove("active");
      });

      if (!isOpen) {
        menu.style.display = "block";
        button.classList.add("active"); // Add "active" class to the clicked button
      }
    });
  });

  // Close dropdown if clicked outside
  window.addEventListener("click", (e) => {
    document.querySelectorAll(".dropdown").forEach((dropdown) => {
      if (!dropdown.contains(e.target)) {
        dropdown.querySelector(".dropdown-menu").style.display = "none";
        dropdown.querySelector("button").classList.remove("active"); // Remove "active" class when closing the dropdown
      }
    });
  });
});

var swiper = new Swiper(".testimonialsSwiper", {
  effect: "fade",
  pagination: {
    el: ".testimonialsSwiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".testimonialsSwiper-button-next",
    prevEl: ".testimonialsSwiper-button-prev",
  },
});

// :: Swiper Sponsors
var swiper = new Swiper(".sponsors-swiper", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});
