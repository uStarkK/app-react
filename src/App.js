import "./App.css"
import Provider from "./App/Provider";
import Router from "./App/Router"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() { 
  return (
    <Provider>
      <Router/>
    </Provider>
  )   
}

export default App;
