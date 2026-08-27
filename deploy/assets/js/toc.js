function generateTOC() {
    const article = document.querySelector('.post-content');
    if (!article) return;
    
    const headers = article.querySelectorAll('h1, h2, h3, h4, h5, h6');
    if (headers.length === 0) {
        const tocContainer = document.querySelector('.toc-container');
        if (tocContainer) tocContainer.style.display = 'none';
        const mobileTocToggle = document.getElementById('mobile-toc-toggle');
        if (mobileTocToggle) mobileTocToggle.style.display = 'none';
        return;
    }
    
    function createTOCList(container) {
        const ul = document.createElement('ul');
        ul.className = 'toc-list';
        
        headers.forEach((header, index) => {
            const id = 'heading-' + index;
            header.id = id;
            
            const li = document.createElement('li');
            const level = parseInt(header.tagName.substring(1));
            li.className = 'toc-item toc-level-' + level;
            
            const a = document.createElement('a');
            a.href = '#' + id;
            a.textContent = header.textContent;
            a.className = 'toc-link';
            
            li.appendChild(a);
            ul.appendChild(li);
        });
        
        container.appendChild(ul);
    }
    
    const desktopToc = document.getElementById('toc');
    if (desktopToc) {
        createTOCList(desktopToc);
    }
    
    const mobileToc = document.getElementById('mobile-toc');
    if (mobileToc) {
        createTOCList(mobileToc);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    generateTOC();
});
