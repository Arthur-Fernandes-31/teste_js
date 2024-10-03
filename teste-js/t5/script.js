const btnLocalizar = document.getElementById("localiza");
btnLocalizar.addEventListener("click", () => {
    function showPosition(position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        console.log( 'Latitude: ' + latitude + 'Longitude: ' + longitude);
    }
    let cordenadas = navigator.geolocation.getCurrentPosition(showPosition);
});