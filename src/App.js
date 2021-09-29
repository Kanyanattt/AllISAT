import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Achievement from "./pages/Achievement"
class App extends Component {
  renderRouter() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/Achievement" component={Achievement } />
      </Switch>
    );
  }
  render() {
    return <BrowserRouter>{this.renderRouter()}</BrowserRouter>;
  }
}
export default App;
