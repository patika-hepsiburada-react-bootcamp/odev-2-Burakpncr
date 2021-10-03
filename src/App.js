import './App.css';
import Header from './Components/Header/Header'
import GameBoard from './Components/GameBoard/GameBoard'
import Footer from './Components/Footer/Footer'

function App() {
  
  return (
    <div className="App-Container">
      <Header />
      <GameBoard/>
      <Footer />
    </div>
  );
}

export default App;
