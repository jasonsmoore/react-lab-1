import './App.css';
import Votes from './Votes';
import Header from './Header';
import AdDesigner from './AdDesigner'
import Ad from './Ad';

function App() {
  return (
    <div className="App">
      <Header userName='Welcome, Chirpus' />
      <div className='adContainer'>
        <Ad flavor='Chocolate' darkTheme={true} fontSize={25} />
        <Ad flavor='Vanilla' darkTheme={false} fontSize={25} />
        <Ad flavor='Strawberry' darkTheme={true} fontSize={25} />
      </div>
      <div className='mainContainer'>
        <AdDesigner />
        <Votes />
      </div>
    </div>
  );
}

export default App;