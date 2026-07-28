// ==========================
// CONTACT FORM
// ==========================
export function initForm() {

    const form = document.querySelector("#contact-form");
    
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const companyInput = document.querySelector("#company");
    const messageInput = document.querySelector("#message");
    
    const  formMessage = document.querySelector("#form-message");

    form.addEventListener("submit", (event) => {
        
        event.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const company = companyInput.value.trim();
        const message = messageInput.value.trim();
        
        if(
            name === "" || email === "" || 
            company === "" || message === ""
        ) {
            showMessage("Please fill in all fields.", "error");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if(!emailPattern.test(email)) {
            showMessage("Please enter a valid email.", "error");
            return;
        }

        showMessage("Message sent successfully 🚀", "success");
        form.reset();        

    }); 

    const inputs = [nameInput, emailInput, companyInput, messageInput];

    inputs.forEach(input => {
        input.addEventListener("input", () => {
            formMessage.textContent = "";
            formMessage.className = "";
        })
    })
    

    function showMessage(messageShow, type = "") {
        
        formMessage.textContent =  messageShow;

        formMessage.className = type;
    }

}