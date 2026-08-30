document.addEventListener('DOMContentLoaded', () => {

    const authModal = document.getElementById('authModal');
    const loginBtn = document.getElementById('loginBtn');
    const getStartedBtn = document.getElementById('getStartedBtn');
    const closeModal = document.getElementById('closeModal');
    const hamburgerButton = document.querySelector('.hamburger-button');
    const navLinks = document.getElementById('navLinks');

    const tabLogin = document.getElementById('tabLogin');
    const tabSignup = document.getElementById('tabSignup');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    function openModal(tab = 'login') {
        authModal.classList.add('open');
        if (tab === 'signup') {
            activateTab(tabSignup, signupForm);
        } else {
            activateTab(tabLogin, loginForm);
        }
    }

    function closeModalFunc() {
        authModal.classList.remove('open');
    }

    function activateTab(activeBtn, activeForm) {
        tabLogin.classList.remove('active');
        tabSignup.classList.remove('active');
        loginForm.classList.remove('active');
        signupForm.classList.remove('active');

        activeBtn.classList.add('active');
        activeForm.classList.add('active');
    }

    if (loginBtn) loginBtn.addEventListener('click', () => openModal('login'));
    if (getStartedBtn) getStartedBtn.addEventListener('click', () => openModal('signup'));
    if (closeModal) closeModal.addEventListener('click', closeModalFunc);

    if (hamburgerButton && navLinks) {
        hamburgerButton.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('open');
            hamburgerButton.classList.toggle('is-open', isOpen);
            hamburgerButton.setAttribute('aria-expanded', String(isOpen));
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                hamburgerButton.classList.remove('is-open');
                hamburgerButton.setAttribute('aria-expanded', 'false');
            });
        });

        document.addEventListener('click', (event) => {
            if (!navLinks.contains(event.target) && !hamburgerButton.contains(event.target)) {
                navLinks.classList.remove('open');
                hamburgerButton.classList.remove('is-open');
                hamburgerButton.setAttribute('aria-expanded', 'false');
            }
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === authModal) closeModalFunc();
    });

    tabLogin.addEventListener('click', () => activateTab(tabLogin, loginForm));
    tabSignup.addEventListener('click', () => activateTab(tabSignup, signupForm));

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Login Successful!');
        closeModalFunc();
    });

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Account created successfully!');
        closeModalFunc();
    });

    // 2. CARDS SLIDER FUNCTIONALITY
    const cardsContainer = document.getElementById('cardsContainer');
    const slideLeftBtn = document.getElementById('slideLeft');
    const slideRightBtn = document.getElementById('slideRight');

    if (slideLeftBtn && slideRightBtn && cardsContainer) {
        slideRightBtn.addEventListener('click', () => {
            cardsContainer.scrollBy({ left: 320, behavior: 'smooth' });
        });

        slideLeftBtn.addEventListener('click', () => {
            cardsContainer.scrollBy({ left: -320, behavior: 'smooth' });
        });
    }

    // 3. SCROLL ANIMATIONS (INTERSECTION OBSERVER)
    const animatedElements = document.querySelectorAll('.fade-in-up');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => observer.observe(el));
});