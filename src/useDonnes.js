import {useEffect, useState}

export function useDonnees(url){
    const [data, setDate]=useState([]);
    const [loading, setLoading]= useState(false);
    const [error, setError] = useState("");

    async function lireDonnees(url){
        const response = await fetch(url);
        !response.ok ? setError("Erreur lors du listing !!!!!!") : setError("");
        return await response.json();
    }

    useEffect(()=>{
        setLoading(true);
        lireDonnees(url);
    },[url]);

    return {data,loading, error}
}