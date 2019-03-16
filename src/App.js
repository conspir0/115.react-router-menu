import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

const Home = () => <h1>Home</h1>;
const News = () => <h1>News</h1>;
const Contact = () => <h1>Contact</h1>;

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
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/news">News</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </header>
          <section>
            <Route path="/" exact component={Home} />
            <Route path="/news" component={News} />
            <Route path="/contact" component={Contact} />
          </section>
        </>
      </Router>
    );
  }
}

export default App;
