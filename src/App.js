import './App.css';
import {Navbar, Intro, Cta} from './components';
import {Header, Undraw, Pricing, Footer} from './containers';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='mask'>
        <Navbar />
        <Header />
      </div>
      <Undraw />
      <Intro />
      <Intro />
      <Cta />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
