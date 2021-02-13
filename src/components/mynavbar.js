import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Link from "react-router-dom/Link";

class MyNavbar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		  searchQuery: null
		};
	  }

	render(){
		return(
			<Navbar bg="light" expand="lg">
				<Navbar.Collapse id="basic-navbar-nav">
					<Navbar.Brand as={Link} to="">React App</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Nav className="mr-auto">
						<Nav.Link as={Link} to="house">House</Nav.Link>
						<Nav.Link as={Link} to="bootstrap">Bootstrap</Nav.Link>
					</Nav>
					<Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={e => this.setState({searchQuery: e.target.value})} />
						<Button as={Link} to={`search?q=${this.state.searchQuery}`} variant="outline-success">Search</Button>
					</Form>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default MyNavbar