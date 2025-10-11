pathReturner = (path) => {
   return ('.' + path)
}

fetch('../components/header.html')
   .then(response => {
      return response.text();
   }).then(data => {
      document.getElementById('headerPlaceholder').innerHTML = data;
      lucide.createIcons();
      document.querySelectorAll('.nav-link a').forEach(a => {
         if (a.pathname === window.location.pathname) {
            a.parentElement.classList.add('current');
         }
      })
   })

fetch('../components/footer.html')
   .then(reponse => {
      return response.text();
   }).then(data => {
      document.getElementById('footerPlaceholder').innerHTML = data;
      lucide.createIcons();
   })