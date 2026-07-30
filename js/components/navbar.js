// ==========================
// MOBILE MENU
// ==========================

export function initNavbar() {

    const menuBtn = document.querySelector(".menu-btn");
    const nav = document.querySelector("header nav");
    if(!menuBtn || !nav) return;
    
    const navLinks = document.querySelectorAll("header nav a");

    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");

        updateMenuIcon();
    });

    window.addEventListener("resize", () => {

        if(window.innerWidth > 768){

            nav.classList.remove("active");

            updateMenuIcon();

        }

    });

    // CLOSE MENU WHEN CLICKING OUTSIDE
    document.addEventListener("click", (e) => {
        
        if(
            !nav.contains(e.target) && 
            !menuBtn.contains(e.target)
        ) {
            nav.classList.remove("active");
            updateMenuIcon();
        }

    });


    // CLOSE MENU AFTER CLICKING A LINK
    navLinks.forEach(link => {

        link.addEventListener("click", () => {
            nav.classList.remove("active");
            updateMenuIcon();
        });
    });

    function updateMenuIcon() {

        menuBtn.textContent =
            nav.classList.contains("active")
                ? "✖"
                : "☰";

    }

}