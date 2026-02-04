document.addEventListener('DOMContentLoaded', () => {

  // GSAP Timeline for Entrance Animations
  const tl = gsap.timeline();

  // Entrance Animations for elements
  tl.from(".logo", { duration: 1, y: -50, opacity: 0, ease: "power4.out" })
    .from(".aboutme", { duration: 0.8, x: -30, opacity: 0 }, "-=0.5")
    .from(".line-stroke", { duration: 1.5, width: 0, ease: "expo.inOut" }, "-=0.5")
    .from(".oye-akinsulire", { duration: 1, y: 50, opacity: 0, ease: "back.out(1.7)" }, "-=0.8")
    .from(".profession", { duration: 0.8, opacity: 0 }, "-=0.4")
    .from(".description", { duration: 1, y: 20, opacity: 0, ease: "power2.out" }, "-=0.6")
    .from(".menu-button", { duration: 0.8, x: 30, opacity: 0 }, "-=1")
    .from("#mode-toggle", { duration: 0.5, scale: 0, opacity: 0 }, "-=0.5");

  //Menu Button
  const menuButton = document.querySelector('.menu-button');
  if (menuButton) {
    menuButton.addEventListener('click', () => {
      
      // Exit Transition
      gsap.to("body", { 
        duration: 0.5, 
        opacity: 0, 
        onComplete: () => {
          window.location.href = '../menu/index.html';
        } 
      });
    });
  }

  //LightMode Switch
  let toggle = document.getElementById('mode-toggle');
  if (!toggle) {
    toggle = document.createElement('button');
    toggle.id = 'mode-toggle';
    toggle.textContent = '☀';
    document.body.appendChild(toggle);
  }

  // LightMode Toggle
  toggle.addEventListener('click', () => {
    gsap.to("body", { 
        duration: 0.5, 
        opacity: 0, 
        scale: 1.1, // zoom effect on transition
        onComplete: () => {
          window.location.href = '../../Lightmode/about/index.html';
        } 
    });
  });

});