import Main from "./Container/Main"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" render={(routerProps) => (<Main/>)}></Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
