import React from "react";
import { Helmet } from 'react-helmet'
import MyNavbar from './components/mynavbar.js'

class PageSearch extends React.Component{
	render() {
		const query = new URLSearchParams(this.props.location.search);
		let q = query.get("q");
		 return (
			 <>
				<Helmet>
					  <title>Search - My First React App</title>
					<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" crossorigin/>
				</Helmet>
				<MyNavbar></MyNavbar>
				<h2 className="display-3">Search</h2>
				<h3>Sorry, no results for "{q}"</h3>
			 </>
		 );
	 }
}


 export default PageSearch;