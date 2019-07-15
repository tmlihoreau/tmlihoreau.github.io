ol.proj.get("EPSG:27700").setExtent([261867.115679, 557966.324515, 321609.989728, 617538.116147]);
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
var format_Places_0 = new ol.format.GeoJSON();
var features_Places_0 = format_Places_0.readFeatures(json_Places_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_Places_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Places_0.addFeatures(features_Places_0);var lyr_Places_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Places_0, 
                style: style_Places_0,
                title: '<img src="styles/legend/Places_0.png" /> Places'
            });var format_Coverage_1742_1799_f_1 = new ol.format.GeoJSON();
var features_Coverage_1742_1799_f_1 = format_Coverage_1742_1799_f_1.readFeatures(json_Coverage_1742_1799_f_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_Coverage_1742_1799_f_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Coverage_1742_1799_f_1.addFeatures(features_Coverage_1742_1799_f_1);var lyr_Coverage_1742_1799_f_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Coverage_1742_1799_f_1, 
                style: style_Coverage_1742_1799_f_1,
                title: '<img src="styles/legend/Coverage_1742_1799_f_1.png" /> Coverage_1742_1799_f'
            });

lyr_Places_0.setVisible(true);lyr_Coverage_1742_1799_f_1.setVisible(true);
var layersList = [baseLayer,lyr_Places_0,lyr_Coverage_1742_1799_f_1];
lyr_Places_0.set('fieldAliases', {'id': 'id', 'Place name': 'Place name', });
lyr_Coverage_1742_1799_f_1.set('fieldAliases', {'id': 'id', 'SITE_NAME': 'Site name', 'PARISH': 'Parish', 'MAP_ORIGIN': 'MAP_ORIGIN', 'DATE': 'Date', 'HECTARE': 'HECTARE', 'Surveyor': 'Surveyor', 'HECT': 'Hectare', 'SOURCE': 'Source', 'URL': 'URL', 'Hect': 'Hectare', });
lyr_Places_0.set('fieldImages', {'id': 'Hidden', 'Place name': 'TextEdit', });
lyr_Coverage_1742_1799_f_1.set('fieldImages', {'id': 'Hidden', 'SITE_NAME': 'TextEdit', 'PARISH': 'TextEdit', 'MAP_ORIGIN': 'Hidden', 'DATE': 'TextEdit', 'HECTARE': 'Hidden', 'Surveyor': 'TextEdit', 'HECT': 'Hidden', 'SOURCE': 'TextEdit', 'URL': 'WebView', 'Hect': 'TextEdit', });
lyr_Places_0.set('fieldLabels', {'Place name': 'no label', });
lyr_Coverage_1742_1799_f_1.set('fieldLabels', {'SITE_NAME': 'no label', 'PARISH': 'no label', 'DATE': 'no label', 'Surveyor': 'no label', 'SOURCE': 'no label', 'URL': 'no label', 'Hect': 'no label', });
lyr_Coverage_1742_1799_f_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});