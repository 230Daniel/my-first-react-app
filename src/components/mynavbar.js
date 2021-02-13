import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

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
					<Navbar.Brand href="bootstrap">Bootstrap Page</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Nav className="mr-auto">
						<Nav.Link href="home">Home</Nav.Link>
						<Nav.Link href="house">House</Nav.Link>
						<NavDropdown title="Dropdown" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={e => this.setState({searchQuery: e.target.value})} />
						<Button variant="outline-success" onClick={() => this.search()}>Search</Button>
					</Form>
				</Navbar.Collapse>
			</Navbar>
		);
	}

	search(){
		console.log(`Searched for ${this.state.searchQuery}`)
	}
}

export default MyNavbar