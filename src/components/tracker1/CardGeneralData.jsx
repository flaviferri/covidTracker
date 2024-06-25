import "./cardgeneraldata.scss"
import {useState, useEffect} from "react"
import {getGeneralData} from "../../services/useApi"

const CardGeneralData = () => {
    const [generalData, setData] = useState([])
    useEffect(()=>{
        getGeneralData().then(jsonGeneralData => {
            setData(jsonGeneralData)
        });
    }, [])
    
  return (
    <div className="cardgeneral">
        <div className="card">
            <div><img src="../../../public/images/icons/covid-blue.svg" alt=""/></div>
            <div>
                <h4>Total Confirmed</h4>
                <h3>{generalData.cases}</h3>
            </div>
        </div>
        <div className="card">
            <div><img src="../../../public/images/icons/covid-green.svg" alt=""/></div>
            <div>
                <h4>Total Recovered</h4>
                <h3>{generalData.recovered}</h3>
            </div>
        </div>
        <div className="card">
            <div><img src="../../../public/images/icons/covid-orange.svg" alt=""/></div>
            <div>
                <h4>Total Deaths</h4>
                <h3>{generalData.deaths}</h3>
            </div>
        </div>
        <div className="card">
            <div><img src="../../../public/images/icons/covid-red.svg" alt=""/></div>
            <div>
                <h4>New Deaths</h4>
                <h3>{generalData.deathsPerOneMillion}</h3>
            </div>
        </div>
        <div className="card">
            <div><img src="../../../public/images/icons/call.svg" alt=""/></div>
            <div>
                <h4>Help Line No.</h4>
                <h3>198</h3>
            </div>
        </div>
    </div>
  )
}

export default CardGeneralData