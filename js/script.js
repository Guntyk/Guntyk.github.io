let lastScroll = 0;
const defaultOffset = 500;
const header = document.querySelector('.header');
const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop
const containHide = () => header.classList.contains('hide');
const triggerAbout = 700;
const line = document.querySelector('.line');
const containBack = () => line.classList.contains('back');
const shadow = document.querySelector('.shadow');
const containBack1 = () => shadow.classList.contains('back1');
const text = document.querySelector('.about__about');
const containBack2 = () => text.classList.contains('back2');
const triggerCards = 800;
const card = document.querySelector('.about__box_1');
const containOpacity = () => card.classList.contains('opacity');
const card1 = document.querySelector('.about__box_2');
const containOpacity1 = () => card1.classList.contains('opacity');
const card2 = document.querySelector('.about__box_3');
const containOpacity2 = () => card2.classList.contains('opacity');
const triggerForm = 2300;
const form = document.querySelector('.form__title_1');
const containSlide = () => form.classList.contains('slide');
const form1 = document.querySelector('.form__title_2');
const containSlide1 = () => form1.classList.contains('slide');
const carpet = document.querySelector('.carpet');
const containClose = () => carpet.classList.contains('close');
window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        header.classList.add('hide');
    }
    else if(scrollPosition() < lastScroll && containHide() && scrollPosition() < defaultOffset) {
        header.classList.remove('hide');
    }

    if(scrollPosition() > lastScroll && !containBack() && scrollPosition() > triggerAbout) {
        line.classList.add('back');
    }

    if(scrollPosition() > lastScroll && !containBack1() && scrollPosition() > triggerAbout) {
        shadow.classList.add('back1');
    }

    if(scrollPosition() > lastScroll && !containBack2() && scrollPosition() > triggerAbout) {
        text.classList.add('back2');
    }

    if(scrollPosition() > lastScroll && !containOpacity() && scrollPosition() > triggerCards) {
        card.classList.add('opacity');
    }

    if(scrollPosition() > lastScroll && !containOpacity1() && scrollPosition() > triggerCards) {
        card1.classList.add('opacity');
    }

    if(scrollPosition() > lastScroll && !containOpacity2() && scrollPosition() > triggerCards) {
        card2.classList.add('opacity');
    }

    if(scrollPosition() > lastScroll && !containSlide() && scrollPosition() > triggerForm) {
        form.classList.add('slide');
    }

    if(scrollPosition() > lastScroll && !containSlide1() && scrollPosition() > triggerForm) {
        form1.classList.add('slide');
    }

    lastScroll = scrollPosition();
});
window.addEventListener('mousemove', function() {
    carpet.classList.add('close');
})

// Parallax
let name = document.querySelector('.name');
let t1 = document.querySelector('.triangle__1');
let t2 = document.querySelector('.triangle__2');
let t3 = document.querySelector('.triangle__3');
let t4 = document.querySelector('.triangle__4');
let about = document.querySelector('.about__title');
let advantages = document.querySelector('.advantages__title');
window.addEventListener('scroll', function() {
    var value = window.scrollY;
    name.style.marginBottom = value * 0.7 + 'px';
    t1.style.marginTop = value * 0.2 + 'px';
    t2.style.marginTop = -value * 0.2 + 'px';
    t3.style.marginRight = value * 0.3 + 'px';
    t4.style.marginTop = value * 0.2 + 'px';
    about.style.marginTop = -value * 0.1 + 'px';
    advantages.style.marginTop = -value * 0.1 + 'px';
});

// Navigation
const list = document.querySelectorAll('.list');
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click',activeLink));
// Triangle Parallax NOT FINISHED
// document.addEventListener("mousemove", parallax);
// function parallax(e){
//     this.querySelectorAll('.layer').forEach(layer => {
//         const speed = layer.getAttribute('data-speed')

//         const x = (window.innerWidth - e.pageX*speed)/100
//         const y = (window.innerHeight - e.pageY*speed)/100

//         layer.style.transform = `translateX(${x}px) translateX(${y}px)`
//     })
// }