(function ($) {
    "use strict";
    var map;
    var InforObj = [];
    var centerCords = {
        lat: -25.344,
        lng: 131.036
    };
    var markersOnMap = [{
            address: "2005 Stokes Isle Apt 896 Venaville 10010 USA",
            phone: "(+12) 345 6789",
            email: "dlab20@droitlab.com",
            LatLng: [{
                lat: -25.844,
                lng: 131.036
            }]
        },
        {
            address: "2005 Stokes Isle Apt 896 Venaville 10010 USA",
            phone: "750889097",
            email: "dlab20@droitlab.com",
            LatLng: [{
                lat: -26.852086,
                lng: 140.036
            }]
        },
        {
            address: "2005 Stokes Isle Apt 896 Venaville 10010 USA",
            phone: "750889097",
            email: "dlab20@droitlab.com",
            LatLng: [{
                lat: -24.852086,
                lng: 135.036
            }]
        }
    ];

    window.onload = function () {
        initMap();
    };

    function addMarkerInfo() {
        for (var i = 0; i < markersOnMap.length; i++) {
            var contentString = '<div id="content"><div class="single_location"> <div class="location_img"><img src="img/map_logo.jpg"></div> <div class ="location_info"> <h2>Droitlab Office</h2><p>' + markersOnMap[i].address +
                '</p> <p>' + markersOnMap[i].email +
                '</p></div></div>';

            const marker = new google.maps.Marker({
                position: markersOnMap[i].LatLng[0],
                map: map,
                "icon": 'http://droitthemes.com/html/billey/img/billy-icon-map-marker.png',
            });

            const infowindow = new google.maps.InfoWindow({
                content: contentString,
                maxWidth: 200
            });

            marker.addListener('mouseover', function () {
                closeOtherInfo();
                infowindow.open(marker.get('map'), marker);
                InforObj[0] = infowindow;
            });

            marker.addListener('mouseout', function () {
                closeOtherInfo();
                infowindow.close(marker.get('map'), marker);
                InforObj[0] = infowindow;
            });
        }
    }

    function closeOtherInfo() {
        if (InforObj.length > 0) {
            InforObj[0].set("marker", null);
            InforObj[0].close();
            InforObj.length = 0;
        }
    }

    function initMap() {
        map = new google.maps.Map(document.getElementById('multi_loaction_map'), {
            zoom: 6,
            center: centerCords
        });
        addMarkerInfo();
    }
}(jQuery))