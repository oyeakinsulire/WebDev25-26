document.addEventListener('DOMContentLoaded', () => {

  // GSAP Timeline for Entrance Animations
  const tl = gsap.timeline();

  // Entrance Animations for elements
  tl.from(".logo", { duration: 1, y: -50, opacity: 0, ease: "power4.out" })
    .from(".menu-button", { duration: 1, x: 50, opacity: 0, ease: "power4.out" }, "-=0.8")
    .from(".halo", { duration: 1.5, scale: 0, opacity: 0, ease: "expo.out" }, "-=0.5")
    .from(".subject", { duration: 1.2, y: 100, opacity: 0, ease: "power3.out" }, "-=1")
    .from(".welcome-card", { duration: 1, x: -100, opacity: 0, ease: "back.out(1.7)" }, "-=0.5")
    .from("#mode-toggle", { duration: 0.5, scale: 0, opacity: 0 }, "-=0.2");

  // Menu Button
  const menuButton = document.querySelector('.menu-button');
  if (menuButton) {
    menuButton.addEventListener('click', () => {
      
      //Exit Transition
      gsap.to("body", { 
        duration: 0.5, 
        opacity: 0, 
        onComplete: () => {
          window.location.href = '../menu/index.html';
        } 
      });
    });
  }

  //DarkMode Switch
  let toggle = document.getElementById('mode-toggle');
  if (!toggle) {
    toggle = document.createElement('button');
    toggle.id = 'mode-toggle';
    toggle.textContent = '🌙'; 
    document.body.appendChild(toggle);
  }
  // DarkMode Toggle
  toggle.addEventListener('click', () => {
    gsap.to("body", { 
        duration: 0.5, 
        opacity: 0, 
        scale: 0.95,
        onComplete: () => {
          window.location.href = '../../Darkmode/home/index.html';
        } 
    });
  });

});