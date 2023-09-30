import MainContent from "./Components/MainContent";
import MainHeader from "./Components/MainHeader";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";

function App() {
  return (
    <>
      <header className="container mx-[auto]">
        <MainHeader />
      </header>
      <main>
        <MainContent />
        <AboutMe />
        <Skills />
      </main>
    </>
  );
}

export default App;
