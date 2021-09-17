// JAI MATA DI
// https://overthewire.org/wargames/bandit/bandit1.html
// https://pastebin.com/iaY8jkss
import './App.css';
import Downloads from './components/Downloads';
import Footer from './components/Footer';
import FooterSecond from './components/FooterSecond';
import Features from './components/Features';
import Header from './components/Header';
import LastFooter from './components/LastFooter';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Features></Features>
      <Downloads></Downloads>
      <Footer></Footer>
      <FooterSecond></FooterSecond>
      <LastFooter></LastFooter>
    </div>
  );
}

export default App;
