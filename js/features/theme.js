export function initTheme() {
    
    const themeBtn = document.querySelector(".theme-btn");

    if(!themeBtn) return;

    const savedTheme = localStorage.getItem("theme");

    if(savedTheme) {
        document.body.classList.toggle(
            "dark",
            savedTheme === "dark"
        );
        themeBtn.textContent = 
            savedTheme === "dark" ? "☀️" : "🌙";
    }


    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark")) {
            themeBtn.textContent = "☀️";
            
            localStorage.setItem("theme", "dark");
        } 
        else {
            themeBtn.textContent = "🌙"
            localStorage.setItem("theme", "light");
        }
    })
}