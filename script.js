ymaps.ready(init);

function init() {
    var geolocation = ymaps.geolocation,
        myMap = new ymaps.Map('map', {
            center: [55.76, 37.64],
            zoom: 10,
        }, {
            searchControlProvider: 'yandex#search'
        });

    geolocation.get({
        // Выставляем опцию для определения положения   
        provider: 'auto',
        autoReverseGeocode: false,
        // Карта автоматически отцентрируется по положению пользователя.
        mapStateAutoApply: true
    }).then(function (result) {
        result.geoObjects.options.set('preset', 'islands#redCircleIcon');
        result.geoObjects.get(0).properties.set({
            balloonContentBody: 'Ваше местоположение'
        });
        myMap.geoObjects.add(result.geoObjects);
    });
}
