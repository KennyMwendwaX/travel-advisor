"use client";

import GoogleMapReact from "google-map-react";

export default function Maps() {
  const coordinates = { lat: 0, lng: 0 };
  return (
    <>
      <div className="container mx-auto h-screen">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          //   options={}
          //   onChange={}
          //   onChildClick={}
        ></GoogleMapReact>
      </div>
    </>
  );
}
