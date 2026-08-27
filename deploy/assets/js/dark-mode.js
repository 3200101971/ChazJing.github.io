document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('dark-mode-toggle');
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const tocToggle = document.getElementById('toc-toggle');
    const tocWrapper = document.getElementById('toc-wrapper');
    const mobileTocToggle = document.getElementById('mobile-toc-toggle');
    const mobileTocSidebar = document.getElementById('mobile-toc-sidebar');
    const mobileTocOverlay = document.getElementById('mobile-toc-overlay');
    
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        if (toggleBtn) toggleBtn.textContent = '黑夜模式：开';
    }
    
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            
            if (isDark) {
                this.textContent = '黑夜模式：开';
                localStorage.setItem('darkMode', 'true');
            } else {
                this.textContent = '黑夜模式：关';
                localStorage.setItem('darkMode', 'false');
            }
        });
    }
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    if (tocToggle && tocWrapper) {
        tocToggle.addEventListener('click', function() {
            tocWrapper.classList.toggle('active');
        });
        
        document.addEventListener('click', function(e) {
            if (!tocWrapper.contains(e.target) && !tocToggle.contains(e.target)) {
                tocWrapper.classList.remove('active');
            }
        });
    }
    
    function closeMobileTOC() {
        if (mobileTocSidebar) mobileTocSidebar.classList.remove('active');
        if (mobileTocOverlay) mobileTocOverlay.classList.remove('active');
    }
    
    if (mobileTocToggle) {
        mobileTocToggle.addEventListener('click', function() {
            if (mobileTocSidebar) mobileTocSidebar.classList.toggle('active');
            if (mobileTocOverlay) mobileTocOverlay.classList.toggle('active');
        });
    }
    
    if (mobileTocOverlay) {
        mobileTocOverlay.addEventListener('click', closeMobileTOC);
    }
    
    if (mobileTocSidebar) {
        const tocLinks = mobileTocSidebar.querySelectorAll('a');
        tocLinks.forEach(link => {
            link.addEventListener('click', closeMobileTOC);
        });
    }

    // 点击粒子效果
    document.addEventListener('click', function(e) {
        const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6'];
        const particleCount = 6;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'click-particle';
            
            const size = Math.random() * 8 + 4;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const angle = (Math.PI * 2 * i) / particleCount;
            const distance = Math.random() * 50 + 30;
            
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.backgroundColor = color;
            particle.style.left = e.clientX - size / 2 + 'px';
            particle.style.top = e.clientY - size / 2 + 'px';
            
            const endX = Math.cos(angle) * distance;
            const endY = Math.sin(angle) * distance;
            particle.style.setProperty('--end-x', endX + 'px');
            particle.style.setProperty('--end-y', endY + 'px');
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 300);
        }
    });
});
