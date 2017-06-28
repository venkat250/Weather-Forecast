
'use strict';

var weatherConditions = new XMLHttpRequest();
var weatherForecast = new XMLHttpRequest();
var cObj;
var fObj;


window.onload = function getLocation() {
    var lati;
    var long;
    if (navigator.geolocation) {
        
    
var showPosition = function(position) {
  lati =  position.coords.latitude;
   long= position.coords.longitude;
   
    weatherConditions.open('GET', 'http://api.wunderground.com/api/767c04bafb2d3bcb/conditions/q/'+lati+','+long+'.json', true);
           weatherConditions.responseType = 'text';
           weatherConditions.send(null);

            weatherForecast.open('GET','http://api.wunderground.com/api/767c04bafb2d3bcb/forecast/q/'+lati+','+long+'.json', true);
            weatherForecast.responseType = 'text'; 
            weatherForecast.send(); 
 
};
navigator.geolocation.getCurrentPosition(showPosition);
        
        
       }
  
};    

if(this.long === undefined && this.lati === undefined){

     weatherConditions.open('GET', 'http://api.wunderground.com/api/767c04bafb2d3bcb/conditions/q/CA/San_Francisco.json', true);
           weatherConditions.responseType = 'text';
           weatherConditions.send(null);

            weatherForecast.open('GET','http://api.wunderground.com/api/767c04bafb2d3bcb/forecast/q/CA/San_Francisco.json', true);
            weatherForecast.responseType = 'text'; 
            weatherForecast.send(); 
    
}
 // loading weather     
function loadweather(){
         var zipcode = document.getElementById('zip').value;

           weatherConditions.open('GET', 'http://api.wunderground.com/api/767c04bafb2d3bcb/conditions/q/'+zipcode+'.json', true);
           weatherConditions.responseType = 'text';
           weatherConditions.send(null);

            weatherForecast.open('GET','http://api.wunderground.com/api/767c04bafb2d3bcb/forecast/q/'+zipcode+'.json', true);
            weatherForecast.responseType = 'text'; 
            weatherForecast.send(); 

}

// GET THE CONDITIONS

 
weatherConditions.onload = function () {
    if (weatherConditions.status === 200) {
        cObj = JSON.parse(weatherConditions.responseText); 
        console.log(cObj);
     document.getElementById("location").innerHTML= cObj.current_observation.display_location.city;
        document.getElementById("weather").innerHTML= cObj.current_observation.weather;
        document.getElementById("temperature").innerHTML= cObj.current_observation.temp_f;

    } //end if
}; //end function





// GET THE FORECAST


weatherForecast.onload = function () {
if (weatherForecast.status === 200) {
	fObj = JSON.parse(weatherForecast.responseText);
	console.log(fObj);
	document.getElementById("desc").innerHTML= fObj.forecast.txt_forecast.forecastday["0"].fcttext;
    document.getElementById("r1c1").innerHTML= fObj.forecast.simpleforecast.forecastday["1"].date.weekday;
    
    document.getElementById("r1c2").setAttribute('src',fObj.forecast.simpleforecast.forecastday["1"].icon_url);
    
    
    document.getElementById("r1c3").innerHTML= fObj.forecast.simpleforecast.forecastday["1"].high.fahrenheit;
    document.getElementById("r2c1").innerHTML= fObj.forecast.simpleforecast.forecastday["2"].date.weekday;
    
    
    document.getElementById("r2c2").setAttribute('src',fObj.forecast.simpleforecast.forecastday["2"].icon_url);
    
    
    document.getElementById("r2c3").innerHTML= fObj.forecast.simpleforecast.forecastday["2"].high.fahrenheit;
    document.getElementById("r3c1").innerHTML= fObj.forecast.simpleforecast.forecastday["3"].date.weekday;
    document.getElementById("r3c2").setAttribute('src',fObj.forecast.simpleforecast.forecastday["3"].icon_url);
    document.getElementById("r3c3").innerHTML= fObj.forecast.simpleforecast.forecastday["3"].high.fahrenheit;
    
    
        

} //end if
}; //end function


