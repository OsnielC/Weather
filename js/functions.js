
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
            //cards
            for (let i = 1; i < 5; i++) {
                dataHtml += '<div class="cards">';
                dataHtml += '<div class="date">'+ new Date (data.daily[i].dt*1000).toDateString()+'</div>';
                dataHtml += '<div class="weather"><img class="image" src="http://openweathermap.org/img/wn/'+data.daily[i].weather[0].icon+'@2x.png" alt="image"></div>';
                dataHtml += '<div class="temp">'+ data.daily[i].temp.day +' &degC</div>';
                dataHtml += '<div class="weather">'+data.daily[i].weather[0].description+'</div>';
                dataHtml += '<div class="weather">Minima: '+data.daily[i].temp.min+' &degC</div>';
                dataHtml += '<div class="weather">Máxima: '+data.daily[i].temp.max+' &degC</div>';
                dataHtml += '<div class="weather"> Sensación termica: '+ data.daily[i].feels_like.day +' &degC</div>';
                dataHtml += '<div class="weather">Humedad: '+ data.daily[i].humidity+'%</div>';
                dataHtml += '<div class="weather">Uv: '+ data.daily[i].uvi +'%</div>';
                dataHtml += '</div>';
            }
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
