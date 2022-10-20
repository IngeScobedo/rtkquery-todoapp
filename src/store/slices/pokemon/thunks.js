import { setPokemons, startLoadingPokemons } from './pokemonSlice'

export const getPokemons = (page = 0) => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons())

    // TODO: hace peticion http
    const res = await fetch(url)
    const data = await res.json()
    dispatch(setPokemons({ pokemons: data.results }))
  }
}
