import { useParams, useSearchParams } from 'react-router'
import CarteMeteo from '../components/CarteMeteo'

function Ville() {

    const { id } = useParams()
    const [params] = useSearchParams()

    const latitude = params.get("latitude")
    const longitude = params.get("longitude")
    const name = params.get("name")
    const country = params.get("country")

    const ville = { id: Number(id), name: name, country: country, latitude: Number(latitude), longitude: Number(longitude) }
    return <>

            <CarteMeteo key={ville.id} ville={ville} />
    

    </>
}
export default Ville
