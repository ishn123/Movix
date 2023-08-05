const base_url = "https://api.themoviedb.org/3"
const api_key = import.meta.env.VITE_TMDB_API;

const headers = {
    Authorization:"bearer "+api_key
}

const fetchDataApi = async(endpoint,params)=>{
    let completeUrl = base_url+endpoint;
    if(params){
        completeUrl += "?"+new URLSearchParams(params);
    }
    return await fetch(completeUrl,{
        method:"GET",
        headers:headers,

    }).then(res=>res.json());
}

export {fetchDataApi};