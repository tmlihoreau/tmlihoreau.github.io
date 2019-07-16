ol.proj.get("EPSG:27700").setExtent([238688.735403, 538532.754097, 398632.266969, 629757.260286]);
var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Coverage18011833_0 = new ol.format.GeoJSON();
var features_Coverage18011833_0 = format_Coverage18011833_0.readFeatures(json_Coverage18011833_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_Coverage18011833_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Coverage18011833_0.addFeatures(features_Coverage18011833_0);var lyr_Coverage18011833_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Coverage18011833_0, 
                style: style_Coverage18011833_0,
                title: '<img src="styles/legend/Coverage18011833_0.png" /> Coverage 1801-1833'
            });var format_Coverage17421799_1 = new ol.format.GeoJSON();
var features_Coverage17421799_1 = format_Coverage17421799_1.readFeatures(json_Coverage17421799_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_Coverage17421799_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Coverage17421799_1.addFeatures(features_Coverage17421799_1);var lyr_Coverage17421799_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Coverage17421799_1, 
                style: style_Coverage17421799_1,
                title: '<img src="styles/legend/Coverage17421799_1.png" /> Coverage 1742-1799'
            });var format_Places_2 = new ol.format.GeoJSON();
var features_Places_2 = format_Places_2.readFeatures(json_Places_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_Places_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Places_2.addFeatures(features_Places_2);var lyr_Places_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Places_2, 
                style: style_Places_2,
                title: '<img src="styles/legend/Places_2.png" /> Places'
            });

lyr_Coverage18011833_0.setVisible(true);lyr_Coverage17421799_1.setVisible(true);lyr_Places_2.setVisible(true);
var layersList = [baseLayer,lyr_Coverage18011833_0,lyr_Coverage17421799_1,lyr_Places_2];
lyr_Coverage18011833_0.set('fieldAliases', {'id': 'id', 'SITE_NAME': 'Site', 'PARISH': 'Parish', 'MAP_ORIGIN': 'MAP_ORIGIN', 'DATE': 'Date', 'HECTARE': 'HECTARE', 'SURVEYOR': 'Surveyor', 'HECT': 'HECT', 'SOURCE': 'Source', 'URL': 'URL', 'HECTAR': 'Hectare', 'COMMENTS': 'Comment', 'HEC': 'Hectare', });
lyr_Coverage17421799_1.set('fieldAliases', {'id': 'id', 'SITE_NAME': 'Site', 'PARISH': 'Parish', 'MAP_ORIGIN': 'MAP_ORIGIN', 'DATE': 'Date', 'HECTARE': 'HECTARE', 'Surveyor': 'Surveyor', 'HECT': 'Hectare', 'SOURCE': 'Source', 'URL': 'URL', 'COMMENTS': 'Comment', 'Hect': 'Hectare', });
lyr_Places_2.set('fieldAliases', {'id': 'id', 'Place name': 'Place name', });
lyr_Coverage18011833_0.set('fieldImages', {'id': 'Hidden', 'SITE_NAME': 'TextEdit', 'PARISH': 'TextEdit', 'MAP_ORIGIN': 'Hidden', 'DATE': 'TextEdit', 'HECTARE': 'Hidden', 'SURVEYOR': 'TextEdit', 'HECT': 'Hidden', 'SOURCE': 'TextEdit', 'URL': 'Hidden', 'HECTAR': 'Hidden', 'COMMENTS': 'TextEdit', 'HEC': 'TextEdit', });
lyr_Coverage17421799_1.set('fieldImages', {'id': 'Hidden', 'SITE_NAME': 'TextEdit', 'PARISH': 'TextEdit', 'MAP_ORIGIN': 'Hidden', 'DATE': 'TextEdit', 'HECTARE': 'Hidden', 'Surveyor': 'TextEdit', 'HECT': 'Hidden', 'SOURCE': 'TextEdit', 'URL': 'Hidden', 'COMMENTS': 'TextEdit', 'Hect': 'TextEdit', });
lyr_Places_2.set('fieldImages', {'id': 'Hidden', 'Place name': 'TextEdit', });
lyr_Coverage18011833_0.set('fieldLabels', {'SITE_NAME': 'inline label', 'PARISH': 'inline label', 'DATE': 'inline label', 'SURVEYOR': 'inline label', 'SOURCE': 'inline label', 'COMMENTS': 'inline label', 'HEC': 'inline label', });
lyr_Coverage17421799_1.set('fieldLabels', {'SITE_NAME': 'inline label', 'PARISH': 'inline label', 'DATE': 'inline label', 'Surveyor': 'inline label', 'SOURCE': 'inline label', 'COMMENTS': 'inline label', 'Hect': 'inline label', });
lyr_Places_2.set('fieldLabels', {'Place name': 'no label', });
lyr_Places_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});