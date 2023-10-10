// var apiKey = "fd14e40bfd6c1460a77a88f01383cf1e";
// var url = `api.openweathermap.org/data/2.5/forecast/daily?`;
// async function fetchWeatherData(city) {
//   try {
//     // Make a fetch request to your login route with JSON data
//     const response = await fetch(`/api/resortInfo?resort=${city}`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json", // Specify JSON content type
//       },
//     });

//     if (response.ok) {
//       const resortData = await response.json();

//       const data = {
//         name: resortData.resortName,
//         state: resortData.state,
//         lat: parseFloat(resortData.lat),
//         long: parseFloat(resortData.long),
//       };

//       console.log(data);
//     } else {
//       console.error("Error:", response.status);
//     }
//   } catch (error) {
//     console.error("An error occurred:", error);
//   }
// }

// // Attach the event listener to a parent element
// document.querySelector(".row").addEventListener("click", function (e) {
//   // Check if the clicked element has the class "weather"
//   if (e.target.classList.contains("weather")) {
//     e.preventDefault();
//     const cityName = e.target.value;
//     // Call the getWeather function here or perform any other action
//     fetchWeatherData(cityName);
//     weatherResponse();
//   }
// });

// // const apiKey =

// async function weatherResponse() {
//   await fetch(`${url}lat=${data.lat}&lon=${data.long}&cnt=14&appid=${apiKey}`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json", // Specify JSON content type
//     },
//   });
// }

// console.log(weatherResponse);

var apiKey = "fd14e40bfd6c1460a77a88f01383cf1e";

async function fetchWeatherData(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciy}&APPID=${apiKey}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      const weatherData = await response.json();
      console.log(weatherData);
    } else {
      console.error("Error:", response.status);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

document.querySelector(".row").addEventListener("click", function (e) {
  if (e.target.classList.contains("weather")) {
    e.preventDefault();
    const cityName = e.target.value;
    fetchWeatherData(cityName);
  }
});

// var requestWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city},us&units=imperial&APPID=6125957e3b746825efbf44ae31af7452`;

// fetch(requestWeather)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);

//     fiveDayForecast(data);
//     saveSearch(data.name);
//     displayWeather(data);
//   });