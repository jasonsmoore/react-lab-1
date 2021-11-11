import './App.css';
import Votes from './Votes';
import Header from './Header';
import AdDesigner from './AdDesigner';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='mainContainer'>
        <AdDesigner />
        <Votes />
      </div>
    </div>
  );
}

export default App;