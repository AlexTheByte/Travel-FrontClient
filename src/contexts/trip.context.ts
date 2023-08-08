import ITrip from "interfaces/trip.interface";
import React from "react";

export default React.createContext<ITrip>({
  id: 0,
  title: "",
  fromAdress: "",
  toAdress: "",
  date: "",
  duration: 0,
  price: 0,
  priceCurrency: 0,
  slotsTotal: 0,
  slotsAvailable: 0,
  mainPictureSrc: "",
  description: "",
  schedules: [],
  activities: [],
  mapSrc: "",
  priceIncludes: [],
  whatYouNeed: [],
  triper: {
    id: 0,
    mail: "",
    description: "",
    pseudo: "",
    avatarSrc: "",
  }
});