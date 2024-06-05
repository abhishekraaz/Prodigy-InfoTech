let text = document.getElementById("text");
let button = document.getElementById("button");
let id1 = document.getElementById("id1");
let id2 = document.getElementById("id2");
let id3 = document.getElementById("id3");
let id4 = document.getElementById("id4");
let id5 = document.getElementById("id5");
let id6 = document.getElementById("id6");
let detail = document.getElementById("detail")

button.addEventListener("click", ()=>{
    let value = text.value
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${value}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '33ecbcd61amsh99c8d9885fca5e0p12243cjsn6176019c9d4a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
   let app = async ()=>{
	const response = await fetch(url, options);
	const result =  await response.json();
    detail.style.display = 'flex';
    id1.innerHTML = `${value[0].toUpperCase()}${value.slice(1)}`;
    id2.innerHTML = `${result.temp}°`;
    id3.innerHTML = `Max_Temp : ${result.max_temp} | Min_Temp : ${result.min_temp}`
    id4.innerHTML = `${result.humidity}`
    id5.innerHTML = `${result.wind_degrees}`
    id6.innerHTML = `${result.wind_speed} Km/h`
   }
   app();
} catch (error) {
	console.error(error);
}
})