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

// async function weatherResponse(data, apiKey) {
//   const url = "https://api.example.com/weather?"; // Replace with the actual API URL

//   try {
//     const response = await fetch(
//       `${url}lat=${data.lat}&lon=${data.lon}&cnt=14&appid=${apiKey}`,
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json", // Specify JSON content type
//         },
//       }
//     );

//     if (!response.ok) {
//       throw new Error(`Request failed with status ${response.status}`);
//     }

//     const weatherData = await response.json();
//     return weatherData;
//   } catch (error) {
//     console.error("Error fetching weather data:", error);
//     throw error; // Re-throw the error for the caller to handle
//   }
// }

// console.log(weatherResponse);

