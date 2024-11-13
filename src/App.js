import "./App.css";
import Footer from "./components/footer/footer";
import NavBar from "./components/header/navbar";
import Landing from "./pages/landing";

function App() {
  return (
    <div className="App  bg-white">
      <NavBar />
      <Landing/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
