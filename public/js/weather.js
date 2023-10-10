async function fetchWeatherData(city) {
  try {
    // Make a fetch request to your login route with JSON data
    const response = await fetch(`/api/resortInfo?resort=${city}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json", // Specify JSON content type
      },
    });

    if (response.ok) {
      const resortData = await response.json();

      const data = {
        name: resortData.resortName,
        state: resortData.state,
        lat: parseFloat(resortData.lat),
        long: parseFloat(resortData.long),
      };

      console.log(data);
    } else {
      console.error("Error:", response.status);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// Attach the event listener to a parent element
document.querySelector(".row").addEventListener("click", function (e) {
  // Check if the clicked element has the class "weather"
  if (e.target.classList.contains("weather")) {
    e.preventDefault();
    const cityName = e.target.value;
    // Call the getWeather function here or perform any other action
    fetchWeatherData(cityName);
  }
});
