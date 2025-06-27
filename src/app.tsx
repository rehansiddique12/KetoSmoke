import Mainpage from "./pages/main-page";
import { Route, Routes } from "react-router-dom";



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
    </Routes>
  );
};

export default App;
