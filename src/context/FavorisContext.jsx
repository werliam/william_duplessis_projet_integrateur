import { createContext, useContext } from 'react'
import useLocalStorage from '../hook/useLocalStorage'
const FavorisContext = createContext(null)


export function FavorisProvider({ children }) {
    const [villeAimer, setVilleAimer] = useLocalStorage('villeAimer', [])


    function basculerAime(ville) {
        setVilleAimer((vieuxTabAimer) =>
            vieuxTabAimer.some((v) => v.id === ville.id)
                ? vieuxTabAimer.filter((v) => v.id !== ville.id)
                : [...vieuxTabAimer, { id: ville.id, name: ville.name, country: ville.country, latitude: ville.latitude, longitude: ville.longitude }]
        )
    }


    return (
        <FavorisContext.Provider value={{ villeAimer, basculerAime }}>
            {children}
        </FavorisContext.Provider>
    )
}


export function useFavoris() {
    const contexte = useContext(FavorisContext)
    if (!contexte) throw new Error("useFavoris doit être dans un FavorisProvider")
    return contexte
}