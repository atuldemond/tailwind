var h1 = document.querySelector(".text h1");
var h1Text = h1.textContent;
var spilletectext = h1Text.split("");
var clutter = "";
spilletectext.forEach(function (elem) {
  clutter += `<nav>${elem}</nav>`;
});

h1.innerHTML = clutter;

gsap.from("h1 nav", {
  y: 300,
  opaciy: 0,
  duration: 0.9,
  delay: 0.1,
  stagger: 0.15,
});

// This is for cursor

var sky = document.querySelector("#sky");
var cursor = document.querySelector("#cursor");

sky.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 1,
    ease: "back.out ",
  });
});
h1.addEventListener("mouseenter", function () {
  cursor.style.backgroundColor = "green";
  gsap.to(cursor, {
    scale: 4,
  });
});
h1.addEventListener("mouseout", function () {
  cursor.style.backgroundColor = "white";

  gsap.to(cursor, {
    scale: 1,
  });
});
