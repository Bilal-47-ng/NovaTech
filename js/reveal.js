// ==========================
// REVEAL ANIMATION
// ==========================

export function initReveal() {
    
    const elements = document.querySelectorAll(
        ".section-header, .service-card, .project-card, .pricing-card, .testimonial-card"
    );

    function reveal () {

        elements.forEach( (element, index)=> {

            const position = 
                element.getBoundingClientRect().top;

            if(
                position < window.innerHeight - 100 &&
                !element.classList.contains("show")
            ) {
                setTimeout(() => {
                    element.classList.add("show");       
                }, index * 200);
            }
        });
    }
    reveal();

    window.addEventListener("scroll", reveal);
}