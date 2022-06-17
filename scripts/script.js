function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

const s = ScrollReveal({
    origin: 'left',
    distance: '30px',
    duration: 1000,
    reset: true
});
s.reveal(`.home_data, .home_img,
            .classify_content, .bike_content,
            .footer_content, .login_container`, {
    interval: 50
})
