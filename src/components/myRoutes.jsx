import Home from "../pages/home";
import Radio from "../pages/radio";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function MyRoutes() {
    return(
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/home/radio" exact element={<Radio />} />
          <Route path="*" element={<h1 style={{color: "red", textAlign: "center"}}>Pagina não encontrada</h1>} />
        </Routes>
    );
}

export default MyRoutes;