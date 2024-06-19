
/*faltan imports*/



const Homepage = () => {
    return (
      <div className="home"> {/* Esto es el contenedor principal para toda la página Home */}

        <header className="header">

          <nav className="navbar"> 
            <div className="navbar-brand"> 
              <img src="/public/images/logo.png" alt="Covimap Logo" className="logo" /> 
            </div>
            
            <div className="navbar-menu"> {/* Aquí ponemos los enlaces a otras partes del sitio */}
              <Link to="/" className="nav-link">Home</Link> {/* Enlace a la página principal */}
              <Link to="/prevention" className="nav-link">Prevention</Link> {/* Enlace a la página de prevención */}
              <Link to="/symptoms" className="nav-link">Symptoms</Link> {/* Enlace a la página de síntomas */}
              <Link to="/faq" className="nav-link">FAQ</Link> {/* Enlace a la página de preguntas frecuentes */}
              <Link to="/news" className="nav-link">News</Link> {/* Enlace a la página de noticias */}
            </div>
            <Link to="/tracker" className="tracker-button">Tracker</Link> {/* Enlace al rastreador, resaltado como un botón */}
          </nav>
          <div className="header-content"> {/* Aquí está el contenido principal de la cabecera */}
            <h1>Stay Home, And Prayer For Victim Of Corona virus</h1> {/* Este es el título principal */}
            <p> {/* Esto es una descripción debajo del título */}
              Hands can transfer the virus to your eyes, nose or mouth. Avoid touching your face to slow the spread. {/* Consejo sobre cómo prevenir la propagación del virus */}
            </p>
            <div className="header-stats"> {/* Aquí mostramos algunas estadísticas */}
              <img src="/path/to/flag.png" alt="Country Flag" className="country-flag" /> {/* Imagen de la bandera del país */}
              <div className="stat-value">977130</div> {/* Valor estadístico que se muestra al lado de la bandera */}
            </div>
          </div>
        </header>
  