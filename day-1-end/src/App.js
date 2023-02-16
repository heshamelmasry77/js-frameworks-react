import './App.css';
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";
import List from "./components/List";

// >> ./ << Means look inside current folder

function App() {
  return (
    <div className="App container">
      <Heading/>
      <Paragraph/>
      <List/>
    </div>
  );
}

export default App;
