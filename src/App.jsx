import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Projects, Network, Publications, StarsCanvas } from './components';
import { styles } from "./styles";
const App = () => {

  return (
    <div>
      <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Projects />
        <Publications />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          {/* <StarsCanvas /> */}
        </div>
        <Network />
        <footer  style={{ padding: "10px" }}>
          <p className="ml-5 mb-12 text-white-100 text-[12px]">&copy;2023 Luong-Ha Nguyen. Some rights reserved.</p>
        </footer>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
