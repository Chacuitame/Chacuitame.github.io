// Theme toggle (dark <-> light) with localStorage persistence
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Mermaid
    if (window.mermaid) {
        mermaid.initialize({
            startOnLoad: true,
            theme: document.documentElement.getAttribute('data-theme') === 'light' ? 'default' : 'dark'
        });
    }

    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            // Update mermaid theme
            if (window.mermaid) {
                mermaid.initialize({ theme: next === 'light' ? 'default' : 'dark' });
            }
        });
    }

    // Mobile nav toggle
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('nav__links--open');
            navToggle.setAttribute('aria-expanded', isOpen);
        });

        // Close mobile nav when a link is clicked
        navLinks.querySelectorAll('.nav__link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('nav__links--open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Intersection Observer for scroll-triggered animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-on-scroll--visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    // Skill bar animation
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fills = entry.target.querySelectorAll('.skill__fill');
                fills.forEach(fill => {
                    fill.classList.add('skill__fill--animated');
                });
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.about__skills').forEach(el => skillObserver.observe(el));

    // Nav background on scroll
    const nav = document.querySelector('.nav');
    if (nav) {
        const onScroll = () => {
            if (window.scrollY > 50) {
                nav.classList.add('nav--scrolled');
            } else {
                nav.classList.remove('nav--scrolled');
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        // Run once on load in case page is already scrolled
        onScroll();
    }

    // Active nav link highlighting
    const sections = document.querySelectorAll('section[id]');
    const allNavLinks = document.querySelectorAll('.nav__link');

    const highlightNav = () => {
        let current = '';
        sections.forEach(section => {
            const top = section.offsetTop - 100;
            if (window.scrollY >= top) {
                current = section.getAttribute('id');
            }
        });
        allNavLinks.forEach(link => {
            link.classList.remove('nav__link--active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('nav__link--active');
            }
        });
    };

    window.addEventListener('scroll', highlightNav, { passive: true });
    highlightNav();
});
