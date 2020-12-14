import { useState } from 'react'

function App () {

	const [todos, setTodos] = useState([])

	const createTodo = e => {

		if (e.keyCode === 13) {

			const newTodo = {
				id: todos.length + 1,
				title: e.target.value.trim(),
				completed: false,
			}

			setTodos([...todos, newTodo])

			e.target.value = null
		}
	}

	const deleteTodo = (todo) => setTodos(todos.filter(t => t.id !== todo.id))

	return (
		<>
			<input type="text" onKeyUp={createTodo}/>
			<ul>
				{
					todos.map(todo => {
						return (
							<li key={todo.id}>
								<span>{todo.title} {todo.id}</span>
								<button onClick={deleteTodo.bind(null, todo)}>X</button>
							</li>
						)
					})
				}
			</ul>

		</>
	)
}

export default App
