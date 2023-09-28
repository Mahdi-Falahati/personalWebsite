import MainContent from "./Components/MainContent";
import MainHeader from "./Components/MainHeader";
import AboutMe from "./Components/AboutMe";

function App() {
  return (
    <>
      <header className="container mx-[auto]">
        <MainHeader />
      </header>
      <main>
        <MainContent />
        <AboutMe />
      </main>
    </>
  );
}

export default App;
