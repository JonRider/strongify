import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from "./react-auth0-spa";
import "./App.css";
import { AuthNavBar } from "./components/NavBar";
import Landing from "./components/Landing";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div> Loading... </div>;
  } else {
    return (
      <Router>
        <div className="App">
          <AuthNavBar />
          <Switch>
            <Route exact path={"/"}>
              <Landing />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

// <PrivateRoute
//   key={"new-recipe-route"}
//   path={`/recipe/new`}
//   component={() => <RecipeContainer />}
// />
export default App;
