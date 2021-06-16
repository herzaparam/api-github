import './App.css';
import Heading from './components/heading/heading'
import Results from './components/results/results'

function App() {
  return (
    <div className="App">
      <header>
        <Heading />
      </header>
      <main>
        <Results />
      </main>
    </div>
  );
}

export default App;
