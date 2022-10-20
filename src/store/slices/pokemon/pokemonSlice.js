import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  page: 0,
  pokemons: [],
  isLoading: false
}

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true
    },
    setPokemons: (state, action) => {
      state.isLoading = false
      state.pokemons = action.payload.pokemons
      state.page = action.payload.page
    }
  }
})

export const { setPokemons, startLoadingPokemons } = pokemonSlice.actions

export default pokemonSlice.reducer
