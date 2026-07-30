export function initScroll() {

    const header = document.querySelector("header");
    const navLinks = document.querySelectorAll("header nav a");
    const sections = document.querySelectorAll("section");
    
    // ==========================
    // SCROLL EVENTS
    // ==========================
    window.addEventListener("scroll", () => {

        // HEADER BACKGROUND
        if(window.scrollY > 50) {
            header.classList.add("scrolled");
        } 
        else {
            header.classList.remove("scrolled");
        }
        
        // ACTIVE NAV LINK
        let current = "";

        sections.forEach(section => {
        
            const sectionTop = section.offsetTop;

            if(
                window.scrollY >= sectionTop - 150
            ) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");

            if(link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    });
}