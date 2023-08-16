
import { useState, useEffect } from "react"

export async function getData(id, direction, api_url = 'https://api.utdanning.no') {
  const mainEndpoint = api_url + '/sammenligning/main';
  const endpoint = api_url + '/sammenligning/arbeidsmarked';

  const idNames = {
    "uno_id2nus": "uno_id",
    "uno_id2nus_kortnavn": "uno_id",
    "uno_id2styrk08": "uno_id",
    "nus_kortnavn2styrk08": "nus_kortnavn",
    "nus2styrk08": "nus",
    "styrk082nus": "styrk08",
  }

  /**
   * 1. Load data from mapping endpoint
   */
  const url = `${endpoint}?${idNames[direction]}=${id}&retning=${direction}&vis_alt=true`
  const mapping = direction ? await(await fetch(url)).json() : null

  /**
   * 2. Load data from main endpoint
   */
  const main = (id.slice(0,2) === "y_" || id.slice(0,2) === "u_")
    ? await(await fetch(`${mainEndpoint}?uno_id=${id}&vis_alt=true`)).json()
    : null
  
  /**
   * 3. Add missing fields
   */
  const docs = mapping.response && mapping.response.docs
    ? mapping.response.docs.map(d => ({
        ...d,
        over_40: d.antall_personer - d.antall_40,
        other_experience: d.antall_personer - d.antall_13 - d.antall_710,
    }))
    : null

  const mappingData = mapping.response ? { ...mapping.response, docs } : null

  return { main: main ? main[id] : null, mapping: mappingData }
}

export function useData(unoId = "y_sykepleier", direction = "utdanning2yrke", api_url) {
  const [item, setItem] = useState()
  useEffect(() => {
    getData(unoId, direction).then(data => {
      setItem(data)
    })
  }, [unoId, direction])
  return item
}
