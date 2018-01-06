import React from 'react';
import { Route, Link } from 'react-router-dom'
import Welcome from '../welcome'
import Game from '../game'

export const App = () => (
	<div>
		<header>
			<Link to="/">Home</Link>
		</header>
		<main>
			<Route exact path="/" component={Welcome} />
			<Route exact path="/game" component={Game} />
		</main>
	</div>
)
