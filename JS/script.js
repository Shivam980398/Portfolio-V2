var typed = new Typed("#animated-text", {
  strings: [
    "Web Developer",
    "React Developer",
    "Backend Developer",
    "Designer",
    "Software Engineer",
    "MERN Stack Developer",
    "Flutter Developer",
  ],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

function downloadCV() {
  window.open("./Assets/Resume/Shivam_Yadav.pdf", "_blank");
}

// for social icons display on click
let hideTimeout;
function toggleSocialLinks() {
  const socialLinks = document.getElementsByClassName("social-links")[0];
  if (socialLinks.style.display === "block") {
    socialLinks.style.display = "none";
  } else {
    socialLinks.style.display = "block";
  }

  clearTimeout(hideTimeout);
  hideTimeout = setTimeout(() => {
    socialLinks.style.display = "none";
  }, 40000);
}

// document.querySelectorAll('.card').forEach(card => {
//     gsap.to(card, {
//       scale: 0.7,
//       opacity: 0,
//       scrollTrigger: {
//         trigger: card,
//         start: "top 15%",
//         end: "bottom 15%",
//         markers: true,
//         scrub: true,
//       },
//     });
// });

// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
