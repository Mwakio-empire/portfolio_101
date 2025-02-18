document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
        sections.forEach((section) => {
            let top = window.scrollY;
            let offset = section.offsetTop - 150;
            let height = section.offsetHeight;

            if (top >= offset && top < offset + height) {
                section.style.opacity = 1;
                section.style.transform = "translateY(0)";
            }
        });
    });
});
