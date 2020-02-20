import React, { Fragment } from 'react';

import { Route, Switch, withRouter} from 'react-router-dom';

import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from './Home/Home';
import Spa from './Spa/Spa';
import Sport from './Sport/Sport';
import Restaurant from './Restaurant/Restaurant';
import Reservations from './Reservations/Reservations';
import Business from './Business/Business';
import NotFound from './NotFound';
import FooterSmall from '../Layout/Footer/FooterSmall';
import FooterBig from '../Layout/Footer/FooterBig';

const Pages = ({location}) => {
    return (
        <Fragment>
            <TransitionGroup style={{position: 'relative'}}>
                <CSSTransition
                    key={location.key}
                    timeout={{ enter: 400, exit: 400 }}
                    classNames='fade'
                >
                <div className="route-section">
                    <Switch location={location}>
                        <Route path={process.env.PUBLIC_URL + "/home"} component={Home} />
                        <Route path={process.env.PUBLIC_URL + "/spa"} component={Spa} />
                        <Route path={process.env.PUBLIC_URL + "/sport"} component={Sport} />
                        <Route path={process.env.PUBLIC_URL + "/restaurant"} component={Restaurant} />
                        <Route path={process.env.PUBLIC_URL + "/business"} component={Business} />
                        <Route path={process.env.PUBLIC_URL + "/reservations"} component={Reservations} />
                        <Route path={process.env.PUBLIC_URL + "/"} component={Home} />
                        <Route path={process.env.PUBLIC_URL} component={NotFound} />
                    </Switch>
                    <FooterBig />
			        <FooterSmall />
                </div>
                </CSSTransition>
            </TransitionGroup>
        </Fragment>
    )
}

export default withRouter(Pages);
