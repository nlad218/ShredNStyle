function fetchWeatherData(city) {
  var apiKey = "key";
  var weatherContainer = $("#weatherRow");

  $.ajax({
    type: "GET",
    url: `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`,
    async: true,
    dataType: "json",
    success: function (data) {
      var forecastHtml = `<h2>5-Day Weather Forecast in ${city}</h2><div class="forecast-container d-flex flex-nowrap overflow-auto">`;

      for (var i = 0; i < data.list.length; i += 8) {
        var forecast = data.list[i];
        forecastHtml += `
            <div class="card m-2" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">Date/Time: ${forecast.dt_txt}</h5>
                <p class="card-text">Temperature: ${forecast.main.temp.toFixed(
                  2
                )}°F</p> <!-- Display temperature in Fahrenheit -->
                <p class="card-text">Weather: ${
                  forecast.weather[0].description
                }</p>
                <p class="card-text">Humidity: ${forecast.main.humidity}%</p>
              </div>
            </div>
          `;
      }

      forecastHtml += "</div>";
      weatherContainer.html(forecastHtml);
    },
    error: function (xhr, status, err) {
      console.error(`Error fetching weather data for ${city}: ${err}`);
    },
  });
}
