document.querySelector('.search button').addEventListener('click', function(){
        const searchBoxValue = document.querySelector('.search input').value;
        checkWeather(searchBoxValue);
});
const apiKey="a704f25f9ea684fc6748f231e275ad3a";
const apiUrl=`https://api.openweathermap.org/data/2.5/weather?&units=metric&q=`;

async function checkWeather(city){
        try{
        const response=await fetch(apiUrl + `${city}&appid=${apiKey}`);
        const data = await response.json();
        console.log(data);
        document.querySelector('.city').innerText = data.name;
        document.querySelector('.temp').innerText =Math.round(data.main.temp) +"°C";
        document.querySelector('.humidity').innerText = data.main.humidity +"%";
        document.querySelector('.wind').innerText = data.wind.speed +"m/s";
        
        const weatherType = data.weather[0].main;
        document.querySelector('.weather-icon').src = `./images/${weatherType}.png`;

        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.error').style.display = 'none';
        }catch(err){
                console.log(err);
                document.querySelector('.error').style.display = 'block';
        }
}