import { useState } from 'react'
import './App.css'

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

	const completeTodo = (todo) => {
		todo.completed = !todo.completed
		setTodos([...todos])
	}

	return (
		<>
			<input type="text" onKeyUp={createTodo}/>
			<ul>
				{
					todos.map(todo => {
						return (
							<li key={todo.id} className={todo.completed ? 'completed-todo' : null}>
								<button onClick={completeTodo.bind(null, todo)}>Completed</button>
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
