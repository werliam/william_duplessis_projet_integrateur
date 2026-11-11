import { useFavoris } from '../context/FavorisContext'
import CarteMeteo from '../components/CarteMeteo'


function TableauDeBord() {
    const { villeAimer, basculerAime } = useFavoris()

    return <>
    {villeAimer.length===0? <h3>Pas de favoris actuellement. Cliquer sur Rechercheville</h3>:null}
        {villeAimer ?villeAimer.map((ville) => <CarteMeteo key={ville.id} ville={ville} />):null}
    </>



}
export default TableauDeBord

