import './App.css';
import Form from './Components/Form'
import Logado from './Components/Logado'
import{Switch,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Form/>
        </Route>
        <Route exact path="/sucess/:name">
          <Logado/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
