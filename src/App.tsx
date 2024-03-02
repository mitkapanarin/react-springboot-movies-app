import { Error, Home, MovieDetails } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
