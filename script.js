/*=========================================================
CINEMONK PRODUCTION
script.js

PART 1
Loader • Cursor • Hero • Magnetic Buttons
=========================================================*/


/*=========================================================
LOADER
=========================================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1200);

});


/*=========================================================
SCROLL PROGRESS BAR
=========================================================*/

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    if (!progressBar) return;

    const scrollTop = window.scrollY;

    const docHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress = (scrollTop / docHeight) * 100;

    progressBar.style.width = progress + "%";

});


/*=========================================================
CUSTOM CURSOR
=========================================================*/

const cursor = document.querySelector(".cursor");
const cursorDot = document.querySelector(".cursor-dot");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let cursorX = mouseX;
let cursorY = mouseY;

let dotX = mouseX;
let dotY = mouseY;

window.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

});


function animateCursor(){

    cursorX += (mouseX - cursorX) * 0.12;
    cursorY += (mouseY - cursorY) * 0.12;

    dotX += (mouseX - dotX) * 0.35;
    dotY += (mouseY - dotY) * 0.35;

    if(cursor){

        cursor.style.left = cursorX + "px";
        cursor.style.top = cursorY + "px";

    }

    if(cursorDot){

        cursorDot.style.left = dotX + "px";
        cursorDot.style.top = dotY + "px";

    }

    requestAnimationFrame(animateCursor);

}

animateCursor();


/*=========================================================
CURSOR STATES
=========================================================*/

document.querySelectorAll("a, button").forEach(item => {

    item.addEventListener("mouseenter", () => {

        cursor.classList.add("button");

    });

    item.addEventListener("mouseleave", () => {

        cursor.classList.remove("button");

    });

});


document.querySelectorAll(".project-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        cursor.classList.add("video");

    });

    card.addEventListener("mouseleave", () => {

        cursor.classList.remove("video");

    });

});


/*=========================================================
HERO MOUSE GLOW
=========================================================*/

const hero = document.querySelector("#hero");
const glow = document.querySelector(".cursor-glow");

let glowTargetX = 0;
let glowTargetY = 0;

let glowX = 0;
let glowY = 0;

if(hero && glow){

    hero.addEventListener("mousemove",(e)=>{

        const rect = hero.getBoundingClientRect();

        glowTargetX = e.clientX - rect.left - 350;
        glowTargetY = e.clientY - rect.top - 350;

        glow.style.opacity = ".9";

    });

    hero.addEventListener("mouseleave",()=>{

        glow.style.opacity = "0";

    });

}


function animateGlow(){

    glowX += (glowTargetX - glowX) * 0.08;
    glowY += (glowTargetY - glowY) * 0.08;

    if(glow){

        glow.style.transform =
        `translate(${glowX}px,${glowY}px)`;

    }

    requestAnimationFrame(animateGlow);

}

animateGlow();


/*=========================================================
HERO VIDEO PARALLAX
=========================================================*/

const heroVideo = document.querySelector(".hero-video");

let videoX = 0;
let videoY = 0;

if(hero && heroVideo){

    hero.addEventListener("mousemove",(e)=>{

        const rect = hero.getBoundingClientRect();

        const x =
            (e.clientX - rect.width/2) / rect.width;

        const y =
            (e.clientY - rect.height/2) / rect.height;

        videoX = x * -25;
        videoY = y * -25;

    });

}


function animateVideo(){

    if(heroVideo){

        heroVideo.style.transform =
        `translate(${videoX}px,${videoY}px) scale(1.08)`;

    }

    requestAnimationFrame(animateVideo);

}

animateVideo();


/*=========================================================
MAGNETIC BUTTONS
=========================================================*/

document.querySelectorAll(".btn, .nav-btn").forEach(button=>{

    button.addEventListener("mousemove",(e)=>{

        const rect = button.getBoundingClientRect();

        const x =
            e.clientX - rect.left - rect.width/2;

        const y =
            e.clientY - rect.top - rect.height/2;

        button.style.transform =
            `translate(${x*.18}px,${y*.18}px)`;

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform =
            "translate(0,0)";

    });

});


/*=========================================================
HERO PARTICLE PARALLAX
=========================================================*/

const particles = document.querySelector(".particles");

if(hero && particles){

    hero.addEventListener("mousemove",(e)=>{

        const rect = hero.getBoundingClientRect();

        const moveX =
            (e.clientX - rect.width/2) * 0.015;

        const moveY =
            (e.clientY - rect.height/2) * 0.015;

        particles.style.transform =
            `translate(${moveX}px,${moveY}px)`;

    });

}


/*=========================================================
REDUCE CURSOR ON TOUCH DEVICES
=========================================================*/

if(window.matchMedia("(pointer:coarse)").matches){

    if(cursor) cursor.style.display = "none";

    if(cursorDot) cursorDot.style.display = "none";

}


/*=========================================================
CONSOLE
=========================================================*/

