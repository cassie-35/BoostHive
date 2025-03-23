document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const testimonials = document.querySelectorAll(".testimonial");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const dotsContainer = document.querySelector(".carousel-dots");

    let currentIndex = 0;
    let interval;

    // CREAR PUNTOS DE NAVEGACIÓN
    testimonials.forEach((_, index) => {
        const dot = document.createElement("button");
        if (index === 0) dot.classList.add("active");
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".carousel-dots button");

    function updateCarousel() {
        const newTransform = -currentIndex * 100 + "%";
        track.style.transform = "translateX(" + newTransform + ")";

        // ACTUALIZAR PUNTOS ACTIVOS
        dots.forEach(dot => dot.classList.remove("active"));
        dots[currentIndex].classList.add("active");
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        updateCarousel();
    }

    // EVENTOS BOTONES
    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);

    // EVENTOS PUNTOS
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    // AUTO-SLIDE INFINITO
    function startAutoSlide() {
        interval = setInterval(nextSlide, 4000);
    }

    function stopAutoSlide() {
        clearInterval(interval);
    }

    track.addEventListener("mouseenter", stopAutoSlide);
    track.addEventListener("mouseleave", startAutoSlide);

    startAutoSlide();
});


/* FAQ */
document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
        const faq = button.parentElement;
        faq.classList.toggle("active");

        // Cierra otros acordeones abiertos
        document.querySelectorAll(".faq").forEach(item => {
            if (item !== faq) {
                item.classList.remove("active");
            }
        });
    });
});
