const firstBreakPoint = 950;
let count = 0;

document.getElementById('open-menu').addEventListener('click', function() {
    document.getElementById('nav-list').style.display = 'block';
    document.getElementById('open-menu').style.display = 'none';
    document.getElementById('close-menu').style.display = 'block';
});

document.getElementById('close-menu').addEventListener('click', function() {
    document.getElementById('nav-list').style.display = 'none';
    document.getElementById('close-menu').style.display = 'none';
    document.getElementById('open-menu').style.display = 'block';
});

function handleMediaQueryChange() {
    if (window.matchMedia("(max-width: "+ firstBreakPoint +"px)").matches && count < 1) {
        
        document.getElementById('nav-list').style.display = "none";
        document.getElementById('close-menu').style.display = "none";
        document.getElementById('open-menu').style.display = "block";
        
        let link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'styles/responsive/header-responsive-js.css';
        link.id = 'header-phone-css';

        document.getElementsByTagName('HEAD')[0].appendChild(link);
        count = count + 1;
    } else if (!window.matchMedia("(max-width: "+ firstBreakPoint +"px)").matches) {
        document.getElementById('header-phone-css').remove();
        document.getElementById('nav-list').style.display = "flex";
        document.getElementById('close-menu').style.display = "none";
        document.getElementById('open-menu').style.display = "none";
        count = 0;
    }
  }

window.addEventListener('resize', handleMediaQueryChange);

