import { useState, useEffect } from "react";

function useLocalStorage(cle, valeurInitiale) {
  const [valeurs, setValeur] = useState(() => {
    const sauvegarde = localStorage.getItem(cle);
    return sauvegarde !== null ? JSON.parse(sauvegarde) : valeurInitiale;
  });

  useEffect(() => {
    localStorage.setItem(cle, JSON.stringify(valeurs));
  }, [cle, valeurs]);

  return [valeurs, setValeur];

}
export default useLocalStorage