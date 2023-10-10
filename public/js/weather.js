async function fetchWeatherData(city) {
  try {
    const response = await fetch(`/api/resortInfo?resort=${city}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const resortData = await response.json();
      console.log(resortData);

      // Create a new element for each piece of data I would like
      const h2el = document.createElement("h2");
      h2el.textContent = resortData.temp;

      const h3el = document.createElement("h3");
      h3el.textContent = resortData.main;

      const h4el = document.createElement("h4");
      const iconImg = document.createElement("img");
      iconImg.src = `http://openweathermap.org/img/w/${resortData.icon}.png`; // Use the icon code to generate the icon URL
      h4el.appendChild(iconImg);

      const h5el = document.createElement("h5");
      h5el.textContent = resortData.description;

      // Find the corresponding button element for the city
      const buttonEl = document.querySelector(`button[value="${city}"]`);

      // Replace the button element with the weather data
      buttonEl.replaceWith(h2el, h3el, h4el, h5el);
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
