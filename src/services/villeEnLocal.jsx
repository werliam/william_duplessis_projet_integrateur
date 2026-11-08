import construireUrlMeteo from './construireUrlMeteo'
function villeEnLocal(ville) {
    const url= `https://geocoding-api.open-meteo.com/v1/search?name=${ville}&count=5&language=fr`
        return useFetch(url)
    
}
export default villeEnLocal



// let { donnees, chargement, error } = `https://geocoding-api.open-meteo.com/v1/search?name=${ville}&count=1&language=fr`
//      if (!chargement||error){
//         return { donnees, chargement, error }
//     }
//     const latitude = donnees.results[0].latitude
//     const longitude = donnees.results[0].longitude
//     let { donneescm, chargementCM, errorCM }= construireUrlMeteo(latitude,longitude,param)
//     if (!chargementCM||errorCM){
//         return { donneescm, chargementCM, errorCM }
//     }
//     return{ donneescm, chargementCM, errorCM }
