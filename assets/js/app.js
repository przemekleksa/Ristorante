


fetch('https://instagram.apppi.pl', {
    method: 'GET'
}).then(response => response.json())
    .then(function (response) {
        let html = "";
        for (let i = 0; i < response.length; i++) {
            html += '<div class="item">' + '<a href="' + response[i].url + '" class="lightbox">' +
                '<img alt=" ' + response[i].alt + '"  src="' + response[i].url + '"></a></div>';
        }
        document.getElementById("instagram-content").innerHTML = html;


    }).catch(error => {
        alert(error);
    })

window.addEventListener('scroll', function () {
    //console.log("Zdarzenie na scroll")
    let navigation = document.getElementsByTagName('nav')[0];
    //console.log(navigation)
    //console.log(window.pageYOffset)
    if (window.pageYOffset > 100) {
        navigation.classList.add('blue')
    }
    else {
        navigation.classList.remove('blue')
    }
    if (window.pageYOffset > 0) {
        document.body.classList.add('move')
    }
    else {
        document.body.classList.remove('move')
    }
})


function initMap() {
    let pizzaHutBonarka = { lat: 50.0293445, lng: 19.9444918 };

    let map = new google.maps.Map(
        document.getElementById('googlemapa'),
        {
            zoom: 14,
            center: pizzaHutBonarka,
            styles: [
                {
                    "featureType": "administrative",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit.station.rail",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        },
                        {
                            "saturation": "-100"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                }
            ]
        });

    let marker = new google.maps.Marker({
        position: pizzaHutBonarka,
        map: map,
        icon: '/assets/images/marker.png'
    });
}


