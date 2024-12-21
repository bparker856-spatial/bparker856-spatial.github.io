var wms_layers = [];


        var lyr_EsriSatellite_0 = new ol.layer.Tile({
            'title': 'Esri Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_RouteandTravelMode_1 = new ol.format.GeoJSON();
var features_RouteandTravelMode_1 = format_RouteandTravelMode_1.readFeatures(json_RouteandTravelMode_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RouteandTravelMode_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RouteandTravelMode_1.addFeatures(features_RouteandTravelMode_1);
var lyr_RouteandTravelMode_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RouteandTravelMode_1, 
                style: style_RouteandTravelMode_1,
                popuplayertitle: 'Route and Travel Mode',
                interactive: false,
    title: 'Route and Travel Mode<br />\
    <img src="styles/legend/RouteandTravelMode_1_0.png" /> Plane<br />\
    <img src="styles/legend/RouteandTravelMode_1_1.png" /> Train<br />\
    <img src="styles/legend/RouteandTravelMode_1_2.png" /> Ship<br />\
    <img src="styles/legend/RouteandTravelMode_1_3.png" /> <br />'
        });
var format_Visitedcitycopy_2 = new ol.format.GeoJSON();
var features_Visitedcitycopy_2 = format_Visitedcitycopy_2.readFeatures(json_Visitedcitycopy_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Visitedcitycopy_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Visitedcitycopy_2.addFeatures(features_Visitedcitycopy_2);
var lyr_Visitedcitycopy_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Visitedcitycopy_2, 
                style: style_Visitedcitycopy_2,
                popuplayertitle: 'Visited city copy',
                interactive: false,
                title: '<img src="styles/legend/Visitedcitycopy_2.png" /> Visited city copy'
            });
var format_Visitedcity_3 = new ol.format.GeoJSON();
var features_Visitedcity_3 = format_Visitedcity_3.readFeatures(json_Visitedcity_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Visitedcity_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Visitedcity_3.addFeatures(features_Visitedcity_3);
var lyr_Visitedcity_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Visitedcity_3, 
                style: style_Visitedcity_3,
                popuplayertitle: 'Visited city',
                interactive: false,
                title: '<img src="styles/legend/Visitedcity_3.png" /> Visited city'
            });

lyr_EsriSatellite_0.setVisible(true);lyr_RouteandTravelMode_1.setVisible(true);lyr_Visitedcitycopy_2.setVisible(true);lyr_Visitedcity_3.setVisible(true);
var layersList = [lyr_EsriSatellite_0,lyr_RouteandTravelMode_1,lyr_Visitedcitycopy_2,lyr_Visitedcity_3];
lyr_RouteandTravelMode_1.set('fieldAliases', {'fid': 'fid', 'route_type': 'route_type', });
lyr_Visitedcitycopy_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'order': 'order', });
lyr_Visitedcity_3.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'order': 'order', });
lyr_RouteandTravelMode_1.set('fieldImages', {'fid': 'TextEdit', 'route_type': 'TextEdit', });
lyr_Visitedcitycopy_2.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'order': 'Range', });
lyr_Visitedcity_3.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'order': 'Range', });
lyr_RouteandTravelMode_1.set('fieldLabels', {'fid': 'no label', 'route_type': 'no label', });
lyr_Visitedcitycopy_2.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'order': 'no label', });
lyr_Visitedcity_3.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'order': 'no label', });
lyr_Visitedcity_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});