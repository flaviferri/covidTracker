import CardData from "../components/tracker1/CardData";
import CardGeneralData from "../components/tracker1/CardGeneralData";
import SelectData from "../components/tracker1/SelectData";
import Worldmap from "../components/tracker1/Worldmap";

const Tracker1 = () =>{
    
    return(
        <article>
        <SelectData />
        <CardData />
        <Worldmap />
        <CardGeneralData />
        </article>
    )
};

export default Tracker1