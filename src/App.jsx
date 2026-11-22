import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  return (
    <div className="contenedor-principal">
      
      {/* Header */}
      <div className="header">
        <img 
          src="/foto_cv.jpeg"
          alt="Mi foto" 
          className="foto-perfil"
        />
        <h1>Evis Amponsah Omane</h1>
        <h2>Estudiante de DAM</h2>
        <p>📧 evisamponsah2@gmail.com | 📱 604-996-637 | 📍 Zaragoza</p>
      </div>

      <div className="columnas-contenido">
        <div className="columna-principal">
          {/* Sobre Mí */}
          <div className="seccion">
            <h2 className="titulo-seccion">Sobre Mí</h2>
            <p>Estudiante de Desarrollo de Aplicaciones Multiplataforma en formación (2º DAM) especializando en desarrollo móvil (Kotlin/Android), frontend web (React) y backend (Java, SQL). Enfocado en el aprendizaje práctico, la resolución eficiente de problemas y el desarrollo de soluciones tecnológicas sólidas.</p>
          </div>

          {/* Habilidades */}
          <div className="seccion">
            <h2 className="titulo-seccion">Habilidades</h2>
            <div className="lista-habilidades">
              <div className="habilidad">HTML</div>
              <div className="habilidad">CSS</div>
              <div className="habilidad">Java</div>
              <div className="habilidad">React</div>
              <div className="habilidad">SQL</div>
            </div>
          </div>

          {/* Idiomas */}
          <div className='seccion'>
            <h2 className="titulo-seccion"> Idiomas </h2>
            <div className="lista-idiomas">
              <div className="idioma">
                Español     <span>Nivel: Nativo</span>
              </div>
              <div className="idioma">
                Inglés <span>Nivel: Avanzado</span>
              </div>
            </div>
          </div>

          {/* Certificaciones */}
          <div className="seccion">
            <h2 className="titulo-seccion">Certificaciones</h2>

            <div className="item-experiencia">
              <h3>Oracle Academy – Database Design & Database Programming with SQL</h3>
              <p className="periodo">2025 - 2026</p>
            </div>

            <div className="item-experiencia">
              <h3>Oracle Academy – Java Foundations / Java Programming</h3>
              <p className="periodo">2025 - 2026</p>
            </div>
          </div>
        </div>

        <div className="columna-secundaria">
          {/* Mis proyectos */}
          <div className="seccion">
            <h2 className="titulo-seccion">Proyectos Destacados</h2>

            <div className="item-experiencia">
              <p className="proyecto">Proyecto Videojuego DAM</p>
              <p className="periodo">2026 - Actualidad</p>
              <p>Diseño y desarrollo de un videojuego multiplataforma inspirado en Pokémon utilizando Godot y C# para la lógica del cliente. Implementación de una API backend en GoLang para la autenticación de usuarios y gestión de clasificaciones en tiempo real, conectada a una base de datos relacional PostgreSQL bajo control de versiones con Git y GitHub.</p>
            </div>

            <div className="item-experiencia">
              <p className="proyecto">Proyecto BlackJack</p>
              <p className="periodo">2025 - 2026</p>
              <p>Diseño y desarrollo de un motor lógico completo para el juego de Blackjack en Java aplicando los principios de la Programación Orientada a Objetos (POO). Implementación de jerarquías de clases, encapsulamiento, herencia y polimorfismo para modelar la baraja, las cartas, los jugadores y las reglas de apuesta, gestionando colecciones dinámicas y control de excepciones en consola.</p>
            </div>
          </div>

          {/* Educación */}
          <div className="seccion">
            <h2 className="titulo-seccion">Educación</h2>

            <div className="item-experiencia">
              <h3>Bachillerato</h3>
              <p className="empresa">Colegio Santo Domingo de Silos</p>
              <p className="periodo">2023-2025</p>
            </div>

            <div className="item-experiencia">
              <h3>Formacion Profesional</h3>
              <p className="empresa">CPIFP Los Enlaces</p>
              <p className="periodo">2025-Actualmente</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App
