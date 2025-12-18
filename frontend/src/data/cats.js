import tigerImg   from '../assets/cats/tiger.jpg';
import lionImg    from '../assets/cats/lion.jpg';
import jaguarImg  from '../assets/cats/jaguar.jpg';
import leopardImg from '../assets/cats/leopard.jpg';

export const cats = [
  {
    id: "tiger",
    attribution: "By Charles James Sharp, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=88142663",
    name: "Bengal Tiger",
    scientificName: "Panthera tigris",
    description: "The Bengal tiger is a population of the Panthera tigris tigris subspecies. It ranks among the biggest wild cats alive today.",
    image: tigerImg,
    stats: {
      lifespan: "10-15 years",
      speed: "56 km/h",
      weight: "230 kg",
      stripePattern: "Unique as fingerprints"
    },
    funFacts: [
        "Tigers love to swim and play in water.",
        "They are the largest cat species in the world."
    ],

    /* NEW:
       Scalable Document Structure
       Format:

       sections: [
         {
         title: "",
         content: [
           "",
           ""
         ]
         },
         {
         title: "",
         content: [
           "",
           ""
         ]
         }
         etc etc...
       ]                           */
    sections: [
      {
        title: "Physical Characteristics",
        content: [
          "The Bengal tiger's coat is yellow to light orange, with stripes ranging from dark brown to black. The belly and the interior parts of the limbs are white, and the tail is orange with black rings.",
          "Male Bengal tigers have an average total length of 270 to 310 cm (110 to 120 in) including the tail, while females measure 240 to 265 cm (94 to 104 in). The weight of males ranges from 180 to 258 kg (397 to 569 lb), while that of females ranges from 100 to 160 kg (220 to 350 lb)."
        ]
      },
      {
        title: "Hunting and Diet",
        content: [
          "Tigers are carnivores. They prefer hunting large ungulates such as chital, sambar, gaur, and to a lesser extent also barasingha, water buffalo, nilgai, serow and takin. Among the medium-sized prey species they frequently kill wild boar.",
          "They hunt primarily by sight and sound rather than smell. They typically hunt alone and ambush their prey as most other cats do, overpowering them from any angle, using their body size and strength to knock the prey off balance."
        ]
      }
    ]
  },
  {
    id: "lion",
    attribution: "By © Giles Laurent, gileslaurent.com, License CC BY-SA, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=151312926",
    name: "African Lion",
    scientificName: "Panthera leo",
    description: "The lion is a large cat of the genus Panthera native to Africa and India. It uses a cooperative hunting strategy.",
    image: lionImg,
    stats: {
      lifespan: "10-14 years",
      speed: "74 km/h",
      weight: "206 kg",
      roarVolume: "114 decibels"
    },
    funFacts: [
        "A lion's roar can be heard from 5 miles away.",
        "Female lions do 90% of the hunting."
    ],
    sections: [
      {
        title: "Social Structure",
        content: [
          "Lions are the most social of all wild felids, living in related groups with their offspring. Such a group is called a 'pride'. Groups of male lions are called 'coalitions'.",
          "Females form the stable social unit in a pride and do not tolerate outside females. Membership only changes with the births and deaths of lionesses, although some females do leave and become nomadic."
        ]
      }
    ]
  },
  {
    id: "jaguar",
    attribution: "By Charles J. Sharp - Own work, from Sharp Photography, sharpphotography.co.uk, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=87748243",
    name: "Jaguar",
    scientificName: "Panthera onca",
    description: "The jaguar is a large cat species and the only living member of the genus Panthera native to the Americas.",
    image: jaguarImg,
    stats: {
      lifespan: "12-15 years",
      speed: "80 km/h",
      weight: "96 kg",
      biteForce: "1500 PSI"
    },
    funFacts: [
        "Jaguars hunt by biting directly through the skull.",
        "Unlike most cats, they love water."
    ]
  },
  {
    id: "leopard",
    attribution: "By Sumeet Moghe - File:African_leopard_male.jpg, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=107561790",
    name: "Leopard",
    scientificName: "Panthera pardus",
    description: "The leopard is one of the five extant species in the genus Panthera. It is known for its well-camouflaged fur and climbing ability.",
    image: leopardImg,
    stats: {
      lifespan: "12-17 years",
      speed: "58 km/h",
      weight: "51 kg",
      climbingAbility: "Excellent"
    }
  }
];
