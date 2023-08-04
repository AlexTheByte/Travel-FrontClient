// import {
//   Routes,
//   Route,
//   useNavigationType,
//   useLocation,
// } from "react-router-dom";
import Trip from "./components/Trip/Trip";

function App() {
  // const action = useNavigationType();
  // const location = useLocation();
  // const pathname = location.pathname;

  // useEffect(() => {
  //   if (action !== "POP") {
  //     window.scrollTo(0, 0);
  //   }
  // }, [action, pathname]);

  // useEffect(() => {
  //   let title = "";
  //   let metaDescription = "";

  //   switch (pathname) {
  //     case "/":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //   }

  //   if (title) {
  //     document.title = title;
  //   }

  //   if (metaDescription) {
  //     const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
  //       'head > meta[name="description"]',
  //     );
  //     if (metaDescriptionTag) {
  //       metaDescriptionTag.content = metaDescription;
  //     }
  //   }
  // }, [pathname]);

  return (
    <Trip></Trip>
    // <Routes>
    //   <Route path="/informations" element={<Informations />} />
    //   <Route path="/description" element={<Description />} />
    //   <Route path="/pictures" element={<Pictures />} />
    //   <Route path="/userTriperDescription" element={<TriperDescription />} />
    //   <Route path="/price" element={<Price />} />
    //   <Route path="/schedule" element={<Schedule />} />
    //   <Route path="/trip" element={<Trip />} />
    // </Routes>
  );
}
export default App;
