gsap.registerPlugin(SplitText, ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content'
})

/* FAQ */
document.querySelectorAll(".faq_question").forEach((btn) => {
    btn.addEventListener("click", () => {
        const item = btn.parentElement;
        const isActive = item.classList.contains("active");

        document.querySelectorAll(".faq_item").forEach((el) => {
            el.classList.remove("active");
            el.querySelector(".faq_icon").textContent = "+";
        });

        if (!isActive) {
            item.classList.add("active");
            btn.querySelector(".faq_icon").textContent = "−";
        }
    });
});