import './App.css';
import Logic from './components/Logic';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className='title my-3'>Passport Photo Resizer</h1>
      <Logic />
    </div>
  );
}

export default App;
