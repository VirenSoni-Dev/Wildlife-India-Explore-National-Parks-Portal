import parks from '../data/parks-card-details.js';

const gallery = document.querySelector('#exploreGallery #wrapper');
const searchInput = document.getElementById('searchPark');
const stateFilter = document.getElementById('stateFilter');
const speciesFilter = document.getElementById('speciesFilter');
searchInput.value = "";

const names = parks.map(p => p.name.toLowerCase());
console.log(names);

function populateSpeciesFilter() {
   const species = new Set();
   parks.forEach(park => {
      park.animals.forEach(animal => species.add(animal));
   });
   const speciesArray = Array.from(species).sort();
   console.log(speciesArray);
   speciesArray.forEach(species => {
      const option = document.createElement('option');
      option.value = species;
      option.textContent = species;
      speciesFilter.appendChild(option);
   })
}

function populateStateFilter() {
   const states = new Set();
   parks.forEach(park => states.add(park.state));
   const stateArray = Array.from(states).sort();
   stateArray.forEach(state => {
      const option = document.createElement('option');
      option.value = state;
      option.textContent = state;
      stateFilter.appendChild(option);
   });
}

function applyFilters() {
   const searchValue = searchInput.value.trim().toLowerCase();
   const stateValue = stateFilter.value.trim().toLowerCase();
   const speciesValue = speciesFilter.value.trim().toLowerCase();
   gallery.innerHTML = "";

   const results = parks.filter(p => {
      const matchesSearch = 
         searchValue === "" || p.name.toLowerCase().includes(searchValue)
         || p.state.toLowerCase().includes(searchValue)
         || p.animals.some(a => a.toLowerCase().includes(searchValue));
      
      const matchesState = 
         stateValue === "all" || p.state.toLowerCase() === stateValue;
      
      const matchesSpecies =
         speciesValue === "all" || p.animals.some(a => a.toLowerCase() === speciesValue);

      return matchesSearch && matchesState && matchesSpecies;
   }).sort((a, b) => a.name.localeCompare(b.name));

   console.log(results);
   
   results.forEach(result => {
      const parkCard = document.createElement('div');
      parkCard.classList.add('park-card');
      parkCard.innerHTML = `
         <div class="park-image">
            <img src="${result.image}" alt="${result.name}"
               onerror="this.onerror=null;this.src='https://placehold.co/600x400/7393b3/white?text=Image+not+found';" />
         </div>
         <div class="park-content">
            <span class="tag"><i data-lucide="map-pin"></i> ${result.state}</span>
            <h4>${result.name}</h4>
            <p>${result.shortDesc}</p>
            <a href="../national-parks.html?park=${result.detailPage}" class="hero-btn park-btn"><i class="fa-solid fa-arrow-right"></i> Learn More</a>
         </div>
         `;
   
      gallery.appendChild(parkCard);
   });
   lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', () => {
   populateSpeciesFilter();
   populateStateFilter();
   applyFilters();
});

searchInput.addEventListener('input', applyFilters);
stateFilter.addEventListener('change', applyFilters);
speciesFilter.addEventListener('change', applyFilters);