import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
// import { PokeApp } from './PokeApp'
import { store } from './store'
import { TodoApp } from './TodoApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PokeApp /> */}
      <TodoApp />
    </Provider>
  </React.StrictMode>
)
