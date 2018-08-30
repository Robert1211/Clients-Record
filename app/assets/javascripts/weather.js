// function drawWeatherForLocation(tourDayId) {
//
//   const tourDayTitle = $('#tour-day-title-' + tourDayId).html();
//   const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + tourDayTitle + '&units=metric&appid=36a9dfc29f21bc67501304d573465e4f';
//
//
//   $.getJSON(url, function(weatherInfo) {
//     const location = JSON.stringify(weatherInfo.name + ", " + weatherInfo.sys.country).replace(/\"/g, "");
//     $('#data-' + tourDayId).html(location);
//     var weatherData = JSON.stringify(weatherInfo.weather[0].description).replace(/\"/g, "");
//     temp = JSON.stringify(Math.round(weatherInfo.main.temp)).replace(/\"/g, "");
//     $('#weather-' + tourDayId).html(weatherData);
//     $('#temperature-' + tourDayId).html(temp + " &#8451");
//     var pic = "";
//     var iconNumber = weatherInfo.weather[0].icon;
//     var pic = `<img src= "http://openweathermap.org/img/w/${iconNumber}.png">`;
//     $("#icon-" + tourDayId).html(pic);
//     console.log(pic);
//   });
// }
//
//
// $(document).ready(function() {
//
//   $('div.tour-day-details').each(function() {
//     drawWeatherForLocation($(this).attr('data-tour-day-id'));
//   });
//
///////////////////////////////////////////////////////////////


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
