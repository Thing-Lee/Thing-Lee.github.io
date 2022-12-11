//Navbar Slider
const menuBtn = document.querySelectorAll('.menu-btn');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.menu li');

//Toggle silderbar open or close
menuBtn.forEach(btn => {btn.addEventListener('click',sideNavToggle);})

function sideNavToggle()
{
    //Animation delay
    let delay = 100;
    //Toggle open class
    menu.classList.toggle('menu-open');

    //Sidenav Link Slide Animations
    setTimeout(() =>{
        //Reset animations after all of them end
        resetAnimations();
    },delay * (links.length + 1));

    //Add animation to links
    links.forEach(link => {
        //Opacity
        link.style.opacity = "0";
        //Animation
        link.style.animation = "slideIn 400ms ease-in-out forwards";
        //Delay
        link.style.animationDelay = delay + "ms";

        //Increase delay for eacj link
        delay += 100;
    });

    /*Reset animations so they can be actived again*/
    function resetAnimations(){
        //Select all items
        links.forEach(link => {
            //Remove animations
            link.style.animation = "none";
            //Set opacity back to default
            link.style.opacity = "1";
        });
    }
}

//Slider
const cntrl = document.querySelectorAll('.slider-cntrl');
const cntrlMob = document.querySelectorAll('.pagination-mobile > li');
const title = document.querySelector('.title');
const subTitle = document.querySelectorAll('.sub-title');
const img = document.querySelector('.thumbnail');
const count = document.querySelector('.slider-count');
const progress = document.querySelector('.progress div');
const introduce = document.querySelector('.introduce');


let id = 0;

//Data 
//Array with image paths for the slider
const images = [
    'img1.jpg',
    'img2.jpg',
    'img3.png',
];

//Progress widths for the slider
const progressWidth = [
    '33%',
    '66%',
    '100%',
];

//Text variations for the slider
const text = [
    '分析',
    '代数',
    '几何',
]

const introduces = [
    '出于对微积分在理论体系上的严格化和精确化,从而确立了在整个自然科学中的基础地位,并运用于自然科学的各个领域',
    '研究数、数量、关系、结构与代数方程（组）的通用解法及其性质的数学分支',
    '研究空间结构及性质的一门学科。它是数学中最基本的研究内容之一，与分析、代数等等具有同样重要的地位，并且关系极为密切',
]

//Pagination Controls
for(let i = 0; i < cntrl.length; i++){
    //Add click event for all pagination
    cntrl[i].addEventListener('click', () => {
        //Run the slider function
        slider(i);
        //Set id to clicked pagination index
        id = i;
        //Stop Auto Slide
        stopAutoSlide();
    });
    //Add click event for all pagination on mobile
    cntrlMob[i].addEventListener('click', () => {
        //Run the slider function
        slider(i);
        //Set id to clicked pagination index
        id = i;
        //Stop Auto Slide
        stopAutoSlide();
    });
}

function slider(i) {
    //Change thumbnail image
    img.src = images[i];
    //Progress progression
    progress.style.width = progressWidth[i];
    //Change Title 
    title.innerText = text[i] + "";
    introduce.innerText = introduces[i]
    //Change Sub Title
    subTitle.forEach(sub => {
        sub.innerText = text[i] + "知识"
    });

    //Change Slide Number
    count.innerText = "/ 0" + (i + 1);

    //Remove active class from all
    for(let i = 0;i < cntrl.length; i++) {
        cntrl[i].classList.remove('active');
        cntrlMob[i].classList.remove('pag-active');
    }

    //Reset active class to clicked element
    cntrl[i].classList.add('active');
    cntrlMob[i].classList.add('pag-active');
}

//Slider Automation
function nextSlide() {
    //Increment img id
    id++;
    /*Check if id is greater than the number of available slides*/
    if (id > cntrl.length  - 1) {
        id = 0;
    }
    //Run the slider function
    slider(id);
}

//Automate Slider
let autoSlide = setInterval(nextSlide, 10000);

//Stop Automatic Slide
function stopAutoSlide() {
    clearInterval(autoSlide);

    //Restart Auto Slider
    autoSlide = setInterval(nextSlide, 10000);
}