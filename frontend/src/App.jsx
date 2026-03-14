import react from "react";
import Home from "./pages/Home";
import Hero from "./components/Hero";
import bgHome from "./img/bg-home.png";

function App() {
  return (
    <main
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${bgHome})` }}
    >
      <Home />
    </main>
  );
}

export default App;
