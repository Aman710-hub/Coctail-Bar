import { createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoctailDitails from "./Components/CoctailDitails";
import Layout from "./Components/Layout";
import About from "./Pages/About";
import Home from "./Pages/Home";

export const AppContext = createContext();
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<CoctailDitails />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
