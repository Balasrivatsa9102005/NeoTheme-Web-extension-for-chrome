document.addEventListener('DOMContentLoaded', () => {
    const drawerToggle = document.getElementById('drawerToggle');
    const shortcutDrawer = document.getElementById('shortcutDrawer');
    let isOpen = false;

    drawerToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        isOpen = !isOpen;
        
        shortcutDrawer.classList.toggle('active');
        drawerToggle.classList.toggle('open');
        
        const icon = drawerToggle.querySelector('i');
        icon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    });

    document.addEventListener('click', (e) => {
        if (isOpen && 
            !shortcutDrawer.contains(e.target) && 
            e.target !== drawerToggle &&
            !drawerToggle.contains(e.target)) {
            
            shortcutDrawer.classList.remove('active');
            drawerToggle.classList.remove('open');
            isOpen = false;
            drawerToggle.querySelector('i').className = 'fa-solid fa-bars';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isOpen) {
            shortcutDrawer.classList.remove('active');
            drawerToggle.classList.remove('open');
            isOpen = false;
            drawerToggle.querySelector('i').className = 'fa-solid fa-bars';
        }
    });

    shortcutDrawer.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});