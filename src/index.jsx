import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
	<React.StrictMode>
	<h1 className="sr-only">Ckeck attendance of students</h1>

	<section className="py-5">
		<div className="container">
			<h2 className="attendance-heading h1 text-center text-danger">Attendance list</h2>
			<div className="attendance-wrapper border rounded overflow-hidden shadow">

				<main>
					<App />
				</main>

			</div>
		</div>
	</section>
	</React.StrictMode>,
	document.getElementById('root')
	)
