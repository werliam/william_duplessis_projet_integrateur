import { useState ,useEffect } from "react";

function useFetch(url){
  const [donnees, setDonnees] = useState(null);
  const [chargement, setChargement] = useState(true);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    const controleur = new AbortController();
 
    async function charger() {
      setChargement(true);
      setError(null);
      try {
        const reponse = await fetch(url, { signal: controleur.signal });
        if (!reponse.ok) throw new Error("Réponse invalide du serveur");
        setDonnees(await reponse.json());
      } catch (e) {
        if (e.name !== "AbortError") setError(e.message);
      } finally {
        setChargement(false);
      }
    }
 
    charger();
    return () => controleur.abort();
  }, [url]);
 
  return { donnees, chargement, error };
}



export default useFetch