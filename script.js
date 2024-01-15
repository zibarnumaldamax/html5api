ymaps.ready(init);

function init() {
    var geolocation = ymaps.geolocation,
        myMap = new ymaps.Map('map', {
            center: [55.76, 37.64],
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'
        });
    
    geolocation.get({
        provider: 'auto',
        autoReverseGeocode: false,
        mapStateAutoApply: true
    }).then(function (result) {
        result.geoObjects.options.set('preset', 'islands#redCircleIcon');
        result.geoObjects.get(0).properties.set({
            balloonContentBody: 'Ваше местоположение'
        });
        myMap.geoObjects.add(result.geoObjects);
    });

    var routePanel = new ymaps.control.RoutePanel({
        options: {
            provider: 'yandex#search'
        }
    });

    var searchControl = new ymaps.control.SearchControl({
        options: {
            provider: 'yandex#search'
        }
    });
    
    myMap.controls.add(searchControl);
    myMap.controls.add(routePanel);

    var control = myMap.controls.get('routeButtonControl');
    control.routePanel.geolocate('from');
    control.state.set('expanded', true);
}
