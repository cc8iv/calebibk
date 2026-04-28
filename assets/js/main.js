    const hamburger = document.querySelector('.hamburger');
    const navlist = document.querySelector('.nav-list');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navlist.classList.toggle('active');
    });

    // Reset nav when resizing back to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 600) {
            hamburger.classList.remove('active');
            navlist.classList.remove('active');
        }
    });

    // Active link highlighting using Intersection Observer
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.menu a');

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${entry.target.id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));


    // contact form
    document.querySelector('.contact-form form').addEventListener('submit', function(event) {
    event.preventDefault();

    clearFields = () => {
        inputs = this.querySelectorAll('input')
        inputs.forEach(input => input.value = '');

        this.querySelector('textarea').value = '';
    }

    // These IDs must match your EmailJS dashboard values
    const serviceID = 'service_v44s539';
    const templateID = 'template_d5pdbwn';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('Email sent successfully!');
            clearFields();
        }, (err) => {
            alert('Failed to send email: ' + JSON.stringify(err));
            clearFields();
        });
    });

