import "ol/ol.css";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import OSM from "ol/source/OSM";
import Map from "ol/Map";
import { fromLonLat } from "ol/proj";
import View from "ol/View";
import { Feature } from "ol";
import Point from "ol/geom/Point";
import VectorSource from "ol/source/Vector";
import Snap from "ol/interaction/Snap";
import './map.css'


const view = new View({
  center: fromLonLat([0, 0]),
  zoom: 4
});

const staticFeature = new Feature({
  geometry: new Point([0, 0])
});
const staticSource = new VectorSource({
  features: [staticFeature]
});
const staticLayer = new VectorLayer({
  source: staticSource
});

const map = new Map({
  target: "map",
  layers: [
    new TileLayer({
      source: new OSM()
    }),
    staticLayer
  ],
  view: view,
});

const pointerMoveSnap = new Snap({
  source: staticSource,
  pixelTolerance: 200
});

map.addInteraction(pointerMoveSnap);

map.on("pointermove", e => {
  console.log(e.coordinate);
});


const MapAddress: React.FC = () => {
  return <div  id="map"></div>
};


export default MapAddress;

