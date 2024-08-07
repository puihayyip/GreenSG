import axios from "axios";
import { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { IMscp } from "../interfaces";
import MapPopup from "./MapPopup";

interface AppProps {
  selection: { lat: number; lng: number };
  reload: boolean;
  setReload: React.Dispatch<React.SetStateAction<boolean>>;
}

function Map({ selection, reload, setReload }: AppProps) {
  const [marker, setMarker] = useState<IMscp[]>([]);

  useEffect(() => {
    axios
      .get<Array<IMscp>>(`${process.env.REACT_APP_BACKEND_URL}/mscps`)
      .then((res: any) => {
        setMarker(res.data);
      });
  }, [reload]);

  const HandleClickMap = () => {
    const map = useMapEvent("keypress", () => {
      map.flyTo({ lat: selection.lat, lng: selection.lng }, 16);
    });

    return null;
  };

  return (
    <MapContainer
      center={[1.3676879846236816, 103.82805893537059]}
      zoom={12}
      scrollWheelZoom={true}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <HandleClickMap />
      {marker.map((eachPoint, index) => {
        let num: number = 0;
        if (eachPoint.spot1) num++;
        if (eachPoint.spot2) num++;
        if (eachPoint.spot3) num++;
        if (eachPoint.spot4) num++;
        eachPoint.carsAvail = num;
        eachPoint.parkingAvail = 4 - num;
        return (
          <Marker
            position={[eachPoint.latitude, eachPoint.longtitude]}
            key={index}
          >
            <Popup position={[eachPoint.latitude, eachPoint.longtitude]}>
              <MapPopup eachPoint={eachPoint} setReload={setReload} />
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}

export default Map;
