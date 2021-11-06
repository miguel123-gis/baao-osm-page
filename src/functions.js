// FUNCTIONS
// STYLING FOR VECTOR LAYERS
function stlBdry(json) {
    return {
        fillOpacity: 0,
        color: '#000000',
        weight: 2
    };
}
function stlBldgs(json) {
    return {
        fillColor: '#800080',
        fillOpacity: 0.5,
        color: '#800080',
        weight: 1
    };
} 
function stlLanduse(json) {
    return {
        fillOpacity: 0,
        color: '#0000FF',
        weight:0.8
    };
}
function stlNatural(json) {
    return {
        fillOpacity: 0,
        color: '#228B22',
        weight:0.8
    };
}
// POPUP FOR LAYERS
function popOSM(feature, layer){
    var att = feature.properties;
    var layerStyle = layer.options.style;
    var popupTxt
    if (layerStyle == stlBldgs) {
        popupTxt = ("osm_way_id: " + att.osm_way_id + "</br>"+
                    "building: " + att.building)
    } else if (layerStyle == stlLanduse) {
        popupTxt = ("osm_way_id: " + att.osm_way_id + "</br>"+
                    "landuse: " + att.landuse)
    } else if (layerStyle == stlNatural) {
        popupTxt = ("osm_way_id: " + att.osm_way_id + "</br>"+
                    "natural: " + att.natural)    
    } else if (layerStyle == stlBdry) {
        popupTxt = "Land area: "+feature.properties.area_sqkm+"km²"
    } else {
        null
    }
    layer.bindPopup(popupTxt);
};

function resetLocation(btn) {
    mymap.fitBounds([[13.423, 123.305],  // Minimum
        [13.544,123.422]    // Maximum
       ]);
}

function slideLayer() {
    if (mymap.hasLayer(lyrBldgs)) {
        mymap.removeLayer(lyrBldgs)
    } else {
        mymap.addLayer(lyrBldgs)
    }
};

// getDataAddMarkers = function( {label, value, map, exclamation} ) {
//     map.eachLayer(function (layer) {
//             if (layer instanceof L.Marker) {
//                 map.removeLayer(layer);
//             }
//     });

//     filteredData = data.features.filter(function (i, n) {
//         return i.properties.title===label;
//         });

//     var markerArray = [];
//     L.geoJson(filteredData, {
//         onEachFeature: function onEachFeature(feature, layer) {
//             content = `${exclamation} <br> ${feature.properties.content} <br> (${Math.round(value/6 * 100)}% done with story)`
//             var popup = L.popup().setContent(content);
//             layer.bindPopup(popup);
//             markerArray.push(layer);
//         }
//     }).addTo(map);
    
//     var markerGroup = L.featureGroup(markerArray);
//     map.fitBounds(markerGroup.getBounds()).setZoom(12);
// };