
// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Scroll-to-Top Button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    themeToggle.innerHTML = isDarkMode ? '<i class="fa fa-regular fa-sun"></i>' : '<i class="fa fa-regular fa-moon"></i>';
});

// Hide Loader
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.style.display = 'none';
});


function openAndDownload(fileUrl) {
    // Open the file in a new tab
    window.open(fileUrl, '_blank');

    // Create an invisible 'a' element for downloading
    let a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'Shashank_Shekhar_Barnwal_CV.pdf'; // Set the download filename
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a); // Clean up
}



document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    entry.target.classList.remove("hidden");
                } else {
                    entry.target.classList.remove("visible");
                    entry.target.classList.add("hidden"); // Reverse animation
                }
            });
        },
        { threshold: 0.3 } // Trigger animation when 30% of element is visible
    );

    // Select all animated elements
    document.querySelectorAll(".animate-from-left, .animate-from-right, .animate-from-top, .animate-from-bottom").forEach(el => {
        observer.observe(el);
    });
});





function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.home-page').forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

// Show home section by default
document.addEventListener("DOMContentLoaded", function() {
    showSection('home');
});





// 3D Mouse Parallax Effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateY = (x - centerX) / 20;
        const rotateX = (centerY - y) / 20;
        
        card.style.transform = `
            translateZ(50px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
        `;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateZ(0) rotateX(0) rotateY(0)';
    });
});

// Dynamic Depth Adjustment
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const depth = Math.abs(e.clientX - (rect.left + rect.width/2)) * 0.02;
        card.style.transform = `translateZ(${depth}px)`;
    });
});