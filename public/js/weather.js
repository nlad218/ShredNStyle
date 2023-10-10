async function fetchWeatherData(city) {
  try {
    //calling a fetch function from the backend to get the data for the city the user choose
    const response = await fetch(`/api/resortInfo?resort=${city}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    //if response was ok the frontend would get the cleanWeather object back
    if (response.ok) {
      //creating a new variable that will be equal to cleanweather
      const resortData = await response.json();

      //creating the text for each card
      const h2el = document.createElement("h2");
      h2el.textContent = resortData.temp;
      const h3el = document.createElement("h3");
      h3el.textContent = resortData.main;

      //the image element will have to be an image from the openweather api that we used. pluggin in the icon value to figure out which icon will be used
      const h4el = document.createElement("h4");
      const iconImg = document.createElement("img");
      iconImg.src = `http://openweathermap.org/img/w/${resortData.icon}.png`;
      h4el.appendChild(iconImg);

      const h5el = document.createElement("h5");
      h5el.textContent = resortData.description;

      //the buttonEl will be equal to the CITY button they click so it doesnt stack all on one
      const buttonEl = document.querySelector(`button[value="${city}"]`);

      // replacing the button element with each of the text contents
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
