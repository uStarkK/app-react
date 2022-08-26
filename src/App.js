
import NavBar from './components/NavBar';
import "./App.css"
import ItemListContainer from './components/ItemListContainer';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greetings="Hola soy un prop, y te estoy saludando"/>
    </div>
  );
}

export default App;
