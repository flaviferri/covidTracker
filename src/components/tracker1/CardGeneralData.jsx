import "./cardgeneraldata.scss"
import UseApi from "../../services/useApi"
import { all_url } from "../../config/urls"

const Carddata = () => {
    const { data, error } = UseApi(all_url);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    
  return (
    <div className="cardgeneral">
        <div className="card">
            <div><img src="images/icons/covid-blue.svg" alt=""/></div>
            <div>
                <h4>Total Confirmed</h4>
                <h3>{data.cases}</h3>
            </div>
        </div>
        <div className="card">
            <div><img src="images/icons/covid-green.svg" alt=""/></div>
            <div>
                <h4>Total Recovered</h4>
                <h3>{data.recovered}</h3>
            </div>
        </div>
        <div className="card">
            <div><img src="images/icons/covid-orange.svg" alt=""/></div>
            <div>
                <h4>Total Deaths</h4>
                <h3>{data.deaths}</h3>
            </div>
        </div>
        <div className="card">
            <div><img src="images/icons/covid-red.svg" alt=""/></div>
            <div>
                <h4>New Deaths</h4>
                <h3>{data.deathsPerOneMillion}</h3>
            </div>
        </div>
        <div className="card">
            <div><img src="images/icons/call.svg" alt=""/></div>
            <div>
                <h4>Help Line No.</h4>
                <h3>198</h3>
            </div>
        </div>
    </div>
  )
}

export default Carddata