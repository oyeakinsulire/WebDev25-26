document.addEventListener('DOMContentLoaded', () => {

  // GSAP Timeline for Entrance Animations
  const tl = gsap.timeline();

  tl.from(".logo", { duration: 0.8, y: -50, opacity: 0, ease: "power4.out" })
    .from(".menu-button", { duration: 0.8, x: 50, opacity: 0, ease: "power4.out" }, "-=0.6")
    .from(".works", { duration: 1, y: 20, opacity: 0, ease: "power2.out" }, "-=0.4")
    .from(".line-stroke", { duration: 1.5, width: 0, ease: "expo.inOut" }, "-=0.8")
    // Staggered entrance for project cards (Week 1 to Week 9)
    .from(".card", { 
      duration: 0.8, 
      y: 40, 
      opacity: 0, 
      stagger: 0.1, 
      ease: "power3.out" 
    }, "-=0.5")
    .from("#mode-toggle", { duration: 0.5, scale: 0, opacity: 0 }, "-=0.2");

  /* =========================
     NAVIGATION FUNCTIONS
     ========================= */
  const menuButton = document.querySelector('.menu-button');
  if (menuButton) {
    menuButton.addEventListener('click', () => {
      gsap.to("body", { 
        duration: 0.5, 
        opacity: 0, 
        onComplete: () => {
          window.location.href = '../menu/index.html';
        } 
      });
    });
  }

  /* =========================
     MODE SWITCH (GO TO LIGHT)
     ========================= */
  let toggle = document.getElementById('mode-toggle');
  if (!toggle) {
    toggle = document.createElement('button');
    toggle.id = 'mode-toggle';
    toggle.textContent = '🌙'; 
    document.body.appendChild(toggle);
  }

  toggle.addEventListener('click', () => {
    gsap.to("body", { 
        duration: 0.5, 
        opacity: 0, 
        y: -20, // Subtle slide-up during theme switch
        onComplete: () => {
          window.location.href = '../../DarkMode/work/index.html';
        } 
    });
  });

});