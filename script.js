const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const body = document.querySelector('body');


hamburger.addEventListener('click', () => {
    navbar.classList.toggle('open');
    hamburger.classList.toggle('open');
    body.classList.toggle('fixed');
});

body.addEventListener('click', (event) => {
    if (!event.target.closest('.navbar') && !event.target.closest('.hamburger')) {
        navbar.classList.remove('open');
        hamburger.classList.remove('open');
        body.classList.remove('fixed');
    }
});

const navLinks = document.querySelectorAll('.navbar a');
const sections = document.querySelectorAll('section');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');

        navLinks.forEach(link => link.classList.remove('activebar'));

        e.currentTarget.classList.add('activebar');


        if (targetId === '#home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }


        if (window.innerWidth <= 768) {
            hamburger.classList.remove('open');
            navbar.classList.remove('open');
        }
    });
});

window.addEventListener('scroll', () => {
    let currentSection = null;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - window.innerHeight / 2;
        const sectionBottom = section.offsetTop + section.offsetHeight - window.innerHeight / 2;

        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionBottom) {
            currentSection = section.id;
        }
    });

    navLinks.forEach(link => link.classList.remove('activebar'));

    const activeLink = document.querySelector(`a[href="#${currentSection}"]`);
    if (activeLink) {
        activeLink.classList.add('activebar');
    } else {
        const homeLink = document.querySelector('a[href="#home"]');
        homeLink.classList.add('activebar');
    }
});