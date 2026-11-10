import { useState } from 'react'
import { Link } from 'react-router'
import useFetch from '../hook/useFetch'
import useTimeOute from '../hook/useTimeOute'

function RechercheVille() {
    const [recherche, setRecherche] = useState("")
    const { donnees, chargement, error } = useFetch(`https://geocoding-api.open-meteo.com/v1/search?name=${useTimeOute(recherche, 500)}&count=5&language=fr`)

    return <>
        <h1>RechercheVille</h1>
        <form onSubmit={() => envoyerville()} >
            <input value={recherche} type='text' onChange={(e) => setRecherche(e.target.value)} />
        </form>
        {chargement && <p>Chargement…</p>}
        {error && <p>Erreur : {error}</p>}
        {donnees?.results && (
            <ul>
                {donnees.results.map((ville) => (
                    <li key={ville.id}>
                        <Link to={`/ville/${ville.name}?lat=${ville.latitude}&lon=${ville.longitude}`}>
                            {ville.name}, {ville.admin1} ({ville.country})
                        </Link>
                    </li>
                ))}
            </ul>
        )}

    </>
}
export default RechercheVille