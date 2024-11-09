document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const items = document.querySelectorAll(".carousel-item");
    const dotsContainer = document.getElementById("dots");

    items.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.dataset.index = index;
        dot.addEventListener("click", () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dot");
    dots[currentIndex].classList.add("active");

    function updateDisplay(direction) {
        items.forEach((item, index) => {
            item.classList.remove("active", "next", "prev");

            if (index === currentIndex) {
                item.classList.add("active");
                item.classList.add(direction); // Tambahkan kelas 'next' atau 'prev'
            }
        });
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
    }

    function goToSlide(index) {
        const direction = index > currentIndex ? "next" : "prev";
        currentIndex = index;
        updateDisplay(direction);
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        updateDisplay("next");
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateDisplay("prev");
    }

    document.getElementById("next").addEventListener("click", nextSlide);
    document.getElementById("prev").addEventListener("click", prevSlide);

    setInterval(nextSlide, 8000);
});
