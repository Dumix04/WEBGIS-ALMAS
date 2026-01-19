var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KecLowokwaru_1 = new ol.format.GeoJSON();
var features_KecLowokwaru_1 = format_KecLowokwaru_1.readFeatures(json_KecLowokwaru_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecLowokwaru_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecLowokwaru_1.addFeatures(features_KecLowokwaru_1);
var lyr_KecLowokwaru_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KecLowokwaru_1, 
                style: style_KecLowokwaru_1,
                popuplayertitle: 'Kec Lowokwaru',
                interactive: true,
                title: '<img src="styles/legend/KecLowokwaru_1.png" /> Kec Lowokwaru'
            });
var format_Lahan_Hijau_2 = new ol.format.GeoJSON();
var features_Lahan_Hijau_2 = format_Lahan_Hijau_2.readFeatures(json_Lahan_Hijau_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lahan_Hijau_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lahan_Hijau_2.addFeatures(features_Lahan_Hijau_2);
var lyr_Lahan_Hijau_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lahan_Hijau_2, 
                style: style_Lahan_Hijau_2,
                popuplayertitle: 'Lahan_Hijau',
                interactive: true,
                title: '<img src="styles/legend/Lahan_Hijau_2.png" /> Lahan_Hijau'
            });
var format_Fasilitas_umum_3 = new ol.format.GeoJSON();
var features_Fasilitas_umum_3 = format_Fasilitas_umum_3.readFeatures(json_Fasilitas_umum_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fasilitas_umum_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fasilitas_umum_3.addFeatures(features_Fasilitas_umum_3);
var lyr_Fasilitas_umum_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fasilitas_umum_3, 
                style: style_Fasilitas_umum_3,
                popuplayertitle: 'Fasilitas_umum',
                interactive: true,
                title: '<img src="styles/legend/Fasilitas_umum_3.png" /> Fasilitas_umum'
            });
var format_Jalan_Provinsi_4 = new ol.format.GeoJSON();
var features_Jalan_Provinsi_4 = format_Jalan_Provinsi_4.readFeatures(json_Jalan_Provinsi_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_Provinsi_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_Provinsi_4.addFeatures(features_Jalan_Provinsi_4);
var lyr_Jalan_Provinsi_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_Provinsi_4, 
                style: style_Jalan_Provinsi_4,
                popuplayertitle: 'Jalan_Provinsi',
                interactive: true,
                title: '<img src="styles/legend/Jalan_Provinsi_4.png" /> Jalan_Provinsi'
            });
var format_Jalan_Raya_5 = new ol.format.GeoJSON();
var features_Jalan_Raya_5 = format_Jalan_Raya_5.readFeatures(json_Jalan_Raya_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_Raya_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_Raya_5.addFeatures(features_Jalan_Raya_5);
var lyr_Jalan_Raya_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_Raya_5, 
                style: style_Jalan_Raya_5,
                popuplayertitle: ' Jalan_Raya',
                interactive: true,
                title: '<img src="styles/legend/Jalan_Raya_5.png" />  Jalan_Raya'
            });
var format_Jalan_Desa_6 = new ol.format.GeoJSON();
var features_Jalan_Desa_6 = format_Jalan_Desa_6.readFeatures(json_Jalan_Desa_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_Desa_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_Desa_6.addFeatures(features_Jalan_Desa_6);
var lyr_Jalan_Desa_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_Desa_6, 
                style: style_Jalan_Desa_6,
                popuplayertitle: 'Jalan_Desa',
                interactive: true,
                title: '<img src="styles/legend/Jalan_Desa_6.png" /> Jalan_Desa'
            });
var format_Jalan_Gang_7 = new ol.format.GeoJSON();
var features_Jalan_Gang_7 = format_Jalan_Gang_7.readFeatures(json_Jalan_Gang_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_Gang_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_Gang_7.addFeatures(features_Jalan_Gang_7);
var lyr_Jalan_Gang_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_Gang_7, 
                style: style_Jalan_Gang_7,
                popuplayertitle: 'Jalan_Gang',
                interactive: true,
                title: '<img src="styles/legend/Jalan_Gang_7.png" /> Jalan_Gang'
            });
var format_Jalan_Perumahan_8 = new ol.format.GeoJSON();
var features_Jalan_Perumahan_8 = format_Jalan_Perumahan_8.readFeatures(json_Jalan_Perumahan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_Perumahan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_Perumahan_8.addFeatures(features_Jalan_Perumahan_8);
var lyr_Jalan_Perumahan_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_Perumahan_8, 
                style: style_Jalan_Perumahan_8,
                popuplayertitle: 'Jalan_Perumahan',
                interactive: true,
                title: '<img src="styles/legend/Jalan_Perumahan_8.png" /> Jalan_Perumahan'
            });
