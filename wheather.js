console.log("hello world");
const url = 'https:weather-by-api-ninjas.p.rapidapi.com/v1/weather?cit.innerHTMLy=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5de52f5511msh9e8bfd7b5b614a2p127f28jsnfd565368d28c',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


const getWheather = (city) => {
	cityName.innerHTML = city;

	fetch(`https:weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=` + city, options)
		.then(response => response.json())
		.then((response) => {

			console.log(response)
			// cloud_pct.innerHTML = response.cloud_pct
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			humidity2.innerHTML = response.humidity

			max_temp.innerHTML = response.max_temp
			min_temp.innerHTML = response.min_temp
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
			temp.innerHTML = response.temp
			temp2.innerHTML = response.temp
			wind_degrees.innerHTML = response.wind_degrees
			wind_speed.innerHTML = response.wind_speed
			wind_speed2.innerHTML = response.wind_speed


		})
		.catch(err => console.error(err));
}
submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWheather(city.value);
})
getWheather("Delhi");




fetch(`https:weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi`, options)
	.then(response => response.json())
	.then((response) => {

		console.log(response)
		feels_like3.innerHTML = response.feels_like
		humidity3.innerHTML = response.humidity
		humidity3.innerHTML = response.humidity

		max_temp3.innerHTML = response.max_temp
		min_temp3.innerHTML = response.min_temp
		sunrise3.innerHTML = response.sunrise
		sunset3.innerHTML = response.sunset
		temp3.innerHTML = response.temp
		wind_degrees3.innerHTML = response.wind_degrees
		wind_speed3.innerHTML = response.wind_speed
		wind_speed3.innerHTML = response.wind_speed


	})
	.catch(err => console.error(err));
getWheather("Delhi");




fetch(`https:weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata`, options)
	.then(response => response.json())
	.then((response) => {

		console.log(response)
		feels_like4.innerHTML = response.feels_like
		humidity4.innerHTML = response.humidity
		humidity4.innerHTML = response.humidity
		max_temp4.innerHTML = response.max_temp
		min_temp4.innerHTML = response.min_temp
		sunrise4.innerHTML = response.sunrise
		sunset4.innerHTML = response.sunset
		temp4.innerHTML = response.temp
		wind_degrees4.innerHTML = response.wind_degrees
		wind_speed4.innerHTML = response.wind_speed
		wind_speed4.innerHTML = response.wind_speed


	})
	.catch(err => console.error(err));
getWheather("Kolkata");