// ==========================
// REVEAL ANIMATION
// ==========================

export function initReveal() {
    function reveal () {

        const elements = document.querySelectorAll(
            ".section-header, .service-card, .project-card, .pricing-card, .testimonial-card"
        );

        elements.forEach( (element, index)=> {

            const position = 
                element.getBoundingClientRect().top;

            if(
                position < window.innerHeight - 100 &&
                !element.classList.contains("show")
            ) {
                setTimeout(() => {
                    element.classList.add("show");       
                }, index * 100);
            }
        });
    }
    
    reveal();

    window.addEventListener("scroll", reveal);
}