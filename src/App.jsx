import React from "react"
import Footer from "./components/footer"
import Main from "./components/main"

function App() {

  return (
    <div className="grid-container">
      <header className="header">
        <picture className="logoContainer">
          <img src="./public/logo.svg" alt="Logo de CalenGo " width="150px" />
        </picture>
        <h1 className="titulo">CalenGo</h1>
        <button><img src="./public/iconos/index/menu.png" alt="Menú" width="40" /></button>
      </header>
      <section className="entrada">
        <button className="ingresa">Ingresa</button>
        <button className="registrate">Regístrate</button>
      </section>
      <Main></Main>
      <Footer></Footer>
    </div>
  )
}

export default App
