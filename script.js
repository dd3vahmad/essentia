gsap.registerPlugin(ScrollTrigger);

let creamTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
    markers: false,
  },
});

creamTl.to(".cream", {
  y: 200,
  x: 0,
  ease: "none",
});
creamTl.to(".cream", {
  y: 200,
  x: 0,
  ease: "none",
});

creamTl.to(".cream", {
  y: 200,
  x: 0,
  ease: "none",
});

creamTl.to(".cream", {
  y: 200,
  x: 0,
  ease: "none",
});

creamTl.to(".cream", {
  y: 800,
  x: 0,
  duration: 2,
  ease: "none",
});

creamTl.to(".cream", {
  y: 600,
  x: 300,
  duration: 3,
  ease: "power1.inOut",
});
gsap.to(".hand", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
    markers: false,
  },
  y: 500,
  opacity: 0,
  ease: "none",
});
