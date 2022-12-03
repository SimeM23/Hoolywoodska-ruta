var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Hollywoodska_ruta_1 = new ol.format.GeoJSON();
var features_Hollywoodska_ruta_1 = format_Hollywoodska_ruta_1.readFeatures(json_Hollywoodska_ruta_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hollywoodska_ruta_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hollywoodska_ruta_1.addFeatures(features_Hollywoodska_ruta_1);
var lyr_Hollywoodska_ruta_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hollywoodska_ruta_1, 
                style: style_Hollywoodska_ruta_1,
                interactive: true,
    title: 'Hollywoodska_ruta<br />\
    <img src="styles/legend/Hollywoodska_ruta_1_0.png" /> Gorska Hrvatska<br />\
    <img src="styles/legend/Hollywoodska_ruta_1_1.png" /> Istočna Hrvatska<br />\
    <img src="styles/legend/Hollywoodska_ruta_1_2.png" /> Južno hrvatsko primorje<br />\
    <img src="styles/legend/Hollywoodska_ruta_1_3.png" /> Sjeverno hrvatsko primorje<br />\
    <img src="styles/legend/Hollywoodska_ruta_1_4.png" /> Središnja Hrvatska<br />\
    <img src="styles/legend/Hollywoodska_ruta_1_5.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Hollywoodska_ruta_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Hollywoodska_ruta_1];
lyr_Hollywoodska_ruta_1.set('fieldAliases', {'Regija': 'Regija', 'Lokacija': 'Lokacija', 'x': 'x', 'y': 'y', 'Napomena': 'Napomena', });
lyr_Hollywoodska_ruta_1.set('fieldImages', {'Regija': 'TextEdit', 'Lokacija': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Napomena': 'TextEdit', });
lyr_Hollywoodska_ruta_1.set('fieldLabels', {'Regija': 'no label', 'Lokacija': 'header label', 'x': 'no label', 'y': 'no label', 'Napomena': 'no label', });
lyr_Hollywoodska_ruta_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});