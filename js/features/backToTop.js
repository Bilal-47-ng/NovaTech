// ==========================
// BACK TO TOP BUTTON
// ==========================
export function initBackToTop() {

    const btnToTop = document.querySelector("#back-to-top");
    
    if(!btnToTop) return;

    window.addEventListener("scroll", event => {
        if(window.scrollY > 500) {
            btnToTop.classList.add("show");
        } else {
            btnToTop.classList.remove("show");
        }
    });

    btnToTop.addEventListener("click", ()=> {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}