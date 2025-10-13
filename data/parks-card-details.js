const parks = [
   {
      name: "Ranthambore National Park",
      state: "Rajasthan",
      animals: [
         "Bengal Tiger",
         "Indian Leopard",
         "Sambar Deer",
         "Sloth Bear",
         "Mugger Crocodile",
         "Indian Peafowl"
      ],
      image: "../images/national-parks/ranthambore.webp",
      shortDesc:
         "One of the largest and most famous national parks in Northern India, renowned for its Bengal tigers.",
      detailPage: "ranthambore"
   },
   {
      name: "Jim Corbett National Park",
      state: "Uttarakhand",
      animals: ["Bengal Tiger", "Elephant", "Leopard", "Gharial", "King Cobra"],
      image: "../images/national-parks/jim-corbett.webp",
      shortDesc:
         "India’s oldest national park, known for its rich biodiversity and tiger conservation success.",
      detailPage: "jim-corbett"
   },
   {
      name: "Kaziranga National Park",
      state: "Assam",
      animals: [
         "Indian Rhinoceros",
         "Elephant",
         "Tiger",
         "Wild Buffalo",
         "Swamp Deer"
      ],
      image: "../images/national-parks/kaziranga.webp",
      shortDesc:
         "A UNESCO World Heritage Site, home to the world’s largest population of one-horned rhinos.",
      detailPage: "kaziranga"
   },
   {
      name: "Sundarbans National Park",
      state: "West Bengal",
      animals: [
         "Royal Bengal Tiger",
         "Saltwater Crocodile",
         "Fishing Cat",
         "Monitor Lizard"
      ],
      image: "../images/national-parks/sundarbans.webp",
      shortDesc:
         "Mangrove forest delta famous for its swimming tigers and diverse aquatic life.",
      detailPage: "sundarbans"
   },
   {
      name: "Gir National Park",
      state: "Gujarat",
      animals: [
         "Asiatic Lion",
         "Leopard",
         "Chital",
         "Nilgai",
         "Indian Cobra",
         "Sambar"
      ],
      image: "../images/national-parks/gir.webp",
      shortDesc:
         "The only place in the world where the Asiatic Lion can be found in the wild.",
      detailPage: "gir"
   },
   // {
   //    name: "Bandhavgarh National Park",
   //    state: "Madhya Pradesh",
   //    animals: ["Bengal Tiger", "Leopard", "Spotted Deer", "Wild Boar", "Jackal"],
   //    image: "../images/national-parks/bandhavgarh.webp",
   //    shortDesc:
   //       "Known for having one of the highest densities of Bengal tigers in India.",
   //    detailPage: "bandhavgarh"
   // },
   {
      name: "Kanha National Park",
      state: "Madhya Pradesh",
      animals: ["Barasingha", "Tiger", "Leopard", "Sloth Bear", "Indian Wild Dog"],
      image: "../images/national-parks/kanha.webp",
      shortDesc:
         "The inspiration for 'The Jungle Book', this park is famous for its lush meadows and tiger sightings.",
      detailPage: "kanha"
   },
   {
      name: "Pench National Park",
      state: "Madhya Pradesh",
      animals: ["Tiger", "Leopard", "Indian Bison", "Langur", "Peacock"],
      image: "../images/national-parks/pench.webp",
      shortDesc:
         "Straddling Madhya Pradesh and Maharashtra, Pench is rich in wildlife and dense teak forests.",
      detailPage: "pench"
   },
   {
      name: "Tadoba Andhari Tiger Reserve",
      state: "Maharashtra",
      animals: ["Bengal Tiger", "Leopard", "Sloth Bear", "Gaur", "Wild Dog"],
      image: "../images/national-parks/tadoba.webp",
      shortDesc:
         "Maharashtra’s oldest and largest national park, known for excellent tiger sightings.",
      detailPage: "tadoba"
   },
   {
      name: "Periyar National Park",
      state: "Kerala",
      animals: ["Elephant", "Tiger", "Gaur", "Sambar", "Macaque", "Otter"],
      image: "../images/national-parks/periyar.webp",
      shortDesc:
         "A scenic park surrounding a lake in the Western Ghats, home to elephants and rare flora.",
      detailPage: "periyar"
   },
   {
      name: "Kanger Valley National Park",
      state: "Chhattisgarh",
      animals: ["Tiger", "Leopard", "Wild Boar", "Sambar Deer", "Rhesus Macaque", "Monitor Lizard"],
      image: "../images/national-parks/kanger-valley.webp",
      shortDesc:
         "A stunning park in the Bastar region known for its lush forests, limestone caves, waterfalls, and rich biodiversity.",
      detailPage: "kanger-valley"
   },
   {
      name: "Eravikulam National Park",
      state: "Kerala",
      animals: ["Nilgiri Tahr", "Leopard", "Elephant", "Sambar Deer"],
      image: "../images/national-parks/eravikulam.webp",
      shortDesc:
         "Famous for the endangered Nilgiri Tahr and the blooming Neelakurinji flowers.",
      detailPage: "eravikulam"
   },
   {
      name: "Valmiki National Park",
      state: "Bihar",
      animals: ["Tiger", "Leopard", "Sloth Bear", "Wild Dog", "Deer"],
      image: "../images/national-parks/valmiki.webp",
      shortDesc:
         "The only tiger reserve in Bihar, home to rich flora, fauna, and Himalayan foothill scenery.",
      detailPage: "valmiki"
   },
   {
      name: "Dudhwa National Park",
      state: "Uttar Pradesh",
      animals: ["Tiger", "Leopard", "Barasingha", "Rhinoceros"],
      image: "../images/national-parks/dudhwa.webp",
      shortDesc:
         "Lush forests along the India-Nepal border, part of the Terai ecosystem rich in wildlife.",
      detailPage: "dudhwa"
   },
   {
      name: "Sariska Tiger Reserve",
      state: "Rajasthan",
      animals: ["Bengal Tiger", "Leopard", "Sambar", "Wild Boar", "Hyena"],
      image: "../images/national-parks/sariska.webp",
      shortDesc:
         "Located in the Aravalli Hills, this park is known for relocated tigers and dry deciduous forests.",
      detailPage: "sariska"
   },
   {
      name: "Keoladeo National Park",
      state: "Rajasthan",
      animals: ["Siberian Crane", "Painted Stork", "Pelican", "Duck", "Coot"],
      image: "../images/national-parks/keoladeo.webp",
      shortDesc:
         "A birdwatcher’s paradise and UNESCO World Heritage Site, famous for migratory birds.",
      detailPage: "keoladeo"
   },
   {
      name: "Manas National Park",
      state: "Assam",
      animals: ["Tiger", "Elephant", "Rhinoceros", "Golden Langur"],
      image: "../images/national-parks/manas.webp",
      shortDesc:
         "UNESCO World Heritage Site known for scenic beauty and rare species like the golden langur.",
      detailPage: "manas"
   },
   {
      name: "Namdapha National Park",
      state: "Arunachal Pradesh",
      animals: ["Snow Leopard", "Clouded Leopard", "Tiger", "Hoolock Gibbon"],
      image: "../images/national-parks/namdapha.webp",
      shortDesc:
         "India’s third-largest national park, with rich biodiversity and dense forests.",
      detailPage: "namdapha"
   },
   {
      name: "Great Himalayan National Park",
      state: "Himachal Pradesh",
      animals: ["Snow Leopard", "Blue Sheep", "Himalayan Tahr", "Musk Deer"],
      image: "../images/national-parks/great-himalayan.webp",
      shortDesc:
         "A UNESCO World Heritage Site featuring alpine meadows, glaciers, and rare mountain species.",
      detailPage: "great-himalayan"
   },
   {
      name: "Hemis National Park",
      state: "Ladakh",
      animals: ["Snow Leopard", "Tibetan Wolf", "Blue Sheep", "Argali"],
      image: "../images/national-parks/hemis.webp",
      shortDesc:
         "High-altitude cold desert park, globally famous for its population of snow leopards.",
      detailPage: "hemis"
   },
   // {
   //    name: "Desert National Park",
   //    state: "Rajasthan",
   //    animals: ["Great Indian Bustard", "Desert Fox", "Chinkara", "Lizard"],
   //    image: "../images/national-parks/desert.webp",
   //    shortDesc:
   //       "A vast Thar Desert ecosystem known for sand dunes and rare desert species.",
   //    detailPage: "desert"
   // },
   {
      name: "Bannerghatta National Park",
      state: "Karnataka",
      animals: ["Tiger", "Leopard", "Elephant", "Sloth Bear", "Bison"],
      image: "../images/national-parks/bannerghatta.webp",
      shortDesc:
         "Located near Bengaluru, combining a national park, zoo, and biological reserve.",
      detailPage: "bannerghatta"
   },
   {
      name: "Nagarhole National Park",
      state: "Karnataka",
      animals: ["Elephant", "Tiger", "Leopard", "Deer", "Wild Dog"],
      image: "../images/national-parks/nagarhole.webp",
      shortDesc:
         "Part of the Nilgiri Biosphere Reserve, known for dense teak forests and elephants.",
      detailPage: "nagarhole"
   },
   {
      name: "Simlipal National Park",
      state: "Odisha",
      animals: ["Tiger", "Elephant", "Leopard", "Bison", "Deer"],
      image: "../images/national-parks/simlipal.webp",
      shortDesc:
         "One of India’s oldest tiger reserves with waterfalls and semi-evergreen forests.",
      detailPage: "simlipal"
   },
   {
      name: "Satpura National Park",
      state: "Madhya Pradesh",
      animals: ["Tiger", "Leopard", "Sloth Bear", "Wild Boar", "Crocodile"],
      image: "../images/national-parks/satpura.webp",
      shortDesc:
         "A scenic park offering boat safaris and trekking amidst hills, gorges, and forests.",
      detailPage: "satpura"
   }
];



export default parks;