gsap.registerPlugin(SplitText, ScrollTrigger, ScrollSmoother);

if (window.innerWidth > 768) {
    ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content'
    })
}

gsap.from(".fixed_header", {
    y: -100,
    duration: 0.4,
    ease: "power4.out",
    scrollTrigger: {
        trigger: "#top",
        end: "20% top",

        onEnter: () => toggleHeader(false),
        onLeave: () => toggleHeader(true),
        onEnterBack: () => toggleHeader(false),
    }
});

function toggleHeader(show) {
    gsap.to(".fixed_header", {
        y: show ? 0 : -100,
        duration: 0.4
    });
}

/* HERO */

gsap.from(".headline_title div", {
    opacity: 0,
    y: 40,
    stagger: 0.05,
    duration: 0.6,
    ease: "power3.out"
});

gsap.from(".headline_subtitle", {
    opacity: 0,
    y: 40,
    delay: 1,
    duration: 0.8,
    stagger: 0.12,
    ease: "power3.out"
});

/* FLAGS */

gsap.from(".section_title .word", {
    y: 100,
    duration: 1,
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

gsap.to({}, {
    repeat: -1,
    delay: 1,
    onRepeat: randomFlag
});

/* HIW */

ScrollTrigger.config({
  ignoreMobileResize: true
});

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

    scrub: 0.5,
    pin:true,
    pinSpacing: true,
    antecipatePin: 1,

    onEnter: () => toggleHeader(false),
    onLeave: () => toggleHeader(true),
    onLeaveBack: () => toggleHeader(true),
    onEnterBack: () => toggleHeader(false),

    onUpdate:self=>{
        const step = Math.min(2, Math.floor(self.progress * 3))
        setStep(step)
    }
})

/* ABOUT */

gsap.utils.toArray(".about_card").forEach((card) => {
  gsap.from(card, {
    y: 100,
    duration: 1,
    ease: "power4.out",
    opacity: 0,
    stagger: 0.12,
    scrollTrigger: {
      trigger: ".about_subtitle",
      start: "top 80%",
    }
  });
});

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

gsap.from(".faq_item", {
    y: 100,
    duration: 1,
    ease: "power4.out",
    stagger: 0.12,
    scrollTrigger: {
            trigger: "#faq",
            start: "top 80%",
            once: true,
        }
})

/* FOOTER */

ScrollTrigger.create({
    trigger: ".footer_content",
    start: "50% bottom",

    onEnter: () => toggleHeader(false),
    onLeave: () => toggleHeader(true),
})