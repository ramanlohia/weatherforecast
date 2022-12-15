const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '438c4e42abmshf9bf238aee083dap12e2bajsn7b2da197a09c',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })

    .catch((err) => console.error(err));
};

submit.addEventListener('click', (e) => {
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Delhi")




const Delhi = (Delhi) => {
	fetch(
	  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi",
	  options
	)
	  .then((response) => response.json())
	  .then((response) => {
		console.log(response);
		delhi_cloud_pct.innerHTML = response.cloud_pct;
		delhi_temp.innerHTML = response.temp;
		delhi_feels_like.innerHTML = response.feels_like;
		delhi_humidity.innerHTML = response.humidity;
		delhi_min_temp.innerHTML = response.min_temp;
		delhi_max_temp.innerHTML = response.max_temp;
		delhi_wind_speed.innerHTML = response.wind_speed;
		delhi_wind_degrees.innerHTML = response.wind_degrees;
		delhi_sunrise.innerHTML = response.sunrise;
		delhi_sunset.innerHTML = response.sunset;
	  })
  
	  .catch((err) => console.error(err));
  };
Delhi("Delhi")
const GZB = (Ghaziabad) => {
	fetch(
	  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Ghaziabad",
	  options
	)
	  .then((response) => response.json())
	  .then((response) => {
		console.log(response);
		gzb_cloud_pct.innerHTML = response.cloud_pct;
		gzb_temp.innerHTML = response.temp;
		gzb_feels_like.innerHTML = response.feels_like;
		gzb_humidity.innerHTML = response.humidity;
		gzb_min_temp.innerHTML = response.min_temp;
		gzb_max_temp.innerHTML = response.max_temp;
		gzb_wind_speed.innerHTML = response.wind_speed;
		gzb_wind_degrees.innerHTML = response.wind_degrees;
		gzb_sunrise.innerHTML = response.sunrise;
		gzb_sunset.innerHTML = response.sunset;
	  })
  
	  .catch((err) => console.error(err));
  };
GZB("Ghaziabad")
const Noida = (Noida) => {
	fetch(
	  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Noida",
	  options
	)
	  .then((response) => response.json())
	  .then((response) => {
		console.log(response);
		noida_cloud_pct.innerHTML = response.cloud_pct;
		noida_temp.innerHTML = response.temp;
		noida_feels_like.innerHTML = response.feels_like;
		noida_humidity.innerHTML = response.humidity;
		noida_min_temp.innerHTML = response.min_temp;
		noida_max_temp.innerHTML = response.max_temp;
		noida_wind_speed.innerHTML = response.wind_speed;
		noida_wind_degrees.innerHTML = response.wind_degrees;
		noida_sunrise.innerHTML = response.sunrise;
		noida_sunset.innerHTML = response.sunset;
	  })
  
	  .catch((err) => console.error(err));
  };
Noida("Noida")
const Lucknow = (Lucknow) => {
	fetch(
	  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Noida",
	  options
	)
	  .then((response) => response.json())
	  .then((response) => {
		console.log(response);
		lck_cloud_pct.innerHTML = response.cloud_pct;
		lck_temp.innerHTML = response.temp;
		lck_feels_like.innerHTML = response.feels_like;
		lck_humidity.innerHTML = response.humidity;
		lck_min_temp.innerHTML = response.min_temp;
		lck_max_temp.innerHTML = response.max_temp;
		lck_wind_speed.innerHTML = response.wind_speed;
		lck_wind_degrees.innerHTML = response.wind_degrees;
		lck_sunrise.innerHTML = response.sunrise;
		lck_sunset.innerHTML = response.sunset;
	  })
  
	  .catch((err) => console.error(err));
  };
Lucknow("Lucknow")