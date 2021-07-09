import "ol/ol.css";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import Map from "ol/Map";
import View from "ol/View";
import './map.css'
import { get as getProjection } from 'ol/proj';
import {  baseLayerName, MAP_CENTER, MAP_DEFAULT_ZOOM } from "../shared/consts/map";
import { PROJECTION_7801, registerBGS2005Projection } from "./utils/registerProjection";
import { useRef, useState } from "react";
import { useMount } from "react-use";
import VectorLayer from "ol/layer/Vector";
import GeoJSON from "geojson";
import VectorSource from "ol/source/Vector";
import {Icon, Style} from 'ol/style';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import IconAnchorUnits from "ol/style/IconAnchorUnits";


registerBGS2005Projection();


const BGS2005 = getProjection(PROJECTION_7801);

const view = new View({
  projection: BGS2005,
  center: MAP_CENTER,
  zoom: MAP_DEFAULT_ZOOM,
  maxZoom: 23,
  minZoom: 6,
});


const pinMarkersLayerRef = useRef(
   new VectorLayer({
    source: new VectorSource({ format: new  GeoJSON(), wrapX: false }),
  })
);



export const PinStyle = new Style({
  image: new Icon({
  anchor: [0.5, 1],
  anchorXUnits: 'fraction' as IconAnchorUnits,
  anchorYUnits: 'pixels' as IconAnchorUnits,
  src: pinMarker,
    }),
  });
  

  const pinLayerSource = pinMarkers.current.getSource();
  const iconFeature = new Feature({
    geometry: new Point([]),
  });
  
  iconFeature.setStyle(PinStyle);
  pinLayerSource.clear();
  pinLayerSource.addFeature(iconFeature);


var vectorSource = new VectorSource({
  features: [iconFeature],
});

var vectorLayer = new VectorLayer({
  source: vectorSource,
});

const MapAddress: React.FC = () => {
  const [map, setMap] = useState<Map | undefined>();
  
  const baseTileMapsRef = useRef<any>({
    [baseLayerName]: {
      title: 'OSM',
      layerName: baseLayerName,
      layer: new TileLayer({
        source: new OSM(),
        zIndex: 0,
      }),
    },
  });

  
  useMount(() => setMap(  new Map({
    target: "map",
    layers: [
      baseTileMapsRef.current[baseLayerName].layer
    ],
    view: view,
  })))


  return <div  id="map"/>
};


export default MapAddress;

