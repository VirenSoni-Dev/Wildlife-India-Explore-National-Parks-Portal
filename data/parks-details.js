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
         description1: "Ranthambore is a place of legend. Once the private hunting grounds of the Maharajas of Jaipur, today it stands as one of the most renowned tiger reserves in the world. The park's landscape is a unique tapestry of dense tropical forests, open bushland, and rocky ridges, all dominated by the majestic 10th-century Ranthambore Fort.",
         description2: "This blend of wild nature and ancient history creates an unparalleled atmosphere. Spotting a majestic tiger prowling through the historic ruins is an experience that transports you back in time, offering a glimpse into a world where nature and heritage are one.",
         image: "https://www.trawell.in/admin/images/upload/176328524Ranthambore_Fort_Main.jpg",
         imageAlt: "The ancient Ranthambore Fort overlooking the national park."
      },
      fauna: [
         { name: "Bengal Tiger", imageUrl: "https://i.pinimg.com/1200x/c1/6b/ac/c16bac3441a4002c799b928677a2d7de.jpg" },
         { name: "Indian Leopard", imageUrl: "https://i.pinimg.com/736x/cc/a5/a4/cca5a41c2ef088d21cc9f354a9c0eb22.jpg" },
         { name: "Sambar Deer", imageUrl: "https://i.pinimg.com/736x/33/0a/39/330a395b9c9a5414a5b979275d9c9ee3.jpg" },
         { name: "Sloth Bear", imageUrl: "https://i.pinimg.com/736x/01/fc/b8/01fcb89de0f72efd5231064de01e31cf.jpg" },
         { name: "Mugger Crocodile", imageUrl: "https://i.pinimg.com/736x/5e/36/a5/5e36a52899bf36c14dfcc8588e792ff2.jpg" },
         { name: "Peacock", imageUrl: "https://i.pinimg.com/736x/80/4b/7e/804b7e380a03c72810022e435a326df8.jpg" }
      ],
      safariInfo: {
         timings: {
            summer: "6:00 AM - 9:30 AM & 3:00 PM - 6:30 PM",
            winter: "6:30 AM - 10:00 AM & 2:30 PM - 6:00 PM",
            notes: "Timings are approximate and can vary. The park is closed during the monsoon season (July - September)."
         },
         vehicles: {
            jeep: "Ideal for small groups and photographers, offering more flexibility and maneuverability.",
            canter: "A larger, open-top bus that is a more budget-friendly option for solo travelers or larger groups."
         }
      }
   },

   "jim-corbett": {
      id: "jim-corbett",
      name: "Jim Corbett National Park",
      titleTag: "Jim Corbett National Park - Wildlife India",
      heroImage: "https://images.unsplash.com/photo-1594212235339-01f654b2d354?auto=format&fit=crop&w=1200&q=80",
      tagline: "India's first national park, a land of roars and trumpets.",
      quickFacts: { location: "Uttarakhand", knownFor: "Tigers & Elephants", bestTime: "Nov - Jun", area: "1,318 sq. km" },
      about: {
         title: "The Pioneer of Indian Conservation",
         description1: "Established in 1936, Jim Corbett National Park is India’s oldest and most prestigious. Named after the legendary hunter-turned-conservationist, it was the first park to come under the Project Tiger initiative.",
         description2: "Its diverse landscape, ranging from hills and riverine belts to grasslands, supports a rich variety of wildlife, including the majestic Bengal tiger and the Asiatic elephant.",
         image: "https://uttarakhandtourism.gov.in/sites/default/files/2021-02/Jim-Corbett-National-Park.jpg",
         imageAlt: "A misty morning over the Ramganga River in Corbett."
      },
      fauna: [
         { name: "Bengal Tiger", imageUrl: "" }, { name: "Asiatic Elephant", imageUrl: "" }, { name: "Gharial", imageUrl: "" }
      ]
   },
   "kaziranga": {
      id: "kaziranga",
      name: "Kaziranga National Park",
      titleTag: "Kaziranga National Park - Wildlife India",
      heroImage: "https://images.unsplash.com/photo-1543833146-d5526c813241?auto=format&fit=crop&w=1200&q=80",
      tagline: "Home of the great Indian one-horned rhinoceros.",
      quickFacts: { location: "Assam", knownFor: "One-Horned Rhino", bestTime: "Nov - Apr", area: "430 sq. km" },
      about: {
         title: "A Conservation Success Story",
         description1: "Kaziranga is a UNESCO World Heritage Site and a global symbol of conservation success. It hosts two-thirds of the world's great one-horned rhinoceroses, bringing them back from the brink of extinction.",
         description2: "The park's vast expanse of tall elephant grass, marshland, and dense tropical forests is also home to a high density of tigers and a significant population of elephants, wild water buffalo, and swamp deer.",
         image: "https://www.kaziranga-national-park.com/images/ambience.jpg",
         imageAlt: "A rhino grazing in the tall grasslands of Kaziranga."
      },
      fauna: [{ name: "One-Horned Rhino", imageUrl: "" }, { name: "Bengal Tiger", imageUrl: "" }, { name: "Wild Water Buffalo", imageUrl: "" }]
   },
   "sundarbans": {
      id: "sundarbans",
      name: "Sundarbans National Park",
      titleTag: "Sundarbans National Park - Wildlife India",
      heroImage: "https://images.unsplash.com/photo-1598142079984-c151d6614f11?auto=format&fit=crop&w=1200&q=80",
      tagline: "The mystical mangrove kingdom of the swimming tigers.",
      quickFacts: { location: "West Bengal", knownFor: "Royal Bengal Tiger", bestTime: "Sep - Mar", area: "1,330 sq. km" },
      about: {
         title: "The World's Largest Mangrove Forest",
         description1: "A UNESCO World Heritage Site, the Sundarbans is a breathtaking network of tidal waterways, mudflats, and small islands of salt-tolerant mangrove forests. It is one of the largest such forests in the world.",
         description2: "This unique ecosystem is famous for its population of Royal Bengal Tigers, which have adapted to an amphibious life, swimming in the saline waters and walking on the mudflats.",
         image: "https://whc.unesco.org/uploads/sites/gallery/original/site_0452_0006.jpg",
         imageAlt: "A narrow waterway cutting through the dense mangrove forest."
      },
      fauna: [{ name: "Royal Bengal Tiger", imageUrl: "" }, { name: "Saltwater Crocodile", imageUrl: "" }, { name: "Spotted Deer", imageUrl: "" }]
   },
   "gir": {
      id: "gir",
      name: "Gir National Park",
      titleTag: "Gir National Park - Wildlife India",
      heroImage: "https://images.unsplash.com/photo-1600869339965-985421590e0b?auto=format&fit=crop&w=1200&q=80",
      tagline: "The last bastion of the majestic Asiatic Lion.",
      quickFacts: { location: "Gujarat", knownFor: "Asiatic Lion", bestTime: "Dec - Mar", area: "1,412 sq. km" },
      about: {
         title: "The Royal Kingdom",
         description1: "Gir Forest is the only place in the world where the magnificent Asiatic Lion can be found in its natural habitat. This sanctuary is a testament to successful conservation, having saved the species from extinction.",
         description2: "The rugged scrubland and dry deciduous forests of Gir also provide a perfect habitat for leopards, sambar deer, and a rich diversity of birdlife.",
         image: "https://www.girnationalpark.in/images/gir-national-park-1.jpg",
         imageAlt: "A pride of Asiatic lions resting in the shade."
      },
      fauna: [{ name: "Asiatic Lion", imageUrl: "" }, { name: "Indian Leopard", imageUrl: "" }, { name: "Sambar Deer", imageUrl: "" }]
   },
   "bandhavgarh": {
      id: "bandhavgarh",
      name: "Bandhavgarh National Park",
      titleTag: "Bandhavgarh National Park - Wildlife India",
      heroImage: "https://images.unsplash.com/photo-1598966904221-95560a88b50e?auto=format&fit=crop&w=1200&q=80",
      tagline: "Known for the highest density of Bengal tigers in India.",
      quickFacts: { location: "Madhya Pradesh", knownFor: "Bengal Tigers", bestTime: "Oct - Jun", area: "716 sq. km" },
      about: {
         title: "The Land of the Tiger",
         description1: "Nestled in the Vindhya Hills, Bandhavgarh is renowned for its spectacular tiger sightings. The park features a mix of dense sal forests and open grasslands, centered around the ancient Bandhavgarh Fort.",
         description2: "Its high tiger density makes it one of the best places in India to witness the majestic predator in its natural domain.",
         image: "https://www.bandhavgarh-national-park.com/images/bandhavgarh-fort.jpg",
         imageAlt: "The ancient Bandhavgarh fort on a hilltop."
      },
      fauna: [{ name: "Bengal Tiger", imageUrl: "" }, { name: "White Tiger", imageUrl: "" }, { name: "Sloth Bear", imageUrl: "" }]
   },
   "kanha": {
      id: "kanha",
      name: "Kanha National Park",
      titleTag: "Kanha National Park - Wildlife India",
      heroImage: "https://images.unsplash.com/photo-1605286571569-4249514a63c6?auto=format&fit=crop&w=1200&q=80",
      tagline: "The inspiration for Rudyard Kipling's 'The Jungle Book'.",
      quickFacts: { location: "Madhya Pradesh", knownFor: "Tigers & Barasingha", bestTime: "Oct - Jun", area: "940 sq. km" },
      about: {
         title: "Kipling's Muse",
         description1: "The lush sal and bamboo forests, grassy meadows, and ravines of Kanha provided the inspiration for Rudyard Kipling’s classic novel. The park is respected for its excellent conservation efforts.",
         description2: "Kanha is most famous for saving the Barasingha (swamp deer) from near extinction, and it remains a prime habitat for the Bengal tiger.",
         image: "https://www.kanha-national-park.com/images/bamni-dadar.jpg",
         imageAlt: "A stunning sunset over the meadows of Kanha."
      },
      fauna: [{ name: "Bengal Tiger", imageUrl: "" }, { name: "Barasingha", imageUrl: "" }, { name: "Indian Wild Dog", imageUrl: "" }]
   },
   "periyar": {
      id: "periyar",
      name: "Periyar National Park",
      titleTag: "Periyar National Park - Wildlife India",
      heroImage: "https://images.unsplash.com/photo-1618378613437-33d3c7fbe8b5?auto=format&fit=crop&w=1200&q=80",
      tagline: "A picturesque elephant and tiger reserve in the Cardamom Hills.",
      quickFacts: { location: "Kerala", knownFor: "Elephants & Tigers", bestTime: "Sep - Apr", area: "925 sq. km" },
      about: {
         title: "The Lakeside Sanctuary",
         description1: "Set high in the Western Ghats, Periyar is centered around a beautiful artificial lake created by the Mullaperiyar Dam. The park is famous for its boat safaris, which offer a unique way to observe wildlife.",
         description2: "It is a notable elephant reserve and tiger reserve, where herds of elephants can be seen playing by the lake's edge. It's also rich in birdlife and endemic species.",
         image: "https://www.periyar-national-park.com/images/periyar-lake-1.jpg",
         imageAlt: "Elephants drinking water by the Periyar Lake."
      },
      fauna: [{ name: "Asiatic Elephant", imageUrl: "" }, { name: "Bengal Tiger", imageUrl: "" }, { name: "Nilgiri Langur", imageUrl: "" }]
   },
   "great-himalayan": {
      id: "great-himalayan",
      name: "Great Himalayan National Park",
      titleTag: "Great Himalayan National Park - Wildlife India",
      heroImage: "https://images.unsplash.com/photo-1585400903908-3011a00a5df9?auto=format&fit=crop&w=1200&q=80",
      tagline: "A pristine wilderness in the high altitudes of the Himalayas.",
      quickFacts: { location: "Himachal Pradesh", knownFor: "Blue Sheep & Snow Leopard", bestTime: "Apr - Jun, Sep - Nov", area: "1,171 sq. km" },
      about: {
         title: "A UNESCO World Heritage Site",
         description1: "Located in the Kullu region, this park is a stunning landscape of alpine peaks, meadows, and riverine forests. It's a haven for trekkers and wildlife enthusiasts seeking solitude.",
         description2: "The park protects numerous species, including the elusive snow leopard, the Himalayan tahr, and the vibrant western tragopan.",
         image: "https://www.greathimalayannationalpark.org/wp-content/uploads/2016/06/GHNP-3.jpg",
         imageAlt: "A scenic view of the Tirthan Valley within the park."
      },
      fauna: [{ name: "Snow Leopard", imageUrl: "" }, { name: "Himalayan Blue Sheep", imageUrl: "" }, { name: "Himalayan Tahr", imageUrl: "" }]
   },
   "hemis": {
      id: "hemis",
      name: "Hemis National Park",
      titleTag: "Hemis National Park - Wildlife India",
      heroImage: "https://images.unsplash.com/photo-1595340638515-321f5793b585?auto=format&fit=crop&w=1200&q=80",
      tagline: "The high-altitude home of the elusive snow leopard.",
      quickFacts: { location: "Ladakh", knownFor: "Snow Leopards", bestTime: "May - Sep", area: "4,400 sq. km" },
      about: {
         title: "The Rooftop of India",
         description1: "Hemis is India's largest national park, located in the starkly beautiful, high-altitude desert of Ladakh. It is globally famous for having the highest density of snow leopards in any protected area.",
         description2: "This rugged landscape of barren mountains and deep gorges is also home to the Tibetan wolf, Eurasian brown bear, and the blue sheep.",
         image: "https://static.toiimg.com/photo/49259272.cms",
         imageAlt: "A snow leopard on a rocky cliff in Hemis."
      },
      fauna: [{ name: "Snow Leopard", imageUrl: "" }, { name: "Tibetan Wolf", imageUrl: "" }, { name: "Blue Sheep (Bharal)", imageUrl: "" }]
   }





   // To add a new park, copy the "ranthambore" object,
   // change the key (e.g., to "jim-corbett"), and update the values.
};


export default Parks;