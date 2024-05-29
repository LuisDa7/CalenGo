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
              <li class="icon whatsapp">
                <span class="tooltip">WhatsApp</span>
                <svg
                  height="1.5em"
                  fill="currentColor"
                  viewBox="-23 -21 682 682.66669"
                  xmlns="http://www.w3.org/2000/svg"
                  class="whatsapp"
                >
                  <path d="m544.386719 93.007812c-59.875-59.945312-139.503907-92.9726558-224.335938-93.007812-174.804687 0-317.070312 142.261719-317.140625 317.113281-.023437 55.894531 14.578125 110.457031 42.332032 158.550781l-44.992188 164.335938 168.121094-44.101562c46.324218 25.269531 98.476562 38.585937 151.550781 38.601562h.132813c174.785156 0 317.066406-142.273438 317.132812-317.132812.035156-84.742188-32.921875-164.417969-92.800781-224.359376zm-224.335938 487.933594h-.109375c-47.296875-.019531-93.683594-12.730468-134.160156-36.742187l-9.621094-5.714844-99.765625 26.171875 26.628907-97.269531-6.269532-9.972657c-26.386718-41.96875-40.320312-90.476562-40.296875-140.28125.054688-145.332031 118.304688-263.570312 263.699219-263.570312 70.40625.023438 136.589844 27.476562 186.355469 77.300781s77.15625 116.050781 77.132812 186.484375c-.0625 145.34375-118.304687 263.59375-263.59375 263.59375zm144.585938-197.417968c-7.921875-3.96875-46.882813-23.132813-54.148438-25.78125-7.257812-2.644532-12.546875-3.960938-17.824219 3.96875-5.285156 7.929687-20.46875 25.78125-25.09375 31.066406-4.625 5.289062-9.242187 5.953125-17.167968 1.984375-7.925782-3.964844-33.457032-12.335938-63.726563-39.332031-23.554687-21.011719-39.457031-46.960938-44.082031-54.890626-4.617188-7.9375-.039062-11.8125 3.476562-16.171874 8.578126-10.652344 17.167969-21.820313 19.808594-27.105469 2.644532-5.289063 1.320313-9.917969-.664062-13.882813-1.976563-3.964844-17.824219-42.96875-24.425782-58.839844-6.4375-15.445312-12.964843-13.359374-17.832031-13.601562-4.617187-.230469-9.902343-.277344-15.1875-.277344-5.28125 0-13.867187 1.980469-21.132812 9.917969-7.261719 7.933594-27.730469 27.101563-27.730469 66.105469s28.394531 76.683594 32.355469 81.972656c3.960937 5.289062 55.878906 85.328125 135.367187 119.648438 18.90625 8.171874 33.664063 13.042968 45.175782 16.695312 18.984374 6.03125 36.253906 5.179688 49.910156 3.140625 15.226562-2.277344 46.878906-19.171875 53.488281-37.679687 6.601563-18.511719 6.601563-34.375 4.617187-37.683594-1.976562-3.304688-7.261718-5.285156-15.183593-9.253906zm0 0" fill-rule="evenodd"/>
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
