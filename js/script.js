pathReturner = (path) => {
   return ('.' + path)
}

fetch('../components/header.html')
   .then(response => {
      return response.text();
   }).then(data => {
      const header = document.getElementById('headerPlaceholder')
      if (header === null) return;
      header.innerHTML = data;
      lucide.createIcons();
      document.querySelectorAll('.nav-link a').forEach(a => {
         if (a.pathname === window.location.pathname || (a.pathname === `${window.location.pathname}.html`)
            || (a.pathname === `${window.location.pathname}/`)
            || (a.pathname === `${window.location.pathname}.html/`)
         ) {
            a.parentElement.classList.add('current');
         }
      })
   })

fetch('../components/footer.html')
   .then(response => {
      return response.text();
   }).then(data => {
      const footer = document.getElementById('footerPlaceholder')
      if (footer === null) return;
      footer.innerHTML = data;
      lucide.createIcons();
      document.getElementById("year").textContent = new Date().getFullYear();
   })

function toggleDarkMode() {
   const body = document.body;
   localStorage.getItem('theme') === 'dark' ? localStorage.setItem('theme', 'light') : localStorage.setItem('theme', 'dark');
   if (body.getAttribute('data-theme') === 'dark') {
      body.setAttribute('data-theme', 'light');
   } else {
      body.setAttribute('data-theme', 'dark');
   }
}

function applySavedTheme() {
   const body = document.body;
   const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
   body.setAttribute('data-theme', savedTheme);
   localStorage.setItem('theme', savedTheme);
}

document.addEventListener('DOMContentLoaded', applySavedTheme);