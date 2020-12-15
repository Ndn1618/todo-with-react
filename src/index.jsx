import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
	<React.StrictMode>
	<h1 class="sr-only">Write your ToDos</h1>

	<section class="py-5">
	<div class="container">
	<h2 class="task-heading h1 text-center text-danger">todos</h2>
	<div class="border w-50 mx-auto rounded overflow-hidden shadow">

	<main>
		<App />
	</main>

	<footer class="footer px-3 py-2 d-none align-items-center justify-content-between js-todos-footer">
	<span>
	<span class="js-remained-tasks"></span>
	items left
	</span>
	<div class="add-btns d-flex js-filter-buttons">
	<div class="d-flex align-items-center">
	<button class="btn-active btn py-1 mx-1 shadow-none js-show-all-button" type="button" active>All</button>
	<button class="btn-active btn shadow-none py-1 mx-1 js-show-active-button" type="button">Active</button>
	<button class="btn-active btn py-1 shadow-none mx-1 js-show-completed-button"
	type="button">Completed</button>
	</div>

	<button class="btn btn-link text-dark shadow-none js-clear-completed-btn" type="button">Clear
	completed</button>
	</div>
	</footer>
	</div>
	</div>
	</section>
	</React.StrictMode>,
	document.getElementById('root')
	)
