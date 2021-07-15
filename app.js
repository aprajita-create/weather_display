var x=10;
console.log("a");

window.addEventListener('load',() => {
  let lon;
  let lat; 
  let temperatureDescription= document.querySelector('.temperature-description')
  let temperatureDegree= document.querySelector(".temperature-degree")
  let locationTimezone= document.querySelector('.location-timezone')
  let locationIcon= document.querySelector('.location-icon')
  let temperatureSection=document.querySelector('.temperature');
  let degree=document.querySelector('.temperature span');


  

  if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition
  (position => {
      console.log(position)
      lat=position.coords.latitude;
      lon=position.coords.longitude;

      const api=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily,minutely&units=metric&appid=7b4ddd43353a974c64ea8a4259f8d637`
      fetch(api)
  .then(response =>{
      return response.json();
  })
  .then(data =>{
      console.log(data);
      const {temp}=data.current;
      const {main} =data.current.weather[0]
      const {icon}=data.current.weather[0]
      //set DOM elememts from api
      temperatureDegree.textContent = temp;
      temperatureDescription.textContent=main;
      locationTimezone.textContent=data.timezone;
      locationIcon.innerHTML=`<img src="http://openweathermap.org/img/w/${icon}.png" alt='Icon depicting current weather.' width="150" height="150">`
    // locationIcon.innerHTML= `<img src="icons/${icon}.png">`;

    temperatureSection.addEventListener("click",()=>{
        if(degree.textContent ==="C"){
            degree.textContent= "F";
            let ans=32+temp*(9/5);
            let faren=ans.toFixed(2);
            temperatureDegree.textContent=faren;
        }
        else{
            degree.textContent="C";
            temperatureDegree.textContent=temp;
        }
  
    })
  })
  })
}

});