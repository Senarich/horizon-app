import "./App.css";
import Cards from "./components/Cards";
import Carousal from "./components/Carousal";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousal />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
