let button = document.querySelector("#button");
let input = document.querySelector("#input");
let infoSection = document.querySelector(".info-section");

let dataWeather = {};

button.addEventListener("click", () => {
  getData();
});

input.addEventListener("keyup", (ev) => {
  console.log(ev);
  if (ev.keyCode == 13) {
    getData();
  }
});

function getData() {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=9185f9e15f4423f58afab263fdd6511c`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      dataWeather = data;
      setWeatherData(dataWeather);
      console.log(data);
    });
}

function setWeatherData(data) {
  let dateNow = new Date();
  let weekDay;
  switch (dateNow.getDay()) {
    case 0:
      weekDay = "saturday";
      break;
    case 1:
      weekDay = "sunday";
      break;
    case 2:
      weekDay = "monday";
      break;
    case 3:
      weekDay = "tuesday";
      break;
    case 4:
      weekDay = "wednesday";
      break;
    case 5:
      weekDay = "thursday";
      break;
    case 6:
      weekDay = "friday";
      break;
  }

  let monthName;
  switch (dateNow.getDate()) {
    case 0:
      monthName = "January";
      break;
    case 1:
      monthName = "February";
      break;
    case 2:
      monthName = "February";
      break;
    case 3:
      monthName = "April";
      break;
    case 4:
      monthName = "May";
      break;
    case 5:
      monthName = "June";
      break;
    case 6:
      monthName = "July";
      break;
    case 7:
      monthName = "August";
      break;
    case 8:
      monthName = "September";
      break;
    case 9:
      monthName = "October";
      break;
    case 10:
      monthName = "November";
      break;
    case 11:
      monthName = "December";
      break;
  }
  dateNow.getSeconds;
  setElementWeather(dateNow, weekDay, monthName, data);
}

function setElementWeather(dateNow, weekDay, monthName, data) {
  infoSection.innerHTML = " ";

  infoSection.insertAdjacentHTML(
    "afterbegin",
    `<h2 class="weather-location">${data.name}, ${data.sys.country}</h2>
        <p class="weather-date">${weekDay}, ${dateNow.getDate()} ${monthName}, ${dateNow.getFullYear()}</p>
        <p class="weather-date">Time: ${dateNow.getHours()}:${dateNow.getMinutes()}</p>
        <h1 class="weather-temp">${Math.floor(data.main.temp - 273.15)}C°</h1>
        <h2 class="weather-weather">${data.weather[0].description}</h2>
        <p class="weather-tempmm">Temp => Min: ${Math.floor(
          data.main.temp_min - 273.15
        )}C° / Max: ${Math.floor(data.main.temp_max - 273.15)}C°</p>`
  );
}
