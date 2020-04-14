import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Logo from './logo.svg';
import './App.css';
import About from './components/About';
import Menu from './components/Menu';
import MenuCard from './components/MenuCard';
import Header from './components/Header';
import './Animate.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Menu/>
					<Switch>
						<Route exact path='/' render={
							props =>
							<div>
								<Header />
								
                
							</div>
							} />
						<Route exact path='/about' component={About} />
					
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;