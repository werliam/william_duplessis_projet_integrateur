import construireUrlMeteo from '../services/construireUrlMeteo'
import { useState } from 'react'

function RechercheVille() {
    const [recherche, setRecherche] = useState("")
    const { donnees, chargement, error } = useRechercheVille(recherche)

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
                        <Link to={"/ville/" + ville.id}>{ville.name}</Link>
                    </li>
                ))}
            </ul>
        )}

    </>
}
export default RechercheVille