var menuStat = "closed";
var optionNum = $('.nav-option').length;

function init_map(){
  var myOptions = {
        scrollwheel: false,
      zoom:12,
      mapTypeControl: false,
      center:new google.maps.LatLng(40.730610,-73.935242),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);

    map.set('styles', [
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [
          { color: '#949896' },
          { weight: .25 },
          { lightness: 75}
        ]
      },
       {
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [
          { hue: '#f9f7e8' },
          { gamma: 1.4 },
          { saturation: 82 },
          { lightness: 96 }
        ]
      },
      {
        featureType: 'water',
        stylers: [
          {color: '#8cbfc9'},
          {lightness: 50}
        ]
      },
      {
        featureType: 'poi',
        stylers: [
          { visibility: 'simplified'}
        ]
      },
      {
        featureType: 'poi.park',
        stylers: [
          {color: '#89cb97'}
        ]
      }

    ]);

    var icon = {
      url: "", // url
      scaledSize: new google.maps.Size(80, 80), // scaled size
    };

    marker = new google.maps.Marker({icon:icon,map: map,position: new google.maps.LatLng(40.730610,-73.935242)});
    infowindow = new google.maps.InfoWindow({content:'<strong>The Manor</strong>'});
    google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});
    infowindow.open(map,marker);
  }

$( document ).ready(function(){
  google.maps.event.addDomListener(window, 'load', init_map);
  var tempWidth;
  tempWidth = $('#mobileBG').width();
  $('#mobileBG').css('left',-(tempWidth / 2) + ($(document).width() / 3));

})
