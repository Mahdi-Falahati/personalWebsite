import MainContent from "./Components/MainContent";
import MainHeader from "./Components/MainHeader";

function App() {
  return (
    <div className="container mx-[auto]">
      <MainHeader />
      <main>
        <MainContent />
      </main>
    </div>
  );
}

export default App;
