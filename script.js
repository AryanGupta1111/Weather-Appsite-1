document.addEventListener("DOMContentLoaded", function () {
  const cityName = document.getElementById("cityName"); // Add this line
  const submit = document.getElementById("submit"); // Add this line

  const getWeather = (city) => {
    cityName.innerHTML = city;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b5d77cb907msh11b7571dc8bc60ep1b0b24jsne70ee632a361",
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
      },
    };

    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai",
      options
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((response) => {
        console.log(response);

        document.getElementById("cloud_pct1").innerHTML = response.cloud_pct;
        document.getElementById("temp1").innerHTML = response.temp;
        document.getElementById("feels_like1").innerHTML = response.feels_like;
        document.getElementById("humidity1").innerHTML = response.humidity;
        document.getElementById("min_temp1").innerHTML = response.min_temp;
        document.getElementById("max_temp1").innerHTML = response.max_temp;
        document.getElementById("wind_speed1").innerHTML = response.wind_speed;
        document.getElementById("wind_degrees1").innerHTML =
          response.wind_degrees;

        var total_seconds1 = response.sunrise % 86400;
        var hour1 = Math.floor(total_seconds1 / 3600) + 5;
        var minutes1 = (total_seconds1 % 60) + 30;
        var sunriseee = hour1 + ":" + minutes1 + " AM" ;

        document.getElementById("sunrise1").innerHTML = sunriseee;

        var total_seconds2 = response.sunset % 86400;
        var hour2 = Math.floor(total_seconds2 / 3600) + 5;
        var minutes2 = (total_seconds2 % 60) + 30;
        var sunsettt = hour2 + ":" + minutes2 + " PM" ;

        document.getElementById("sunset1").innerHTML = sunsettt;
      })
      .catch((err) => console.error(err));

    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore",
      options
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((response) => {
        console.log(response);

        document.getElementById("cloud_pct2").innerHTML = response.cloud_pct;
        document.getElementById("temp2").innerHTML = response.temp;
        document.getElementById("feels_like2").innerHTML = response.feels_like;
        document.getElementById("humidity2").innerHTML = response.humidity;
        document.getElementById("min_temp2").innerHTML = response.min_temp;
        document.getElementById("max_temp2").innerHTML = response.max_temp;
        document.getElementById("wind_speed2").innerHTML = response.wind_speed;
        document.getElementById("wind_degrees2").innerHTML =
          response.wind_degrees;
      var total_seconds1 = response.sunrise % 86400;
      var hour1 = Math.floor(total_seconds1 / 3600) + 5;
      var minutes1 = (total_seconds1 % 60) + 30;
      var sunriseee = hour1 + ":" + minutes1 + " AM" ;

      document.getElementById("sunrise2").innerHTML = sunriseee;

      var total_seconds2 = response.sunset % 86400;
      var hour2 = Math.floor(total_seconds2 / 3600) + 5;
      var minutes2 = (total_seconds2 % 60) + 30;
      var sunsettt = hour2 + ":" + minutes2 + " PM" ;

      document.getElementById("sunset2").innerHTML = sunsettt;
      })
      .catch((err) => console.error(err));

    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hyderabad",
      options
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((response) => {
        console.log(response);

        document.getElementById("cloud_pct3").innerHTML = response.cloud_pct;
        document.getElementById("temp3").innerHTML = response.temp;
        document.getElementById("feels_like3").innerHTML = response.feels_like;
        document.getElementById("humidity3").innerHTML = response.humidity;
        document.getElementById("min_temp3").innerHTML = response.min_temp;
        document.getElementById("max_temp3").innerHTML = response.max_temp;
        document.getElementById("wind_speed3").innerHTML = response.wind_speed;
        document.getElementById("wind_degrees3").innerHTML =
          response.wind_degrees;
      var total_seconds1 = response.sunrise % 86400;
      var hour1 = Math.floor(total_seconds1 / 3600) + 5;
      var minutes1 = (total_seconds1 % 60) + 30;
      var sunriseee = hour1 + ":" + minutes1 + " AM" ;

      document.getElementById("sunrise3").innerHTML = sunriseee;

      var total_seconds2 = response.sunset % 86400;
      var hour2 = Math.floor(total_seconds2 / 3600) + 5;
      var minutes2 = (total_seconds2 % 60) + 30;
      var sunsettt = hour2 + ":" + minutes2 + " PM" ;

      document.getElementById("sunset3").innerHTML = sunsettt;
      })
      .catch((err) => console.error(err));

    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Ahmedabad",
      options
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((response) => {
        console.log(response);

        document.getElementById("cloud_pct4").innerHTML = response.cloud_pct;
        document.getElementById("temp4").innerHTML = response.temp;
        document.getElementById("feels_like4").innerHTML = response.feels_like;
        document.getElementById("humidity4").innerHTML = response.humidity;
        document.getElementById("min_temp4").innerHTML = response.min_temp;
        document.getElementById("max_temp4").innerHTML = response.max_temp;
        document.getElementById("wind_speed4").innerHTML = response.wind_speed;
        document.getElementById("wind_degrees4").innerHTML =
          response.wind_degrees;
      var total_seconds1 = response.sunrise % 86400;
      var hour1 = Math.floor(total_seconds1 / 3600) + 5;
      var minutes1 = (total_seconds1 % 60) + 30;
      var sunriseee = hour1 + ":" + minutes1 + " AM" ;

      document.getElementById("sunrise4").innerHTML = sunriseee;

      var total_seconds2 = response.sunset % 86400;
      var hour2 = Math.floor(total_seconds2 / 3600) + 5;
      var minutes2 = (total_seconds2 % 60) + 30;
      var sunsettt = hour2 + ":" + minutes2 + " PM" ;

      document.getElementById("sunset4").innerHTML = sunsettt;
      })
      .catch((err) => console.error(err));

    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pune",
      options
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((response) => {
        console.log(response);

        document.getElementById("cloud_pct5").innerHTML = response.cloud_pct;
        document.getElementById("temp5").innerHTML = response.temp;
        document.getElementById("feels_like5").innerHTML = response.feels_like;
        document.getElementById("humidity5").innerHTML = response.humidity;
        document.getElementById("min_temp5").innerHTML = response.min_temp;
        document.getElementById("max_temp5").innerHTML = response.max_temp;
        document.getElementById("wind_speed5").innerHTML = response.wind_speed;
        document.getElementById("wind_degrees5").innerHTML =
          response.wind_degrees;
      var total_seconds1 = response.sunrise % 86400;
      var hour1 = Math.floor(total_seconds1 / 3600) + 5;
      var minutes1 = (total_seconds1 % 60) + 30;
      var sunriseee = hour1 + ":" + minutes1 + " AM" ;

      document.getElementById("sunrise5").innerHTML = sunriseee;

      var total_seconds2 = response.sunset % 86400;
      var hour2 = Math.floor(total_seconds2 / 3600) + 5;
      var minutes2 = (total_seconds2 % 60) + 30;
      var sunsettt = hour2 + ":" + minutes2 + " PM" ;

      document.getElementById("sunset5").innerHTML = sunsettt;
      })
      .catch((err) => console.error(err));

    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
      options
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((response) => {
        console.log(response);

        document.getElementById("cloud_pct").innerHTML = response.cloud_pct;
        document.getElementById("temp").innerHTML = response.temp;
        document.getElementById("feels_like").innerHTML = response.feels_like;
        document.getElementById("humidity").innerHTML = response.humidity;
        document.getElementById("min_temp").innerHTML = response.min_temp;
        document.getElementById("max_temp").innerHTML = response.max_temp;
        document.getElementById("wind_speed").innerHTML = response.wind_speed;
        document.getElementById("wind_degrees").innerHTML =
          response.wind_degrees;
      var total_seconds1 = response.sunrise % 86400;
      var hour1 = Math.floor(total_seconds1 / 3600) + 5;
      var minutes1 = (total_seconds1 % 60) + 30;
      var sunriseee = hour1 + ":" + minutes1 + " AM" ;

      document.getElementById("sunrise").innerHTML = sunriseee;

      var total_seconds2 = response.sunset % 86400;
      var hour2 = Math.floor(total_seconds2 / 3600) + 5;
      var minutes2 = (total_seconds2 % 60) + 30;
      var sunsettt = hour2 + ":" + minutes2 + " PM" ;

      document.getElementById("sunset").innerHTML = sunsettt;
      })
      .catch((err) => console.error(err));
  };

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const searchInput = document.getElementById("searchInput").value;
    getWeather(searchInput);
  });

  getWeather("Delhi");
});
