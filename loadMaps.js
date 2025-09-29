// loadMaps.js
function loadGoogleMapsAPI() {
  const apiUrl = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places&loading=async&callback=initMap`;
  const script = document.createElement('script');
  script.src = apiUrl;
  document.head.appendChild(script);
}
loadGoogleMapsAPI();
