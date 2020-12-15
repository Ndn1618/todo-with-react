import { useState } from 'react'
import './App.css'

function App () {


	const createTodo = e => {

		if (e.keyCode === 13) {

			if (e.target.value.trim() === '') {
				e.target.value = ''
				alert('Enter task!')
				return
			}

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
			<form className="p-2" action="https://echo.htmlacademy.ru" method="POST" onSubmit={e => {e.preventDefault();}}>
    	<input className="form-control border-0 rounded-0 shadow-none" type="text"
    	placeholder="What needs to be done?" aria-label="Write your task" name="task" autoComplete="off" onKeyUp={createTodo}>
    	</input>
    	</form>
			<ul className="list-group">
				{
					todos.map(todo => {
						return (
							<li key={todo.id} className={todo.completed ? 'completed-todo task-list-item list-group-item border-left-0 border-right-0 rounded-0 d-flex align-items-center justify-content-between' : 'task-list-item list-group-item border-left-0 border-right-0 rounded-0 d-flex align-items-center justify-content-between'}>
							<div className="d-flex align-items-center">
								<input onClick={completeTodo.bind(null, todo)} className="mr-2" type="checkbox" name="todo-completed-checkbox" aria-label="Check for completed task">
								</input>
								<span className="task-content ml-2">{todo.title}</span>
							</div>

							<button className="remove-button btn text-danger shadow-none py-0 flex-shrink-0" type="button" onClick={deleteTodo.bind(null, todo)}>Remove</button>
						</li>
						)
					})
				}
			</ul>
		</>
	)
}

export default App