console.log(
"%c🎬 CINEMONK PRODUCTION",
"color:#D4AF37;font-size:18px;font-weight:bold;"
);

console.log(
"%cCrafting stories frame by frame.",
"color:white;font-size:12px;"
);
/*=========================================================
NAVIGATION.JS
Part 2A
=========================================================*/


/*=========================================================
ELEMENTS
=========================================================*/

const header = document.querySelector("#header");
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("main section");


/*=========================================================
STICKY NAVBAR
=========================================================*/

function updateNavbar() {

    if (window.scrollY > 60) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", updateNavbar);

updateNavbar();


/*=========================================================
MOBILE MENU
=========================================================*/

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        menuBtn.classList.toggle("active");

        if (menuBtn.classList.contains("active")) {

            menuBtn.innerHTML =
                '<i class="ri-close-line"></i>';

        } else {

            menuBtn.innerHTML =
                '<i class="ri-menu-3-line"></i>';

        }

    });

}


/*=========================================================
CLOSE MENU AFTER CLICK
=========================================================*/

navItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.classList.remove("active");

        menuBtn.innerHTML =
            '<i class="ri-menu-3-line"></i>';

    });

});


/*=========================================================
ACTIVE NAVIGATION
=========================================================*/

function activeNavigation() {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;

        const sectionHeight = section.offsetHeight;

        if (

            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight

        ) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", activeNavigation);

activeNavigation();


/*=========================================================
SMOOTH NAVIGATION OFFSET
=========================================================*/

navItems.forEach(link => {

    link.addEventListener("click", function (e) {

        const targetID = this.getAttribute("href");

        if (!targetID.startsWith("#")) return;

        const target = document.querySelector(targetID);

        if (!target) return;

        e.preventDefault();

        const offset = 90;

        const topPosition =
            target.offsetTop - offset;

        window.scrollTo({

            top: topPosition,

            behavior: "smooth"

        });

    });

});


/*=========================================================
ESC KEY CLOSE MENU
=========================================================*/

window.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        navLinks.classList.remove("active");

        menuBtn.classList.remove("active");

        menuBtn.innerHTML =
            '<i class="ri-menu-3-line"></i>';

    }

});


/*=========================================================
CLICK OUTSIDE TO CLOSE
=========================================================*/

document.addEventListener("click", (e) => {

    if (

        !navLinks.contains(e.target) &&
        !menuBtn.contains(e.target)

    ) {

        navLinks.classList.remove("active");

        menuBtn.classList.remove("active");

        menuBtn.innerHTML =
            '<i class="ri-menu-3-line"></i>';

    }

});


/*=========================================================
PREVENT BODY SCROLL WHEN MENU OPEN
=========================================================*/

const observer = new MutationObserver(() => {

    if (navLinks.classList.contains("active")) {

        document.body.style.overflow = "hidden";

    } else {

        document.body.style.overflow = "";

    }

});

observer.observe(navLinks, {

    attributes: true,
    attributeFilter: ["class"]

});

/*=========================================================
PROJECTS.JS
Part 3A
Video Hover • Fullscreen Modal
=========================================================*/


/*=========================================================
ELEMENTS
=========================================================*/

const modal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");
const modalSource = modalVideo.querySelector("source");

const modalTitle = document.getElementById("videoTitle");
const modalCategory = document.getElementById("videoCategory");

const closeButton = document.querySelector(".close-video");

const projectCards = document.querySelectorAll(".project-card");
const watchButtons = document.querySelectorAll(".watch-btn");


/*=========================================================
VIDEO HOVER PREVIEW
=========================================================*/

projectCards.forEach((card) => {

    const video = card.querySelector("video");

    if (!video) return;

   const thumb = card.querySelector(".video-thumbnail");

card.addEventListener("mouseenter", async () => {

    video.currentTime = 0;

    try{

        await video.play();

        if(thumb){
            thumb.style.opacity = "0";
        }

    }catch(e){}

});

card.addEventListener("mouseleave", () => {

    video.pause();
    video.currentTime = 0;

    if(thumb){
        thumb.style.opacity = "1";
    }

});

});


/*=========================================================
OPEN MODAL
=========================================================*/

watchButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const videoPath = button.dataset.video;
        const title = button.dataset.title;
        const category = button.dataset.category;

        if (!videoPath) return;

        modalSource.src = videoPath;

        modalVideo.load();

        modalTitle.textContent = title;

        modalCategory.textContent = category;

        modal.classList.add("show");

        document.body.style.overflow = "hidden";

        const playPromise = modalVideo.play();

        if (playPromise !== undefined) {

            playPromise.catch(() => {});

        }

    });

});


/*=========================================================
CLOSE MODAL
=========================================================*/

function closeModal(){

    modal.classList.remove("show");

    modalVideo.pause();

    modalVideo.currentTime = 0;

    modalSource.src = "";

    modalVideo.load();

    document.body.style.overflow = "";

}


