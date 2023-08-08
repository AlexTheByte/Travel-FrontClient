import ITrip from 'interfaces/trip.interface';
// import SimpleReactValidator from 'simple-react-validator';
import Dto from './dto';
import dayjs from 'dayjs';

class TripDto extends Dto {
  // validator: SimpleReactValidator;
  toObject(): ITrip & {} {
    
    const data = super.toObject();

    const tripMoreData = {
      dateDetails: dayjs(data.date).format('dddd DD MMMM'),
    };

    return {...data, ...tripMoreData};
  }
}

export default TripDto;