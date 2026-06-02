var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_univ_surabaya_1 = new ol.format.GeoJSON();
var features_univ_surabaya_1 = format_univ_surabaya_1.readFeatures(json_univ_surabaya_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_univ_surabaya_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_univ_surabaya_1.addFeatures(features_univ_surabaya_1);
var lyr_univ_surabaya_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_univ_surabaya_1, 
                style: style_univ_surabaya_1,
                popuplayertitle: 'univ_surabaya',
                interactive: false,
                title: '<img src="styles/legend/univ_surabaya_1.png" /> univ_surabaya'
            });
var format_aksesibilitas_univunion_2 = new ol.format.GeoJSON();
var features_aksesibilitas_univunion_2 = format_aksesibilitas_univunion_2.readFeatures(json_aksesibilitas_univunion_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_aksesibilitas_univunion_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aksesibilitas_univunion_2.addFeatures(features_aksesibilitas_univunion_2);
var lyr_aksesibilitas_univunion_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_aksesibilitas_univunion_2, 
                style: style_aksesibilitas_univunion_2,
                popuplayertitle: 'aksesibilitas_univ — union',
                interactive: false,
                title: '<img src="styles/legend/aksesibilitas_univunion_2.png" /> aksesibilitas_univ — union'
            });
var format_aksesibilitas_univ_3 = new ol.format.GeoJSON();
var features_aksesibilitas_univ_3 = format_aksesibilitas_univ_3.readFeatures(json_aksesibilitas_univ_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_aksesibilitas_univ_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aksesibilitas_univ_3.addFeatures(features_aksesibilitas_univ_3);
var lyr_aksesibilitas_univ_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_aksesibilitas_univ_3, 
                style: style_aksesibilitas_univ_3,
                popuplayertitle: 'aksesibilitas_univ',
                interactive: false,
    title: 'aksesibilitas_univ<br />\
    <img src="styles/legend/aksesibilitas_univ_3_0.png" /> 1,2km (15 menit)<br />\
    <img src="styles/legend/aksesibilitas_univ_3_1.png" /> 2,4km (30 menit)<br />\
    <img src="styles/legend/aksesibilitas_univ_3_2.png" /> <br />' });
var format_PTNdiSurabaya_4 = new ol.format.GeoJSON();
var features_PTNdiSurabaya_4 = format_PTNdiSurabaya_4.readFeatures(json_PTNdiSurabaya_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PTNdiSurabaya_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTNdiSurabaya_4.addFeatures(features_PTNdiSurabaya_4);
var lyr_PTNdiSurabaya_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PTNdiSurabaya_4, 
                style: style_PTNdiSurabaya_4,
                popuplayertitle: 'PTN di Surabaya',
                interactive: true,
    title: 'PTN di Surabaya<br />\
    <img src="styles/legend/PTNdiSurabaya_4_0.png" /> ITS Manyar<br />\
    <img src="styles/legend/PTNdiSurabaya_4_1.png" /> ITS Sukolilo<br />\
    <img src="styles/legend/PTNdiSurabaya_4_2.png" /> UIN Sunan Ampel<br />\
    <img src="styles/legend/PTNdiSurabaya_4_3.png" /> UNAIR A<br />\
    <img src="styles/legend/PTNdiSurabaya_4_4.png" /> UNAIR B<br />\
    <img src="styles/legend/PTNdiSurabaya_4_5.png" /> UNAIR C<br />\
    <img src="styles/legend/PTNdiSurabaya_4_6.png" /> UNESA Ketintang<br />\
    <img src="styles/legend/PTNdiSurabaya_4_7.png" /> UNESA Lidah Wetan<br />\
    <img src="styles/legend/PTNdiSurabaya_4_8.png" /> UPNV Jatim<br />\
    <img src="styles/legend/PTNdiSurabaya_4_9.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_univ_surabaya_1.setVisible(true);lyr_aksesibilitas_univunion_2.setVisible(false);lyr_aksesibilitas_univ_3.setVisible(true);lyr_PTNdiSurabaya_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_univ_surabaya_1,lyr_aksesibilitas_univunion_2,lyr_aksesibilitas_univ_3,lyr_PTNdiSurabaya_4];
lyr_univ_surabaya_1.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', });
lyr_aksesibilitas_univunion_2.set('fieldAliases', {'fid': 'fid', 'Access': 'Access', });
lyr_aksesibilitas_univ_3.set('fieldAliases', {'fid': 'fid', 'Access': 'Access', });
lyr_PTNdiSurabaya_4.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', 'QS WUR': 'QS WUR', 'Didirikan': 'Didirikan', 'fakultas': 'fakultas', 'foto': 'foto', });
lyr_univ_surabaya_1.set('fieldImages', {'fid': '', 'Nama': '', 'Kampus': '', });
lyr_aksesibilitas_univunion_2.set('fieldImages', {'fid': '', 'Access': '', });
lyr_aksesibilitas_univ_3.set('fieldImages', {'fid': 'TextEdit', 'Access': 'TextEdit', });
lyr_PTNdiSurabaya_4.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', 'QS WUR': 'TextEdit', 'Didirikan': 'TextEdit', 'fakultas': '', 'foto': 'ExternalResource', });
lyr_univ_surabaya_1.set('fieldLabels', {'fid': 'no label', 'Nama': 'no label', 'Kampus': 'no label', });
lyr_aksesibilitas_univunion_2.set('fieldLabels', {'fid': 'no label', 'Access': 'no label', });
lyr_aksesibilitas_univ_3.set('fieldLabels', {'fid': 'no label', 'Access': 'no label', });
lyr_PTNdiSurabaya_4.set('fieldLabels', {'fid': 'hidden field', 'Nama': 'hidden field', 'Kampus': 'inline label - always visible', 'QS WUR': 'inline label - always visible', 'Didirikan': 'inline label - always visible', 'fakultas': 'inline label - always visible', 'foto': 'no label', });
lyr_PTNdiSurabaya_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});