import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon/thunks'

export const PokeApp = () => {
  const dispatch = useDispatch()
  const { isLoading, page, pokemons } = useSelector(state => state.pokemon)
  useEffect(() => {
    dispatch(getPokemons())
  }, [])

  return (
    <>
      <h1>PokeApi - Learning Redux</h1>
      <hr />

      {
        isLoading
          ? (<span>Loading...</span>)
          : (
            <ul>
              {
                pokemons.map((pokemon, i) => (
                  <li key={i}>
                    <h1>{pokemon.name}</h1>
                  </li>
                ))
              }
            </ul>
            )
      }

      <button
        onClick={() => dispatch(getPokemons(page))}
      >
        Next
      </button>
    </>
  )
}