var format_lOKASI_STUDIO_9 = new ol.format.GeoJSON();
var features_lOKASI_STUDIO_9 = format_lOKASI_STUDIO_9.readFeatures(json_lOKASI_STUDIO_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lOKASI_STUDIO_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lOKASI_STUDIO_9.addFeatures(features_lOKASI_STUDIO_9);
var lyr_lOKASI_STUDIO_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lOKASI_STUDIO_9, 
                style: style_lOKASI_STUDIO_9,
                popuplayertitle: 'lOKASI_STUDIO',
                interactive: true,
                title: '<img src="styles/legend/lOKASI_STUDIO_9.png" /> lOKASI_STUDIO'
            });
var group_Map = new ol.layer.Group({
                                layers: [lyr_KecLowokwaru_1,lyr_Lahan_Hijau_2,lyr_Fasilitas_umum_3,lyr_Jalan_Provinsi_4,lyr_Jalan_Raya_5,lyr_Jalan_Desa_6,lyr_Jalan_Gang_7,lyr_Jalan_Perumahan_8,lyr_lOKASI_STUDIO_9,],
                                fold: 'open',
                                title: 'Map'});
var group_model_output = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'model_output'});

lyr_OpenStreetMap_0.setVisible(true);lyr_KecLowokwaru_1.setVisible(true);lyr_Lahan_Hijau_2.setVisible(true);lyr_Fasilitas_umum_3.setVisible(true);lyr_Jalan_Provinsi_4.setVisible(true);lyr_Jalan_Raya_5.setVisible(true);lyr_Jalan_Desa_6.setVisible(true);lyr_Jalan_Gang_7.setVisible(true);lyr_Jalan_Perumahan_8.setVisible(true);lyr_lOKASI_STUDIO_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_Map];
lyr_KecLowokwaru_1.set('fieldAliases', {'id': 'id', 'Luas KM': 'Luas KM', 'Luas M': 'Luas M', 'Nama': 'Nama', });
lyr_Lahan_Hijau_2.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', 'luas hktar': 'luas hktar', });
lyr_Fasilitas_umum_3.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', });
lyr_Jalan_Provinsi_4.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Panjang': 'Panjang', });
lyr_Jalan_Raya_5.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Panjang': 'Panjang', });
lyr_Jalan_Desa_6.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Panjang': 'Panjang', });
lyr_Jalan_Gang_7.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Panjang': 'Panjang', 'panjang KM': 'panjang KM', });
lyr_Jalan_Perumahan_8.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Panjang': 'Panjang', 'panjang km': 'panjang km', });
lyr_lOKASI_STUDIO_9.set('fieldAliases', {'id': 'id', 'NAMA': 'NAMA', 'LOKASI': 'LOKASI', });
lyr_KecLowokwaru_1.set('fieldImages', {'id': 'TextEdit', 'Luas KM': '', 'Luas M': '', 'Nama': '', });
lyr_Lahan_Hijau_2.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas': 'TextEdit', 'luas hktar': 'TextEdit', });
lyr_Fasilitas_umum_3.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas': 'TextEdit', });
lyr_Jalan_Provinsi_4.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Panjang': 'TextEdit', });
lyr_Jalan_Raya_5.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Panjang': 'TextEdit', });
lyr_Jalan_Desa_6.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Panjang': 'TextEdit', });
lyr_Jalan_Gang_7.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Panjang': 'TextEdit', 'panjang KM': 'TextEdit', });
lyr_Jalan_Perumahan_8.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Panjang': 'TextEdit', 'panjang km': 'TextEdit', });
lyr_lOKASI_STUDIO_9.set('fieldImages', {'id': 'TextEdit', 'NAMA': 'TextEdit', 'LOKASI': 'TextEdit', });
lyr_KecLowokwaru_1.set('fieldLabels', {'id': 'no label', 'Luas KM': 'no label', 'Luas M': 'no label', 'Nama': 'no label', });
lyr_Lahan_Hijau_2.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Luas': 'no label', 'luas hktar': 'no label', });
lyr_Fasilitas_umum_3.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Luas': 'no label', });
lyr_Jalan_Provinsi_4.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Panjang': 'no label', });
lyr_Jalan_Raya_5.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Panjang': 'no label', });
lyr_Jalan_Desa_6.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Panjang': 'no label', });
lyr_Jalan_Gang_7.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Panjang': 'no label', 'panjang KM': 'no label', });
lyr_Jalan_Perumahan_8.set('fieldLabels', {'id': 'no label', 'Nama': 'header label - always visible', 'Panjang': 'no label', 'panjang km': 'no label', });
lyr_lOKASI_STUDIO_9.set('fieldLabels', {'id': 'no label', 'NAMA': 'no label', 'LOKASI': 'no label', });
lyr_lOKASI_STUDIO_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});