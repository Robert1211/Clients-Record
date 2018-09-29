var latitude;
var longitude;
var switchOver = true;
var given = 10;
var temp;
var f;

$(document).ready(function() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			var latitude = position.coords.latitude;
			var longitude = position.coords.longitude;
			$("#data").html("latitude: " + latitude + "<br>longitude: " + longitude);
			var weatherUrl = "https://fcc-weather-api.glitch.me/api/current?lat=" + latitude + "&lon=" + longitude;
			$.getJSON(weatherUrl, function(weatherInfo) {
				var location = JSON.stringify(weatherInfo.name + ", " + weatherInfo.sys.country).replace(/\"/g, "");
				$("#data").html(location).show();
				var weatherData = JSON.stringify(weatherInfo.weather[0].description).replace(/\"/g, "");
				temp = JSON.stringify(Math.round(weatherInfo.main.temp)).replace(/\"/g, "");
				$("#weather").html(weatherData);
				$("#temperature").html(temp + " &#8451");
				//&#8457 - Farenheit
				var pic = "";
				pic += "<img src = '" + weatherInfo.weather[0].icon + "' " + "alt='" + "'>";
				$("#icon").html(pic);

      })
    })
  }
})
