import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import Pages from './views/Pages';
import Toolbar from './layouts/Toolbar/Toolbar';
import ScrollToTop from './views/ScrollToTop';

import './assets/sass/main.scss';
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
