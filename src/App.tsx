import { Routes, Route } from "react-router-dom";
import MainContainer from "components/MainContainer/MainContainer";
import Trip from "pages/Trip";
import STrips from "services/trips.service";

function App() {
  const tripsService = new STrips();

  const trip = tripsService.getTrip().toJson();

  return (
    <MainContainer>
      <Trip data={trip}></Trip>
    </MainContainer>
  );
}

export default App;
