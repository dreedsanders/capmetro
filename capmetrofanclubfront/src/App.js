import Main from "./Container/Main"
import Maps from "./Container/Maps"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" render={(routerProps) => (<Main {...routerProps}/>)}>
            </Route>
            <Route exact path="/maps" render={(routerProps) => (<Maps {...routerProps}/>)}>
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}
export default App;
