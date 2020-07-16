window.addEventListener('load', () => {
let long;
let lat;

let tempDescription = document.querySelector('.temperature-description');
let tempDegree = document.querySelector('.temperature-degree');
let locationTimezone = document.querySelector('.location-timezone');
let weatherIcons = document.querySelector('.icon');


if(navigator.geolocation){
navigator.geolocation.getCurrentPosition(position =>{
    long = position.coords.longitude;
    lat = position.coords.latitude;
    const api = `http://api.weatherstack.com/current?access_key=00a458f138d8268c23e72e2bfa3dbfd6&query=${lat},${long}`;

    console.log(api);
    
    fetch(api)
    .then(Response =>{
        return Response.json();
    })
    .then(data =>{
        console.log(data);
        const {weather_descriptions, feelslike } = data.current;
        const icons = data.current.weather_icons[0];
        const {name, region} = data.location;
        tempDescription.textContent= weather_descriptions;
        tempDegree.textContent = feelslike;
        locationTimezone.textContent = name + ", " + region;
       weatherIcons.setAttribute('src', icons)
console.log(icons);

        
    });
});
}else {
    h1.textContent = "Geolocation not enabled"
}
});