import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import "./App.css";

const Home = () => <h1>Home</h1>;
const News = () => <h1>News</h1>;
const Contact = () => <h1>Contact</h1>;
const Error = () => <h1>Error 404</h1>;

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <header>
            <nav>
              <ul>
                {/* <li>
                  <a href="/start">Home</a>
                </li>
                <li>
                  <a href="/news">News</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li> */}
                <li>
                  <NavLink
                    to="/"
                    exact
                    activeClassName="home__selected"
                    activeStyle={{ letterSpacing: "5px", color: "yellow" }}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/news" activeClassName="news__selected">
                    News
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" activeClassName="contact__selected">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <section>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/news" component={News} />
              <Route path="/contact" component={Contact} />
              <Route component={Error} />
            </Switch>
          </section>
        </>
      </Router>
    );
  }
}

export default App;
