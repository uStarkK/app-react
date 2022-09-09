
import NavBar from './components/Containers/NavBar';
import "./App.css"
import ItemListContainer from './components/Containers/ItemListContainer';

function App() {
  return (
    
    <div className="App">
      <NavBar/>
      <ItemListContainer greetings="Hola soy un prop, y te estoy saludando"/>
    </div>
  );
}

export default App;
