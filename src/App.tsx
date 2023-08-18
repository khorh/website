import { BrowserRouter } from "react-router-dom";
import Footer from "./components/organisms/Footer/Footer";
import Nav from "./components/organisms/Nav/Nav";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
