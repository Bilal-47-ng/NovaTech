export function initObserver() {

    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach((entry,index)=>{

            if(entry.isIntersecting){

                setTimeout(()=>{

                    entry.target.classList.add("reveal-show");

                }, index * 100);

                observer.unobserve(entry.target);

            }

        });

    },{
        threshold:0.15
    });

    elements.forEach(element=>{

        observer.observe(element);

    });

}