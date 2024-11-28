function ScrolledTransition(){
    if (window.scrollY >= 100) {
        document.getElementsByTagName('header')[0].classList.add('transparent-header');
        document.getElementsByClassName('nav-title')[0].style.color = 'var(--secondary-color)';
        console.log(document.getElementsByClassName('nav-title')[0]);
    } else {
        document.getElementsByTagName('header')[0].classList.remove('transparent-header');
        document.getElementsByClassName('nav-title')[0].style.color = 'var(--trinary-color)';
    }
};

window.addEventListener('scroll', ScrolledTransition);