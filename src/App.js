import "./App.css";
import Contacts from "./components/Contacts";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
  return (
    <main>
      {/* <NavBar /> */}
      <Home />
      {/* <Skills /> */}
      <Projects />
      <Contacts />
    </main>
  );
}

export default App;
