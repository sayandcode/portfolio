import './App.css';
import Contacts from './components/Contacts/Contacts';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id="title">Sayand Sathish</h1>
        <h2 id="subtitle">Front-end Developer</h2>
        <Contacts />
        <Projects />
      </header>
    </div>
  );
}

export default App;
