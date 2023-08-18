import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Footer from "./components/organisms/Footer/Footer";
import Nav from "./components/organisms/Nav/Nav";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
