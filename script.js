gsap.registerPlugin(SplitText, ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content'
})

gsap.from(".fixed_header", {
    y: -100,
    duration: 0.4,
    ease: "power4.out",
    scrollTrigger: {
        trigger: "#top",
        start: "20% top",

        onEnter: () => {
            gsap.to(".fixed_header", { y: 0, duration: 0.4 });
        },

        onLeaveBack: () => {
            gsap.to(".fixed_header", { y: -100, duration: 0.4 });
        }
    }
});

/* FLAGS */

gsap.from(".section_title .word", {
    y: 100,
    duration: 1,
    filter: "blur(4px)",
    ease: "power4.out",
    stagger: 0.12,
    scrollTrigger: {
            trigger: "#flag",
            start: "top 80%",
            once: true,
        }
})

gsap.from(".primary_btn", {
    y: 100,
    duration: 1,
    filter: "blur(4px)",
    ease: "power4.out",
    scrollTrigger: {
            trigger: "#flag",
            start: "30% 80%",
            once: true,
        }
})

const flags = document.querySelectorAll(".flag_card")

function randomFlag(){

    flags.forEach(flag => flag.classList.remove("activated"))
    const index = Math.floor(Math.random() * flags.length)
    flags[index].classList.add("activated")

}

function loop(){

    randomFlag()

    const delay = 800

    setTimeout(loop, delay)

}

loop()

/* HIW */

const steps = document.querySelectorAll(".hiw_steps span")
const icons = document.querySelectorAll(".hiw_icon")
const items = document.querySelectorAll(".hiw_item")
const header = document.querySelector(".fixed_header")

function setStep(i){

    steps.forEach(el=>el.classList.remove("active"))
    icons.forEach(el=>el.classList.remove("active"))
    items.forEach(el=>el.classList.remove("active"))

    if(steps[i]) steps[i].classList.add("active")
    if(icons[i]) icons[i].classList.add("active")
    if(items[i]) items[i].classList.add("active")
}


ScrollTrigger.create({
    trigger:".section_container.hiw",
    start:"top top",
    end:"+=200%",

    scrub:true,
    pin:true,

    onEnter: () => {
        gsap.to(".fixed_header", {y: -100, duration: 0.4});
    },
    
    onLeave: () => {
        gsap.to(".fixed_header", { y: 0, duration: 0.4 });
    },

    onEnterBack: () => {
        gsap.to(".fixed_header", {y: -100, duration: 0.4});
    },
    
    onLeaveBack: () => {
        gsap.to(".fixed_header", { y: 0, duration: 0.4 });
    },

    onUpdate:self=>{
        const step = Math.min(2, Math.floor(self.progress * 3))
        setStep(step)
    }
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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    const offset = 120;

    const position = target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: position,
      behavior: "smooth"
    });
  });
});