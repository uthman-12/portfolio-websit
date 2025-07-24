// Modern JavaScript for Portfolio Website

class PortfolioApp {
    constructor() {
        this.activeSection = 'hero';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupScrollSpy();
        this.setupProgressBars();
        this.renderProjects();
        this.setupTabSwitching();
        this.setupScrollAnimations();
        this.initializeLucideIcons();
    }

    initializeLucideIcons() {
        // Initialize Lucide icons after DOM is loaded
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    setupEventListeners() {
        // Navigation scroll events
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                this.scrollToSection(targetId);
            });
        });

        // Mobile menu toggle
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');
        
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                hamburger.classList.toggle('active');
            });
        }

        // Smooth scroll for hero buttons
        document.querySelectorAll('[onclick*="scrollToSection"]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const match = btn.getAttribute('onclick').match(/scrollToSection\('([^']+)'\)/);
                if (match) {
                    this.scrollToSection(match[1]);
                }
            });
        });

        // Contact card interactions
        document.querySelectorAll('.contact-card').forEach(card => {
            card.addEventListener('click', () => {
                const email = card.querySelector('p');
                if (email && email.textContent.includes('@')) {
                    window.location.href = `mailto:${email.textContent}`;
                } else if (email && email.textContent.includes('github')) {
                    window.open(`https://${email.textContent}`, '_blank');
                } else if (email && email.textContent.includes('linkedin')) {
                    window.open(`https://${email.textContent}`, '_blank');
                }
            });
        });
    }

    scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    setupScrollSpy() {
        const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
        const navLinks = document.querySelectorAll('.nav-link');
        
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '-100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    this.activeSection = sectionId;
                    
                    // Update navigation
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(sectionId => {
            const element = document.getElementById(sectionId);
            if (element) {
                observer.observe(element);
            }
        });
    }

    setupProgressBars() {
        const progressBars = document.querySelectorAll('.progress-fill');
        
        const progressObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const progress = progressBar.getAttribute('data-progress');
                    
                    setTimeout(() => {
                        progressBar.style.width = `${progress}%`;
                    }, 200);
                    
                    progressObserver.unobserve(progressBar);
                }
            });
        }, { threshold: 0.5 });

        progressBars.forEach(bar => {
            progressObserver.observe(bar);
        });
    }

    renderProjects() {
        const projectsGrid = document.getElementById('projectsGrid');
        if (!projectsGrid || typeof portfolioData === 'undefined') return;

        const projectsHTML = portfolioData.projects.map(project => {
            const techBadges = project.technologies.map(tech => 
                `<span class="tech-badge">${tech}</span>`
            ).join('');

            return `
                <div class="card project-card" data-category="${project.category}">
                    <div class="card-header">
                        <i data-lucide="${project.icon}" class="project-icon"></i>
                        <i data-lucide="external-link" class="project-icon"></i>
                    </div>
                    <div class="card-content">
                        <h3 style="color: white; font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem;">
                            ${project.title}
                        </h3>
                        <div class="project-tech">
                            ${techBadges}
                        </div>
                        <p class="project-description">
                            ${project.description}
                        </p>
                    </div>
                </div>
            `;
        }).join('');

        projectsGrid.innerHTML = projectsHTML;
        
        // Re-initialize icons for new content
        setTimeout(() => {
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }, 100);

        // Add click events to project cards
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', () => {
                // Add subtle click animation
                card.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    card.style.transform = '';
                }, 150);
            });
        });
    }

    setupTabSwitching() {
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabPanes = document.querySelectorAll('.tab-pane');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const tabId = button.getAttribute('data-tab');
                
                // Update active button
                tabButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Update active pane
                tabPanes.forEach(pane => pane.classList.remove('active'));
                const targetPane = document.getElementById(tabId);
                if (targetPane) {
                    targetPane.classList.add('active');
                    
                    // Trigger progress bar animations for skills
                    const progressBars = targetPane.querySelectorAll('.progress-fill');
                    progressBars.forEach(bar => {
                        const progress = bar.getAttribute('data-progress');
                        bar.style.width = '0%';
                        setTimeout(() => {
                            bar.style.width = `${progress}%`;
                        }, 200);
                    });
                }
            });
        });
    }

    setupScrollAnimations() {
        const animatedElements = document.querySelectorAll('.card, .timeline-item, .contact-card');
        
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in', 'visible');
                    animationObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(element => {
            element.classList.add('fade-in');
            animationObserver.observe(element);
        });
    }

    // Utility method for smooth scrolling
    static scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}

// Parallax effect for floating orbs
class ParallaxController {
    constructor() {
        this.orbs = document.querySelectorAll('.floating-orb');
        this.init();
    }

    init() {
        if (this.orbs.length === 0) return;
        
        window.addEventListener('scroll', () => {
            requestAnimationFrame(() => this.updateParallax());
        });

        window.addEventListener('mousemove', (e) => {
            requestAnimationFrame(() => this.updateMouseParallax(e));
        });
    }

    updateParallax() {
        const scrollY = window.pageYOffset;
        
        this.orbs.forEach((orb, index) => {
            const speed = 0.5 + (index * 0.2);
            const yPos = -(scrollY * speed);
            orb.style.transform = `translateY(${yPos}px)`;
        });
    }

    updateMouseParallax(e) {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        const moveX = (clientX - centerX) * 0.01;
        const moveY = (clientY - centerY) * 0.01;
        
        this.orbs.forEach((orb, index) => {
            const multiplier = (index + 1) * 0.5;
            orb.style.transform += ` translate(${moveX * multiplier}px, ${moveY * multiplier}px)`;
        });
    }
}

// Typing animation for hero title
class TypingAnimation {
    constructor(element, text, speed = 100) {
        this.element = element;
        this.text = text;
        this.speed = speed;
        this.index = 0;
    }

    start() {
        this.element.textContent = '';
        this.type();
    }

    type() {
        if (this.index < this.text.length) {
            this.element.textContent += this.text.charAt(this.index);
            this.index++;
            setTimeout(() => this.type(), this.speed);
        }
    }
}

// Performance optimization: Debounced scroll handler
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize main portfolio app
    new PortfolioApp();
    
    // Initialize parallax controller
    new ParallaxController();
    
    // Add loading animation
    document.body.classList.add('loaded');
    
    // Initialize typing animation for hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            const typing = new TypingAnimation(heroTitle, originalText, 80);
            typing.start();
        }, 500);
    }
});

// Global scroll function for onclick handlers
function scrollToSection(sectionId) {
    PortfolioApp.scrollToSection(sectionId);
}

// Service Worker registration for PWA capabilities
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}