document.addEventListener("DOMContentLoaded", () => {

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');

                // If it's the chat mockup, trigger the stamp with a slight delay
                if (entry.target.classList.contains('chat-mockup')) {
                    const stamp = entry.target.querySelector('.stamp-wrapper');
                    if (stamp && !stamp.classList.contains('stamp-animate')) {
                        stamp.classList.add('stamp-animate');
                    }
                }

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elements to observe
    const animatedElements = document.querySelectorAll('.reveal, .fade-up');
    animatedElements.forEach((el, index) => {
        // Add subtle staggered delay based on index if they appear together
        el.style.transitionDelay = `${(index % 3) * 0.1}s`;
        observer.observe(el);
    });

    // 3D Tilt Effect on Chat Mockup
    const chatMockup = document.querySelector('.chat-mockup');
    if (chatMockup) {
        chatMockup.addEventListener('mousemove', (e) => {
            const rect = chatMockup.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -5; // max 5 deg
            const rotateY = ((x - centerX) / centerX) * 5;  // max 5 deg

            chatMockup.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        chatMockup.addEventListener('mouseleave', () => {
            chatMockup.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
        });
    }
});
