import { BrowserRouter, Routes, Route} from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Home from "./pages/Homepage";

function App() {


  return (
    <BrowserRouter>
     <Routes>
      <Route path="product" element={<Product/>}/>
      <Route path="product" element={<Pricing />} />
      <Route path="/" element={<Home />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App

