import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./components/App";
import Login from "./components/Auth/login.component";
import Register from "./components/Auth/register.component";
import "semantic-ui-css/semantic.min.css";
import firebase from "./components/firebase/firebase";
import rootReducers from "./redux/reducers/index.reducers";
import { setUser , clearUser } from "./redux/actions/index.actions";
import Spinner from './components/spinner/spinner.component';

const store = createStore(rootReducers, composeWithDevTools());

class Root extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.setUser(user);
        this.props.history.push("/");
      } else {
        this.props.history.push("/login");
        this.props.clearUser();
      }
    });
  }

  render() {
    return this.props.isLoading ? <Spinner /> : (
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    );
  }
}

const mapStateToProps = (state) => ({
    isLoading: state.user.isLoading
})

const RootWithRouter = withRouter(connect(mapStateToProps, { setUser , clearUser })(Root));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <RootWithRouter />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
