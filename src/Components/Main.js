import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TransactionDetails from './TransactionDetails';
import DragDropFunction from './DragDropFunction';

class Main extends Component {
	render(){
		return(
			<Router>
				<div className="container">
					<div className="row">
						<div className="col-md-3">
							<div className="sidenav">
								<Link exact to="/transaction-details">Transaction Details</Link>
								<Link to="/dragdrop-function">Load Money</Link>
							</div>
						</div>
						<div className="col-md-9 pull-right">
							<Route exact path="/transaction-details" component={TransactionDetails}>
							</Route>
							<Route exact path="/dragdrop-function" component={DragDropFunction}>
							</Route>
						</div>
					</div>
				</div>
			</Router>
		)
	}
}

export default Main;