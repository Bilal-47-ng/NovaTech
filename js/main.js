import { initNavbar } from "./components/navbar.js";
import { initProjects } from "./components/projects.js";
// import { initTestimonials } from "./components/testimonials.js";

import { initBackToTop } from "./features/backToTop.js";
import { initScroll } from "./features/scroll.js";
import { initTheme } from "./features/theme.js";

import { initCounter } from "./features/counter.js";
import { initObserver } from "./utils/observer.js";
import { initValidation } from "./utils/validation.js";


document.addEventListener("DOMContentLoaded", () => {

    initNavbar();
initProjects();

initBackToTop();
initScroll();
initTheme();

initCounter();

initObserver();

initValidation();

});