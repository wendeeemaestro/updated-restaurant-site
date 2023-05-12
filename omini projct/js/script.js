"use strict";

// SET CURRENT YEAR
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// MAKE MOBILE NAVIGATION WORK(open & close hamburger menu)
const btnNavEl = document.querySelector(".mobile-hamburger");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// SMOOTH SCROLLING ANIMATION
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // SCROLL BACK TO TOP
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // SCROLL TO OTHER LINKS
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // CLOSE HAMBURGER MENU AFTER SELECTION
    if (link.classList.contains("nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

// STICKY NAVIGATION
const sectionHeroEl = document.querySelector(".home-container");
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.querySelector(".header").classList.add("stickyNav");
    } else {
      document.querySelector(".header").classList.remove("stickyNav");
    }
  },

  {
    // inside the viewport
    root: null,
    threshold: 0,
  }
);
observer.observe(sectionHeroEl);

//    ******FIXING FLEXBOX GAP PROPERTY MISSING IN SOME SAFARI VERSIONS******

// function checkFlexGap()
//     var flex = document.createElement("div");
//     flex.style.display = "flex";
//     flex.style.flexDirection = "column";
//     flex.style.rowGap = "1px";

//     flex.appendChild(document.createElement("div"));
//     flex.appendChild(document.createElement("div"));

//     document.body.appendChild(flex);
//     var isSupported = flex.scrollHeight === 1;
//     flex.parentNode.removeChild(flex);
//     console.log(isSupported);

//     if (!isSupported) document.body.classList.add("no-flexbox-gap");
// }
// checkFlexboxGap();

// $("button").on("click",function(){
//     $("h1").fadeToggle();
// });

// $("h1").on("click",function(){
//     $("h1").css("color","yellow");
// });
