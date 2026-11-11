import { useFavoris } from '../context/FavorisContext'
import CarteMeteo from '../components/CarteMeteo'


function TableauDeBord() {
    const { villeAimer, basculerAime } = useFavoris()

    return <>
        {villeAimer ?villeAimer.map((ville) => <CarteMeteo key={ville.id} ville={ville} />):null}
    </>



}
export default TableauDeBord

