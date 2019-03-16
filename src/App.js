import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <header>
            <nav>
              <ul>
                {/* <li>
                  <a href="http:/start">Home</a>
                </li>
                <li>
                  <a href="http:/news">News</a>
                </li>
                <li>
                  <a href="http:/contact">Contact</a>
                </li> */}
                <li>
                  <Link to="http:/start">Home</Link>
                </li>
                <li>
                  <Link to="http:/news">News</Link>
                </li>
                <li>
                  <Link to="http:/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </header>
          <section>Hello World!</section>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
