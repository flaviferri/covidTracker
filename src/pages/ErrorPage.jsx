import { useRouteError,Link } from "react-router-dom"

const ErrorPage = () => {
    const error= useRouteError();
  return (
    <main>
        <div className="error">
            <img src="https://www.tntech.edu/covid19/images/buttons/report-covid-icon.png" alt="image 404" />
            <h1>Oopsss!</h1>
            <p>This link doesn't exist. Please return to home or another site</p>
            <p>Page <i>{error.statusText || error.message}</i></p>
            <Link to="/"> <button type="button" className="buttonError">Back to Home</button></Link>
        </div>
    </main>
  )
}

export default ErrorPage