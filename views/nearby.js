var lat = 0;
var lon = 0;

if ("geolocation" in navigator) {

navigator.geolocation.getCurrentPosition(function (position) {
lat = position.coords.latitude;
lon = position.coords.longitude;
console.log(lat, lon);
axios
  .get(
    "http://www.mapquestapi.com/search/v2/radius?key=jLSFuiva5A1AyFqzlknYnBT5OqKV83g5&origin=" +
      lat +
      "," +
      lon +
      "&radius=30&hostedData=mqap.ntpois%7Cgroup_sic_code=?%7C806202&maxMatches=25&r&ambiguities=ignore"
  )
  .then(function (response) {
    console.log(response);
  });
L.mapquest.key = "jLSFuiva5A1AyFqzlknYnBT5OqKV83g5";

// 'map' refers to a <div> element with the ID map
L.mapquest.map("map", {
  center: [lat, lon],
  layers: L.mapquest.tileLayer("map"),
  zoom: 12,
});
});
 } else {
    console.log("Browser doesn't support geolocation!");
   }