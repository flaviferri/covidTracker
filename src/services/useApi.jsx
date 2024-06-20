import {useState, useEffect} from "react"



const useApi = (url) =>{
    const [data, setData] = useState(null)
    //const [error, setError] = useState(null)

     useEffect(()=>{ 
        const getData = async() =>{
            try{
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error (`Error! status: ${response.status}`);
                }
                const json_data = await response.json();
                setData(json_data); 
    
            }catch(error){
             // setError(error.message);
                console.error(`Error fetching data: ${error}`);
            }
        }
        getData(url);
    }, [url]);
    return{data}; // return{data,error};

}
export default useApi;