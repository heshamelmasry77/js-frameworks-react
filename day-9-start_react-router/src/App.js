import Routes from "./routes/Router"
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <div>
      <Header/>
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
