import { initReveal } from "./reveal.js";
import { projects } from "./projectsData.js";

export function initProjects() {

    // PROJECTS RENDER
    const container = document.querySelector("#projects-container");
    if(!container) return;

    function renderProjects(projectsArray) {

        const projectsHTML = projectsArray.map(project => {

            return `
                <div class="project-card">

                    <div class="project-image">

                        <img 
                            src="${project.image}"
                            alt="${project.title}"
                        >

                    </div>

                    <div class="project-content">

                        <span class="project-category">
                            ${project.category}
                        </span>

                        <h3>
                            ${project.title}
                        </h3>

                        <p>
                            ${project.description}
                        </p>

                        <div class="project-tags">

                            ${project.tags
                            .map(tag => `<span>${tag}</span>`)
                            .join("")}

                        </div>

                        <a href="#" class="btn header-btn project-btn">
                            View project →
                        </a>

                    </div>

                </div>
            `;
        });

        container.innerHTML = projectsHTML.join("");
        initReveal();


        // PROJECT BUTTONS AFTER RENDER
        const buttons = document.querySelectorAll(".project-btn");

        buttons.forEach(button => {

            button.addEventListener("click", (event) => {
                
                event.preventDefault();
                
                alert("Project details coming soon 🚀");

            });

        });

    }

    // INITAIL RENDER
    renderProjects(projects);

        // FILTER BUTTONS

        const filterButtons = document.querySelectorAll(".project-filters button");        
        
        filterButtons.forEach(button => {
        
            button.addEventListener("click", () => {
        
                const category = button.dataset.category;

                if(category === "All") {
        
                    renderProjects(projects);
        
                } else {
        
                    const filterProjects = projects.filter(project => {
        
                        return project.category === category;
        
                    });

                    renderProjects(filterProjects);

                }
            });
        });
}