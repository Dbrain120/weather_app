let element = document.getElementById('hello')

// let element2 = $('#hello')

function dataChange() {
    let city = $("#change-form input[name=City]").val()
    let country = $("#change-form input[name=Country]").val()

    $.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country + '&appid=API_KEY', function(data){
       
        $("#CityDisplay").text(city.toUpperCase() + "," + country.toUpperCase())
        $("#content").removeClass('vis-hidden')

        let high = Math.floor(((data.main.temp_max-273.15)*1.8)+32)
        $('#high').text(high + '\xB0'+'F')
        let low = Math.floor(((data.main.temp_min-273.15)*1.8)+32)
        $('#low').text(low + '\xB0'+'F')
        let humidity = Math.floor(data.main.humidity)
        $('#humidity').text(humidity + '%')
        let forecast = data.weather[0].main
        console.log(forecast)
        $('#forecast').text(forecast)
    })
    
    
}