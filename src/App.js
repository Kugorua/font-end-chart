import React, { useState } from "react";
import "./App.css";
import Home from "./page/home/Home";
import Login from "./page/login/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useHistory,
} from "react-router-dom";
export default function App() {
  const [confirmLog, setConfirmLog] = useState(false);
  const clickLogin = (data) => {
    console.log(data);
    setConfirmLog(data);
  };
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/control">
            <Login clickLogin={clickLogin} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
