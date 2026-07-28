export function initTheme() {
    
    const themeBtn = document.querySelector(".theme-btn");

    if(!themeBtn) return;

    const savedTheme = localStorage.getItem("theme");

    if(savedTheme === "dark") {
        document.body.classList.add("dark");
        themeBtn.textContent = "☀️";
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