import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { animateScroll } from 'react-scroll';

import Toolbar from './layouts/Toolbar/Toolbar';
import Pages from './views/Pages';
import ScrollToTop from './views/ScrollToTop';

import './assets/sass/main.scss';

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
