console.log("hello world");
const url = 'https:weather-by-api-ninjas.p.rapidapi.com/v1/weather?cit.innerHTMLy=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5de52f5511msh9e8bfd7b5b614a2p127f28jsnfd565368d28c',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


//All Cities Wheather
const getWheather = (city) => {
	cityName.innerHTML = city;

	fetch(`https:weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=` + city, options)
		.then(response => response.json())
		.then((response) => {

			console.log(response)
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
		.catch(err => console.error(err))
}
submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWheather(city.value);
})
//By Default Delhi
getWheather("delhi");



//Shanghai City Wheather
fetch(`https:weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=shanghai`, options)
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
getWheather("Shanghai");



//Kolkata City Wheather
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



//Bihar City Wheather
fetch(`https:weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=bihar`, options)
	.then(response => response.json())
	.then((response) => {

		console.log(response)
		feels_like5.innerHTML = response.feels_like
		humidity5.innerHTML = response.humidity
		humidity5.innerHTML = response.humidity
		max_temp5.innerHTML = response.max_temp
		min_temp5.innerHTML = response.min_temp
		sunrise5.innerHTML = response.sunrise
		sunset5.innerHTML = response.sunset
		temp5.innerHTML = response.temp
		wind_degrees5.innerHTML = response.wind_degrees
		wind_speed5.innerHTML = response.wind_speed
		wind_speed5.innerHTML = response.wind_speed


	})
	.catch(err => console.error(err));
getWheather("Bihar");


//Bhopal City Wheather
fetch(`https:weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=bhopal`, options)
	.then(response => response.json())
	.then((response) => {

		console.log(response)
		feels_like6.innerHTML = response.feels_like
		humidity6.innerHTML = response.humidity
		humidity6.innerHTML = response.humidity
		max_temp6.innerHTML = response.max_temp
		min_temp6.innerHTML = response.min_temp
		sunrise6.innerHTML = response.sunrise
		sunset6.innerHTML = response.sunset
		temp6.innerHTML = response.temp
		wind_degrees6.innerHTML = response.wind_degrees
		wind_speed6.innerHTML = response.wind_speed
		wind_speed6.innerHTML = response.wind_speed


	})
	.catch(err => console.error(err));
getWheather("Bhopal");



//Boston City Wheather
fetch(`https:weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=boston`, options)
	.then(response => response.json())
	.then((response) => {

		console.log(response)
		feels_like7.innerHTML = response.feels_like
		humidity7.innerHTML = response.humidity
		humidity7.innerHTML = response.humidity
		max_temp7.innerHTML = response.max_temp
		min_temp7.innerHTML = response.min_temp
		sunrise7.innerHTML = response.sunrise
		sunset7.innerHTML = response.sunset
		temp7.innerHTML = response.temp
		wind_degrees7.innerHTML = response.wind_degrees
		wind_speed7.innerHTML = response.wind_speed
		wind_speed7.innerHTML = response.wind_speed


	})
	.catch(err => console.error(err));
getWheather("boston");


//Mumbai City Wheather
fetch(`https:weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai`, options)
	.then(response => response.json())
	.then((response) => {

		console.log(response)
		feels_like8.innerHTML = response.feels_like
		humidity8.innerHTML = response.humidity
		humidity8.innerHTML = response.humidity
		max_temp8.innerHTML = response.max_temp
		min_temp8.innerHTML = response.min_temp
		sunrise8.innerHTML = response.sunrise
		sunset8.innerHTML = response.sunset
		temp8.innerHTML = response.temp
		wind_degrees8.innerHTML = response.wind_degrees
		wind_speed8.innerHTML = response.wind_speed
		wind_speed8.innerHTML = response.wind_speed


	})
	.catch(err => console.error(err));
getWheather("Mumbai");



