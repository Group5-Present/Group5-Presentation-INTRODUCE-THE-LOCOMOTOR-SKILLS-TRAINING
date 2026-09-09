/* =========================
   SMOOTH NAVIGATION
========================= */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const animatedElements = document.querySelectorAll(
    ".card, .plyometric-card"
);

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    animatedElements.forEach(function (element) {
        observer.observe(element);
    });
} else {
    animatedElements.forEach(function (element) {
        element.classList.add("show");
    });
}


/* =========================
   STAGGER CARD ANIMATION
========================= */

document.querySelectorAll(".cards").forEach(function (container) {
    const cards = container.querySelectorAll(".card");

    cards.forEach(function (card, index) {
        card.style.animationDelay = (index * 0.12) + "s";
    });
});


document.querySelectorAll(".plyometric-grid").forEach(function (container) {
    const cards = container.querySelectorAll(".plyometric-card");

    cards.forEach(function (card, index) {
        card.style.animationDelay = (index * 0.12) + "s";
    });
});


/* =========================
   BUTTON CLICK EFFECT
========================= */

document.querySelectorAll(".btn").forEach(function (button) {
    button.addEventListener("click", function () {
        this.style.transform = "scale(0.96)";

        setTimeout(function () {
            button.style.transform = "";
        }, 150);
    });
});


/* =========================
   REDUCED MOTION CHECK
========================= */

if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.documentElement.style.scrollBehavior = "auto";
}
