import { initObserver } from "../utils/observer.js";
import { projects } from "../data/projects.js";

export function initProjects() {

    const container = document.querySelector("#projects-container");

    if(!container) return;

    const modal = document.querySelector(".project-modal");

    if(!modal) return;

    const searchInput = document.querySelector("#project-search");

    const modalClose = modal.querySelector(".modal-close");

    const modalImage = modal.querySelector(".modal-image");
    const modalTitle = modal.querySelector(".modal-title");
    const modalCategory = modal.querySelector(".modal-category");
    const modalDescription = modal.querySelector(".modal-description");
    const modalTags = modal.querySelector(".modal-tags");

    const githubBtn = modal.querySelector(".modal-github");
    const demoBtn = modal.querySelector(".modal-demo");

    let currentCategory = "All";
    let currentSearch = "";

    // ==========================
    // RENDER PROJECTS
    // ==========================

    function renderProjects(projectsArray) {

        container.innerHTML = projectsArray.map(project => {

            return `

            <article class="project-card reveal"
                data-id="${project.id}">

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

                        ${
                            project.tags
                            .map(tag => `<span>${tag}</span>`)
                            .join("")
                        }

                    </div>

                    <a href="#" 
                    class="btn header-btn project-btn">

                        View project →

                    </a>

                </div>

            </article>

            `;

        }).join("");

        // activate reveal animation
        initObserver();

        // project buttons

        const buttons =
            container.querySelectorAll(".project-btn");

        buttons.forEach(button => {

            button.addEventListener("click", (event)=>{

                event.preventDefault();

                const card =
                    button.closest(".project-card");

                const id =
                    Number(card.dataset.id);

                const project =
                    projects.find(item => 
                        item.id === id
                    );

                openModal(project);

            });

        });

    }

    // ==========================
    // OPEN MODAL
    // ==========================

    function openModal(project){

        if(!project) return;

        modalImage.src = project.image;

        modalImage.alt = project.title;

        modalTitle.textContent =
            project.title;

        modalCategory.textContent =
            project.category;

        modalDescription.textContent =
            project.detail;

        modalTags.innerHTML =
            project.tags
            .map(tag => `<span>${tag}</span>`)
            .join("");

        if(project.github){

            githubBtn.href =
                project.github;

            githubBtn.style.display =
                "inline-flex";

        }else{

            githubBtn.style.display =
                "none";

        }

        if(project.demo){

            demoBtn.href =
                project.demo;

            demoBtn.style.display =
                "inline-flex";

        }else{

            demoBtn.style.display =
                "none";

        }

        modal.classList.add("active");

        document.body.style.overflow =
            "hidden";

    }

    // ==========================
    // CLOSE MODAL
    // ==========================

    function closeModal(){

        modal.classList.remove("active");

        document.body.style.overflow =
            "";

    }

    modalClose.addEventListener(
        "click",
        closeModal
    );

    modal.addEventListener(
        "click",
        (event)=>{

            if(event.target === modal){

                closeModal();

            }

        }
    );

    document.addEventListener(
        "keydown",
        (event)=>{

            if(event.key === "Escape"){

                closeModal();

            }

        }
    );

    // ==========================
    // FILTER PROJECTS
    // ==========================
    function filterProjects(){

        let filteredProjects = projects;

        if(currentCategory !== "All"){

            filteredProjects =
                filteredProjects.filter(project =>

                    project.category === currentCategory

                );

        }

        if(currentSearch){

            const searchText =
                currentSearch.toLowerCase();

            filteredProjects =
                filteredProjects.filter(project => {

                    return (

                        project.title
                        .toLowerCase()
                        .includes(searchText)

                        ||

                        project.description
                        .toLowerCase()
                        .includes(searchText)

                        ||

                        project.category
                        .toLowerCase()
                        .includes(searchText)

                        ||

                        project.tags.some(tag =>

                            tag.toLowerCase()
                            .includes(searchText)

                        )

                    );

                });

        }

        renderProjects(filteredProjects);

    }

    // ==========================
    // INITIAL RENDER
    // ==========================

    renderProjects(projects);

    // ==========================
    // FILTER BUTTONS
    // ==========================

    const filterButtons =
        document.querySelectorAll(
            ".project-filters button"
        );

    filterButtons.forEach(button => {

        button.addEventListener("click", ()=>{

            filterButtons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            currentCategory =
                button.dataset.category;

            filterProjects();

        });

    });

    // ==========================
    // SEARCH
    // ==========================

    if(searchInput){

        searchInput.addEventListener(
            "input",
            ()=>{

                currentSearch =
                    searchInput.value.trim();

                filterProjects();
            }
        );
    }
}