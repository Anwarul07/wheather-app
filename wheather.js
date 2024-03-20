console.log("hello world");
const url = 'https:weather-by-api-ninjas.p.rapidapi.com/v1/weather?cit.innerHTMLy=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5de52f5511msh9e8bfd7b5b614a2p127f28jsnfd565368d28c',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};




fetch(`https:weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle`, options)
	.then(response => response.json())
	.then((response) => {

		console.log(response)
		cloud_pct.innerHTML = response.cloud_pct
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		max_temp.innerHTML = response.max_temp
		min_temp.innerHTML = response.min_temp
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		temp.innerHTML = response.temp
		wind_degrees.innerHTML = response.wind_degree
		wind_speed.innerHTML = response.wind_speed

	})
	.catch(err => console.error(err));
