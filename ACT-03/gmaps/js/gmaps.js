function initMap() {
  var center = {lat: 50.316, lng: 9.451}

  //marker icon
  var markerIcon = {
    url: "../html/book-icon.png",
    scaledSize: new google.maps.Size(19,25)}; //resizes icon

  //Markers w/ audio
  var locations = [
    //japan
    ['<h1>JAPAN</h1>'+
    '<h2><i>The Bamboo Cutter</i> - Traditional Folktale</h2>' +
    "<p>The tale of the Bamboo Cutter is one of Japan's classic folktales. It's also known as 'The Tale of Princess Kaguya' since the character is the story's true protagonist.</p>" +
    '<audio id="jpn" controls>'+
    '<source src="../audio/japanese-fairy-tales-002-the-bamboo-cutter-and-the-moon-child.4834.mp3#t=00:00:08" type="audio/mpeg;">' +
    '</audio>', 
    36.204, 138.252],

    //germany
    ['<h1>GERMANY</h1>'+
    '<h2><i>Hansel & Gretel</i> - Brothers Grimm</h2>'+
    '<audio controls>'+
    '<source src="https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_19_grimm.mp3#t=00:00:20" type="audio/mpeg;">' +
    '</audio>', 51.165, 10.451],

    //italy
    ['<h1>ITALY</h1>'+
    '<h2><i>Sun, Moon, & Talia</i> - Giambattista Basile</h2>'+
    "<p>This story written by Giambattista Basile is included in his fairy tale collection called the Pentamerone. It is known to be the oldest published version of the 'Sleeping Beauty' fairy tale.</p>" +
    '<audio controls>'+
    '<source src="https://ia800207.us.archive.org/8/items/stories_from_pentamerone_jc_librivox/pentamerone_29_basile_64kb.mp3#t=00:00:58" type="audio/mpeg;">' +
    '</audio>', 41.871, 12.567],

    //denmark
    ['<h1>Copenhagen, DENMARK</h1>'+
    '<h2><i>The Steadfast Tin Soldier</i> - Hans Christian Andersen</h2>'+
    "<p>Although this tale is lesser known than Andersen's other famous tales (The Little Mermaid, The Ugly Duckling, The Princess and the Pea, etc.), it still remains to be one of his beloved tales.</p>" +
    '<audio controls>'+
    '<source src="https://ia800602.us.archive.org/15/items/faery_tales_andersen_1706_librivox/faerytales_13_andersen_64kb.mp3#t=00:00:25" type="audio/mpeg;">' +
    '</audio>', 55.6761, 12.5683],

    //china
    ['<h1>CHINA</h1>'+
    '<h2><i> </i> - Traditional Folktale</h2>'+
    '<audio controls>'+
    '<source src=".ogg" type="audio/ogg;">' +
    '<source src=".mp3" type="audio/mpeg;">' +
    '</audio>', 35.861, 104.1953],

    //uk
    ['<h1>England, UNITED KINGDOM</h1>'+
    '<h2><i>Jack & The Beanstalk</i> - Traditional Fairytale</h2>'+
    "<p>This famous fairytale is of English origin. A common trait between this tale and other English fairytales is the use of a main hero named Jack. These are known as 'Jack Tales'.</p>" +
    '<audio controls>'+
    '<source src=".mp3" type="audio/mpeg;">' +
    '</audio>', 51.50986, -0.118],

    //Greece
    ['<h1>GREECE</h1>'+
    '<h2><i>Orpheus & Eurydice</i> - Traditional Mythology</h2>'+
    '<p>The myth of Orpheus & Eurydice is a famous example of tragic romance from the ancient world. After his wife, Eurydice, dies from a snake bite, a grieving Orpheus ventures to the Underworld for a chance to see her again.</p>' +
    '<audio controls>'+
    '<source src="https://ia802509.us.archive.org/24/items/oldgreeceandrome_1407_librivox/storiesofoldgreeceandrome_14_baker_64kb.mp3" type="audio/mpeg;">' +
    '</audio>', 39.0742, 21.8243],

    //norway
    ['<h1>NORWAY</h1>'+
    '<h2><i>East of the Sun and West of the Moon</i> -  Peter Christen Asbjørnsen and Jørgen Moe</h2>'+
    '<p>Collected from Norway, this fairytale is similar in story structure to "Beauty and the Beast" and the Greek myth of Cupid and Psyche. A young woman sets out to find a prince who was cursed.</p>' +
    '<audio controls>'+
    '<source src="https://ia600706.us.archive.org/12/items/eastsunwestmoon_1011_librivox/eastsunwestmoon_01_asbjoernsen_moe_64kb.mp3#t=00:00:32" type="audio/mpeg;">' +
    '</audio>', 60.472024, 8.468946],

    //france
    ['<h1>FRANCE</h1>'+
    '<h2><i>Cinderella</i> - Charles Perrault</h2>'+
    '<audio controls>'+
    '<source src="https://ia800501.us.archive.org/35/items/fairy_tales_perrault_1105_librivox/fairytalesofcharlesperrault_06_perrault_64kb.mp3#t=00:00:25" type="audio/mpeg;">' +
    '</audio>', 46.227638, 2.213749],

    //philippines
    ['<h1>PHILIPPINES</h1>'+
    '<h2><i>The Legend of the Mayon Volcano</i> - Traditional Folklore</h2>'+
    '<p>Legend has it that a beautiful maiden, Magayon, lived in a place called Ibalon. She is the daughter of Makusog, the chief of the tribe. Magayon was so beautiful that men from different places went to her hometown just to get a glimpse of her beauty. One of those suitors was Pagtuga (or Patuga in other versions), a warrior and the chief of Iraga. In a bid to woo Magayon, Pagtuga brought her all kinds of gifts, like gold, jewels and other precious items.</p>'+
    "<p>Magayon, however, was not moved by Pagtuga's kind gestures. As a young maiden, Magayon liked bathing in the Yawa river. One day, while bathing, Magayon slipped on the rocks. As she did not know how to swim, she shouted for help. Fortunately, a man named Pangaronon (or Ulap in other versions) was passing by the river and heard Magayon's plea for help. He saved her from drowning.</p>" +
    "<p>The incident started a good relationship between Magayon and Pangaronon, who eventually went to Makusog to ask for his daughter's hand in marriage. Makusog, who wanted nothing but happiness for his daughter, approved of Pangaronon for Magayon. News of the wedding reached Pagtuga, who then kidnapped Makusog. He threatened Magayon that he would kill her father if she refused to marry him. In order to save her father, Magayon agreed to marry Pagtuga.</p>" +
    "<p>On the day of their wedding, Pangaronon went to the place of the wedding to try and take Magayon away from Pagtuga. A battle between Pagtuga and Pangaronon ensued. Pangaronon fatally struck Pagtuga. But as Pangaronon and Magayon were about to embrace each other, a poisoned arrow struck Magayon.</p>"+
    "<p>Then, as Pangaronon was kneeling over the dying Magayon, Pagtuga's soldier stabbed him. After the skirmish, Makusog decided to bury Magayon and Pangaronon together. Years passed and people noticed that the land where the lovers were buried started to rise higher and higher.</p>" +
    "<p>The mountain which grew from the land where Magayon and Pangaronon were buried is now known as Mayon Volcano.</p>" +
    '<a href="https://news.abs-cbn.com/life/01/18/18/star-crossed-lovers-the-story-of-magayon-and-pangaronon">Source</a>'
    , 12.879721, 121.774017],
    
    //iran
    ['<h1>IRAN</h1>'+
    '<h2><i>Ali Baba & the Forty Thieves</i> - One Thousand and One Nights</h2>' +
    "<p>One Thousand and One Nights is a collection of folktales told from the Middle East. One of the collection's famous stories, Ali Baba & the Forty Thieves, is set in Persia (present-day Iran). It is also believed that the story was also told in Iran, alongside India and Saudi Arabia.</p>" +
    '<audio controls>'+
    '<source src="https://ia800705.us.archive.org/35/items/blue_fairy_book_0707_librivox/bluefairybook_23_lang.mp3#t=00:00:22" type="audio/mpeg;">' +
    '</audio>', 32.427908, 53.688046],

    //estonia
    ['<h1>ESTONIA</h1>'+
    '<h2><i>The Dragon of the North</i> - Dr. Friedrich Kreutzwald</h2>'+
    '<p>Collected by the "Estonian father of literature", this fairytale is an Estonian take on the traditional "dragon slayer and princess rescue" story.</p>' +
    '<audio controls>'+
    '<source src="https://ia802702.us.archive.org/1/items/yellow_fairy_book_0801_librivox/yellowfairybook_03_lang.mp3#t=00:00:22" type="audio/mpeg;">' +
    '</audio>', 58.595272, 25.013607],

    //romania
    ['<h1>ROMANIA</h1>'+
    '<h2><i>The Boys with the Golden Stars</i> - Traditional Fairytale</h2>'+
    '<audio controls>'+
    '<source src="https://ia601901.us.archive.org/11/items/violetfairy_1302_librivox/violetfairybook_28_lang_64kb.mp3#t=00:00:22" type="audio/mpeg;">' +
    '</audio>', 45.943161, 24.96676],

    //spain
    ['<h1>SPAIN</h1>'+
    '<h2><i>The Bird of Truth</i> - Cecilia Böhl de Faber</h2>'+
    "<p>Featured in Andrew Lang's Orange Fairy Book, the story was originally a folktale from Andalusia (a group of provinces from Southern Spain) collected by Cecilia Böhl de Faber.</p>" +
    '<audio controls>'+
    '<source src="https://ia600708.us.archive.org/34/items/orange_fairy_book_1005_librivox/orangefairybook_27_lang_64kb.mp3#t=00:00:21" type="audio/mpeg;">' +
    '</audio>', 40.463667, -3.74922],

    //indigenous
    ['<h1>Indigenous Peoples of NORTH AMERICA</h1>'+
    '<h2><i>Turtle Island</i> - Creation Myth</h2>'+
    "<p>In some Ojibwe oral traditions, the story of Turtle Island begins with a flooded Earth. The Creator had cleansed the world of feuding peoples in order to begin life anew. Some animals survived the flood, such as the loon, the muskrat and the turtle. Nanabush (Nanabozo) (or Weesakayjack in some Cree tales) — a supernatural being who has the power to create life in others — was also present. Nanabush asked the animals to swim deep beneath the water and collect soil that would be used to recreate the world. One by one the animals tried, but one by one they failed. The last animal that tried — the muskrat — was underwater for a long time, and when it resurfaced, the little animal had wet soil in its paws. The journey took the muskrat’s life, but the creature did not die in vain. Nanabush took the soil and put it on a willing turtle’s back. This became known as Turtle Island, the centre of creation.</p>" +
    "<p>Many Haudenosaunee versions of the tale start in the Sky World — a land in the heavens where supernatural beings existed. One day, a pregnant Sky Woman fell through a hole under the roots of a tree and descended to Earth. Gently guided down by birds that saw her falling through the sky, she was placed safely onto a turtle’s back. Sky Woman was grateful to the animals for helping her. In some versions, her appreciation was so powerful that the earth began to grow around her, forming Turtle Island. In other versions, the animals brought forth mud from the bottom of the water, which grew on top of turtle’s back and formed a new land for Sky Woman and her descendants — Turtle Island.</p>" +
    '<a href="https://thecanadianencyclopedia.ca/en/article/turtle-island">Source</a>'
    , 42.842, -81.27],

    //spain
    ['<h1>SPAIN</h1>'+
    '<h2><i>The Bird of Truth</i> - Cecilia Böhl de Faber</h2>'+
    "<p>Featured in Andrew Lang's Orange Fairy Book, the story was originally a folktale from Andalusia (a group of provinces from Southern Spain) collected by Cecilia Böhl de Faber.</p>" +
    '<audio controls>'+
    '<source src="https://ia600708.us.archive.org/34/items/orange_fairy_book_1005_librivox/orangefairybook_27_lang_64kb.mp3#t=00:00:21" type="audio/mpeg;">' +
    '</audio>', 40.463667, -3.74922],

    //Russia
    ['<h1>RUSSIA</h1>'+
    '<h2><i>The Death of Koschei the Deathless</i> - Traditional Folklore</h2>'+
    '<p>The character Koschei is an immortal (often a sorcerer/magician) and recurring antagonist in Russian folklore. This tale reveals how he was killed in the hands of the Russian folkloric hero, Ivan Tsarevitch.</p>' +
    '<audio controls>'+
    '<source src="https://ia802608.us.archive.org/1/items/red_fairy_book_0908_librivox/redfairybook_04_lang.mp3#t=00:00:35" type="audio/mpeg;">' +
    '</audio>', 61.52401, 105.3187]
    ];

  //Map object
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: center,
    //Map Style - modified style, "Pale Dawn" by Adam Krogh from snazzymaps.com
    styles: [
    {
        featureType: "administrative",
        elementType: "all",
        stylers: [
            {
                "visibility": "on"
            },
            {
                lightness: 33
            }
        ]
    },
    {
        featureType: "landscape",
        elementType: "all",
        stylers: [
            {
                "color": "#f2e5d4"
            }
        ]
    },
    {
        featureType: "landscape.man_made",
        elementType: "all",
        stylers: [
            {
                "visibility": "on"
            }
        ]
    },
    {
        featureType: "poi.park",
        elementType: "all",
        stylers: [
            {
                "visibility": "off"
            }
        ]
    },
    {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
            {
                "color": "#c5dac6"
            }
        ]
    },
    {
        featureType: "poi.park",
        elementType: "labels",
        stylers: [
            {
                "visibility": "off"
            },
            {
                lightness: 20
            }
        ]
    },
    {
        featureType: "road",
        elementType: "all",
        stylers: [
            {
                lightness: 20
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        featureType: "road.highway",
        elementType: "all",
        stylers: [
            {
                "visibility": "off"
            }
        ]
    },
    {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
            {
                "color": "#c5c6c6"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        featureType: "road.arterial",
        elementType: "all",
        stylers: [
            {
                "visibility": "off"
            }
        ]
    },
    {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
            {
                "color": "#e4d7c6"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [
            {
                "color": "#fbfaf7"
            }
        ]
    },
    {
        featureType: "transit",
        elementType: "all",
        stylers: [
            {
                "visibility": "off"
            }
        ]
    },
    {
        featureType: "water",
        elementType: "all",
        stylers: [
            {
                "visibility": "on"
            },
            {
                "color": "#acbcc9"
            }
        ]
    }
]

  });




  var marker, count;

  //Gives popup window to the correct marker
  for (var count = 0; count < locations.length; count++) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[count][1], locations[count][2]),
      map: map,
      icon: markerIcon,
      title: locations[count][0],
      mapTypeControl: false, //removes satellite option
    });

//Click function for markers
google.maps.event.addListener(marker, 'click', (function (marker, count) {
      return function () {
          //keeps current window open even after clicking a new marker
        var infowindow = new google.maps.InfoWindow({
            maxWidth:340,
            maxHeight:500,

        });
        infowindow.setContent(locations[count][0]);
        infowindow.open(map, marker);
      }
    })(marker, count));
  }
}