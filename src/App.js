import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Page/Home/Home";
function App() {
  return (
    <div className="App">
         <Router>
      
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
     
    </Router>
    </div>
  );
}

export default App;
