import React from "react";
import { Helmet } from 'react-helmet'
import MyNavbar from './components/mynavbar.js'

 function PageBS() {
	 return (
		 <>
			<Helmet>
          		<title>Bootstrap - My First React App</title>
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" crossorigin/>
        	</Helmet>
			<MyNavbar></MyNavbar>
			<h2 className="display-3">Bootstrap</h2>
			<h3>what a nice bootstrap page, I sure hope the search bar works</h3>
		 </>
	   
	 );
 }

 export default PageBS;