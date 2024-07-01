import UseApi from '../../services/useApi';
import { all_url } from '../../config/urls';
import "./trackerCovid.scss";

const TrackerFirst = () => {
    const { data, error } = UseApi(all_url);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <section>
            <h1 className="tittle">COVID-19 Tracker</h1>
            <div className="boxData">
                <ul>
                    <li className="data div1">
                        <h4>Total Case</h4>
                        <p>{data.cases}</p>
                        </li>
                    <li className="data div2">
                        <h4>Active Cases</h4>
                        <p>{data.active}</p>
                    </li>
                    <li className="data div3">
                    <h4>Recovered Cases</h4>
                        <p>{data.recovered}</p>
                    </li>
                    <li className="data div4">
                        <h4>Deaths Cases</h4>
                        <p>{data.deaths}</p>
                    </li>
                </ul>
            </div>
        </section>
        
    );
}

export default TrackerFirst;
