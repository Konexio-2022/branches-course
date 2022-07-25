import React, { Component } from "react"
import Contact from "./components/Contact"
import Produit from "./components/Produit"

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello homepage</h1>
        <Contact />
        <Produit />
      </div>
    )
  }
}

export default App
