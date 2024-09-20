var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_EsriSatellite_1 = new ol.layer.Tile({
            'title': 'Esri Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_ROADS_2 = new ol.format.GeoJSON();
var features_ROADS_2 = format_ROADS_2.readFeatures(json_ROADS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROADS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROADS_2.addFeatures(features_ROADS_2);
var lyr_ROADS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROADS_2, 
                style: style_ROADS_2,
                popuplayertitle: "ROADS",
                interactive: true,
                title: '<img src="styles/legend/ROADS_2.png" /> ROADS'
            });
var format_PolygonLayer_3 = new ol.format.GeoJSON();
var features_PolygonLayer_3 = format_PolygonLayer_3.readFeatures(json_PolygonLayer_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PolygonLayer_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PolygonLayer_3.addFeatures(features_PolygonLayer_3);
var lyr_PolygonLayer_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PolygonLayer_3, 
                style: style_PolygonLayer_3,
                popuplayertitle: "PolygonLayer",
                interactive: true,
                title: '<img src="styles/legend/PolygonLayer_3.png" /> PolygonLayer'
            });
var format_PlanData_4 = new ol.format.GeoJSON();
var features_PlanData_4 = format_PlanData_4.readFeatures(json_PlanData_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlanData_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanData_4.addFeatures(features_PlanData_4);
var lyr_PlanData_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanData_4, 
                style: style_PlanData_4,
                popuplayertitle: "Plan Data",
                interactive: true,
                title: '<img src="styles/legend/PlanData_4.png" /> Plan Data'
            });
var format_VertexLayer_5 = new ol.format.GeoJSON();
var features_VertexLayer_5 = format_VertexLayer_5.readFeatures(json_VertexLayer_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VertexLayer_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VertexLayer_5.addFeatures(features_VertexLayer_5);
var lyr_VertexLayer_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VertexLayer_5, 
                style: style_VertexLayer_5,
                popuplayertitle: "VertexLayer",
                interactive: true,
                title: '<img src="styles/legend/VertexLayer_5.png" /> VertexLayer'
            });
var group_Datasource = new ol.layer.Group({
                                layers: [lyr_ROADS_2,lyr_PolygonLayer_3,lyr_PlanData_4,lyr_VertexLayer_5,],
                                fold: "open",
                                title: "Datasource"});

lyr_OpenStreetMap_0.setVisible(true);lyr_EsriSatellite_1.setVisible(true);lyr_ROADS_2.setVisible(true);lyr_PolygonLayer_3.setVisible(true);lyr_PlanData_4.setVisible(true);lyr_VertexLayer_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_EsriSatellite_1,group_Datasource];
lyr_ROADS_2.set('fieldAliases', {'id': 'id', });
lyr_PolygonLayer_3.set('fieldAliases', {'JobNumber': 'JobNumber', 'ParcelNumber': 'ParcelNumber', 'CartographicNumber': 'CartographicNumber', 'PlanNumber': 'PlanNumber', 'Area_Acres': 'Area_Acres', 'Area_Ha': 'Area_Ha', 'District': 'District', 'Year': 'Year', 'Sec_Name': 'Sec_Name', 'Sec_Number': 'Sec_Number', 'BlockNo': 'BlockNo', 'GLPIN': 'GLPIN', 'WKT': 'WKT', 'rnum': 'rnum', 'Note': 'Note', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_PlanData_4.set('fieldAliases', {'FROM': 'FROM', 'X': 'X', 'Y': 'Y', 'TO': 'TO', 'BEARING': 'BEARING', 'DISTANCE': 'DISTANCE', });
lyr_VertexLayer_5.set('fieldAliases', {'ID': 'ID', 'X': 'X', 'Y': 'Y', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_ROADS_2.set('fieldImages', {'id': 'TextEdit', });
lyr_PolygonLayer_3.set('fieldImages', {'JobNumber': 'TextEdit', 'ParcelNumber': 'TextEdit', 'CartographicNumber': 'TextEdit', 'PlanNumber': 'TextEdit', 'Area_Acres': 'TextEdit', 'Area_Ha': 'TextEdit', 'District': 'TextEdit', 'Year': 'TextEdit', 'Sec_Name': 'TextEdit', 'Sec_Number': 'TextEdit', 'BlockNo': 'TextEdit', 'GLPIN': 'TextEdit', 'WKT': 'TextEdit', 'rnum': 'Range', 'Note': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_PlanData_4.set('fieldImages', {'FROM': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'TO': 'TextEdit', 'BEARING': 'TextEdit', 'DISTANCE': '', });
lyr_VertexLayer_5.set('fieldImages', {'ID': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_ROADS_2.set('fieldLabels', {'id': 'no label', });
lyr_PolygonLayer_3.set('fieldLabels', {'JobNumber': 'no label', 'ParcelNumber': 'no label', 'CartographicNumber': 'no label', 'PlanNumber': 'hidden field', 'Area_Acres': 'inline label - visible with data', 'Area_Ha': 'inline label - visible with data', 'District': 'no label', 'Year': 'hidden field', 'Sec_Name': 'hidden field', 'Sec_Number': 'hidden field', 'BlockNo': 'hidden field', 'GLPIN': 'hidden field', 'WKT': 'hidden field', 'rnum': 'hidden field', 'Note': 'hidden field', });
lyr_PlanData_4.set('fieldLabels', {'FROM': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'TO': 'hidden field', 'BEARING': 'inline label - always visible', 'DISTANCE': 'inline label - always visible', });
lyr_VertexLayer_5.set('fieldLabels', {'ID': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', });
lyr_VertexLayer_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});