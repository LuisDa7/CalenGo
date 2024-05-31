export default function Main() {
  return (
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
        <article className="contenedorParaQuienes">
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
        </article>
      </section>
      <section className="precios">
        <h1>Precios</h1>
        <p>CalenGo es gratis para emprendedores, si buscas algo más completo para empresas medianas y grandes, puedes ver nuestros paquetes aquí</p>
        <article className="card">
          <article className="headerCard">
            <span class="title">Beginner</span>
            <span class="price">Free</span>
          </article>
          <p class="desc">Etiam ac convallis enim, eget euismod dolor.</p>
          <ul class="lists">
            <li class="list">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <span>Aenean quis</span>
            </li>
            <li class="list">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <span>Morbi semper</span>
            </li>
            <li class="list">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <span>Tristique enim nec</span>
            </li>
          </ul>
          <button type="button" class="empezar">Get Started</button>
        </article>
        <article className="card">
          <article className="headerCard">
            <span class="title">Pro</span>
            <span class="price">3.99$</span>
          </article>
          <p class="desc">Etiam ac convallis enim, eget euismod dolor.</p>
          <ul class="lists">
            <li class="list">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <span>Aenean quis</span>
            </li>
            <li class="list">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <span>Morbi semper</span>
            </li>
            <li class="list">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <span>Tristique enim nec</span>
            </li>
          </ul>
          <button type="button" class="empezar">Get Started</button>
        </article>
        <article className="card">
          <article className="headerCard">
            <span class="title">Business</span>
            <span class="price">10.99$</span>
          </article>
          <p class="desc">Etiam ac convallis enim, eget euismod dolor.</p>
          <ul class="lists">
            <li class="list">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <span>Aenean quis</span>
            </li>
            <li class="list">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <span>Morbi semper</span>
            </li>
            <li class="list">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <span>Tristique enim nec</span>
            </li>
          </ul>
          <button type="button" class="empezar">Get Started</button>
        </article>
      </section>
    </main>
  )
}