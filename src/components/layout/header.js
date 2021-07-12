import React, {PureComponent} from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Modals from '../ModalComponents';

const Header = () => {

		return <>
				<header className="site-header">
					<div id="main-header" className="main-header header-sticky">
						<div className="inner-header container clearfix">
							<div className="logo">
								<img src="images/dreamPilot_150.png" alt="dreamPilot logo"/>
							</div>
							<nav className="main-navigation text-left hidden-xs hidden-sm">
								<ul>
									<li><Link to="/">Home</Link></li>
									<li><Link to="/about">About Us</Link></li>
									<li><Link to="/listings">Listings</Link></li>
									<li><Link to="/registration">Register</Link></li>
								</ul>
							</nav>
						</div>
					</div>
				</header>
  </>
};



export default Header;