document.addEventListener('DOMContentLoaded', () => {

  // GSAP Timeline for Entrance Animations
  const tl = gsap.timeline();

  tl.from(".logo", { duration: 1, y: -50, opacity: 0, ease: "power4.out" })
    .from(".close-button", { duration: 1, x: 50, opacity: 0, ease: "power4.out" }, "-=0.8")
    .from(".ring", { duration: 1.5, scale: 0, opacity: 0, ease: "expo.out" }, "-=0.5")
    .from(".subject", { duration: 1.2, y: 100, opacity: 0, ease: "power3.out" }, "-=1")
    .from(".menu-links .label", { 
      duration: 0.8, 
      x: -100, 
      opacity: 0, 
      stagger: 0.2, 
      ease: "power2.out" 
    }, "-=0.5")
    .from("#mode-toggle", { duration: 0.5, scale: 0, opacity: 0 }, "-=0.2");

  /* Navigation */
  function navigateWithGSAP(path) {
    gsap.to("body", { 
      duration: 0.5, 
      opacity: 0, 
      onComplete: () => {
        window.location.href = path;
      } 
    });
  }

  // Close button
  const close = document.querySelector('.close-button');
  if (close) {
    close.addEventListener('click', () => {
      gsap.to("body", { 
        duration: 0.5, 
        opacity: 0, 
        onComplete: () => window.history.back() 
      });
    });
  }

  // Menu Navigation Triggers
  const homeLabel = document.querySelector('.label .home');
  if (homeLabel) homeLabel.addEventListener('click', () => navigateWithGSAP('../home/index.html'));

  const aboutLabel = document.querySelector('.label .about');
  if (aboutLabel) aboutLabel.addEventListener('click', () => navigateWithGSAP('../about/index.html'));

  const workLabel = document.querySelector('.label .work');
  if (workLabel) workLabel.addEventListener('click', () => navigateWithGSAP('../work/index.html'));

  /* Mode Switch (Light Mode) */
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
      scale: 1.05, // zoom-out effect during transition
      onComplete: () => {
        window.location.href = '../../DarkMode/menu/index.html';
      } 
    });
  });
});