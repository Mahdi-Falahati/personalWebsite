import MainContent from "./Components/MainContent";
import MainHeader from "./Components/MainHeader";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import OpenSourceProjects from "./Components/OpenSourceProjects";

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
        <OpenSourceProjects />
      </main>
      <Footer/>
    </>
  );
}

export default App;
