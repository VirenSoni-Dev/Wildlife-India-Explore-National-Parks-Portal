const Parks = {

   "ranthambore": {
      id: "ranthambore",
      name: "Ranthambore National Park",
      titleTag: "Ranthambore National Park - Wildlife India",
      heroImage: "",
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
         image: "",
         imageAlt: "The ancient Ranthambore Fort overlooking the national park."
      },
      fauna: [
         { name: "Bengal Tiger", imageUrl: "" },
         { name: "Indian Leopard", imageUrl: "" },
         { name: "Sambar Deer", imageUrl: "" },
         { name: "Sloth Bear", imageUrl: "" },
         { name: "Mugger Crocodile", imageUrl: "" },
         { name: "Indian Peafowl", imageUrl: "" }
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
      },
      gallery: [
         { imageUrl: "", altText: "A tiger walking on a dirt path in Ranthambore." },
         { imageUrl: "", altText: "A herd of spotted deer in a forest clearing." },
         { imageUrl: "", altText: "A large Sambar deer with impressive antlers." },
         { imageUrl: "", altText: "A peacock displaying its vibrant feathers." }
      ]
   }




   // To add a new park, copy the "ranthambore" object,
   // change the key (e.g., to "jim-corbett"), and update the values.
};


export default Parks;