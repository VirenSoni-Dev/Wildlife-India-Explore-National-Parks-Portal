import parksData from '../data/parks-details.js';

const speed = 100;

function typeWriter(element, Text, index = 0, callback) {
   if (index < Text.length) {
      element.innerHTML += Text.charAt(index);
      setTimeout(() => typeWriter(element, Text, index+1, callback), speed);
   } else {
      if (callback) callback();
   }
}

function parkDetailsPage() {
   const contentPlaceholder = document.getElementById('contentPlaceholder');
   const parkID = new URLSearchParams(window.location.search).get('park');
   contentPlaceholder.innerHTML = '';

   const park = parksData[parkID];

   if (park) {
      document.title = park.titleTag || 'Wildlife India - Explore National Parks';

      const generateFaunaHTML = (faunaList) => {
         if (!faunaList || faunaList.length === 0) return '';
         return `
            <section class="fauna-section">
               <div id="wrapper">
                  <h2 class="section-title">The Inhabitants</h2>
                  <div class="fauna-grid">
                     ${faunaList.map(fauna => {
            return `
                           <div class="fauna-card">
                              <img src="${fauna.imageUrl}" alt="${fauna.name}">
                              <h4>${fauna.name}</h4>
                           </div>
                        `
         }).join('')}
                  </div>
               </div>
            </section>
         `;
      }

      const generateSafariHTML = (safariInfo) => {
         if (!safariInfo) return '';
         return `
         <section class="safari-section">
         <div id="wrapper">
         <h2 class="section-title">Planning Your Safari</h2>
         <div class="safari-grid">
         <div class="safari-card">
         <h3>Safari Timings</h3>
         <ul>
         <li><strong>Summer (Apr - Jun):</strong> ${safariInfo.timings.summer}</li>
         <li><strong>Winter (Oct - Mar):</strong> ${safariInfo.timings.winter}</li>
         </ul>
         <p><em>${safariInfo.timings.notes}</em></p>
         </div>
         <div class="safari-card">
         <h3>Vehicle Options</h3>
         <ul>
         <li><strong>Jeep (6-seater):</strong> ${safariInfo.vehicles.jeep}</li>
         <li><strong>Canter (20-seater):</strong> ${safariInfo.vehicles.canter}</li>
         </ul>
         </div>
         </div>
         </div>
         </section>
         `;
      }

      const fullHTML = `
      <section class="park-hero">
      <div id="wrapper" class="park-hero-grid">
      <div class="park-hero-text">
      <h1 id="name"></h1>
      <p id="tagline"></p>
      </div>
      <div class="park-hero-image">
      <img src="${park.heroImage}" alt="${park.name}">
      </div>
      </div>
      </section>
      
      <section class="quick-facts">
      <div id="wrapper" class="facts-grid">
      <div class="fact-item">
      <div class="icon"><i data-lucide="map-pin"></i></div>
      <h3>Location</h3>
      <p>${park.quickFacts.location}</p>
      </div>
      <div class="fact-item">
      <div class="icon"><i data-lucide="paw-print"></i></div>
      <h3>Known For</h3>
      <p>${park.quickFacts.knownFor}</p>
      </div>
      <div class="fact-item">
      <div class="icon"><i data-lucide="calendar"></i></div>
      <h3>Best Time to Visit</h3>
      <p>${park.quickFacts.bestTime}</p>
      </div>
      <div class="fact-item">
      <div class="icon"><i data-lucide="maximize"></i></div>
      <h3>Area</h3>
      <p>${park.quickFacts.area}</p>
      </div>
      </div>
      </section>
      
      <section class="description">
      <div id="wrapper" class="two-col-layout">
      <div>
      <h2>${park.about.title}</h2>
      <p>${park.about.description1}</p>
      <p>${park.about.description2}</p>
      </div>
      <img src="${park.about.image}" alt="${park.about.imageAlt}">
      </div>
      </section>
      
      ${generateFaunaHTML(park.fauna)}
      ${generateSafariHTML(park.safariInfo)}
      `;

      contentPlaceholder.innerHTML = fullHTML;
   }
   else {
      contentPlaceholder.innerHTML = `
      <section class="description" style="padding-top: 150px;">
      <div id="wrapper" style="text-align:center; display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:27vh; gap:1.5rem;">
      <h2>Park Not Found</h2>
      <p>Sorry, we couldn't find the park you're looking for. Please check the name and try again.</p>
      <a href="./pages/explore.html" style="text-decoration:none; color:var(--accent-color); font-weight:600;">Back to Explore Page</a>
      </div>
      </section>
      `;
   }

   lucide.createIcons();

   const parkName = `${park ? park.name : ''}`;
   const tagline = `${park && park.tagline ? park.tagline : ''}`;
   const NameElement = document.getElementById('name');
   const TaglineElement = document.getElementById('tagline');

   typeWriter(NameElement, parkName.toString(), 0, () => {
      typeWriter(TaglineElement, tagline.toString());
   });
}

document.addEventListener('DOMContentLoaded', parkDetailsPage);