import "./App.css";
import Container from "./components/SearchAndResultsContainer/Container";

function App() {
  return (
    <div className="flex flex-col items-center w-[90%] h-[80%] mx-auto">
      <Container className="flex flex-col sm:gap-[0.8rem] gap-[5rem] w-full h-full items-center mt-20" />
    </div>
  );
}

export default App;
