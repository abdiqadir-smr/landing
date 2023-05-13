import './App.css';
import {Navbar, Intro, Cta} from './components';
import {Header, Undraw, Pricing, Footer} from './containers';

function App() {
  return (
    <div className='App'>
      <div className='designer__bg'>
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
