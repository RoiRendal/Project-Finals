import tigerImg   from '../assets/cats/tiger.jpg';
import lionImg    from '../assets/cats/lion.jpg';
import jaguarImg  from '../assets/cats/jaguar.jpg';
import leopardImg from '../assets/cats/leopard.jpg';

export const cats = [
  {
    id: "tiger",
    attribution: "By Charles James Sharp, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=88142663",
    name: "Tiger",
    scientificName: "Panthera tigris",
    description: "The tiger is a population of the Panthera tigris species. It ranks among the biggest wild cats alive today.",
    image: tigerImg,
    stats: {
      lifespan: "10-15 years",
      speed: "56 km/h",
      weight: "230 kg",
      stripePattern: "Unique as fingerprints"
    },
    funFacts: [
        "Tigers avoid conflict with other predators, such as leopards or bears, unless necessary.",
        "They can survive without food for up to two weeks but become weaker during this time."
    ],
    sections: [
      {
        title: "Physical Characteristics",
        content: [
          "The tiger's coat is yellow to light orange, with stripes ranging from dark brown to black. The belly and the interior parts of the limbs are white, and the tail is orange with black rings.",
          "Male tigers have an average total length of 270 to 310 cm (110 to 120 in) including the tail, while females measure 240 to 265 cm (94 to 104 in). The weight of males ranges from 180 to 258 kg (397 to 569 lb), while that of females ranges from 100 to 160 kg (220 to 350 lb)."
        ]
      },
      {
        title: "Distribution & Habitat",
        content: [
          "The tiger historically ranged from eastern Turkey, northern Iran and Afghanistan to Central Asia and from northern Pakistan through the Indian subcontinent and Indochina to southeastern Siberia, Sumatra, Java and Bali. As of 2022, it inhabits less than 7% of its historical distribution and has a scattered range in the Indian subcontinent, the Indochinese Peninsula, Sumatra, northeastern China and the Russian Far East. As of 2020, India had the largest extent of global tiger habitat with 300,508 km2 (116,027 sq mi), followed by Russia with 195,819 km2 (75,606 sq mi).",
          "The tiger mainly lives in forest habitats and is highly adaptable Records in Central Asia indicate that it primarily inhabited Tugay riverine forests and hilly and lowland forests in the Caucasus. In the Amur-Ussuri region of Russia and China, it inhabits Korean pine and temperate broadleaf and mixed forests; riparian forests serve as dispersal corridors, providing food and water for both tigers and ungulates.",
          "On the Indian subcontinent, it inhabits mainly tropical and subtropical moist broadleaf forests, temperate broadleaf and mixed forests, tropical moist evergreen forests, tropical dry forests, alluvial plains and the mangrove forests of the Sundarbans.",
          "In the Eastern Himalayas, it was documented in temperate forest up to an elevation of 4,200 m (13,800 ft) in Bhutan, of 3,630 m (11,910 ft) in the Mishmi Hills and of 3,139 m (10,299 ft) in Mêdog County, southeastern Tibet. In Thailand, it lives in deciduous and evergreen forests. In Sumatra, it inhabits lowland peat swamp forests and rugged montane forests."
        ]
      },
      {
        title: "Hunting & Diet",
        content: [
          "Tigers are carnivores. They prefer hunting large ungulates such as chital, sambar, gaur, and to a lesser extent also barasingha, water buffalo, nilgai, serow and takin. Among the medium-sized prey species they frequently kill wild boar.",
          "They hunt primarily by sight and sound rather than smell. They typically hunt alone and ambush their prey as most other cats do, overpowering them from any angle, using their body size and strength to knock the prey off balance."
        ]
      },
      {
        title: "Conservation",
        content: [
          "Internationally, the tiger is protected under CITES Appendix I, banning trade of live tigers and their body parts. In Russia, hunting the tiger has been banned since 1952. In Bhutan, it has been protected since 1969 and enlisted as totally protected since 1995. Since 1972, it has been afforded the highest protection level under India's Wild Life (Protection) Act, 1972. In Nepal and Bangladesh, it has been protected since 1973. Since 1976, it has been totally protected under Malaysia's Protection of Wild Life Act, and the country's Wildlife Conservation Act enacted in 2010 increased punishments for wildlife-related crimes. In Indonesia, it has been protected since 1990. In China, the trade in tiger body parts was banned in 1993. The Thai Wildlife Preservation and Protection Act was enacted in 2019 to combat poaching and trading of body parts.",
          "In 1973, the National Tiger Conservation Authority and Project Tiger were founded in India to gain public support for tiger conservation. Since then, 53 tiger reserves covering an area of 75,796 km2 (29,265 sq mi) have been established in the country up to 2022. These efforts contributed to the recovery of India's tiger population between 2006 and 2018 so that it occurs in an area of about 138,200 km2 (53,400 sq mi).",
          "Myanmar's national tiger conservation strategy developed in 2003 comprises management tasks such as restoration of degraded habitats, increasing the extent of protected areas and wildlife corridors, protecting tiger prey species, thwarting tiger killing and illegal trade of its body parts and promoting public awareness through wildlife education programmes."
        ]
      },
      {
        title: "Etymology",
        content: [
          "The Old English tigras derives from Old French tigre, from Latin tigris, which was a borrowing from tigris (Ancient Greek: τίγρις). Since ancient times, the word tigris has been suggested to originate from the Armenian or Persian word for 'arrow', which may also be the origin of the name for the river Tigris. However, today, the names are thought to be homonyms, and the connection between the tiger and the river is doubted."
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
        "They have an amazing jump, and have been recorded springing as far as 36 feet.",
        "For some reason, the pregnant lioness will give birth to a cub away from the rest of the pride."
    ],
    sections: [
      {
        title: "Physical Characteristics",
        content: [
          "The lion is a muscular, broad-chested cat with a short, rounded head, a reduced neck, and round ears; males have broader heads. The fur varies in colour from light buff to silvery grey, yellowish red, and dark brown. The colours of the underparts are generally lighter. A newborn lion has dark spots, which fade as the cub reaches adulthood, although faint spots may still be seen on the legs and underparts. The tail of all lions ends in a dark, hairy tuft that, in some lions, conceals an approximately 5 mm (0.20 in)-long, hard \"spine\" or \"spur\" composed of dermal papillae. The functions of the spur are unknown. The tuft is absent at birth, develops at around 5 1⁄2 months of age, and is readily identifiable at the age of seven months.",
          "Its skull is very similar to that of the tiger, although the frontal region is usually more depressed and flattened and has a slightly shorter postorbital region and broader nasal openings than those of the tiger. Due to the amount of skull variation in the two species, usually only the structure of the lower jaw can be used as a reliable indicator of species."
        ]
      },
      {
        title: "Distribution & Habitat",
        content: [
          "African lions live in scattered populations across sub-Saharan Africa. The lion prefers grassy plains and savannahs, scrub bordering rivers, and open woodlands with bushes. It rarely enters closed forests. On Mount Elgon, the lion has been recorded up to an elevation of 3,600 m (11,800 ft) and close to the snow line on Mount Kenya. Savannahs with an annual rainfall of 300 to 1,500 mm (12 to 59 in) make up the majority of lion habitat in Africa, estimated at 3,390,821 km² (1,309,203 sq mi) at most, but remnant populations are also present in tropical moist forests in West Africa and montane forests in East Africa. The Asiatic lion now survives only in and around Gir National Park in Gujarat, western India. Its habitat is a mixture of dry savannah forest and very dry, deciduous scrub forest.",
          "In Africa, the range of the lion originally spanned most of the central African rainforest zone and the Sahara Desert. In the 1960s, it became extinct in North Africa, except in the southern part of Sudan.",
          "During the mid-Holocene, around 8,000-6,000 years ago, the range of lions expanded into Southeastern and Eastern Europe, partially re-occupying the range of the now extinct cave lion. In Hungary, the modern lion was present from about 4,500 to 3,200 years Before Present. In Ukraine, the modern lion was present from about 6,400 to 2,000 years Before Present. In Greece, it was common, as reported by Herodotus in 480 BC; it was considered rare by 300 BC and extirpated by AD 100."
        ]
      },
      {
        title: "Hunting & Diet",
        content: [
          "The lion is a generalist hypercarnivore and is considered to be both an apex and keystone predator due to its wide prey spectrum. Its prey consists mainly of medium-sized to large ungulates, particularly blue wildebeest, plains zebra, African buffalo, gemsbok, and giraffe. It also frequently takes common warthog despite it being much smaller. In India, chital and sambar deer are the most common wild prey, while livestock contributes significantly to lion kills outside protected areas. It usually avoids adult elephants, rhinoceroses, and hippopotamuses and small prey like dik-diks, hyraxes, hares, and monkeys, and seldom consumes other predators.",
          "Young lions first display stalking behaviour at around three months of age, although they do not participate in hunting until they are almost a year old and begin to hunt effectively when nearing the age of two. Single lions are capable of bringing down zebra and wildebeest, while larger prey like buffalo and giraffe are riskier. In Chobe National Park, large prides have been observed hunting African bush elephants up to around 15 years old in exceptional cases, with the victims being calves, juveniles, and even subadults. In typical group hunts, each lioness has a favoured position in the group, either stalking prey on the \"wing,\" then attacking, or moving a smaller distance in the centre of the group and capturing prey fleeing from other lionesses. Males attached to prides do not usually participate in group hunting. Some evidence suggests, however, that males are just as successful as females; they are typically solo hunters who ambush prey in small bushland. They join in the hunting of large, slower-moving prey like buffalo and even hunt them on their own. Moderately sized hunting groups generally have higher success rates than lone females and larger groups. Lions studied in Queen Elizabeth National Park increased their chances of success when hunting at night and on moonless nights, when the prey was solitary and the cover of bushes dense; the chances of success increased when they attacked from a distance of 20 m (66 ft) and with a grass cover of 80 cm (31 in) tall."
        ]
      },
      {
        title: "Conservation",
        content: [
          "In 2005, Lion Conservation Strategies were developed for West and Central Africa and East and Southern Africa. The strategies seek to maintain suitable habitat, ensure a sufficient wild prey base for lions, reduce factors that lead to further fragmentation of populations, and make lion-human coexistence sustainable. Lion depredation on livestock is significantly reduced in areas where herders keep livestock in improved enclosures. Such measures contribute to mitigating human-lion conflict.",
          "The last refuge of the Asiatic lion population is the 1,412 km² (545 sq mi) Gir National Park and surrounding areas in the region of Saurashtra, or the Kathiawar Peninsula, in Gujarat State, India. The population has risen from approximately 180 lions in 1974 to about 400 in 2010. It is geographically isolated, which can lead to inbreeding and reduced genetic diversity. Since 2008, the Asiatic lion has been listed as Endangered on the IUCN Red List. By 2015, the population had grown to 523 individuals inhabiting an area of 7,000 km² (2,700 sq mi) in Saurashtra. In 2017, about 650 individuals were recorded during the Asiatic Lion Census."
        ]
      },
      {
        title: "Etymology",
        content: [
          "The English word \"lion\" is derived via Anglo-Norman \"liun\" from Latin \"leōnem\" (nominative: \"leō\"), which in turn was a borrowing from Ancient Greek \"λέων\" (léōn). The Hebrew word \"לָבִיא\" \"lavi\" may also be related. The generic name Panthera is traceable to the classical Latin word 'panthēra' and the ancient Greek word 'πάνθηρ' ('panther').",
          ""
        ]
      }
    ]
  },
  {
    id: "jaguar",
    attribution: "By Charles J. Sharp - Own work, from Sharp Photography, sharpphotography.co.uk, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=87748243",
    name: "Jaguar",
    scientificName: "Panthera onca",
    description: "The jaguar (Panthera onca) is a large cat species and the only living member of the genus Panthera that is native to the Americas. With a body length of up to 1.85 m (6 ft 1 in) and a weight of up to 158 kg (348 lb), it is the biggest cat species in the Americas and the third largest in the world. Its distinctively marked coat features pale yellow to tan colored fur covered by spots that transition to rosettes on the sides, although a melanistic black coat appears in some individuals. The jaguar's powerful bite allows it to pierce the carapaces of turtles and tortoises and to employ an unusual killing method: it bites directly through the skull of mammalian prey between the ears to deliver a fatal blow to the brain.",
    image: jaguarImg,
    stats: {
      lifespan: "12-15 years",
      speed: "80 km/h",
      weight: "96 kg",
      biteForce: "1500 PSI"
    },
    funFacts: [
        "The jaguar is the apex predator of its jungle habitat. It has no natural predators other than people.",
        "Jaguars have a highly diverse diet. They prey on more than 85 known species."
    ],
    sections: [
      {
        title: "Physical Characteristics",
        content: [
          "The jaguar is a compact and muscular animal. It is the largest cat native to the Americas and the third largest in the world, exceeded in size only by the tiger and the lion. It stands 57 to 81 cm (22.4 to 31.9 in) tall at the shoulders. Its size and weight vary considerably depending on sex and region: weights in most regions are normally in the range of 56–96 kg (123–212 lb). Exceptionally big males have been recorded to weigh as much as 158 kg (348 lb). The smallest females from Middle America weigh about 36 kg (79 lb). It is sexually dimorphic, with females typically being 10–20% smaller than males. The length from the nose to the base of the tail varies from 1.12 to 1.85 m (3 ft 8 in to 6 ft 1 in). The tail is 45 to 75 cm (18 to 30 in) long and the shortest of any big cat. Its muscular legs are shorter than the legs of other Panthera species with similar body weight.",
          "The jaguar's coat ranges from pale yellow to tan or reddish-yellow, with a whitish underside and covered in black spots. The spots and their shapes vary: on the sides, they become rosettes, which may include one or several dots. The spots on the head and neck are generally solid, as are those on the tail, where they may merge to form bands near the end and create a black tip. They are elongated on the middle of the back, often connecting to create a median stripe, and blotchy on the belly. These patterns serve as camouflage in areas with dense vegetation and patchy shadows. Jaguars living in forests are often darker and considerably smaller than those living in open areas, possibly due to the smaller numbers of large, herbivorous prey in forest areas."
        ]
      },
      {
        title: "Distribution & Habitat",
        content: [
          "In 1999, the jaguar's historic range at the turn of the 20th century was estimated at 19,000,000 km² (7,300,000 sq mi), stretching from the southern United States through Central America to southern Argentina. By the turn of the 21st century, its global range had decreased to about 8,750,000 km² (3,380,000 sq mi), with most declines occurring in the southern United States, northern Mexico, northern Brazil, and southern Argentina. Its present range extends from the United States and Mexico through Central America to South America, comprising Belize, Guatemala, Honduras, Nicaragua, Costa Rica, particularly on the Osa Peninsula, Panama, Colombia, Venezuela, Guyana, Suriname, French Guiana, Ecuador, Peru, Bolivia, Brazil, Paraguay, and Argentina. It is considered to be locally extinct in El Salvador and Uruguay.",
          "Jaguars have been occasionally sighted in Arizona, New Mexico, and Texas, with 62 accounts reported in the 20th century. Between 2012 and 2015, a male vagrant jaguar was recorded in 23 locations in the Santa Rita Mountains. Eight jaguars were photographed in the southwestern US between 1996 and 2024."
        ]
      },
      {
        title: "Hunting & Diet",
        content: [
          "The jaguar is an obligate carnivore and depends solely on flesh for its nutrient requirements. An analysis of 53 studies documenting the diet of the jaguar revealed that its prey ranges in weight from 1 to 130 kg (2.2 to 286.6 lb); it prefers prey weighing 45–85 kg (99–187 lb), with the capybara and the giant anteater being the most selected. When available, it also preys on marsh deer, southern tamandua, collared peccary, and black agouti. In floodplains, jaguars opportunistically take reptiles such as green anacondas, turtles, and caimans. Consumption of reptiles appears to be more frequent in jaguars than in other big cats. One remote population in the Brazilian Pantanal is recorded to primarily feed on aquatic reptiles and fish. The jaguar also preys on livestock in cattle ranching areas where wild prey is scarce. The daily food requirement of a captive jaguar weighing 34 kg (75 lb) was estimated at 1.4 kg (3.1 lb) of meat.",
          "The jaguar's bite force allows it to pierce the carapaces of the yellow-spotted Amazon river turtle and the yellow-footed tortoise. It employs an unusual killing method: it bites mammalian prey directly through the skull between the ears to deliver a fatal bite to the brain. It kills capybara by piercing its canine teeth through the temporal bones of its skull, breaking its zygomatic arch and mandible, and penetrating its brain, often through the ears. It has been hypothesized to be an adaptation to cracking open turtle shells; armored reptiles may have formed an abundant prey base for the jaguar following the late Pleistocene extinctions. However, this is disputed, as even in areas where jaguars prey on reptiles, they are still taken relatively infrequently compared to mammals in spite of their greater abundance."
        ]
      },
      {
        title: "Conservation",
        content: [
          "The jaguar is listed on CITES Appendix I, which means that all international commercial trade in jaguars or their body parts is prohibited. Hunting jaguars is prohibited in Argentina, Brazil, Colombia, French Guiana, Honduras, Nicaragua, Panama, Paraguay, Suriname, the United States, and Venezuela. Hunting jaguars is restricted in Guatemala and Peru. In Ecuador, hunting jaguars is prohibited, and they are classified as threatened with extinction. In Guyana, it is protected as an endangered species, and hunting it is illegal.",
          "In 1986, the Cockscomb Basin Wildlife Sanctuary was established in Belize as the world's first protected area for jaguar conservation."
        ]
      },
      {
        title: "Etymology",
        content: [
          "The word \"jaguar\" is possibly derived from the Tupi-Guarani word yaguara, meaning \"wild beast that overcomes its prey at a bound.\" Because \"jaguar\" also applies to other animals, indigenous peoples in Guyana call it \"jaguareté,\" with the added suffix \"eté,\" meaning \"true beast.\" \"Onca\" is derived from the Portuguese name \"onça\" for a spotted cat that is larger than a lynx; cf. ounce. The word \"panther\" is derived from the classical Latin panthēra, itself from the ancient Greek πάνθηρ (pánthēr).",
          ""
        ]
      }
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
    },
    funFacts: [
      "",
      ""
    ],
  }
  /* === Template ===
  {
    id: "",
    attribution: "",
    name: "",
    scientificName: "",
    description: "",
    image: catImg,
    stats: {
      lifespan: "",
      speed: "",
      weight: "",
      sampleSample: ""
    },
    funFacts: [
        "",
        ""
    ],
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
    ]
  }
  */
];

console.log("hello");
