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
			<form class="p-2 js-task-form" action="https://echo.htmlacademy.ru" method="POST" onSubmit={e => {e.preventDefault();}}>
    	<input class="form-control border-0 rounded-0 shadow-none js-task-input" type="text"
    	placeholder="What needs to be done?" aria-label="Write your task" name="task" autocomplete="off" onKeyUp={createTodo}>
    	</input>
    	</form>
			<ul className="list-group js-tasks-list">
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
