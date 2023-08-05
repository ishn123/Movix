import { useState } from "react"
import { fetchDataApi } from "../utils/api"
import { useEffect } from "react";

export default (endpoint)=>{
    const[data,setData] = useState(null);
    const[error,setError] = useState(null);
    const[loading,setLoading] = useState(null);
    useEffect(()=>{
        // setLoading("Loading.....");
        // setData(null);
        // setError(null);
        fetchDataApi(endpoint)
        .then(res=>{
            setLoading(false);
            setData(res);
        }
        ).catch(err=>{
            setLoading(false);
            setError("Something Went Wrong")
        })
    },[endpoint]);

    return {data,error,loading};
}