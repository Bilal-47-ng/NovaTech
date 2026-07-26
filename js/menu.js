// ==========================
// MOBILE MENU
// ==========================

export function initMenu() {
    const menuBtn = document.querySelector(".menu-btn");
    const nav = document.querySelector("header nav");
    if(!menuBtn || !nav) return;
    
    const navLinks = document.querySelectorAll("header nav a");

    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");

        menuBtn.textContent =
            nav.classList.contains("active") 
                ? "✖"
                : "☰";
    });


    // CLOSE MENU WHEN CLICKING OUTSIDE
    document.addEventListener("click", (e) => {
        
        if(
            !nav.contains(e.target) && 
            !menuBtn.contains(e.target)
        ) {
            nav.classList.remove("active");
            menuBtn.textContent = "☰";
        }

    });


    // CLOSE MENU AFTER CLICKING A LINK
    navLinks.forEach(link => {

        link.addEventListener("click", () => {
            nav.classList.remove("active");
            menuBtn.textContent = "☰";
        });
    });
}