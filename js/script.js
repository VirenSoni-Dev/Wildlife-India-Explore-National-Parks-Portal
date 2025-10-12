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
         if (a.pathname === window.location.pathname) {
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