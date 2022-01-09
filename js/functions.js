
const application = new function(){
    this.latitud = document.getElementById('latitud');
    this.longitud = document.getElementById('longitud');
    this.card = document.querySelector('.weatherList');

    this.Search = async function(){
        const lat = latitud.value;
        const lon = longitud.value;
        const apiKey = '1716f0f186ec777c54117ce7ec81f66b';
        const units = 'metric';
        const lang = 'es';
        const url = 'https://api.openweathermap.org/data/2.5/onecall'

        const request = url + '?lat=' + lat + '&lon=' + lon + '&appid=' + apiKey + '&units=' +units + '&lang=' + lang;

        //const country = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lon+'&amp;key=AIzaSyDxXEdoSj6wgM2mZSD_iQVQncJZqVgxJlY'
        try{
            const response = await fetch(request);
            const data = await response.json();

            console.log(data)
            let icon = data.current.weather[0].icon
            let icon2 = data.daily[1].weather[0].icon
            let icon3 = data.daily[2].weather[0].icon
            let icon4 = data.daily[3].weather[0].icon
            let icon5 = data.daily[4].weather[0].icon
            const dt = new Date (data.current.dt*1000)
            const dt2 = new Date (data.daily[1].dt*1000)
            const dt3 = new Date (data.daily[2].dt*1000)
            const dt4 = new Date (data.daily[3].dt*1000)
            const dt5 = new Date (data.daily[4].dt*1000)
            let dataHtml ='';
            dataHtml += '<div class="cards">';
            dataHtml += '<div class="date">Actual</div>';
            dataHtml += '<div class="weather"><img class="image" src="http://openweathermap.org/img/wn/'+icon+'@2x.png" alt="image"></div>';
            dataHtml += '<div class="temp">'+ data.current.temp +' &degC</div>';
            dataHtml += '<div class="weather">'+data.current.weather[0].description+'</div>';
            dataHtml += '<div class="weather"> Sensación termica: '+ data.current.feels_like +' &degC</div>';
            dataHtml += '<div class="weather">Humedad: '+ data.current.humidity+'%</div>';
            dataHtml += '<div class="weather">Uv: '+ data.current.uvi +'%</div>';
            dataHtml += '</div>';
            //card2
            dataHtml += '<div class="cards">';
            dataHtml += '<div class="date">'+ dt2.toDateString()+'</div>';
            dataHtml += '<div class="weather"><img class="image" src="http://openweathermap.org/img/wn/'+icon2+'@2x.png" alt="image"></div>';
            dataHtml += '<div class="temp">'+ data.daily[1].temp.day +' &degC</div>';
            dataHtml += '<div class="weather">'+data.daily[1].weather[0].description+'</div>';
            dataHtml += '<div class="weather">Minima: '+data.daily[1].temp.min+' &degC</div>';
            dataHtml += '<div class="weather">Máxima: '+data.daily[1].temp.max+' &degC</div>';
            dataHtml += '<div class="weather"> Sensación termica: '+ data.daily[1].feels_like.day +' &degC</div>';
            dataHtml += '<div class="weather">Humedad: '+ data.daily[1].humidity+'%</div>';
            dataHtml += '<div class="weather">Uv: '+ data.daily[1].uvi +'%</div>';
            dataHtml += '</div>';

            //card3
            dataHtml += '<div class="cards">';
            dataHtml += '<div class="date">'+ dt3.toDateString()+'</div>';
            dataHtml += '<div class="weather"><img class="image" src="http://openweathermap.org/img/wn/'+icon3+'@2x.png" alt="image"></div>';
            dataHtml += '<div class="temp">'+ data.daily[2].temp.day +' &degC</div>';
            dataHtml += '<div class="weather">'+data.daily[2].weather[0].description+'</div>';
            dataHtml += '<div class="weather">Minima: '+data.daily[2].temp.min+' &degC</div>';
            dataHtml += '<div class="weather">Máxima: '+data.daily[2].temp.max+' &degC</div>';
            dataHtml += '<div class="weather"> Sensación termica: '+ data.daily[2].feels_like.day +' &degC</div>';
            dataHtml += '<div class="weather">Humedad: '+ data.daily[2].humidity+'%</div>';
            dataHtml += '<div class="weather">Uv: '+ data.daily[2].uvi +'%</div>';
            dataHtml += '</div>';

            //card4
            dataHtml += '<div class="cards">';
            dataHtml += '<div class="date">'+ dt4.toDateString()+'</div>';
            dataHtml += '<div class="weather"><img class="image" src="http://openweathermap.org/img/wn/'+icon4+'@2x.png" alt="image"></div>';
            dataHtml += '<div class="temp">'+ data.daily[3].temp.day +' &degC</div>';
            dataHtml += '<div class="weather">'+data.daily[3].weather[0].description+'</div>';
            dataHtml += '<div class="weather">Minima: '+data.daily[3].temp.min+' &degC</div>';
            dataHtml += '<div class="weather">Máxima: '+data.daily[3].temp.max+' &degC</div>';
            dataHtml += '<div class="weather"> Sensación termica: '+ data.daily[3].feels_like.day +' &degC</div>';
            dataHtml += '<div class="weather">Humedad: '+ data.daily[3].humidity+'%</div>';
            dataHtml += '<div class="weather">Uv: '+ data.daily[3].uvi +'%</div>';
            dataHtml += '</div>';

            //card6
            dataHtml += '<div class="cards">';
            dataHtml += '<div class="date">'+ dt5.toDateString()+'</div>';
            dataHtml += '<div class="weather"><img class="image" src="http://openweathermap.org/img/wn/'+icon5+'@2x.png" alt="image"></div>';
            dataHtml += '<div class="temp">'+ data.daily[4].temp.day +' &degC</div>';
            dataHtml += '<div class="weather">'+data.daily[4].weather[0].description+'</div>';
            dataHtml += '<div class="weather">Minima: '+data.daily[4].temp.min+' &degC</div>';
            dataHtml += '<div class="weather">Máxima: '+data.daily[4].temp.max+' &degC</div>';
            dataHtml += '<div class="weather"> Sensación termica: '+ data.daily[4].feels_like.day +' &degC</div>';
            dataHtml += '<div class="weather">Humedad: '+ data.daily[4].humidity+'%</div>';
            dataHtml += '<div class="weather">Uv: '+ data.daily[4].uvi +'%</div>';
            dataHtml += '</div>';
            this.card.innerHTML = dataHtml;
        }
        catch(error){
            console.log(error)
        }
    }
}

function initMap() {
    const coordinates = { lat: 17.0669, lng: -96.7203 }
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 2,
        center: coordinates,
    });

    let infoWindow = new google.maps.InfoWindow({
    content: "Da click en el mapa para obtener las coordenadas",
    position: coordinates,
    });

    infoWindow.open(map);

    map.addListener("click", (mapsMouseEvent) => {
    infoWindow.close();
    
    infoWindow = new google.maps.InfoWindow({
    position: mapsMouseEvent.latLng,
    });

    infoWindow.setContent(
    JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
    );
    infoWindow.open(map);
    });
}
