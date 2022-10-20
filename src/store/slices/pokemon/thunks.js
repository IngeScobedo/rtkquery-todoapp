import { pokemonApi } from '../../../api/pokemonApi'
import { setPokemons, startLoadingPokemons } from './pokemonSlice'

export const getPokemons = (page = 0) => {
  const url = `/pokemon?limit=10&offset=${page * 10}`
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons())
    const { data } = await pokemonApi.get(url)
    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }))
  }
}
