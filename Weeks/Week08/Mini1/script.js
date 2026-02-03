// keeping track of how far the box has moved
let moveAmount = 0;

const moveBtn = document.getElementById("moveBtn");

moveBtn.addEventListener("click", function () {
    moveAmount += 50;

    gsap.to("#box1", {
        x: moveAmount,
        duration: 0.4
    });
});
