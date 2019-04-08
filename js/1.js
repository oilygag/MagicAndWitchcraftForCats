ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.306300, 18.115800],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),
        position =  [59.306300, 18.115800],
        myPlacemark = new ymaps.Placemark(position, {
            hintContent: 'Course in Magic and Witchcraft for cats',
            balloonContent: 'Nacka, Uddvägen 6, Stockholm, Sweden'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: './media/google_marker.png',
            // Размеры метки.
            iconImageSize: [38, 60],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-20, -70]
        });

    myMap.geoObjects.add(myPlacemark);
});

$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.row-offcanvas').toggleClass('active')
  })
})
