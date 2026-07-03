var API_KEY="27c33796bbe9ba8bcc2c42c96105c762";
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
function getData(city){
    var cityname=city;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        var cod=data.cod;
        if (data.cod=="404"){
            document.querySelector("section").innerHTML="";
            var groups=document.createElement("div");
            groups.className="container-fluid";
            document.querySelector("section").appendChild(groups);
            groups.innerHTML=`
            <div class="fs-3 fw-bold "><span class="bi bi-emoji-frown-fill text-warning mx-3 bg-dark rounded-circle d-inline-block"></span>The ${cityname} Weather Data is not Available. Search for popular places.</div>
            `
            return;
        }
        var temperature=data.main.temp;
        var feelsLike=data.main.feels_like;
        var pressure=data.main.pressure;
        var humidity=data.main.humidity;
        var visibility=data.visibility;
        var windSpeed=data.wind.speed
        var description=data.weather[0].description;
        var weatherImage=data.weather[0].icon;
        var cityName=data.name;
        
        // var sec=document.querySelector("section");
        // sec.innerHTML=
        //     `<img src="../public/images/${weatherImage}.png">
        //     <div>Temperatuer=${temperature}</div>
        //     <div>Feels Like=${feelsLike}</div>
        //     <div>Humidity=${humidity}</div>
        //     <div>Visibility=${visibility}</div>
        //     <div>Wind Speed=${windSpeed}</div>
        //     <div>Description=${description}</div>`
        // ;
        document.querySelector("section").innerHTML="";
        var groups=document.createElement("div");
        groups.className="container-fluid";
        document.querySelector("section").appendChild(groups);
        var group1=document.createElement("div");
        var group2=document.createElement("div");
        groups.appendChild(group1);
        groups.appendChild(group2);
        group1.innerHTML=`
        <div class="my-2">
            <span class="bi bi-geo-alt-fill me-3 fs-3 text-danger"></span>
            <span class="fs-2 fw-bold"> ${cityName}</span>
        </div>
        <div class="my-2 d-flex flex-row justify-content-center">
            <img src="public/images/${weatherImage}.png" width="40px" height="40px" style="background-color:#C2C2C2" class="me-3">
            <span class="fs-2 fw-bold ms-3"> ${temperature}&deg C</span>
        </div>
        `;
        group2.innerHTML=`
        <div class="row">
            <div class="col-6">
                <ul class="list-group list-unstyled text-start">
                    <li class="list-group-item"> <span class="bi bi-thermometer-half"></span> <span class="fw-bold fs-6">Feels Like:</span> <span class="text-primary">${feelsLike}&deg C</span></li>
                    <li class="list-group-item"> <span class="bi bi-moisture"></span> <span class="fw-bold fs-6">Humidity:</span> <span class="text-primary">${humidity}%</span></li>
                    <li class="list-group-item"> <span class="bi bi-wind"></span> <span class="fw-bold fs-6">Wind Speed:</span> <span class="text-primary">${windSpeed}km/h</span></li>
                </ul>
            </div>
            <div class="col-6">
                <ul class="list-group list-unstyled text-start">
                    <li class="list-group-item"> <span class="bi bi-cloud-fog2"></span> <span class="fw-bold fs-6">Pressure:</span> <span class="text-primary">${pressure}hPa</span></li>
                    <li class="list-group-item"> <span class="bi bi-eye"></span> <span class="fw-bold fs-6">Visibility:</span> <span class="text-primary">${visibility}km</span></li>
                    <li class="list-group-item"> <span class="bi bi-card-text"></span> <span class="fw-bold fs-6">Description:</span> <span class="text-primary">${description}</span></li>
                </ul>
            </div>
        </div>
        `
    })
}
function searchCity(){
    var searchcity=document.querySelector(".city").value;
    document.querySelector("#selectCity").value="Select a city";
    getData(searchcity);
}
function selectedCity(){
    var selectcity=document.querySelector("#selectCity").value;
    document.querySelector(".city").value=document.querySelector("#selectCity").value;
    getData(selectcity);

}