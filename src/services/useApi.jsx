import {useState, useEffect} from "react"

const useApi = (url) =>{
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(()=>{ 
        const fetchData = async() =>{
            try{
                const response = await fetch(url);
                if(!response.ok) {
                    throw new Error (`Error! status: ${response.status}`);
                }
                const result = await response.json();
                setData(result)
                setError(null);
            } catch (error) {
                setError(error.message);
                console.error(`Error fetching data: ${error}`);
            } 
        };
        fetchData();
    }, [url]);

    return{data,error};

}
export default useApi;