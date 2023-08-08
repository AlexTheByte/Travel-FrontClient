import TripDto from "dtos/trip.dto";
import HttpService from "./http.service";
import ITrip from "interfaces/trip.interface";
import ISchedule from "interfaces/schedule.interface";

class STrips extends HttpService{
  example: any = {  
    id: 10,
    title: "Gourdon exploration and hiking",
    fromAdress: "Nice",
    toAdress: "Gourdon",
    date: "2023-08-19",
    duration: 1,
    price: 10,
    priceCurrency: "€",
    slotsTotal:  2,
    slotsAvailable:  2,
    mainPictureSrc:  process.env.PUBLIC_URL + "/images/bg/gourdon.jpg",
    description:  "We're planning a thrilling car trip combined with exhilarating hiking experiences. We would like to find 02 more travel companions to share the adventure with us. </br>About Gordon : Situated just 40 kilometers away from Nice, Gourdon is renowned for its remarkable hiking trails, making it a nature lover's paradise. It's also considered one of the finest paragliding destinations in the Provence-Alpes-Côte d'Azur region.Moreover, it's a place with history and culture richness. In this trip, we are able to visit: Gourdon Castle (Château de Gourdon) and Village of Gourdon. </br>About hiking : Surrounding Gourdon are numerous hiking trails that wind through the beautiful Provençal countryside. We will choose the hike with depending on the weather and our interest. Difficulty : Easy to medium. Duration : Less than 03 hours",
    schedules:  [{
      hour: "08:00",
      description: "Pick up at ....",
    }, {
      hour: "09:00",
      description: "Nice -> Gourdon",
    }, {
      hour: "10:00",
      description: "Hiking",
    }, {
      hour: "13:00",
      description: "Lunch time and Visit Gordon Ville",
    }, {
      hour: "16:00",
      description: "Gourdon -> Nice",
    }, {
      hour: "17:00",
      description: "Back",
    }],
    activities: [{
      id: 0,
      name: 'Hiking'
    }, {
      id: 1,
      name: 'Eating'
    }, {
      id: 2,
      name: 'City visit'
    }, {
      id: 3,
      name: 'Car'
    }],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46131.62196694123!2d6.92093220069259!3d43.72662402020178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cc2e249e2261d9%3A0x20f7efb95e9c46ce!2s06620%20Gourdon!5e0!3m2!1sfr!2sfr!4v1690818353382!5m2!1sfr!2sfr",
    priceIncludes:  [
      {id: 0, description: "2 ways travel Nice-Gordon-Nice by car"}, 
      {id: 1, description: "1 water bottle / person"}
    ],
    whatYouNeed: [{
        id: 1,
        description: "personal hiking stuffs",
      },
      {
        id: 2,
        description: "own foods or purchase some in Gourdon",
      },
      {
        id: 3,
        description: "water bottle for environmental reasons",
      },
    ],
    triper:  {
      id:  0,
      pseudo: "Alex",
      mail:  "travel-companion@gmail.com",
      avatarSrc: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      description:  "My friend and I are travel lovers living in Côte D'azur in France. With a shared passion for adventure, sports, photography, and discovering different cultures, we embark on weekly travel and hiking expeditions. Our desire is to connect with like-minded individuals who share their passions for exploration, outdoor activities, and diverse cultures. We will bond over adrenaline-pumping sports, discovering hidden gems, and exchanging stories and languages. Together, we will create unforgetable memories, forge lasting friendships.<\br>We are able to speak: English, French, Vietnamese",
    }
  };

  getTrip(): TripDto {
    return new TripDto(this.example)
  }
}

export default STrips;