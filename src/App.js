import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Toolbar from './components/Toolbar/Toolbar';
import FooterSmall from './components/Footer/FooterSmall';
import Home from './components/Pages/Home';
import Reservations from './components/Pages/Reservations';
import NotFound from './components/Pages/NotFound';


import './sass/main.scss';

function App() {
	return (
		<div className="App">
			<Router>
			<Toolbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/home" component={Home} />
					<Route path="/reservations" component={Reservations} />
					<Route component={NotFound} />
				</Switch>
			</Router>
			<FooterSmall />
    	</div>
  	);
}

export default App;
