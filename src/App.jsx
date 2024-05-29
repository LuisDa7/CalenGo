import React from "react"

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
      <main className="main">
        <section className="invitacion">
          <h1>Nunca ha sido tan fácil programar citas y gestionar tu negocio</h1>
          <p>Tu negocio necesita un software de agenda moderno y fácil de usar. Además, contamos con muchas otras funciones para ti</p>
        </section>
        <section className="slider">
          <article class="sliderArticulo">
            <ul>
              <li><img src="./public/iconos/index/slider/1.png" alt="" /></li>
              <li><img src="./public/iconos/index/slider/2.png" alt="" /></li>
              <li><img src="./public/iconos/index/slider/3.png" alt="" /></li>
              <li><img src="./public/iconos/index/slider/4.png" alt="" /></li>
            </ul>
          </article>
        </section>
        <section className="queTiene">
          <h1>¿Qué puede hacer CalenGo?</h1>
          <p>Facilita los procesos engorrosos y hace tu negocio más productivo</p>
          <article>
            <picture>
              <img src="./public/iconos/index/agenda.png" alt="Programación de citas" width="120px" />
            </picture>
            <h2>Programa tus citas desde un calendario</h2>
            <p>Ten tu propio calendario para agendar tus citas y eventos; es realmente útil para organizar tu tiempo</p>
          </article>
          <article>
            <picture>
              <img src="./public/iconos/index/tablero.png" alt="Dashboard para tu uso" />
            </picture>
            <h2>Dashboard para tus actividades diarias</h2>
            <p>Gestiona en tiempo real las citas agendadas por tus clientes; mira las citas canceladas, confirmadas y realizadas en un mismo lugar</p>
          </article>
          <article>
            <picture>
              <img src="./public/iconos/index/cliente.png" alt="Gestión de clientes" />
            </picture>
            <h2>Ten control de tus clientes</h2>
            <p>Conoce mejor a tus clientes y mira sus reservaciones, datos, historiales y concurrencia</p>
          </article>
          <article>
            <picture>
              <img src="./public/iconos/index/empleados.png" alt="Gestión de personal" />
            </picture>
            <h2>Ten control de tu personal</h2>
            <p>Tus empleados ahora pueden acceder y gestionar sus citas también; vas a poder ver sus citas y su eficiencia</p>
          </article>
          <article>
            <picture>
              <img src="./public/iconos/index/dinero.png" alt="Aumento de ingresos" />
            </picture>
            <h2>Más reservaciones y asistencias</h2>
            <p>Envío de recordatorios y notificaciones agradables para que tus clientes no olviden su reservación</p>
          </article>
          <article>
            <picture>
              <img src="./public/iconos/index/24-horas.png" alt="Reservas habilitadas 24/7" />
            </picture>
            <h2>Reservaciones a cualquier hora</h2>
            <p>Tus clientes podrán agendar, cancelar y posponer sus reservaciones en cualquier momento y desde cualquier lugar</p>
          </article>
        </section>
        <section className="invitacionRegistrate">
          <button className="registrate2">Regístrate</button>
        </section>
        <section className="paraQuien">
          <h1>¿Para quienes es este software?</h1>
          <article>
            <img src="./public/iconos/index/paraQuienes/1.png" alt="Imagen de salón de belleza" width="400px" />
            <h2>Salones de belleza</h2>
            <p>Nuestro software ayudará a los salones de belleza con su gestión de citas de forma fácil y flexible</p>
          </article>
          <article>
            <img src="./public/iconos/index/paraQuienes/2.png" alt="Imagen de barberia" width="400px" />
            <h2>Barberías</h2>
            <p>CalenGo está preparado para ser utilizado por barberías, listo para optimizar el tiempo de estos negocios</p>
          </article>
          <article>
            <img src="./public/iconos/index/paraQuienes/3.png" alt="Imagen de spa" width="400px" />
            <h2>Spa's y centros de masaje</h2>
            <p>También, CalenGo proporciona sus inteligentes funciones a los centros de masajes y spa</p>
          </article>
          <article>
            <img src="./public/iconos/index/paraQuienes/4.png" alt="Imagen de centro médico" width="400px" />
            <h2>Centros médicos</h2>
            <p>Es realmente útil para los centros médicos, dirigido a consultorios que día a día atienden a muchas personas</p>
          </article>
          <article>
            <img src="./public/iconos/index/paraQuienes/5.png" alt="Imagen de entrenador personal" width="400px" />
            <h2>Entrenadores personales</h2>
            <p>CalenGo se complace en ayudar a los entrenadores personales, flexibilizando sus tareas diarias</p>
          </article>
          <article>
            <img src="./public/iconos/index/paraQuienes/6.png" alt="Imagen de groomers caninos" width="400px" />
            <h2>Groomers caninos</h2>
            <p>Nuestro software también está diseñado para groomers caninos y sus negocios, permitiéndoles gestionar sus actividades</p>
          </article>
          <article>
            <img src="./public/iconos/index/paraQuienes/7.png" alt="Imagen de tutor enseñando" width="400px" />
            <h2>Tutores</h2>
            <p>Los tutores también podrán beneficiarse de esta tecnología fácil de utilizar y agradable para todos</p>
          </article>
          <article>
            <img src="./public/iconos/index/paraQuienes/8.png" alt="Imagen de fotógrafo" width="400px" />
            <h2>Fotógrafos</h2>
            <p>CalenGo es útil para fotógrafos, permitiéndoles tener control sobre sus sesiones y actividades</p>
          </article>
        </section>
        <section className="invitacionRegistrate2">
          <button className="registrate2">Regístrate</button>
        </section>
      </main>
      <footer className="footer">
        <section className="contactanos">
          <h2>Contact us</h2>
          <article>
            <ul class="wrapper">
              <li class="icon facebook">
                <span class="tooltip">Facebook</span>
                <svg
                  viewBox="0 0 320 512"
                  height="1.2em"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  ></path>
                </svg>
              </li>
              <li class="icon twitter">
                <span class="tooltip">Twitter</span>
                <svg
                  height="1.8em"
                  fill="currentColor"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                  class="twitter"
                >
                  <path
                    d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
                  ></path>
                </svg>
              </li>
              <li class="icon instagram">
                <span class="tooltip">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.2em"
                  fill="currentColor"
                  class="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                  ></path>
                </svg>
              </li>
            </ul>

          </article>
        </section>
        <section className="info">
          <article>
            <img src="./public/logo.svg" alt="Logo de CalenGo " width="150px" />
            <h1>CalenGo</h1>
          </article>
          <article>
            <p className="footerText">© 2024</p>
            <a className="footerText">Privacy Policy</a>
            <p className="footerText">v1.0</p>
          </article>
        </section>
      </footer>
    </div>
  )
}

export default App
