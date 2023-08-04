import React from "react";
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

function Map({ className }: { className: string }) {
  // const defaultProps = {
  //   center: {
  //     lat: 10.99835602,
  //     lng: 77.01502627,
  //   },
  //   zoom: 11,
  // };
  // AIzaSyDWzprHNSlm__b5aISuUlOVmIE5M5VqSVc
  return (
    // Important! Always set the container height explicitly
    <div className={"h-full w-full " + className}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46131.62196694123!2d6.92093220069259!3d43.72662402020178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cc2e249e2261d9%3A0x20f7efb95e9c46ce!2s06620%20Gourdon!5e0!3m2!1sfr!2sfr!4v1690818353382!5m2!1sfr!2sfr"
        className="h-full w-full"
        style={{ border: 0 }}
        // allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Map"
      ></iframe>

      {/* <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDWzprHNSlm__b5aISuUlOVmIE5M5VqSVc" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={10.99835602}
          lng={77.01502627}
          text="My Marker"
        />
      </GoogleMapReact> */}
    </div>
  );
}

export default Map;
