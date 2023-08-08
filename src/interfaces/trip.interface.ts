import IActivity from "./activity.interface";
import IPriceIncludes from "./price-includes.interface";
import ISchedule from "./schedule.interface";
import IWhatYouNeed from "./what-you-need.interface";

interface ITrip {
  id: number;
  title: string;
  fromAdress:  string;
  toAdress:  string;
  date:  string;
  duration:  number;
  price:  number;
  priceCurrency:  number;
  slotsTotal:  number;
  slotsAvailable:  number;
  mainPictureSrc:  string;
  description:  string;
  schedules:  Array<ISchedule>;
  activities:  Array<IActivity>;
  mapSrc:  string;
  priceIncludes:  Array<IPriceIncludes>;
  whatYouNeed:  Array<IWhatYouNeed>;
  dateDetails?: string;
  triper:  {
    id:  number,
    mail:  string,
    description:  string,
    pseudo: string,
    avatarSrc: string;
  };
}
export default ITrip;
