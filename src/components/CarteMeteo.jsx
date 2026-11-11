import useFetch from '../hook/useFetch'
import { useFavoris } from '../context/FavorisContext'

function CarteMeteo({ ville }) {
    const { villeAimer, basculerAime } = useFavoris()
    const { donnees, chargement, error } = useFetch(`https://api.open-meteo.com/v1/forecast?latitude=${ville.latitude}&longitude=${ville.longitude}&current=temperature_2m,weather_code`)

    return (
        <div>
            <h2>{ville.name}: {ville.country}</h2>
            {chargement && <p>Chargement…</p>}
            {error && <p>Erreur : {error}</p>}
            {donnees?.current && <p>Température : {donnees.current.temperature_2m} {donnees.current_units.temperature_2m}</p>}
            <button
                onClick={() => basculerAime(ville)}
                className={villeAimer.some((v) => v.id === ville.id) ? "aime" : ""}
            >♥</button>
        </div>
    )
}
export default CarteMeteo