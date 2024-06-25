import { countriesUrl, baseUrl, allUrl } from "../config/urls";

export const getCountriesData = async() =>{
    try{
        const response = await fetch(countriesUrl);
        if(!response.ok){
            throw new Error (`Error! status: ${response.status}`);
        }
            const jsonData = await response.json();
            return jsonData
    
        }
    catch(error){
            console.error(`Error fetching data: ${error}`);
            return null
        }
}

export const getGeneralData = async() =>{
    try{
        const response = await fetch(allUrl);
        if(!response.ok){
            throw new Error (`Error! status: ${response.status}`);
        }
            const jsonData = await response.json();
            return jsonData
    
        }
    catch(error){
            console.error(`Error fetching data: ${error}`);
            return null
        }
}

