import TripContext from "contexts/trip.context";
import React, { useContext } from "react";

// import GoogleMapReact from "google-map-react";

// const AnyReactComponent = ({
//   text,
//   lat,
//   lng,
// }: {
//   lat: number;
//   lng: number;
//   text: string;
// }) => <div>{text}</div>;

// const defaultProps = {
//   center: {
//     lat: 10.99835602,
//     lng: 77.01502627,
//   },
//   zoom: 11,
// };
// AIzaSyDWzprHNSlm__b5aISuUlOVmIE5M5VqSVc

/* <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDWzprHNSlm__b5aISuUlOVmIE5M5VqSVc" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={10.99835602}
          lng={77.01502627}
          text="My Marker"
        />
      </GoogleMapReact> */
function Map({ className }: { className: string }) {
  const tripContext = useContext(TripContext);

  return (
    <div className={"h-full w-full " + className}>
      <iframe
        src={tripContext.mapSrc}
        className="h-full w-full"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Map"
      ></iframe>
    </div>
  );
}

export default Map;
