gsap.registerPlugin(ScrollTrigger);

/* ---------------- HERO FADE-IN ---------------- */
gsap.to(".hero-object", {
  opacity: 1,
  y: 0,
  duration: 1.2,
  ease: "power2.out"
});

/* ---------------- PARALLAX HERO TITLE ---------------- */
gsap.from(".title", {
  y: 60,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out"
});

/* ---------------- ORIGIN SECTION ---------------- */
gsap.from(".origin .text-block", {
  scrollTrigger: {
    trigger: ".origin",
    start: "top 80%",
    end: "top 20%",
    scrub: 1
  },
  y: 120,
  opacity: 0
});

/* ---------------- EVOLUTION ---------------- */
gsap.timeline({
  scrollTrigger: {
    trigger: ".evolution",
    start: "top center",
    end: "bottom center",
    scrub: 1,
    pin: true
  }
})
.to(".evolution-img", {
  opacity: 1,
  scale: 1.1,
  duration: 1
})
.to(".evolution-img", {
  rotation: 360,
  scale: 1.25
});

/* ---------------- KEY MOMENTS ---------------- */
gsap.from(".moments .text-block", {
  scrollTrigger: {
    trigger: ".moments",
    start: "top 75%",
    end: "top 20%",
    scrub: 1
  },
  x: -100,
  opacity: 0
});

/* ---------------- NOW SECTION ---------------- */
gsap.from(".now .text-block", {
  scrollTrigger: {
    trigger: ".now",
    start: "top 75%",
    end: "top 20%",
    scrub: 1
  },
  x: 100,
  opacity: 0
});
