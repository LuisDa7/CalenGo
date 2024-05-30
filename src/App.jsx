import React from "react"
import Footer from "./components/footer"
import Main from "./components/main"
import EntradaPC from "./components/entradaPC"
import BotonesHeader from "./components/botonesHeader"

function App() {

  return (
    <div className="grid-container">
      <header className="header">
        <picture className="logoContainer">
          <img src="./public/logo.svg" alt="Logo de CalenGo " width="150px" />
        </picture>
        <h1 className="titulo">CalenGo</h1>
        <BotonesHeader></BotonesHeader>
        
      </header>
      <EntradaPC></EntradaPC>
      <Main></Main>
      <Footer></Footer>
    </div>
  )
}

export default App
