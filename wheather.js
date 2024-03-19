console.log("hello world");
const url = 'https:weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5de52f5511msh9e8bfd7b5b614a2p127f28jsnfd565368d28c',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};




fetch(`https:weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle`, options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));
