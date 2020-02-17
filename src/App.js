import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'

import Pages from './components/Pages/Pages';
import Toolbar from './components/Layout/Toolbar/Toolbar';
import ScrollToTop from './components/Pages/ScrollToTop';

import './sass/main.scss';
import { animateScroll } from 'react-scroll';

function App() {
	return (
		<div className="App">
			<Router onUpdate={() => animateScroll.scrollToTop()}>
				<ScrollToTop>
					<Toolbar />
					<Pages />
				</ScrollToTop>
			</Router>
			
    	</div>
  	);
}

export default App;
