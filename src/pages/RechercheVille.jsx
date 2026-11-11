import { useState } from 'react'
import { Link } from 'react-router'
import useFetch from '../hook/useFetch'
import useDebounce from '../hook/useDebounce'
import { useFavoris } from '../context/FavorisContext'
function RechercheVille() {

    const { villeAimer, basculerAime } = useFavoris()
    const [recherche, setRecherche] = useState("")
    const rechercheValide = recherche.trim().length >= 2
    const rechercheRetardee = useDebounce(recherche, 500)
    const { donnees, chargement, error } = useFetch(rechercheValide ? `https://geocoding-api.open-meteo.com/v1/search?name=${rechercheRetardee}&count=5&language=fr` : null)

    return <>
        <h1>RechercheVille</h1>
        <form onSubmit={(e) => e.preventDefault()} >
            <input value={recherche} type='text' onChange={(e) => setRecherche(e.target.value)} />
            {recherche !== "" && !rechercheValide && <p>Tape au moins 2 lettres</p>}
        </form>
        {chargement && <p>Chargement…</p>}
        {error && <p>Erreur : {error}</p>}

        {donnees?.results && (
            <ul>
                {donnees.results.map((ville) => (
                    <li key={ville.id}>
                        <Link to={`/ville/${ville.id}?latitude=${ville.latitude}&longitude=${ville.longitude}&name=${ville.name}&country=${ville.country}`}>
                            {ville.name}, {ville.admin1} ({ville.country})
                        </Link>
                        <button
                            onClick={() => basculerAime(ville)}
                            className={villeAimer.some((v) => v.id === ville.id) ? "aime" : ""}
                        >
                            ♥
                        </button>
                    </li>
                ))}
            </ul >
        )}
    </>
}
export default RechercheVille