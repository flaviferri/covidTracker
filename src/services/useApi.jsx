import {useState, useEffect} from "react"

const useApi = (url) =>{
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

     useEffect(()=>{ 
        const getData = async(url) =>{
            try{
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error (`Error! status: ${response.status}`);
                }
                const json_data = await response.json();
                setData(json_data); // Actualiza el estados de los datos por los obtenidos
    
            }catch(error){
              setError(error.message);
                console.error(`Error fetching data: ${error}`);
            }
        }
        getData(url);
    }, [url]);
    return{data,error};

}
export default useApi;