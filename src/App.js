import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Toolbar from './components/Layout/Toolbar/Toolbar';
import FooterSmall from './components/Layout/Footer/FooterSmall';
import Home from './components/Pages/Home/Home';
import Reservations from './components/Pages/Reservations';
import NotFound from './components/Pages/NotFound';
import FooterBig from './components/Layout/Footer/FooterBig';

import './sass/main.scss';

function App() {
	return (
		<div className="App">
			<Router>
				<Toolbar />
				<Switch>
					<Route path={process.env.PUBLIC_URL + "/"} exact component={Home} />
					<Route path={process.env.PUBLIC_URL + "/home"} component={Home} />
					<Route path={process.env.PUBLIC_URL + "/reservations"} component={Reservations} />
					<Route path={process.env.PUBLIC_URL} component={NotFound} />
				</Switch>
				<FooterBig />
			</Router>
			<FooterSmall />
    	</div>
  	);
}

export default App;
