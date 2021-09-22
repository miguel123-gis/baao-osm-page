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
function stlNaturalLUse(json) {
    return {
        fillOpacity: 0,
        color: '#800080',
        weight:0.8
    };
}
// POPUP FOR LAYERS
function popBaao(feature, json){
    json.bindPopup("Land area: "+feature.properties.area_sqkm+"km²")
};

// function popOSM(json) {
//     switch(json){
//         case "lyrBldgs":
//             json.bindPopup("lyrBldgs");
//             break;
//         default:
//             json.bindPopup("dog");
//     }

// };

function popOSM(json){
    if(json=lyrBldgs){
        json.bindPopup("Bldgs")
    } else if(json=lyrLanduse) {
        json.bindPopup("Landuse")
    } else {
        json.bindPopup("Natural")
    };
};

function resetLocation(btn) {
    alert("dog")
}