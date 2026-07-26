// ==========================
// PROJECT BUTTONS
// ==========================

export function initProjects() {
    const buttons = document.querySelectorAll(".project-btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
                alert("Project details coming soon 🚀");
        });
    });
}