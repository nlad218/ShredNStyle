module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
      new Date(date).getFullYear() + 5
    }`;
  },
  get_weather: (lat, long) => {
    console.log(lat, long);
    //another function for calling weather within the module.exports, this function will take the long lat and make an api call to get the weather data 
}

};

