
/* import Header from './components/header/Header.jsx'
 */
import About from './components/about/About'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Portafolio from './components/portafolio/Portafolio.jsx'
import { Header } from './components/header/Header.jsx'
import { Home } from './components/home/Home'
import { Skill } from './components/skill/Skill'





function App() {
  return (
    <>
 
    <Header/>
    <Home/>
    <About/>
    <Skill/>
    <Services/>
    <Portafolio/>
    <Contact/>
    <Footer/>
    
    </ >
  );
}

export default App;
