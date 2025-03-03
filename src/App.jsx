import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
function App() {
 

  return (
    <>
      <NavBar />
      <SocialLinks/>
      <Home />
      <About />
      <Skills />
      <Portfolio />
      
      <Contact />
    </>
  )
}

export default App
