async function initMap() {
  await google.maps.importLibrary("places");

  const fromInput = document.getElementById('from');
  const toInput = document.getElementById('to');

  const options = {
    types: ['bus_station', 'transit_station'],
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(63.7500, 20.1000),  // Sydväst
      new google.maps.LatLng(63.8800, 20.3500)   // Nordöst  
    ),
    strictBounds: true
  };

  fromAutocomplete = new google.maps.places.Autocomplete(fromInput, options);
  toAutocomplete = new google.maps.places.Autocomplete(toInput, options);

  fromAutocomplete.addListener('place_changed', yourTrip)
  toAutocomplete.addListener('place_changed', yourTrip)

}

window.addEventListener('load', initMap);

function initPano(cordinates) {

  new google.maps.StreetViewPanorama(
    document.getElementById("pano"),
    {
      position: cordinates,
      pov: {
        heading: 34,
        pitch: 10,
      },
    },
  );
  document.getElementById("pano").classList.add("show");

}

function yourTrip() {
  const from = fromAutocomplete.getPlace();
  const to = toAutocomplete.getPlace();

  if (from && to) {
    console.log("båda ifyllda");

    const cordinates = {
      lat: from.geometry.location.lat(),
      lng: from.geometry.location.lng()
    }

    initPano(cordinates);
    document.querySelector('h1').textContent = 'Din resa';
    document.getElementById('ankomsttid').textContent = '14:14';
    document.getElementById('avgangstid').textContent = '14:05';
  }

  else {
    console.log("båda ej ifyllda");
  }

}


