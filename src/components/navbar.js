import React from "react";
import {Link } from "react-router-dom";
import './navbar.css';

class Navbar extends React.Component {
	render(){
		return(
			<div className="Navbar">
			{this.props.items.map((item, i) => {
				return(
					<NavbarItem item={item} key={i}/>
				);
			})}
			</div>
		);
	}
}

class NavbarItem extends React.Component{
	render(){
		return(
			<div>
				<Link to={this.props.item[1]}>
					<div className="NavbarItem">
						{this.props.item[0]}
					</div>
				</Link>
			</div>
		)
	}
}

export default Navbar;