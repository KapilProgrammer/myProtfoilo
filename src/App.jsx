import './App.css'
import About from './Compont/About';
import Education from './Compont/Education';
import Experience from './Compont/Experience';
import Header from './Compont/Header';
import Hero from './Compont/Hero';
import Skills from './Compont/Skills';
import Contect from './Compont/Contect';
import Footer from './Compont/Footer';


function App() {
  return (
    <>
      <div className='bg-[rgb(15,23,42)] flex flex-col px-0 sm:px-8 md:px-12 lg:px-16'>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Contect />
      </div>
      <Footer />
    </>
  );
}

export default App;
