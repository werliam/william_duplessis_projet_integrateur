import { useState, useEffect } from "react"

function useDebounce(valeur, delai) {
    const [valeurRetardee, setValeurRetardee] = useState(valeur)
    useEffect(() => {
        const id = setTimeout(() => setValeurRetardee(valeur), delai)
        return () => clearTimeout(id)
    }, [valeur, delai])
    return valeurRetardee

}
export default useDebounce