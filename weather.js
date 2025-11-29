function w_api(){
    let city = document.getElementById("city").value;

    fetch(`https://api.weatherapi.com/v1/current.json?key=e66b8e9689fd47c797b60402252911&q=${city}&aqi=yes`)
        .then(response => response.json())
        .then(data => {
            alert(`Current temp: ${data.current.temp_c}°C`);
        })
        .catch(err => console.error(err));
}
