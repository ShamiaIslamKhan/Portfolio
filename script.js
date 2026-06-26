const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );

        target.scrollIntoView({
            behavior:'smooth'
        });

    });

});

const contactForm = document.querySelector('#contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const name = formData.get('name').trim();
        const email = formData.get('email').trim();
        const subject = formData.get('subject').trim();
        const message = formData.get('message').trim();

        const body = [
            `Name: ${name}`,
            `Email: ${email}`,
            '',
            message
        ].join('\n');

        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=shamiaislamkhan16@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(gmailLink, '_blank');
    });
}
