const header = document.querySelector('header');
const sidebarButton = document.getElementById('sidebar-toggle-button');
const sidebarIcon = document.getElementById('sidebarIcon');

function openSidebar() {
   header.classList.add('sidebar-open');
   sidebarButton.setAttribute('aria-expanded', 'true');
   sidebarButton.innerHTML = '<i id="sidebarIcon" data-lucide="x"></i>';
   lucide.createIcons();
}

function closeSidebar() {
   header.classList.remove('sidebar-open');
   sidebarButton.setAttribute('aria-expanded', 'false');
   sidebarButton.innerHTML = '<i id="sidebarIcon" data-lucide="menu"></i>';
   lucide.createIcons();
}

function toggleSidebar() {
   const isMenuOpen = header.classList.contains('sidebar-open');

   if (isMenuOpen) {
      closeSidebar();
   } else {
      openSidebar();
   }
}

window.toggleSidebar = toggleSidebar;