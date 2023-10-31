const apikey="8c9826bd7bca8cdee85f573f3d72d6a6";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchButton=document.querySelector(".search button");
const weatherIcon=document.getElementById("weather-icon");
console.log(searchBox);
async function fetchData(city) {
    try {
      const response = await fetch(apiUrl+ city +`&appid=${apikey}`);
      if (!response.ok) {
        alert("invalid city name");
        //throw new Error('Network response was not ok');
        // document.querySelector(".error p").style.display="block";
      }else{
      const data = await response.json();
   
      console.log(data);
      document.querySelector(".city").innerHTML=data.name;
      document.querySelector(".temperature").innerHTML=Math.round(data.main.temp) +" °C";
      document.querySelector(".humidity").innerHTML=data.main.humidity +" %";
      document.querySelector(".wind").innerHTML=data.wind.speed + " Km/H";
      console.log("Weather condition:", data.weather[0].main);

      if (data.weather[0].main === "Clear") {
          console.log("Changing to Clear icon");
          weatherIcon.classList.remove("fa-cloud-sun");
          weatherIcon.classList.add("fa-sun"); // Replace "fa-sun" with the icon you want to use
      }
     
  

      else if(data.weather[0].main==="Clouds"){
        console.log("Changing to cloud icon");
        weatherIcon.classList.remove("fa-cloud-sun");
        weatherIcon.classList.add("fa-cloud-sun"); 
      }
      else if(data.weather[0].main==="Thunderstorm"){
        console.log("Changing to Thunderstorm icon");
        weatherIcon.classList.remove("fa-cloud-sun");
        weatherIcon.classList.add("fa-cloud-bolt"); 
      }
      else if(data.weather[0].main==="Drizzle"){
        console.log("Changing to Drizzle icon");
        weatherIcon.classList.remove("fa-cloud-sun");
        weatherIcon.classList.add("fa-cloud-rain"); 
      }
      else if(data.weather[0].main==="Rain"){
        console.log("Changing to Rain icon");
        weatherIcon.classList.remove("fa-cloud-sun");
        weatherIcon.classList.add("fa-cloud-showers-heavy"); 
      }
      else if(data.weather[0].main==="Haze"){
          console.log("Changing to Haze icon");
          weatherIcon.classList.remove("fa-cloud-sun");
          weatherIcon.classList.add("fa-smog"); 
        }
        else if(data.weather[0].main==="Smoke"){
          console.log("Changing to Smoke icon");
          weatherIcon.classList.remove("fa-cloud-sun");
          weatherIcon.classList.add("fa-smog"); 
        }
        else if(data.weather[0].main==="Mist"){
          console.log("Changing to Mist icon");
          weatherIcon.classList.remove("fa-cloud-sun");
          weatherIcon.classList.add("fa-smog"); 
        }
        document.querySelector(".weather").style.display="block";

    }} catch (error) {
      
      console.error('Error:', error);
    }
  }

searchButton.addEventListener("click", ()=>{
    fetchData(searchBox.value);
})

searchBox.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
      fetchData(searchBox.value);
  }
});