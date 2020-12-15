import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
	<React.StrictMode>
	<h1 className="sr-only">Write your ToDos</h1>

	<section className="py-5">
	<div className="container">
	<h2 className="task-heading h1 text-center text-danger">todos</h2>
	<div className="todos-wrapper border rounded overflow-hidden shadow">

	<main>
		<App />
	</main>

	</div>
	</div>
	</section>
	</React.StrictMode>,
	document.getElementById('root')
	)
