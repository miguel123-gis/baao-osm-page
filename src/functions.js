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
        color: '#800080',
        weight:0.8
    };
}
function stlNatural(json) {
    return {
        fillOpacity: 0,
        color: '#800080',
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
                    "building: " + att.landuse)
    } else if (layerStyle == stlNatural) {
        popupTxt = ("osm_way_id: " + att.osm_way_id + "</br>"+
                    "building: " + att.natural)    
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