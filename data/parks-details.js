const Parks = {
   "ranthambore": {
      id: "ranthambore",
      name: "Ranthambore National Park",
      titleTag: "Ranthambore National Park - Wildlife India",
      heroImage: "./images/national-parks/ranthambore.webp",
      tagline: "Where history meets the wild, and tigers roam free.",
      quickFacts: {
         location: "Rajasthan, India",
         knownFor: "Bengal Tigers",
         bestTime: "October - April",
         area: "1,334 sq. km"
      },
      about: {
         title: "A Royal Hunting Ground Turned Tiger Haven",
         description1: "Ranthambore is a place of legend. Once the private hunting grounds of the Maharajas of Jaipur, today it stands as one of the most renowned tiger reserves in the world.",
         description2: "Spotting a majestic tiger prowling through the historic ruins is an experience that transports you back in time, offering a glimpse into a world where nature and heritage are one.",
         image: "https://www.trawell.in/admin/images/upload/176328524Ranthambore_Fort_Main.jpg",
         imageAlt: "The ancient Ranthambore Fort overlooking the national park."
      },
      fauna: [
         { name: "Bengal Tiger", imageUrl: "https://i.pinimg.com/1200x/c1/6b/ac/c16bac3441a4002c799b928677a2d7de.jpg" }, {name: "Indian Leopard", imageUrl: "https://i.pinimg.com/736x/cc/a5/a4/cca5a41c2ef088d21cc9f354a9c0eb22.jpg" }, {name: "Sambar Deer", imageUrl: "https://i.pinimg.com/736x/33/0a/39/330a395b9c9a5414a5b979275d9c9ee3.jpg" }, {name: "Sloth Bear", imageUrl: "https://i.pinimg.com/736x/01/fc/b8/01fcb89de0f72efd5231064de01e31cf.jpg" }, {name: "Mugger Crocodile", imageUrl: "https://i.pinimg.com/736x/5e/36/a5/5e36a52899bf36c14dfcc8588e792ff2.jpg" }, { name: "Peacock", imageUrl: "https://i.pinimg.com/736x/80/4b/7e/804b7e380a03c72810022e435a326df8.jpg" }
      ],
      safariInfo: {
         timings: {
            summer: "6:00 AM - 9:30 AM & 3:00 PM - 6:30 PM",
            winter: "6:30 AM - 10:00 AM & 2:30 PM - 6:00 PM",
            notes: "Closed during the monsoon season (July - September)."
         },
         vehicles: {
            jeep: "Ideal for small groups and photographers.",
            canter: "Open-top bus option for large groups."
         }
      }
   },

   "jim-corbett": {
      id: "jim-corbett",
      name: "Jim Corbett National Park",
      titleTag: "Jim Corbett National Park - Wildlife India",
      heroImage: "./images/national-parks/jim-corbett.webp",
      tagline: "India's first national park, a land of roars and trumpets.",
      quickFacts: { location: "Uttarakhand", knownFor: "Tigers & Elephants", bestTime: "Nov - Jun", area: "1,318 sq. km" },
      about: {
         title: "The Pioneer of Indian Conservation",
         description1: "Established in 1936, Jim Corbett is India’s oldest park and the first under Project Tiger.",
         description2: "Its landscape of hills and riverine belts shelters Bengal tigers and Asian elephants.",
         image: "./images/park-detail-imgs/jim_corbett_river.webp",
         imageAlt: "A misty morning over the Ramganga River in Corbett."
      },
      fauna: [
         { name: "Bengal Tiger", imageUrl: "https://i.pinimg.com/1200x/c1/6b/ac/c16bac3441a4002c799b928677a2d7de.jpg" },
         { name: "Asiatic Elephant", imageUrl: "./images/animals/asiatic_elephant.jpeg" },
         { name: "Gharial", imageUrl: "https://i.pinimg.com/1200x/83/a2/02/83a202fb0bc534a7aa4f31f0a0d88dce.jpg" }
      ]
   },

   "kaziranga": {
      id: "kaziranga",
      name: "Kaziranga National Park",
      titleTag: "Kaziranga National Park - Wildlife India",
      heroImage: "./images/national-parks/kaziranga.webp",
      tagline: "Home of the great Indian one-horned rhinoceros.",
      quickFacts: { location: "Assam", knownFor: "One-Horned Rhino", bestTime: "Nov - Apr", area: "430 sq. km" },
      about: {
         title: "A Conservation Success Story",
         description1: "Kaziranga hosts two-thirds of the world’s one-horned rhinos, symbolizing conservation success.",
         description2: "Its grasslands and wetlands also support tigers, elephants, and swamp deer.",
         image: "https://stampedmoments.com/wp-content/uploads/2024/11/one-horned-indian-rhino-kaziranga-2.jpg",
         imageAlt: "A rhino grazing in the tall grasslands of Kaziranga."
      },
      fauna: [
         { name: "One-Horned Rhino", imageUrl: "./images/animals/one-horned_rhino.jpeg" },
         { name: "Bengal Tiger", imageUrl: "https://i.pinimg.com/1200x/c1/6b/ac/c16bac3441a4002c799b928677a2d7de.jpg" },
         { name: "Wild Water Buffalo", imageUrl: "https://i.pinimg.com/1200x/b8/24/0d/b8240db13a7c34b971374ba6b7a19c26.jpg" }
      ]
   },

   "sundarbans": {
      id: "sundarbans",
      name: "Sundarbans National Park",
      titleTag: "Sundarbans National Park - Wildlife India",
      heroImage: "./images/national-parks/sundarbans.webp",
      tagline: "The mystical mangrove kingdom of the swimming tigers.",
      quickFacts: { location: "West Bengal", knownFor: "Royal Bengal Tiger", bestTime: "Sep - Mar", area: "1,330 sq. km" },
      about: {
         title: "The World's Largest Mangrove Forest",
         description1: "A UNESCO World Heritage Site, the Sundarbans is a maze of waterways and mangroves.",
         description2: "Home to amphibious Bengal tigers that swim between islands in search of prey.",
         image: "https://aggrp.in/wp-content/uploads/2025/05/AG-New-Horizon-Blog-Sundarban-April-2025.png",
         imageAlt: "A narrow waterway cutting through the dense mangrove forest."
      },
      fauna: [
         { name: "Royal Bengal Tiger", imageUrl: "https://i.pinimg.com/1200x/c1/6b/ac/c16bac3441a4002c799b928677a2d7de.jpg" },
         { name: "Saltwater Crocodile", imageUrl: "https://i.pinimg.com/736x/e9/97/fd/e997fde8a489d7d903cffa3916a7e521.jpg" },
         { name: "Spotted Deer", imageUrl: "https://i.pinimg.com/736x/b7/d1/aa/b7d1aa58865fa289a422b547cd07ce94.jpg" }
      ]
   },

   "gir": {
      id: "gir",
      name: "Gir National Park",
      titleTag: "Gir National Park - Wildlife India",
      heroImage: "./images/national-parks/gir.webp",
      tagline: "The last bastion of the majestic Asiatic Lion.",
      quickFacts: { location: "Gujarat", knownFor: "Asiatic Lion", bestTime: "Dec - Mar", area: "1,412 sq. km" },
      about: {
         title: "The Royal Kingdom",
         description1: "Gir is the only home of the Asiatic lion, saved from extinction through conservation.",
         description2: "Its dry forests are also rich in leopards, deer, and bird species.",
         image: "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/3671/production/_89773931_gettyimages-133909638.jpg",
         imageAlt: "A pride of Asiatic lions resting in the shade."
      },
      fauna: [
         { name: "Asiatic Lion", imageUrl: "https://i.pinimg.com/1200x/7b/1e/b2/7b1eb251e09d92646e3f8ea50a1ea812.jpg" },
         { name: "Indian Leopard", imageUrl: "https://i.pinimg.com/736x/cc/a5/a4/cca5a41c2ef088d21cc9f354a9c0eb22.jpg" },
         { name: "Sambar Deer", imageUrl: "https://i.pinimg.com/736x/33/0a/39/330a395b9c9a5414a5b979275d9c9ee3.jpg" }
      ]
   },

   "bannerghatta": {
      id: "bannerghatta",
      name: "Bannerghatta National Park",
      titleTag: "Bannerghatta National Park - Wildlife India",
      heroImage: "./images/national-parks/bannerghatta.webp",
      tagline: "A wilderness escape near Bangalore, rich in flora and fauna.",
      quickFacts: { location: "Karnataka", knownFor: "Tigers, Lions & Bears", bestTime: "Oct - Jun", area: "260 sq. km" },
      about: {
         title: "The Wild Side of Bengaluru",
         description1: "Bannerghatta National Park is a unique blend of a zoo, safari park, and nature reserve.",
         description2: "It offers tiger, lion, and bear safaris, making it a popular eco-tourism spot near the city.",
         image: "https://dwq3yv87q1b43.cloudfront.net/public/blogs/fit-in/1350x300/Blog_20250301-1616727545-1740809547.jpg",
         imageAlt: "Visitors enjoying a tiger safari at Bannerghatta."
      },
      fauna: [
         { name: "Bengal Tiger", imageUrl: "https://i.pinimg.com/1200x/c1/6b/ac/c16bac3441a4002c799b928677a2d7de.jpg" },
         { name: "Asiatic Lion", imageUrl: "https://i.pinimg.com/1200x/7b/1e/b2/7b1eb251e09d92646e3f8ea50a1ea812.jpg" },
         { name: "Sloth Bear", imageUrl: "https://i.pinimg.com/736x/01/fc/b8/01fcb89de0f72efd5231064de01e31cf.jpg" }
      ]
   },

   "kanha": {
      id: "kanha",
      name: "Kanha National Park",
      titleTag: "Kanha National Park - Wildlife India",
      heroImage: "./images/national-parks/kanha.webp",
      tagline: "The inspiration for Rudyard Kipling's 'The Jungle Book'.",
      quickFacts: { location: "Madhya Pradesh", knownFor: "Tigers & Barasingha", bestTime: "Oct - Jun", area: "940 sq. km" },
      about: {
         title: "Kipling's Muse",
         description1: "The lush sal forests and meadows of Kanha inspired 'The Jungle Book'.",
         description2: "It’s a model of conservation, saving the Barasingha from extinction.",
         image: "https://cdn.shopify.com/s/files/1/0757/0253/4444/files/Kanha_National_park1_480x480.jpg?v=1701958930",
         imageAlt: "A sunset over Kanha's grasslands."
      },
      fauna: [
         { name: "Bengal Tiger", imageUrl: "https://i.pinimg.com/1200x/c1/6b/ac/c16bac3441a4002c799b928677a2d7de.jpg" },
         { name: "Barasingha", imageUrl: "https://i.pinimg.com/736x/a4/11/3b/a4113be5981e12465cc8ec69100dd176.jpg" },
         { name: "Indian Wild Dog", imageUrl: "https://i.pinimg.com/736x/29/11/a2/2911a20be7b0eaf5c17d2f2f72692709.jpg" }
      ]
   },

   "periyar": {
      id: "periyar",
      name: "Periyar National Park",
      titleTag: "Periyar National Park - Wildlife India",
      heroImage: "./images/national-parks/periyar.webp",
      tagline: "A picturesque elephant and tiger reserve in the Cardamom Hills.",
      quickFacts: { location: "Kerala", knownFor: "Elephants & Tigers", bestTime: "Sep - Apr", area: "925 sq. km" },
      about: {
         title: "The Lakeside Sanctuary",
         description1: "Centered around the Periyar Lake, it’s known for elephant herds and scenic boat safaris.",
         description2: "The park is rich in biodiversity, hosting numerous endemic species.",
         image: "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=450,height=450,dpr=2/tour_img/d928ddf7bb7458a7279df3daf514a1a28f1422d8207782187ba682b266fc731e.jpg",
         imageAlt: "Elephants drinking water by the Periyar Lake."
      },
      fauna: [
         { name: "Asiatic Elephant", imageUrl: "./images/animals/asiatic_elephant.jpeg" },
         { name: "Bengal Tiger", imageUrl: "https://i.pinimg.com/1200x/c1/6b/ac/c16bac3441a4002c799b928677a2d7de.jpg" },
         { name: "Nilgiri Langur", imageUrl: "https://i.pinimg.com/736x/38/4b/f9/384bf983439692d8cd339e5e8a8d667a.jpg" }
      ]
   },

   "great-himalayan": {
      id: "great-himalayan",
      name: "Great Himalayan National Park",
      titleTag: "Great Himalayan National Park - Wildlife India",
      heroImage: "./images/national-parks/great-himalayan.webp",
      tagline: "A pristine wilderness in the high altitudes of the Himalayas.",
      quickFacts: { location: "Himachal Pradesh", knownFor: "Blue Sheep & Snow Leopard", bestTime: "Apr - Jun, Sep - Nov", area: "1,171 sq. km" },
      about: {
         title: "A UNESCO World Heritage Site",
         description1: "Located in Kullu, this park features alpine peaks and riverine forests.",
         description2: "It shelters snow leopards, Himalayan tahrs, and western tragopans.",
         image: "https://i0.wp.com/stampedmoments.com/wp-content/uploads/2023/05/gushaini-himalayan-national-park.jpg?fit=1024%2C768&ssl=1",
         imageAlt: "A scenic view of the Tirthan Valley within the park."
      },
      fauna: [
         { name: "Snow Leopard", imageUrl: "https://i.pinimg.com/736x/85/78/a5/8578a587b7dac395337706935fadf465.jpg" },
         { name: "Himalayan Blue Sheep", imageUrl: "https://i.pinimg.com/736x/3e/a1/ca/3ea1ca5425757af019f52bf1d62b8084.jpg" },
         { name: "Himalayan Tahr", imageUrl: "https://i.pinimg.com/736x/d3/0f/68/d30f68eba4fc22eaf5d7b011fac69091.jpg" }
      ]
   },

   "hemis": {
      id: "hemis",
      name: "Hemis National Park",
      titleTag: "Hemis National Park - Wildlife India",
      heroImage: "./images/national-parks/hemis.webp",
      tagline: "The high-altitude home of the elusive snow leopard.",
      quickFacts: { location: "Ladakh", knownFor: "Snow Leopards", bestTime: "May - Sep", area: "4,400 sq. km" },
      about: {
         title: "The Rooftop of India",
         description1: "Hemis, India’s largest national park, lies in Ladakh’s cold desert.",
         description2: "It’s home to snow leopards, Tibetan wolves, and blue sheep.",
         image: "https://voygr.com/wp-content/uploads/2020/06/BJL7332-Edit-2-1.jpg",
         imageAlt: "A snow leopard on a rocky cliff in Hemis."
      },
      fauna: [
         { name: "Snow Leopard", imageUrl: "https://i.pinimg.com/736x/85/78/a5/8578a587b7dac395337706935fadf465.jpg" },
         { name: "Tibetan Wolf", imageUrl: "https://i.pinimg.com/736x/9e/5b/c6/9e5bc6ea14272093751a600db2969eda.jpg" },
         { name: "Blue Sheep (Bharal)", imageUrl: "https://i.pinimg.com/736x/3e/a1/ca/3ea1ca5425757af019f52bf1d62b8084.jpg" }
      ]
   },

   "keoladeo": {
      id: "keoladeo",
      name: "Keoladeo National Park",
      titleTag: "Keoladeo National Park - Wildlife India",
      heroImage: "./images/national-parks/keoladeo.webp",
      tagline: "A birdwatcher’s paradise and UNESCO World Heritage Site.",
      quickFacts: { location: "Rajasthan", knownFor: "Migratory Birds", bestTime: "Oct - Mar", area: "29 sq. km" },
      about: {
         title: "A Wetland Wonderland",
         description1: "Formerly known as Bharatpur Bird Sanctuary, Keoladeo is one of the world’s most important bird nesting and feeding grounds.",
         description2: "It hosts over 370 bird species, including the rare Siberian crane during migration.",
         image: "https://traveltheworldtoday.com/wp-content/uploads/2025/10/best-time-to-visit-keoladeo-national-park.png",
         imageAlt: "Migratory birds flocking over the wetlands of Keoladeo."
      },
      fauna: [
         { name: "Painted Stork", imageUrl: "https://i.pinimg.com/736x/e1/05/62/e105624c8578ed0fb9ab8aa9848f80ff.jpg" },
         { name: "Siberian Crane", imageUrl: "https://i.pinimg.com/736x/0a/3a/18/0a3a18fa974c9ae539906b10ab5fc2df.jpg" },
         { name: "Pelican", imageUrl: "https://i.pinimg.com/736x/b9/35/77/b93577510560c0a03f5dd88380ef6fe9.jpg" }
      ]
   },

   "valmiki": {
      id: "valmiki",
      name: "Valmiki National Park",
      titleTag: "Valmiki National Park - Wildlife India",
      heroImage: "./images/national-parks/valmiki.webp",
      tagline: "The only tiger reserve in Bihar, on the banks of the Gandak River.",
      quickFacts: { location: "Bihar", knownFor: "Bengal Tigers", bestTime: "Nov - Mar", area: "899 sq. km" },
      about: {
         title: "The Forests of Legends",
         description1: "Located in West Champaran, Valmiki is Bihar’s only tiger reserve.",
         description2: "The park’s rivers, grasslands, and Sal forests support a thriving ecosystem with tigers, leopards, and sloth bears.",
         image: "https://vushii.com/uploads/1573560859_Valmiki%20National%20Park.jpg",
         imageAlt: "Dense green forests and riverbanks of Valmiki National Park."
      },
      fauna: [
         { name: "Bengal Tiger", imageUrl: "https://i.pinimg.com/1200x/c1/6b/ac/c16bac3441a4002c799b928677a2d7de.jpg" },
         { name: "Indian Leopard", imageUrl: "https://i.pinimg.com/736x/cc/a5/a4/cca5a41c2ef088d21cc9f354a9c0eb22.jpg" },
         { name: "Sloth Bear", imageUrl: "https://i.pinimg.com/736x/01/fc/b8/01fcb89de0f72efd5231064de01e31cf.jpg" }
      ]
   }
};



export default Parks;