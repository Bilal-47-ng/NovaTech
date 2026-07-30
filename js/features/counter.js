// ==========================
// COUNTER ANIMATION
// ==========================
export function initCounter() {
    
    const counters = document.querySelectorAll(".counter");

    if(counters.length === 0) {
        return;
    }

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting) {

                const counter = entry.target;

                const target = Number(counter.dataset.target);

                let current = 0;

                const duration = 1500; // 1.5 seconds
                const stepTime = 20;

                const increment = target / (duration / stepTime);

                const updateCounter = () => {

                    current += increment;

                    if(current < target) {

                        counter.textContent = Math.floor(current);

                        setTimeout(updateCounter, stepTime);

                    } else {

                        counter.textContent = target;
                    }

                };

                updateCounter();

                observer.unobserve(counter);

            }

        });

    }, {
        threshold: 0.3
    });

    counters.forEach(counter => {

        observer.observe(counter);

    });
}