function geoFindMe() {
    const locationStatus = document.querySelector("#locationStatus");
    function success(position) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
      locationStatus.innerHTML = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    
    // the google map is not really working, even through I generated a key and tried.
    // let map;
    // function initMap() {
    // map = new google.maps.Map(document.getElementById("map"), {
    //       center: { lat: latitude, lng: longitude },
    //       zoom: 10,
    //     });
    //   }
    // initMap();
    }
    function error() {
        locationStatus.innerHTML = "Unable to retrieve your location";
    }
    if(navigator.geolocation) {
        locationStatus.innerHTML = "Locating…";
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        locationStatus.innerHTML = "Location is turned off in your your browser";
    }
  }
  document.querySelector("#locationClick").addEventListener("click", geoFindMe);