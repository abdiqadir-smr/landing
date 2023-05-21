import './App.css';
import {Navbar, Intro, Cta} from './components';
import {Header, Undraw, Pricing, Footer} from './containers';
import {undrawHappy, undrawSocial, undrawMention} from './containers/imports'
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='mask'>
        <Navbar />
        <Header />
      </div>
      <Undraw />
      <Intro imgUrl={undrawHappy} title={"Light, Fast & Powerful"} text1={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus "} text2={"mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."} />
      <Intro imgUrl={undrawSocial} title={"Light, Fast & Powerful"} text1={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus "} text2={"mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."} />
      <Cta imgUrl={undrawMention} title={"Light, Fast & Powerful"} text1={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus "} text2={"mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."} btn={"Purchase Now"}/>
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
