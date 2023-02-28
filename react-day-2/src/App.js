import './App.css';
import Heading from './components/Heading';
import Paragraph from './components/Paragraph';

function App() {
  return (
    <div className="App">
      <Heading name="Nsebo" age="33" color="salmon" fontSize="40" />
      <Paragraph content="I love working out" />
      <Heading name="Cey" age="34" color="cyan" fontSize="30" />
      <Paragraph content="I love body builders" />
    </div>
  );
}

export default App;
