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
  window.open("./Assets/Resume/Shivam_Yadav_Resume.pdf", "_blank");
}

let hideTimeout;
function toggleSocialLinks() {
  const socialLinks = document.querySelector(".social-links");
  socialLinks.classList.toggle("show");
  clearTimeout(hideTimeout);
  hideTimeout = setTimeout(() => {
    socialLinks.classList.remove("show");
  }, 40000);
}

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
