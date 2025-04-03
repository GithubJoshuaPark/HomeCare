document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    initThemeToggle();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            // Fix the selector by handling the ID properly
            const targetElement = document.getElementById(targetId.substring(1));
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add active class to nav items on scroll
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Mobile menu toggle (for responsive design)
    const setupMobileMenu = () => {
        const header = document.querySelector('header');
        const nav = document.querySelector('nav');
        const mobileMenuBtn = document.getElementById('mobile-menu-button');
        
        if (mobileMenuBtn) {
            // Add toggle functionality
            mobileMenuBtn.addEventListener('click', () => {
                nav.classList.toggle('active');
                
                const icon = mobileMenuBtn.querySelector('i');
                if (nav.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                    mobileMenuBtn.setAttribute('aria-label', '메뉴 닫기');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                    mobileMenuBtn.setAttribute('aria-label', '메뉴 열기');
                }
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!header.contains(e.target) && nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    const icon = mobileMenuBtn.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                    mobileMenuBtn.setAttribute('aria-label', '메뉴 열기');
                }
            });
            
            // Close menu when clicking on nav links
            nav.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    if (window.innerWidth < 768) {
                        nav.classList.remove('active');
                        const icon = mobileMenuBtn.querySelector('i');
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                        mobileMenuBtn.setAttribute('aria-label', '메뉴 열기');
                    }
                });
            });
        }
    };
    
    // Call mobile menu function
    setupMobileMenu();
    
    // Update mobile menu on resize
    window.addEventListener('resize', () => {
        // No need to recreate the menu on resize anymore
    });
    
    // Add animation to cards when they come into view
    const cards = document.querySelectorAll('.card');
    
    const fadeInOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };
    
    const fadeInObserver = new IntersectionObserver(function(entries, fadeInObserver) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('fade-in');
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, fadeInOptions);
    
    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        fadeInObserver.observe(card);
        
        // Check if card is already in viewport on page load
        if (isElementInViewport(card)) {
            setTimeout(() => {
                card.classList.add('fade-in');
            }, 300);
        }
    });
    
    // Add class to cards when they come into view on scroll
    document.addEventListener('scroll', () => {
        cards.forEach(card => {
            if (isElementInViewport(card) && !card.classList.contains('fade-in')) {
                card.classList.add('fade-in');
            }
        });
    });
    
    // Also check once immediately after page load
    setTimeout(() => {
        cards.forEach(card => {
            if (isElementInViewport(card) && !card.classList.contains('fade-in')) {
                card.classList.add('fade-in');
            }
        });
    }, 500);
    
    // Helper function to check if element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});

// Theme toggle initialization function
function initThemeToggle() {
    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        updateThemeIcon(true);
    } else {
        document.documentElement.classList.remove('dark');
        updateThemeIcon(false);
    }

    // Desktop theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const isDark = document.documentElement.classList.toggle('dark');
            
            // Save preference to localStorage
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            
            // Update icon
            updateThemeIcon(isDark);
        });
    }
}

// Helper function to update theme icon
function updateThemeIcon(isDark) {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;
    
    const icon = themeToggle.querySelector('i');
    if (!icon) return;
    
    if (isDark) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        themeToggle.setAttribute('aria-label', '라이트 모드 전환');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        themeToggle.setAttribute('aria-label', '다크 모드 전환');
    }
}

// Add CSS class for active nav link
document.addEventListener('DOMContentLoaded', function() {
    const addActiveClass = () => {
        const navLinks = document.querySelectorAll('nav a');
        const path = window.location.hash;
        
        navLinks.forEach(link => {
            if (link.getAttribute('href') === path) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
        
        if (!path && navLinks.length > 0) {
            navLinks[0].classList.add('active');
        }
    };
    
    // Call on page load
    addActiveClass();
    
    // Call when hash changes
    window.addEventListener('hashchange', addActiveClass);
});