/*=========================================================
BUTTON CLOSE
=========================================================*/

closeButton.addEventListener("click", closeModal);


/*=========================================================
CLICK OUTSIDE
=========================================================*/

modal.addEventListener("click",(e)=>{

    if(e.target === modal){

        closeModal();

    }

});


/*=========================================================
ESC KEY
=========================================================*/

window.addEventListener("keydown",(e)=>{

    if(e.key === "Escape"){

        closeModal();

    }

});


/*=========================================================
PAUSE IF TAB CHANGES
=========================================================*/

document.addEventListener("visibilitychange",()=>{

    if(document.hidden){

        modalVideo.pause();

    }

});


/*=========================================================
PRELOAD NEXT VIDEO
=========================================================*/

const preloadQueue = [];

watchButtons.forEach((button)=>{

    const video = button.dataset.video;

    if(video){

        const preload = document.createElement("link");

        preload.rel = "preload";

        preload.as = "video";

        preload.href = video;

        preloadQueue.push(preload);

    }

});

window.addEventListener("load",()=>{

    preloadQueue.forEach(item=>{

        document.head.appendChild(item);

    });

});


/*=========================================================
STOP PREVIEW WHEN MODAL OPENS
=========================================================*/

function stopPreviewVideos(){

    document.querySelectorAll(".project-card video").forEach(video=>{

        video.pause();

        video.currentTime = 0;

    });

}

watchButtons.forEach(btn=>{

    btn.addEventListener("click",stopPreviewVideos);

});
/*=========================================================
PROJECTS.JS
Part 3B
Filtering • Mobile • Performance
=========================================================*/


/*=========================================================
CATEGORY FILTER
=========================================================*/

const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const filter = button.dataset.filter;

        projects.forEach((card,index)=>{

            if(
                filter === "all" ||
                card.classList.contains(filter)
            ){

                card.style.removeProperty("display");

                requestAnimationFrame(()=>{

                    card.style.opacity = "1";
                    card.style.transform =
                    "translateY(0) scale(1)";

                });

            }else{

                card.style.opacity = "0";

                card.style.transform =
                "translateY(30px) scale(.96)";

                setTimeout(()=>{

                    card.style.display = "none";

                },250);

            }

        });

    });

});


/*=========================================================
PROJECT CARD HOVER EFFECT
=========================================================*/

projects.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.classList.add("hover");

    });

    card.addEventListener("mouseleave",()=>{

        card.classList.remove("hover");

    });

});


/*=========================================================
AUTO PAUSE WHEN OUT OF VIEW
=========================================================*/

const previewVideos =
document.querySelectorAll(".project-card video");

const previewObserver =
new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        const video = entry.target;

        if(entry.isIntersecting){

            return;

        }

        video.pause();

        video.currentTime = 0;

    });

},

{

    threshold:.15

}

);

previewVideos.forEach(video=>{

    previewObserver.observe(video);

});


/*=========================================================
MOBILE TAP PREVIEW
=========================================================*/

if(window.matchMedia("(pointer:coarse)").matches){

    projects.forEach(card=>{

        const video = card.querySelector("video");

        let playing = false;

        card.addEventListener("click",(e)=>{

            if(
                e.target.closest(".watch-btn")
            ) return;

            if(!playing){

                video.play().catch(()=>{});

                playing = true;

            }else{

                video.pause();

                video.currentTime = 0;

                playing = false;

            }

        });

    });

}


/*=========================================================
RESET FILTER WHEN PAGE RELOADS
=========================================================*/

window.addEventListener("pageshow",()=>{

    const first =
    document.querySelector(".filter-btn");

    if(first){

        first.click();

    }

});


/*=========================================================
VIDEO ENDED
=========================================================*/

previewVideos.forEach(video=>{

    video.addEventListener("ended",()=>{

        video.currentTime = 0;

        video.play().catch(()=>{});

    });

});


/*=========================================================
PROJECT CARD TILT
=========================================================*/

projects.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        if(window.innerWidth < 992) return;

        const rect =
        card.getBoundingClientRect();

        const x =
        (e.clientX-rect.left)/rect.width-.5;

        const y =
        (e.clientY-rect.top)/rect.height-.5;

        card.style.transform=`

            perspective(1000px)

            rotateY(${x*10}deg)

            rotateX(${y*-10}deg)

            translateY(-12px)

        `;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});


/*=========================================================
IMAGE POSTER FADE
=========================================================*/

previewVideos.forEach(video=>{

    video.addEventListener("play",()=>{

        video.style.opacity="1";

    });

});


/*=========================================================
PERFORMANCE
=========================================================*/

let resizeTimer;

window.addEventListener("resize",()=>{

    clearTimeout(resizeTimer);

    resizeTimer=setTimeout(()=>{

        previewVideos.forEach(video=>{

            video.pause();

            video.currentTime=0;

        });

    },200);

});


/*=========================================================
END
=========================================================*/