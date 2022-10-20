import { useState } from 'react'
import { useGetTodoByIdQuery } from './store/apis/todosApi'

export const TodoApp = () => {
//   const { data: todos, isLoading } = useGetTodosQuery()

  const [todoId, setTodoId] = useState(1)
  const { data: todo, isLoading } = useGetTodoByIdQuery(todoId)

  const nextTodo = () => {
    setTodoId(todoId + 1)
  }

  const prevTodo = () => {
    setTodoId(todoId - 1)
  }

  return (
    <>
      <h1>PokeApi - Learning Redux</h1>
      <hr />

      {
        isLoading
          ? (<span>Loading...</span>)
          : (
            <>
              <pre>{JSON.stringify(todo)}</pre>
              <button onClick={prevTodo}>
                Prev todo
              </button>
              <button onClick={nextTodo}>
                Next todo
              </button>
            </>
            )
      }

      {/* <ul>
              {
                todos.map((todo, i) => (
                  <li key={i}>
                    <p>
                      <strong>{todo.completed ? 'DONE' : 'PENDING'}: </strong>
                      <span>{todo.title}</span>
                    </p>
                  </li>
                ))
              }
            </ul> */}
    </>
  )
}
