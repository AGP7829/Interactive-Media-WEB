function initMap() {
  var center = {lat: 50.316, lng: 9.451}

  //marker icon
  var markerIcon = {
    url: "../html/story-icon.png",
    scaledSize: new google.maps.Size(25, 25)}; //resizes icon

  //Markers w/ audio
  var locations = [
    ['<h1>JAPAN</h1>'+
    '<h2>The Bamboo Cutter - Traditional folktale</h2>'+
    '<audio controls>'+
    '<source src="../audio/japanese-fairy-tales-002-the-bamboo-cutter-and-the-moon-child.4834.ogg" type="audio/ogg;">' +
    '<source src="../audio/japanese-fairy-tales-002-the-bamboo-cutter-and-the-moon-child.4834.mp3" type="audio/mpeg;">' +
    '</audio>', 
    36.204, 138.252],
    //germany
    ['<h1>GERMANY</h1>'+
    '<h2>Hansel & Gretel - Brothers Grimm</h2>'+
    '<audio controls>'+
    '<source src="https://ia600606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_19_grimm.ogg" type="audio/ogg;">' +
    '<source src="https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_19_grimm.mp3" type="audio/mpeg;">' +
    '</audio>', 51.165, 10.451],
    //italy
    ['<h1>I</h1>'+
    '<h2>Sun, Moon, & Talia - Giambattista Basile</h2>'+
    '<audio controls>'+
    '<source src="https://ia600207.us.archive.org/8/items/stories_from_pentamerone_jc_librivox/pentamerone_29_basile.ogg" type="audio/ogg;">' +
    '<source src="https://ia800207.us.archive.org/8/items/stories_from_pentamerone_jc_librivox/pentamerone_29_basile_64kb.mp3" type="audio/mpeg;">' +
    '</audio>', 41.871, 12.567],
    //denmark
    ['<h1>Copenhagen, Denmark</h1>'+
    '<h2></h2>'+
    '<audio controls>'+
    '<source src="https://ia600606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_19_grimm.ogg" type="audio/ogg;">' +
    '<source src="https://ia800606.us.archive.org/4/items/grimm_fairy_tales_1202_librivox/grimmsfairytales_19_grimm.mp3" type="audio/mpeg;">' +
    '</audio>', 55.6761, 12.5683],
    //china
    ['<h1>China</h1>'+
    '<h2></h2>'+
    '<audio controls>'+
    '<source src=".ogg" type="audio/ogg;">' +
    '<source src=".mp3" type="audio/mpeg;">' +
    '</audio>', 35.861, 104.1953],
    //uk
    ['<h1>England, United Kingdom</h1>'+
    '<h2></h2>'+
    '<audio controls>'+
    '<source src=".ogg" type="audio/ogg;">' +
    '<source src=".mp3" type="audio/mpeg;">' +
    '</audio>', 51.50986, -0.118],
    //Mesoamerica - Yucatan, Mexico
    ['<h1>Mesoamerican Mythology</h1>'+
    '<h2>The Feathered Serpent</h2>'+
    '<audio controls>'+
    '<source src=".ogg" type="audio/ogg;">' +
    '<source src=".mp3" type="audio/mpeg;">' +
    '</audio>', 20.587740, -88.9689],
    //Greece
    ['<h1>Greece</h1>'+
    '<h2></h2>'+
    '<audio controls>'+
    '<source src=".ogg" type="audio/ogg;">' +
    '<source src=".mp3" type="audio/mpeg;">' +
    '</audio>', 39.0742, 21.8243],
    //norway
    ['<h1>Norway</h1>'+
    '<h2>East of the Sun, West of the Moon</h2>'+
    '<audio controls>'+
    '<source src="https://ia800706.us.archive.org/12/items/eastsunwestmoon_1011_librivox/eastsunwestmoon_01_asbjoernsen_moe.ogg" type="audio/ogg;">' +
    '<source src="https://ia600706.us.archive.org/12/items/eastsunwestmoon_1011_librivox/eastsunwestmoon_01_asbjoernsen_moe_64kb.mp3" type="audio/mpeg;">' +
    '</audio>', 60.472024, 8.468946],
    //france
    ['<h1>France</h1>'+
    '<h2>Charles Perrault</h2>'+
    '<audio controls>'+
    '<source src=".ogg" type="audio/ogg;">' +
    '<source src=".mp3" type="audio/mpeg;">' +
    '</audio>', 46.227638, 2.213749]
    ];

  //Map object
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: center,
    //Map Style - "Pale Dawn" by Adam Krogh from snazzymaps.com
    styles: [{
        featureType: "administrative",
        elementType: "all",
        stylers: [
            {
                visibility: "on"
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
                color: "#f2e5d4"
            }
        ]
    },
    {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
            {
                color: "#c5dac6"
            }
        ]
    },
    {
        featureType: "poi.park",
        elementType: "labels",
        stylers: [
            {
                visibility: "on"
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
            }
        ]
    },
    {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
            {
                color: "#c5c6c6"
            }
        ]
    },
    {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
            {
                color: "#e4d7c6"
            }
        ]
    },
    {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [
            {
                color: "#fbfaf7"
            }
        ]
    },
    {
        featureType: "water",
        elementType: "all",
        stylers: [{visibility: "on"},{color: "#acbcc9"}]
    }
]

  });

  var infowindow = new google.maps.InfoWindow({});

  var marker, count;

  //Gives popup window to the correct marker
  for (count = 0; count < locations.length; count++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[count][1], locations[count][2]),
      map: map,
      icon: markerIcon,
      title: locations[count][0],
      mapTypeControl: false, //removes satellite option
    });

//Click function for markers
google.maps.event.addListener(marker, 'click', (function (marker, count) {
      return function () {
        infowindow.setContent(locations[count][0]);
        infowindow.open(map, marker);
      }
    })(marker, count));
  }
}