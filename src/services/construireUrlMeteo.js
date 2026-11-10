import useFetch from '../hook/useFetch'
function construireUrlMeteo({latitude,longitude,param}){
    const url  = `https://api.open-meteo.com/v1/forecast ? latitude=${latitude} & longitude=-${longitude} & current=${param.join(",")}`
    return useFetch(url)
}

export default construireUrlMeteo

//https://api.open-meteo.com/v1/forecast ? latitude=45.50 & longitude=-73.57 & current=temperature_2m,weather_code
//└────────── l'adresse ───────────────┘ ↑ └──────────────── les paramètres (nom=valeur) ─────────────────────────┘
//                                      le ? commence les paramètres, le & les sépare