// Intersection Observer for animation triggers
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = "running";
        }
    });
}, {
    threshold: 0.3,
});

sections.forEach((section) => {
    observer.observe(section);
});
